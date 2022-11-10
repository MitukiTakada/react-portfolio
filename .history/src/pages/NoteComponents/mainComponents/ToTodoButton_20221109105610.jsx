import React from 'react'
import { useNavigate } from 'react-router'

const ToTodoButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="next-btn">
         Next!
      </button>
    </div>
  )
}

export default ToTodoButton
