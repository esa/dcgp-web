import styled from 'styled-components'
import { transparentize as fade } from 'polished'

export const SubHeader = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Input = styled.input.attrs({ type: 'number' })`
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
