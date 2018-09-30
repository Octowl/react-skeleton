import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Store
import store from "./redux/store";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Fontawesome
import "./utils/faLibrarySetup";

// Token check
import checkForExpiredToken from "./utils/checkForExpiredToken";
checkForExpiredToken(store);

// Axios configuration for production
if (process.env.REACT_APP_ENV === "production")
  axios.defaults.baseURL = "https://eila-api.herokuapp.com/v1";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
