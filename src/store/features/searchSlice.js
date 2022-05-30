import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

const OMDB_API_KEY = 'f6573a61';
const defaultMessage = 'Search for movies..';

export const fetchAsyncMovies = createAsyncThunk(
  'search/fetchAsyncMovies',
  async ({ title, type, year, number }) => {
    const response = await axios
      .get(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`
      )
      .then((res) => res.data)
      .catch((error) => error.message);
    const { totalResults } = response;
    const total = parseInt(totalResults, 10);
    const pageLength = Math.ceil(total / 10);
    return response;
    if (pageLength > 1) {
      for (let page = 2; page < pageLength; page++) {
        if (page > number / 10) break;
        const response = await axios
          .get(
            `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
          )
          .then((res) => res.data);
        return response;
      }
    }
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
  movies: [],
  response: null,
  theMovie: {},
  selectedMovieOrShow: {},
  loading: null,
  message: defaultMessage,
  error: null,
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
      const { Search, totalResults, Response, Error } = payload;

      const total = parseInt(totalResults, 10);
      const pageLength = Math.ceil(total / 10);

      return {
        ...state,
        movies: _uniqBy(Search, 'imdbID'),
        response: Response,
        loading: false,
        message: null,
        error: Error,
      };
    },

    [searchMovieWithID.pending]: (state) => {
      if (state.loading) return;
      return { ...state, theMovie: {}, loading: true };
    },
    [searchMovieWithID.fulfilled]: (state, { payload }) => {
      return { ...state, theMovie: payload, loading: false };
    },
  },
});
export const { loadingFuc } = searchSlice.actions;

export default searchSlice.reducer;
