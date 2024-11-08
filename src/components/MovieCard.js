import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
//if no poster then don't show that movie
  if(!posterPath) return null;

  return (
    <div className='pr-4 w-36'>
      <img alt='Movie Card' src={IMG_CDN_URL + posterPath }  ></img>
    </div>
  )
}

export default MovieCard
