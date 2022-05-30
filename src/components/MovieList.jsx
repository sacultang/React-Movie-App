import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

import './MovieList.scss';
import MovieItem from './MovieItem';

export default function MovieList() {
  const movies = useSelector((state) => state.searchSlice.movies);
  const response = useSelector((state) => state.searchSlice.response);
  const error = useSelector((state) => state.searchSlice.error);
  const loading = useSelector((state) => state.searchSlice.loading);
  const message = useSelector((state) => state.searchSlice.message);

  const renderMovies =
    response === 'True' ? (
      movies.map((movie) => {
        return <MovieItem key={movie.imdbID} movie={movie} />;
      })
    ) : (
      <h2>{response === 'False' ? error : message}</h2>
    );

  return (
    <>
      <div className='movielist'>
        <div className={movies.length === 0 ? 'inner no-result' : 'inner'}>
          <div className='movieItems'>
            {loading ? <Loader /> : renderMovies}
          </div>
        </div>
      </div>
    </>
  );
}
