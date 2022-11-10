import React, { useContext } from 'react'
import MeditationContext from '../MeditationContext'
import MeditationButton from './atoms/MeditationButton'

const StartButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext(MeditationContext);
  return (
    <MeditationButton color={"rgb(26, 226, 226)"} onClick={() => setIsPaused()}>
      Start
    </MeditationButton>
      
  )
}

export default StartButton
