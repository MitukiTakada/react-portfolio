import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import "./Button.css"

const StopButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext(MeditationContext);
  console.log(is)
  const stopTimer = () => {
    setIsPaused(true);
    isPausedRef.current = true;
  }
  return (
    <button className="btn stop" onClick={stopTimer}>
      Stop
    </button>
  )
}

export default StopButton
