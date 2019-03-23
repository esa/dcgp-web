import styled from 'styled-components'
import PropTypes from 'prop-types'

const Toolbar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
`

Toolbar.propTypes = {
  children: PropTypes.any,
}

export default Toolbar
