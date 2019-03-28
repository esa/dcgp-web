import React, { useContext, useMemo } from 'react'
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
import { usePredictions } from '../../../dataset/hooks'
import Divider from '../../../components/Divider'
import {
  inputKeysSelector,
  outputKeysSelector,
  pointsSelector,
  equationSelector,
} from '../../../dataset/selectors'
import { StyledLineChart, GridContainer } from './style'

const mapStateToProps = {
  inputs: inputKeysSelector,
  outputs: outputKeysSelector,
  points: pointsSelector,
  equation: equationSelector,
}

const Plot = () => {
  const { inputs, outputs, points, equation } = useRedux(mapStateToProps)

  const { predictions, keys: predictionKeys } = usePredictions()

  const data = useMemo(() => {
    if (predictions.length) {
      return points.map((point, i) => ({
        ...point,
        ...predictions[i],
      }))
    } else {
      return points
    }
  }, [predictions, points])

  const theme = useContext(ThemeContext)

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
              <YAxis width={45} />
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
                dataKey={predictionKeys[0]}
                type="monotone"
                dot={{ fill: theme.secundary, r: 4 }}
                stroke={theme.secundary}
                animationDuration={500}
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
