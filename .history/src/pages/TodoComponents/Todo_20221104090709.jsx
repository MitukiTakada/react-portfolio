import React from 'react'
import AddTaskCardButton from './task/button/AddTaskCardButton'
import TaskCards from './task/TaskCards'
import "./Todo.css"

const Todo = () => {
  return (
    <div className="todo">
      <TaskCards />
    </div>
  )
}

export default Todo
