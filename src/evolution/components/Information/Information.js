import React, { useMemo } from 'react'
import { useRedux } from '../../../hooks'
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
import { List, Row, Bold, Icon, Label } from './style'

const significant4 = number => number.toPrecision(4)

const mapStateToProps = {
  currentStep: currentStepSelector,
  loss: lossSelector,
  errors: errorSelector,
  evolutionWarnings: evolutionWaringSelector,
  datasetWarnings: datasetWaringSelector,
}

const Information = () => {
  const {
    currentStep,
    loss,
    errors,
    evolutionWarnings,
    datasetWarnings,
  } = useRedux(mapStateToProps)

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
        {loss && significant4(loss)}
      </Row>
      <Row>
        <Bold>Step:</Bold>
        {currentStep}
      </Row>
    </List>
  )
}

export default Information
