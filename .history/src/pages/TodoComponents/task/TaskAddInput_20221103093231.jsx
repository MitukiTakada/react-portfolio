import React, { useState } from 'react'

const TaskAddInput = () => {
  const [taskInput, setTaskInput] = useState("aa")
  return (
    <div>
       <form >
         <input type="text" value={taskInput} placeholder="タスクを入力"/>
       </form>
    </div>
  )
}

export default TaskAddInput
