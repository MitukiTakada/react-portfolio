import React from 'react'
import MeditationButton from './atoms/MeditationButton'

const StopButton = ({isPaused, setIsPaused, isPausedRef}) => {
  return (
    <button color={"rgb(231, 78, 78)"} onClick={() => console.log("clicked")}>
      Stop
    </button>
  )
}

export default StopButton
