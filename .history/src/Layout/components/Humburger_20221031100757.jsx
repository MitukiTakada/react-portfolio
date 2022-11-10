import React from 'react';
import {IconButton} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"

const Humburger = () => {
  const {on}
  return (
    <div>
      <IconButton aria-label='メニューボタン' as={HamburgerIcon}  size="sm" variant="unstyled" display={{base: "block", md: "none"}} color="white" _hover={{cursor:"pointer", color: "brown", transition: "all 0.3s"}} mr={7}/>
    </div>
  )
}

export default Humburger
