import React, { useContext, useState } from 'react';
import PomoTimer from './PomoTimer';
import Setting from './Setting';
import SettingContext from './SettingContext';
import "./Timer.css";

const Timer = () => {
  const {confirmLogin}
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="timer-body">
      <main>
        <SettingContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes, 
          setBreakMinutes
        }}>
          {showSettings ? <Setting /> : <PomoTimer/>}
        </SettingContext.Provider>
      </main>
    </div>
  )
}

export default Timer
