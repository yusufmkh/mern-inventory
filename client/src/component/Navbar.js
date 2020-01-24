import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { logout } from '../actions/authActions'


class Navbar extends Component {
  render() {
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
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
