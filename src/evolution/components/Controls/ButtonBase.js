import React from 'react'
import styled from 'styled-components'

const Button = styled.div.attrs({ role: 'button' })`
  font-size: ${props => props.size ?? 32}px;
  color: ${({ theme }) => theme.title};
  cursor: pointer;
  outline: inherit;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconAnimation = styled.div`
  transition: 80ms ease-out;

  ${Button}:active & {
    transform: scale(0.9);
  }
`

export default function ButtonBase({ children, ...restProps }) {
  return <Button {...restProps}><IconAnimation>{children}</IconAnimation></Button>
}
