import React from 'react'
import "./Meditation.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const green = "#4aec8c";
const Meditation = () => {
  return (
    <div className="meditation">
      <main>
        <CircularProgressbar 

        styles={buildStyles({textColor: `#fff`, pathColor:green, trailColor:  `rgba(255,255,255, .2)`,
    })}/>
      <div></div>
      </main>
    </div>
  )
}

export default Meditation
