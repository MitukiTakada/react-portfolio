import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Humburger from './Humburger'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-left'>

      </div>
      <Humburger />
    </header>
  )
}

export default Header
