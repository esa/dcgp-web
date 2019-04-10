import * as math from 'mathjs'
import {
  CALC_PREDICTIONS,
  setPredictionPoints,
  setPredictionEquations,
} from '../../../dataset/actions'

const handlePredictions = store => next => action => {
  if (action.type === CALC_PREDICTIONS) {
    next(action)

    const { inputs, inputKeys, predictionKeys, chromosome } = action.payload
    const { expression } = store.getState()

    if (!expression || !inputs || !predictionKeys || !inputKeys) {
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

    const naiveEquations = expression.getEquation(inputKeys)
    const simplifiedEquations = naiveEquations.map(eq =>
      math
        .simplify(eq)
        .toTex()
        .replace(/Infinity/g, ' \\infty')
    )

    if (chromosome) {
      expression.setChromosome(currentChromosome)
    }

    postMessage(setPredictionPoints(predictions))
    postMessage(setPredictionEquations(simplifiedEquations))

    return
  }

  next(action)
}

export default handlePredictions
