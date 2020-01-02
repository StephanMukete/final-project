import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> Blog-Muket </Link>
      </h1>
      <ul>
        <li><a href="profiles.html">Blogs</a></li>
        <li><Link to="register">Sign Up </Link></li>
        <li><Link to="login">Login</Link> </li>
      </ul>
    </nav>
  )
}

export default Navbar
