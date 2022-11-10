import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Error from './pages/Error'
import Login from './pages/Login'
import Timer from './pages/Timer'
import Todo from './pages/Todo'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Login />}/>
          <Route path={"/timer"} element={<Timer />} />
          <Router path={"/todo"} element={<Todo />}
          <Route path={"/*/"} element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
