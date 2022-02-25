import { GETKYC, GET_WITHDRAW_REQUEST } from "../actions/types";

const initialState = {
  result: [],
  response: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WITHDRAW_REQUEST:
      return {
        ...state,
        result: payload,
      };

    default:
      return state;
  }
};
