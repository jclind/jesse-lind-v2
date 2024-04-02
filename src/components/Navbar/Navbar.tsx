import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ExampleLogo from '../../assets/images/example-logo.png'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='site-nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <div className='logo-container'>
              <img src={ExampleLogo} alt='' />
            </div>
          </Link>
        </div>
        <div className='nav-content'>
          <div className='nav-links'></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
