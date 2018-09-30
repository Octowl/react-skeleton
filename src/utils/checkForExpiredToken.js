import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "./setAuthToken";

// Actions
import { setCurrentUser, logoutUser } from "../redux/actions/authActions";

const checkForExpiredToken = store => {
  // Check for token expiration
  const token = localStorage.jwtToken;
  const user = localStorage.eilaUser;

  if (token) {
    const currentTime = Date.now() / 1000;

    // Decode token and get user info
    const decoded = jwt_decode(token);

    // Check token expiration
    if (decoded.exp >= currentTime) {
      // Set auth token header
      setAuthToken(token);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(JSON.parse(user)));
    } else {
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/login";
    }
  }
};

export default checkForExpiredToken;
