import React from 'react'
import ReactSlider from 'react-slider'

const Setting = () => {
  return (
    <div className="settings">
      <label>work minutes</label>
      <ReactSlider 
      className="slider"
      thumbClassName="thumb"
      trackClassName="track"
      />
      <label>break minutes</label>
    </div>
  )
}

export default Setting
