import React, { useState } from 'react'
import "./Task.css"

const Task = ({ task }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="task">
      {isClicked ? () : ()}
      <div className="task-content">
        {task.content}
      </div>
      <button className="taskDeleteButton">削除</button>
    </div>
  )
}

export default Task
