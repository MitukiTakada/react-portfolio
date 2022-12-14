import React, { useEffect, useRef, useState } from 'react'
import "./Meditation.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Select } from '@chakra-ui/react'
import StartButton from './buttons/StartButton';
import StopButton from './buttons/StopButton';
import MeditationContext from './MeditationContext';
import NextButton from './buttons/NextButton';
import { faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons';

const green = "#4aec8c";
const Meditation = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(5);
  const [isPaused, setIsPaused] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const setTimer = (e) => {
    setSelectedMinutes(e.target.value);
    setIsFinished(true);
  }
  const initTimer = () => {
    const newNum = selectedMinutes * 60;
    setSecondsLeft(newNum);
  }
  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }
  useEffect(() => {
    initTimer();
    secondsLeftRef.current = selectedMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
    const interval = setInterval(() => {
      if(isPausedRef.current) {
        return;
      } 
      if(secondsLeftRef.current === 0) {
        setIsFinished(true);
      }
      tick();
    }, 1000)
    return () => clearInterval(interval);
  }, [selectedMinutes])
  const total = selectedMinutes * 60;
  const percentage = Math.round(secondsLeftRef.current / total * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = "0" + seconds;
  return (
    <MeditationContext.Provider value={{isPausedRef, isPaused, setIsPaused}}>
      <div className="meditation">
        <div className="select-minutes">
          <Select spacing={3} size="md" w="200px" defaultValue="10" variant='outline' onChange={(e) => setTimer(e)}>
            <option value="3">3minutes</option>
            <option value="5">5minutes</option>
            <option value="10">10minutes</option>
          </Select>
        </div>
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
        <div className="message">
          {isFinished ? (
            <h2>??????????????????????????????????????????????????????????????????</h2>
          ) : (
            <h2>5?????????10????????????????????????????????????????????????????????????????????????????????????</h2>
          )}
        </div>
        {isFinished && (
          <div className="next-btn">
            <NextButton />
          </div>
        )}
      </div>
    </MeditationContext.Provider>
  )
}

export default Meditation
