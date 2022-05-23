import React from 'react';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import Headline from '../components/Headline';

export default function Home() {
  return (
    <>
      <div className='container'>
        <Headline />
        <Search />
        <MovieList />
      </div>
    </>
  );
}
