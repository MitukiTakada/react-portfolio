import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import "./Task.css"

const Task = ({ task, tasks, setTasks }) => {
  const handleDeleteTask = (id) => {
    const newTaskArray = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(newTaskArray);
  }
  return (
    <Draggable index={task.id} draggableId={task.draggableId} >
      {(provided) => (
        <div className="task" key={task.id} ref={provided.innerRef}>
        <div className="task-content">
            {task.content}
        </div>
        <button onClick={() => handleDeleteTask(task.id)} className="taskDeleteButton">削除</button>
      </div>
      )}
    </Draggable>
  )
}

export default Task
