import axios from "axios";
import {
  APPROVE_WITHDRAW_ERROR,
  APPROVE_WITHDRAW_SUCCESS,
} from "../Redux/actions/types";
import { WithdrawRequest } from ".././Routes/serverRoutes";

import { toast } from "react-toastify";

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

export const approveWithdraw = (data, id) => (dispatch) => {
  axios
    .put(WithdrawRequest.APPROVE_WITHDRAW_REQUEST + id, data)
    .then(async (res) => {
      await dispatch({
        type: APPROVE_WITHDRAW_SUCCESS,
        payload: res.data,
      });
      alertToast(false, res?.data?.msg);
      data.setShow(true);
    })
    .catch((err) => {
      dispatch({
        type: APPROVE_WITHDRAW_ERROR,
      });
      alertToast(true, err?.response?.data?.msg);
    });
};
