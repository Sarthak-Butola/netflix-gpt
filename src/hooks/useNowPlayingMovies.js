import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{

    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);

    //FETCH DATA FROM TMDB API AND UPDATE STORE
const dispatch=useDispatch();

const getNowPlayingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
  const json = await data.json();
  // console.log(json);
  dispatch(addNowPlayingMovies(json.results));
}

useEffect(()=>{
  //MEMOIZATION
  !nowPlayingMovies &&  getNowPlayingMovies();
},[]);

}
export default useNowPlayingMovies;
