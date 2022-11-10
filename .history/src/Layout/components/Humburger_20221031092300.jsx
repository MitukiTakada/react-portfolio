import React from 'react';
import {Icon} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"

const Humburger = () => {
  return (
    <div>
      <Icon aria-label='メニューボタン' as={HamburgerIcon}  size="sm" variant="unstyled" display={{base: "block", md: "nonw"}}/>
    </div>
  )
}

export default Humburger
