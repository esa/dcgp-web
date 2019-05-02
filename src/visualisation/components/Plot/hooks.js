import { useMemo } from 'react'

const MAX_PLOTTED_POINTS = 60

const structurePoints = (points, labels) => {
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

const mergeObjectArrays = (array1, array2) => {
  if (array1.length === 0) return array2

  if (array2.length === 0) return array1

  const result = []

  const sharedPoints = Math.min(array1.length, array2.length)

  for (let i = 0; i < sharedPoints; i++) {
    result.push({ ...array1[i], ...array2[i] })
  }

  return result
}

const subSampleData = array => {
  if (array.length < MAX_PLOTTED_POINTS) return array

  const stepSize = Math.round(array.length / MAX_PLOTTED_POINTS)

  return array.filter((_, i) => i % stepSize === 0)
}

export const useStucturedPoints = (points2D, labels) =>
  useMemo(() => structurePoints(points2D, labels), [points2D, labels])

export const useSubSampledPoints = (points, inputLabel, outputLabel) =>
  useMemo(() => {
    const sortedPoints = points
      .filter(point => isFinite(point[outputLabel]))
      .sort((a, b) => a[inputLabel] - b[inputLabel])

    return subSampleData(sortedPoints)
  }, [inputLabel, outputLabel, points])

export const useMergedPoints = (points1, points2) =>
  useMemo(() => mergeObjectArrays(points1, points2), [points1, points2])
