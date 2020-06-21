import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../../../styles/GlobalStyle'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Page from '../Page'
import { Kernels, Network, Algorithm } from '../../../settings'
import { Evolution } from '../../../evolution'
import { Plot, Equations } from '../../../visualisation'

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const Body = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <PageLayout>
        <Page>
          <Network />
          <Kernels />
          <Algorithm />
          <Evolution />
          <Equations />
          <Plot />
        </Page>
      </PageLayout>
      <Footer />
    </>
  )
}

export default Body
