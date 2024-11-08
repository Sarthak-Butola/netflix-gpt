import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
// import openAi from '../utils/openai';
import { groq } from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
const langKey = useSelector(store=>store.config.lang);
const searchText = useRef(null);
const dispatch=useDispatch();

const searchMovieTmdb = async(movie)=>{
  const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
  
  const json = await data.json();

  console.log(json.results);
  return json.results;
}
// const searchMovieTmdb = async (movie) => {
//   const data = await fetch(
//     "https://api.themoviedb.org/3/search/movie?query=" +
//       movie +
//       "&include_adult=false&language=en-US&page=1",
//     API_OPTIONS
//   );
//   const json = await data.json();

//   return json.results;
// };

const handleGptSearchClick = async ()=>{
  console.log(searchText.current.value);


  const gptQuery = "Act as a Movie Recommendation and suggest some movies for the query :" + searchText.current.value +
  ". Only give me names of 5 movies, comma seperated and nothing else" ;


  
    // const gptResults = await openAi.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });

    // console.log(gptResults);

    const gptResults = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery ,
        },
      ],
      model: "llama3-8b-8192",
    });
if(!gptResults.choices){
  // <h1>Some Error Occured :( pls try again..</h1>
}
// Sholay, Lagaan, PK, Taare Zameen Par, 3 Idiots
    console.log(gptResults.choices[0].message.content);
    
// ['Lagaan', 'Rang De Basanti', '3 Idiots', 'PK', 'Taare Zameen Par'] 
    const gptMovies = (gptResults.choices[0].message.content).split(", ");
    console.log(gptMovies);

// [promise, promise, promise, promise, promise] 
    const promiseArray = gptMovies.map((movie)=> searchMovieTmdb(movie) ); 

//NOTE ==>> "gptMovies.map((movie)=> {searchMovieTmdb(movie)} )" this gives empty tmdbResults for aome reason but above writtenone does not. Find Out Why..?? 


//GETTING JSON FOR ALL PROMISES TO GET DATA.JSON (INFO) ABOUT MOVIES FROM FUNCTION CALL
//READ ABOUT "PROMISE.ALL" ONLINE..
const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults);

  dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));

  };



  return (
    <div className=' pt-[7%] flex justify-center '>


   <form className='bg-black grid grid-cols-12 w-1/2 ' onSubmit={(e)=>e.preventDefault()}  >

    <input type="text"
      ref={searchText }
     className=' p-2 m-4 rounded-md col-span-9 text-xl'
     placeholder={lang[langKey].gptSearchPlaceHolder} />

    <button className='bg-red-700 rounded-lg m-4 py-2 px-4 text-white col-span-3 ' onClick={handleGptSearchClick} >{lang[langKey].search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar;
