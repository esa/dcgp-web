import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { setAlgorithm, algorithmsById } from '../../actions'
import { algorithmSelector } from '../../selectors'
import Container from '../Container'
import Radio from '../../../icons/Radio'
import List from '../List'
import { Row } from './style'
import { capitalize } from '../../../utils/string'

const algorithmIds = Object.keys(algorithmsById)

const mapStateToProps = {
  algorithm: algorithmSelector,
}

const Algorithm = () => {
  const { dispatch, algorithm } = useRedux(mapStateToProps)

  const handleChange = useCallback(id => () => dispatch(setAlgorithm(id)), [
    dispatch,
  ])

  return (
    <Container title="Algorithm">
      <List>
        {algorithmIds.map(algorithmId => (
          <Row key={algorithmId} onClick={handleChange(algorithmId)}>
            <Radio checked={algorithm.id === algorithmId} />
            {capitalize(algorithmsById[algorithmId].label)}
          </Row>
        ))}
      </List>
    </Container>
  )
}

export default Algorithm
