import React, { Component } from 'react';

class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.currentProduct
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentProduct !== this.props.currentProduct) {
      this.setState({ product: this.props.currentProduct })
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

    return this.props.updateProduct(this.state.product);
  }

  render() {
    const product = this.state.product;

    return (
      <div>
        <form className="mb-4" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-7">
              <label>Product Name</label>
              <input type="text" className="form-control" name="name" placeholder="Product Name" value={product.name} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-5">
              <label>Description</label>
              <input type="text" className="form-control" name="description" placeholder="Description" value={product.description} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Amount</label>
              <input type="text" className="form-control" name="amount" placeholder="How many?" value={product.amount} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-2">
              <label>Measurement</label>
              <select name="um" className="form-control" value={product.um} onChange={this.handleChange}>
                <option value='pieces'>pieces</option>
                <option value='sets'>sets</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Price</label>
              <input type="text" className="form-control" name="price" placeholder="How much?" value={product.price} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-3">
              <label>Weight</label>
              <input type="text" className="form-control" name="weight" placeholder="Weight" value={product.weight} onChange={this.handleChange} />
            </div>
          </div>
          <input type="submit" className="btn btn-primary" value="Edit Product" />{' '}
          <button type="button" className="btn btn-outline-info" onClick={this.props.changeEditMode}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default EditProduct;
