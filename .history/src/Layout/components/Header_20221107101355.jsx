import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Humburger from './Humburger'
import {Flex ,useDisclosure} from "@chakra-ui/react"
import DrawerComp from './DrawerComp'


const Header = () => {
  const {onClose, isOpen, onOpen} = useDisclosure();
  return (
    <header className='header'>
      <div className='header-left'>
        <h2>Morning App</h2>
          <Flex display={{base: "none", md: "block"}} ml={7}>
            <div className='pages'>
              <Link to={"/"}>Login<span>→</span></Link>
              <Link to={"/meditation"}>Meditation<span>→</span></Link>
              <Link to={"/todo"} >Todo<span>→</span></Link>
              <Link to={"/timer"}>Pomodoro</Link>
              <Link to={"/note"}>Note</Link>
            </div> 
          </Flex>
      </div>
      <Humburger onOpen={onOpen}/>
      <DrawerComp onClose={onClose} isOpen={isOpen}/>
    </header>
  )
}

export default Header
