import { CHANGE_DATASET } from './actions'
import { resetEvolution } from '../evolution/actions'

export const handleDatasetChange = store => next => action => {
  next(action)

  if (action.type === CHANGE_DATASET) {
    store.dispatch(resetEvolution())
  }
}

export default [handleDatasetChange]
