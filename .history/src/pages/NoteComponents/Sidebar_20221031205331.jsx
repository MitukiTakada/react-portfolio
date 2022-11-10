import React, { useState } from 'react'
import "./Sidebar.css"
import uuid from 'react-uuid';

const Sidebar = (props) => {
  const {notes, setNotes} = props;

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now()
    }
    setNotes([...notes, newNote])
  }
  const deleteNote = () => {
    notes.filter(() => {
      
    })
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
            <div className="content-note" key={note.id}>
            <div className="note-title">
              <strong>{note.title}</strong>
              <button className="delete button" onClick={deleteNote}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit"
            })}</small>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar