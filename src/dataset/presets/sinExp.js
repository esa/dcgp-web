const xBounds = {
  start: 0,
  end: 4,
  step: 0.05,
}

const inputPoints = []

for (let index = xBounds.start; index <= xBounds.end; index += xBounds.step) {
  inputPoints.push(index)
}

const points = inputPoints.map(x => {
  const calc = Math.sin(Math.exp(x))

  return [isFinite(calc) ? calc : 0, x]
})

export default {
  id: 'sinExp',
  name: 'sine of exponent',
  mutable: false,
  equations: ['y = \\sin(\\exp(x))'],
  // array of column indices of the points matrix
  inputs: [1],
  // array of column indices of the points matrix
  outputs: [0],
  // labels for each column of the points matrix
  labels: ['y', 'x'],
  points,
}
