/* state structure
{
  instance: {
    KernelSet: KernelSet,
    Kernel: Kernel,
    Expression: Expression,
  },
  isEvolving: Bool,
  isDone: Bool,
  initial: {
    loss: Number,
    chromosome: [Number],
  },
  steps: [{
    loss: Number,
    chromosome: [Number],
    step: Number,
  }],
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'

function instance(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_DCGP_INSTANCE:
      return { ...state, ...payload }
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
    case actions.RESET_EVOLUTION:
    case actions.DONE_EVOLUTION:
      return false
    default:
      return state
  }
}

function isDone(state = false, action) {
  const { type } = action

  switch (type) {
    case actions.DONE_EVOLUTION:
      return true
    case actions.RESET_EVOLUTION:
      return false
    default:
      return state
  }
}

function initial(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case actions.INITIAL_EVOLUTION:
      return payload
    case actions.RESET_EVOLUTION:
      return {}
    default:
      return state
  }
}

function steps(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case actions.EVOLUTION_PROGRESS:
      return [...state, payload]
    case actions.RESET_EVOLUTION:
      return []
    default:
      return state
  }
}

export default combineReducers({
  instance,
  isEvolving,
  isDone,
  initial,
  steps,
})
