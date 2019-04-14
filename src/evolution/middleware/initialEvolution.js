import { GET_INITIAL_EVOLUTION, sendWorkerMessage } from '../actions'
import { addPayload } from '../../utils/actions'
import { predictionRequest } from './predictions'
import {
  activeKernelsSelector,
  settingsSelector,
  constantsSelector,
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
    const constants = constantsSelector(state)

    store.dispatch(
      sendWorkerMessage(
        addPayload(action, {
          activeKernelIds,
          parameters,
          inputs,
          labels,
          constants,
        })
      )
    )

    predictionRequest(store)
    return
  }

  next(action)
}

export default handleInitialEvolution
