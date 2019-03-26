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
import Divider from '../../../components/Divider'
import { dcgpSelector, chromosomeSelector } from '../../../evolution/selectors'
import {
  inputKeysSelector,
  outputKeysSelector,
  pointsSelector,
  equationSelector,
} from '../../../dataset/selectors'
import {
  activeKernelsSelector,
  settingsSelector,
} from '../../../settings/selectors'
import { StyledLineChart, GridContainer } from './style'

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

const mapStateToProps = {
  inputs: inputKeysSelector,
  outputs: outputKeysSelector,
  points: pointsSelector,
  equation: equationSelector,
  dcgp: dcgpSelector,
  chromosome: chromosomeSelector,
  activeKernelIds: activeKernelsSelector,
  parameters: settingsSelector,
}

const Plot = () => {
  const {
    inputs,
    outputs,
    points,
    equation,
    dcgp,
    chromosome,
    activeKernelIds,
    parameters,
  } = useRedux(mapStateToProps)

  const theme = useContext(ThemeContext)

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
    <GridContainer>
      <div css="margin: 0 5px; position: relative; padding-bottom: 65%;">
        <div css="width: 100%; height: 100%; position: absolute;">
          <ResponsiveContainer>
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
                type="monotone"
                dataKey={outputs[0]}
                dot={{ fill: theme.primary, r: 4 }}
                stroke={theme.primary}
              />
              <Line
                name="predictions"
                dataKey="prediction"
                type="monotone"
                dot={{ fill: theme.secundary, r: 4 }}
                stroke={theme.secundary}
              />
            </StyledLineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Divider css="margin: 15px 0;" />
      {equation && (
        <p>
          Label equation: <InlineMath>{equation}</InlineMath>
        </p>
      )}
    </GridContainer>
  )
}

export default Plot
