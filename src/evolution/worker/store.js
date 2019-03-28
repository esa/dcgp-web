/* eslint-env worker */
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import middlewares from './middleware'

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(...middlewares))
  )

  return store
}
