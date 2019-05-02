import * as math from 'mathjs'
import { map, withLatestFrom } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { EQUATION } from '../../constants'

const handleEquation = (event$, { expression$ }) =>
  event$.pipe(
    ofType(EQUATION),
    withLatestFrom(expression$),
    map(getEquationEvent)
  )

const equationEvent = (payload, meta) => ({
  type: EQUATION,
  payload,
  meta,
})

const getEquationEvent = ([event, expression]) => {
  const { payload = {}, meta } = event

  if (!expression) {
    return equationEvent('dcgp backend: Expression is not set.', {
      ...meta,
      isError: true,
    })
  }

  const { inputLabels, constants = [], simplified } = payload

  // Set the constants keys to be some recognisable string
  // that is not likely to be in the equation.
  // This is because the simplifier doesn't allow some characters
  // or interprets the equation differently.
  const constantLabels = constants.map((_, i) => `VAR${i + 1}ENDBRACE`)

  try {
    let equations = expression.equations(...inputLabels, ...constantLabels)

    if (simplified) {
      equations = equations
        // makes exponentials work
        .map(equation => equation.replace(/\*\*/g, '^'))
        .map(equation =>
          math
            .simplify(equation, [
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
        )
    }

    // replace the "unique" constant key values to be the
    // correct LaTeX representation.
    equations = equations.map(equation =>
      equation.replace(/ENDBRACE/g, '}').replace(/VAR/g, 'C_{')
    )

    return equationEvent(equations, meta)
  } catch (error) {
    return equationEvent(`dcgp backend: ${error}`, { ...meta, isError: true })
  }
}

export default handleEquation
