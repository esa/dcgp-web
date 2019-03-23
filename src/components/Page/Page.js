import PropTypes from 'prop-types'
import styled from 'styled-components'

const Page = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
`

Page.propType = {
  childern: PropTypes.node.isRequired,
}

export default Page
