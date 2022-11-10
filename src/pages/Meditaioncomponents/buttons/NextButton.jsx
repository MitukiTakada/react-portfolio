import React from 'react'
import { useNavigate } from 'react-router'
import "./Button.css"

const NextButton = () => {
  const navigate = useNavigate();
  
  return (
    <div className="next-btn-area">
      <button className="btn next" onClick={() => navigate("/note")}>
        Next!
      </button>
    </div>
  )
}

export default NextButton
