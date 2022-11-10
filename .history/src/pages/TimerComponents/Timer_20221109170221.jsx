import React, { useContext, useEffect, useState } from 'react';
import { useConfirmLogin } from '../../useConfimLogin';
import PomoTimer from './PomoTimer';
import Setting from './Setting';
import SettingContext from './SettingContext';
import "./Timer.css";

const Timer = () => {
  const {confirmLogin} = useConfirmLogin();
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  useEffect(() => {
    
  })
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
