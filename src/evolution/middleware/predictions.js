import { sendWorkerMessage } from '../actions'
import throttle from '../../utils/throttle'
import { inputsSelector, inputLabelsSelector } from '../../dataset/selectors'
import { constantsSelector } from '../../settings/selectors'
import { calcPredictions, CALC_PREDICTIONS } from '../../dataset/actions'

export const predictionRequest = store => {
  const state = store.getState()

  const inputs = inputsSelector(state)
  const inputLabels = inputLabelsSelector(state)
  const constants = constantsSelector(state)

  store.dispatch(
    calcPredictions({
      inputs,
      inputLabels,
      constants,
    })
  )
}

export const throttledPredictionRequest = throttle(store => {
  predictionRequest(store)
}, Math.round(1000 / 2))

const handleCalcPredictions = store => next => action => {
  if (action.type === CALC_PREDICTIONS) {
    store.dispatch(sendWorkerMessage(action))
  }

  next(action)
}

export default handleCalcPredictions
