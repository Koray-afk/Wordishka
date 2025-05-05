import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav>
        <div className="navleft">
            <h1>WORDISHKA</h1>
        </div>
        
        <div className="navmiddle">
            <ul >
                    <a href="/"><li>Home</li></a>
                    <a href="/"><li>Dictionary</li></a>
                    <a href="/"><li>Lessons</li></a>
                    <a href="/"><li>Quizzes</li></a>
                    <a href="/"><li>Progress</li></a>
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
