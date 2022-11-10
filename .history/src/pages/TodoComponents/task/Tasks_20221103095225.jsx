import React from 'react'

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      {tasks.map((task) => {
        return (
          <p></p>
        )
      })}
    </div>
  )
}

export default Tasks
