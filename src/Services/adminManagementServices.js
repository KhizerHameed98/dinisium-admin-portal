import axios from "axios";

import {
  GET_SUB_ADMIN_LIST_SUCCESS,
  GET_SUB_ADMIN_LIST_ERR,
  GET_SINGLE_SUB_ADMIN_SUCCESS,
  GET_SINGLE_SUB_ADMIN_ERR,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_BY_ID_ERR,
  GET_ADMIN_ITO_ERR,
  GET_ADMIN_ITO_SUCCESS,
  ADD_NEW_ADMIN_ERR,
  ADD_NEW_ADMIN_SUCCESS,
  ADMIN_LINK_ITO_SUCCESS,
  ADMIN_LINK_ITO_ERR,
  DELETE_ADMIN_ERR,
  DELETE_ADMIN_SUCCESS,
  GET_ALL_PERMISSIONS_SUCCESS,
  GET_ALL_PERMISSIONS_ERR,
  ASSIGN_PERMISSIONS_SUCCESS,
  ASSIGN_PERMISSIONS_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { admin, ito, userManagement } from "../Routes/serverRoutes";

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

//Get All Sub Admins List by ITO Id of admin
export const getSubAdminsByItoId = (itoId) => (dispatch) => {
  const role = "sub-admin";
  axios
    .get(userManagement.GET_ALL_USERS + `?ito_id=${itoId}&role=${role}`)
    .then((res) => {
      dispatch({
        type: GET_SUB_ADMIN_LIST_SUCCESS,
        payload: res.data.response,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SUB_ADMIN_LIST_ERR,
      });
    });
};

//Get Sub Admin by Id
export const getSubAdminById = (id) => (dispatch) => {
  const role = "sub-admin";
  // userManagement.GET_ALL_USERS + `?id=${id}&role=${role}`
  axios
    .get(admin.GET_SUBADMIN_BY_ID + `${id}`)
    .then((res) => {
      dispatch({
        type: GET_SINGLE_SUB_ADMIN_SUCCESS,
        payload: { subAdminDetail: res.data.data },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SINGLE_SUB_ADMIN_ERR,
      });
    });
};

//Get admin by Id
export const getAdminsById = (id) => (dispatch) => {
  axios
    .get(admin.GET_ADMIN_BY_ID + `/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ADMIN_BY_ID_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ADMIN_BY_ID_ERR,
      });
    });
};

//Get getAdmin ITO
export const getAvailableITO = () => (dispatch) => {
  axios
    .get(ito.GET_AVAILABLE_ITO)
    .then((res) => {
      dispatch({
        type: GET_ADMIN_ITO_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ADMIN_ITO_ERR,
      });
    });
};

//Add new sub-admin
export const addNewAdmin =
  ({ formData, setFormData, setLoading }) =>
  (dispatch) => {
    axios
      .post(admin.ADD_NEW_ADMIN, formData)
      .then((res) => {
        dispatch({
          type: ADD_NEW_ADMIN_SUCCESS,
          payload: res.data.data,
        });
        let successMessage = (res && res.data.msg) || res.message;
        alertToast(false, successMessage);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          contact_no: "",
          country: "",
          address: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        let errorMessage =
          (error &&
            error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message;
        alertToast(true, errorMessage);
        dispatch({
          type: ADD_NEW_ADMIN_ERR,
        });
        setLoading(false);
      });
  };

//Add admin link ito
export const adminLinkITO =
  ({ id, obj, setSuccess }) =>
  (dispatch) => {
    axios
      .put(admin.ADMIN_LINK_ITO + `/${id}/addITO`, obj)
      .then((res) => {
        dispatch({
          type: ADMIN_LINK_ITO_SUCCESS,
          payload: res.data.data,
        });
        let successMessage = (res && res.data.msg) || res.message;
        alertToast(false, successMessage);
        setSuccess(true);
      })
      .catch((error) => {
        let errorMessage =
          (error &&
            error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message;
        alertToast(true, errorMessage);
        dispatch({
          type: ADMIN_LINK_ITO_ERR,
        });
      });
  };

//delete admin
export const deleteAdmin = (id) => (dispatch) => {
  axios
    .delete(admin.DELETE_ADMIN + `/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ADMIN_SUCCESS,
        payload: id,
      });
      let successMessage = (res && res.data.msg) || res.message;
      alertToast(false, successMessage);
    })
    .catch((error) => {
      let errorMessage =
        (error &&
          error.response &&
          error.response.data &&
          error.response.data.msg) ||
        error.message;
      alertToast(true, errorMessage);
      dispatch({
        type: DELETE_ADMIN_ERR,
      });
    });
};

//Get All Permissions for Sub Admin
export const getAllPermissions = () => (dispatch) => {
  axios
    .get(admin.GET_ALL_PERMISSIONS)
    .then((res) => {
      const data = res.data.data.reduce((acc, current) => {
        acc.push({
          ...current,
          label: current.name,
          value: current.name,
        });
        return acc;
      }, []);
      dispatch({
        type: GET_ALL_PERMISSIONS_SUCCESS,
        payload: { permissionsData: data },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_PERMISSIONS_ERR,
      });
    });
};

//Assign Permission to Sub Admin
export const assignPermission =
  ({ selectedData, subAdminId }) =>
  (dispatch) => {
    const permissions = selectedData.map((item) => item.id);
    const body = {
      permissions,
      sub_admin: subAdminId,
    };
    axios
      .post(admin.ASSIGN_PERMISSIONS, body)
      .then((res) => {
        dispatch({
          type: ASSIGN_PERMISSIONS_SUCCESS,
          payload: { assignData: res.data.data },
        });
        let successMessage = (res && res.data.msg) || res.message;
        alertToast(false, successMessage);
        dispatch(getSubAdminById(subAdminId));
      })
      .catch((error) => {
        let errorMessage =
          (error &&
            error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message;
        dispatch({
          type: ASSIGN_PERMISSIONS_ERR,
        });
        alertToast(true, errorMessage);
      });
  };
