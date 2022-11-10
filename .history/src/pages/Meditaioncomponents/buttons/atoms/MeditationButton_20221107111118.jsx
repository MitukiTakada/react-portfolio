import React from 'react'
import "./MeditationButton.css"

const MeditationButton = ({children}) => {
  return (
    <button className="common-btn">
      {children}
    </button>
  )
}

export default MeditationButton
