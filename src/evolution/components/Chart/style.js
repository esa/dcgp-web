import styled from 'styled-components'
import { LineChart as unstyledLineChart } from 'recharts'

export const LineChart = styled(unstyledLineChart)`
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
