/* eslint-env worker */
import initializer from 'dcgp'
import dcgpUrl from 'dcgp/dcgp.wasm'
import { handleNewMessagesFirst, createExpression } from './utils'
import {
  setDcgpInstance,
  START_EVOLUTION,
  PAUSE_EVOLUTION,
  RESET_EVOLUTION,
  LOSS_THRESHOLD,
  STEP_EVOLUTION,
  evolutionProgress,
  doneEvolution,
} from '../actions'

let isRunning = false
let hasReset = false

let dcgp
let expression
let index = 0

function handleMessages(event) {
  const action = event.data

  switch (event.data.type) {
    case START_EVOLUTION:
      if (!isRunning) {
        isRunning = true
        hasReset = false
        loopStartOrResume(action)
      }
      break
    case PAUSE_EVOLUTION:
      isRunning = false
      index = 0
      break
    case RESET_EVOLUTION:
      isRunning = false
      hasReset = true
      index = 0
      destroyInstance()
      break
    case STEP_EVOLUTION:
      isRunning = false
      oneStep(action)
      break
    default:
      break
  }
}

const sendMessage = message => {
  if (!hasReset) {
    postMessage(message)
  }
}

const destroyInstance = () => {
  expression.destroy()
  expression = undefined
}

const step = ({ parameters, inputs, labels }) => {
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

const loop = async action => {
  const { step: currentStep, parameters } = action.payload
  const { maxGenerations } = parameters.algorithm

  while (isRunning) {
    const result = step(action.payload)

    index++

    await handleNewMessagesFirst(
      sendMessage,
      evolutionProgress({
        ...result,
        step: currentStep + index * maxGenerations,
      })
    )

    if (result.loss <= LOSS_THRESHOLD) {
      postMessage(doneEvolution())
      isRunning = false
    }
  }
}

const loopStartOrResume = async action => {
  if (!expression) {
    expression = createExpression(dcgp, action.payload)
  }

  await loop(action)
}

const oneStep = async action => {
  if (!expression) {
    expression = createExpression(dcgp, action.payload)
  }

  const { step: currentStep, parameters, inputs, labels } = action.payload
  const { maxGenerations, id: algorithmId, offsprings } = parameters.algorithm

  const result = dcgp.algorithms[algorithmId](
    expression,
    offsprings,
    maxGenerations,
    inputs,
    labels
  )

  sendMessage(
    evolutionProgress({
      ...result,
      step: currentStep + maxGenerations,
    })
  )
}

const main = async () => {
  dcgp = await initializer(fetch(dcgpUrl))

  postMessage(setDcgpInstance({ module: dcgp.module }))

  onmessage = handleMessages
}

main()
