import React, { useState, useMemo } from 'react'
import copy from 'copy-to-clipboard'
import { useSelector } from 'react-redux'
import { usePredictionEquations } from '../../../dcgpProxy/hooks'
import Divider from '../../../ui/components/Divider'
import {
  equationsSelector,
  outputLabelsSelector,
} from '../../../dataset/selectors'
import { EquationBlock, GridContainer, Bold, Row } from './style'
import SubHeader from '../../../ui/components/SubHeader'
import CircleButton from '../../../ui/components/CircleButton'
import Eye from '../../../icons/Eye'
import Fold from '../../../icons/Fold'
import Clipboard from '../../../icons/Clipboard'

const Equations = () => {
  const [isSimplified, setSimplified] = useState(false)
  const [isShowingPrediction, setShowingPrediction] = useState(true)
  const [copyVariant, setCopyVariant] = useState('default')
  const equations = useSelector(equationsSelector)
  const outputLabels = useSelector(outputLabelsSelector)

  const predictionEquations = usePredictionEquations(
    isSimplified,
    isShowingPrediction
  )

  const handleChangeSimplification = () => setSimplified(state => !state)
  const handleChangeShowingPrediction = () =>
    setShowingPrediction(state => !state)

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

  const handleCopy = () => {
    if (isShowingPrediction && completePredictionEquations.length > 0) {
      try {
        copy(completePredictionEquations.join('\n'))
        setCopyVariant('check')
      } catch (error) {
        setCopyVariant('error')
      }
    }
  }

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
      <Row css="margin: 15px 0;">
        <Bold css="flex-grow: 1;">Prediction equation:</Bold>
        <CircleButton
          onClick={handleChangeShowingPrediction}
          title={`${isShowingPrediction ? 'Hide' : 'Show'} prediction equation`}
          size={38}
          padding={8}
          variant="ghost"
        >
          <Eye isVisible={isShowingPrediction} size={null} />
        </CircleButton>
        <CircleButton
          onClick={handleChangeSimplification}
          title={isSimplified ? 'Expand equation' : 'Simplify equation'}
          css="margin: 0 8px;"
          size={38}
          padding={8}
          variant="ghost"
        >
          <Fold open={!isSimplified} size={null} />
        </CircleButton>
        <CircleButton
          onClick={handleCopy}
          css="margin-right: -8px;"
          title="Copy as LaTeX"
          size={38}
          padding={8}
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
