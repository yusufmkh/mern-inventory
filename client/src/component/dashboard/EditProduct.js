import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateProduct, cancelEdit } from '../../actions/productActions'

const EditProduct = () => {
  const productBeingEdited = useSelector(state => state.product.productBeingEdited)
  const [product, setProduct] = useState(productBeingEdited)

  const dispatch = useDispatch()

  useEffect(() => {
    setProduct(productBeingEdited)
  }, [productBeingEdited])

  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(updateProduct(product)) && dispatch(cancelEdit())
  }

  return (
    <div>
      <form className="mb-4" onSubmit={e => handleSubmit(e)}>
        <div className="form-row">
          <div className="form-group col-md-7">
            <label>Product Name</label>
            <input type="text" className="form-control" name="name" placeholder="Product Name" value={product.name} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-5">
            <label>Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description" value={product.description} onChange={e => handleChange(e)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Quantity</label>
            <input type="text" className="form-control" name="qty" placeholder="How many?" value={product.qty} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-2">
            <label>Measurement</label>
            <select name="um" className="form-control" value={product.um} onChange={e => handleChange(e)}>
              <option value='pieces'>pieces</option>
              <option value='sets'>sets</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label>Price</label>
            <input type="text" className="form-control" name="price" placeholder="How much?" value={product.price} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-3">
            <label>Weight</label>
            <input type="text" className="form-control" name="weight" placeholder="Weight" value={product.weight} onChange={e => handleChange(e)} />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Edit Product" />{' '}
        <button type="button" className="btn btn-outline-info" onClick={() => dispatch(cancelEdit())}>Cancel</button>
      </form>
    </div>
  )
}

export default EditProduct
