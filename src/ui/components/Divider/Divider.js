import styled from 'styled-components'
import PropTypes from 'prop-types'

const Divider = styled.hr`
  display: block;
  height: auto;
  margin: 0;
  border-bottom: 0;
  border-left: 0;
  border-width: ${({ size }) => size}px;
  border-top-style: solid;
  border-right-style: solid;
  border-color: ${({ theme, variant }) => {
    if (variant === 'divider') return theme.border.divider
    if (variant === 'content') return theme.border.content
  }};
`

Divider.defaultProps = {
  size: 2,
  variant: 'divider',
}

Divider.propTypes = {
  size: PropTypes.number,
  variant: PropTypes.oneOf(['divider', 'content']),
}

export default Divider
