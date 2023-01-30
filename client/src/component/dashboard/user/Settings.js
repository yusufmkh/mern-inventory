import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Settings = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useSelector(state => state.auth)

  const handleSubmit = e => {
    e.preventDefault()

    console.log({ username, email, password })
  }

  return (
    <div className='container mt-4'>
      <h2 style={{ display: 'inline-block', marginRight: '1rem' }}>Settings</h2>
      <span className='alert alert-warning'>This page is under construction</span>
      <hr />
      <h4>Edit your account</h4><br />
      <form onSubmit={e => handleSubmit(e)} style={{ maxWidth: '400px' }}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="form-control" value={username || auth.user.username} onChange={e => setUsername(e.target.username)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={email || auth.user.email} onChange={e => setEmail(e.target.email)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" value={password} onChange={e => setPassword(e.target.password)} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  )
}
