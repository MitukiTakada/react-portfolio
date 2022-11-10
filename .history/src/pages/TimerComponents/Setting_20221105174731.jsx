import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import "./Setting.css"

const Setting = () => {
  const settingInfo = useContext(SettingContext)
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
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={45}
        min={1}
        max={120}
        />
      <label>break minutes:</label>
    </div>
  )
}

export default Setting