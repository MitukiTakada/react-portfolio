import React, { useState } from 'react'
import TaskAddInput from './input/TaskAddInput'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskCardTitle from './input/TaskCardTitle'
import Tasks from './Tasks'
import "./TaskCard.css"

const TaskCard = ({ taskCards, setTaskCards}) => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([])
  return (
    <div className="taskCard">
      <div className="taskCard-top">
        <TaskCardTitle />
        <TaskCardDeleteButton taskCards={taskCards} setTaskCards={setTaskCards}/>
      </div>
      <TaskAddInput 
      setTaskInput={setTaskInput} 
      taskInput={taskInput}
      tasks={tasks}
      setTasks={setTasks}
      />
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default TaskCard
