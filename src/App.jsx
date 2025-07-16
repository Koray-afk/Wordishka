import { BrowserRouter as Router,Routes,Route } from "react-router"
import Home from "./Pages/Home/Home"
import Dictionary from "./Pages/Dictionary/Dictionary"
import Navbar from "./Components/Navbar /Navbar"
import Lessons from "./Pages/Lessons/Lessons"

function App() {




  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dictionary" element={<Dictionary/>}/>
        <Route path="/lessons" element={<Lessons/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

