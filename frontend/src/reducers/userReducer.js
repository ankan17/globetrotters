import {
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  UPDATE_USER_DETAILS,
  REMOVE_USER_DETAILS,
} from "../actions/constNames";

const initialState = {
  loggedIn: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: {
          ...action.payload,
        },
      };
    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        loggedIn: false,
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
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
