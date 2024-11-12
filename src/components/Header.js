import React, { useEffect } from 'react'
import { LOGO, USER_AVATAR } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/languageConstants'
import { changeLanguage } from '../utils/configSlice'



const Header = () => {
  const user = useSelector((store)=>store.user)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //MOVED THIS TO HEADER AS IT IS PRESENT ALL ACROSS THE APP SO NOW WHENEVER IT LOADS UDEEFFECT CHECKS FOR AUTH CHANGE AND IF THERE IS A USER ADDED WE LOGIN ELSE WE LOF=GOUT SO WE DON'T HAVE TO NAVIGATE FROM ELSEWHERE HERE IS GOOD :)

  //Also now without login if one tries to go to /browse then he is redirected back to login page

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user)=>{
      if(user){
        const{uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
       
        navigate("/browse");
      }
      else{
        dispatch(removeUser());

        navigate("/");
      }
     //UNSUBSCRIBE WHEN COMPONENT UNMOUNTS
      return () => unsubscribe();

    });
  },[]);

  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      // navigate("/");
    })
    .catch((error)=>{
      // navigate("/error");
    });
  };
  
 const handleGptSearchClick = () => {
  //TOGGLE GPT SEARCH BUTTON
  dispatch(toggleGptSearchView());

}  

const handleLanguageChange = (e)=>{
  console.log(e.target.value);
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='absolute bg-gradient-to-b from-black pl-10 z-10 w-full  flex flex-col justify-between md:flex-row mx-auto'>
    

      <img src={LOGO} className='w-44 mx-auto md:mx-0'/>
     
     { user &&
     <div className='flex pr-5 justify-between '>


{   showGptSearch &&
      <select className='p-2 m-2 bg-gray-900 text-white rounded-md' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((language) =>(
          <option  key={language.identifier} value={language.identifier}>{language.name}</option>
        ))}
      </select>
}
      
       <button className='bg-purple-800 text-white p-2 mx-4 my-2 rounded-md' onClick={handleGptSearchClick} >
        {showGptSearch ? "Home Page" : "GPT Search"}
        </button>

      <img alt='User_LOGO'  src={user?.photoURL}className='w-12 h-12 my-2 hidden md:inline ' />
      <button className='text-white font-bold pl-2 ' onClick={handleSignOut}>[Sign Out]</button>
      

      </div>
      }
  

    </div>
  )
}

export default Header
