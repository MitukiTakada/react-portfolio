import React from 'react'
import "./PlayButton.css"
import {FontAwesomeIcon}

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
