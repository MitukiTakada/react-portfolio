import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import "./Button.css"

const StopButton = () => {
  const {isPaused, setIsPaused} = useContext(MeditationContext);
  return (
    <button className="btn stop" onClick={start}>
      Stop
    </button>
  )
}

export default StopButton
