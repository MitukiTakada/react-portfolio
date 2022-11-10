import React from 'react'
import "./AddTaskCardButton.css"

const AddTaskCardButton = ({taskCard}) => {
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton">+</button>
    </div>
  )
}

export default AddTaskCardButton
