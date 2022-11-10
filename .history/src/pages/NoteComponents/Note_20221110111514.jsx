import React, { useContext, useEffect, useState } from 'react'
import "./Note.css"
import Main from './Main'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router'
import { useToast } from '@chakra-ui/toast'
import LoginContext from '../../LoginContext'



const Note = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {isLogin} = useContext(LoginContext);
  const [activeNote, setActiveNote] = useState(false);
  const _isLogin = localStorage.getItem("isLogin")
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [{
    id: "1",
    content: "新しい内容",
    title: "新しいノート"
  }])
  useEffect(() => {
    if(isLogin === false) {
      toast({
        position: "top",
        title: "ログインしてください",
        status: "error",
        duration: 5000,
        isClosable: true
      })
      navigate("/")
    }
  },[])

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
