import React from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Theme from './style/Theme';
import Body from './Body';

const store = configureStore(/* provide initial state if any */);

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Theme>
        <Body />
      </Theme>
    </HashRouter>
  </Provider>
);

export default App;
