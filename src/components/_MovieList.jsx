import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
const filters = [
  {
    name: 'type',
    items: ['movie', 'series', 'episode'],
  },
  {
    name: 'number',
    items: [10, 20, 30],
  },
  {
    name: 'year',
    items: (() => {
      const years = [];
      const thisYear = new Date().getFullYear();
      for (let i = thisYear; i >= 1985; i--) {
        years.push(i);
      }
      return years;
    })(),
  },
];

export default function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchs, setSearchs] = useState({
    title: '',
    year: '',
    type: '',
    number: 0,
  });
  const { title, year, type } = searchs;
  const getMovies = async () => {
    const json = await axios.get(
      `http://www.omdbapi.com/?apikey=f6573a61&s=${title}&type=${type}&y=${year}}`
    );
    setMovies(json.data.Search);
    setLoading(false);
  };

  const searchClick = (e) => {
    e.preventDefault();
    getMovies();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSearchs({ ...searchs, [name]: value });
  };
  console.log(searchs);
  return (
    <div>
      <form onSubmit={searchClick}>
        <input
          type='text'
          placeholder='Search Movies'
          onChange={onChange}
          name='title'
        />

        {filters.map((filter) => {
          return (
            <select name={filter.name} id='' onChange={onChange}>
              <option value=''>{filter.name}</option>
              {filter.items.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          );
        })}
        <button>Search</button>
      </form>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <img src={movie.Poster} alt='' />
              <h2>{movie.title}</h2>

              <span>{movie.Year}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
