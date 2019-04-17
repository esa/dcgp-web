/* eslint-env worker */
import { KernelSet, Expression, algorithms } from 'dcgp'
import { evolutionProgress } from '../actions'
import { interupt } from '../../utils/async'
import { algorithmsById } from '../../settings/actions'

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

export const step = ({ inputs, labels }, expression, algorithm, constants) => {
  const { maxSteps } = algorithmsById[algorithm]

  if (algorithm === 'muPlusLambda') {
    return algorithms.muPlusLambda(
      expression,
      1,
      4,
      maxSteps,
      inputs,
      labels,
      constants
    )
  }
  if (algorithm === 'gradientDescent') {
    const result = algorithms.gradientDescent(
      expression,
      maxSteps,
      inputs,
      labels,
      constants
    )

    result.constants = result.constants.map((val, i) =>
      isNaN(val) || val === Infinity || val === -Infinity ? constants[i] : val
    )

    if (isNaN(result.loss)) {
      result.loss = expression.loss(inputs, labels, result.constants)
    }

    return result
  }

  throw new Error('not supported algorithm selected')
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
    const { maxSteps } = algorithmsById[algorithm]

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
