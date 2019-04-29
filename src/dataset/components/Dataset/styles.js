import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

export const Item = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  line-height: 2.4;
  background-color: transparent;
  color: inherit;
  appearance: none;
  border: none;
  outline: none;
`
