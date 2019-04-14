/* eslint-env worker */
import { KernelSet, Expression, algorithms } from 'dcgp'
import { evolutionProgress } from '../actions'
import { interupt } from '../../utils/async'

export const createExpression = ({
  parameters,
  activeKernelIds,
  inputs,
  labels,
  constants,
}) => {
  const {
    seed,
    network: { rows, columns, arity, levelsBack },
  } = parameters

  const myKernelSet = new KernelSet(activeKernelIds)
  const myExpression = new Expression(
    inputs.length + constants.length,
    labels.length,
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

export const step = ({ parameters, inputs, labels, constants }, expression) => {
  const { id: algorithmId, maxSteps, lambda, mu } = parameters.algorithm

  const result = algorithms[algorithmId](
    expression,
    mu,
    lambda,
    maxSteps,
    inputs,
    labels,
    constants
  )

  return result
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
  const { expression } = store.getState()
  const { maxSteps } = action.payload.parameters.algorithm

  while (true) {
    const result = step(action.payload, expression)
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
