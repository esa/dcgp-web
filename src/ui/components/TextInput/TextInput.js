import styled from 'styled-components'
import { transparentize as fade } from 'polished'

const TextInput = styled.input.attrs({ type: 'text' })`
  flex: 1;
  appearance: none;
  color: ${({ theme }) => theme.title};
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  outline: none;
  font-size: inherit;
  transition: color 150ms ease;
  padding: 2px;
  border-bottom: 1px dotted ${({ theme }) => theme.border.dividerOpacity};
  border-radius: 0;
  transition: border 100ms ease-out;
  min-width: 100px;
  width: 100%;

  &:hover {
    border-bottom-color: ${({ theme }) => fade(0.75, theme.title)};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => fade(0.6, theme.title)};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &[disabled] {
    color: ${({ theme }) => fade(0.5, theme.title)};

    &:hover {
      border-bottom-color: ${({ theme }) => theme.border.dividerOpacity};
    }
  }
`

export default TextInput
