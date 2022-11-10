import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import "./Button.css";

const StartButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext(MeditationContext);
  const startTimer = () => {
    setIsPaused(false);
    isPausedRef.current = false;
  }
  return (
    <button className="btn start" onClick={startTimer}>
      Start
    </button>
      
  )
}

export default StartButton
