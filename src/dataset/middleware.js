import {
  CHANGE_DATASET,
  ADD_PREDICTION_SUBSCRIBER,
  setPredictionKeys,
} from './actions'
import { resetEvolution } from '../evolution/actions'
import { outputKeysSelector, inputKeysSelector } from './selectors'
import { generatePredictionKeys } from '../utils/string'

const dispatchSetPredictionKeys = store => {
  const state = store.getState()
  const inputKeys = inputKeysSelector(state)
  const outputKeys = outputKeysSelector(state)
  const predictionKeys = generatePredictionKeys(inputKeys, outputKeys)
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
