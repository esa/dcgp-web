import { START_EVOLUTION, getInitialEvolution } from '../../actions'
import { loop } from '../utils'

const handleStart = store => next => action => {
  if (action.type === START_EVOLUTION) {
    const { isEvolving, expression } = store.getState()

    if (!isEvolving) {
      next(action)

      if (!expression) {
        store.dispatch(getInitialEvolution())
      }

      loop(store, action)
    }

    return
  }

  next(action)
}

export default handleStart
