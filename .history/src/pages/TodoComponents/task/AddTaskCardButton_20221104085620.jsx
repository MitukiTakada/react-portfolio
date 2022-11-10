import React from 'react'
import uuid from 'react-uuid'
import "./AddTaskCardButton.css"

const AddTaskCardButton = ({taskCards, setTaskCards}) => {
  const uuid = uuid()
  const addTaskCard = () => {[
    ...taskCards, 
    {
      id: uuid
    }
  ]}
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
