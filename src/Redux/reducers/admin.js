import {
  GET_SUB_ADMIN_LIST_SUCCESS,
  GET_SUB_ADMIN_LIST_ERR,
  GET_ADMIN_BY_ID_ERR,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_ITO_SUCCESS,
  GET_ADMIN_ITO_ERR,
  ADD_NEW_ADMIN_ERR,
  ADD_NEW_ADMIN_SUCCESS,
  DELETE_ADMIN_ERR,
  DELETE_ADMIN_SUCCESS,
  ADMIN_LINK_ITO_ERR,
  ADMIN_LINK_ITO_SUCCESS,
  GET_SINGLE_SUB_ADMIN_SUCCESS,
  GET_SINGLE_SUB_ADMIN_ERR,
  GET_ALL_PERMISSIONS_SUCCESS,
  GET_ALL_PERMISSIONS_ERR,
  ASSIGN_PERMISSIONS_SUCCESS,
  ASSIGN_PERMISSIONS_ERR,
} from "../actions/types";

const initialState = {
  loading: true,
  subAdminList: [],
  subAdminDetail: {},
  adminDetails: {},
  adminITOList: [],
  adminLinkITO: {},
  addNewAdmin: {},
  deleteAdmin: {},
  permissionsData: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_SUB_ADMIN_SUCCESS:
    case GET_ALL_PERMISSIONS_SUCCESS:
    case ASSIGN_PERMISSIONS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case GET_SUB_ADMIN_LIST_SUCCESS:
      return {
        ...state,
        subAdminList: payload,
        loading: false,
      };

    case GET_SUB_ADMIN_LIST_ERR:
    case GET_ADMIN_BY_ID_ERR:
    case GET_ADMIN_ITO_ERR:
    case ADD_NEW_ADMIN_ERR:
    case DELETE_ADMIN_ERR:
    case ADMIN_LINK_ITO_ERR:
    case GET_SINGLE_SUB_ADMIN_SUCCESS:
    case GET_ALL_PERMISSIONS_ERR:
    case GET_SINGLE_SUB_ADMIN_ERR:
    case ASSIGN_PERMISSIONS_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case ADMIN_LINK_ITO_SUCCESS:
      return {
        ...state,
        adminLinkITO: payload,
        loading: false,
      };

    case GET_ADMIN_BY_ID_SUCCESS:
      return {
        ...state,
        adminDetails: payload,
        loading: false,
      };

    case GET_ADMIN_ITO_SUCCESS:
      return {
        ...state,
        adminITOList: payload,
        loading: false,
      };

    case ADD_NEW_ADMIN_SUCCESS:
      return {
        ...state,
        addNewAdmin: payload,
        loading: false,
      };

    case DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        subAdminList: state.subAdminList.filter((item) => item.id !== payload),
        loading: false,
      };

    default:
      return state;
  }
};
