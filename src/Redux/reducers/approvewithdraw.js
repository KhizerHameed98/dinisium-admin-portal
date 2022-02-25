import {
  APPROVE_WITHDRAW_SUCCESS,
  APPROVE_WITHDRAW_ERROR,
} from "../actions/types";

const initialState = {
  approverequestdata: [],
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APPROVE_WITHDRAW_SUCCESS:
      return {
        ...state,
        approverequestdata: payload,
      };
    case APPROVE_WITHDRAW_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
