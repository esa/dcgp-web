/* eslint-env worker */
import { evolutionProgress } from '../actions'
import { interupt } from '../../utils/async'

export const createExpression = (
  { parameters, activeKernelIds, inputs, labels },
  dcgp
) => {
  const {
    seed,
    network: { rows, columns, arity, levelsBack },
  } = parameters

  const myKernelSet = new dcgp.KernelSet(activeKernelIds)
  const myExpression = new dcgp.Expression(
    inputs[0].length,
    labels[0].length,
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

export const getInitialResult = (
  { parameters, inputs, labels },
  expression,
  dcgp
) => {
  const { id: algorithmId } = parameters.algorithm

  const result = dcgp.algorithms[algorithmId](expression, 1, 0, inputs, labels)

  return result
}

export const step = ({ parameters, inputs, labels }, expression, dcgp) => {
  const { id: algorithmId, maxGenerations, offsprings } = parameters.algorithm

  const result = dcgp.algorithms[algorithmId](
    expression,
    offsprings,
    maxGenerations,
    inputs,
    labels
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
  const { expression, instance: dcgp } = store.getState()
  const { maxGenerations } = action.payload.parameters.algorithm

  while (true) {
    const result = step(action.payload, expression, dcgp)
    result.step = getCurrentStep(store) + maxGenerations

    const progressAction = evolutionProgress(result)
    progressAction.meta = { throttle: true }

    await interupt()

    store.dispatch(progressAction)

    if (!checkIfEvolving(store)) {
      break
    }
  }
}
