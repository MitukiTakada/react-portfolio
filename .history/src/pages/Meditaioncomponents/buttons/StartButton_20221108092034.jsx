import React, { useContext } from 'react'
import MeditationButton from './atoms/MeditationButton'

const StartButton = () => {
  const {isPaused, setIsPaused, isPausedRef} = useContext()
  return (
    <MeditationButton color={"rgb(26, 226, 226)"}>
      Start
    </MeditationButton>
      
  )
}

export default StartButton
