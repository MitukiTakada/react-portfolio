import React, { useState } from 'react'
import "./MeditationButton.css"

const MeditationButton = ({children, color}) => {
  return (
    <button className="common-btn" style={{backgroundColor: color}} onClick={() => console.log()}>
      {children}
    </button>
  )
}

export default MeditationButton
