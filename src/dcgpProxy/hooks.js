import { useEffect, useState } from 'react'
import { useRedux } from '../hooks'
import { inputsSelector, inputLabelsSelector } from '../dataset/selectors'
import { lossSelector } from '../evolution/selectors'
import { constantsSelector } from '../settings/selectors'
import { getPredictions, getEquations } from './index'

const mapStateToPredictions = {
  inputs: inputsSelector,
  constants: constantsSelector,
  loss: lossSelector,
}

export const usePredictions = chromosome => {
  const { inputs, constants, loss } = useRedux(mapStateToPredictions)
  const [predictions, setPredictions] = useState([])

  useEffect(() => {
    if (loss === undefined) return

    getPredictions({
      chromosome,
      inputs,
      constants,
    })
      .then(setPredictions)
      .catch(err => {
        setPredictions([])
      })
  }, [chromosome, constants, inputs, loss])

  return predictions
}

const mapStateToEquations = {
  inputLabels: inputLabelsSelector,
  constants: constantsSelector,
  loss: lossSelector,
}

export const usePredictionEquations = (simplified = false, enabled) => {
  const { inputLabels, constants, loss } = useRedux(mapStateToEquations)
  const [equations, setEquations] = useState([])

  useEffect(() => {
    if (loss === undefined || !enabled) {
      setEquations([])
      return
    }

    getEquations({
      inputLabels,
      constants,
      simplified,
    })
      .then(setEquations)
      .catch(err => {
        setEquations([])
      })
  }, [constants, enabled, inputLabels, loss, simplified])

  return equations
}
