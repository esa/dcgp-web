/*
{
  datasetId: String,
  datasets: {
    [String]: {
      inputs: [String],
      outputs: [String],
      equation: ?String,
      points: [{
        [String]: Number,
      }],
    },
  },
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'
import linearPreset from './pointsPresets/linear'
import sincPreset from './pointsPresets/sinc'

function id(state = 'sinc', action) {
  const { type, payload } = action

  switch (type) {
    case actions.CHANGE_DATASET:
      return payload
    default:
      return state
  }
}

const linear = (state = linearPreset) => state
const sinc = (state = sincPreset) => state

function inputs(state = [], action) {
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

function outputs(state = [], action) {
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

function points(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_POINTS:
      return payload
    default:
      return state
  }
}

const client = combineReducers({
  outputs,
  inputs,
  points,
})

const byId = combineReducers({
  linear,
  sinc,
  client,
})

export default combineReducers({
  id,
  byId,
})
