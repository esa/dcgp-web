import { EVOLUTION_PROGRESS } from '../actions'
import { throttledPredictionRequest } from './predictions'
import { predictionsSubscribersSelector } from '../../dataset/selectors'
import { lossSelector, secondLastlossSelector } from '../selectors'

export const handleProgress = store => next => action => {
  if (action.type === EVOLUTION_PROGRESS) {
    const state = store.getState()

    const secondLastLoss = secondLastlossSelector(state)
    const lastLoss = lossSelector(state)
    const predicitionSubscribers = predictionsSubscribersSelector(state)

    if (secondLastLoss && secondLastLoss > lastLoss && predicitionSubscribers) {
      throttledPredictionRequest(store)
    }
  }

  next(action)
}

export default handleProgress
