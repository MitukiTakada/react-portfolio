import React from 'react'
import uuid from 'react-uuid'
import "./AddTaskCardButton.css"

const AddTaskCardButton = ({taskCards, setTaskCards}) => {
  const cardId = uuid();
  const addTaskCard = () => {
    setTaskCards([
      ...taskCards, 
      {
        id: cardId,
        title: "todoをにゅう"
      }
    ])
  }
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
