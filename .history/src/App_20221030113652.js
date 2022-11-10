import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import {BrowserRoouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path={"/"}/>
          <Router path={"/*"}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
