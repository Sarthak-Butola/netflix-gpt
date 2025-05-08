import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { groq } from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true);
    try {
      const gptQuery =
        "Act as a Movie Recommendation and suggest some movies for the query :" +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated and nothing else";

      const gptResults = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "llama3-8b-8192",
      });

      if (!gptResults.choices) {
        console.error("GPT Error");
        setIsLoading(false);
        return;
      }

      const gptMovies = gptResults.choices[0].message.content.split(", ");
      const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='md:pt-[7%] flex flex-col items-center pt-[40%]'>
      <form
        className='bg-black grid grid-cols-12 md:w-1/2 w-full'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className='p-2 m-4 rounded-md col-span-9 text-xl'
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className='bg-red-700 rounded-lg m-4 py-2 px-4 text-white col-span-3'
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>

      {/* Accordion-style loader */}
      {/* {isLoading && (
        <div className="w-full md:w-1/2 p-4 mt-4 bg-gray-900 rounded-md shadow-md animate-pulse transition-all">
          <h2 className="text-white text-xl font-semibold mb-2">Searching for movies...</h2>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      )} */}

{isLoading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      <p className="text-white mt-3 text-base">Fetching movies...</p>
    </div>
  </div>
)}



    </div>
  );
};

export default GptSearchBar;
