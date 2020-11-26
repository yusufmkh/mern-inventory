import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="navbar__home" to="/">Inventory Management</Link>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link" to="/login">Login</Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
