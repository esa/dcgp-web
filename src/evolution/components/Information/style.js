import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 15px;
`

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 1.7;
`

export const Bold = styled.b`
  font-size: 18px;
  margin-right: 0.25em;
  flex-grow: 1;
`

export const Icon = styled.span`
  color: ${({ theme }) => theme.orange};
  margin: 0 8px;
`
