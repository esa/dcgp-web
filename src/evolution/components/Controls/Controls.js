import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useRedux } from '../../../hooks'
import { startEvolution, pauseEvolution, resetEvolution } from '../../actions'
import { evolutionStateSelector } from '../../selectors'
import PlayPauseButton from '../PlayPauseButton'
import CircleButton from '../CircleButton'
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

// const getAction = evolutionState => {
//   switch (evolutionState) {
//     case 'EVOLVING':
//       return pauseEvolution
//     case 'EMPTY':
//     case 'PAUSING':
//       return startEvolution
//     default:
//       break
//   }
// }

const Controls = () => {
  const { dispatch, getState } = useRedux()
  const state = getState()
  const evolutionState = evolutionStateSelector(state)

  const handleReset = useCallback(() => dispatch(resetEvolution()), [dispatch])
  const handlePlay = useCallback(() => dispatch(startEvolution()), [dispatch])
  const handlePause = useCallback(() => dispatch(pauseEvolution()), [dispatch])

  return (
    <ControlWrapper>
      <CircleButton onClick={handleReset} title="Reset">
        <Reset />
      </CircleButton>
      <PlayPauseButton
        isPlaying={evolutionState === 'EVOLVING'}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
      <CircleButton onClick={console.log} title="Next step">
        <Next />
      </CircleButton>
    </ControlWrapper>
  )
}

export default Controls
