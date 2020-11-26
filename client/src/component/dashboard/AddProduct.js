import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getProducts, addProduct } from '../../actions/productActions'

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    qty: 0,
    um: 'pieces',
    price: 0,
    weight: 0,
    description: ''
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    setNewProduct({
      name: '',
      qty: 0,
      um: 'pieces',
      price: 0,
      weight: 0,
      description: ''
    })

    dispatch(addProduct(newProduct))
  }

  const { name, qty, um, price, weight, description } = newProduct

  return (
    <div>
      <form className="mb-4" onSubmit={e => handleSubmit(e)}>
        <div className="form-row">
          <div className="form-group col-md-7">
            <label>Product Name</label>
            <input type="text" className="form-control" name="name" placeholder="Product Name" value={name} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-5">
            <label>Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description" value={description} onChange={e => handleChange(e)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="amount">Quantity</label>
            <input type="text" className="form-control" name="qty" placeholder="Quantity" value={qty} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-2">
            <label>Measurement</label>
            <select name="um" className="form-control" value={um} onChange={e => handleChange(e)}>
              <option value='pieces'>pieces</option>
              <option value='sets'>sets</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label>Price</label>
            <input type="text" className="form-control" name="price" placeholder="Price" value={price} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-3">
            <label>Weight</label>
            <input type="text" className="form-control" name="weight" placeholder="Weight" value={weight} onChange={e => handleChange(e)} />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Add Product" />
      </form>
    </div>
  )
}

export default AddProduct;
