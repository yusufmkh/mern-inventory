import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { login } from '../actions/authActions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.login(this.state)
  }

  render() {
    return (
      this.props.auth.isAuthenticated
        ? <Redirect to={{ pathname: '/dashboard' }} />
        : <div className='container mt-4' style={{ maxWidth: '400px' }}>
          <h2>Login</h2>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
          <Link className="btn btn-warning btn-sm mt-4" to="/">&larr; Home</Link>
        </div>

    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { login })(Login)