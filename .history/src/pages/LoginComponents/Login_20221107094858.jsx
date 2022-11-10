import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "./Login.css"

const Login = () => {
  const [userName, setUserName] = useState("")
  const navigate= useNavigate();
  return (
    <div className="login-body">
      <div className="login">
        <h2>ログイン画面</h2>
        <div className="login-contents">
          <input />
          <button onClick={han}></button>
        </div>
      </div>
    </div>
  )
}

export default Login
