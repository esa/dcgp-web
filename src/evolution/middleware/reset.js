import { RESET_REQUEST, resetEvolution } from '../actions'

export const handleReset = store => next => action => {
  next(action)

  if (action.type === RESET_REQUEST) {
    store.dispatch(resetEvolution())
  }
}

export default handleReset
