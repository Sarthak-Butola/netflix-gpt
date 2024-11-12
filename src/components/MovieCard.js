import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
//if no poster then don't show that movie
  if(!posterPath) return null;

  return (
    <div className='w-32 pr-4  md:w-36'>
      <img alt='Movie Card' src={IMG_CDN_URL + posterPath }  ></img>
    </div>
  )
}

export default MovieCard
