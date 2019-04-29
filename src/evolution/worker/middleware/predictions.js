import * as math from 'mathjs'
import {
  CALC_PREDICTIONS,
  setPredictionPoints,
  setPredictionEquations,
} from '../../../dataset/actions'

const handlePredictions = store => next => action => {
  if (action.type === CALC_PREDICTIONS) {
    next(action)

    const { inputs, inputLabels, chromosome, constants } = action.payload
    const { expression } = store.getState()

    if (!expression || !inputs || !inputLabels) {
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

    const predictions = expression.evaluate(...inputs, ...constantsArray)

    // Set the constants keys to be some recognisable string
    // that is not likely to be in the equation.
    // This is because the simplifier doesn't allow some characters
    // or interprets the equation differently.
    const constantLabels = constants.map((val, i) => `VAR${i + 1}ENDBRACE`)

    const naiveEquations = expression.equations(
      ...inputLabels,
      ...constantLabels
    )
    const simplifiedEquations = naiveEquations
      // makes exponentials work
      .map(eq => eq.replace(/\*\*/g, '^'))
      .map(eq =>
        math
          .simplify(eq, [
            { l: 'n+0', r: 'n' },
            { l: 'n^0', r: '1' },
            { l: '0*n', r: '0' },
            { l: 'n/n', r: '1' },
            { l: 'n^1', r: 'n' },
            { l: '+n1', r: 'n1' },
            { l: 'n--n1', r: 'n+n1' },
            ...math.simplify.rules,
          ])
          .toTex()
          .replace(/Infinity/g, ' \\infty')
          // replace the 'unique' constant key values to be the
          // correct LaTeX representation.
          .replace(/ENDBRACE/g, '}')
          .replace(/VAR/g, 'C_{')
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
