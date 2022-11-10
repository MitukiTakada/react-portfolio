import React, { useState } from 'react';
import "./Counter.css"


const Counter = ({counter, setCounter}) => {
  return (
    <div className="counter-width">
    <div className="counter">
      <h2>Counter:{counter}</h2>
      <button className="reset-btn" onClick={() => setCounter(0)}>Reset</button>
    </div>
    </div>
  )
}

export default Counter
