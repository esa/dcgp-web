import styled from 'styled-components'

export const Heading = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 600;
`

export const Table = styled.div`
  display: flex;
  font-size: 18px;
  overflow-x: auto;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.text.regular};
`

export const Column = styled.div`
  flex: 1 1 auto;
  margin-right: 30px;
`

export const Cell = styled.div`
  margin-bottom: ${({ row }) => (row === 0 || row === 3 ? 20 : 8)}px;
  ${({ column }) => column === 0 && 'font-weight: 600;'};
  display: flex;
  height: 24px;
  align-items: center;
`
