import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "./Login.css"
import { useToast } from '@chakra-ui/react'

const Login = () => {
  const {isLogin, setIsLogin} = use
  const toast = useToast();
  const [userName, setUserName] = useState("")
  const navigate= useNavigate();
  const handleLogin = () => {
    if(userName === "") {
      toast({
        position: "top",
        title: "ユーザー名を入力してください",
        status: "error",
        duration: 5000,
        isClosable: true
      })
      return;
    }
    toast({
      position: "top",
      title: `${userName}さんおはようございます！`,
      status: "success",
      duration: 5000,
      isClosable: true

    })
    navigate("/meditation");
  }
  return (
    <div className="login-body">
      <div className="login">
        <h2>ログイン画面</h2>
        <div className="login-contents">
          <input 
          className="login-input"
          type="type" 
          placeholder="ユーザー名を入力"
          value={userName} 
          onChange={(e) => setUserName(e.target.value)}/>
          <button onClick={handleLogin} className="login-btn" >ログイン</button>
        </div>
      </div>
    </div>
  )
}

export default Login
