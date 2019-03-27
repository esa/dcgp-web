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
  const calc = 0.5 * Math.pow(x - 2, 2) + 2 * (x - 2) + Math.random()

  return {
    y: isNaN(calc) ? 1 : calc,
    x,
    '1': 1,
  }
})

export default {
  equation: 'y = 0.5(x - 2)^2 + 2(x - 2) + noise',
  inputs: ['x', '1'],
  outputs: ['y'],
  points,
}
