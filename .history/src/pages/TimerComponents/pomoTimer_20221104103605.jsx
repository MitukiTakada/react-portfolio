import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ScrollRestoration } from 'react-router-dom';

const PomoTimer = () => {
  const red = "#"
  return (
    <div>
      <CircularProgressbar value={60} text={`60%`} styles={buildStyles({textColor: `#fff`, pathColor: red, trailColor:  `rgba(255,255,255, .2)`,

    })}/>;
    <div>

    </div>
    </div>
  )
}

export default PomoTimer
