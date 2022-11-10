import React, { useState } from 'react'
import uuid from 'react-uuid'
import AddTaskCardButton from './button/AddTaskCardButton'
import TaskCard from './TaskCard'
import "./TaskCards.css"

const TaskCards = () => {
  const taskId = uuid();
  const [taskCards, setTaskCards] = useState([{
    id: tas, 
    title: "today"
  }]);
  return (
    <div className="taskCards">
      {taskCards.map((taskCard) => {
        return (
          <div>
            <TaskCard 
            key={taskCard.id}
            taskCard={taskCard}
            taskCards={taskCards} 
            setTaskCards={setTaskCards}/>
          </div>
        )
      })}
      <AddTaskCardButton taskCards={taskCards} setTaskCards={setTaskCards}/>
    </div>
  )
}

export default TaskCards
