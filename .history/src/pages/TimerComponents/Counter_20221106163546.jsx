import React, { useState } from 'react'


const Counter = ({counter, setCounter}) => {
  return (
    <div className="counter">
      <h3>Counter:{counter}</h3>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default Counter
