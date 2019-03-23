import React from 'react'
import configureStore from '../../store'
import { Provider } from 'react-redux'
import Theme from '../../styles/Theme'
import Body from '../Body'

const store = configureStore(/* provide initial state if any */)

const App = () => (
  <Provider store={store}>
    <Theme>
      <Body />
    </Theme>
  </Provider>
)

export default App
