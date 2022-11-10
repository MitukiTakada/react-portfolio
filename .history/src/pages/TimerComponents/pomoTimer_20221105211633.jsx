import React, { useContext, useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./PomoTimer.css"
import PauseButton from './button/PauseButton';
import PlayButton from './button/PlayButton';
import SettingButton from './button/SettingButton';
import SettingContext from './SettingContext';

const PomoTimer = () => {
  const {workMinutes} = useContext(SettingContext);
  const [mode, setMode] = useState("work")
  const [isPaused, setIsPaused] = useState(true);
  const [secondLeft, setSecondLeft] = useState(0);
  
  const initTimer = () => {
    setSecondLeft(workMinutes * 60);
  }
  const switchMode = () => {
    const nextMode = mode === "work" ? "break" : "work"
  }

  useEffect(() => {
    initTimer();
    setInterval(() => {
      if(isPaused) {
        return;
      }
      if(secondLeft === 0) {
        switchMode
      }
    }, 1000)
  }, [])

  const red = "#f54e4e";
  const green = "#4aec8c";
  return (
    <div>
      <CircularProgressbar value={60} text={`60%`} styles={buildStyles({textColor: `#fff`, pathColor: red, trailColor:  `rgba(255,255,255, .2)`,
    })}/>
    <div className="timer-btns">
      {isPaused ? <PlayButton/> : <PauseButton/>}
    </div>
    <div>
      <SettingButton/>
    </div>
    </div>
  )
}

export default PomoTimer
