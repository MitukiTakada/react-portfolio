import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <h2>Morning App</h2>
      <div className='pages'>
        ＜Link
        <Link to={"/todo"} >Todo </Link>
        <Link to={"/timer"}>Pomodoro</Link>
        <Link to={"/note"}>Note</Link>
      </div>
    </header>
  )
}

export default Header
