import React, { useState } from 'react'
import './Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

function Login() {
    const[email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const navigate = useNavigate()

    const handleFormSubmit = (async(e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,Password)
            console.log("user logged In successfully")
            alert("Logged In SuccessFully")
            navigate('/')
        } catch (error) {
            console.error("Login error:", error)
            alert("Login failed. Please check your credentials.")
        }
    })
  return (
    <form onSubmit={handleFormSubmit}>
        <h3>Login</h3>
        <div>
            <label>Email address</label>
            <input
            type='email'
            className='email'
            placeholder='Enter your Email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>

        <div>
            <label>Password</label>
            <input
            type='password'
            className='password'
            placeholder='Enter your Password'
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
        </div>

        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default Login
