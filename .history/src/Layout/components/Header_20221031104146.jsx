import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Humburger from './Humburger'
import {Flex, Button, useDisclosure} from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'


const Header = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  const navigate = useNavigate()
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
      <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={() => navigate("/")}>Top</Button>
              <Button w="100%" onClick={() => navigate("/")}>瞑想アプリ</Button>
              <Button w="100%">ポモドーロタイマー </Button>
              <Button w="100%">メモアプリ</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </header>
  )
}

export default Header
