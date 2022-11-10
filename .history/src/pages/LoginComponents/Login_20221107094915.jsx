import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "./Login.css"

const Login = () => {
  const [userName, setUserName] = useState("")
  const navigate= useNavigate();
  const handleLogin = () => {
    
  }
  return (
    <div className="login-body">
      <div className="login">
        <h2>ログイン画面</h2>
        <div className="login-contents">
          <input />
          <button onClick={handleLogin}></button>
        </div>
      </div>
    </div>
  )
}

export default Login
