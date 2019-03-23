import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  color: ${({ theme }) => theme.text.subtle};
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.66;
  margin: 0;
`

const Footer = ({ className, children, ...restProps }) => (
  <footer className={className} {...restProps}>
    <Text>
      Copyright © {new Date().getFullYear()} European Space Agency. All rights
      reserved.
    </Text>
  </footer>
)

export default styled(Footer)`
  background-color: ${({ theme }) => theme.surface.regular};
  height: 64px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
