import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Morning App</h1>
      <Link to={"/todo"} >todo app</Link>
      <Link>Timer</Link>
    </header>
  )
}

export default Header
