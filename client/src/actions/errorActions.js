import { GET_ERRORS, CLEAR_ERRORS } from './types'

// return errors
export const returnErrors = (msg) => {
  return {
    type: GET_ERRORS,
    payload: msg
  }
}

// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}