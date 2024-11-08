import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BgImage } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>

    <div className=' -z-10 fixed'>
      <img  src={BgImage} alt='Bg-Image'  />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      
    </div>
  )
}

export default GptSearch
