import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
name:"movies",
initialState:{
    nowPlayingMovies:null,
    trailerVideo:null,
    popularMovies:null,
    trendingMovies:null,
    topRatedMovies:null,
    trendingAll:null,
    
},

reducers:{
    addNowPlayingMovies : (state, action) => {
        state.nowPlayingMovies = action.payload;
    },
    addPopularMovies : (state, action) => {
        state.popularMovies = action.payload;
    },
    addTrailervideo:(state, action)=>{
            state.trailerVideo=action.payload;
    },
    addTrendingMovies : (state, action) => {
        state.trendingMovies = action.payload;
    },
    addTopRatedMovies : (state, action) => {
        state.topRatedMovies = action.payload;
    },
    addTrendingAll : (state, action) => {
        state.trendingAll = action.payload;
    },

},

});

export const {addNowPlayingMovies, addTrailervideo, addPopularMovies, addTrendingMovies, addTopRatedMovies, addTrendingAll} = movieSlice.actions;

export default movieSlice.reducer;