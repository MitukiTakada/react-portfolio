import React, { useContext, useEffect, useState } from 'react'
import LoginContext from '../../LoginContext'
import TaskCards from './task/TaskCards'
import "./Todo.css"
import ToPomodoroButton from './ToPomodoroButton '

const Todo = () => { 
  const [isLogin, setIsLogin] = useState(false);
  const confirmLogin = () => {
    if(isLogin === false) {
      alert("aaa")
    }
  }
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
