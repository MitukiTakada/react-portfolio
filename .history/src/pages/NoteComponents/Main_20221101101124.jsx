import React, { useContext } from 'react'
import "./Main.css"
import { ActiveContext } from './provider/ActiveProvider'

const Main = ({ selectedNote }) => {
  const {activeNote, setActiveNote} = use
  return (
    <div className='main' >
      <div className="note-edit">
        <input type="text"/>
        <textarea id="" placeholder="ノート内容を記入"/>
      </div>
      <div className="note-preview">
        <h1 className="preview-title">タイトル</h1>
        <div className="preview-content">ノート内容</div>
      </div>
    </div>
  )
}

export default Main
