import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video md:pt-[10%] md:px-20 pt-20 px-8 absolute bg-gradient-to-r from-black opacity-80 '>
      <h1 className='font-bold text-xl md:text-6xl text-white w-1/2'>{title}</h1>
      <p className='py-6 text-lg w-1/2 text-white hidden md:inline-block '>{overview}</p>
      <div className=''>
        <button className='bg-white text-black text-lg md:px-12 md:p-4 md:m-2 px-5 py-1 mt-2 opacity-90 rounded-md hover:bg-opacity-80 '> Play</button>
        <button className='bg-gray-600 text-white text-lg px-8 p-4 m-2  opacity-90 rounded-md hover:bg-gray-500 hidden md:inline'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
