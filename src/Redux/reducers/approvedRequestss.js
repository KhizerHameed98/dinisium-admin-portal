import { APPROVED_REQUESTS } from "../actions/types";

const initialState = {
  approvedRequests: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APPROVED_REQUESTS:
      return {
        ...state,
        approvedRequests: payload,
      };
    default:
      return state;
  }
};
