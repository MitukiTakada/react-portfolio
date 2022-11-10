import React from 'react'
import ReactSlider from 'react-slider'
import "./Setting.css"

const Setting = () => {
  return (
    <div className="settings">
      <label>work minutes:</label>
        <ReactSlider 
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={45}
        min={1}
        max={120}
        />
      <label>break minutes:</label>
      <label>work minutes:</label>
        <ReactSlider 
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={45}
        min={1}
        max={120}
        />
      <label>break minutes</label>
    </div>
  )
}

export default Setting
