import React, { Component } from 'react';
import Product from './Product';

class Table extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Amount</th>
              <th scope="col">UM</th>
              <th scope="col">Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Weight</th>
              <th scope="col">Total Weight</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.length > 0 ? (this.props.products.map((product, index) => {
              return <Product key={product._id} product={product} index={index} editProduct={this.props.editProduct} deleteProduct={this.props.deleteProduct} />
            })) : (<tr><th className="table-active">No Products</th></tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
