import styled from 'styled-components'
import { hiDPI } from 'polished'

const GridContainer = styled.div`
  background-color: ${({ theme }) => theme.surface.regular};
  border-radius: 14px;
  padding: 20px 20px 30px;
  min-width: 0;
  box-shadow: 0 12px 50px -8px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.08);

  ${hiDPI(2)} {
    border-width: 0.5px
  }
`

export default GridContainer
