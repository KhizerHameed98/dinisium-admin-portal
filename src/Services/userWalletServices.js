import axios from "axios";
import {
  GET_USER_WALLET_DETAILS_SUCCESS,
  GET_USER_WALLET_DETAILS_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { userManagement } from "../Routes/serverRoutes";

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

//Get All Investors List
export const getAllUserWallet = () => (dispatch) => {
  axios
    .get(userManagement.GET_ALL_USERS)
    .then((res) => {
      dispatch({
        type: GET_USER_WALLET_DETAILS_SUCCESS,
        payload: { allUsersList: res.data.response },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USER_WALLET_DETAILS_ERR,
      });
    });
};
