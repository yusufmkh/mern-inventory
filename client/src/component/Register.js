import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { register } from '../actions/authActions'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
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
    e.preventDefault()

    this.props.register(this.state)
    // axios.post('/users/register', this.state.newUser)
    //   .then(res => {
    //     console.log(res);
    //     console.log('=========');
    //     console.log(res.data);
    //     this.setState({ isAuthenticated: true })
    //   })
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      this.props.auth.isAuthenticated
        ? <Redirect to={{ pathname: '/login' }} />
        : <div className='container mt-4 w-25'>
          <h2>Register</h2>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
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

export default connect(mapStateToProps, { register })(Register)