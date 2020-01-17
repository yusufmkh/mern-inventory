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

        {/* <nav className="navbar">
          <a className="navbar-brand ml-5" href="/">Inventory Management</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav float-right">
              {this.props.auth.isAuthenticated ? (<React.Fragment><Link className="nav-item nav-link disabled" to="#" tabindex="-1" aria-disabled="true">{this.props.auth.user.username.toUpperCase()}</Link>
                <button type="button" className="btn btn-outline-danger" onClick={() => this.props.logout()}>Log Out</button></React.Fragment>) : (<React.Fragment><Link className="nav-item nav-link" to="/login">Login</Link>
                  <Link className="nav-item nav-link" to="/Register">Register</Link></React.Fragment>)}
            </div>
          </div>
        </nav> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
