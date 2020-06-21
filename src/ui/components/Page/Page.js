import PropTypes from 'prop-types'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

const Page = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: [full-start] 1fr [full-end];
  grid-template-rows: auto;
  grid-gap: 20px;

  ${up('sm')} {
    grid-template-columns: [full-start] repeat(2, 1fr) [full-end];
    padding-left: 50px;
    padding-right: 50px;
  }

  ${up('md')} {
    grid-gap: 30px;
    padding-left: 130px;
    padding-right: 130px;
  }

  ${up('lg')} {
    grid-template-columns: [full-start] repeat(4, 1fr) [full-end];
    width: 100%;
  }
`

Page.propType = {
  children: PropTypes.node.isRequired,
}

export default Page
