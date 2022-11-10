import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import SettingContext from '../SettingContext'
import "./PlayButton.css"

const PlayButton = (props) => {
  const {isPaused, setIsPaused} = props;
  const switchPause = () => {
    console.log("pause")
  }
  return (
    <div className="playButtonArea">
      <button className="playButton" onClick={switchPause}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
      </button>
    </div>
  )
}

export default PlayButton
