import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { css } from 'styled-components';
import Navigation from './component/Navigation';
import Footer from './component/Footer';

const bodyStyle = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
`;

const routes = [
  { label: 'Introduction', path: '/' },
  { label: 'Evolution', path: '/evolve' },
  { label: 'Inspection', path: '/inspect' },
];

const Evolve = () => 'Evolve';
const Inspect = () => 'Inspect';
const Introduction = () => 'Introduction';

const Body = ({ location }) => {
  const routeIndex = routes.findIndex(
    route => route.path === location.pathname
  );

  return (
    <>
      {/* 64px is the height of the footer */}
      <div css="min-height: calc(100vh - 64px);">
        <Navigation
          routes={routes}
          routeIndex={routeIndex}
          handleMenuToggle={console.log}
        />
        <div css={bodyStyle}>
          <Switch>
            <Route exact path="/evolve" component={Evolve} />
            <Route exact path="/inspect" component={Inspect} />
            <Route component={Introduction} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Body);
