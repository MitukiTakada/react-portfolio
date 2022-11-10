import React, { useEffect } from 'react'
import "./Main.css"


const Main = ({ selectedNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...
    })
  }
  if(!selectedNote) {
    return(
      <div className="no-note">ノートが選択されていません</div>
    )
  }
  return (
    <div className='main' >
      <div className="note-edit">
        <input 
        type="text" 
        value={selectedNote.title} 
        id="title" onChange={(e) => onEditNote("title", e.target.value)}/>
        <textarea 
        id="content" placeholder="ノート内容を記入" 
        value={selectedNote.content} 
        id="content"
        onChange={(e) => onEditNote("content", e.target.value)}
        />
      </div>
      <div className="note-preview">
        <h1 className="preview-title">{selectedNote.title}</h1>
        <div className="preview-content">{selectedNote.content}</div>
      </div>
    </div>
  )
}

export default Main
