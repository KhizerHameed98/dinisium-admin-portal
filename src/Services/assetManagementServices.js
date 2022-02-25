import axios from "axios";
import {
  ADD_NEW_ASSET_SUCCESS,
  ADD_NEW_ASSET_ERR,
  GET_ASSET_SUCCESS,
  GET_ASSET_ERR,
  GET_ASSET_DETAIL_SUCCESS,
  GET_ASSET_DETAIL_ERR,
  UPDATE_ASSET_SUCCESS,
  UPDATE_ASSET_ERR,
  VERIFY_UPDATE_SUCCESS,
  VERIFY_UPDATE_ERR,
  PENDING_LIST,
  APPROVED_LIST,
  REJECTED_LIST,
} from "../Redux/actions/types";
// import browserRoutes from "../Constants/browserRoutes";
import { toast } from "react-toastify";
import { assetManagement } from "../Routes/serverRoutes";
import { DockSharp } from "@material-ui/icons";

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

//Create ITO success
export const addNewAsset =
  ({ formData, setFormData, defaultValues, setLoading }) =>
  (dispatch) => {
    axios
      .post(assetManagement.ASSETS, formData)
      .then(async (res) => {
        await dispatch({
          type: ADD_NEW_ASSET_SUCCESS,
          payload: res.data,
        });
        alertToast(false, res.data.msg);
        setFormData(defaultValues);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: ADD_NEW_ASSET_ERR,
        });
        setLoading(false);

        alertToast(true, err?.response?.data?.msg);
        setFormData(defaultValues);
      });
  };

//Get All Assets
export const getAllAssets = () => (dispatch) => {
  axios
    .get(assetManagement.ASSETS)
    .then((res) => {
      dispatch({
        type: GET_ASSET_SUCCESS,
        payload: { assetsList: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ASSET_ERR,
      });
    });
};

//Get Asset Details

// export const getAssetDetail =
//   ({ id }) =>
//   (dispatch) => {
//     axios
//       .get(`${assetManagement.ASSET_DETAIL}?id=${id}`)
//       .then((res) => {
//         dispatch({
//           type: GET_ASSET_DETAIL_SUCCESS,
//           payload: { assetDetail: res.data?.data },
//         });
//         // console.log("assetDetail" + res.data.data);
//       })
//       .catch((err) => {
//         dispatch({
//           type: GET_ASSET_DETAIL_ERR,
//         });
//       });
//   };

export const getAssetDetail = (id) => {
  return async (dispatch) => {
    try {
      const assetDetail = await axios.get(
        `${assetManagement.ASSET_DETAIL}?id=${id}`
      );
      dispatch({
        type: GET_ASSET_DETAIL_SUCCESS,
        payload: assetDetail.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ASSET_DETAIL_ERR,
      });
    }
  };
};

//Update Asset request
export const updateAsset =
  ({
    formData,
    id,
    setFormData,
    defaultValues,
    setLoading,
    handleClose,
    setDisable,
  }) =>
  (dispatch) => {
    axios
      .put(`${assetManagement.ASSETS}/${id}`, formData)
      .then(async (res) => {
        await dispatch({
          type: UPDATE_ASSET_SUCCESS,
          payload: res.data.data,
        });
        alertToast(false, res.data?.msg);
        handleClose();
        setFormData(defaultValues);
        setLoading(false);
        setDisable(true);
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_ASSET_ERR,
        });
        alertToast(true, err?.response?.data?.msg);
        setFormData(defaultValues);
        setLoading(false);
        handleClose();
      });
  };

//Verify update request
export const verifyUpdateRequest =
  (formData, id, setLoading, handleClose, refresh, setRefresh) =>
  (dispatch) => {
    axios
      // .put(`${assetManagement.VERIFY_UPDATE_REQUEST}/${id}`,formData)
      .put(`${assetManagement.VERIFY_UPDATE_REQUEST}/${id}`, formData)
      .then(async (res) => {
        await dispatch({
          type: VERIFY_UPDATE_SUCCESS,
          payload: res.data.data,
        });
        alertToast(false, res.data?.msg);
        setLoading(false);
        handleClose();
        setRefresh(true);
      })
      .catch((err) => {
        dispatch({
          type: VERIFY_UPDATE_ERR,
        });
        alertToast(true, err?.response?.data?.msg);
        setLoading(false);
        handleClose();
      });
  };

export const getPendingList = () => {
  return async (dispatch) => {
    try {
      const pending = await axios.get(assetManagement.GET_PENDING_LIST);
      dispatch({
        type: PENDING_LIST,
        payload: pending.data,
      });
    } catch (err) {
      alertToast("No");
    }
  };
};

export const getApprovedList = () => {
  return async (dispatch) => {
    try {
      const approved = await axios.get(assetManagement.GET_APPROVED_LIST);
      dispatch({
        type: APPROVED_LIST,
        payload: approved.data,
      });
    } catch (err) {
      // alertToast("No")
    }
  };
};

export const getRejectedList = () => {
  return async (dispatch) => {
    try {
      const rejected = await axios.get(assetManagement.GET_REJECTED_LIST);
      dispatch({
        type: REJECTED_LIST,
        payload: rejected.data,
      });
    } catch (err) {
      // alertToast("NO" )
    }
  };
};
