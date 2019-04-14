/* state structure
{
  seed: Number
  kernels: {
    sum: Bool,
    diff: Bool,
    mul: Bool,
    div: Bool,
    pdiv: Bool,
    sin: Bool,
    cos: Bool,
    log: Bool,
    exp: Bool,
  },
  network: {
    rows: Number,
    columns: Number,
    arity: Number,
    levelsBack: Number,
  },
  algorithm: {
    id: String,
    [string]: Number,
  },
  constants: [Number],
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'

function seed(state = 12, action) {
  switch (action.type) {
    case actions.SET_SEED:
      return action.payload
    default:
      return state
  }
}

const initialKernelState = {
  sum: true,
  diff: true,
  mul: true,
  div: true,
  sin: false,
  cos: false,
  log: false,
  exp: false,
}

function kernels(state = initialKernelState, action) {
  const { type, payload } = action

  switch (type) {
    case actions.TOGGLE_KERNEL:
      return { ...state, [payload]: !state[payload] }
    default:
      return state
  }
}

const initialNetworkState = {
  rows: 1, // min 1
  columns: 10, // min 1
  arity: 2, // min 2
  levelsBack: 5, // min 1
}

function network(state = initialNetworkState, action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_ROWS:
      return { ...state, rows: payload }
    case actions.SET_COLUMNS:
      return { ...state, columns: payload }
    case actions.SET_ARITY:
      return { ...state, arity: payload }
    case actions.SET_LEVELS_BACK:
      return { ...state, levelsBack: payload }
    default:
      return state
  }
}

const initialAlgorithmState = {
  id: 'muPlusLambda',
  ...actions.algorithmsById.muPlusLambda.settings,
}

function algorithm(state = initialAlgorithmState, action) {
  const { type, payload } = action

  switch (type) {
    case actions.SET_ALGORITHM:
      return { ...state, id: payload }
    default:
      return state
  }
}

function constants(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case actions.ADD_CONSTANT:
      return [...state, payload]
    case actions.SET_CONSTANT:
      return payload
    case actions.REMOVE_CONSTANT:
      return state.filter((val, i) => i !== payload)
    case actions.CHANGE_CONSTANT:
      state[payload.index] = payload.value
      return [...state]
    default:
      return state
  }
}

const settings = combineReducers({
  seed,
  kernels,
  network,
  algorithm,
  constants,
})

export default settings
