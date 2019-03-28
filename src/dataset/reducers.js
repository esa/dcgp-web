/*
{
  id: String,
  byId: {
    [String]: {
      inputs: [String],
      outputs: [String],
      equation: ?String,
      points: [{
        [String]: Number,
      }],
    },
  },
  prediction: {
    keys: [String],
    points: [{
      [String]: Number,
    }]
    subscribers: Number,
  },
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'
import { RESET_EVOLUTION } from '../evolution/actions'
import linearPreset from './pointsPresets/linear'
import sincPreset from './pointsPresets/sinc'
import sinExpPreset from './pointsPresets/sinExp'
import noisyParabolaPreset from './pointsPresets/noisyParabola'

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
const sinExp = (state = sinExpPreset) => state
const noisyParabola = (state = noisyParabolaPreset) => state

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
  sinExp,
  noisyParabola,
  client,
})

function keys(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_PREDICTION_KEYS:
      return payload
    case actions.REMOVE_PREDICTION_KEYS:
      return []
    default:
      return state
  }
}

function predictionPoints(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_PREDICTION_POINTS:
      return payload
    case actions.REMOVE_PREDICTION_POINTS:
    case RESET_EVOLUTION:
      return []
    default:
      return state
  }
}

function subscribers(state = 0, action) {
  const { type } = action

  switch (type) {
    case actions.ADD_PREDICTION_SUBSCRIBER:
      return state + 1
    case actions.REMOVE_PREDICTION_SUBSCRIBER:
      return state - 1
    default:
      return state
  }
}

const prediction = combineReducers({
  keys,
  points: predictionPoints,
  subscribers,
})

export default combineReducers({
  id,
  byId,
  prediction,
})
