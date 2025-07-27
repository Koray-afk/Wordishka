import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('currentProgress')
      localStorage.removeItem('score')
      localStorage.removeItem('selected')
      localStorage.removeItem('finished')
      await signOut(auth);
      console.log("user logged out successfully");
      alert("Logged Out Successfully");
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      alert("Logout failed. Please try again.");
    }
  };

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
          {user ? (
            <button onClick={handleLogout} className="btn">Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/sign" className="btn">Register</Link>
            </>
          )}
        </div>

      </nav>
    </div>
  )
}

export default Navbar
