import React from 'react'
import { useNavigate } from 'react-router'
import 

const ToTodoButton = () => {
  const navigate = useNavigate();
  return (
    <div className="next-btn-area">
      <button className="next-btn">
         Next!
      </button>
    </div>
  )
}

export default ToTodoButton
