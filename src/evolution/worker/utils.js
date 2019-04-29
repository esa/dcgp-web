/* eslint-env worker */
import { KernelSet, Expression, algorithms } from 'dcgp'
import { evolutionProgress } from '../actions'
import { interupt } from '../../utils/async'
import { algorithmsById } from '../../settings/actions'

export const createExpression = ({
  parameters,
  activeKernelIds,
  inputs,
  outputs,
  constants,
}) => {
  const {
    seed,
    network: { rows, columns, arity, levelsBack },
  } = parameters

  const myKernelSet = new KernelSet(...activeKernelIds)
  const myExpression = new Expression(
    inputs.length + constants.length,
    outputs.length,
    rows,
    columns,
    levelsBack,
    arity,
    myKernelSet,
    seed
  )

  myKernelSet.destroy()

  return myExpression
}

export const step = ({ inputs, outputs }, expression, algorithm, constants) => {
  const { maxSteps } = algorithmsById[algorithm.id]
  const parameters = algorithm.byId[algorithm.id]

  if (algorithm.id === 'muPlusLambda') {
    return algorithms.muPlusLambda(
      expression,
      parameters.mu,
      parameters.lambda,
      maxSteps,
      inputs,
      outputs,
      constants
    )
  }

  if (algorithm.id === 'gradientDescent') {
    const result = algorithms.gradientDescent(
      expression,
      maxSteps,
      inputs,
      outputs,
      constants
    )

    return result
  }

  throw new Error('Selected an algorithm that is not supported.')
}

const checkIfEvolving = store => {
  const { isEvolving } = store.getState()
  return isEvolving
}

const getCurrentStep = store => {
  const { step } = store.getState()
  return step
}

export const loop = async (store, action) => {
  while (true) {
    const { expression, algorithm, constants } = store.getState()
    const { maxSteps } = algorithmsById[algorithm.id]

    const result = step(action.payload, expression, algorithm, constants)
    result.step = getCurrentStep(store) + maxSteps

    const progressAction = evolutionProgress(result)
    progressAction.meta = { throttle: true }

    await interupt()

    store.dispatch(progressAction)

    if (!checkIfEvolving(store)) {
      break
    }
  }
}
