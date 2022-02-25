import {
  PENDING_KYC_SUCCESS,
  PENDING_KYC_ERR,
  APPROVED_KYC_SUCCESS,
  APPROVED_KYC_ERR,
  REJECTED_KYC_SUCCESS,
  REJECTED_KYC_ERR,
  GET_KYC_SUCCESS,
  GET_KYC_ERR,
  KYC_UPDATE_SUCCESS,
  KYC_UPDATE_ERR,
  SINGLE_APPROVED_KYC_ERR,
  SINGLE_APPROVED_KYC_SUCCESS,
  KYC_DATA,
} from "../actions/types";

const initialState = {
  loading: true,
  response: [],
  singleApprovedData: {},
  pendingData: {},
  approvedData: {},
  rejectedData: {},
  data: {},
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SINGLE_APPROVED_KYC_SUCCESS:
    case PENDING_KYC_SUCCESS:
    case APPROVED_KYC_SUCCESS:
    case REJECTED_KYC_SUCCESS:
    case GET_KYC_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case KYC_UPDATE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          rejection_message: payload.rejection_message,
          kyc_status: payload.status,
          admin_one:
            state.data.admin_one === null
              ? payload.adminId
              : state.data.admin_one,
          admin_two: state.data.admin_one !== null ? payload.adminId : null,
        },
        loading: false,
      };

    case SINGLE_APPROVED_KYC_ERR:
    case PENDING_KYC_ERR:
    case APPROVED_KYC_ERR:
    case REJECTED_KYC_ERR:
    case GET_KYC_ERR:
    case KYC_UPDATE_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case KYC_DATA:
      return {
        ...state,
        response: payload,
      };

    default:
      return state;
  }
};
