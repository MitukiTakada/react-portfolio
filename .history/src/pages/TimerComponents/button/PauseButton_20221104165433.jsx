import React from 'react'
import "./PauseButton.css"
import { Play}

const PauseButton = () => {
  return (
    <div className="pauseButtonArea">
     <button className="pauseButton">Pause</button>
     <button>
        <PlayIcon />
     </button>
    </div>
  )
}

export default PauseButton
