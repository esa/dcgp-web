// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = "[dataset] ";

export const SET_POINTS = prefix + "SET_POINTS";
export const SET_RAW_DATA = prefix + "SET_RAW_DATA";
export const SELECT_DATASET = prefix + "SELECT_DATASET";
export const ADD_DATASET = prefix + "ADD_DATASET";
export const SET_POINTS_PRESET = prefix + "SET_POINTS_PRESET";
export const REQUEST_CUSTOM_DATASET = prefix + "REQUEST_CUSTOM_DATASET";

export const setPoints = (points) => ({
  type: SET_POINTS,
  payload: points,
});

export const setRawData = (rawData) => ({
  type: SET_RAW_DATA,
  payload: rawData,
});

export const selectDataset = (datasetId) => ({
  type: SELECT_DATASET,
  payload: datasetId,
});

export const addDataset = (dataset) => ({
  type: ADD_DATASET,
  payload: dataset,
});

export const requestCustomDataset = (inputElement) => ({
  type: REQUEST_CUSTOM_DATASET,
  meta: {
    inputElement,
  },
});

export const ADD_INPUT = prefix + "ADD_INPUT";
export const ADD_OUTPUT = prefix + "ADD_OUTPUT";
export const REMOVE_INPUT = prefix + "REMOVE_INPUT";
export const REMOVE_OUTPUT = prefix + "REMOVE_OUTPUT";
export const CHANGE_COLUMN_TYPE = prefix + "CHANGE_COLUMN_TYPE";
export const CHANGE_NAME = prefix + "CHANGE_NAME";
export const CHANGE_LABEL = prefix + "CHANGE_LABEL";

export const columnTypes = ["INPUT", "OUTPUT", "NONE"];

export const changeColumnType = (datasetId, columnIndex, type) => ({
  type: CHANGE_COLUMN_TYPE,
  payload: {
    datasetId,
    columnIndex,
    type,
  },
});

export const addInput = (datasetId, columnIndex) => ({
  type: ADD_INPUT,
  payload: {
    datasetId,
    columnIndex,
  },
});

export const addOutput = (datasetId, columnIndex) => ({
  type: ADD_OUTPUT,
  payload: {
    datasetId,
    columnIndex,
  },
});

export const removeInput = (datasetId, columnIndex) => ({
  type: REMOVE_INPUT,
  payload: {
    datasetId,
    columnIndex,
  },
});

export const removeOutput = (datasetId, columnIndex) => ({
  type: REMOVE_OUTPUT,
  payload: {
    datasetId,
    columnIndex,
  },
});

export const changeName = (datasetId, name) => ({
  type: CHANGE_NAME,
  payload: {
    datasetId,
    name,
  },
});

export const changeLabel = (datasetId, columnIndex, label) => ({
  type: CHANGE_LABEL,
  payload: {
    datasetId,
    columnIndex,
    label,
  },
});

export const SET_PREDICTION_KEYS = prefix + "SET_PREDICTION_KEYS";
export const REMOVE_PREDICTION_KEYS = prefix + "REMOVE_PREDICTION_KEYS";
export const SET_PREDICTION_POINTS = prefix + "SET_PREDICTION_POINTS";
export const REMOVE_PREDICTION_POINTS = prefix + "REMOVE_PREDICTION_POINTS";
export const ADD_PREDICTION_SUBSCRIBER = prefix + "ADD_PREDICTION_SUBSCRIBER";
export const REMOVE_PREDICTION_SUBSCRIBER =
  prefix + "REMOVE_PREDICTION_SUBSCRIBER";
export const CALC_PREDICTIONS = prefix + "CALC_PREDICTIONS";
export const SET_PREDICTION_EQUATIONS = prefix + "SET_PREDICTION_EQUATIONS";

export const setPredictionKeys = (keys) => ({
  type: SET_PREDICTION_KEYS,
  payload: keys,
});

export const removePredictionKeys = () => ({
  type: REMOVE_PREDICTION_KEYS,
});

export const setPredictionPoints = (points) => ({
  type: SET_PREDICTION_POINTS,
  payload: points,
});

export const removePredictionPoints = () => ({
  type: REMOVE_PREDICTION_POINTS,
});

export const addPredictionSubscriber = (id) => ({
  type: ADD_PREDICTION_SUBSCRIBER,
  payload: id,
});

export const removePredictionSubscriber = (id) => ({
  type: REMOVE_PREDICTION_SUBSCRIBER,
  payload: id,
});

export const calcPredictions = (points) => ({
  type: CALC_PREDICTIONS,
  payload: points,
});

export const setPredictionEquations = (equations) => ({
  type: SET_PREDICTION_EQUATIONS,
  payload: equations,
});
