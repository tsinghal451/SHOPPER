import React from 'react'
import './CSS/LoginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className='LoginSignUp'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name ' />
          <input type='email' placeholder='Email address'/>
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsign-login'>
          Already Have an account? <span>Login Here</span> 
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp