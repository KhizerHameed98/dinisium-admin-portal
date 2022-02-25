import {
  ITO_ELECTIONS_COUNT_SUCCESS,
  ITO_ELECTIONS_COUNT_ERR,
  ITO_USERS_COUNT_SUCCESS,
  ITO_USERS_COUNT_ERR,
  ITO_ORDERS_COUNT_SUCCESS,
  ITO_ORDERS_COUNT_ERR,
  INVESTMENT_PER_MONTH_SUCCESS,
  INVESTMENT_PER_MONTH_ERR,
  USERS_PER_MONTH_SUCCESS,
  USERS_PER_MONTH_ERR,
  ORDERS_PER_DAY_SUCCESS,
  ORDERS_PER_DAY_ERR,
  ITO_SERIES_COUNT_SUCCESS,
  ITO_SERIES_COUNT_ERR,
  GET_MARKETCAP,
  GET_SOLD_TOKENS,
  GET_ALL_TOKENS_DATA,
} from "../actions/types";

const initialState = {
  loading: true,
  countElections: "",
  countUsers: "",
  countOrders: "",
  countSeries: "",
  investmentGraphDetail: [],
  usersGraphDetail: [],
  ordersGraphDetail: [],
  error: {},
  errors: [],
  marketcap: [],
  soldTokens: [],
  allTokensData: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ITO_ELECTIONS_COUNT_SUCCESS:
    case ITO_USERS_COUNT_SUCCESS:
    case ITO_ORDERS_COUNT_SUCCESS:
    case INVESTMENT_PER_MONTH_SUCCESS:
    case USERS_PER_MONTH_SUCCESS:
    case ORDERS_PER_DAY_SUCCESS:
    case ITO_SERIES_COUNT_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case ITO_ELECTIONS_COUNT_ERR:
    case ITO_USERS_COUNT_ERR:
    case ITO_ORDERS_COUNT_ERR:
    case INVESTMENT_PER_MONTH_ERR:
    case USERS_PER_MONTH_ERR:
    case ORDERS_PER_DAY_ERR:
    case ITO_SERIES_COUNT_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_MARKETCAP:
      return {
        ...state,
        marketcap: payload,
      };
    case GET_SOLD_TOKENS:
      return {
        ...state,
        soldTokens: payload,
      };
    case GET_ALL_TOKENS_DATA:
      return {
        ...state,
        allTokensData: payload,
      };

    default:
      return state;
  }
};
