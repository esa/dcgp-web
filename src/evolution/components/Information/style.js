import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 15px;
`

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 1.3;
`

export const Bold = styled.b`
  font-size: 18px;
  margin-right: 4px;
  flex-grow: 1;
`

export const Label = styled.span`
  flex-grow: 1;
  margin-right: 4px;
`

export const Icon = styled.span`
  color: ${({ theme, color }) => {
    if (color === 'warning') return theme.orange
    if (color === 'error') return theme.red
  }};
  display: flex;
`

export const TabularNumbers = styled.span`
  font-feature-settings: 'tnum' 1;
`
