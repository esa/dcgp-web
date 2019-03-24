import styled from 'styled-components'
import IconBase from '../../../icons/Base'

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 15px;
`

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.text.regular};

  &:last-child {
    margin-bottom: 0;
  }

  ${IconBase} {
    margin-right: 8px;
    color: ${({ theme, checked }) => (checked ? theme.primary : 'inherit')};
  }
`

export const Icon = styled.span`
  margin-right: 8px;
`
