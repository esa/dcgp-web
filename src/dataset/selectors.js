import { createSelector } from 'reselect'

export const inputKeysSelectore = state => state.dataPoints.inputs
export const outputKeysSelectore = state => state.dataPoints.outputs
export const pointsSelectore = state => state.dataPoints.points

export const inputsSelector = createSelector(
  inputKeysSelectore,
  pointsSelectore,
  (inputs, points) => points.map(point => inputs.map(input => point[input]))
)

export const labelsSelector = createSelector(
  outputKeysSelectore,
  pointsSelectore,
  (outputs, points) => points.map(point => outputs.map(output => point[output]))
)
