import React from 'react'
import { Button, useDisclosure} from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router';

const Drawer = () => {
  const {onClose, isOpen} = useDisclosure();
  const navigate = useNavigate();
  return (
    <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={() => navigate("/")}>Top</Button>
              <Button w="100%" onClick={() => navigate("/meditation")}>瞑想アプリ</Button>
              <Button w="100%">ポモドーロタイマー </Button>
              <Button w="100%">メモアプリ</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
    </Drawer>
  )
}

export default Drawer
