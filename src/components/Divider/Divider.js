import styled from 'styled-components'

const Divider = styled.hr`
  display: block;
  height: auto;
  margin: 0;
  border-bottom: 0;
  border-left: 0;
  border-width: 2px;
  border-top-style: solid;
  border-right-style: solid;
  border-color: ${({ theme }) => theme.border.divider};
`

export default Divider
