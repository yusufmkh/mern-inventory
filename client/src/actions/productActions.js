import axios from 'axios'

import {
  PRODUCTS_LOADING,
  GET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  CANCEL_EDIT,
  UPDATED_PRODUCT,
  DELETE_PRODUCTS
} from '../actions/types'
import { returnErrors } from './errorActions'

export const getProducts = () => dispatch => {
  dispatch({ type: PRODUCTS_LOADING })

  axios.get('/api/products')
    .then(res => dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.message)))
}

export const addProduct = newProduct => dispatch => {

  axios.post('/api/products/add', newProduct)
    .then(res => dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.message)))
}

export const editProduct = product => dispatch => {

  dispatch({
    type: EDIT_PRODUCT,
    payload: product
  })
}

export const cancelEdit = () => dispatch => {
  dispatch({
    type: CANCEL_EDIT
  })
}

export const updateProduct = updatedProduct => dispatch => {
  console.log(updateProduct)
  axios.post(`/api/products/update/${updatedProduct._id}`, updatedProduct)
    .then(res => dispatch({
      type: UPDATED_PRODUCT,
      payload: res.data
    })
    )
    .catch(err => dispatch(returnErrors(err.message)))
}

export const deleteProduct = id => dispatch => {

  axios.delete(`/api/products/${id}`)
    .then(res => dispatch({
      type: DELETE_PRODUCTS,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.message)))
}