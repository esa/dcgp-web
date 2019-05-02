import React, { useState, useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { usePredictions } from '../../../dcgpProxy/hooks'
import Divider from '../../../ui/components/Divider'
import {
  inputLabelsSelector,
  outputLabelsSelector,
  inputIndicesSelector,
  outputIndicesSelector,
  labelsSelector,
  pointsSelector,
  inputsSelector,
} from '../../../dataset/selectors'
import { GridContainer } from './style'
import Chart from './Chart'
import AxisSelection from './AxisSelection'
import {
  useStucturedPoints,
  useSubSampledPoints,
  useMergedPoints,
} from './hooks'

const mapStateToProps = {
  inputLabels: inputLabelsSelector,
  outputLabels: outputLabelsSelector,
  inputsIndices: inputIndicesSelector,
  outputsIndices: outputIndicesSelector,
  points: pointsSelector,
  inputs: inputsSelector,
  labels: labelsSelector,
}

const Plot = () => {
  const { inputLabels, outputLabels, points, labels, inputs } = useRedux(
    mapStateToProps
  )
  const [selectedInput, setSelectedInput] = useState(inputLabels[0])
  const [selectedOutput, setSelectedOutput] = useState(outputLabels[0])

  const handleInputChange = useCallback(e => setSelectedInput(e.value), [])
  const handleOutputChange = useCallback(e => setSelectedOutput(e.value), [])

  const structuredInputPoints = useStucturedPoints(inputs, inputLabels)

  const structuredOutputPoints = useStucturedPoints(points, labels)
  const sampledOutputPoints = useSubSampledPoints(
    structuredOutputPoints,
    selectedInput,
    selectedOutput
  )

  const predictions = usePredictions()
  const structuredPredictionPoints = useStucturedPoints(
    predictions,
    outputLabels
  )
  const mergedPredictionPoints = useMergedPoints(
    structuredInputPoints,
    structuredPredictionPoints
  )
  const sampledPredictionPoints = useSubSampledPoints(
    mergedPredictionPoints,
    selectedInput,
    selectedOutput
  )

  if (inputLabels.length !== 0 && !inputLabels.includes(selectedInput)) {
    setSelectedInput(inputLabels[0])
  }

  if (outputLabels.length !== 0 && !outputLabels.includes(selectedOutput)) {
    setSelectedOutput(outputLabels[0])
  }

  return (
    <GridContainer>
      <Chart
        outputPoints={sampledOutputPoints}
        predictionPoints={sampledPredictionPoints}
        selectedInput={selectedInput}
        selectedOutput={selectedOutput}
      />
      <Divider css="margin: 15px 0;" />
      <AxisSelection
        name="inputs"
        value={selectedInput}
        options={inputLabels}
        onChange={handleInputChange}
      />
      <AxisSelection
        name="outputs"
        value={selectedOutput}
        options={outputLabels}
        onChange={handleOutputChange}
      />
      {/* PLOT STUFF */}
    </GridContainer>
  )
}

export default Plot
