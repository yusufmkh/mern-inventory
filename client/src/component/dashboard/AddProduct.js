import React, { Component } from 'react'

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: '',
        amount: 0,
        um: 'pieces',
        price: 0,
        weight: 0,
        description: ''
      }
    }
  }

  handleChange = e => {
    this.setState({
      product: {
        ...this.state.product,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addProduct(this.state.product);

    this.setState({
      product: {
        name: '',
        amount: 0,
        um: 'pieces',
        price: 0,
        weight: 0,
        description: ''
      }
    })
  }

  render() {
    const { name, amount, um, price, weight, description } = this.state.product;

    return (
      <div>
        <form className="mb-4" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-7">
              <label>Product Name</label>
              <input type="text" className="form-control" name="name" placeholder="Product Name" value={name} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-5">
              <label>Description</label>
              <input type="text" className="form-control" name="description" placeholder="Description" value={description} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="amount">Amount</label>
              <input type="text" className="form-control" name="amount" placeholder="Amount" value={amount} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-2">
              <label>Measurement</label>
              <select name="um" className="form-control" value={um} onChange={this.handleChange}>
                <option value='pieces'>pieces</option>
                <option value='sets'>sets</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Price</label>
              <input type="text" className="form-control" name="price" placeholder="Price" value={price} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-3">
              <label>Weight</label>
              <input type="text" className="form-control" name="weight" placeholder="Weight" value={weight} onChange={this.handleChange} />
            </div>
          </div>
          <input type="submit" className="btn btn-primary" value="Add Product" />
        </form>
      </div>
    )
  }
}

export default AddProduct;
