import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OMDB_API_KEY = 'f6573a61';
const defaultMessage = 'Search for movies..';

export const fetchAsyncMovies = createAsyncThunk(
  'search/fetchAsyncMovies',
  async ({ title, type, year, page }) => {
    const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`;
    const response = await axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => error.message);
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
  theMovie: {},
  selectedMovieOrShow: {},
  loading: null,
  message: defaultMessage,
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
      if (state.loading) return;
      return { ...state, loading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, loading: false, message: null };
    },

    [searchMovieWithID.pending]: (state) => {
      if (state.loading) return;
      state.loading = true;
    },
    [searchMovieWithID.fulfilled]: (state, { payload }) => {
      return { ...state, theMovie: payload, loading: false };
    },
  },
});
export const { loadingFuc } = searchSlice.actions;

export default searchSlice.reducer;
