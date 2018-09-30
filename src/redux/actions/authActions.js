import axios from "axios";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../../utils/setAuthToken";

// Login User - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/auth/login/", userData)
    .then(res => res.data)
    .then(data => {
      const {
        token: { accessToken },
        user
      } = data;
      // Save token and user to localStorage
      localStorage.setItem("jwtToken", accessToken);
      localStorage.setItem("eilaUser", JSON.stringify(user));
      // Set token to Auth header
      setAuthToken(accessToken);
      // Set current user
      dispatch(setCurrentUser(user));
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      } else {
        console.error(err);
      }
    });
};

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

// Logout User
export const logoutUser = history => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header token
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // Redirect to "/"
  history.push("/");
};
