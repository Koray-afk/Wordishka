import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth , db } from '../Firebase';
import {setDoc, doc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      alert("User registered successfully!");

        // Empty all the imputs when the form is submitted 
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      navigate('/')
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email:user.email,
          firstName:FirstName,
          LastName:LastName
        })
      }

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("This email is already registered.");
      } else if (error.code === 'auth/weak-password') {
        alert("Password should be at least 6 characters.");
      } else {
        alert("Something went wrong: " + error.message);
      }
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h3>Sign Up</h3>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-button"
              type="button"
            >
              {showPassword ? '👀' : '🙈'}
            </span>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;