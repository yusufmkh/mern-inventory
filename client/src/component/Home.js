import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dashboardImg from '../images/dashboard.png'

import Navbar from './Navbar'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className='homepage'>
          <h1 className='homepage__heading'>
            Make your inventory more efficient with your tailored management app
          </h1>
          <Link className="homepage__cta" to="/register">Sign up for free</Link>
          {/* <div className="homepage__dashboard-photo"></div> */}
          <img src={dashboardImg} alt='Dashboard photo' className='homepage__dashboard-photo' />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
