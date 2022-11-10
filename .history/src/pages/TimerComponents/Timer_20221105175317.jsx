import React, { useContext, useState } from 'react';
import PomoTimer from './PomoTimer';
import Setting from './Setting';
import SettingContext from './SettingContext';
import "./Timer.css";

const Timer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15)
  return (
    <div className="timer-body">
      <main>
        <SettingContext.Provider value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes
        }}>
          {showSettings ? <Setting /> : <PomoTimer showSettings={showSettings} setShowSettings={setShowSettings}/>}
        </SettingContext.Provider>
      </main>
    </div>
  )
}

export default Timer
