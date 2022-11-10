import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Error from './pages/Error'
import Login from './pages/Login'
import Meditation from './pages/Meditation'
import Note from './pages/NoteComponents/Note'
import Timer from './pages/Timer'
import Todo from './pages/Todo'

const Pages = () => {
  return (
      <Routes>
          <Route path={"/"} element={<Login />}/>
          <Route path={"/timer"} element={<Timer />} />
          <Route path={"/todo"} element={<Todo />} />
          <A
           <Route path={"/note"}  element={<Note />}/>
           <Route path={"/meditation"} element={<Meditation />}/>
          <Route path={"/*"} element={<Error />}/>
      </Routes>
  )
}

export default Pages
