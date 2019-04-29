import {
  STEP_EVOLUTION,
  START_EVOLUTION,
  LOSS_THRESHOLD,
  pauseEvolution,
  sendWorkerMessage,
} from '../actions'
import { addPayload } from '../../utils/actions'
import { currentStepSelector, lossSelector } from '../selectors'
import {
  activeKernelsSelector,
  settingsSelector,
  constantsSelector,
} from '../../settings/selectors'
import { inputsSelector, outputsSelector } from '../../dataset/selectors'

export const handlePlay = store => next => action => {
  if (action.type === STEP_EVOLUTION) {
    store.dispatch(pauseEvolution())
  }

  if (action.type === START_EVOLUTION || action.type === STEP_EVOLUTION) {
    const state = store.getState()
    const loss = lossSelector(state)

    if (loss !== null && loss <= LOSS_THRESHOLD) {
      return
    }

    next(action)

    const activeKernelIds = activeKernelsSelector(state)
    const parameters = settingsSelector(state)
    const currentStep = currentStepSelector(state)
    const inputs = inputsSelector(state)
    const outputs = outputsSelector(state)
    const constants = constantsSelector(state)

    store.dispatch(
      sendWorkerMessage(
        addPayload(action, {
          activeKernelIds,
          parameters,
          step: currentStep,
          inputs,
          outputs,
          constants,
        })
      )
    )

    return
  }

  next(action)
}

export default handlePlay
