import React from 'react'
import { useRedux } from '../../../hooks'
import { currentStepSelector, lossSelector } from '../../selectors'
import { errorSelector, warningSelector } from '../../../dataset/selectors'
import Warning from '../../../icons/Warning'
import Error from '../../../icons/Error'
import { List, Row, Bold, Icon, Label } from './style'

const significant4 = number => number.toPrecision(4)

const mapStateToProps = {
  currentStep: currentStepSelector,
  loss: lossSelector,
  errors: errorSelector,
  warnings: warningSelector,
}

const Information = () => {
  const { currentStep, loss, errors, warnings } = useRedux(mapStateToProps)

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
