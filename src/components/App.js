import React from 'react'
import configureStore from '../store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Theme from '../styles/Theme'
import Body from './Body'

const store = configureStore(/* provide initial state if any */)

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Theme>
        <Body />
      </Theme>
    </HashRouter>
  </Provider>
)

export default App
