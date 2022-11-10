import { useToast } from '@chakra-ui/toast'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import LoginContext from '../../LoginContext'
import TaskCards from './task/TaskCards'
import "./Todo.css"
import ToPomodoroButton from './ToPomodoroButton '

const Todo = () => { 
  const {isLogin} = useContext(LoginContext);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    if(isLogin === false) {
      toast({
        position: "top",
        title: "ログインしてください",
        status: "error",
        duration: 5000,
        isClosable: true
      })
      navigate("/")
    }
  },[])
    return (
    <div className="todo">
      <TaskCards />
      <ToPomodoroButton />
    </div>
  )
}

export default Todo
