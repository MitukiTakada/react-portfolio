import React, { useState } from 'react'
import AddTaskCardButton from './AddTaskCardButton'
import TaskCard from './TaskCard'
import "./TaskCards.css"

const TaskCards = () => {
  const [taskCards, setTaskCards] = useState([]);
  return (
    <div className="taskCards">
      {taskCards.map((taskCard) => {
        return (
          <
        )
      })}
      <AddTaskCardButton taskCards={taskCards} setTaskCards={setTaskCards}/>
    </div>
  )
}

export default TaskCards
