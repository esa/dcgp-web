import styled from 'styled-components'
import IconBase from '../../icons/Base'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${IconBase} {
    cursor: pointer;
    user-select: none;
  }
`

export const Input = styled.input.attrs({ type: 'number' })`
  -webkit-appearance: none;
  margin: 0 4px;
  color: ${({ theme }) => theme.title};
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  font-size: inherit;
  text-align: center;
  width: 28px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
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
  transition: opacity 150ms ease;
  display: flex;

  &:active {
    transition: opacity 80ms ease-out;
    opacity: 0.7;
  }
`
