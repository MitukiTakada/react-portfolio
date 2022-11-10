import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  const [notes, setNotes] = useState([])
  return (
    <div className='side-bar'>
      <div className='title-text'>
        <h2>メモアプリ</h2>
        <p>今日ツイートする内容を書き出しましょう</p>
      </div>
      <div className='sidebar-contents'>

      </div>
    </div>
  )
}

export default Sidebar
