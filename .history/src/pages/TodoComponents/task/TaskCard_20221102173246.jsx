import React from 'react'
import TaskAddInput from './TaskAddInput'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'
import "./TasCard.css"

const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}

export default TaskCard
