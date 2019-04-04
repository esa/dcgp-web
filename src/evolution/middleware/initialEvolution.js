import { GET_INITIAL_EVOLUTION, sendWorkerMessage } from '../actions'
import { addPayload } from '../../utils/actions'
import { predictionRequest } from './predictions'
import {
  activeKernelsSelector,
  settingsSelector,
} from '../../settings/selectors'
import { inputsSelector, labelsSelector } from '../../dataset/selectors'

export const handleInitialEvolution = store => next => action => {
  if (action.type === GET_INITIAL_EVOLUTION) {
    next(action)
    const state = store.getState()

    const activeKernelIds = activeKernelsSelector(state)
    const parameters = settingsSelector(state)
    const inputs = inputsSelector(state)
    const labels = labelsSelector(state)

    store.dispatch(
      sendWorkerMessage(
        addPayload(action, {
          activeKernelIds,
          parameters,
          inputs,
          labels,
        })
      )
    )

    predictionRequest(store)
    return
  }

  next(action)
}

export default handleInitialEvolution
