import React from 'react';
import {IconButton} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"

const Humburger = ({}) => {
  const openModal = () => {
    console.log("clicked")
  }
  return (
    <div>
      <IconButton aria-label='メニューボタン' as={HamburgerIcon}  size="sm" variant="unstyled" display={{base: "block", md: "none"}} color="white" _hover={{cursor:"pointer", color: "brown", transition: "all 0.3s"}} mr={7} onClick={openModal}/>
    </div>
  )
}

export default Humburger
