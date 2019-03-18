import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Navigation from './Navigation'
import Footer from './Footer'
import Page from './Page'
import Evolve from '../dcgp/components/Evolve'

const routes = [
  { label: 'Evolution', path: '/evolve' },
  { label: 'Inspection', path: '/inspect' },
]

const Inspect = () => 'Inspect'

const Body = ({ location }) => {
  let routeIndex = routes.findIndex(route => route.path === location.pathname)
  if (routeIndex === -1) {
    routeIndex = 0
  }

  return (
    <>
      <GlobalStyle />
      {/* 64px is the height of the footer */}
      <main css="min-height: calc(100vh - 64px);">
        <Navigation
          routes={routes}
          routeIndex={routeIndex}
          handleMenuToggle={console.log}
        />
        <Page>
          <Switch>
            <Route exact path="/inspect" component={Inspect} />
            <Route component={Evolve} />
          </Switch>
        </Page>
      </main>
      <Footer />
    </>
  )
}

export default withRouter(Body)
