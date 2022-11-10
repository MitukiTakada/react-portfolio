import React, { useContext, useEffect, useState } from 'react'
import "./Note.css"
import Main from './Main'
import Sidebar from './Sidebar'


const Note = () => {
  const [activeNote, setActiveNote] = useState(false);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [{
    id: "1",
    cont
  }])
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  const getActiveNote = () => {
    return notes.find((note) => {
      return note.id === activeNote
    })
  }
  
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    })
    setNotes(updatedNotesArray)
  }
  
  
  return (
      <div className='note'>
        <Sidebar notes={notes} setNotes={setNotes} activeNote={activeNote} setActiveNote={setActiveNote}/>
        <Main selectedNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
      </div>
  )
}

export default Note
