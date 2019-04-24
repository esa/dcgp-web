import React from 'react'
import CircleButton from '../../../ui/components/CircleButton'
import Play from '../../../icons/Play'
import Pause from '../../../icons/Pause'

const PlayPauseButton = ({
  isPlaying,
  handlePause,
  handlePlay,
  ...restProps
}) => (
  <CircleButton
    {...restProps}
    onClick={isPlaying ? handlePause : handlePlay}
    title={isPlaying ? 'Pause' : 'Play'}
    size={58}
    padding={10}
  >
    {isPlaying ? <Pause size={null} /> : <Play size={null} />}
  </CircleButton>
)

export default PlayPauseButton
