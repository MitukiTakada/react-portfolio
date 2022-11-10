import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = (props) => {
  const {notes, setNotes} = props;
  const onAddNote = () => {
    
  }
  return (
    <div className='side-bar'>
      <div className='side-top'>
        <div className='title-text'>
          <h1>メモアプリ</h1>
          <p>今日ツイートする内容を書き出しましょう</p>
        </div>
        <button className='add button' onClick={onAddNote}>追加</button>
      </div>
      <div className='sidebar-content'>
        <div className="content-note">
          <div className="note-title">
            <strong>タイトル</strong>
            <button className="delete button">削除</button>
          </div>
          <p>ノートの内容です</p>
          <small>最後の修正日</small>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
