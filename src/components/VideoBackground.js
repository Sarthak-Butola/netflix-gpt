import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  //getting trailer video from store by subscribing to movieSlice (if present) to get yt video key inorder to show video on page
 const trailerVideo = useSelector(store=>store.movies?.trailerVideo);  

  //fetch trailer video and update store with trailer vdieo data
  // made a custom hooke for the above mentioned
  useMovieTrailer(movieId);

  return (
    <div className='' >
      <iframe className='w-full aspect-video' 
       src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&loop=1&mute=1" }  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       
      ></iframe>
    </div>
  )
}

export default VideoBackground
