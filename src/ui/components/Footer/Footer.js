import React from 'react'
import styled from 'styled-components'

import { setInterFontSizeAndSpacing } from '../../../utils/font'

const Text = styled.p`
  color: ${({ theme }) => theme.text.subtle};
  text-align: center;
  ${setInterFontSizeAndSpacing(10)};
  font-weight: 500;
  line-height: 1.66;
  margin: 0;
`

const StyledFooter = styled.footer`
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default function Footer({ className, children, ...restProps }) {
  return (
    <StyledFooter className={className} {...restProps}>
      <Text>
        Copyright © {new Date().getFullYear()} European Space Agency.{' '}
        <span css="display: inline-block;">All rights reserved.</span>
      </Text>
    </StyledFooter>
  )
}

