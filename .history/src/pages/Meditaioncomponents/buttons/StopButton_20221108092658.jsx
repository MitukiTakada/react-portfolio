import React from 'react'
import MeditationButton from './atoms/MeditationButton'

const StopButton = ({isPaused, setIsPaused, isPausedRef}) => {
  return (
    <button className="btn stop" >
      Stop
    </button>
  )
}

export default StopButton
