import styled, { css } from 'styled-components'

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
  transition: opacity 80ms ease-out;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  &:last-child {
    margin-bottom: 0;
  }
`
