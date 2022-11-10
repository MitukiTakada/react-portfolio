import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Humburger from './Humburger'
import {Flex, Button} from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'


const Header = () => {
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
      <Humburger />
      <Drawer>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <Button></Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </header>
  )
}

export default Header
