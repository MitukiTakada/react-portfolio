import React from 'react'
import "./AddTaskCardButton.css"

const AddTaskCardButton = ({taskCards, setTaskCards}) => {
  const addTaskCard = () => {[
    ...taskCards, 
    
  ]}
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
