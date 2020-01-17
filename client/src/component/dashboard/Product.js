import React, { Component } from 'react';

class Product extends Component {
  render() {
    const product = this.props.product;

    return (
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{product.name}</td>
        <td>{product.amount}</td>
        <td>{product.um}</td>
        <td>{product.price}{' $'}</td>
        <td>{product.amount * product.price}</td>
        <td>{product.weight}</td>
        <td>{product.amount * product.weight}</td>
        <td>{product.description}</td>
        <td>
          <button type='button' className='btn btn-outline-primary btn-sm' onClick={this.props.editProduct.bind(this, product)}>Edit</button>
          <button type='button' className='btn btn-outline-danger btn-sm' onClick={this.props.deleteProduct.bind(this, product._id)}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default Product;
