import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { usePredictions } from '../../../dcgpProxy/hooks'
import Divider from '../../../ui/components/Divider'
import {
  inputLabelsSelector,
  outputLabelsSelector,
  labelsSelector,
  untransposedPointsSelector,
  inputsSelector,
} from '../../../dataset/selectors'
import { GridContainer } from './style'
import Chart from './Chart'
import AxisSelection from './AxisSelection'
import {
  subSampleData,
  structurePoints,
  structurePointsUntransposed,
  mergeObjectArrays,
  filterPoints,
} from './utils'

const Plot = () => {
  const inputLabels = useSelector(inputLabelsSelector)
  const outputLabels = useSelector(outputLabelsSelector)
  const points = useSelector(untransposedPointsSelector)
  const inputs = useSelector(inputsSelector)
  const labels = useSelector(labelsSelector)

  const [selectedInput, setSelectedInput] = useState(inputLabels[0])
  const [selectedOutput, setSelectedOutput] = useState(outputLabels[0])

  const handleInputChange = e => setSelectedInput(e.value)
  const handleOutputChange = e => setSelectedOutput(e.value)

  const structuredInputPoints = useMemo(
    () => structurePoints(inputs, inputLabels),
    [inputLabels, inputs]
  )

  const sampledOutputPoints = useMemo(() => subSampleData(points), [points])
  const structuredOutputPoints = useMemo(
    () => structurePointsUntransposed(sampledOutputPoints, labels),
    [sampledOutputPoints, labels]
  )

  const predictions = usePredictions()
  const structuredPredictionPoints = useMemo(
    () => structurePoints(predictions, outputLabels),
    [predictions, outputLabels]
  )
  const sampledPredictionPoints = useMemo(
    () =>
      subSampleData(
        mergeObjectArrays(structuredInputPoints, structuredPredictionPoints)
      ),
    [structuredInputPoints, structuredPredictionPoints]
  )

  const filteredPredictionPoints = useMemo(
    () => filterPoints(sampledPredictionPoints, selectedOutput),
    [sampledPredictionPoints, selectedOutput]
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
        outputPoints={structuredOutputPoints}
        predictionPoints={filteredPredictionPoints}
        selectedInput={selectedInput}
        selectedOutput={selectedOutput}
      />
      <AxisSelection
      css="margin-top: 30px;"
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
    </GridContainer>
  )
}

export default Plot
