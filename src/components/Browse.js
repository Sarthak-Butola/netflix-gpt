import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';


const Browse = () => {
 
  //FETCH DATA FROM TMDB API AND UPDATE STORE
  //CREATED A CUSTOM HOOK FOR ABOVE MENTIONED WORK TO KEEP CODE CLEANER
  //CALLING THE SAID HOOK
  useNowPlayingMovies();
 

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
