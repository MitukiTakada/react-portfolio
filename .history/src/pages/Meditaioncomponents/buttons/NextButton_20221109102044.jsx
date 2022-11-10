import React from 'react'
import "./Button.css"

const NextButton = () => {
  return (
    <div className="next-btn-area">
      <button className="btn next" onClick={go}>
        Next!
      </button>
    </div>
  )
}

export default NextButton
