import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTrendingMovies from '../hooks/useTrendingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import useTrendingAll from '../hooks/useTrendingAll.js';
import GptSearch from './GptSearchPage.js';
import { useSelector } from 'react-redux';


const Browse = () => {

 const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  
  //FETCH DATA FROM TMDB API AND UPDATE STORE
  //CREATED A CUSTOM HOOK FOR ABOVE MENTIONED WORK TO KEEP CODE CLEANER
  //CALLING THE SAID HOOK
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useTrendingAll();
 

  return (
    // IF  showGptSearch IS TRUE THEN SHOW GPTSEARCH PAGE ELSE SHOW MAIN & SECONDARY CONTAINER
    //ALSO  <MainContainer/> <SecondaryContainer/>  HAVE TO BE ENCASED IN "<></>" AS TO NOT GET JSX ERROR 

    <div>
      <Header/>
      {
      showGptSearch ? <GptSearch/> : <> <MainContainer/> <SecondaryContainer/> </>

      } 
      
    </div>
  )
}

export default Browse
