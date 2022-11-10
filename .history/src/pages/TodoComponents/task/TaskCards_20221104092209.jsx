import React, { useState } from 'react'
import AddTaskCardButton from './button/AddTaskCardButton'
import TaskCard from './TaskCard'
import "./TaskCards.css"

const TaskCards = () => {
  const [taskCards, setTaskCards] = useState([{
    id: "1", 
    title: "today"
  }]);
  return (
    <div className="taskCards">
      {taskCards.map((taskCard) => {
        return (
          <div>
            <TaskCard 
            key={taskCard.id} taskCards={taskCards} setTaskCards={setTaskCards}/>
          </div>
        )
      })}
      <AddTaskCardButton taskCards={taskCards} setTaskCards={setTaskCards}/>
    </div>
  )
}

export default TaskCards
