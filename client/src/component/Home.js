import React from 'react'
import { Link } from 'react-router-dom'
import dashboardImg from '../images/dashboard.png'

import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className='homepage'>
        <h1 className='homepage__heading'>
          Make your inventory more efficient with your tailored management app
          </h1>
        <Link className="homepage__cta" to="/register">Sign up for free</Link>
        <img src={dashboardImg} alt='Dashboard' className='homepage__dashboard-photo' />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Home
