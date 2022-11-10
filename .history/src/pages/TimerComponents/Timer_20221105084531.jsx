import React, { useState } from 'react';
import PomoTimer from './PomoTimer';
import "./Timer.css";

const Timer = () => {
  const [showSettings, setShowSettings] = useState(false)
  return (
    <div className="timer-body">
      <main>
        <PomoTimer />
        <Setting />
      </main>
    </div>
  )
}

export default Timer
