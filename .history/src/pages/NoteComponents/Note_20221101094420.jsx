import React, { useState } from 'react'
import "./Note.css"

import Main from './Main'
import Sidebar from './Sidebar'
import { ActiveContext } from './provider/ActiveProvider'


const Note = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    title: "新しいノート",
    content: "ノートの内容",
    modDate: Date.now()
  }])
  return (
    <ActiveContext>

    </ActiveContext>
    
  )
}

export default Note
