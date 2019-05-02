import {
  STEP_REQUEST,
  START_REQUEST,
  startEvolution,
  stepEvolution,
} from '../actions'
import { LOSS_THRESHOLD } from '../../dcgpProxy/constants'
import { lossSelector } from '../selectors'
import {
  activeKernelsSelector,
  currrentAlgorithmSelector,
  constantsSelector,
} from '../../settings/selectors'
import { inputsSelector, outputsSelector } from '../../dataset/selectors'

export const handlePlay = store => next => action => {
  next(action)

  if (action.type === START_REQUEST || action.type === STEP_REQUEST) {
    const state = store.getState()
    const loss = lossSelector(state)

    if (loss !== null && loss <= LOSS_THRESHOLD) {
      return
    }

    const kernelIds = activeKernelsSelector(state)
    const algorithm = currrentAlgorithmSelector(state)
    const inputs = inputsSelector(state)
    const outputs = outputsSelector(state)
    const constants = constantsSelector(state)

    const newAction =
      action.type === START_REQUEST ? startEvolution : stepEvolution

    store.dispatch(
      newAction({
        kernelIds,
        algorithm,
        inputs,
        outputs,
        constants,
      })
    )
  }
}

export default handlePlay
