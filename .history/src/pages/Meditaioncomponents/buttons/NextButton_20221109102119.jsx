import React from 'react'
import { useNavigate } from 'react-router'
import "./Button.css"

const NextButton = () => {
  const navigate = useNavigate();
  const nextStep = () => {
    navigate("/")
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
