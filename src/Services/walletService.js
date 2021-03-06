import axios from "axios";

import {
  GET_TOKEN_LIST_SUCCESS,
  GET_TOKEN_LIST_ERR,
  DEPOSIT_PAYMENT_ERR,
  DEPOSIT_PAYMENT_SUCCESS,
  GET_WALLET_DETAILS_SUCCESS,
  GET_WALLET_DETAILS_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { wallet } from "../Routes/serverRoutes";

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

//Get token List
export const getTokentList = () => (dispatch) => {
  axios
    .get(wallet.GET_TOKEN_LIST)
    .then((res) => {
      dispatch({
        type: GET_TOKEN_LIST_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_TOKEN_LIST_ERR,
      });
    });
};

//Add wallet deposit payment
export const depositPayment =
  ({ obj, setSuccess }) =>
  (dispatch) => {
    axios
      .post(wallet.DEPOSIT_PAYMENT, obj)
      .then((res) => {
        dispatch({
          type: DEPOSIT_PAYMENT_SUCCESS,
          payload: res.data.data,
        });
        let successMessage = (res && res.data.msg) || res.message;
        alertToast(false, successMessage);
        setSuccess(true);
      })
      .catch((error) => {
        dispatch({
          type: DEPOSIT_PAYMENT_ERR,
        });
      });
  };

//Get admin Wallet Details
export const getWalletDetails = () => (dispatch) => {
  axios
    .get(wallet.GET_WALLET_DETAILS)
    .then((res) => {
      dispatch({
        type: GET_WALLET_DETAILS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_WALLET_DETAILS_ERR,
        payload: error && error.response && error.response.data,
      });
    });
};
