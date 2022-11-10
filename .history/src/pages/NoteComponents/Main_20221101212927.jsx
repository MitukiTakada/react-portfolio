import React, { useEffect } from 'react'
import "./Main.css"


const Main = ({ selectedNote }) => {
  console.log(selectedNote)
  return (
    <div className='main' >
      <div className="note-edit">
        <input type="text"/>
        <textarea id="" placeholder="ノート内容を記入"/>
      </div>
      <div className="note-preview">
        <h1 className="preview-title">{se</h1>
        <div className="preview-content"></div>
      </div>
    </div>
  )
}

export default Main
