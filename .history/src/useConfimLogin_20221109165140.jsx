import { useState } from "react";
import LoginContext from "./LoginContext"

export const useConfirmLogin = () => {
  const [isLogin, setIsLogin] = useState(false)
  const confirmLogin = () => {
    console.log(isLogin);
  }
  return {
    confirmLogin
  }
}