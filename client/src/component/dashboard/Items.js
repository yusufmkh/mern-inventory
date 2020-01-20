import React, { Component } from 'react'

import Table from './Table'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

export class Items extends Component {
  componentDidMount() {
    this.props.method.getProducts()
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

    this.props.method.addProduct(newProduct)
  }

  editProduct = product => {
    this.props.method.editProduct(product)
  }

  updateProduct = (updatedProduct) => {
    this.props.method.updateProduct(updatedProduct)
  }

  changeEditMode = () => {
    this.props.method.cancelEdit()
  }

  deleteProduct = id => {
    this.props.method.deleteProduct(id)
  }

  render() {
    const [auth, product] = this.props.state

    return (
      <div>
        {
          product.isEditing
            ? (<EditProduct currentProduct={product.productBeingEdited} updateProduct={this.updateProduct} changeEditMode={this.changeEditMode} />)
            : (<AddProduct addProduct={this.addProduct} />)
        }
        <Table products={product.products} editProduct={this.editProduct} deleteProduct={this.deleteProduct} />
      </div>
    )
  }
}

export default Items