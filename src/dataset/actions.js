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
  sinExp: {
    label: 'sine of exponent',
  },
  noisyParabola: {
    label: 'noisy parabola',
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

export const SET_PREDICTION_KEYS = prefix + 'SET_PREDICTION_KEYS'
export const REMOVE_PREDICTION_KEYS = prefix + 'REMOVE_PREDICTION_KEYS'
export const SET_PREDICTION_POINTS = prefix + 'SET_PREDICTION_POINTS'
export const REMOVE_PREDICTION_POINTS = prefix + 'REMOVE_PREDICTION_POINTS'
export const ADD_PREDICTION_SUBSCRIBER = prefix + 'ADD_PREDICTION_SUBSCRIBER'
export const REMOVE_PREDICTION_SUBSCRIBER =
  prefix + 'REMOVE_PREDICTION_SUBSCRIBER'
export const CALC_PREDICTIONS = prefix + 'CALC_PREDICTIONS'
export const SET_PREDICTION_EQUATIONS = prefix + 'SET_PREDICTION_EQUATIONS'

export const setPredictionKeys = keys => ({
  type: SET_PREDICTION_KEYS,
  payload: keys,
})

export const removePredictionKeys = () => ({
  type: REMOVE_PREDICTION_KEYS,
})

export const setPredictionPoints = points => ({
  type: SET_PREDICTION_POINTS,
  payload: points,
})

export const removePredictionPoints = () => ({
  type: REMOVE_PREDICTION_POINTS,
})

export const addPredictionSubscriber = id => ({
  type: ADD_PREDICTION_SUBSCRIBER,
  payload: id,
})

export const removePredictionSubscriber = id => ({
  type: REMOVE_PREDICTION_SUBSCRIBER,
  payload: id,
})

export const calcPredictions = points => ({
  type: CALC_PREDICTIONS,
  payload: points,
})

export const setPredictionEquations = equations => ({
  type: SET_PREDICTION_EQUATIONS,
  payload: equations,
})
