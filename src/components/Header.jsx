import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const navigations = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Movie',
    href: 'movie',
  },
];
export default function Header() {
  return (
    <header className='header'>
      <div className='nav nav-pills'>
        <div className='nav-item'>
          {navigations.map((nav) => {
            return (
              <Link
                to={nav.href}
                key={nav.name}
                className='btn btn-primary'
                style={{ marginRight: 15 }}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
