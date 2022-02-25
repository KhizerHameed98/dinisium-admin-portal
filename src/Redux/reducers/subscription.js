import { StarRateRounded } from "@material-ui/icons";
import { saveAsDraft } from "../actions/actions";
import {
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_ERR,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_ERR,
  GET_SUBSCRIPTION_DETAIL_SUCCESS,
  GET_SUBSCRIPTION_DETAIL_ERR,
  VERIFY_SUBSCRIPTION_CREATE_SUCCESS,
  VERIFY_SUBSCRIPTION_CREATE_ERR,
  SAVE_AS_DRAFT,
  GET_SUBSCRIPTION_DETAIL,
  GET_SUBSCRIPTION_DRAFTS,
  GET_SUBSCRIPTION_DRAFTS_BY_ID,
} from "../actions/types";

const initialState = {
  loading: true,
  subscriptionDetail: {},
  admins: [],
  subscriptionDrafts: [],
  subscriptionDraftsId: [],
  error: {},
  errors: [],
  subscriptionDetail: {},
  subscriptionData: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_SUBSCRIPTION_SUCCESS:
    case GET_SUBSCRIPTIONS_SUCCESS:
    case GET_SUBSCRIPTION_DETAIL_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case VERIFY_SUBSCRIPTION_CREATE_SUCCESS:
      return {
        ...state,
        subscriptionDetail: {
          ...state.subscriptionDetail,
          status: payload.status,
        },
        loading: false,
      };

    case CREATE_SUBSCRIPTION_ERR:
    case GET_SUBSCRIPTIONS_ERR:
    case GET_SUBSCRIPTION_DETAIL_ERR:
    case VERIFY_SUBSCRIPTION_CREATE_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case GET_SUBSCRIPTION_DETAIL:
      return {
        ...state,
        subscriptionData: payload,
      };
    case GET_SUBSCRIPTION_DRAFTS:
      return {
        ...state,
        subscriptionDrafts: payload,
      };

    case GET_SUBSCRIPTION_DRAFTS_BY_ID:
      return {
        ...state,
        subscriptionDraftsId: payload,
      };

    default:
      return state;
  }
};
