import React from 'react'
import "./Button.css"

const StopButton = ({isPaused, setIsPaused, isPausedRef}) => {
  return (
    <button className="btn stop" >
      Stop
    </button>
  )
}

export default StopButton
