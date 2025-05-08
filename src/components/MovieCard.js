import React, { useState } from 'react'
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath, overview, original_title, vote_average, vote_count, adult, release_date, popularity}) => {
const [showDetails, setShowDetails] = useState(false);

//if no poster then don't show that movie
  if(!posterPath) return null;

  return (<>
   <div className='w-32 pr-4  md:w-36 cursor-pointer'>
      <img alt='Movie Card' src={IMG_CDN_URL + posterPath} onClick={()=>{setShowDetails(!showDetails);
      }}  ></img>
    </div>
    
 {showDetails && (
  <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4">
    <div className="w-full md:w-3/4 lg:w-1/2 max-h-full bg-gray-900 text-white flex flex-col md:flex-row rounded-lg overflow-auto shadow-xl">

      {/* Left Side - Poster */}
      <div className="w-full md:w-1/2 max-h-96 md:max-h-full">
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
        <div className="overflow-y-auto max-h-96 md:max-h-full">
          <h2 className="text-2xl font-bold mb-2">{original_title}</h2>
          <h1 className='text-2xl font-bold' >Overview : </h1>
          <p className="text-sm mb-2">{overview}</p>
          <br/>
          <p className="text-md">Adult : {adult.toString()}</p>
          <p className="text-md">Release Date : {release_date}</p>
          <p className="text-md">Popularity : {popularity}</p>
          <p className="text-md">Vote Average : {vote_average}</p>
          <p className="text-md">Vote Count : {vote_count}</p>
        </div>

        <button
          onClick={() => setShowDetails(false)}
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded self-end"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)} 
  </>
   
  )
}

export default MovieCard
