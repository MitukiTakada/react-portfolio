import React from 'react'
import { useNavigate } from 'react-router'
import "../Main.css"

const ToTodoButton = () => {
  const navigate = useNavigate();

  return (
    <div className="next-btn-area">
      <button className="next-btn" onClick={() => navigate("/todo")}>
         Next!
      </button>
    </div>
  )
}

export default ToTodoButton
