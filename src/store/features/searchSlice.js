import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OMDB_API_KEY = 'f6573a61';

export const fetchAsyncMovies = createAsyncThunk(
  'search/fetchAsyncMovies',
  async ({ title, type, year, page }) => {
    const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`;
    const response = await axios.get(url).then((res) => res.data);

    return response;
  }
);
export const searchMovieWithID = createAsyncThunk(
  'search/searchMovieWithID',
  async ({ id }) => {
    const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;
    const response = await axios.get(url).then((res) => res.data);

    return response;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  loading: null,
};
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateState: (state, payload) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      return { ...state, loading: true };
      // console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      return { ...state, movies: payload, loading: false };
    },
    // [searchMovieWithID.pending]: (state) => {
    //   if (state.loading) return;
    //   state.loading = true;
    // },
    // [searchMovieWithID.fulfilled]: (state, { payload }) => {
    //   try {
    //     state.theMovie = payload;
    //   } catch {
    //     state.theMovie = {};
    //   } finally {
    //     state.loading = false;
    //   }
    // },
  },
});
export const { loadingFuc } = searchSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default searchSlice.reducer;
