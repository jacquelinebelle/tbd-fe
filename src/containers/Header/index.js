import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return (
    <header> 
        <Link to='/' className='logo'>
          <img alt="Compass site logo with title COMPASS"src={require('./compassLogo-test1.png')} className='logo-img'/>
        </Link>
    </header>
  )
}

export default Header;