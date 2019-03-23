import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Page from '../Page'
import Divider from '../Divider'
import Dataset from '../../dataset/components/Dataset'
import Settings from '../../settings/components/Settings'
import Evolution from '../../evolution/components/Evolution'

const Body = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation handleMenuToggle={console.log} />
      <Page>
        <Dataset />
        <Divider />
        <Settings />
        <Evolution />
      </Page>
      <Footer />
    </>
  )
}

export default Body
