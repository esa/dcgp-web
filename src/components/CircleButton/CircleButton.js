import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize as fade } from 'polished'

const CircleButton = styled.button`
  color: ${({ theme }) => theme.title};
  border-radius: 50%;
  background: none;

  ${({ variant, theme }) => {
    if (variant === 'regular') {
      return css`
        background-color: ${fade(0.93, theme.title)};
      `
    } else if (variant === 'ghost') {
      return css`
        background-color: ${fade(1, theme.title)};
      `
    }
  }};

  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: ${({ padding }) => padding}px;
  transition: background-color 150ms ease-out;
  box-sizing: border-box;

  &:hover {
    ${({ variant, theme }) => {
      if (variant === 'regular') {
        return css`
          background-color: ${fade(0.9, theme.title)};
        `
      } else if (variant === 'ghost') {
        return css`
          background-color: ${fade(0.93, theme.title)};
        `
      }
    }};
  }

  &:active {
    transition: background-color 80ms ease-out;
    background-color: ${({ theme }) => fade(0.95, theme.title)};
  }
`

CircleButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  size: PropTypes.number,
  padding: PropTypes.number,
  variant: PropTypes.oneOf(['regular', 'ghost']),
}

CircleButton.defaultProps = {
  size: 34,
  padding: 5,
  variant: 'regular',
}

export default CircleButton
