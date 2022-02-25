import { SINGLE_APPROVED } from "../actions/types";

const initialState = {
  result: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SINGLE_APPROVED:
      return {
        ...state,
        result: payload,
      };
    default:
      return state;
  }
};
