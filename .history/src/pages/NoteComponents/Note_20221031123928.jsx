import React from 'react'
import "./Note.css"

import Main from './Main'
import Sidebar from './Sidebar'


const Note = () => {
  return (
    <div className='note'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Note
