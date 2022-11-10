import React from 'react'
import MeditationButton from './atoms/MeditationButton'

const StopButton = ({isPaused, setIsPaused, isPausedRef}) => {
  return (
    <MeditationButton color={"rgb(231, 78, 78)"} onClick={() => console.log(clicked)}>
      Stop
    </MeditationButton>
  )
}

export default StopButton
