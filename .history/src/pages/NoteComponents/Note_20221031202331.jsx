import React, { useState } from 'react'
import "./Note.css"

import Main from './Main'
import Sidebar from './Sidebar'


const Note = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    content: "",
  }])
  return (
    <div className='note'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Note
