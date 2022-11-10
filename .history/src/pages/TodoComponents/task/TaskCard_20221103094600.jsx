import React, { useState } from 'react'
import TaskAddInput from './TaskAddInput'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'
import "./TaskCard.css"

const TaskCard = () => {
  const [taskInput, setTaskInput] = useState("")
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput setTaskInput={setTaskInput} taskInput={taskInput}/>
      <Tasks setTaskInput={setTaskInput} taskInput={taskInput}/>
    </div>
  )
}

export default TaskCard
