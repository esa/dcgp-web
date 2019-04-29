import React, { useContext, useMemo, useState, useCallback } from 'react'
import { ThemeContext } from 'styled-components'
import {
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import { useRedux } from '../../../hooks'
// import { usePredictions } from '../../../dataset/hooks'
import Divider from '../../../ui/components/Divider'
import {
  inputLabelsSelector,
  outputLabelsSelector,
  inputIndicesSelector,
  outputIndicesSelector,
  labelsSelector,
  pointsSelector,
} from '../../../dataset/selectors'
import { StyledLineChart, GridContainer, Select } from './style'

const MAX_PLOTTED_POINTS = 70

const structurePoints = (points, labels) => {
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

  for (let i = 0; i < array1.length; i++) {
    result.push({ ...array1[i], ...array2[i] })
  }

  return result
}

const subSampleData = array => {
  if (array.length < MAX_PLOTTED_POINTS) return array

  const stepSize = Math.round(array.length / MAX_PLOTTED_POINTS)

  return array.filter((_, i) => i % stepSize === 0)
}

const mapStateToProps = {
  inputLabels: inputLabelsSelector,
  outputLabels: outputLabelsSelector,
  inputsIndices: inputIndicesSelector,
  outputsIndices: outputIndicesSelector,
  points: pointsSelector,
  labels: labelsSelector,
}

const Plot = () => {
  const {
    inputLabels,
    outputLabels,
    // inputsIndices,
    // outputsIndices,
    points,
    labels,
  } = useRedux(mapStateToProps)
  const theme = useContext(ThemeContext)
  const [selectedInput, setSelectedInput] = useState(inputLabels[0])
  const [selectedOutput, setSelectedOutput] = useState(outputLabels[0])

  const handleInputChange = useCallback(e => setSelectedInput(e.value), [])
  const handleOutputChange = useCallback(e => setSelectedOutput(e.value), [])

  // const { predictions, keys: predictionKeys } = usePredictions()

  const structuredPoints = useMemo(() => structurePoints(points, labels), [
    points,
    labels,
  ])

  const data = useMemo(() => {
    const mergedData = mergeObjectArrays(structuredPoints, [])

    const sortedData = selectedInput
      ? mergedData.sort((a, b) => a[selectedInput] - b[selectedInput])
      : mergedData

    return subSampleData(sortedData)
  }, [structuredPoints, selectedInput])

  if (inputLabels.length !== 0 && !inputLabels.includes(selectedInput)) {
    setSelectedInput(inputLabels[0])
  }

  if (outputLabels.length !== 0 && !outputLabels.includes(selectedOutput)) {
    setSelectedOutput(outputLabels[0])
  }

  return (
    <GridContainer>
      <div css="margin: 0 5px; position: relative; padding-bottom: 65%;">
        <div css="width: 100%; height: 100%; position: absolute;">
          <ResponsiveContainer>
            <StyledLineChart
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <CartesianGrid />
              <XAxis
                dataKey={selectedInput}
                domain={['auto', 'auto']}
                type="number"
              />
              <YAxis width={45} />
              <Legend verticalAlign="top" height={36} />
              <Line
                name="labels"
                type="monotone"
                dataKey={selectedOutput}
                dot={{ fill: theme.primary, r: 4 }}
                stroke="transparent"
                animationDuration={0}
              />
              {/* <Line
                name="predictions"
                dataKey={predictionKeys[0]}
                type="monotone"
                dot={{ r: 0 }}
                stroke={theme.secundary}
                animationDuration={500}
              /> */}
            </StyledLineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Divider css="margin: 15px 0;" />
      <div css="display: flex; align-items: center; margin-bottom: 8px;">
        Select input:
        <div css="flex-grow: 1;" />
        <Select
          value={selectedInput}
          // inputValue={selectedInput}
          onChange={handleInputChange}
          options={inputLabels.map(label => ({ value: label, label }))}
        />
      </div>
      <div css="display: flex; align-items: center;">
        Select output:
        <div css="flex-grow: 1;" />
        <Select
          value={selectedOutput}
          // inputValue={selectedOutput}
          onChange={handleOutputChange}
          options={outputLabels.map(label => ({ value: label, label }))}
        />
      </div>
      {/* PLOT STUFF */}
    </GridContainer>
  )
}

export default Plot
