import React from 'react'
import "./Meditation.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Meditation = () => {
  return (
    <div className="meditation">
      <main>
        <CircularProgressbar styles={buildStyles({textColor: `#fff`, pathColor:green, trailColor:  `rgba(255,255,255, .2)`,
    })}/>
      </main>
    </div>
  )
}

export default Meditation
