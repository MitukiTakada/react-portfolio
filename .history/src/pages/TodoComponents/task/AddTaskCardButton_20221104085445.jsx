import React from 'react'
import "./AddTaskCardButton.css"

const AddTaskCardButton = ({taskCards, setTaskCards}) => {
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={handle}>+</button>
    </div>
  )
}

export default AddTaskCardButton
