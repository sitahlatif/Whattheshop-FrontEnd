import axios from "axios";

import * as actionTypes from "./actionTypes";
import { resetErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const profile = () => {
  return async dispatch => {
    try {
      const res = await instance.get("profile/");
      const Profile = res.data;
      dispatch(resetErrors());
      console.log("heres the profile: ", Profile);
      dispatch({
        type: actionTypes.PROFILE,
        payload: Profile
      });
    } catch (err) {
      // dispatch({
      //   type: actionTypes.SET_ERRORS,
      //   payload: err.response.data
      // });
    }
  };
};

export const profileUpdate = () => {
  return async dispatch => {
    try {
      const res = await instance.put("profile/update/");
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
