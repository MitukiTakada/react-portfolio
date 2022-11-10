import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  const [notes, setNotes] = useState([])
  return (
    <div className='side-bar'>
      <div className='side-top'>
        <div>

        </div>
      </div>
      <div className='sidebar-content'>

      </div>
    </div>
  )
}

export default Sidebar
