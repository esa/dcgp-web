import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { LineChart } from 'recharts'
import unStyledGridContainer from '../../../components/GridContainer'
import { transparentize as fade } from 'polished'

export const StyledLineChart = styled(LineChart)`
  .recharts-curve {
    stroke-width: 1px;
  }

  .legend-item-0 path {
    stroke: ${({ theme }) => theme.primary};
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

export const GridContainer = styled(unStyledGridContainer)`
  grid-column-end: span 1;

  ${up('sm')} {
    grid-column-end: span 2;
  }
`

export const CopyButton = styled.button`
  color: ${({ theme }) => theme.primary};
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: color 150ms ease-out;
  box-sizing: border-box;
  -webkit-appearance: none;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    transition: color 80ms ease-out;
    color: ${({ theme }) => fade(0.3, theme.primary)};
  }
`
