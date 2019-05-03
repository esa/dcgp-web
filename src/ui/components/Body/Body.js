import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../../../styles/GlobalStyle'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Page from '../Page'
import Divider from '../Divider'
import { Dataset } from '../../../dataset'
import { Kernels, Network, Algorithm } from '../../../settings'
import { Evolution } from '../../../evolution'
import { Plot, Equations } from '../../../visualisation'

const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const Body = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <PageLayout>
        <Page>
          <Dataset />
          <div css="grid-column: full;">
            <Divider />
          </div>
          <Evolution />
          <Kernels />
          <Network />
          <Algorithm />
          <Plot />
          <Equations />
        </Page>
      </PageLayout>
      <Footer />
    </>
  )
}

export default Body
