import React from 'react'
import {BrowserRoouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Todo from './pages/Todo'


const R = () => {
  return (
    <Router>
        <Routes>
          <Route path={"/"} element={<Login />}/>
          <Router path={"/path"} element={<Todo />} />
          <Router path={"/*/"} element={<Error />}/>
        </Routes>
    </Router>
  )
}

export default Routes
