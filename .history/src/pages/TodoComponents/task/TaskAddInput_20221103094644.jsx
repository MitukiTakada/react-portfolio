import React, { useState } from 'react'
import "./TaskAddInput.css";

const TaskAddInput = (props) => {
  const {taskInput, setTaskInput} = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskInput()
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
         <input 
         className="taskInput" 
         type="text" value={taskInput} 
         onChange={(e) => setTaskInput(e.target.value)}
         placeholder="タスクを入力"/>
       </form>
    </div>
  )
}

export default TaskAddInput
