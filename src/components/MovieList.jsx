import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

import './MovieList.scss';
import MovieItem from './MovieItem';

export default function MovieList() {
  const movies = useSelector((state) => state.searchSlice.movies);
  const loading = useSelector((state) => state.searchSlice.loading);
  const message = useSelector((state) => state.searchSlice.message);

  const renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie) => {
        return <MovieItem key={movie.imdbID} movie={movie} />;
      })
    ) : (
      <h2>{movies.Error ? movies.Error : message}</h2>
    );

  return (
    <>
      <div className='movielist'>
        <div className={!movies.Search ? 'inner no-result' : 'inner'}>
          <div className='movieItems'>
            {loading ? <Loader /> : renderMovies}
          </div>
        </div>
      </div>
    </>
  );
}
