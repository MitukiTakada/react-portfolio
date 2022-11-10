import React from 'react'

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      {tasks.id}
      {tasks.content}
    </div>
  )
}

export default Tasks
