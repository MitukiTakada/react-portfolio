import LoginContext from "./LoginContext"

export const useConfirmLogin = () => {
  const [isLogin, setIsLogin]
  const confirmLogin = () => {
    console.log(isLogin);
  }
  return {
    confirmLogin
  }
}