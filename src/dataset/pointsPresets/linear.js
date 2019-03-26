const xBounds = {
  start: -10,
  end: 10,
  step: 1,
}

const inputPoints = []

for (let index = xBounds.start; index <= xBounds.end; index += xBounds.step) {
  inputPoints.push(index)
}

const points = inputPoints.map(input => ({
  y: 2 * input + 2,
  '1': 1,
  x: input,
}))

export default {
  equation: 'y = 2x+2',
  inputs: ['x', '1'],
  outputs: ['y'],
  points,
}
