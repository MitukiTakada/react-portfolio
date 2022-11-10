import React, { useState } from 'react'


const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <h3>Counter:{counter}</h3>
      <button on>Reset</button>
    </div>
  )
}

export default Counter
