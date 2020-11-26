import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/dashboard/Dashboard'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
      </Router>
    </Provider>
  )
}

export default App
