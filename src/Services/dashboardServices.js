import axios from "axios";
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
  GET_ALL_TOKENS_DATA,
  GET_SOLD_TOKENS,
} from "../Redux/actions/types";
import { dashboard } from "../Routes/serverRoutes";
import { toast } from "react-toastify";

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

//Count ITO Elections
export const countItoElections =
  (itoId = 0) =>
  (dispatch) => {
    axios
      .get(dashboard.ITO_ELECTIONS_COUNT + `/${itoId}/counts`)
      .then((res) => {
        dispatch({
          type: ITO_ELECTIONS_COUNT_SUCCESS,
          payload: { countElections: res.data.count },
        });
      })
      .catch((err) => {
        dispatch({
          type: ITO_ELECTIONS_COUNT_ERR,
        });
      });
  };

//Count ITO Registered Users
export const countItoRegisteredUsers =
  (itoId = 0) =>
  (dispatch) => {
    axios
      .get(dashboard.ITO_USERS_COUNT + `/${itoId}/counts`)
      .then((res) => {
        dispatch({
          type: ITO_USERS_COUNT_SUCCESS,
          payload: { countUsers: res.data.count },
        });
      })
      .catch((err) => {
        dispatch({
          type: ITO_USERS_COUNT_ERR,
        });
      });
  };

//Count ITO Exchnage Orders
export const countItoExchangeOrders =
  (itoId = 0) =>
  (dispatch) => {
    axios
      .get(dashboard.ITO_ORDERS_COUNT + `/${itoId}/counts`)
      .then((res) => {
        dispatch({
          type: ITO_ORDERS_COUNT_SUCCESS,
          payload: { countOrders: res.data.count },
        });
      })
      .catch((err) => {
        dispatch({
          type: ITO_ORDERS_COUNT_ERR,
        });
      });
  };
//Count ITO Series
export const countItoSeries =
  (itoId = 0) =>
  (dispatch) => {
    axios
      .get(dashboard.ITO_SERIES_COUNT + `?ito=${itoId}`)
      .then((res) => {
        dispatch({
          type: ITO_SERIES_COUNT_SUCCESS,
          payload: { countSeries: res.data.data.count },
        });
      })
      .catch((err) => {
        dispatch({
          type: ITO_SERIES_COUNT_ERR,
        });
      });
  };

//COunt ITO(Admin Specific) Investment Per Month
export const countInvestmentPerMonth =
  (itoId = 0) =>
  (dispatch) => {
    axios
      .get(dashboard.ITO_INVESTMENT_PER_MONTH + `/${itoId}/total_month`)
      .then((res) => {
        let months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let data = res.data.data.reduce((acc, current) => {
          let monthIndex = new Date(current.investment_to_month).getMonth();
          let currentMonth = months[monthIndex];
          let currentYear = new Date(current.investment_to_month).getFullYear();
          let investment_to_month = `${currentMonth}-${currentYear}`;
          acc.push({
            investment_to_month: investment_to_month,
            Investment: current.investment,
          });
          return acc;
        }, []);
        dispatch({
          type: INVESTMENT_PER_MONTH_SUCCESS,
          payload: { investmentGraphDetail: data },
        });
      })
      .catch((err) => {
        dispatch({
          type: INVESTMENT_PER_MONTH_ERR,
        });
      });
  };

//Count ITO(Admin Specific) Registered Users Per Month
export const countRegiteredUsersPerMonth =
  (itoId = 0) =>
  (dispatch) => {
    axios
      .get(
        dashboard.ITO_REGISTERED_USERS_PER_MONTH + `/${itoId}/register_month`
      )
      .then((res) => {
        let months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let data = res.data.data.reduce((acc, current) => {
          let monthIndex = new Date(current.register_to_month).getMonth();
          let currentMonth = months[monthIndex];
          let currentYear = new Date(current.register_to_month).getFullYear();
          let register_to_month = `${currentMonth}-${currentYear}`;
          acc.push({
            register_to_month: register_to_month,
            No_Of_Users: current.count,
          });
          return acc;
        }, []);
        dispatch({
          type: USERS_PER_MONTH_SUCCESS,
          payload: { usersGraphDetail: data },
        });
      })
      .catch((err) => {
        dispatch({
          type: USERS_PER_MONTH_ERR,
        });
      });
  };
//------------------- for marketcap graph
export function getTokensMarketcap(obj) {
  return async (dispatch) => {
    // console.log(
    //   dashboard.GET_TOKENS_MARKETCAP + `${obj.id}?filterWith=last${obj.name}`
    // );
    try {
      let data = await axios.get(
        dashboard.GET_TOKENS_MARKETCAP + `${obj.id}?filterWith=per${obj.name}`
      );
      // alertToast(true, data?.data?.msg);
      dispatch({
        type: GET_MARKETCAP,
        payload: data.data,
      });
      //Commenting the Irregular toast

      alertToast(true, data?.msg);
    } catch (err) {
      // alertToast(true, err?.response?.data?.msg);
      // alertToast(false, "error");
    }
  };
}

//----------------------- for sold tokens graph

export function getSoldTokensGraph(obj) {
  return async (dispatch) => {
    console.log(
      dashboard.GET_TOKENS_MARKETCAP + `${obj.id}?filterWith=last${obj.name}`
    );
    try {
      let data = await axios.get(
        dashboard.GET_SOLD_TOKENS_GRAPH + `${obj.id}?filterWith=per${obj.name}`
      );

      dispatch({
        type: GET_SOLD_TOKENS,
        payload: data.data,
      });
      //Commenting the Irregular toast

      // alertToast(false, data.data.msg);
    } catch (err) {
      // alertToast(true, err.response.data.msg);
    }
  };
}

//--------------------------------------------------------------

export function getAllTokensDefaultData(obj) {
  return async (dispatch) => {
    // console.log(
    //   dashboard.GET_TOKENS_MARKETCAP + `${obj.id}?filterWith=last${obj.name}`
    // );
    try {
      let data = await axios.get(dashboard.GET_ALL_TOKENS_DEFAULT_DATA);

      dispatch({
        type: GET_ALL_TOKENS_DATA,
        payload: data.data,
      });
      //Commenting the Irregular toast

      // alertToast(false, data.data.msg);
    } catch (err) {
      // alertToast(true, err.response.data.msg);
    }
  };
}

//--------------------------------------------------------------------

//Count ITO(Admin Specific) Exchnage Orders Per day
export const countExchangeOrdersPerDay =
  (itoId = 0) =>
  (dispatch) => {
    axios
      .get(dashboard.ITO_ORDERS_PER_DAY + `/${itoId}/count_day`)
      .then((res) => {
        let data = res.data.data.reduce((acc, current) => {
          let currentDate = new Date(current.exchange_to_day).getDate();
          let currentMonth = new Date(current.exchange_to_day).getMonth() + 1; // months start from 0,1,2 to 11
          let currentYear = new Date(current.exchange_to_day).getFullYear();
          let exchange_to_date = `${currentMonth}-${currentDate}-${currentYear}`;
          acc.push({
            exchange_to_day: exchange_to_date,
            Buy_Orders: current.count_buy,
            Sell_Orders: current.count_sell,
          });
          return acc;
        }, []);
        dispatch({
          type: ORDERS_PER_DAY_SUCCESS,
          payload: { ordersGraphDetail: data },
        });
      })
      .catch((err) => {
        dispatch({
          type: ORDERS_PER_DAY_ERR,
        });
      });
  };
