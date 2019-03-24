import styled from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize as fade } from 'polished'

const CircleButton = styled.button`
  color: ${({ theme }) => theme.title};
  border-radius: 50%;
  background: none;
  background-color: ${({ theme }) => fade(0.93, theme.title)};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: ${({ padding }) => padding}px;
  transition: background-color 150ms ease-out;

  &:hover {
    background-color: ${({ theme }) => fade(0.9, theme.title)};
  }

  &:active {
    transition: background-color 80ms ease-out;
    background-color: ${({ theme }) => fade(0.95, theme.title)};
  }
`

CircleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  size: PropTypes.number,
  padding: PropTypes.number,
}

CircleButton.defaultProps = {
  size: 34,
  padding: 5,
}

export default CircleButton
