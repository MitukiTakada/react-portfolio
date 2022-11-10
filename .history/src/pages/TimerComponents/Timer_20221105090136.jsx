import React, { useState } from 'react';
import PomoTimer from './PomoTimer';
import Setting from './Setting';
import "./Timer.css";

const Timer = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="timer-body">
      <main>
        {showSettings ? <Setting /> : <PomoTimer showSettings={showSettings} setShowSettings={setShowSettings}/>}
      </main>
    </div>
  )
}

export default Timer
