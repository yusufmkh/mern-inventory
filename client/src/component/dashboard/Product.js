import React from 'react';
import { useDispatch } from 'react-redux'
import { editProduct, deleteProduct } from '../../actions/productActions'

const Product = ({ product, index }) => {
  const dispatch = useDispatch()
  const priceSum = product.qty * product.price
  const weightSum = product.qty * product.weight

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{product.name}</td>
      <td>{product.qty}</td>
      <td>{product.um}</td>
      <td>{'$'}{product.price}</td>
      <td>{'$'}{priceSum.toFixed(2)}</td>
      <td>{product.weight}</td>
      <td>{weightSum.toFixed(2)}</td>
      <td>{product.description}</td>
      <td>
        <button type='button' className='btn btn-outline-primary btn-sm' onClick={() => dispatch(editProduct(product))}>Edit</button>
        <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => dispatch(deleteProduct(product._id))}>Delete</button>
      </td>
    </tr>
  )
}

export default Product;
