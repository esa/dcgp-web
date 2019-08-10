import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  currentStepSelector,
  lossSelector,
  warningSelector as evolutionWaringSelector,
} from '../../selectors'
import {
  errorSelector,
  warningSelector as datasetWaringSelector,
} from '../../../dataset/selectors'
import Warning from '../../../icons/Warning'
import Error from '../../../icons/Error'
import { List, Row, Bold, Icon, Label, TabularNumbers } from './style'

const significant4 = number => number.toPrecision(4)

const Information = () => {
  const currentStep = useSelector(currentStepSelector)
  const loss = useSelector(lossSelector)
  const errors = useSelector(errorSelector)
  const evolutionWarnings = useSelector(evolutionWaringSelector)
  const datasetWarnings = useSelector(datasetWaringSelector)

  const warnings = useMemo(() => [...evolutionWarnings, ...datasetWarnings], [
    evolutionWarnings,
    datasetWarnings,
  ])

  const showWarning = (isNaN(loss) || loss === Infinity) && loss !== undefined

  return (
    <List>
      {errors.map(error => (
        <Row key={error}>
          <Label>{error}</Label>
          <Icon color="error">
            <Error />
          </Icon>
        </Row>
      ))}
      {warnings.map(warning => (
        <Row key={warning}>
          <Label>{warning}</Label>
          <Icon color="warning">
            <Warning />
          </Icon>
        </Row>
      ))}
      <Row>
        <Bold>Loss:</Bold>
        {showWarning && (
          <Icon css="margin-right: 4px;" color="warning">
            <Warning />
          </Icon>
        )}
        <TabularNumbers>{loss && significant4(loss)}</TabularNumbers>
      </Row>
      <Row>
        <Bold>Step:</Bold>
        <TabularNumbers>{currentStep}</TabularNumbers>
      </Row>
    </List>
  )
}

export default Information
