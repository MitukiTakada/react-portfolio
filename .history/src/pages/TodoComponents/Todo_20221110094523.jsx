import React, { useContext, useEffect, useState } from 'react'
import LoginContext from '../../LoginContext'
import { useConfirmLogin } from '../../useConfimLogin'
import TaskCards from './task/TaskCards'
import "./Todo.css"
import ToPomodoroButton from './ToPomodoroButton '

const Todo = () => { 
    return (
    <div className="todo">
      <TaskCards />
      <ToPomodoroButton />
    </div>
  )
}

export default Todo