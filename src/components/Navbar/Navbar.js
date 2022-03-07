import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul className="nav-links">
        <Link to='/' className="home">
          <li>Home</li>
        </Link>
        <Link to='/about' className="about">
          <li>About</li>
        </Link>
        <Link to='/skills' className="skills">
          <li>Skills</li>
        </Link>
        <Link to='/contact' className="contact">
          <li>Contact</li>
        </Link>
        <Link to='/signup' className="signup">
          <li>Sign up</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar