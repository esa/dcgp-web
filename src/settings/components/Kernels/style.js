import styled from 'styled-components'
import { Row as unStyledRow } from '../List'
import IconBase from '../../../icons/Base'

export const Row = styled(unStyledRow)`
  cursor: pointer;

  ${IconBase} {
    margin-right: 8px;
    user-select: none;
    color: ${({ theme, checked }) => (checked ? theme.primary : 'inherit')};
  }
`

export const Icon = styled.span`
  margin-right: 8px;
`
