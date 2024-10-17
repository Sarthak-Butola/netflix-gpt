import React from 'react'
import { USER_AVATAR } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/Firebase'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'


const Header = () => {
  const user = useSelector((store)=>store.user)
  const navigate=useNavigate();

  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error)=>{
      navigate("/error");
    });
  };

  return (
    <div className='absolute bg-gradient-to-b from-black pl-10 z-10 w-full '>
    
      <div className='flex justify-between'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' className='w-44'/>
     
     { user &&
     <div className='flex pr-5 '>
      <img alt='User_LOGO' src={user?.photoURL}className='w-12 h-12 my-2 ' />
      <button className='text-white font-bold pl-2 ' onClick={handleSignOut}>[Sign Out]</button>
      
      </div>
      }
      </div>

    </div>
  )
}

export default Header
