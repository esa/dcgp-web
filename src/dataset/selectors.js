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

export const untransposedPointsSelector = createSelector(
  selectedDatasetSelector,
  dataset => dataset.points
)

export const pointsSelector = createSelector(
  untransposedPointsSelector,
  // transpose points matix because that is how dcgp methods expect it
  points => transpose2D(points)
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

export const warningSelector = createSelector(
  untransposedPointsSelector,
  points => {
    const warnings = []

    if (points.length > 500) {
      warnings.push('Using a large dataset.')
    }

    return warnings
  }
)

export const errorSelector = createSelector(
  inputLabelsSelector,
  outputLabelsSelector,
  (inputLabels, outputLabels) => {
    const errors = []

    if (inputLabels.length === 0) {
      errors.push('Must select an input.')
    }

    if (outputLabels.length === 0) {
      errors.push('Must select an output.')
    }

    return errors
  }
)
