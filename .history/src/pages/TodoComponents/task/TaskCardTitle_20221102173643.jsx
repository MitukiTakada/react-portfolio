import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  }
  return (
    <div onClick={handleClick}>
      {clicked ? <form></form> : (

      )}
    </div>
  )
}

export default TaskCardTitle
