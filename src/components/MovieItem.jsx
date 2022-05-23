import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieItem({ movie }) {
  return (
    <Link
      to={`movie/${movie.imdbID}`}
      style={{ backgroundImage: movie.Poster }}
    >
      <div>{movie.Title}</div>
    </Link>
  );
}
