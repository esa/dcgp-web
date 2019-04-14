import styled from 'styled-components'
import { transparentize as fade } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input.attrs({ type: 'number' })`
  appearance: none;
  margin: 0 4px;
  color: ${({ theme }) => theme.title};
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  outline: none;
  font-size: inherit;
  text-align: center;
  width: 28px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.primary};
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: color 150ms ease;
  display: flex;

  &:active {
    transition: color 80ms ease-out;
    color: ${({ theme }) => fade(0.3, theme.primary)};
  }

  &[disabled] {
    color: ${({ theme }) => theme.text.subtle};
    cursor: default;

    &:active {
      color: ${({ theme }) => theme.text.subtle};
    }
  }
`
