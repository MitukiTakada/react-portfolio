import React from 'react'
import "./MeditationButton.css"

const MeditationButton = ({children, color}) => {
  return (
    <button className="common-btn" background>
      {children}
    </button>
  )
}

export default MeditationButton
