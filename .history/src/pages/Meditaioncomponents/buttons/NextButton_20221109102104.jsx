import React from 'react'
import "./Button.css"

const NextButton = () => {
  const nextStep = () => {
    
  }
  return (
    <div className="next-btn-area">
      <button className="btn next" onClick={nextStep}>
        Next!
      </button>
    </div>
  )
}

export default NextButton
