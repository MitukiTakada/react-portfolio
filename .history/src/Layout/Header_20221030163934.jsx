import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Morning App</h1>
      <Link to={"/todo"} >Todo </Link>
    </header>
  )
}

export default Header
