import React, { useState } from 'react'
import "./TaskAddInput.css";

const TaskAddInput = () => {
  const [taskInput, setTaskInput] = useState("")
  const handleSubmit = () => {
    
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
