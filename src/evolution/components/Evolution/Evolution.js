import React from 'react'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import Controls from '../Controls'
import GridContainer from '../../../components/GridContainer'
import Divider from '../../../components/Divider'
import { useRedux } from '../../../hooks'
import { stepsSelector, isDoneSelector } from '../../selectors'
import Information from '../Information'

const StyledLineChart = styled(LineChart)`
  .recharts-curve {
    stroke: ${({ theme }) => theme.title};
    stroke-width: 2px;
  }

  .recharts-line-dots circle {
    stroke: none;
    fill: ${({ theme }) => theme.title};
  }

  .recharts-reference-line line {
    stroke-width: 2px;
    stroke: ${({ theme }) => theme.text.subtle};
    stroke-dasharray: none;
  }

  .recharts-cartesian-grid-horizontal line {
    stroke: ${({ theme }) => theme.border.divider};
    stroke-dasharray: 3, 3;

    &:nth-last-child(2) {
      stroke-width: 2px;
      stroke: rgba(0, 0, 0, 0);
    }

    &:nth-last-child(1) {
      stroke-width: 2px;
      stroke: ${({ theme }) => theme.text.subtle};
      stroke-dasharray: none;
    }
  }
`

const getData = (data, isDone) => {
  if (isDone) {
    return data.slice(0, data.length - 1)
  } else {
    return data
  }
}

const mapStateToProps = {
  steps: stepsSelector,
  isDone: isDoneSelector,
}

const Evolve = () => {
  const { steps, isDone } = useRedux(mapStateToProps)

  // remove lest entry from steps when done
  // because the log scale doesn't handle 0
  const data = getData(steps, isDone)

  return (
    <GridContainer>
      <Controls />
      <Divider />
      <Information />
      <div css="margin: 0 5px;">
        <ResponsiveContainer height={150}>
          <StyledLineChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <XAxis
              dataKey="step"
              type="number"
              domain={[0, dataMax => Math.max(dataMax, 1000)]}
              hide
            />
            <YAxis
              scale="log"
              domain={[dataMin => dataMin * 0.9, dataMax => dataMax * 1.1]}
              hide
            />
            <CartesianGrid vertical={false} />
            <ReferenceLine x={0} />
            <Line type="stepAfter" dataKey="loss" dot={false} />
          </StyledLineChart>
        </ResponsiveContainer>
      </div>
    </GridContainer>
  )
}

export default Evolve
