import { createSelector } from 'reselect'

export const inputsSelector = createSelector(
  state => state.dataPoints.inputs,
  state => state.dataPoints.points,
  (inputs, points) => points.map(point => inputs.map(input => point[input]))
)

export const labelsSelector = createSelector(
  state => state.dataPoints.outputs,
  state => state.dataPoints.points,
  (outputs, points) => points.map(point => outputs.map(output => point[output]))
)
