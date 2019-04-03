import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
    localStorage.setItem("myToken", token);
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return dispatch => {
    const token = localStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      console.log(user.exp >= currentTime);
      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = userData => {
  console.log(userData);

  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      setAuthToken(user.token);
      dispatch(setCurrentUser(jwt_decode(user.token)));
    } catch (err) {
      console.error("An error occurred", err);
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      const response = await instance.post("register/", userData);
      let user = response.data;
      setAuthToken(user.token);
      dispatch(setCurrentUser(jwt_decode(user.token)));
    } catch (err) {
      console.error(err.response.data);
    }
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};
