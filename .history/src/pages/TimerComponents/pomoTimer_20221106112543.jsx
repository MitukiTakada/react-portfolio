import React, { useContext, useEffect, useState, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./PomoTimer.css"
import PauseButton from './button/PauseButton';
import PlayButton from './button/PlayButton';
import SettingButton from './button/SettingButton';
import SettingContext from './SettingContext';

const red = "#f54e4e";
const green = "#4aec8c";

const PomoTimer = () => {
  const {workMinutes, breakMinutes} = useContext(SettingContext);
  const settingInfo = useContext(SettingContext);
  const [mode, setMode] = useState("work")
  const [isPaused, setIsPaused] = useState(true);
  const [secondLeft, setSecondLeft] = useState(0);
  
  const secondsLeftRef = useRef(secondLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  useEffect(() => {
    console.log("")
  })

  const tick = () => {
    secondsLeftRef.current--;
    setSecondLeft(secondsLeftRef.current);
    console.log("tick");
  }

  const initTimer = () => {
    setSecondLeft(workMinutes * 60);
  }

  useEffect(() => {
    initTimer();
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds = (nextMode === "work" ? workMinutes: breakMinutes) * 60;
      setMode(nextMode);
      modeRef.current = nextMode;
      setSecondLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };
    secondsLeftRef.current = workMinutes * 60;
    setSecondLeft(secondsLeftRef.current);
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode()
      }

      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [settingInfo]);
  const totalSeconds = mode === "work" 
  ? workMinutes * 60 : breakMinutes * 60;

  const percentage = Math.round(secondLeft / totalSeconds * 100);

  const minutes = Math.floor(secondLeft / 60);
  let seconds = secondLeft % 60;
  if(seconds < 10)  seconds = "0" + seconds;

  return (
    <div>
      <CircularProgressbar value={percentage} text={minutes + ":" + seconds} styles={buildStyles({textColor: `#fff`, pathColor: mode === "work" ? red : green, trailColor:  `rgba(255,255,255, .2)`,
    })}/>
    <div className="timer-btns">
      {isPaused ? <PlayButton isPaused={isPaused} setIsPaused={setIsPaused}/> : <PauseButton isPaused={isPaused} setIsPaused={setIsPaused}/>}
    </div>
    <div>
      <SettingButton/>
    </div>
    </div>
  )
}

export default PomoTimer
