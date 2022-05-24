import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const defaltMessage = 'Search for Movies...';
const OMDB_API_KEY = 'f6573a61';
const initialState = {
  movies: [],
  message: defaltMessage,
  loading: false,
  theMovie: {},
};
export const fetchAsyncMovies = createAsyncThunk(
  'search/fetchAsyncMovies',
  async ({ title, type, year, page, id }) => {
    if (initialState.loading) return;
    const url = id
      ? `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
      : `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`;
    const response = await axios.get(url).then((res) => res.data);

    return response;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      try {
        state.loading = true;
        state.movies = [...payload.Search];
        state.message = '';
      } catch {
        state.movies = [];
        state.message = payload.Error;
      } finally {
        state.loading = false;
      }
    },
  },
});
// export const { _fetchMovie } = searchSlice.actions;
export default searchSlice.reducer;
