const MAX_PLOTTED_POINTS = 60

export const structurePoints = (points, labels) => {
  if (points.length === 0) return points

  const result = []

  for (let j = 0; j < points[0].length; j++) {
    const rowObject = {}

    for (let i = 0; i < points.length; i++) {
      rowObject[labels[i]] = points[i][j]
    }

    result.push(rowObject)
  }

  return result
}

export const structurePointsUntransposed = (points, labels) => {
  if (points.length === 0) return points

  const result = []

  for (let j = 0; j < points.length; j++) {
    const rowObject = {}

    for (let i = 0; i < points[0].length; i++) {
      rowObject[labels[i]] = points[j][i]
    }

    result.push(rowObject)
  }

  return result
}

export const mergeObjectArrays = (array1, array2) => {
  if (array1.length === 0) return array2

  if (array2.length === 0) return array1

  const sharedPoints = Math.min(array1.length, array2.length)

  // https://jsperf.com/object-merging
  const result = []

  for (let i = 0; i < sharedPoints; i++) {
    result.push(Object.assign(array1[i], array2[i]))
  }

  return result
}

export const subSampleData = array => {
  if (array.length < MAX_PLOTTED_POINTS) return array

  const stepSize = Math.round(array.length / MAX_PLOTTED_POINTS)

  let result = []

  for (let i = 0; i < array.length; i += stepSize) {
    result.push(array[i])
  }

  return result
}

export const filterPoints = (points, selectedKey) => {
  if (points.length === 0) return points

  let result = points.slice(0)

  for (let i = points.length - 1; i >= 0; i--) {
    if (!isFinite(points[i][selectedKey])) result.splice(i, 1)
  }

  return result
}
