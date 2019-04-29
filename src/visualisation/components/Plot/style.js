import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { LineChart } from 'recharts'
import unstyledGridContainer from '../../../ui/components/GridContainer'
import unstyledSelect from 'react-select'
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

export const GridContainer = styled(unstyledGridContainer)`
  grid-column-end: span 1;

  ${up('sm')} {
    grid-column-end: span 2;
  }
`

export const Select = styled(unstyledSelect).attrs({
  classNamePrefix: 'select',
})`
  & .select__control {
    border-radius: 1000px;
    border-color: rgba(0, 0, 0, 0);
    background-color: ${({ theme }) => fade(0.3, theme.background)};
    min-height: 24px;
    overflow: hidden;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    box-shadow: none;

    &:hover {
      border-color: rgba(0, 0, 0, 0);
    }
  }

  & .select__value-container {
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
  }

  & .select__indicator-separator {
    display: none;
  }

  & .select__input {
    color: ${({ theme }) => theme.title};
  }

  & .select__indicator.select__dropdown-indicator {
    background-color: rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.primary};
    padding: 6px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`
