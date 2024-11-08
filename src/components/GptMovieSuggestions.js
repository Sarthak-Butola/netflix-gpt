import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector(store=>store.gpt);
  const {movieNames, movieResults} = gpt;
  
  //If nothing has been searced yet then return null i.e show nothing
  if(!movieNames) return null;
  
  
  return (
    <div className='bg-black text-white opacity-95 mt-4' >
      {movieNames.map((movieName, index)=><MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}
    </div>
  )
}

export default GptMovieSuggestions
