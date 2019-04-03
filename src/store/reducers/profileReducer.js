import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_DETAIL:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.PROFILE_UPDATE:
      return {
        ...state,
        profile: { created_on: state.profile.created_on, ...action.payload }
      };

    default:
      return state;
  }
};

export default profileReducer;
