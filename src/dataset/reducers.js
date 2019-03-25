/*
{
  equation: String,
  inputs: [String],
  outputs: [String],
  points: [{
    [String]: Number,
  }]
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'
import linearPointsPreset from './pointsPresets/linear'

function equation(state = linearPointsPreset.equation, action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_EQUATION:
      return payload
    case actions.REMOVE_EQUATION:
      return null
    default:
      return state
  }
}

function inputs(state = linearPointsPreset.inputs, action) {
  const { type, payload } = action

  switch (type) {
    case actions.ADD_INPUT:
      return [...state, payload]
    case actions.SET_INPUTS:
      return payload
    case actions.REMOVE_INPUT:
      return state.filter(item => item !== payload)
    default:
      return state
  }
}

function outputs(state = linearPointsPreset.outputs, action) {
  const { type, payload } = action

  switch (type) {
    case actions.ADD_OUTPUT:
      return [...state, payload]
    case actions.SET_OUTPUTS:
      return payload
    case actions.REMOVE_OUTPUT:
      return state.filter(item => item !== payload)
    default:
      return state
  }
}

function points(state = linearPointsPreset.points, action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_POINTS:
      return payload
    default:
      return state
  }
}

export default combineReducers({
  equation,
  inputs,
  outputs,
  points,
})
