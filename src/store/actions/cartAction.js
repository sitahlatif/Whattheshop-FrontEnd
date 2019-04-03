import axios from "axios";

import * as actionTypes from "./actionTypes";
import { resetErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});
export const fetchCartList = () => {
  return async dispatch => {
    try {
      const res = await instance.get(`order/items/`);
      const CartList = res.data;
      dispatch({
        type: actionTypes.FITCH_CART_LIST,
        payload: CartList
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while fetching the cart items", err);
    }
  };
};

export const addItemToCart = (orderID, productID, history) => {
  return async dispatch => {
    try {
      const res = await instance.post(
        `order/${orderID}/items/${productID}/add/`
      );
      const newItem = res.data;
      dispatch({
        type: actionTypes.ADD_ITEM_CART,
        payload: newItem
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while adding the cart item", err);
    }
  };
};
export const deleteItemCart = (itemID, history) => {
  return async dispatch => {
    try {
      const res = await instance.delete(`items/${itemID}/delete/`);
      const deleteItem = res.data;
      dispatch({
        type: actionTypes.DELETE_ITEM_CART,
        payload: deleteItem
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while deleteing the cart item", err);
    }
  };
};

export const updateItemCart = (itemID, history) => {
  return async dispatch => {
    try {
      const res = await instance.put(`items/${itemID}/update/`);
      const updateItem = res.data;
      dispatch({
        type: actionTypes.UPDATE_ITEM_CART,
        payload: updateItem
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while updating the cart item", err);
    }
  };
};
