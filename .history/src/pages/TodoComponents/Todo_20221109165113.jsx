import React, { useContext, useEffect, useState } from 'react'
import LoginContext from '../../LoginContext'
import TaskCards from './task/TaskCards'
import "./Todo.css"
import ToPomodoroButton from './ToPomodoroButton '

const Todo = () => { 
  
  useEffect(() => {
    confirmLogin();
  }, [])
    return (
    <div className="todo">
      <TaskCards />
      <ToPomodoroButton />
    </div>
  )
}

export default Todo
