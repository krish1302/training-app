import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/' className='nav-link'>Home Page</NavLink>
        <NavLink to='/login' className='nav-link'>Login</NavLink>
        <NavLink to='/signup' className='nav-link'>Signup</NavLink>
        <NavLink to='/books' className='nav-link'>Books</NavLink>
        <NavLink to='/htmlcss' className='nav-link'>Html_Css</NavLink>
      </nav>
    )
  }
}

export default Navbar