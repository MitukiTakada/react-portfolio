import React, { useEffect, useRef, useState } from 'react'
import "./Meditation.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StartButton from './buttons/StartButton';
import StopButton from './buttons/StopButton';
import { isObject } from '@chakra-ui/utils';
import MeditationContext from './MeditationContext';

const green = "#4aec8c";
const Meditation = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(5);
  const [isPaused, setIsPaused] = useState(true);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  const initTimer = () => {
    console.log(selectedMinutes);
    const newNum = selectedMinutes * 60;
    console.log(newNum)
    setSecondsLeft(newNum);
    console.log(secondsLeft);
  }
  const tick = () => {
    console.log(seconds)
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }
  useEffect(() => {
    initTimer();
    const interval = setInterval(() => {
      if(isPausedRef.current) {
        return;
      } else {
        tick();
      }
    }, 1000)
    return () => clearInterval(interval);
  }, [])
  const total = secondsLeft * 60;
  const percentage = (secondsLeft / total) * 100;
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = "0" + seconds;
  return (
    <MeditationContext.Provider value={{isPausedRef, isPaused, setIsPaused}}>
      <div className="meditation">
        <main>
          <CircularProgressbar 
          value={percentage}
          text={`${minutes}:${seconds}`}
          styles={buildStyles({textColor: `#fff`, pathColor:green, trailColor:  `rgba(255,255,255, .2)`,
      })}/>
        <div className="buttons">
          <StartButton />
          <StopButton/>
        </div>
        </main>
      </div>
    </MeditationContext.Provider>
  )
}

export default Meditation
