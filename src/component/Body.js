import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Page from './Page';
import Evolve from './Evolve';

const routes = [
  { label: 'Introduction', path: '/' },
  { label: 'Evolution', path: '/evolve' },
  { label: 'Inspection', path: '/inspect' },
];

const Inspect = () => 'Inspect';
const Introduction = () => 'Introduction';

const Body = ({ location }) => {
  const routeIndex = routes.findIndex(
    route => route.path === location.pathname
  );

  return (
    <>
      {/* 64px is the height of the footer */}
      <main css="min-height: calc(100vh - 64px);">
        <Navigation
          routes={routes}
          routeIndex={routeIndex}
          handleMenuToggle={console.log}
        />
        <Page>
          <Switch>
            <Route exact path="/evolve" component={Evolve} />
            <Route exact path="/inspect" component={Inspect} />
            <Route component={Introduction} />
          </Switch>
        </Page>
      </main>
      <Footer />
    </>
  );
};

export default withRouter(Body);
