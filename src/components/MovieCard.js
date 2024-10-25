import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className='pr-4 w-36'>
      <img alt='Movie Card' src={IMG_CDN_URL + posterPath }  ></img>
    </div>
  )
}

export default MovieCard
