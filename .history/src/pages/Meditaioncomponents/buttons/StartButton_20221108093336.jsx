import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import "./Button.css";

const StartButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext(MeditationContext);
  const startTimer = () => {
    setIsPaused(false);
    isPausedRef.current = false;
    console.log(isPaused);
  }
  return (
    <button className="btn start" onClick={startTimer}>
      Start
    </button>
      
  )
}

export default StartButton
