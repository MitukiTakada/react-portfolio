import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import BackButton from './button/BackButton'
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
        onChange={newValue => settingInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
        />
      <label>break: {settingInfo.breakMinutes}:00</label>
      <label className="label">work minutes:</label>
        <ReactSlider 
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingInfo.breakMinutes}
        onChange={newValue => settingInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
        />
        <BackButton />
    </div>
  )
}

export default Setting
