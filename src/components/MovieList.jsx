import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

import './MovieList.scss';
import MovieItem from './MovieItem';

export default function MovieList() {
  const movies = useSelector((state) => state.searchSlice.movies);
  const loading = useSelector((state) => state.searchSlice.loading);
  const [message, setMessage] = useState('Search for Movies..');

  const renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie) => {
        return <MovieItem key={movie.imdbID} movie={movie} />;
      })
    ) : (
      <div>{movies.Error}</div>
    );

  return (
    <>
      <div className='movielist'>{loading ? <Loader /> : renderMovies}</div>
    </>
  );
}
