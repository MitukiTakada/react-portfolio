import React from 'react'
import "./MeditationButton.css"

const MeditationButton = ({children, color}) => {
  return (
    <button className="common-btn" style={{backg}}>
      {children}
    </button>
  )
}

export default MeditationButton
