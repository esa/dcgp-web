import { createSelector } from 'reselect'

export const datasetIdSelector = state => state.datasets.id

export const selectedDatasetSelector = createSelector(
  datasetIdSelector,
  state => state.datasets.byId,
  (id, datasets) => datasets[id]
)

export const equationSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.equation
)

export const inputKeysSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.inputs
)

export const outputKeysSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.outputs
)

export const pointsSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.points
)

export const inputsSelector = createSelector(
  inputKeysSelector,
  pointsSelector,
  (inputs, points) => inputs.map(input => points.map(point => point[input]))
)

export const labelsSelector = createSelector(
  outputKeysSelector,
  pointsSelector,
  (outputs, points) => outputs.map(output => points.map(point => point[output]))
)

export const predictionsSubscribersSelector = state =>
  state.datasets.prediction.subscribers

export const predictionPointsSelector = state =>
  state.datasets.prediction.points

export const predictionKeysSelector = state => state.datasets.prediction.keys

export const predictionEquationsSelector = state =>
  state.datasets.prediction.equations
