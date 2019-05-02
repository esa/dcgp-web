import { PAUSE_REQUEST, pauseEvolution } from '../actions'
import { isEvolvingSelector } from '../selectors'

export const handlePause = store => next => action => {
  next(action)

  if (action.type === PAUSE_REQUEST) {
    const isEvolving = isEvolvingSelector(store.getState())

    if (isEvolving) {
      store.dispatch(pauseEvolution())
    }
  }
}

export default handlePause
