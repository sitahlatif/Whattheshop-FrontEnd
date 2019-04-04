import axios from "axios";

import * as actionTypes from "./actionTypes";
import { resetErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const profileDetail = userID => {
  return async dispatch => {
    try {
      const res = await instance.get(`profile/${userID}/detail/`);
      const detailProfile = res.data;
      dispatch(resetErrors());

      dispatch({
        type: actionTypes.PROFILE_DETAIL,
        payload: detailProfile
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};

export const profileUpdate = userID => {
  return async dispatch => {
    try {
      const res = await instance.put(`profile/${userID}/update/`);
      const UpdatedProfile = res.data;
      dispatch(resetErrors());
      dispatch({
        type: actionTypes.PROFILE_UPDATE,
        payload: UpdatedProfile
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};
