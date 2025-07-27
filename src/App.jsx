import { BrowserRouter as Router,Routes,Route } from "react-router"
import Home from "./Pages/Home/Home"
import Dictionary from "./Pages/Dictionary/Dictionary"
import Navbar from "./Components/Navbar /Navbar"
import Lessons from "./Pages/Lessons/Lessons"
import Quizzes from "./Pages/Quizzes/Quizzes"
import Progress from "./Pages/Progress/Progress"
import LoginPage from "./Components/Login/Login"
import Login from "./Components/Login/Login"
import Register from "./Components/Register /Register"

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dictionary" element={<Dictionary/>}/>
        <Route path="/lessons" element={<Lessons/>}/>
        <Route path="/quizzes" element={<Quizzes/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="sign" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

