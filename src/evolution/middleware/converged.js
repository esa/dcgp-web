import { CONVERGED, pauseEvolutionRequest } from '../actions'

export const handleConverged = store => next => async action => {
  next(action)

  if (action.type === CONVERGED) {
    store.dispatch(pauseEvolutionRequest())
  }
}

export default handleConverged
