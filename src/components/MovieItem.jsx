import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.scss';

export default function MovieItem({ movie }) {
  return (
    <Link
      to={`movie/${movie.imdbID}`}
      style={{ backgroundImage: `url(${movie.Poster}) ` }}
      className='movie'
    >
      <div className='info'>
        <div className='year'>{movie.Year}</div>
        <div className='title'>{movie.Title}</div>
      </div>
    </Link>
  );
}
