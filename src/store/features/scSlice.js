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
// export const fetchAsyncMovies = createAsyncThunk(
//   'Search/fetchAsyncMovies',
//   async ({ title, type, year, page }) => {
//     if (initialState.loading) return;

//     const response = await axios
//       .get(
//         `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`
//       )
//       .then((res) => res.data);
//     return response;
//   }
// );

const scSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    _fetchMovie: async (state, { payload }) => {
      const { title, type, year, page } = payload;
      const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`;

      try {
        const response = await axios.get(url);
        // console.log(response.data.Search);
        return (state.movies = [...response.data.Search]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  // extraReducers: {
  //   [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
  //     try {
  //       state.loading = true;
  //       state.movies = [...payload.Search];
  //       state.message = '';
  //     } catch {
  //       state.movies = [];
  //       state.message = payload.Error;
  //     } finally {
  //       state.loading = false;
  //     }
  //   },
  // },
});
export const { _fetchMovie } = scSlice.actions;
export default scSlice.reducer;
