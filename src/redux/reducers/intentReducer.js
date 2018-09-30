import { GET_INTENTS, INTENTS_LOADING } from "../actions/types";

const initialState = {
  intents: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INTENTS:
      return {
        ...state,
        intents: action.intents,
        loading: false
      };
    case INTENTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
