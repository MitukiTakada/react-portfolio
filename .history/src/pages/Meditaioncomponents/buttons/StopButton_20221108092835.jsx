import React, { useContext } from 'react'
import "./Button.css"

const StopButton = () => {
  const {isPaused, setIsPaused} = useContext()
  return (
    <button className="btn stop" onClick={}>
      Stop
    </button>
  )
}

export default StopButton
