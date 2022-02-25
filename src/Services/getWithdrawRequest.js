import axios from "axios";
import { GET_WITHDRAW_REQUEST } from "../Redux/actions/types";
import { WithdrawRequest } from ".././Routes/serverRoutes";

export const getWithdrawRequest = () => {
  return async (dispatch) => {
    const result = await axios.get(WithdrawRequest.GET_WITHDRAW_REQUEST);
    await dispatch({
      type: GET_WITHDRAW_REQUEST,
      payload: result.data,
    });
  };
};
