import { useState } from "react";
import LoginContext from "./LoginContext"
import { useToast } from '@chakra-ui/react'

export const useConfirmLogin = () => {
  const toast = useToast();
  const 
  const [isLogin, setIsLogin] = useState(false);
  const confirmLogin = () => {
    if(isLogin === false) {
      toast({
        position: "top",
        title: "ログインしてください",
        status: "error",
        duration: 5000,
        isClosable: true
      })
      navigate("/");
    }
  }
  return {
    confirmLogin, isLogin
  }
}