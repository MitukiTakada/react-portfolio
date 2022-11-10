import React, { useState } from 'react'

const TaskAddInput = () => {
  const [taskInput, setTaskInput] = useState("")
  return (
    <div>
       <form >
         <input className="taskInput" type="text" value={taskInput} placeholder="タスクを入力"/>
       </form>
    </div>
  )
}

export default TaskAddInput
