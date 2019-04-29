import {
  GET_INITIAL_EVOLUTION,
  setInitialEvolution,
  SET_INITIAL_EVOLUTION,
  setExpression,
} from '../../actions'
import { createExpression } from '../utils'

const handleInitialEvolution = store => next => action => {
  if (action.type === GET_INITIAL_EVOLUTION) {
    next(action)

    const expression = createExpression(action.payload)
    store.dispatch(setExpression(expression))

    const { inputs, outputs, constants } = action.payload
    const loss = expression.loss(inputs, outputs, constants)
    const { chromosome } = expression

    store.dispatch(setInitialEvolution({ loss, chromosome }))
    return
  }

  if (action.type === SET_INITIAL_EVOLUTION) {
    postMessage(action)
  }

  next(action)
}

export default handleInitialEvolution
