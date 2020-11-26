import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { login } from '../actions/authActions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(login({ email, password }))
  }

  return (
    auth.isAuthenticated
      ? <Redirect to={{ pathname: '/dashboard' }} />
      : <div className='container mt-4' style={{ maxWidth: '400px' }}>
        <h2>Login</h2>
        <hr />
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
        <Link className="btn btn-warning btn-sm mt-4" to="/">&larr; Home</Link>
      </div>
  )
}

export default Login