import React from 'react'
import { Button, useDisclosure} from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router';
import { useNav } from './headerhooks/useNav';

const DrawerComp = (props) => {
  const {onClose, isOpen} = props;
  const {changePage} = useNav()
  return (
    <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={() => changePage("")}>Top</Button>
              <Button w="100%" onClick={() => changePage("meditation")}>瞑想アプリ</Button>
              <Button w="100%" onClick={() => changePage("note")}>ノートアプリ</Button>
              <Button w=!></Button>
              <Button w="100%" onClick={() => changePage("timer")}>ポモドーロタイマー </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
    </Drawer>
  )
}

export default DrawerComp
