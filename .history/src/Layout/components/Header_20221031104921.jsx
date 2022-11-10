import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import "./Header.css"
import Humburger from './Humburger'
import {Flex ,useDisclosure} from "@chakra-ui/react"
import Drawer from './Drawer'


const Header = () => {
  const {onOpen} = useDisclosure()
  return (
    <header className='header'>
      <div className='header-left'>
        <h2>Morning App</h2>
          <Flex display={{base: "none", md: "block"}} ml={7}>
            <div className='pages'>
              <Link to={"/meditation"}>Meditation</Link>
              <Link to={"/todo"} >Todo </Link>
              <Link to={"/timer"}>Pomodoro</Link>
              <Link to={"/note"}>Note</Link>
            </div> 
          </Flex>
      </div>
      <Humburger onOpen={onOpen}/>
      <Drawer />
    </header>
  )
}

export default Header
