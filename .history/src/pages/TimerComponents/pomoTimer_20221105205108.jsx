import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./PomoTimer.css"
import PauseButton from './button/PauseButton';
import PlayButton from './button/PlayButton';
import SettingButton from './button/SettingButton';

const PomoTimer = () => {
  const red = "#f54e4e";
  const green = "#4aec8c";
  const {showSettings, setShowSettings} = useContext(SettingContext)
  return (
    <div>
      <CircularProgressbar value={60} text={`60%`} styles={buildStyles({textColor: `#fff`, pathColor: red, trailColor:  `rgba(255,255,255, .2)`,
    })}/>
    <div className="timer-btns">
      <PlayButton />
      <PauseButton />
    </div>
    <div>
      <SettingButton onCli/>
    </div>
    </div>
  )
}

export default PomoTimer
