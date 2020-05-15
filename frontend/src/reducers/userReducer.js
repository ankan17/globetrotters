import {
  FETCH_USER_DETAILS,
  UPDATE_USER_DETAILS,
  REMOVE_USER_DETAILS,
} from "../actions/constNames";

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS:
      return {
        ...state,
        loggedIn: true,
        ...action.payload,
      };
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        loggedIn: true,
        ...action.payload,
      };
    case REMOVE_USER_DETAILS:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
