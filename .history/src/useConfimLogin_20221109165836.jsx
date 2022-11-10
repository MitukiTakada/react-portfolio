import { useState } from "react";
import LoginContext from "./LoginContext"
import { useToast } from '@chakra-ui/react'

export const useConfirmLogin = () => {
  const toast = useToast();
  const [isLogin, setIsLogin] = useState(false);
  const confirmLogin = () => {
    if(isLogin === false) {
      toast({
        
      })
    }
  }
  return {
    confirmLogin, isLogin
  }
}