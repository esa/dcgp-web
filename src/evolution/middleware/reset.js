import {
  RESET_REQUEST,
  resetEvolution,
  evolutionConvergedReset,
} from '../actions'

export const handleReset = store => next => action => {
  next(action)

  if (action.type === RESET_REQUEST) {
    store.dispatch(resetEvolution())
    store.dispatch(evolutionConvergedReset())
  }
}

export default handleReset
