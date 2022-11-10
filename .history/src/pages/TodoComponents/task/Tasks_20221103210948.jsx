import React from 'react'
import Task from './Task';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  
  return (
    <div>
       <div>
        {tasks.map((task, index) => {
          return (
            <div key={task.id}>
              <Task task={task} index={index} tasks={tasks} setTasks={setTasks}/>
            </div>
             )
        })}
        </div>
    </div>
  )
}

export default Tasks
