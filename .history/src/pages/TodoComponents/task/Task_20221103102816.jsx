import React, { useState } from 'react'
import "./Task.css"

const Task = ({ task }) => {
  return (
    <div className="task">
      <div className="task-content">
          {task.content}
    </div>
      <button className="taskDeleteButton">削除</button>
    </div>
  )
}

export default Task
