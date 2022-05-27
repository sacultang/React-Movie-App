import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const navigations = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Movie',
    href: '/movie/tt2294629',
  },
];
export default function Header() {
  return (
    <header className='header'>
      <div className='nav nav-pills'>
        <div className='nav-item'>
          {navigations.map((nav) => {
            return (
              <NavLink
                to={nav.href}
                key={nav.name}
                className='btn btn-primary'
                style={{ marginRight: 15 }}
              >
                {nav.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}
