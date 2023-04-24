import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/login' className='nav-link'>Login</NavLink>
        <NavLink to='/signup' className='nav-link'>Signup</NavLink>
      </nav>
    )
  }
}

export default Navbar