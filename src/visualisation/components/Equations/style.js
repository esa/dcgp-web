import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { transparentize as fade } from 'polished'
import unstyledGridContainer from '../../../ui/components/GridContainer'

export const GridContainer = styled(unstyledGridContainer)`
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
