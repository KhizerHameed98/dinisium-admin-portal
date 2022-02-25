import {
  ADD_NEW_ASSET_SUCCESS,
  ADD_NEW_ASSET_ERR,
  GET_ASSET_SUCCESS,
  GET_ASSET_DETAIL_SUCCESS,
  GET_ASSET_DETAIL_ERR,
  GET_ASSET_ERR,
  UPDATE_ASSET_SUCCESS,
  UPDATE_ASSET_ERR,
  VERIFY_UPDATE_SUCCESS,
  VERIFY_UPDATE_ERR,
  PENDING_LIST,
  APPROVED_LIST,
  REJECTED_LIST,
} from "../actions/types";

const initialState = {
  loading: true,
  assetsList: [],
  assetDetail: [],
  error: {},
  errors: [],
  pending: [],
  approved: [],
  rejected: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_ASSET_SUCCESS:
    case GET_ASSET_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case UPDATE_ASSET_SUCCESS:
    case VERIFY_UPDATE_SUCCESS:
      return {
        ...state,
        // assetDetail: { ...payload }, 
        loading: false,
      };

    case ADD_NEW_ASSET_ERR:
    case GET_ASSET_ERR:
    case GET_ASSET_DETAIL_ERR:
    case UPDATE_ASSET_ERR:
    case VERIFY_UPDATE_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case PENDING_LIST:
      return {
        ...state,
        pending: payload,
      };

    case APPROVED_LIST:
      return {
        ...state,
        approved: payload,
      };

    case REJECTED_LIST:
      return {
        ...state,
        rejected: payload,
      };

    case GET_ASSET_DETAIL_SUCCESS:
      return {
        ...state,
        assetDetail: payload,
      };
    default:
      return state;
  }
};
