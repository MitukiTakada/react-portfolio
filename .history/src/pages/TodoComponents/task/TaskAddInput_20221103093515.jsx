import React, { useState } from 'react'
import "./TaskAddInput.css";

const TaskAddInput = () => {
  const [taskInput, setTaskInput] = useState("")
  return (
    <div>
       <form >
         <input 
         className="taskInput" 
         type="text" value={taskInput} 
         onChange={() => setTaskInput(e.target.value)}
         placeholder="タスクを入力"/>
       </form>
    </div>
  )
}

export default TaskAddInput
