import {
  GET_BUY_REQUEST_LIST_SUCCESS,
  GET_BUY_REQUEST_LIST_ERR,
  GET_SELL_REQUEST_LIST_SUCCESS,
  GET_SELL_REQUEST_LIST_ERR,
  APPROVE_ORDER_SUCCESS,
  APPROVE_ORDER_ERR,
  GET_COMPLETED_ORDERS_SUCCESS,
  GET_COMPLETED_ORDERS_ERR,
  GET_TRADEABLE_TOKENS_SUCCESS,
  GET_TRADEABLE_TOKENS_ERR,
  TOKEN_SELECTED_STATUS,
  GET_TOKEN_DETAIL_SUCCESS,
  GET_TOKEN_DETAIL_ERR,
  GET_ONGOING_SERIES_SUCCESS,
  GET_ONGOING_SERIES_ERR,
  SERIES_SELECTED_STATUS,
  GET_ORDERS,
  REJECT_ORDERS,
  APPROVE_ORDERS,
  GET_TOKEN_HISTORY,
  GET_TOKEN_ID_BYPRICE,
  GET_CANDLETABLE_PRICE_HISTORY,
} from "../actions/types";

const initialState = {
  loading: true,
  buyRequestList: [],
  sellRequestList: [],
  tokenHistory: [],
  tokenId: [],
  Orders: [],
  RejectedOrders: [],
  ApprovedOrders: [],
  tokenData: {},
  orderData: {},
  data: [],
  seriesData: [],
  buyTokenData: {},
  candleStickTableHistory: [],

  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRADEABLE_TOKENS_SUCCESS:
    case GET_TOKEN_DETAIL_SUCCESS:
    case TOKEN_SELECTED_STATUS:

    case SERIES_SELECTED_STATUS:
    case GET_ONGOING_SERIES_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case GET_BUY_REQUEST_LIST_SUCCESS:
      return {
        ...state,
        buyRequestList: payload,
        loading: false,
      };
    case GET_SELL_REQUEST_LIST_SUCCESS:
      return {
        ...state,
        sellRequestList: payload,
        loading: false,
      };

    case GET_COMPLETED_ORDERS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case APPROVE_ORDER_SUCCESS:
      return {
        ...state,
        sellRequestList: state.sellRequestList.map((item) =>
          item.id === payload.id ? { ...item, disable: true } : item
        ),
        buyRequestList: state.buyRequestList.map((item) =>
          item.id === payload.id ? { ...item, disable: true } : item
        ),
        loading: false,
      };

    case GET_BUY_REQUEST_LIST_ERR:
    case GET_SELL_REQUEST_LIST_ERR:
    case APPROVE_ORDER_ERR:
    case GET_COMPLETED_ORDERS_ERR:

    case GET_TRADEABLE_TOKENS_ERR:
    case GET_TOKEN_DETAIL_ERR:

    case GET_ONGOING_SERIES_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_TOKEN_HISTORY:
      return {
        ...state,
        tokenHistory: payload,
      };

    case GET_TOKEN_ID_BYPRICE:
      return {
        ...state,
        tokenId: payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        Orders: payload,
      };

    case REJECT_ORDERS:
      return {
        ...state,
        RejectedOrders: payload,
      };
    case APPROVE_ORDERS:
      return {
        ...state,
        ApprovedOrders: payload,
      };
    case GET_TOKEN_HISTORY:
      return {
        ...state,
        tokenHistory: payload,
      };
    case GET_CANDLETABLE_PRICE_HISTORY:
      return {
        ...state,
        candleStickTableHistory: payload,
      };

    default:
      return state;
  }
};
