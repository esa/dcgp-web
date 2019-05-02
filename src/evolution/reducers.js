/* state structure
{
  isEvolving: Bool,
  isDone: Bool,
  initial: {
    loss: Number,
  },
  steps: [{
    loss: Number,
    step: Number,
  }],
  predictions?: {
    points: [[Number]],
    equations?: [String],
  }
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'

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
    case actions.SET_INITIAL_EVOLUTION:
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
  isEvolving,
  isDone,
  initial,
  steps,
})
