import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

const setAuthToken = token => {
  return dispatch => {
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      dispatch(setCurrentUser(decodedUser));
      localStorage.setItem("myToken", token);
    } else {
      delete axios.defaults.headers.common.Authorization;
      dispatch(setCurrentUser());
    }
  };
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = userData => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      dispatch(setAuthToken(user.token));
    } catch (err) {
      console.error("An error occurred", err);
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      const res = await instance.post("register/", userData);
      const user = res.data;
      console.log(jwt_decode(user.token));
      console.log(user);
    } catch (err) {
      console.error(err.response.data);
    }
    dispatch(login(userData));
  };
};

export const logout = () => {};
