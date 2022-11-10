import React, { useState } from 'react'


const Counter = ({counter, setCounter}) => {
  return (
    <div className="counter">
      <h2>Counter:{counter}</h2>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default Counter
