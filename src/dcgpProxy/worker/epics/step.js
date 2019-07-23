import { algorithms } from 'dcgp'
import { map, withLatestFrom } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { algorithmsById } from '../../../settings/actions'
import { LOSS_THRESHOLD, PROGRESS, STEP } from '../../constants'

const handleStep = (event$, { expression$, algorithm$ }) =>
  event$.pipe(
    ofType(STEP),
    withLatestFrom(expression$, algorithm$),
    map(doStepGetProgressEvent)
  )

export const progressEvent = (payload, meta) => ({
  type: PROGRESS,
  payload,
  meta,
})

const doStepGetProgressEvent = ([{ payload, meta }, expression, algorithm]) => {
  const { maxSteps } = algorithmsById[algorithm.id]

  if (!expression) {
    return progressEvent('dcgp backend: Expression is not set.', {
      ...meta,
      isError: true,
    })
  }

  try {
    const result = step(
      payload,
      expression,
      algorithm,
      payload.constants,
      maxSteps
    )

    const done = result.loss <= LOSS_THRESHOLD

    return progressEvent(
      {
        ...result,
        steps: maxSteps,
        done,
      },
      meta
    )
  } catch (error) {
    return progressEvent(`dcgp backend: ${error}`, {
      ...meta,
      isError: true,
    })
  }
}

export const step = (
  { inputs, outputs },
  expression,
  algorithm,
  constants,
  steps
) => {
  if (algorithm.id === 'muPlusLambda') {
    return algorithms.muPlusLambda(
      expression,
      algorithm.mu,
      algorithm.lambda,
      steps,
      inputs,
      outputs,
      constants
    )
  }

  if (algorithm.id === 'gradientDescent') {
    return algorithms.gradientDescent(
      expression,
      steps,
      inputs,
      outputs,
      constants
    )
  }

  if (algorithm.id === 'hybrid') {
    return algorithms.hybrid(
      expression,
      algorithm.mu,
      algorithm.lambda,
      steps,
      inputs,
      outputs,
      constants
    )
  }

  throw new Error('Selected an algorithm that is not supported.')
}

export default handleStep
