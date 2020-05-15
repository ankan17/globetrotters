import { FETCH_SECRETS } from "./constNames";
import { URL } from "../config";

const fetchSecrets = () => async (dispatch) => {
  const token = localStorage.getItem("GOOGLE_ACCESS_TOKEN");
  try {
    if (token) {
      const response = await fetch(`${URL}/secret/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const responseJson = await response.json();
      const status = await response.status;
      if (status !== 200) {
        console.log(responseJson);
      } else {
        return dispatch({
          type: FETCH_SECRETS,
          payload: responseJson,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchSecrets;
