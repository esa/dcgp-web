import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'
import {
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import { useRedux } from '../../../hooks'
import GridContainer from '../../../components/GridContainer'
import Divider from '../../../components/Divider'
import { dcgpSelector, chromosomeSelector } from '../../../evolution/selectors'
import {
  activeKernelsSelector,
  settingsSelector,
} from '../../../settings/selectors'
import { StyledLineChart } from './style'

const Plot = () => {
  const { getState } = useRedux()
  const state = getState()
  const { inputs, outputs, points, equation } = state.dataPoints
  const dcgp = dcgpSelector(state)
  const chromosome = chromosomeSelector(state)
  const activeKernelIds = activeKernelsSelector(state)
  const parameters = settingsSelector(state)

  const theme = useContext(ThemeContext)

  // const throttle = (func, limit) => {
  //   let inThrottle
  //   return function() {
  //     const args = arguments
  //     const context = this
  //     if (!inThrottle) {
  //       func.apply(context, args)
  //       inThrottle = true
  //       setTimeout(() => {
  //         inThrottle = false
  //       }, limit)
  //     }
  //   }
  // }

  let predictions

  const {
    seed,
    network: { rows, columns, arity, levelsBack },
  } = parameters

  // TODO: throttle prediction calculations
  if (dcgp.KernelSet && dcgp.Expression && chromosome) {
    // TODO: move to dcgp.worker.js
    const myKernelSet = new dcgp.KernelSet(activeKernelIds)
    const myExpression = new dcgp.Expression(
      inputs.length,
      outputs.length,
      rows,
      columns,
      levelsBack,
      arity,
      myKernelSet,
      seed
    )

    myExpression.setChromosome(chromosome)

    predictions = points.map(point => {
      const result = myExpression.getResult(inputs.map(input => point[input]))
      return result[0]
    })

    myKernelSet.destroy()
    myExpression.destroy()
  }

  const data = predictions
    ? points.map((point, i) => ({ ...point, prediction: predictions[i] }))
    : points

  return (
    <GridContainer span={2}>
      <div css="margin: 0 5px 0 0;">
        <ResponsiveContainer height={300}>
          <StyledLineChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <CartesianGrid />
            <XAxis dataKey={inputs[0]} type="number" />
            <YAxis />
            <Legend verticalAlign="top" height={36} />
            <Line
              name="labels"
              dataKey={outputs[0]}
              dot={{ fill: theme.primary, r: 4 }}
              stroke={theme.primary}
            />
            <Line
              name="predictions"
              dataKey="prediction"
              dot={{ fill: theme.secundary, r: 4 }}
              stroke={theme.secundary}
            />
          </StyledLineChart>
        </ResponsiveContainer>
      </div>
      <Divider css="margin: 15px 0;" />
      <p>
        Label equation: <InlineMath>{equation}</InlineMath>
      </p>
    </GridContainer>
  )
}

export default Plot
