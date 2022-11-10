import React, { useContext, useEffect, useRef, useState, } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./PomoTimer.css"
import PauseButton from './button/PauseButton';
import PlayButton from './button/PlayButton';
import SettingButton from './button/SettingButton';
import SettingContext from './SettingContext';
import Counter from './Counter';

const red = "#f54e4e";
const green = "#4aec8c";

const PomoTimer = () => {
  const settingInfo = useContext(SettingContext);
  const [mode, setMode] = useState("work")
  const [isPaused, setIsPaused] = useState(true);
  const [secondLeft, setSecondLeft] = useState(0);
  const [counter, setCounter] = useState(3);
  
  const secondsLeftRef = useRef(secondLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondLeft(secondsLeftRef.current);
  }

  const initTimer = () => {
    setSecondLeft(settingInfo.workMinutes * 60);

  }

  useEffect(() => {
    initTimer();
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds = (nextMode === "work" ? settingInfo.workMinutes: settingInfo.breakMinutes) * 60;
      setMode(nextMode);
      modeRef.current = nextMode;
      setSecondLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };
    secondsLeftRef.current = settingInfo.workMinutes * 60;
    setSecondLeft(secondsLeftRef.current);
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        setCounter(counte)
        return switchMode()
      }

      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [settingInfo]);
  const totalSeconds = mode === "work" 
  ? settingInfo.workMinutes * 60 : settingInfo.breakMinutes * 60;

  const percentage = Math.round(secondLeft / totalSeconds * 100);

  const minutes = Math.floor(secondLeft / 60);
  let seconds = secondLeft % 60;
  if(seconds < 10)  seconds = "0" + seconds;

  return (
    <div>
      <CircularProgressbar value={percentage} text={minutes + ":" + seconds} styles={buildStyles({textColor: `#fff`, pathColor: mode === "work" ? red : green, trailColor:  `rgba(255,255,255, .2)`,
    })}/>
    <Counter counter={counter} setCounter={setCounter}/>
    <div className="timer-btns">
      {isPaused ? <PlayButton isPaused={isPaused} setIsPaused={setIsPaused} isPausedRef={isPausedRef}/> : <PauseButton isPaused={isPaused} setIsPaused={setIsPaused} isPausedRef={isPausedRef}/>}
    </div>
    <div>
      <SettingButton/>
    </div>
    </div>
  )
}

export default PomoTimer
