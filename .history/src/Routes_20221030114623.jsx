import React from 'react'
import {BrowserRoouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login'


const Routes = () => {
  return (
    <Router>
        <Routes>
          <Route path={"/"} element={<Login />}/>
          <Router
          <Router path={"/*/"} element={<Error />}/>
        </Routes>
    </Router>
  )
}

export default Routes
