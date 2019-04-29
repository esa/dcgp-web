const xBounds = {
  start: -10,
  end: 10,
  step: 0.6,
}

const inputPoints = []

for (let index = xBounds.start; index <= xBounds.end; index += xBounds.step) {
  inputPoints.push(index)
}

const points = inputPoints.map(x => {
  const calc = Math.sin(x) / x

  return [isFinite(calc) ? calc : 1, x]
})

export default {
  id: 'sinc',
  name: 'cardinal sine',
  mutable: false,
  equations: ['y = \\sin(x) \\div x'],
  // array of column indices of the points matrix
  inputs: [1],
  // array of column indices of the points matrix
  outputs: [0],
  // labels for each column of the points matrix
  labels: ['y', 'x'],
  points,
}
