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

  return {
    y: isNaN(calc) ? 1 : calc,
    x,
  }
})

export default {
  equation: 'y = \\sin(x) \\div x',
  inputs: ['x'],
  outputs: ['y'],
  points,
}
