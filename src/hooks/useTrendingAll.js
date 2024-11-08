import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies, addTrendingAll } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingAll = ()=>{

  const trendingAll = useSelector(store=>store.movies.trendingAll);

    //FETCH DATA FROM TMDB API AND UPDATE STORE
const dispatch=useDispatch();

const getTrendingAll = async () => {
  const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_OPTIONS);
  const json = await data.json();
  // console.log(json);
  dispatch(addTrendingAll(json.results));
}

useEffect(()=>{
  //MEMOIZATION

 !trendingAll && getTrendingAll();
},[]);

}
export default useTrendingAll;


