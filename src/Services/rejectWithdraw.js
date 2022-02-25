import axios from "axios";
import { REJECTED_DATA, REJECT_WITHDRAW } from "../Redux/actions/types";
import { WithdrawRequest } from "../Routes/serverRoutes";
import { toast } from "react-toastify";
import Route from "../Constants/browserRoutes";

//alert Toast
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

export const rejectWithdraw = (dataa, id, setShow) => {
  return async (dispatch) => {
    try {
      const data = await axios.put(
        WithdrawRequest.REJECT_WITHDRAW_REQUEST + id,
        dataa
      );
      dispatch({
        type: REJECT_WITHDRAW,
      });
      setShow(false);
      alertToast(false, data.data.msg);
      setShow(false);
    } catch (err) {
      alertToast(true, err.response.data.msg);
      setShow(false);
    }
  };
};

export const RejectedData = () => {
  return async (dispatch) => {
    try {
      const rejectedData = await axios.get(WithdrawRequest.REJECTED_DATA);
      dispatch({
        type: REJECTED_DATA,
        payload: rejectedData.data,
      });
    } catch (err) {
      alertToast(true, err.response.data.msg);
    }
  };
};
