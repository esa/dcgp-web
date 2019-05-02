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
    case actions.START:
      return true
    case actions.PAUSE:
    case actions.RESET:
    case actions.STEP:
    case actions.DONE:
      return false
    default:
      return state
  }
}

function isDone(state = false, action) {
  const { type } = action

  switch (type) {
    case actions.DONE:
      return true
    case actions.RESET:
      return false
    default:
      return state
  }
}

function initial(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case actions.INITIAL:
      return payload
    case actions.RESET:
      return {}
    default:
      return state
  }
}

const addProgress = (state, payload) => {
  const len = state.length

  if (len === 0) return [{ ...payload, step: payload.steps }]

  return [
    ...state,
    {
      ...payload,
      step: state[len - 1].step + payload.steps,
    },
  ]
}

function steps(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case actions.PROGRESS:
      return addProgress(state, payload)
    case actions.RESET:
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
