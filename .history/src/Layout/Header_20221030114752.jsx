import React from 'react'
import Link from "react-router"
const Header = () => {
  return (
    <header>
      <h1>Morning App</h1>
      <Link to={"/Loging"}/>
    </header>
  )
}

export default Header
