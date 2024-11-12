import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BgImage } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
     <div className=' -z-10 fixed '>
      <img  src={BgImage} alt='Bg-Image' className=' h-screen object-cover md:h-full '  />
      </div>
        <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      
    </div>
    </>
  )
}

export default GptSearch
