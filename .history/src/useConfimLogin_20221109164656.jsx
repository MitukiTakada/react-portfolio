import LoginContext from "./LoginContext"

export const useConfirmLogin = () => {
  const {isLogin} = useConte(LoginContext);
  const confirmLogin = () => {

  }
  return {
    confirmLogin
  }
}