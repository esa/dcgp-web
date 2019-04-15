import { EVOLUTION_PROGRESS } from '../actions'
import { setConstant } from '../../settings/actions'
import { throttledPredictionRequest } from './predictions'
import { predictionsSubscribersSelector } from '../../dataset/selectors'
import { lossSelector, secondLastlossSelector } from '../selectors'

export const handleProgress = store => next => action => {
  if (action.type === EVOLUTION_PROGRESS) {
    const state = store.getState()

    if (action.payload.constants) {
      store.dispatch(setConstant(action.payload.constants))
    }

    const secondLastLoss = secondLastlossSelector(state)
    const lastLoss = lossSelector(state)
    const predicitionSubscribers = predictionsSubscribersSelector(state)

    const shouldCallPredictions =
      (secondLastLoss === null || secondLastLoss > lastLoss) &&
      predicitionSubscribers

    if (shouldCallPredictions) {
      throttledPredictionRequest(store)
    }
  }

  next(action)
}

export default handleProgress
