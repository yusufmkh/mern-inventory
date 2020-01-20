import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    const [auth, product] = this.props.state

    return (
      <div className='container mt-4'>
        <h2 style={{ display: 'inline-block', marginRight: '1rem' }}>Profile</h2>
        <span className='alert alert-warning'>This page is Under Construction</span>
        <hr />
        <h4>{this.props.makeFirstLetterCapital(auth.user.username)}</h4>
        <span>Your email: {auth.user.email}</span>
      </div>
    )
  }
}

export default Profile
