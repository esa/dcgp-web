import styled from 'styled-components'
import { LineChart } from 'recharts'

export const StyledLineChart = styled(LineChart)`
  .recharts-curve {
    stroke-width: 1px;
  }

  .recharts-line-dots circle {
    stroke: ${({ theme }) => theme.surface.regular};
    stroke-width: 2px;
  }

  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    stroke-width: 2px;
    stroke: ${({ theme }) => theme.text.subtle};
  }

  .recharts-cartesian-grid line {
    stroke: ${({ theme }) => theme.border.divider};
    stroke-dasharray: 3, 3;
  }

  .recharts-legend-item:last-child {
    margin-right: 0;
  }

  .recharts-legend-item-text {
    font-size: 14px;
    color: ${({ theme }) => theme.text.regular};
  }
`
