import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  const [notes, setNotes] = useStat
  return (
    <div className='side-bar'>
      <div className='title-text'>
        <h2>メモアプリ</h2>
        <p>今日ツイートする内容を書き出しましょう</p>
      </div>

    </div>
  )
}

export default Sidebar
