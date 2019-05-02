import React, { useState, useMemo, useCallback } from 'react'
import copy from 'copy-to-clipboard'
import { useRedux } from '../../../hooks'
import { usePredictionEquations } from '../../../dcgpProxy/hooks'
import Divider from '../../../ui/components/Divider'
import {
  equationsSelector,
  outputLabelsSelector,
} from '../../../dataset/selectors'
import { EquationBlock, GridContainer, Bold, Row } from './style'
import SubHeader from '../../../ui/components/SubHeader'
import CircleButton from '../../../ui/components/CircleButton'
import CheckBox from '../../../icons/CheckBox'
import Clipboard from '../../../icons/Clipboard'

const mapStateToProps = {
  equations: equationsSelector,
  outputLabels: outputLabelsSelector,
}

const Equations = () => {
  const [isSimplified, setSimplified] = useState(false)
  const [isShowingPrediction, setShowingPrediction] = useState(true)
  const [copyVariant, setCopyVariant] = useState('default')
  const { equations, outputLabels } = useRedux(mapStateToProps)
  const predictionEquations = usePredictionEquations(
    isSimplified,
    isShowingPrediction
  )

  const handleChangeSimplification = useCallback(
    () => setSimplified(state => !state),
    []
  )

  const handleChangeShowingPrediction = useCallback(
    () => setShowingPrediction(state => !state),
    []
  )

  const completePredictionEquations = useMemo(
    () =>
      predictionEquations.map(
        (equationBody, i) => outputLabels[i] + ' = ' + equationBody
      ),
    [outputLabels, predictionEquations]
  )

  useMemo(() => {
    setCopyVariant('default')
    return [predictionEquations, equations]
  }, [equations, predictionEquations])

  const handleCopy = useCallback(() => {
    if (!isShowingPrediction) {
      try {
        copy('')
        setCopyVariant('check')
      } catch (error) {
        setCopyVariant('error')
      }
      return
    }

    if (completePredictionEquations.length) {
      try {
        copy(completePredictionEquations.join('\n'))
        setCopyVariant('check')
      } catch (error) {
        setCopyVariant('error')
      }
    }
  }, [completePredictionEquations, isShowingPrediction])

  return (
    <GridContainer>
      <SubHeader>Equations</SubHeader>
      <Divider css="margin-bottom: 15px" />
      {equations && (
        <div css="margin-bottom: 30px;">
          <Row css="margin-bottom: 15px;">
            <Bold css="flex-grow: 1;">Label equations:</Bold>
          </Row>
          {equations.map(equation => (
            <EquationBlock key={equation} equation={equation} />
          ))}
        </div>
      )}
      <Row
        css="margin-bottom: 8px; cursor: pointer;"
        onClick={handleChangeShowingPrediction}
      >
        <span css="flex-grow: 1;">Show prediction equation:</span>
        <CheckBox checked={isShowingPrediction} />
      </Row>
      <Row
        css="margin-bottom: 8px; cursor: pointer;"
        onClick={handleChangeSimplification}
      >
        <span css="flex-grow: 1;">Simplify prediction equation:</span>
        <CheckBox checked={isSimplified} />
      </Row>
      <Row css="margin-bottom: 15px; margin-top: 15px;">
        <Bold css="flex-grow: 1;">Prediction equation:</Bold>
        <CircleButton
          onClick={handleCopy}
          css="margin-right: -4px;"
          title="Copy as LaTeX"
          size={32}
          padding={4}
          variant="ghost"
        >
          <Clipboard variant={copyVariant} size={null} />
        </CircleButton>
      </Row>
      {isShowingPrediction &&
        completePredictionEquations.map(equation => (
          <EquationBlock key={equation} equation={equation} />
        ))}
    </GridContainer>
  )
}

export default Equations
