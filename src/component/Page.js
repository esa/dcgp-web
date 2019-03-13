import PropTypes from 'prop-types'
import styled from 'styled-components'

const Page = styled.article`
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  padding-top: 50px;
  padding-bottom: 50px;
`

Page.propType = {
  childern: PropTypes.node.isRequired,
}

export default Page
