import * as actionTypes from "../actions/actionTypes";
const initialState = {
  products: [],
  categories: []
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
