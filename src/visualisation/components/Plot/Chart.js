import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'
import {
  Scatter,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import { ScatterChart, Circle } from './style'

const Chart = ({
  outputPoints,
  predictionPoints,
  selectedInput,
  selectedOutput,
}) => {
  const theme = useContext(ThemeContext)

  return (
    <div css="margin: 0 5px; position: relative; padding-bottom: 65%;">
      <div css="width: 100%; height: 100%; position: absolute;">
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <CartesianGrid />
            <XAxis
              dataKey={selectedInput}
              domain={['auto', 'auto']}
              type="number"
            />
            <YAxis width={45} dataKey={selectedOutput} />
            <Legend verticalAlign="top" height={36} />
            <Scatter
              name="labels"
              data={outputPoints}
              fill={theme.primary}
              shape={Circle}
              animationDuration={500}
              animationEasing="ease-out"
            />
            <Scatter
              name="predictions"
              data={predictionPoints}
              fill={theme.secondary}
              shape={Circle}
              animationDuration={500}
              animationEasing="ease-out"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

Chart.propTypes = {
  outputPoints: PropTypes.arrayOf(PropTypes.object).isRequired,
  predictionPoints: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedInput: PropTypes.string.isRequired,
  selectedOutput: PropTypes.string.isRequired,
}

export default memo(Chart)
