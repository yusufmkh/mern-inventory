import {
  PRODUCTS_LOADING,
  GET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  CANCEL_EDIT,
  UPDATED_PRODUCT,
  DELETE_PRODUCTS
} from '../actions/types'

const initialState = {
  products: [],
  isLoading: false,
  isEditing: false,
  productBeingEdited: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        isEditing: true,
        productBeingEdited: action.payload
      }
    case CANCEL_EDIT:
      return {
        ...state,
        isEditing: false,
        productBeingEdited: null
      }
    case UPDATED_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => (product._id === action.payload._id) ? action.payload : product),
        isEditing: false,
        productBeingEdited: null
      }
    case DELETE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload),
        isEditing: false
      }
    default:
      return state
  }
}