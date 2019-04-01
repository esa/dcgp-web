/* eslint-env worker */
import {
  SET_DCGP_INSTANCE,
  setDcgpInstance,
  START_EVOLUTION,
  RESET_EVOLUTION,
  INITIAL_EVOLUTION,
  STEP_EVOLUTION,
  LOSS_THRESHOLD,
  doneEvolution,
  evolutionProgress,
  DONE_EVOLUTION,
  EVOLUTION_PROGRESS,
  setInitialEvolution,
} from '../actions'
import { CALC_PREDICTIONS, setPredictionPoints } from '../../dataset/actions'
import { addPayload } from '../../utils/actions'
import { step, loop, createExpression, getInitialResult } from './utils'
import throttle from '../../utils/throttle'

const throttledPostMessage = throttle(message => {
  postMessage(message)
}, Math.round(1000 / 15))

export const handleExpression = store => next => action => {
  const { type } = action

  if (type === SET_DCGP_INSTANCE) {
    const { payload: dcgp } = action
    next(action)

    postMessage(setDcgpInstance({ module: dcgp.module }))

    return
  }

  if (type === INITIAL_EVOLUTION) {
    const { instance: dcgp } = store.getState()
    const expression = createExpression(action.payload, dcgp)

    next(addPayload(action, { expression }))

    const initialResult = getInitialResult(action.payload, expression, dcgp)

    postMessage(addPayload(action, initialResult))

    return
  }

  if (type === EVOLUTION_PROGRESS) {
    const { payload: result } = action
    const { hasReset } = store.getState()

    if (!hasReset) {
      next(action)

      if (action.meta && action.meta.throttle) {
        if (result.loss <= LOSS_THRESHOLD) {
          postMessage(action)

          store.dispatch(doneEvolution())
        } else {
          throttledPostMessage(action)
        }
      } else {
        postMessage(action)
      }
    }

    return
  }

  if (type === CALC_PREDICTIONS) {
    next(action)

    const { inputs, predictionKeys, chromosome } = action.payload
    const { expression } = store.getState()

    if (!expression || !inputs || !predictionKeys) {
      return
    }

    let currentChromosome

    if (chromosome) {
      currentChromosome = expression.getChromosome()
      expression.setChromosome(chromosome)
    }

    const predictions = inputs.map(point =>
      expression
        .getResult(point)
        .reduce((prev, cur, i) => ({ ...prev, [predictionKeys[i]]: cur }), {})
    )

    if (chromosome) {
      expression.setChromosome(currentChromosome)
    }

    postMessage(setPredictionPoints(predictions))

    return
  }

  next(action)
}

export const handleControls = store => next => action => {
  const { type } = action

  if (type === START_EVOLUTION) {
    const { isEvolving, expression } = store.getState()

    if (!isEvolving) {
      next(action)

      if (!expression) {
        store.dispatch(setInitialEvolution())
      }

      loop(store, action)
    }

    return
  }

  if (type === RESET_EVOLUTION) {
    const { expression } = store.getState()

    if (expression) {
      expression.destroy()
    }
  }

  if (type === STEP_EVOLUTION) {
    next(action)
    const { expression, instance: dcgp, step: currentStep } = store.getState()
    const { maxGenerations } = action.payload.parameters.algorithm

    const result = step(action.payload, expression, dcgp)

    store.dispatch(
      evolutionProgress({
        ...result,
        step: currentStep + maxGenerations,
      })
    )

    return
  }

  if (type === DONE_EVOLUTION) {
    postMessage(action)
  }

  next(action)
}

export default [handleExpression, handleControls]
