import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [clicked, setClicked] = useState(false);
  const [inputTitle, setInputTitle]
  const handleClick = () => {
    setClicked(true);
  }
  return (
    <div onClick={handleClick}>
      {clicked ? (
      <form> 
        <input type="text"/> 
      </form>) : (
        <h3>Today</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
