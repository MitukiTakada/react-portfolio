import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import "./Button.css"

const StopButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext(MeditationContext);
  const stopTimer = () => {
    setIsPaused(true);
    console.log(isPausedRef)
    isPausedRef.current = true;
  }
  return (
    <button className="btn stop" onClick={stopTimer}>
      Stop
    </button>
  )
}

export default StopButton
