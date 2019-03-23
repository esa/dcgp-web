import React, { useCallback } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { useRedux } from '../../../hooks'
import { setAlgorithm, ONE_PLUS_LAMBDA } from '../../actions'
import { algorithmSelector } from '../../selectors'
import Container from '../Container'

const Algorithm = () => {
  const { dispatch, getState } = useRedux()
  const state = getState()
  const algorithm = algorithmSelector(state)

  const handleChange = useCallback(
    event => dispatch(setAlgorithm(event.target.value)),
    [dispatch]
  )

  return (
    <Container title="Algorithm">
      <RadioGroup
        aria-label="Algorithm"
        name="algorithm"
        value={algorithm.id}
        onChange={handleChange}
      >
        <FormControlLabel
          value={ONE_PLUS_LAMBDA}
          control={<Radio />}
          label="one plus lambda"
        />
        <FormControlLabel
          value="null"
          control={<Radio />}
          label="TBA"
          disabled
        />
        <FormControlLabel
          value="null"
          control={<Radio />}
          label="TBA"
          disabled
        />
      </RadioGroup>
    </Container>
  )
}

export default Algorithm
