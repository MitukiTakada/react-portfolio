import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=''>
      <h1>Morning App</h1>
      <Link to={"/todo"} >todo app</Link>
      <Link to={"/timer"}>Pomodoro</Link>
      <Link to={"/note"}>note</Link>
    </header>
  )
}

export default Header
