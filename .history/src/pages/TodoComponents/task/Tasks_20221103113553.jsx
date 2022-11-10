import React from 'react'
import Task from './Task';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      <DtagDropContext>
      {tasks.map((task) => {
        return (
          <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
        )
      })}
    </div>
  )
}

export default Tasks
