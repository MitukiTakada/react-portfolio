import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [clicked, setClicked] = useState(false);
  const [inputTitle, setInputTitle] = useState("today")
  const handleClick = () => {
    setClicked(true);
  }
  const handleSubmit = (e) => {
    e.
  }
  return (
    <div onClick={handleClick}>
      {clicked ? (
      <form onSubmit={handleSubmit}> 
        <input 
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
        type="text"/> 
      </form>) : 
      (
        <h3>Today</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
