import React, { useState } from 'react'
import "./Task.css"

const Task = ({ task, tasks, setTasks }) => {
  const handleDeleteTask = (id) => {
    const newTaskArray = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(newTaskArray);
  }
  console.log(task.draggableId)
  return (
        <div 
        className="task" 
        key={task.id} 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
        <div className="task-content">
            {task.content}
        </div>
        <button onClick={() => handleDeleteTask(task.id)} className="taskDeleteButton">削除</button>
      </div>
  )
}

export default Task
