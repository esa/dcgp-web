import React, { useState, useCallback } from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Page from '../Page'
import Menu from '../Menu'
import Divider from '../Divider'
import { Dataset } from '../../dataset'
import { Kernels, Network, Algorithm } from '../../settings'
import { Evolution } from '../../evolution'
import { Plot } from '../../visualisation'
import { up } from 'styled-breakpoints'

import styled from 'styled-components'

const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const PageBody = styled.div`
  width: 100%;
  transition: margin 300ms ease-out;
  margin-left: -260px;

  ${up('lg')} {
    margin-left: ${({ isOpen }) => (isOpen ? 0 : -260)}px;
  }
`

const Body = () => {
  const [isOpen, setMenu] = useState(false)
  const handleMenuToggle = useCallback(() => {
    setMenu(prev => !prev)
  })

  return (
    <>
      <GlobalStyle />
      <Navigation handleMenuToggle={handleMenuToggle} />
      <PageLayout>
        <Menu isOpen={isOpen} />
        <PageBody isOpen={isOpen}>
          <Page isOpen={isOpen}>
            <Dataset />
            <div css="grid-column: full;">
              <Divider />
            </div>
            <Evolution />
            <Kernels />
            <Network />
            <Algorithm />
            <Plot />
          </Page>
        </PageBody>
      </PageLayout>
      <Footer />
    </>
  )
}

export default Body
