import axios from "axios";
import * as actionTypes from "./actionTypes";
import { setErrors, resetErrors } from "./errors";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const checkout = (orderID, info) => {
  return async dispatch => {
    try {
      const res = await instance.post(`order/${orderID}/checkout/`, {
        phoneNumber: info.phoneNumber,
        requestFrom: "js"
      });
      const checkout = res.data;
      console.log("checkout order ", checkout.order);
      dispatch({
        type: actionTypes.FITCH_CART_LIST,
        payload: checkout.order
      });
      window.location.href = JSON.parse(
        checkout.response.join("")
      ).transaction.url;
      // history.push("/HomePage");
    } catch (err) {
      console.log("errror!!!!!!!!!!!!!!!!!!!!!", err);
      dispatch(setErrors(err));
    }
  };
};

export const final_checkout = orderID => {
  return async dispatch => {
    try {
      const res = await instance.post(`order/${orderID}/checkout/final/`);
      const checkout = res.data;
      dispatch({
        type: actionTypes.CHECKOUT,
        payload: checkout
      });
    } catch (err) {
      dispatch(setErrors(err));
    }
  };
};
