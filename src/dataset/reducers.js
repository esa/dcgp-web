/*
{
  selectedId: String,
  allIds: [String],
  byId: {
    [String]: {
      id: String,
      name: String,
      mutable: Boolean,
      points: [[Number]],
      inputs: [Number],
      outputs: [Number],
      labels: [String],
      equations?: [String],
    },
  },
  errors: [Error],
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'

let presetsById

if (process.env.NODE_ENV !== 'test') {
  const presetsRequire = require.context('./presets/', false, /\.js$/)
  presetsById = presetsRequire.keys().reduce((presets, key) => {
    const preset = presetsRequire(key).default
    return { ...presets, [preset.id]: preset }
  }, {})
}

if (process.env.NODE_ENV === 'test') {
  const linear = require('./presets/linear.js').default
  const sinc = require('./presets/sinc.js').default
  presetsById = { [linear.id]: linear, [sinc.id]: sinc }
}

const presetIds = Object.keys(presetsById)

function selectedId(state = 'sinc', action) {
  const { type, payload } = action

  switch (type) {
    case actions.SELECT_DATASET:
      return payload
    default:
      return state
  }
}

function allIds(state = presetIds, action) {
  const { type, payload } = action

  switch (type) {
    case actions.ADD_DATASET:
      return [...state, payload.id]
    default:
      return state
  }
}

const addToState = (state = [], action) => {
  const {
    payload: { columnIndex },
  } = action

  return [...state, columnIndex]
}

const removeFromState = (state = [], action) => {
  const {
    payload: { columnIndex },
  } = action

  return state.filter(index => index !== columnIndex)
}

const changeLabel = (labels = [], action) => {
  const {
    payload: { columnIndex, label },
  } = action

  labels[columnIndex] = label

  return [...labels]
}

const modifyDataset = (property, state, action, modificationFunction) => {
  const { payload } = action
  const { datasetId } = payload
  const dataset = state[datasetId]

  return {
    ...state,
    [datasetId]: {
      ...dataset,
      [property]: modificationFunction(dataset[property], action),
    },
  }
}

const modifyInputs = modifyDataset.bind(null, 'inputs')
const modifyOutputs = modifyDataset.bind(null, 'outputs')
const modifyName = modifyDataset.bind(null, 'name')
const modifyLabels = modifyDataset.bind(null, 'labels')

function byId(state = presetsById, action) {
  const { type, payload } = action

  switch (type) {
    case actions.ADD_DATASET:
      return { ...state, [payload.id]: payload }
    case actions.ADD_INPUT:
      return modifyInputs(state, action, addToState)
    case actions.REMOVE_INPUT:
      return modifyInputs(state, action, removeFromState)
    case actions.ADD_OUTPUT:
      return modifyOutputs(state, action, addToState)
    case actions.REMOVE_OUTPUT:
      return modifyOutputs(state, action, removeFromState)
    case actions.CHANGE_NAME:
      return modifyName(state, action, (_, action) => action.payload.name)
    case actions.CHANGE_LABEL:
      return modifyLabels(state, action, changeLabel)
    default:
      return state
  }
}

function errors(state = [], action) {
  const { type } = action

  switch (type) {
    default:
      return state
  }
}

export default combineReducers({
  selectedId,
  allIds,
  byId,
  errors,
})
