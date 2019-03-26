import styled from 'styled-components'

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
  color: ${({ theme }) => theme.text.regular};

  &:last-child {
    margin-bottom: 0;
  }
`
