import React from 'react';
import {Icon} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"

const Humburger = () => {
  return (
    <div>
      <Icon aria-label='メニューボタン' as={HamburgerIcon}  size="sm" />
    </div>
  )
}

export default Humburger
