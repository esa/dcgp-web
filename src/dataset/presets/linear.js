const xBounds = {
  start: -10,
  end: 10,
  step: 1,
}

const inputPoints = []

for (let index = xBounds.start; index <= xBounds.end; index += xBounds.step) {
  inputPoints.push(index)
}

const points = inputPoints.map(x => [2 * x + 2, x])

export default {
  id: 'linear',
  name: 'linear',
  mutable: false,
  equations: ['y = 2x+2'],
  // array of column indices of the points matrix
  inputs: [1],
  // array of column indices of the points matrix
  outputs: [0],
  // labels for each column of the points matrix
  labels: ['y', 'x'],
  points,
}
