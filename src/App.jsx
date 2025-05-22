import { BrowserRouter as Router,Routes,Route } from "react-router"
import Home from "./Pages/Home/Home"
import Dictionary from "./Pages/Dictionary/Dictionary"
import Navbar from "./Components/Navbar /Navbar"

function App() {




  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dictionary" element={<Dictionary/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

