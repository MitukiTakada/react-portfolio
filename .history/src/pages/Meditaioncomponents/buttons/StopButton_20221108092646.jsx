import React from 'react'
import MeditationButton from './atoms/MeditationButton'

const StopButton = ({isPaused, setIsPaused, isPausedRef}) => {
  return (
    <button c onClick={() => console.log("clicked")}>
      Stop
    </button>
  )
}

export default StopButton
