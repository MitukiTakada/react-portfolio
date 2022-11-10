import React, { useEffect } from 'react'
import "./Main.css"


const Main = ({ activeNote }) => {
  
  return (
    <div className='main' >
      <div className="note-edit">
        <input type="text"/>
        <textarea id="" placeholder="ノート内容を記入"/>
      </div>
      <div className="note-preview">
        <h1 className="preview-title">aa</h1>
        <div className="preview-content">ノート内容</div>
      </div>
    </div>
  )
}

export default Main
