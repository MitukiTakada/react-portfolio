import React, { useContext, useState } from 'react'
import "./Note.css"

import Main from './Main'
import Sidebar from './Sidebar'
import { ActiveContext, ActiveProvider } from './provider/ActiveProvider'


const Note = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    title: "新しいノート",
    content: "ノートの内容",
    modDate: Date.now()
  }])
  return (
    <ActiveProvider>
      <div className='note'>
        <Sidebar notes={notes} setNotes={setNotes}/>
        <Main notes={notes}/>
      </div>
    </ActiveProvider>
    
  )
}

export default Note
