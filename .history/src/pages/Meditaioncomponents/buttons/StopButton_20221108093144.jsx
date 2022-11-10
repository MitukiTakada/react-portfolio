import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import "./Button.css"

const StopButton = () => {
  const {isPaused, setIsPaused} = useContext(MeditationContext);
  const startTimer = () => {
    setIsPaused(true);
    console.log(isPaused);
  }
  return (
    <button className="btn stop" onClick={startTimer}>
      Stop
    </button>
  )
}

export default StopButton
