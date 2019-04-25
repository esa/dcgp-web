import styled from 'styled-components'
import { transparentize as fade } from 'polished'

export const Input = styled.input.attrs({ type: 'text' })`
  flex-grow: 1;
  appearance: none;
  margin: 0 15px;
  color: ${({ theme }) => theme.title};
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  outline: none;
  font-size: inherit;
  width: 28px;
  transition: color 150ms ease;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &[disabled] {
    color: ${({ theme }) => fade(0.5, theme.title)};
  }
`
