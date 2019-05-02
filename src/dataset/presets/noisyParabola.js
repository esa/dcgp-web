const xBounds = {
  start: -4,
  end: 4,
  step: 0.3,
}

const inputPoints = []

for (let index = xBounds.start; index <= xBounds.end; index += xBounds.step) {
  inputPoints.push(index)
}

const points = inputPoints.map(x => {
  // 0.5(x - 2) ^ 2 + 2(x - 2)
  const calc = 0.5 * (x - 2) ** 2 + 2 * (x - 2) + Math.random() - 0.5 // -0.5 to remove random bias

  return [isFinite(calc) ? calc : 1, x]
})

export default {
  id: 'noisyParabola',
  name: 'noisy parabola',
  mutable: false,
  equations: ['y = 0.5(x - 2)^2 + 2(x - 2) + noise'],
  // array of column indices of the points matrix
  inputs: [1],
  // array of column indices of the points matrix
  outputs: [0],
  // labels for each column of the points matrix
  labels: ['y', 'x'],
  points,
}
