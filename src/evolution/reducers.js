/* state structure
{
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

// function predictionPoints(state = [], action) {
//   const { type, payload } = action

//   switch (type) {
//     case actions.SET_PREDICTION_POINTS:
//       return payload
//     case actions.REMOVE_PREDICTION_POINTS:
//     case RESET_EVOLUTION:
//       return []
//     default:
//       return state
//   }
// }

// function equations(state = [], action) {
//   const { type } = action

//   switch (type) {
//     case actions.SET_PREDICTION_EQUATIONS:
//       return action.payload
//     case RESET_EVOLUTION:
//       return []
//     default:
//       return state
//   }
// }

// function subscribers(state = 0, action) {
//   const { type } = action

//   switch (type) {
//     case actions.ADD_PREDICTION_SUBSCRIBER:
//       return state + 1
//     case actions.REMOVE_PREDICTION_SUBSCRIBER:
//       return state - 1
//     default:
//       return state
//   }
// }

// const prediction = combineReducers({
//   points: predictionPoints,
//   equations,
//   subscribers,
// })

export default combineReducers({
  isEvolving,
  isDone,
  initial,
  steps,
})
