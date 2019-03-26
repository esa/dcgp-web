const xBounds = {
  start: -10,
  end: 10,
  step: 1,
}

const inputPoints = []

for (let index = xBounds.start; index <= xBounds.end; index += xBounds.step) {
  inputPoints.push(index)
}

const points = inputPoints.map(input => {
  const calc = Math.sin(input) / input

  return {
    y: isNaN(calc) ? 1 : calc,
    x: input,
  }
})

export default {
  equation: 'y = sin(x) / x',
  inputs: ['x'],
  outputs: ['y'],
  points,
}
