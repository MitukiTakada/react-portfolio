import React from 'react'

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      {tasks.id}
    </div>
  )
}

export default Tasks
