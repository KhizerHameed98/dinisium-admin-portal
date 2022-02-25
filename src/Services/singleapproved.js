import axios from "axios";
import { SINGLE_APPROVED } from "../Redux/actions/types";
import { WithdrawRequest } from "../Routes/serverRoutes";

export const singleApproved = () => {
  return async (dispatch) => {
    const singleApprove = await axios.get(
      WithdrawRequest.GET_WITHDRAW_REQUEST_SINGLE_APPROVE
    );
    dispatch({
      type: SINGLE_APPROVED,
      payload: singleApprove.data,
    });
  };
};
