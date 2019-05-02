import { createSelector } from 'reselect'
import { transpose2D } from '../utils/array'

export const selectedDatasetIdSelector = state => state.datasets.selectedId
export const datasetsSelector = state => state.datasets.byId
export const datasetIdsSelector = state => state.datasets.allIds

export const selectedDatasetSelector = createSelector(
  selectedDatasetIdSelector,
  state => state.datasets.byId,
  (id, datasets) => datasets[id]
)

export const pointsSelector = createSelector(
  selectedDatasetSelector,
  // transpose points matix because that is how dcgp methods expect it
  dataset => transpose2D(dataset.points)
)

export const inputIndicesSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.inputs
)

export const outputIndicesSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.outputs
)

export const labelsSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.labels
)

export const equationsSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.equations
)

export const inputsSelector = createSelector(
  pointsSelector,
  inputIndicesSelector,
  (points, inputIndices) =>
    points.filter((column, i) => inputIndices.includes(i))
)

export const outputsSelector = createSelector(
  pointsSelector,
  outputIndicesSelector,
  (points, outputIndices) =>
    points.filter((column, i) => outputIndices.includes(i))
)

export const inputLabelsSelector = createSelector(
  labelsSelector,
  inputIndicesSelector,
  (labels, inputIndices) =>
    labels.filter((label, i) => inputIndices.includes(i))
)

export const outputLabelsSelector = createSelector(
  labelsSelector,
  outputIndicesSelector,
  (labels, outputIndices) =>
    labels.filter((label, i) => outputIndices.includes(i))
)

// export const predictionsSubscribersSelector = state =>
//   // state.datasets.prediction.subscribers
//   false

// export const predictionPointsSelector = state =>
//   state.datasets.prediction.points

// export const predictionKeysSelector = state => state.datasets.prediction.keys

// export const predictionEquationsSelector = state =>
//   state.datasets.prediction.equations
