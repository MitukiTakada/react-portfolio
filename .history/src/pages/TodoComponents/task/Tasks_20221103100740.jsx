import React from 'react'
import Task from './Task';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task task={task}/>
        )
      })}
    </div>
  )
}

export default Tasks
