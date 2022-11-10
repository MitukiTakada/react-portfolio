import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Error from './pages/Error'
import Login from './pages/Login'
import Todo from './pages/Todo'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Login />}/>
          <Route path={"/path"} element={<Todo />} />
          <Router path={"/todo"} element={<}
          <Route path={"/*/"} element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
