import React, { useState } from 'react'
import "./MeditationButton.css"

const MeditationButton = ({children, color}) => {
  const [secondsLeft, setSecondsLeft] = useState(10)
  return (
    <button className="common-btn" style={{backgroundColor: color}}>
      {children}
    </button>
  )
}

export default MeditationButton
