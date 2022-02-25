import axios from "axios";
import {
  GET_CANDLETABLE_PRICE_HISTORY,
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
  GET_TOKEN_HISTORY,
  GET_TOKEN_ID_BYPRICE,
  GET_ORDERS,
  REJECT_ORDERS,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { exchange } from "../Routes/serverRoutes";

//alert tost
const alertToast = (error, message) => {
  if (!error) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

//Get Buy Request List
export const getBuyRequestsList =
  ({ itoId }) =>
  (dispatch) => {
    const orderType = "buy_order";
    const status = "pending";

    axios
      .get(exchange.GET_BUY_REQUEST_LIST)
      .then((res) => {
        dispatch({
          type: GET_BUY_REQUEST_LIST_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_BUY_REQUEST_LIST_ERR,
        });
      });
  };

//Get Sell Request List
export const getSellRequestsList =
  ({ itoId }) =>
  (dispatch) => {
    const orderType = "sell_order";
    const status = "pending";

    axios
      .get(
        exchange.GET_BUY_REQUEST_LIST
        //  +
        //   `?order_type=${orderType}&status=${status}`
      )
      .then((res) => {
        dispatch({
          type: GET_SELL_REQUEST_LIST_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SELL_REQUEST_LIST_ERR,
        });
      });
  };

//Approve Order Request
export const approveOrderRequest =
  ({ exchangeId, setDisable, refresh, setrefresh }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .put(`${exchange.APPROVE_ORDER_REQUEST}${exchangeId}/approve`, config)
      .then(async (res) => {
        await dispatch({
          type: APPROVE_ORDER_SUCCESS,
          payload: { data: res.data, id: exchangeId },
        });
        // setDisable(true);
        alertToast(false, res.data && res.data.msg);
        setrefresh(!refresh);
      })
      .catch((err) => {
        dispatch({
          type: APPROVE_ORDER_ERR,
        });
        // setDisable(false);
        alertToast(true, err.response && err.response.data.msg);
        setrefresh(!refresh);
      });
  };

//Get Completed Orders List
export const getCompletedOrdersList =
  ({ itoId }) =>
  (dispatch) => {
    const status = "completed";
    axios
      .get(exchange.GET_BUY_REQUEST_LIST + `?status=${status}`)
      .then((res) => {
        dispatch({
          type: GET_COMPLETED_ORDERS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_COMPLETED_ORDERS_ERR,
        });
      });
  };

//Get Exchangeable TOKENS
export const getExchangeableTokens = () => (dispatch) => {
  axios
    .get(exchange.GET_EXCHANGEABLE_TOKENS)
    .then((res) => {
      let data = res.data.data.reduce((acc, current) => {
        acc.push({
          ...current,
          label: current.token_name,
          value: current.token_name,
        });
        return acc;
      }, []);
      dispatch({
        type: GET_TRADEABLE_TOKENS_SUCCESS,
        payload: { data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TRADEABLE_TOKENS_ERR,
      });
    });
};

export function isTokenSelected(status, data) {
  return {
    type: TOKEN_SELECTED_STATUS,
    payload: { myTokenData: data, tokenSelected: status },
  };
}

//Get Token Detail By Id
export const getTokenDetailById = (id) => (dispatch) => {
  axios
    .get(exchange.GET_TOKEN_DETAIL + `${id}`)
    .then(async (res) => {
      await dispatch({
        type: GET_TOKEN_DETAIL_SUCCESS,
        payload: { tokenData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TOKEN_DETAIL_ERR,
      });
    });
};

//Get Ongoing Series By Id
export const getOngoingSeriesById = (itoId) => (dispatch) => {
  axios
    .get(exchange.ONGOING_SERIES_BY_TOKEN_ID + `${itoId}/ongoing`)
    .then((res) => {
      let data = res.data.data.reduce((acc, current) => {
        acc.push({
          ...current,
          label: current.name,
          value: current.name,
        });
        return acc;
      }, []);
      dispatch({
        type: GET_ONGOING_SERIES_SUCCESS,
        payload: { seriesData: data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ONGOING_SERIES_ERR,
      });
    });
};

export function isSeriesSelected(status, data) {
  return {
    type: SERIES_SELECTED_STATUS,
    payload: { selectedSeriesData: data, seriesSelected: status },
  };
}

export const getExhangeOrders = () => {
  return async (dispatch) => {
    try {
      const orders = await axios.get(exchange.GET_EXHCNAGE_ORDERS);
      dispatch({
        type: GET_ORDERS,
        payload: orders.data,
      });
      alertToast(false, orders.data.msg);
    } catch (err) {
      alertToast(true, err.response.data.msg);
    }
  };
};

export const RejectOrder = ({ data, refresh, setrefresh }) => {
  return async (dispatch) => {
    try {
      const result = await axios.put(exchange.MANUAL_TRANSFER, data);
      await dispatch({
        type: REJECT_ORDERS,
        payload: result.data,
      });
      alertToast(false, result?.data?.msg);
      setrefresh(!refresh);
    } catch (err) {
      alertToast(true, err?.response?.data?.msg);
      setrefresh(!refresh);
    }
  };
};

export const ApproveOrder = ({ data, refresh, setrefresh }) => {
  return async (dispatch) => {
    try {
      const result = await axios.put(exchange.MANUAL_TRANSFER, data);
      await dispatch({
        type: REJECT_ORDERS,
        payload: result.data,
      });
      alertToast(false, result.data.msg);
      setrefresh(!refresh);
    } catch (err) {
      alertToast(true, err.response.data.msg);
      setrefresh(!refresh);
    }
  };
};

export function getTokenPriceHistory(obj) {
  return async (dispatch) => {
    // console.log(
    //   exchange.GET_TOKEN_PRICE_HISTORY + `${obj.id}?filterWith=last${obj.name}`
    // );
    try {
      let data = await axios.get(
        exchange.GET_TOKEN_PRICE_HISTORY + `${obj.id}?filterWith=per${obj.name}`
      );

      dispatch({
        type: GET_TOKEN_HISTORY,
        payload: data.data,
      });
      //Commenting the Irregular toast

      // alertToast(false, data.data.msg);
    } catch (err) {
      // alertToast(true, err.response.data.msg);
    }
  };
}

export function getTokenIdForPriceHistory() {
  return async (dispatch) => {
    let data = await axios.get(exchange.GET_TOKEN_ID_FOR_PRICE_HISTORY);

    dispatch({
      type: GET_TOKEN_ID_BYPRICE,
      payload: data.data,
    });
  };
}

export function getCandlestickTablePrice() {
  return async (dispatch) => {
    let data = await axios.get(exchange.GET_CANDLESTICK_TABLE_PRICE);
    // console.log(data.data);
    dispatch({
      type: GET_CANDLETABLE_PRICE_HISTORY,
      payload: data.data,
    });
    // console.log(data);
  };
}
