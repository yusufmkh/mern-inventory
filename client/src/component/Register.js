import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { register } from '../actions/authActions'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(register({ username, email, password }))
  }

  return (
    auth.isAuthenticated
      ? <Redirect to={{ pathname: '/login' }} />
      : <div className='container mt-4' style={{ maxWidth: '400px' }}>
        <h2>Register</h2>
        <hr />
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="form-control" value={username} onChange={e => setUsername(e.target.username)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.email)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" value={password} onChange={e => setPassword(e.target.password)} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
        <Link className="btn btn-warning btn-sm mt-4" to="/">&larr; Home</Link>
      </div>
  )
}

export default Register