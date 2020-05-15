import {
  FETCH_USER_DETAILS,
  UPDATE_USER_DETAILS,
  REMOVE_USER_DETAILS,
} from "./constNames";

import { URL } from "../config";

const fetchUserDetailsSucess = (jsonData) => {
  return {
    type: FETCH_USER_DETAILS,
    payload: {
      loggedIn: true,
      ...jsonData,
    },
  };
};

const fetchUserDetailsFail = () => {
  return {
    type: FETCH_USER_DETAILS,
    payload: {
      loggedIn: false,
    },
  };
};

const fetchUserDetails = (accessToken) => {
  const request = new Request(`${URL}/profile/view`, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return (dispatch) => {
    fetch(request)
      .then((response) => response.json())
      .then((jsonData) => {
        dispatch(fetchUserDetailsSucess(jsonData));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUserDetailsFail());
      });
  };
};

export default fetchUserDetails;
