import React from 'react'
import { BgImage } from '../utils/constants';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
const langKey = useSelector(store=>store.config.lang);

  return (
    <div className=' pt-[7%] flex justify-center '>


   <form className='bg-black grid grid-cols-12 w-1/2 '  >

    <input type="text"
     className=' p-4 m-4 rounded-md col-span-9'
     placeholder={lang[langKey].gptSearchPlaceHolder} />

    <button className='bg-red-700 rounded-lg m-4 py-2 px-4 text-white col-span-3 ' >{lang[langKey].search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar;
