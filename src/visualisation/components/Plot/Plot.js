import React, { useContext, useMemo, useRef } from 'react'
import copy from 'copy-to-clipboard'
import { ThemeContext } from 'styled-components'
import 'katex/dist/katex.min.css'
import { BlockMath } from 'react-katex'
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
import Divider from '../../../ui/components/Divider'
import {
  inputKeysSelector,
  outputKeysSelector,
  pointsSelector,
  equationSelector,
  predictionEquationsSelector,
} from '../../../dataset/selectors'
import { StyledLineChart, GridContainer, CopyButton } from './style'

const mapStateToProps = {
  inputs: inputKeysSelector,
  outputs: outputKeysSelector,
  points: pointsSelector,
  equation: equationSelector,
  predictionEquations: predictionEquationsSelector,
}

const Plot = () => {
  const copyButton = useRef(null)

  const { inputs, outputs, points, equation, predictionEquations } = useRedux(
    mapStateToProps
  )

  const handleCopy = () => {
    if (predictionEquations.length) {
      copy(predictionEquations[0])
    }
  }

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
              <XAxis
                dataKey={inputs[0]}
                domain={['auto', 'auto']}
                type="number"
              />
              <YAxis width={45} />
              <Legend verticalAlign="top" height={36} />
              <Line
                name="labels"
                type="monotone"
                dataKey={outputs[0]}
                dot={{ fill: theme.primary, r: 4 }}
                stroke="transparent"
                animationDuration={0}
              />
              <Line
                name="predictions"
                dataKey={predictionKeys[0]}
                type="monotone"
                dot={{ r: 0 }}
                stroke={theme.secundary}
                animationDuration={500}
              />
            </StyledLineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Divider css="margin: 15px 0;" />
      {equation && (
        <>
          <div css="display: flex; margin-bottom: 15px;">
            <span css="flex-grow: 1;">Label equation:</span>
          </div>
          <div css="overflow-x: auto; overflow-y: hidden;">
            <BlockMath>{equation}</BlockMath>
          </div>
        </>
      )}
      {predictionEquations.length > 0 && (
        <>
          <div css="display: flex; margin: 30px 0 15px;">
            <span css="flex-grow: 1;">Prediction equation:</span>
            <CopyButton ref={copyButton} onClick={handleCopy}>
              Copy LaTeX
            </CopyButton>
          </div>
          <div css="overflow-x: auto; overflow-y: hidden;">
            <BlockMath>{predictionEquations[0]}</BlockMath>
          </div>
        </>
      )}
    </GridContainer>
  )
}

export default Plot
