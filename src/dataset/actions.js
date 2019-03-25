import linearPointsPreset from './pointsPresets/linear'
// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = '[dataset] '

export const SET_POINTS = prefix + 'SET_POINTS'
export const SET_POINTS_PRESET = prefix + 'SET_POINTS_PRESET'
export const pointsPresetNames = {
  LINEAR: 'LINEAR',
}

export const pointsPresets = {
  LINEAR: linearPointsPreset,
}

export const setPoints = points => ({
  type: SET_POINTS,
  payload: points,
})

export const setPointsPreset = preset => ({
  type: SET_POINTS_PRESET,
  payload: preset,
})

export const ADD_INPUT = prefix + 'ADD_INPUT'
export const ADD_OUTPUT = prefix + 'ADD_OUTPUT'
export const REMOVE_INPUT = prefix + 'REMOVE_INPUT'
export const REMOVE_OUTPUT = prefix + 'REMOVE_OUTPUT'
export const SET_INPUTS = prefix + 'SET_INPUTS'
export const SET_OUTPUTS = prefix + 'SET_OUTPUTS'
export const SET_EQUATION = prefix + 'SET_EQUATION'
export const REMOVE_EQUATION = prefix + 'REMOVE_EQUATION'
