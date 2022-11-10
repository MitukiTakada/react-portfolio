import React from 'react'
import AddTaskCardButton from './AddTaskCardButton'
import TaskCard from './TaskCard'

const TaskCards = () => {
  return (
    <div className="taskCards">
      <TaskCard />
      <AddTaskCardButton />
    </div>
  )
}

export default TaskCards
