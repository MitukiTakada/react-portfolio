import React from 'react';
import {IconButton} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"

const Humburger = () => {
  return (
    <div>
      <IconButton aria-label='メニューボタン' as={HamburgerIcon}  size="md" variant="unstyled" display={{base: "block", md: "none"}}/>
    </div>
  )
}

export default Humburger
