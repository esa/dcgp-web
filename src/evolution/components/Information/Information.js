import React from 'react'
import styled from 'styled-components'
import { useRedux } from '../../../hooks'
import { currentStepSelector, lossSelector } from '../../selectors'

const significant4 = number => number.toPrecision(4)

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 15px;
`

const Row = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  line-height: 1.7;
`

const Heading = styled.b`
  font-size: 18px;
  margin-right: 0.25em;
`

const mapStateToProps = {
  currentStep: currentStepSelector,
  loss: lossSelector,
}

const Information = () => {
  const { currentStep, loss } = useRedux(mapStateToProps)

  return (
    <List>
      <Row>
        <Heading>Loss:</Heading>
        {loss && significant4(loss)}
      </Row>
      <Row>
        <Heading>Step:</Heading>
        {currentStep}
      </Row>
    </List>
  )
}

export default Information
