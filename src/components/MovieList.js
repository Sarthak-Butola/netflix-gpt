import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='px-4 text-white '>
        <h1 className=' text-lg md:text-2xl py-2'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar '>
        <div className='flex'>
            {movies?.map((movie,index) => <MovieCard key={movie.id} posterPath={movie.poster_path} 
            original_title={movie.original_title} overview={movie.overview} vote_average={movie.vote_average}
            vote_count={movie.vote_count} release_date={movie.release_date} adult={movie.adult} popularity={movie.popularity}
             />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList
