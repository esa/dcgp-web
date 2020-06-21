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
import ButtonBase from './ButtonBase'
import Reset from '../../../icons/gobackwards'
import Next from '../../../icons/forward/fill'
import Play from '../../../icons/play/fill'
import Pause from '../../../icons/pause/fill'

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 32px;

  & button:nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export default function Controls() {
  const evolutionState = useSelector(evolutionStateSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialEvolutionRequest())
  }, [dispatch])

  const handleReset = () => dispatch(resetEvolutionRequest())
  const handlePlay = () => dispatch(startEvolutionRequest())
  const handlePause = () => dispatch(pauseEvolutionRequest())
  const handleStep = () => dispatch(stepEvolutionRequest())

  const isPlaying = evolutionState === 'EVOLVING'


  return (
    <ControlWrapper>
      <ButtonBase onClick={handleReset} title="Reset" size={21}>
        <Reset />
      </ButtonBase>
      <ButtonBase
      css="margin-left: 20px; margin-right: 20px;"
        size={32}
        onClick={isPlaying ? handlePause : handlePlay}
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause /> : <Play />}
      </ButtonBase>
      <ButtonBase onClick={handleStep} title="Next step" size={21}>
        <Next />
      </ButtonBase>
    </ControlWrapper>
  )
}
