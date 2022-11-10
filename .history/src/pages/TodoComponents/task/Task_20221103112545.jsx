import React, { useState } from 'react'
import "./Task.css"

const Task = ({ task, tasks }) => {
  const handleDeleteTask = () => {
    const newTaskArray = tasks.
  }
  return (
    <div className="task">
      <div className="task-content">
          {task.content}
      </div>
      <button onClick={handleDeleteTask} className="taskDeleteButton">削除</button>
    </div>
  )
}

export default Task
