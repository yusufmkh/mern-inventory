import axios from 'axios'
import { returnErrors } from "./errorActions";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'

export const loadUser = () => dispatch => {
  dispatch({ type: USER_LOADING })

  axios.get('/api/users/user')
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.message))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const login = ({ email, password }) => dispatch => {

  axios.post('/api/users/login', { email, password })
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.message))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

export const logout = () => dispatch => {

  axios.post('/api/users/logout')
    .then(() => dispatch({
      type: LOGOUT_SUCCESS
    }))

}

export const register = ({ username, email, password }) => dispatch => {

  axios.post('/api/users/register', { username, email, password })
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.message))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}