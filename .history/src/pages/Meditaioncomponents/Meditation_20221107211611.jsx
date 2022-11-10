import React, { useEffect, useRef, useState } from 'react'
import "./Meditation.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StartButton from './buttons/StartButton';
import StopButton from './buttons/StopButton';

const green = "#4aec8c";
const Meditation = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(10);

  const secondsLeftRef = useRef(secondsLeft);

  const initTimer = () => {
    setSecondsLeft(selectedMinutes * 60)
  }
  useEffect(() => {
    
  }, [])
  const total = secondsLeft * 60;
  const percentage = (secondsLeft / total) * 100;
  const minutes = secondsLeft / 60;
  const seconds = secondsLeft % 60;
  return (
    <div className="meditation">
      <main>
        <CircularProgressbar 
        value={percentage}
        text={`${minutes}+${seconds}`}
        styles={buildStyles({textColor: `#fff`, pathColor:green, trailColor:  `rgba(255,255,255, .2)`,
    })}/>
      <div className="buttons">
        <StartButton />
        <StopButton />
      </div>
      </main>
    </div>
  )
}

export default Meditation
