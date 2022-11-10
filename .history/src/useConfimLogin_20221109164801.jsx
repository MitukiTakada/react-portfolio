import LoginContext from "./LoginContext"

export const useConfirmLogin = () => {
  const {isLogin} = useConte(LoginContext);
  const confirmLogin = () => {
    console.log(isLogin);
  }
  return {
    confirmLogin
  }
}