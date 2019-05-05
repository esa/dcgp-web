import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer, rootEpic } from './root'
import middlewares from './middleware'

const epicMiddleware = createEpicMiddleware()

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(epicMiddleware, ...middlewares))
  )

  epicMiddleware.run(rootEpic)

  return store
}
