import React, { useState } from 'react';
import PomoTimer from './PomoTimer';
import Setting from './Setting';
import SettingContext from './SettingContext';
import "./Timer.css";

const Timer = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="timer-body">
      <main>
        <SettingContext.Provider value={{}}>
          {showSettings ? <Setting />}
        </SettingContext.Provider>
      </main>
    </div>
  )
}

export default Timer
