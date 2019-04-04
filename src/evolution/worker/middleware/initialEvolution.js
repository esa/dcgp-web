import {
  GET_INITIAL_EVOLUTION,
  setInitialEvolution,
  SET_INITIAL_EVOLUTION,
  setExpression,
} from '../../actions'
import { createExpression, getInitialResult } from '../utils'

const handleInitialEvolution = store => next => action => {
  if (action.type === GET_INITIAL_EVOLUTION) {
    next(action)
    const { instance: dcgp } = store.getState()

    const expression = createExpression(action.payload, dcgp)
    store.dispatch(setExpression(expression))

    const initialResult = getInitialResult(action.payload, expression, dcgp)
    store.dispatch(setInitialEvolution(initialResult))

    return
  }

  if (action.type === SET_INITIAL_EVOLUTION) {
    postMessage(action)
  }

  next(action)
}

export default handleInitialEvolution
