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
  return (
    <div onClick={handleClick}>
      {clicked ? (
      <form onSubmit={handleSubmit}> 
        <input 
        auto
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
        onBlur={() => setClicked(false)}
        type="text"/> 
      </form>) : 
      (
        <h3>{inputTitle}</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
