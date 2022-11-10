import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PomoTimer = () => {
  return (
    <div>
      <CircularProgressbar value={60} text={`%`} />;
    </div>
  )
}

export default PomoTimer
