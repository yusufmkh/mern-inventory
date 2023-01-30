import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = ({ makeFirstLetterCapital }) => {
  const auth = useSelector(state => state.auth)

  return (
    <div className='container mt-4'>
      <h2 style={{ display: 'inline-block', marginRight: '1rem' }}>Profile</h2>
      <span className='alert alert-warning'>This page is under construction</span>
      <hr />
      <h4>{makeFirstLetterCapital(auth.user.username)}</h4>
      <span>Your email: {auth.user.email}</span>
    </div>
  )
}
