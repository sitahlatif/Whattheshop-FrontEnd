import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      const response = await instance.get("products/list/");
      const products = response.data;
      dispatch({
        type: actionTypes.FETCH_ALL_PRODUCTS,
        payload: products
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await instance.get("categories/list/");
      const categories = response.data;
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categories
      });
    } catch (error) {
      console.error(error);
    }
  };
};
