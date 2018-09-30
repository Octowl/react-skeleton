import { GET_ERRORS } from "./types";

// Reset errors
export const resetErrors = () => {
  return {
    type: GET_ERRORS,
    errors: {}
  };
};
