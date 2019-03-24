import styled from 'styled-components'
import PropTypes from 'prop-types'

const Base = styled.svg.attrs(({ size }) => ({
  width: size,
  height: size,
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
}))`
  fill: currentColor;
`

Base.propTypes = {
  size: PropTypes.number,
}

Base.defaultProps = {
  size: 24,
}

export default Base
