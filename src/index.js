import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import Theme from './style/Theme';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore(/* provide initial state if any */);

const page = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Theme>
        <App />
      </Theme>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(page, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
