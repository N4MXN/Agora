import PropTypes from 'prop-types';
import React from 'react';
import './NavBar.scss';
import Button from '@components/frontStore/cms/Button';

export default function NavBar() {
  return (
    <>
    <nav className="flex">
      <ul className="NavBar flex">
      <li><a href='/men'>MEN</a></li>
        <li><a href='/women'>WOMEN</a></li>
        <li><a href='/kids'>KIDS</a></li>
        <li>HOME & LIVING</li>
        <li>BEAUTY</li>
        <li>STUDIO</li>
      </ul>
    </nav>
    </>
  );
}

