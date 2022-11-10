import React from 'react'
import AddTaskCardButton from './task/AddTaskCardButton'
import TaskCards from './task/TaskCards'
import "./Todo.css"

const Todo = () => {
  return (
    <div className="todo">
      <TaskCards />
      <AddTaskCardButton />
    </div>
  )
}

export default Todo
