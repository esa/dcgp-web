import PropTypes from 'prop-types'
import styled from 'styled-components'

const Page = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  padding: 50px 20px;
`

Page.propType = {
  childern: PropTypes.node.isRequired,
}

export default Page
