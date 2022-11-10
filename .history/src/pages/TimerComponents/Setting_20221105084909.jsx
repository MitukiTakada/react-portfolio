import React from 'react'
import ReactSlider from 'react-slider'

const Setting = () => {
  return (
    <div className="settings">
      <label>work minutes</label>
      <ReactSlider/>
      <label>break minutes</label>
    </div>
  )
}

export default Setting
