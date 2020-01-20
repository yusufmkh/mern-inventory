import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getProducts,
  addProduct,
  editProduct,
  cancelEdit,
  updateProduct,
  deleteProduct
} from '../../actions/productActions'
import { logout } from '../../actions/authActions'

import { Profile } from './user/Profile'
import { Settings } from './user/Settings'
import { Items } from './Items'

import { ReactComponent as UserImg } from '../../images/SVG/user.svg'
import { ReactComponent as BoxImg } from '../../images/SVG/box.svg'
import { ReactComponent as CogImg } from '../../images/SVG/cog.svg'
import { ReactComponent as LogOutImg } from '../../images/SVG/log-out.svg'


class Dashboard extends Component {
  makeFirstLetterCapital = str => {
    const withoutFirstLetter = str.substring(1);
    const updated = str.charAt(0).toUpperCase().concat(withoutFirstLetter);

    return updated;
  }

  logOut = e => {
    this.props.logout()
  }

  render() {
    const dispatchMethods = {
      getProducts: this.props.getProducts,
      addProduct: this.props.addProduct,
      editProduct: this.props.editProduct,
      cancelEdit: this.props.cancelEdit,
      updateProduct: this.props.updateProduct,
      deleteProduct: this.props.deleteProduct
    }

    return this.props.auth.isAuthenticated ? (
      <Router>
        <div className='dashboard'>
          <div className='sidebar'>
            <div className='sidebar__welcome'>
              Welcome, {this.makeFirstLetterCapital(this.props.auth.user.username)}!
            </div>
            <ul className='sidebar__list'>
              <li className='sidebar__item'><Link className='sidebar__link' to='/dashboard'>
                <BoxImg fill="#eee" />
                <span>Items</span>
              </Link></li>
              <li className='sidebar__item'><Link className='sidebar__link' to='/dashboard/profile'>
                <UserImg fill="#eee" />
                <span>Profile</span>
              </Link></li>
              <li className='sidebar__item'><Link className='sidebar__link' to='/dashboard/settings'>
                <CogImg fill="#eee" />
                <span>Settings</span>
              </Link></li>
              <li className='sidebar__item'><button className='sidebar__logout' onClick={this.logOut}>
                <LogOutImg fill="#eee" />
                <span>Log out</span>
              </button></li>
            </ul>
            <div className="copyright">
              &copy; 2020 Inventory Management App by Yusuf Muysinkhanov.
          </div>
          </div>
          <div className="main">
            <Switch>
              <Route path='/dashboard/profile' render={() => (
                <Profile
                  method={dispatchMethods}
                  state={[this.props.auth, this.props.product]}
                  makeFirstLetterCapital={this.makeFirstLetterCapital} />
              )} />
              <Route path='/dashboard/settings' render={() => (
                <Settings
                  method={dispatchMethods}
                  state={[this.props.auth, this.props.product]}
                  makeFirstLetterCapital={this.makeFirstLetterCapital} />
              )} />
              <Route path='/dashboard' render={() => (
                <Items
                  method={dispatchMethods}
                  state={[this.props.auth, this.props.product]}
                />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    ) : (<Redirect to={{ pathname: '/' }} />)
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product
})

const mapDispatchToProps = {
  getProducts, addProduct, editProduct, cancelEdit, updateProduct, deleteProduct, logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
