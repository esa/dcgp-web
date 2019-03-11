import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducer';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer, // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware()
      // ... other middlewares ...
    )
  );

  return store;
}
