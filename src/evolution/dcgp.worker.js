/* eslint-env worker */
import initializer from 'dcgp'
import dcgpUrl from 'dcgp/dcgp.wasm'
import {
  setDcgpInstance,
  START_EVOLUTION,
  PAUSE_EVOLUTION,
  RESET_EVOLUTION,
  LOSS_THRESHOLD,
  evolutionProgress,
  doneEvolution,
} from './actions'

let isEvolving = false
let hasReset = false

function handleMessages(event, dcgp) {
  switch (event.data.type) {
    case START_EVOLUTION:
      isEvolving = true
      hasReset = false
      runEvolutionAlgorithm(event.data, dcgp)
      break
    case PAUSE_EVOLUTION:
      isEvolving = false
      break
    case RESET_EVOLUTION:
      isEvolving = false
      hasReset = true
      break
    default:
      break
  }
}

function runEvolutionAlgorithm(action, dcgp) {
  const {
    parameters,
    activeKernelIds,
    step,
    inputs,
    labels,
    chromosome,
  } = action.payload

  const {
    seed,
    network: { rows, columns, arity, levelsBack },
    algorithm: { id: algorithmId, maxGenerations, offsprings },
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

  if (chromosome) {
    myExpression.setChromosome(chromosome)
  }

  let index = 0

  // by wrapping each loop in a setTimeout
  // the new messages will be handled before the next loop
  // "it cuts the loop in seperate chunck"
  const evolutionStep = async () => {
    return await new Promise(resolve => {
      setTimeout(() => {
        index++

        const resultObj = dcgp.algorithms[algorithmId](
          myExpression,
          offsprings,
          maxGenerations,
          inputs,
          labels
        )

        resolve(resultObj)
      }, 0)
    })
  }

  const sendProgress = async resultObj => {
    await new Promise(resolve => {
      setTimeout(() => {
        !hasReset &&
          postMessage(
            evolutionProgress({
              ...resultObj,
              step: step + index * maxGenerations,
            })
          )

        resolve()
      }, 0)
    })
  }

  const evolutionLoop = async () => {
    while (isEvolving) {
      const resultObj = await evolutionStep()

      await sendProgress(resultObj)

      if (resultObj.loss <= LOSS_THRESHOLD) {
        postMessage(doneEvolution())
        isEvolving = false
      }
    }
  }

  evolutionLoop().then(() => {
    myKernelSet.destroy()
    myExpression.destroy()
  })
}

const main = async () => {
  const dcgp = await initializer(fetch(dcgpUrl))

  postMessage(setDcgpInstance({ module: dcgp.module }))

  onmessage = event => handleMessages(event, dcgp)
}

main()
