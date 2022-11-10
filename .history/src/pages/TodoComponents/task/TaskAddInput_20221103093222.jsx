import React, { useState } from 'react'

const TaskAddInput = () => {
  const [taskInput, setTaskInput] = useState("")
  return (
    <div>
       <form >
         <input type="text" value={}placeholder="タスクを入力"/>
       </form>
    </div>
  )
}

export default TaskAddInput
