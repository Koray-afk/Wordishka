import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="navleft">
            <h1>WORDISHKA</h1>
        </div>
        
        <div className="navmiddle">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dictionary">Dictionary</Link></li>
          <li><Link to="/Lessons">Lessons</Link></li>
          <li><Link to="/quizzes">Quizzes</Link></li>
          <li><Link to="/progress">Progress</Link></li>
        </ul>
        </div>

        <div className="navright">
            <button className='btn'>Log In</button>
            <button className='btn'>Sing Up</button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
