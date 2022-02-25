import axios from "axios";
import {
  PENDING_KYC_SUCCESS,
  PENDING_KYC_ERR,
  APPROVED_KYC_SUCCESS,
  APPROVED_KYC_ERR,
  REJECTED_KYC_SUCCESS,
  REJECTED_KYC_ERR,
  GET_KYC_SUCCESS,
  GET_KYC_ERR,
  KYC_UPDATE_SUCCESS,
  KYC_UPDATE_ERR,
  SINGLE_APPROVED_KYC_SUCCESS,
  SINGLE_APPROVED_KYC_ERR,
  GETKYC,
  KYC_DATA,
} from "../Redux/actions/types";
// import Route from "../Constants/browserRoutes";
import { toast } from "react-toastify";
import { kyc } from "../Routes/serverRoutes";

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

//Get KYC Single Approved Requests
export const getSingleApprovedKyc = () => (dispatch) => {
  const status = "single_approved";
  axios
    .get(kyc.GET_KYC_BY_STATUS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: SINGLE_APPROVED_KYC_SUCCESS,
        payload: { singleApprovedData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: SINGLE_APPROVED_KYC_ERR,
      });
    });
};

//Get KYC Pending Requests
export const getPendingKyc = () => (dispatch) => {
  const status = "pending";
  axios
    .get(kyc.GET_KYC_BY_STATUS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: PENDING_KYC_SUCCESS,
        payload: { pendingData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: PENDING_KYC_ERR,
      });
    });
};

//Get KYC Approved Requests
export const getApprovedKyc = () => (dispatch) => {
  const status = "approved";
  axios
    .get(kyc.GET_KYC_BY_STATUS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: APPROVED_KYC_SUCCESS,
        payload: { approvedData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: APPROVED_KYC_ERR,
      });
    });
};

//Get KYC Rejected Requests
export const getRejectedKyc = () => (dispatch) => {
  const status = "rejected";
  axios
    .get(kyc.GET_KYC_BY_STATUS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: REJECTED_KYC_SUCCESS,
        payload: { rejectedData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: REJECTED_KYC_ERR,
      });
    });
};

//Get KYC by id
export const getKycById =
  ({ kycId }) =>
  (dispatch) => {
    axios
      .get(kyc.GET_KYC_BY_ID + `${kycId}`)
      .then((res) => {
        dispatch({
          type: GET_KYC_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_KYC_ERR,
        });
      });
  };

export const getKycbyId = (id) => {
  return async (dispatch) => {
    const data = await axios.get(kyc.GET_KYC_BY_ID + `${id}`);
    dispatch({
      type: KYC_DATA,
      payload: data.data,
    });
  };
};

//update status as pending or rejected
export const updateKycStatus =
  ({
    userId,
    adminId,
    status,
    isSuperAdmin,
    setShow,
    setStatus,
    rejectionMessage,
  }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      userId,
      status,
      is_superadmin: isSuperAdmin,
      rejectionMessage,
    });
    axios
      .put(kyc.UPDATE_KYC_STATUS, body, config)
      .then(async (res) => {
        await dispatch({
          type: KYC_UPDATE_SUCCESS,
          payload: {
            status: status,
            adminId: adminId,
            rejection_message: rejectionMessage,
          },
        });
        setShow(true);
        setStatus(status);
        alertToast(false, res.data.msg && res.data.msg);
      })
      .catch((err) => {
        dispatch({
          type: KYC_UPDATE_ERR,
        });
        setShow(false);
        setStatus("");
        alertToast(
          true,
          err && err.response && err.response.data && err.response.data.msg
        );
      });
  };
