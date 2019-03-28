const xBounds = {
  start: 0,
  end: 4,
  step: 0.075,
}

const inputPoints = []

for (let index = xBounds.start; index <= xBounds.end; index += xBounds.step) {
  inputPoints.push(index)
}

const points = inputPoints.map(x => {
  const calc = Math.sin(Math.exp(x))

  return {
    y: isNaN(calc) ? 0 : calc,
    x,
  }
})

export default {
  equation: 'y = \\sin(\\exp(x))',
  inputs: ['x'],
  outputs: ['y'],
  points,
}
