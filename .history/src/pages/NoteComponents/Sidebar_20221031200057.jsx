import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  const [notes, setNotes] = useState([])
  return (
    <div className='side-bar'>
      <div className='side-top'>
        <div className='title-text'>
          <h1>メモアプリ</h1>
          <p>今日ツイートする内容を書き出しましょう</p>
        </div>
        <button className='add-button'>追加</button>
      </div>
      <div className='sidebar-content'>
        <div className="note">
          <div clas></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
