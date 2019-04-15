import {
  STEP_EVOLUTION,
  evolutionProgress,
  LOSS_THRESHOLD,
  doneEvolution,
} from '../../actions'
import { algorithmsById, setAlgorithm } from '../../../settings/actions'
import { step } from '../utils'

const handleStep = store => next => action => {
  if (action.type === STEP_EVOLUTION) {
    next(action)
    const { expression, step: currentStep } = store.getState()

    const algorithmId = action.payload.parameters.algorithm.id
    store.dispatch(setAlgorithm(algorithmId))

    const { maxSteps } = algorithmsById[algorithmId]

    const result = step(action.payload, expression, algorithmId)

    store.dispatch(
      evolutionProgress({
        ...result,
        step: currentStep + maxSteps,
      })
    )

    if (result.loss <= LOSS_THRESHOLD) {
      store.dispatch(doneEvolution())
    }

    return
  }

  next(action)
}

export default handleStep
