import React from 'react'
import uuid from 'react-uuid'
import "./AddTaskCardButton.css"

const AddTaskCardButton = ({taskCards, setTaskCards}) => {
  const uuid = uuid()
  const addTaskCard = () => {
  }
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
