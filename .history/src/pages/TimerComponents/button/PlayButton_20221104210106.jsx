import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./PlayButton.css"

const PlayButton = () => {
  return (
    <div className="playButtonArea">
      <button className="playButton">
      <FontAwesomeIcon icon="fa-solid fa-play" />
      </button>
    </div>
  )
}

export default PlayButton
