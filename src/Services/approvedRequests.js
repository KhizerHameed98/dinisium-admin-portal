import axios from "axios";
import { WithdrawRequest } from "../Routes/serverRoutes";
import { APPROVED_REQUESTS } from "../Redux/actions/types";

export const approvedRequests = () => {
  return async (dispatch) => {
    const Approvedreq = await axios.get(
      WithdrawRequest.GET_WITHDRAW_REQUEST_APPROVED
    );
    dispatch({
      type: APPROVED_REQUESTS,
      payload: Approvedreq.data,
    });
  };
};
