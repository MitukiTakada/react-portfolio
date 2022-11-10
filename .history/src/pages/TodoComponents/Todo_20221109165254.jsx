import React, { useContext, useEffect, useState } from 'react'
import LoginContext from '../../LoginContext'
import { useConfirmLogin } from '../../useConfimLogin'
import TaskCards from './task/TaskCards'
import "./Todo.css"
import ToPomodoroButton from './ToPomodoroButton '

const Todo = () => { 
  const {isLogin, confirmLogin} = useConfirmLogin();
  console.log(isLogin);
    return (
    <div className="todo">
      <TaskCards />
      <ToPomodoroButton />
    </div>
  )
}

export default Todo
