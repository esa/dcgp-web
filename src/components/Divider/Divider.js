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
  border-color: ${({ theme }) => theme.border.divider};
`

Divider.defaultProps = {
  size: 2,
}

Divider.propTypes = {
  size: PropTypes.number,
}

export default Divider
