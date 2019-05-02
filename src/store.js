import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer, rootEpic } from './root'
import middlewares from './middleware'

const epicMiddleware = createEpicMiddleware()

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(epicMiddleware, ...middlewares))
  )

  epicMiddleware.run(rootEpic)

  return store
}
