import * as actionTypes from '../actionTypes'

const initialState = {
  products : [],
  item : [],

}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.POPULATE_PRODUCTS:
      return {
        ...state,
        products : action.products
      }

    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products : state.products.concat(action.product)
      }

    case actionTypes.SHOW_PRODUCT_DETAILS:
      return {
        ...state,
        item : action.product
    }
    case actionTypes.FILTER_CATEGORY:
      return {
        ...state,
        products: action.filtered
      }
    


    default:
      return state

  }

}

export default reducer
