import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[10%] px-20 absolute bg-gradient-to-r from-black opacity-80 '>
      <h1 className='font-bold text-6xl text-white w-1/2'>{title}</h1>
      <p className='py-6 text-lg w-1/2 text-white '>{overview}</p>
      <div className=''>
        <button className='bg-white text-black text-lg px-12 p-4 m-2 opacity-90 rounded-md hover:bg-opacity-80 '> Play</button>
        <button className='bg-gray-600 text-white text-lg px-8 p-4 m-2 opacity-90 rounded-md hover:bg-gray-500'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle