import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
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

import Table from './Table'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

import { ReactComponent as Box } from '../../images/SVG/box.svg'
import { ReactComponent as Cog } from '../../images/SVG/cog.svg'
import { ReactComponent as LogOut } from '../../images/SVG/log-out.svg'

class Dashboard extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  addProduct = product => {
    const newProduct = {
      name: product.name,
      amount: product.amount,
      um: product.um,
      price: product.price,
      weight: product.weight,
      description: product.description
    }

    this.props.addProduct(newProduct)

    // axios.post('/products/add', newProduct)
    //   .then(res => console.log(res));

    // this.setState({ products: [...this.state.products, newProduct] })
  }

  editProduct = product => {
    this.props.editProduct(product)

    // this.setState({
    //   currentProduct: {
    //     _id: product._id,
    //     name: product.name,
    //     amount: product.amount,
    //     um: product.um,
    //     price: product.price,
    //     weight: product.weight,
    //     description: product.description
    //   },
    //   editing: true
    // });

    // setTimeout(() => {
    //   console.log(this.state.currentProduct);
    // }, 1000)
  }

  updateProduct = (updatedProduct) => {
    this.props.updateProduct(updatedProduct)

    // this.props.cancelEdit()
    // const updated = {
    //   ...updatedProduct,
    //   date: new Date()
    // };

    // axios.post(`/products/update/${id}`, updated)
    //   .then(res => console.log(res));

    // this.setState({
    //   products: this.state.products.map(product => product._id === id ? updated : product),
    //   editing: false
    // });
  }

  changeEditMode = () => {
    this.props.cancelEdit()

    // this.setState({ editing: false })
  }

  deleteProduct = id => {
    this.props.deleteProduct(id)

    // axios.delete(`/products/${id}`)
    //   .then(res => console.log(res));

    // this.setState({
    //   products: [...this.state.products].filter(product => {
    //     return product._id !== id
    //   }),
    //   editing: false
    // })
  }

  logOut = e => {
    this.props.logout()
  }

  makeFirstLetterCapital = str => {
    const withoutFirstLetter = str.substring(1);
    const updated = str.charAt(0).toUpperCase().concat(withoutFirstLetter);

    return updated;
  }

  render() {
    return this.props.auth.isAuthenticated ? (
      <div className='dashboard'>
        <div className='sidebar'>
          <div className='sidebar__welcome'>
            Welcome, {this.makeFirstLetterCapital(this.props.auth.user.username)}!
            </div>
          <ul className='sidebar__list'>
            <li className='sidebar__item'><Link className='sidebar__link' to='/dashboard'>
              <Box fill="#eee" />
              <span>Products</span>
            </Link></li>
            <li className='sidebar__item'><Link className='sidebar__link' to='/dashboard'>
              <Cog fill="#eee" />
              <span>Settings</span>
            </Link></li>
            <li className='sidebar__item'><button className='sidebar__logout' onClick={this.logOut}>
              <LogOut fill="#eee" />
              <span>Log out</span>
            </button></li>
          </ul>
          <div className="copyright">
            &copy; 2020 Inventory Management App by Yusuf Muysinkhanov.
          </div>
        </div>
        <div className="main">
          {
            this.props.product.isEditing
              ? (<EditProduct currentProduct={this.props.product.productBeingEdited} updateProduct={this.updateProduct} changeEditMode={this.changeEditMode} />)
              : (<AddProduct addProduct={this.addProduct} />)
          }
          <Table products={this.props.product.products} editProduct={this.editProduct} deleteProduct={this.deleteProduct} />
        </div>
      </div >
    ) : (<Redirect to={{ pathname: '/' }} />)
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product
})

export default connect(mapStateToProps, { getProducts, addProduct, editProduct, cancelEdit, updateProduct, deleteProduct, logout })(Dashboard)
