import React from 'react'
import "./MeditationButton.css"

const MeditationButton = ({children, color}) => {
  return (
    <button className="common-btn" back>
      {children}
    </button>
  )
}

export default MeditationButton
