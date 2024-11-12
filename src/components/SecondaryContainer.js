import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
  <div className='relative -mt-0 md:-mt-64 z-20 md:pl-12 pl-4' >
     <MovieList title={"Now playing :"} movies={movies.nowPlayingMovies} />
     <MovieList title={"Top Rated :"} movies={movies.topRatedMovies} />
     <MovieList title={"Trending Movies, TV series... :"} movies={movies.trendingAll} />
     <MovieList title={"Popular :"} movies={movies.popularMovies} />
     <MovieList title={"Upcoming :"} movies={movies.trendingMovies} />
     
  </div>
     

    </div>
    )
  )
}

export default SecondaryContainer
