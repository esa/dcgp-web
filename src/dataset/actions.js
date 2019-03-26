// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = '[dataset] '

export const SET_POINTS = prefix + 'SET_POINTS'
export const CHANGE_DATASET = prefix + 'CHANGE_DATASET'
export const SET_POINTS_PRESET = prefix + 'SET_POINTS_PRESET'

export const pointsPresetsById = {
  linear: {
    label: 'linear',
  },
  sinc: {
    label: 'cardinal sine',
  },
}

export const setPoints = points => ({
  type: SET_POINTS,
  payload: points,
})

export const changeDataset = datasetId => ({
  type: CHANGE_DATASET,
  payload: datasetId,
})

export const ADD_INPUT = prefix + 'ADD_INPUT'
export const ADD_OUTPUT = prefix + 'ADD_OUTPUT'
export const REMOVE_INPUT = prefix + 'REMOVE_INPUT'
export const REMOVE_OUTPUT = prefix + 'REMOVE_OUTPUT'
export const SET_INPUTS = prefix + 'SET_INPUTS'
export const SET_OUTPUTS = prefix + 'SET_OUTPUTS'
