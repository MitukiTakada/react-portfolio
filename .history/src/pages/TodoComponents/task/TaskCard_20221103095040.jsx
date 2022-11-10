import React, { useState } from 'react'
import TaskAddInput from './TaskAddInput'
import TaskCardDeleteButton from './TaskCardDeleteButton'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'
import "./TaskCard.css"

const TaskCard = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([])
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput 
      setTaskInput={setTaskInput} 
      taskInput={taskInput}
      tasks={tasks}
      setTasks={setTasks}
      />
      <Tasks tasks={tasks} setTasks/>
    </div>
  )
}

export default TaskCard