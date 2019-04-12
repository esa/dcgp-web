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
    }],
    equation: String,
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
import eckerle4Preset from './pointsPresets/eckerle4'
import chwirut2Preset from './pointsPresets/chwirut2'
import hahn1Preset from './pointsPresets/hahn1'
import gauss2Preset from './pointsPresets/gauss2'

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
const eckerle4 = (state = eckerle4Preset) => state
const chwirut2 = (state = chwirut2Preset) => state
const hahn1 = (state = hahn1Preset) => state
const gauss2 = (state = gauss2Preset) => state

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
  eckerle4,
  chwirut2,
  hahn1,
  gauss2,
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

function equations(state = [], action) {
  const { type } = action

  switch (type) {
    case actions.SET_PREDICTION_EQUATIONS:
      return action.payload
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
  equations,
  subscribers,
})

export default combineReducers({
  id,
  byId,
  prediction,
})
