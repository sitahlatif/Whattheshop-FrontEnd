import * as actionTypes from "../actions/actionTypes";
const initialState = {
  products: [],
  categories: [],
  loading: true
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      console.log("[productsReducer.js] state products", state.products);
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ALL_PRODUCTS:
      console.log(
        "[productsReducer.js] products action.payload",
        action.payload
      );
      return {
        ...state,
        products: [...action.payload],
        loading: false
      };
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default productsReducer;
