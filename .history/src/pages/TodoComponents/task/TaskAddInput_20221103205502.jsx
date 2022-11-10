import React, { useState } from 'react'
import "./TaskAddInput.css";
import uuid from 'react-uuid';

const TaskAddInput = (props) => {
  const {taskInput, setTaskInput, tasks, setTasks} = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        content: taskInput,
        draggableId: `task-${tasks}`
      }
    ])
    setTaskInput("");
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
