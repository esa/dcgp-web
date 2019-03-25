import styled from 'styled-components'
import PropTypes from 'prop-types'

const GridContainer = styled.div`
  background-color: ${({ theme }) => theme.surface.regular};
  border-radius: 14px;
  padding: 20px 20px 30px;
  grid-column-end: span ${({ span }) => span};
`

GridContainer.propTypes = {
  span: PropTypes.number,
}

GridContainer.defaultProps = {
  span: 1,
}

export default GridContainer
