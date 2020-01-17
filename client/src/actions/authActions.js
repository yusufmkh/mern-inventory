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

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  axios.get('/api/users/user', config)
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // const body = JSON.stringify({ email, password })

  axios.post('/api/users/login', { email, password }, config)
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

export const logout = () => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios.post('/api/users/logout', {}, config)
    .then(() => dispatch({
      type: LOGOUT_SUCCESS
    }))

}

export const register = ({ username, email, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ username, email, password })

  axios.post('/api/users/register', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}