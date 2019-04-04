import {
  CHANGE_DATASET,
  ADD_PREDICTION_SUBSCRIBER,
  setPredictionKeys,
} from './actions'
import { resetEvolution } from '../evolution/actions'
import { outputKeysSelector } from './selectors'

const dispatchSetPredictionKeys = store => {
  const state = store.getState()
  const outputKeys = outputKeysSelector(state)
  // TODO: ensure that the prediction keys are unique.
  // Symbol(x) doesnt work because it cannot be transfered over web workers
  // Making the keys unique on the main thread and keeping the keys seperated
  // on the web worker might work.
  const predictionKeys = outputKeys.map(key => key + '_PREDICTION')

  store.dispatch(setPredictionKeys(predictionKeys))
}

export const handleDatasetChange = store => next => action => {
  next(action)

  if (action.type === ADD_PREDICTION_SUBSCRIBER) {
    dispatchSetPredictionKeys(store)
  }

  if (action.type === CHANGE_DATASET) {
    dispatchSetPredictionKeys(store)
    store.dispatch(resetEvolution())
  }
}

export default [handleDatasetChange]
