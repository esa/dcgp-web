import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { ScatterChart as unstyledScatterChart } from 'recharts'
import unstyledGridContainer from '../../../ui/components/GridContainer'
import unstyledSelect from 'react-select'
import { transparentize as fade, mix } from 'polished'

export const ScatterChart = styled(unstyledScatterChart)`
  .recharts-curve {
    stroke-width: 1px;
  }

  .recharts-default-legend path.recharts-symbols {
    transform: translate(16px, 16px) scale(0.8);
  }

  /* .recharts-scatter-symbol circle {
    mix-blend-mode: exclusion;
  } */

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
  min-width: 40%;

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

  & .select__input,
  & .select__single-value {
    color: ${({ theme }) => theme.title};
  }

  & .select__menu {
    background-color: ${({ theme }) =>
      mix(0.5, theme.surface.regular, theme.surface.selected)};
  }

  & .select__option {
    color: ${({ theme }) => theme.title};
    border-bottom: 1px dashed ${({ theme }) => theme.border.content};
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 100ms ease-out;
    cursor: pointer;

    &:first-of-type {
      border-top: 1px dashed ${({ theme }) => theme.border.content};
    }

    &:hover {
      background-color: ${({ theme }) => fade(0.7, theme.surface.regular)};
    }
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

export const Grow = styled.div`
  flex-grow: 1;
`

export const Bold = styled.b`
  font-size: 17px;
  font-weight: 600;
  margin-right: 0.25em;
  flex-grow: 1;
`

export const Circle = ({ cx, x, y, cy, fill }) => (
  <circle r={3} cx={cx || x} cy={cy || y} fill={fill} />
)
