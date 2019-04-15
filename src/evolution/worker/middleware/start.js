import { START_EVOLUTION, getInitialEvolution } from '../../actions'
import { setAlgorithm } from '../../../settings/actions'
import { loop } from '../utils'

const handleStart = store => next => action => {
  if (action.type === START_EVOLUTION) {
    const { isEvolving, expression } = store.getState()

    const algorithmId = action.payload.parameters.algorithm.id
    store.dispatch(setAlgorithm(algorithmId))

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
