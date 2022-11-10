import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import "./Setting.css"
import SettingContext from './SettingContext'

const Setting = () => {
  const settingInfo = useContext(SettingContext)
  return (
    <div className="settings">
      <label>work: {settingInfo.workMinutes}</label>
        <ReactSlider 
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingInfo.workMinutes}
        min={1}
        max={120}
        />
      <label>break: {settingInfo.breakMinutes}:00</label>
      <label>work minutes:</label>
        <ReactSlider 
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingInfo.breakMinutes}
        onChange={}
        min={1}
        max={120}
        />
      <label>break minutes:</label>
    </div>
  )
}

export default Setting
