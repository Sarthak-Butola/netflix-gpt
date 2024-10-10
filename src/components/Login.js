import React, { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  let toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_medium.jpg' alt='logo' />
      </div>
  
      <form className='w-1/3 bg-black absolute p-12 mx-auto my-36 right-0 left-0 h-[500px] text-start rounded-lg bg-opacity-75'>
      <p className='text-white text-3xl font-bold py-4'>{isSignIn ? "Sign In" : "Sign Up | Get Started" }</p>

      { !isSignIn && <input type='text' placeholder='Full Name' className='pl-4 w-full py-4 m-2 rounded-md text-gray-400 bg-black border border-gray-500 ' />}

      <input type='text' placeholder='Email or phone number' className='pl-4 w-full py-4 m-2 rounded-md text-gray-400 bg-black border border-gray-500 ' />

      <input type='password' placeholder='Password' className='pl-4 w-full py-4 m-2 rounded-md text-gray-400 bg-black border border-gray-500 ' />
      
      <button className='py-2 m-2 mb-8 bg-orange-600 text-white rounded-lg w-full cursor-pointer hover:bg-orange-700'>
        {isSignIn ? "Sign In" : "Sign Up" }</button>

      <span className=' p-2 text-gray-400'>{isSignIn ? "New to Netflix?" : "Already a member?" }</span>

      <span className='text-white font-bold cursor-pointer hover:border-b' onClick={toggleSignInForm}>

      {isSignIn ? "Sign Up" : "Sign In Now" }</span>      
    </form>
    
    </div>
  )
}

export default Login
 