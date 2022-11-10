import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PomoTimer = () => {
  return (
    <div>
      <CircularProgressbar value={60} text={`60%`} styles={buildStyles{}/>;
    </div>
  )
}

export default PomoTimer
