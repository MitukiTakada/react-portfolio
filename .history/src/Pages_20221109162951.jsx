import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Error from './pages/Error'
import Login from './pages/LoginComponents/Login'
import Meditation from './pages/Meditaioncomponents/Meditation'
import Note from './pages/NoteComponents/Note'
import Timer from './pages/TimerComponents/Timer'
import Todo from './pages/TodoComponents/Todo'

const Pages = () => {
  const [isLogin, setIslogin] = useState(false);
  return (
      <Routes>
          <Route path={"/"} element={<Login />}/>
          <Route path={"/timer"} element={<Timer />} />
          <Route path={"/todo"} element={<Todo />} />
          <Route path={"/note"}  element={<Note />}/>
          <Route path={"/meditation"} element={<Meditation />}/>
          <Route path={"/*"} element={<Error />}/>
      </Routes>
  )
}

export default Pages
