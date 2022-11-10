import React from 'react'
import { useNavigate } from 'react-router'

const ToPomodoroButton  = () => {
  const navigate = useNavigate();
  return (
    <div className="next-btn-area">
      <button className="next-btn" onClick={navigate("/pomodoro")}>
        Next!
    </button>
    </div>
  )
}

export default ToPomodoroButton 
