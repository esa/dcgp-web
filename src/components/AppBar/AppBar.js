import PropTypes from 'prop-types'
import styled from 'styled-components'

const AppBar = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.border.content};
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
`

AppBar.propTypes = {
  children: PropTypes.any,
}

export default AppBar
