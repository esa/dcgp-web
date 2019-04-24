import styled from 'styled-components'
import PropTypes from 'prop-types'
import { up } from 'styled-breakpoints'

const Toolbar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 64px;
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px;

  ${up('sm')} {
    padding: 0 50px;
  }

  ${up('md')} {
    padding: 0 130px;
  }
`

Toolbar.propTypes = {
  children: PropTypes.any,
}

export default Toolbar
