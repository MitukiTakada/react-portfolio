import { useState } from "react";
import LoginContext from "./LoginContext"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router";

export const useConfirmLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLogin, setIsLogin]
  const confirmLogin = () => {
    if(isLogin === false) {
      toast({
        position: "top",
        title: "ログインしてください",
        status: "error",
        duration: 5000,
        isClosable: true
      });
      console.log(isLogin);
      navigate("/");
    }
  }
  const login = () => {
    setIsLogin(prev => !prev);
  }
  return {
    confirmLogin, isLogin, login
  }
}