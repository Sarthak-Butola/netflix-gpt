import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div className=''>
        <button className='bg-black text-white text-lg px-12 p-4 m-2 opacity-90 rounded-md hover:bg-gray-700'> Play</button>
        <button className='bg-gray-400 text-lg px-8 p-4 m-2 opacity-90 rounded-md hover:bg-gray-500'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle