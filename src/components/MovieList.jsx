import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import { Spinner } from 'react-bootstrap';
import './MovieList.scss';
import MovieItem from './MovieItem';

export default function MovieList() {
  const movies = useSelector((state) => state.searchSlice.movies);
  const message = useSelector((state) => state.searchSlice.message);
  const loading = useSelector((state) => state.searchSlice.loading);
  console.log(loading);
  return (
    <div className='movielist'>
      {loading ? <Spinner animation='border' /> : null}
      {message ?? message}
      {movies.map((movie) => {
        return <MovieItem key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
}
