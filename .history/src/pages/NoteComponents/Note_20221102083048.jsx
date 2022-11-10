import React, { useContext, useState } from 'react'
import "./Note.css"
import Main from './Main'
import Sidebar from './Sidebar'


const Note = () => {
  const [activeNote, setActiveNote] = useState(false);
  const [notes, setNotes] = useState([{
    id: 1,
    title: "新しいノート",
    content: "ノートの内容",
    modDate: Date.now()
  }])
  const getActiveNote = () => {
    return notes.find((note) => {
      return note.id === activeNote
    })
  }
  
  return (
      <div className='note'>
        <Sidebar notes={notes} setNotes={setNotes} activeNote={activeNote} setActiveNote={setActiveNote}/>
        <Main selectedNote={getActiveNote()}/>
      </div>
  )
}

export default Note
