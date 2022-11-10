import React from 'react';
import PomoTimer from './PomoTimer';
import "./Timer.css";

const Timer = () => {
  return (
    <div className="timer-body">
      <main>
        <PomoTimer />
        <Pause
      </main>
    </div>
  )
}

export default Timer
