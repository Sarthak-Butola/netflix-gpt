import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
 

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage]= useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  let toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  const handleButtonClick=()=>{
    //VALIDATE THE FORM DATA
    //NOW FOR PASSING THE VALUE OF EMAIL AND DATA, WE USE USEREF HOOK
    // console.log(email.current.value);
    // console.log(password.current.value);
    let message = checkValidData(email.current.value, password.current.value);
    // console.log(message);

    setErrorMessage(message);
    if(message)return;

    if(!isSignIn){
      //Sign Up logic

  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
    }

    else if(isSignIn){
      //Sign In logic
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

  }

  const handleGoogleLogin = ()=>{
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider).then(async(result)=>{
      // console.log(result);
    // })

  }

  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_medium.jpg' alt='logo' />
      </div>
    
    {/* PREVENTING FORM FROM CALLING ON SUBMIT FUNCTION WHEN A BUTTON IS CLICKED */}
      <form onSubmit={(e)=> e.preventDefault()} className='w-1/3 bg-black absolute p-12 mx-auto my-36 right-0 left-0 h-[550px] text-start rounded-lg bg-opacity-75'>
      <p className='text-white text-3xl font-bold py-4'>{isSignIn ? "Sign In" : "Sign Up | Get Started" }</p>

      { !isSignIn && <input ref={name} 
        type='text' placeholder='Full Name' className='pl-4 w-full py-4 m-2 rounded-md text-gray-400 bg-black border border-gray-500 ' />}

      <input ref={email} 
      type='text' placeholder='Email or phone number' className='pl-4 w-full py-4 m-2 rounded-md text-gray-400 bg-black border border-gray-500 ' />

      <input ref={password}
       type='password' placeholder='Password' className='pl-4 w-full py-4 m-2 rounded-md text-gray-400 bg-black border border-gray-500 ' />
      
      {/* ERROR MESSAGE (IF ANY) */}
      <p className='font-bold 3xl text-red-600 p-2 m-2'>{errorMessage}</p>

      <button className='py-2 m-2 mb-8 bg-orange-600 text-white rounded-lg w-full cursor-pointer hover:bg-orange-700' onClick={handleButtonClick}>
        {isSignIn ? "Sign In" : "Sign Up" }</button>

      <span className=' p-2 text-gray-400'>{isSignIn ? "New to Netflix?" : "Already a member?" }</span>

      <span className='text-white font-bold cursor-pointer hover:border-b' onClick={toggleSignInForm}>
      {isSignIn ? "Sign Up" : "Sign In Now" }</span>   

      <span className='text-white px-2'>|</span>

      <span className='text-white font-bold px-2 cursor-pointer hover:border-b' onClick={handleGoogleLogin} >{isSignIn ? "Google Sign In" : "Google Sign Up"}</span>   

    </form>
    
    </div>
  )
}

export default Login
 