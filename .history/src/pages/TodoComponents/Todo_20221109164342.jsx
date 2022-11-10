import React, { useContext, useEffect } from 'react'
import LoginContext from '../../LoginContext'
import TaskCards from './task/TaskCards'
import "./Todo.css"
import ToPomodoroButton from './ToPomodoroButton '

const Todo = () => {
  const {isLogin} = useContext(LoginContext);
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
