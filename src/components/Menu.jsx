import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <header className="menu-container">
    <Link to="/" className="menu__link">
      <div className="menu__item">
        Home
      </div>
    </Link>
    <Link to="/About" className="menu__link">
      <div className="menu__item">
        About
      </div>
    </Link>
  </header>
);

export default Menu;
