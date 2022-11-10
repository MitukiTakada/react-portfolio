import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import MeditationButton from './atoms/MeditationButton'

const StartButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext(MeditationContext);
  return (
    <button className="btn start" onClick={() => setIsPaused(false)}>
      Start
    </button>
      
  )
}

export default StartButton
