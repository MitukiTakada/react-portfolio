import React from 'react'
import NextButton from '../Meditaioncomponents/buttons/NextButton'
import AddTaskCardButton from './task/button/AddTaskCardButton'
import TaskCards from './task/TaskCards'
import "./Todo.css"

const Todo = () => {
  return (
    <div className="todo">
      <TaskCards />
      <ToPomodoroButton />
    </div>
  )
}

export default Todo
