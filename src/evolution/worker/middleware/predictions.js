import * as math from 'mathjs'
import {
  CALC_PREDICTIONS,
  setPredictionPoints,
  setPredictionEquations,
} from '../../../dataset/actions'

const handlePredictions = store => next => action => {
  if (action.type === CALC_PREDICTIONS) {
    next(action)

    const {
      inputs,
      inputKeys,
      predictionKeys,
      chromosome,
      constants,
    } = action.payload
    const { expression } = store.getState()

    if (!expression || !inputs || !predictionKeys || !inputKeys) {
      return
    }

    let currentChromosome

    if (chromosome) {
      currentChromosome = expression.chromosome
      expression.chromosome = chromosome
    }
    const constantsArray = constants.map(val =>
      Array(inputs[0].length).fill(val)
    )

    const predictionsMatrix = expression.evaluate(...inputs, ...constantsArray)

    const predictions = []

    for (let j = 0; j < predictionsMatrix[0].length; j++) {
      const predictionObj = {}

      for (let i = 0; i < predictionsMatrix.length; i++) {
        Object.assign(predictionObj, {
          [predictionKeys[i]]: predictionsMatrix[i][j],
        })
      }

      predictions.push(predictionObj)
    }

    const constantKeys = constants.map((val, i) => `C${i + 1}`)

    const naiveEquations = expression.equations(...inputKeys, ...constantKeys)
    const simplifiedEquations = naiveEquations.map(eq =>
      math
        .simplify(eq)
        .toTex()
        .replace(/Infinity/g, ' \\infty')
        .replace(/C/g, 'C_')
    )

    if (chromosome) {
      expression.chromosome = currentChromosome
    }

    postMessage(setPredictionPoints(predictions))
    postMessage(setPredictionEquations(simplifiedEquations))

    return
  }

  next(action)
}

export default handlePredictions
