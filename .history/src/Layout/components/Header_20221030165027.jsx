import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <h1>Morning App</h1>
      <Link to={"/todo"} >Todo App</Link>
      <Link to={"/timer"}>Pomodoro</Link>
      <Link to={"/note"}>note</Link>
    </header>
  )
}

export default Header
