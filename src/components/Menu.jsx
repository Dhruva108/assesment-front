import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header className='menu-container'>

      <div className='menu__item'>
        <Link to="/" className='menu__link'>
          Home
        </Link>
      </div>

      <div className='menu__item'>
        <Link to="/Detail" className='menu__link'>
          Detail
        </Link>
      </div>

      <div className='menu__item'>
        <Link to="/About" className='menu__link'>
          About
        </Link>
      </div>

    </header>
  );
};

export default Menu;
