import React from 'react'
import MeditationButton from './atoms/MeditationButton'

const StartButton = (isPausedRef) => {
  return (
    <MeditationButton color={"rgb(26, 226, 226)"} onClic>
      Start
    </MeditationButton>
      
  )
}

export default StartButton
