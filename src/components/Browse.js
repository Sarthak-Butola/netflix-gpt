import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTrendingMovies from '../hooks/useTrendingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import useTrendingAll from '../hooks/useTrendingAll.js';


const Browse = () => {
 
  //FETCH DATA FROM TMDB API AND UPDATE STORE
  //CREATED A CUSTOM HOOK FOR ABOVE MENTIONED WORK TO KEEP CODE CLEANER
  //CALLING THE SAID HOOK
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useTrendingAll();
 

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
