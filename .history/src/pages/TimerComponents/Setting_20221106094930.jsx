import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import BackButton from './button/BackButton'
import "./Setting.css"
import SettingContext from './SettingContext'

const Setting = () => {
  const {workMinutes,breakMinutes,setWorkMinutes, setBreakMinutes} = useContext(SettingContext)
  return (
    <div className="settings">
      <label className="label">work: {workMinutes}:00</label>
        <ReactSlider 
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={workMinutes}
        onChange={newValue => setWorkMinutes(newValue)}
        min={1}
        max={120}
        />
      <label>break: {breakMinutes}:00</label>
      <label className="label">break: {breakMinutes}:00</label>
        <ReactSlider 
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={breakMinutes}
        onChange={newValue => setBreakMinutes(newValue)}
        min={1}
        max={120}
        />
        <BackButton />
    </div>
  )
}

export default Setting
