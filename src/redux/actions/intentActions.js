import axios from "axios";

// Types
import { GET_INTENTS, INTENTS_LOADING } from "./types";

// Get all intents
export const getIntents = () => dispatch => {
  dispatch(setIntentLoading());
  axios
    .get("/intents")
    .then(res => res.data)
    .then(intents =>
      dispatch({
        type: GET_INTENTS,
        intents
      })
    )
    .catch(err => console.error("Error while fetching intents", err));
};

// Set the loading state
export const setIntentsLoading = () => ({
  type: INTENTS_LOADING
});
