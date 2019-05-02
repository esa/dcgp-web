import React from 'react'
import { useRedux } from '../../../hooks'
import { currentStepSelector, lossSelector } from '../../selectors'
import Warning from '../../../icons/Warning'
import { List, Row, Bold, Icon } from './style'

const significant4 = number => number.toPrecision(4)

const mapStateToProps = {
  currentStep: currentStepSelector,
  loss: lossSelector,
}

const Information = () => {
  const { currentStep, loss } = useRedux(mapStateToProps)

  const showWarning = (isNaN(loss) || loss === Infinity) && loss !== undefined

  return (
    <List>
      <Row>
        <Bold>Loss:</Bold>
        {showWarning && (
          <Icon>
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
