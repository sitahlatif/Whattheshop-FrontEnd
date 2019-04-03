import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: []
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT:
      return {
        ...state,
        orders: action.payload
      };

    default:
      return state;
  }
};

export default ordersReducer;
