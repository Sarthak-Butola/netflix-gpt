import { useDispatch } from "react-redux";
import { addTrailervideo } from "../utils/movieSlice";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId) => {

    //fetch trailer video and update store with trailer vdieo data
  const dispatch = useDispatch();

  const getMovieVideos = async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
    const json=await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer")

    //IF NO TRAILER(i.e. filterData.length === 0) THEN TAKE FIRST VIDEO FROM JSON.RESULTS ELSE TAKE FIRST TRAILER FROM FILTER DATA.
    const trailer = filterData.length ? filterData[0] : json.results[0];

    // console.log(trailer);
    dispatch(addTrailervideo(trailer));

  }

  useEffect(()=>{
    getMovieVideos();
  },[])

}
export default useMovieTrailer;