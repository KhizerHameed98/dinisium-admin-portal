import axios from "axios";
import {
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERR,
  GET_INVESTMENT_DETAIL_SUCCESS,
  GET_INVESTMENT_DETAIL_ERR,
  BLOCK_UNBLOCK_SUCCESS,
  BLOCK_UNBLOCK_ERR,
  GET_USER_COUNT,
  TOTAL_USER_COUNT,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { userManagement, exchange } from "../Routes/serverRoutes";

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
export const getUsersList = () => (dispatch) => {
  const role = "user";
  axios
    .get(userManagement.GET_ALL_USERS + `?role=${role}`)
    .then((res) => {
      dispatch({
        type: GET_USERS_LIST_SUCCESS,
        payload: { usersList: res.data.response },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS_LIST_ERR,
      });
    });
};

//Get User Profile By Id
export const getUserProfile = (id) => (dispatch) => {
  axios
    .get(userManagement.GET_USER_PROFILE + `?id=${id}`)
    .then((res) => {
      dispatch({
        type: GET_USER_PROFILE_SUCCESS,
        payload: { userProfile: res.data.response },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_PROFILE_ERR,
      });
    });
};

//Get Investment Details of a user by user_id
export const getInvestmentDetailByUserId = (id) => (dispatch) => {
  axios
    .get(userManagement.GET_TOKEN_DETAIL_BY_ID + `${id}`)
    .then((res) => {
      dispatch({
        type: GET_INVESTMENT_DETAIL_SUCCESS,
        payload: { investmentDetail: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_INVESTMENT_DETAIL_ERR,
      });
    });
};

// block/unBlock
export const userBlockUnBlock =
  ({ id, value }) =>
  (dispatch) => {
    let obj = {
      status: value ? false : true,
    };

    axios
      .put(userManagement.USER_BLOCK_UNBLOCK + `${id}`, obj)
      .then((res) => {
        dispatch({
          type: BLOCK_UNBLOCK_SUCCESS,
          payload: {
            response: res.data.message,
            userId: id,
            status: obj.status,
          },
        });
        const successMessage = (res && res.data.message) || res.message;
        alertToast(false, successMessage);
      })
      .catch((error) => {
        dispatch({
          type: BLOCK_UNBLOCK_ERR,
        });
        const errorMessage = error.response?.data?.msg || error.message;
        alertToast(true, errorMessage);
      });
  };

// Get user by count

export const getUserCount = (text) => {
  return async (dispatch) => {
    const data = await axios.get(userManagement.USER_COUNT + `${text}`);
    dispatch({
      type: GET_USER_COUNT,
      payload: data.data,
    });
  };
};

export const getUserTotalCount = () => {
  return async (dispatch) => {
    const data = await axios.get(userManagement.GET_USER_TOTAL_COUNT);
    dispatch({
      type: TOTAL_USER_COUNT,
      payload: data.data,
    });
  };
};
