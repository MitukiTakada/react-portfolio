import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Login from './pages/Login'
import Todo from './pages/Todo'


const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={}
      </Routes>
    </BrowserRouter>
  )
}

export default Pages

<Router>
        <Routes>
          <Route path={"/"} element={<Login />}/>
          <Router path={"/path"} element={<Todo />} />
          <Router path={"/*/"} element={<Error />}/>
        </Routes>
    </Router>