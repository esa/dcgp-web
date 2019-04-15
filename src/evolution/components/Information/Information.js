import React from 'react'
import styled from 'styled-components'
import { useRedux } from '../../../hooks'
import { currentStepSelector, lossSelector } from '../../selectors'
import Warning from '../../../icons/Warning'

const significant4 = number => number.toPrecision(4)

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 15px;
`

const Row = styled.li`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 1.7;
`

const Bold = styled.b`
  font-size: 18px;
  margin-right: 0.25em;
  flex-grow: 1;
`

const Icon = styled.span`
  color: ${({ theme }) => theme.orange};
  margin: 0 8px;
`

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
