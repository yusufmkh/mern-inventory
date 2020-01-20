import React, { Component } from 'react'

export class Settings extends Component {
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

    console.log(this.state)
  }

  render() {
    const [auth, product] = this.props.state

    return (
      <div className='container mt-4'>
        <h2 style={{ display: 'inline-block', marginRight: '1rem' }}>Setings</h2>
        <span className='alert alert-warning'>This page is Under Construction</span>
        <hr />
        <h4>Edit your account</h4><br />
        <form onSubmit={this.handleSubmit} style={{ maxWidth: '400px' }}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="form-control" value={this.state.username || auth.user.username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={this.state.email || auth.user.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    )
  }
}

export default Settings
