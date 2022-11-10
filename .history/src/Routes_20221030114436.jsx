import React from 'react'
import {BrowserRoouter as Router, Routes, Route} from "react-router-dom"


const Routes = () => {
  return (
    <Router>
        <Routes>
          <Route path={"/"} element={<}/>
          <Router path={"/*/"} />
        </Routes>
    </Router>
  )
}

export default Routes
