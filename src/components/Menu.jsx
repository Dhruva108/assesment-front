import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header className='menu-container'>

      <div className='Menu__item'>
        <Link to="/">Home</Link>
      </div>
      <div className='Menu__item'>
        <Link to="/">Detail</Link>
      </div>
      <div className='Menu__item'>
        <Link to="/">About</Link>
      </div>

    </header>
  )
}

export default Menu
