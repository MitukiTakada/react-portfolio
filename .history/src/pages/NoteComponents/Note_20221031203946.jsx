import React, { useState } from 'react'
import "./Note.css"

import Main from './Main'
import Sidebar from './Sidebar'


const Note = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    title: "新しいノート",
    
  }])
  return (
    <div className='note'>
      <Sidebar notes={notes} setNotes={setNotes}/>
      <Main />
    </div>
  )
}

export default Note
