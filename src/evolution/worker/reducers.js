/* eslint-env worker */
/* state structure
{
  instance: {
    KernelSet: KernelSet,
    Kernel: Kernel,
    Expression: Expression,
  },
  isEvolving: Bool,
  hasReset: Bool,
  expression: Expression,
  steps: Number,
}
*/

import { combineReducers } from 'redux'
import * as actions from '../actions'

function instance(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_DCGP_INSTANCE:
      return payload
    default:
      return state
  }
}

function isEvolving(state = false, action) {
  const { type } = action

  switch (type) {
    case actions.START_EVOLUTION:
      return true
    case actions.PAUSE_EVOLUTION:
    case actions.DONE_EVOLUTION:
    case actions.RESET_EVOLUTION:
    case actions.STEP_EVOLUTION:
      return false
    default:
      return state
  }
}

function hasReset(state = false, action) {
  const { type } = action

  switch (type) {
    case actions.START_EVOLUTION:
    case actions.STEP_EVOLUTION:
      return false
    case actions.RESET_EVOLUTION:
      return true
    default:
      return state
  }
}

function expression(state = null, action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_EXPRESSION:
      return payload
    case actions.RESET_EVOLUTION:
      return null
    default:
      return state
  }
}

function step(state = 0, action) {
  const { type, payload } = action

  switch (type) {
    case actions.EVOLUTION_PROGRESS:
      return payload.step
    case actions.RESET_EVOLUTION:
      return 0
    default:
      return state
  }
}

export default combineReducers({
  instance,
  isEvolving,
  hasReset,
  expression,
  step,
})
