import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import "./Button.css"

const StopButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext(MeditationContext);
  const stopTimer = () => {
    setIsPaused(true);
    isPaused
    console.log(isPaused);
  }
  return (
    <button className="btn stop" onClick={stopTimer}>
      Stop
    </button>
  )
}

export default StopButton
