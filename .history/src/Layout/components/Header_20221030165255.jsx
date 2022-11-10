import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <h1>Morning App</h1>
      <div className='pages'>
        <Link to={"/todo"} >Todo p</Link>
        <Link to={"/timer"}>Pomodoro</Link>
        <Link to={"/note"}>note</Link>
      </div>
    </header>
  )
}

export default Header
