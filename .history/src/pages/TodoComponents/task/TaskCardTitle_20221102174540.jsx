import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [clicked, setClicked] = useState(false);
  const [inputTitle, setInputTitle] = useState("today")
  const handleClick = () => {
    setClicked(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(false);
  }
  const handleB
  return (
    <div onClick={handleClick}>
      {clicked ? (
      <form onSubmit={handleSubmit}> 
        <input 
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
        onBlur={handleBlur}
        type="text"/> 
      </form>) : 
      (
        <h3>{inputTitle}</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
