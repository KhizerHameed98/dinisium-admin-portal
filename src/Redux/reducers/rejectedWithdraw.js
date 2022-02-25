import { REJECTED_DATA } from "../actions/types";

const initialState = {
  rejectedrequestdata: [],
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REJECTED_DATA:
      return {
        ...state,
        rejectedrequestdata: payload,
      };

    default:
      return state;
  }
};
