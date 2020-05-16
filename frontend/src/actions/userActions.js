import {
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  REMOVE_USER_DETAILS,
} from "./constNames";

import { URL } from "../config";

const fetchUserDetailsSuccess = (jsonData) => {
  return {
    type: FETCH_USER_DETAILS_SUCCESS,
    payload: jsonData,
  };
};

const fetchUserDetailsFailure = () => {
  return {
    type: FETCH_USER_DETAILS_FAILURE,
  };
};

export const fetchUserDetails = (accessToken) => (dispatch) => {
  fetch(`${URL}/profile/view`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((jsonData) => {
      dispatch(fetchUserDetailsSuccess(jsonData));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchUserDetailsFailure());
    });
};

export const removeUserDetails = () => {
  return {
    type: REMOVE_USER_DETAILS,
  };
};
