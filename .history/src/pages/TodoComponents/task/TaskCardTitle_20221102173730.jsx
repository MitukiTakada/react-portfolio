import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  }
  return (
    <div onClick={handleClick}>
      {clicked ? (
      <form> <input /> </form>) : (
        <h3>Today</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
