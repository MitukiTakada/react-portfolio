import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='main' >
      <div className="note-edit">
        <input type="text"/>
        <textarea id="" placeholder="ノート内容を記入"/>
      </div>
      <div className="note-preview">

      </div>
    </div>
  )
}

export default Main
