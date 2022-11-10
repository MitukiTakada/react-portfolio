import React from 'react'
import "./Note.css"

import Main from './Main'
import Sidebar from './Sidebar'


const Note = () => {
  return (
    <div className='note'>
      <Main />
      <Sidebar />
    </div>
  )
}

export default Note
