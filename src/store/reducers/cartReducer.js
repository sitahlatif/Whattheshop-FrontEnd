import * as actionTypes from "../actions/actionTypes";
const initialState = {
  items: []
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FITCH_CART_LIST:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload
      };

    case actionTypes.ADD_ITEM_CART:
      console.log(action.payload);
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case actionTypes.UPDATE_ITEM_CART:
      let item = state.items.find(item => item.id === action.payload.id);
      item.quantity = action.payload.quantity;
      return {
        ...state,
        items: [...state.items]
      };
    case actionTypes.DELETE_ITEM_CART:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
