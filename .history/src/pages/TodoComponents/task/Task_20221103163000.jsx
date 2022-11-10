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
    <Draggable index={task.id} draggableId={task.draggableId}>
      {(provided) => (

      )}
    </Draggable>
  )
}

export default Task
