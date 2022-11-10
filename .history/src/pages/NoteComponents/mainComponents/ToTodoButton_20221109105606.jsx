import React from 'react'
import { useNavigate } from 'react-router'

const ToTodoButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="n">
         Next!
      </button>
    </div>
  )
}

export default ToTodoButton
