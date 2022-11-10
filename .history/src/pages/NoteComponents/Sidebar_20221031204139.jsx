import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = (props) => {
  const {notes, setNotes} = props;
  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now()
    }
    setNotes([...notes, newNote])
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
        {notes.map((note) => {
          return (
            <div className="content-note">
            <div className="note-title">
              <strong>{note.title}</strong>
              <button className="delete button">削除</button>
            </div>
            <p>{note.content}</p>
            <small>{new Date(note.modDate).toLocaleDateString("ja-")}</small>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
