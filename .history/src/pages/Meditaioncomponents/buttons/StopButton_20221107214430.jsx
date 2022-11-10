import React from 'react'
import MeditationButton from './atoms/MeditationButton'

const StopButton = ({isPaused }) => {
  return (
    <MeditationButton color={"rgb(231, 78, 78)"} >
      Stop
    </MeditationButton>
  )
}

export default StopButton
