import {
  GET_USER_WALLET_DETAILS_SUCCESS,
  GET_USER_WALLET_DETAILS_ERR,
} from "../actions/types";

const initialState = {
  loading: true,

  allUsersList: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_WALLET_DETAILS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case GET_USER_WALLET_DETAILS_ERR:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    default:
      return state;
  }
};
