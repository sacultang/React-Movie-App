import React, { useState } from 'react';
import './Search.scss';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, loadingFuc } from '../store/features/searchSlice';

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

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [searchs, setSearchs] = useState({
    title: '',
    year: '',
    type: '',
    page: 10,
  });
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    setSearchs({ ...searchs, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchs));
  };

  return (
    <>
      <Form className='search--container' onSubmit={onSubmit}>
        <Form.Control
          type='text'
          placeholder='Search Movies'
          onChange={onChange}
          name='title'
        />
        {filters.map((select) => {
          return (
            <Form.Select
              name={select.name}
              key={select.name}
              size='sm'
              className='selects'
              onChange={onChange}
            >
              {select.name === 'year' && (
                <option value=''>{select.name}</option>
              )}
              {select.items.map((items) => {
                return (
                  <option value={items} key={items}>
                    {items}
                  </option>
                );
              })}
            </Form.Select>
          );
        })}
        <button className='btn btn-primary'>Search</button>
      </Form>
    </>
  );
}
