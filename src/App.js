import React, { Component } from 'react';
import { css } from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom'; // react-router v4
import Navigation from './component/Navigation';
import Footer from './component/Footer';

const bodyStyle = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
`;

const Evolve = () => 'Evolve';
const Inspect = () => 'Inspect';
const Introduction = () => 'Introduction';

class App extends Component {
  routes = [
    { label: 'Introduction', path: '/' },
    { label: 'Evolution', path: '/evolve' },
    { label: 'Inspection', path: '/inspect' },
  ];
  state = {
    routeIndex: 0,
  };

  render() {
    const { location } = this.props;

    const routeIndex = this.routes.findIndex(
      route => route.path === location.pathname
    );

    return (
      <>
        {/* 64px is the height of the footercc */}
        <div css="min-height: calc(100vh - 64px);">
          <Navigation
            routes={this.routes}
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
  }
}

export default withRouter(App);
