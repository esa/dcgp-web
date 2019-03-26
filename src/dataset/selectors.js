import { createSelector } from 'reselect'

export const datasetIdSelectore = state => state.datasets.id

export const selectedDatasetSelector = createSelector(
  datasetIdSelectore,
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
  (inputs, points) => points.map(point => inputs.map(input => point[input]))
)

export const labelsSelector = createSelector(
  outputKeysSelector,
  pointsSelector,
  (outputs, points) => points.map(point => outputs.map(output => point[output]))
)
