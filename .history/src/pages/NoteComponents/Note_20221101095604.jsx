import React, { useContext, useState } from 'react'
import "./Note.css"

import Main from './Main'
import Sidebar from './Sidebar'
import { ActiveContext, ActiveProvider } from './provider/ActiveProvider'


const Note = () => {
  const {activeNote, setActiveNote} = useContext(ActiveContext);
  const [notes, setNotes] = useState([{
    id: 1,
    title: "新しいノート",
    content: "ノートの内容",
    modDate: Date.now()
  }])
  const getActiveNote = () => {
    const activeNote = notes.find((note) => {
      note.id === activeNote;
    })
  }
  return (
    <ActiveProvider>
      <div className='note'>
        <Sidebar notes={notes} setNotes={setNotes}/>
        <Main selectedNote={getActiveNote}/>
      </div>
    </ActiveProvider>
    
  )
}

export default Note
