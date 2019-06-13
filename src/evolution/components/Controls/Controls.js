import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
  startEvolutionRequest,
  pauseEvolutionRequest,
  resetEvolutionRequest,
  stepEvolutionRequest,
  initialEvolutionRequest,
} from '../../actions'
import { evolutionStateSelector } from '../../selectors'
import PlayPauseButton from '../PlayPauseButton'
import CircleButton from '../../../ui/components/CircleButton'
import Reset from '../../../icons/Reset'
import Next from '../../../icons/Next'

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px;

  & button:nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Controls = () => {
  const evolutionState = useSelector(evolutionStateSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialEvolutionRequest())
  }, [dispatch])

  const handleReset = () => dispatch(resetEvolutionRequest())
  const handlePlay = () => dispatch(startEvolutionRequest())
  const handlePause = () => dispatch(pauseEvolutionRequest())
  const handleStep = () => dispatch(stepEvolutionRequest())

  return (
    <ControlWrapper>
      <CircleButton onClick={handleReset} title="Reset">
        <Reset size={null} />
      </CircleButton>
      <PlayPauseButton
        isPlaying={evolutionState === 'EVOLVING'}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
      <CircleButton onClick={handleStep} title="Next step">
        <Next size={null} />
      </CircleButton>
    </ControlWrapper>
  )
}

export default Controls
