import React, { useContext } from 'react'
import LoginContext from '../../LoginContext'
import NextButton from '../Meditaioncomponents/buttons/NextButton'
import AddTaskCardButton from './task/button/AddTaskCardButton'
import TaskCards from './task/TaskCards'
import "./Todo.css"
import ToPomodoroButton from './ToPomodoroButton '

const Todo = () => {
  const {isLogin} = useContext(LoginContext);
  const confirmLogin = () => {
    if(isLogin === false) {
      alert("")
    }
  }
    return (
    <div className="todo">
      <TaskCards />
      <ToPomodoroButton />
    </div>
  )
}

export default Todo
