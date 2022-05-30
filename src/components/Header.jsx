import { isMatch } from 'lodash';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

const navigations = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Movie',
    href: '/movie/tt2294629',
    path: /^\/movie/,
  },
];
// console.log(isMatch(navigations[1].path));
export default function Header() {
  const location = useLocation();
  console.log(location);
  const isMatch = (path) => {
    if (!path) return false;
    return path.test(location.pathname);
  };
  return (
    <header className='header'>
      <div className='nav nav-pills'>
        <div className='nav-item'>
          {navigations.map((nav) => {
            return (
              <NavLink
                to={nav.href}
                key={nav.name}
                className={isMatch(nav.path) ? 'active nav-link' : 'nav-link'}
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
