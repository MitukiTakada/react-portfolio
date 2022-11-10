import React, { useState } from 'react'
import "./MeditationButton.css"

const MeditationButton = ({children, color}) => {
  return (
    <button className="common-btn" style={{backgroundColor: color}} on>
      {children}
    </button>
  )
}

export default MeditationButton
