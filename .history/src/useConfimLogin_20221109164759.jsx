import LoginContext from "./LoginContext"

export const useConfirmLogin = () => {
  const {isLogin} = useConte(LoginContext);
  console.log(isLogin);
  const confirmLogin = () => {
    console.log(isLogin);
  }
  return {
    confirmLogin
  }
}