import axios from "axios";
import {
  UNASSIGNED_ADMINS_SUCCESS,
  UNASSIGNED_ADMINS_ERR,
  GET_ALL_ADMINS_SUCCESS,
  GET_ALL_ADMINS_ERR,
  CREATE_ITO_SUCCESS,
  CREATE_ITO_ERR,
  CREATE_SERIES_SUCCESS,
  CREATE_SERIES_ERR,
  ONGOING_SERIES_SUCCESS,
  ONGOING_SERIES_ERR,
  UPCOMING_SERIES_SUCCESS,
  UPCOMING_SERIES_ERR,
  PAST_SERIES_SUCCESS,
  PAST_SERIES_ERR,
  GET_SERIES_SUCCESS,
  GET_SERIES_ERR,
  GET_ASSIGNED_ITOS_SUCCESS,
  GET_ASSIGNED_ITOS_ERR,
  GET_ASSET_BY_STATUS_SUCCESS,
  GET_ASSET_BY_STATUS_ERR,
  GET_ITO_BY_ID_SUCCESS,
  GET_ITO_BY_ID_ERR,
  ITO_UPDATE_STATUS_SUCCESS,
  ITO_UPDATE_STATUS_ERR,
  ITO_CLOSE_REQUEST_SUCCESS,
  ITO_CLOSE_REQUEST_ERR,
  VERIFY_CLOSE_REQUEST_SUCCESS,
  VERIFY_CLOSE_REQUEST_ERR,
  VERIFY_ITO_CREATE_SUCCESS,
  VERIFY_ITO_CREATE_ERR,
  VERIFY_SERIES_CREATE_SUCCESS,
  VERIFY_SERIES_CREATE_ERR,
  UPDATE_SERIES_REQUEST_SUCCESS,
  UPDATE_SERIES_REQUEST_ERR,
  VERIFY_SERIES_UPDATION_SUCCESS,
  VERIFY_SERIES_UPDATION_ERR,
  MAKE_TOKEN_TRADEABLE_SUCCESS,
  MAKE_TOKEN_TRADEABLE_ERR,
  UPDATE_TOKEN_REQUEST_SUCCESS,
  UPDATE_TOKEN_REQUEST_ERR,
  VERIFY_TOKEN_UPDATION_SUCCESS,
  VERIFY_TOKEN_UPDATION_ERR,
  UPDATE_BACK_ASSET_REQUEST_SUCCESS,
  UPDATE_BACK_ASSET_REQUEST_ERR,
  VERIFY_BACK_ASSET_UPDATION_SUCCESS,
  VERIFY_BACK_ASSET_UPDATION_ERR,
  SAVE_AS_DRAFT,
  SAVE_AS_DRAFT_ITO,
  GET_ITO_DRAFTS,
  GET_UPDATED_DRAFT_ITO,
  UPDATE_DRAFT,
  SAVE_AS_DRAFT_SERIES,
  GET_SERIES_DRAFTS,
  GET_SERIESDRAFTS_BY_ID,
  UPDATE_SERIES_DRAFT,
  GET_SUBSCRIPTION_DRAFTS,
} from "../Redux/actions/types";
import Route from "../Constants/browserRoutes";
import { toast } from "react-toastify";
import { ito, assetManagement, subscription } from "../Routes/serverRoutes";
import browserRoute from "../Constants/browserRoutes";

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

//Get Admins List with No ITO Assigned
export const getUnAssignedAdminsToItos = () => (dispatch) => {
  axios
    .get(ito.GET_ADMIN_WITH_NO_ITO)
    .then((res) => {
      dispatch({
        type: UNASSIGNED_ADMINS_SUCCESS,
        payload: { unAssignedAdmins: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: UNASSIGNED_ADMINS_ERR,
      });
    });
};

//Get Admins to assign ITOs
export const getAllAdminToAssignItos = () => (dispatch) => {
  axios
    .get(ito.ALL_ADMINS)
    .then((res) => {
      dispatch({
        type: GET_ALL_ADMINS_SUCCESS,
        payload: { allAdmins: res.data?.data || [] },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_ADMINS_ERR,
      });
    });
};

//Create ITO
export const createIto =
  ({ formData, setFormData, defaultValues, setLoading, history }) =>
  (dispatch) => {
    axios
      .post(ito.CREATE_ITO, formData)
      .then(async (res) => {
        await dispatch({
          type: CREATE_ITO_SUCCESS,
          payload: res.data,
        });
        setLoading(false);

        alertToast(false, res.data.msg);
        // setFormData(defaultValues);
        history.push(Route.ITO_MANAGEMENT);
      })
      .catch((err) => {
        dispatch({
          type: CREATE_ITO_ERR,
        });
        setLoading(false);

        alertToast(true, err?.response?.data?.msg);
      });
  };

export const verifyItoCreation = (itoId, formData) => (dispatch) => {
  axios
    .put(ito.VERIFY_ITO_CREATION + `${itoId}`, formData)
    .then((res) => {
      dispatch({
        type: VERIFY_ITO_CREATE_SUCCESS,
        payload: res.data?.data,
      });
      toast.success(res.data?.msg);
    })
    .catch((err) => {
      dispatch({
        type: VERIFY_ITO_CREATE_ERR,
      });
      toast.error(err.response?.data?.msg || "Server error");
    });
};

//Get Assets By Status
export const getAssetsByStatus = (type) => (dispatch) => {
  axios
    .get(`${assetManagement.ASSETS}?type=${type}`)
    .then((res) => {
      dispatch({
        type: GET_ASSET_BY_STATUS_SUCCESS,
        payload: { assetsList: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ASSET_BY_STATUS_ERR,
      });
    });
};

//Create ITO success
export const createItoSeries =
  ({ formData, setFormData, setLoading, history }) =>
  (dispatch) => {
    // const { name, startDate, endDate, description, supply } = formData; //ito_id

    axios
      .post(ito.ITO_SERIES, formData)
      .then(async (res) => {
        await dispatch({
          type: CREATE_SERIES_SUCCESS,
          payload: res.data,
        });
        setLoading(false);
        alertToast(false, res.data.msg);
        setFormData({
          name: "",
          start_Date: "",
          end_Date: "",
          description: "",
          supply: "",
        });
        history.push(browserRoute.ITO_MANAGEMENT);
      })
      .catch((err) => {
        dispatch({
          type: CREATE_SERIES_ERR,
        });
        setLoading(false);

        alertToast(true, err?.response?.data?.msg || "Server Error");
      });
  };

export const verifySeriesCreation = (seriesId, formData) => (dispatch) => {
  axios
    .put(ito.VERIFY_SERIES_CREATION + `${seriesId}`, formData)
    .then((res) => {
      dispatch({
        type: VERIFY_SERIES_CREATE_SUCCESS,
        payload: res.data?.data,
      });
      toast.success(res.data?.msg);
    })
    .catch((err) => {
      dispatch({
        type: VERIFY_SERIES_CREATE_ERR,
      });
      toast.error(err.response?.data?.msg || "Server error");
    });
};

//Create update series supply request
//Generate request for updation of series supply
export const updateSeriesSupplyRequest = (seriesId, formData) => (dispatch) => {
  axios
    .put(ito.UPDATE_SERIES_SUPPLY_REQUEST + seriesId, formData)
    .then(async (res) => {
      await dispatch({
        type: UPDATE_SERIES_REQUEST_SUCCESS,
        payload: { seriesDetail: res.data?.data },
      });
      // setLoading(false);
      alertToast(false, res.data.msg);
      // setShow(false)
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_SERIES_REQUEST_ERR,
      });
      // setLoading(false);

      alertToast(true, err?.response?.data?.msg || "Server Error");
    });
};

export const verifySeriesSupplyUpdation =
  (seriesId, formData) => (dispatch) => {
    axios
      .put(ito.VERIFY_UPDATE_SERIES_SUPPLY + `${seriesId}`, formData)
      .then((res) => {
        dispatch({
          type: VERIFY_SERIES_UPDATION_SUCCESS,
          payload: { seriesDetail: res.data?.data },
        });
        toast.success(res.data?.msg);
      })
      .catch((err) => {
        dispatch({
          type: VERIFY_SERIES_UPDATION_ERR,
        });
        toast.error(err.response?.data?.msg || "Server error");
      });
  };

export const makeTokenTradeable = (tokenId, formData) => (dispatch) => {
  axios
    .put(ito.MAKE_TOKEN_TRADEABLE.replace(":id", tokenId), formData)
    .then((res) => {
      dispatch({
        type: MAKE_TOKEN_TRADEABLE_SUCCESS,
        payload: res.data?.data,
      });
      toast.success(res.data?.msg);
    })
    .catch((err) => {
      dispatch({
        type: MAKE_TOKEN_TRADEABLE_ERR,
      });
      toast.error(err.response?.data?.msg || "Server error");
    });
};

export const generateUpdateTokenRequest =
  ({ id, info }) =>
  (dispatch) => {
    console.log("before hit api", info);
    axios
      .put(ito.UPDATE_TOKEN_REQUEST.replace(":id", id), info)
      .then((res) => {
        dispatch({
          type: UPDATE_TOKEN_REQUEST_SUCCESS,
          payload: { token: res.data?.data },
        });
        toast.success(res.data?.msg);
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_TOKEN_REQUEST_ERR,
        });
        toast.error(err.response?.data?.msg || "Server error");
      });
  };

export const verifyTokenUpdationRequest = (tokenId, formData) => (dispatch) => {
  axios
    .put(ito.VERIFY_UPDATE_TOKEN.replace(":id", tokenId), formData)
    .then((res) => {
      dispatch({
        type: VERIFY_TOKEN_UPDATION_SUCCESS,
        payload: { token: res.data?.data },
      });
      toast.success(res.data?.msg);
    })
    .catch((err) => {
      dispatch({
        type: VERIFY_TOKEN_UPDATION_ERR,
      });
      toast.error(err.response?.data?.msg || "Server error");
    });
};

export const generateUpdateBackAssetRequest =
  (backAssetId, formData) => (dispatch) => {
    axios
      .put(ito.UPDATE_BACK_ASSET_REQUEST.replace(":id", backAssetId), formData)
      .then((res) => {
        dispatch({
          type: UPDATE_BACK_ASSET_REQUEST_SUCCESS,
          payload: res.data?.data,
        });
        toast.success(res.data?.msg);
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_BACK_ASSET_REQUEST_ERR,
        });
        toast.error(err.response?.data?.msg || "Server error");
      });
  };

export const verifyBackAssetUpdationRequest =
  (backAssetId, formData) => (dispatch) => {
    axios
      .put(ito.VERIFY_UPDATE_BACK_ASSET.replace(":id", backAssetId), formData)
      .then((res) => {
        dispatch({
          type: VERIFY_BACK_ASSET_UPDATION_SUCCESS,
          payload: { backedAssets: res.data?.data },
        });
        toast.success(res.data?.msg);
      })
      .catch((err) => {
        dispatch({
          type: VERIFY_BACK_ASSET_UPDATION_ERR,
        });
        toast.error(err.response?.data?.msg || "Server error");
      });
  };

//Get Assigned ITOs
export const getAssignedItos = () => (dispatch) => {
  axios
    .get(ito.ASSIGNED_ITOS)
    .then((res) => {
      dispatch({
        type: GET_ASSIGNED_ITOS_SUCCESS,
        payload: { assignedItosData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ASSIGNED_ITOS_ERR,
      });
    });
};

//Get Ongoing ITO Series
export const getOngoingItoSeries = (itoId) => (dispatch) => {
  const status = "ongoing";
  axios
    .get(ito.ITO_SERIES_BY_STATUS + `?status=${status}&ito=${itoId}`)
    .then((res) => {
      dispatch({
        type: ONGOING_SERIES_SUCCESS,
        payload: { ongoingData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: ONGOING_SERIES_ERR,
      });
    });
};

//Get Upcoming ITO Series
export const getUpcomingItoSeries = (itoId) => (dispatch) => {
  const status = "upcoming";
  axios
    .get(ito.ITO_SERIES_BY_STATUS + `?status=${status}&ito=${itoId}`)
    .then((res) => {
      dispatch({
        type: UPCOMING_SERIES_SUCCESS,
        payload: { upcomingData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: UPCOMING_SERIES_ERR,
      });
    });
};

//Get Past ITO Series
export const getPastItoSeries = (itoId) => (dispatch) => {
  const status = "closed";
  axios
    .get(ito.ITO_SERIES_BY_STATUS + `?status=${status}&ito=${itoId}`)
    .then((res) => {
      dispatch({
        type: PAST_SERIES_SUCCESS,
        payload: { pastData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: PAST_SERIES_ERR,
      });
    });
};

export const getAssignedItoById =
  ({ itoId }) =>
  (dispatch) => {
    axios
      .get(ito.GET_ASSEIGNED_ITO_BY_ID + `${itoId}`)
      .then((res) => {
        dispatch({
          type: GET_ITO_BY_ID_SUCCESS,
          payload: res.data?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ITO_BY_ID_ERR,
        });
      });
  };

export const updateOnholdStatusIto =
  (itoId, onhold, setUpdate) => (dispatch) => {
    axios
      .put(ito.UPDATE_ITO + `${itoId}`, { onhold })
      .then((res) => {
        dispatch({
          type: ITO_UPDATE_STATUS_SUCCESS,
          payload: res.data?.data,
        });
        setUpdate(true);
        toast.success(`Ito ${onhold ? "Blocked" : "Unblocked"} Successfully.`);
      })
      .catch((err) => {
        dispatch({
          type: ITO_UPDATE_STATUS_ERR,
        });
        toast.error(err?.response?.data?.msg || "Server error");
      });
  };

export const makeItoCloseRequest = (itoId, formData) => (dispatch) => {
  axios
    .put(ito.CLOSE_REQUEST_ITO + `${itoId}`, formData)
    .then((res) => {
      dispatch({
        type: ITO_CLOSE_REQUEST_SUCCESS,
        payload: res.data?.data,
      });
      toast.success(res.data?.msg);
    })
    .catch((err) => {
      dispatch({
        type: ITO_CLOSE_REQUEST_ERR,
      });
      toast.error(err.response.data.msg || "Server error");
    });
};

export const verifyItoClosedRequest = (itoId, formData) => (dispatch) => {
  axios
    .put(ito.VERIFY_CLOSE_REQUEST_ITO + `${itoId}`, formData)
    .then((res) => {
      dispatch({
        type: VERIFY_CLOSE_REQUEST_SUCCESS,
        payload: res.data?.data,
      });
      toast.success(res.data?.msg);
    })
    .catch((err) => {
      dispatch({
        type: VERIFY_CLOSE_REQUEST_ERR,
      });
      toast.error(err.response?.data?.msg || "Server error");
    });
};

//Get Ito Series by id
export const getItoSeriesById =
  ({ seriesId }) =>
  (dispatch) => {
    axios
      .get(ito.GET_SERIES_BY_ID + `${seriesId}`)
      .then((res) => {
        dispatch({
          type: GET_SERIES_SUCCESS,
          payload: { seriesDetail: res.data?.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SERIES_ERR,
        });
      });
  };

//ITO save as draft
export const saveIto = (formData) => {
  console.log("data", formData);
  return async (dispatch) => {
    try {
      const itoDraft = await axios.post(ito.SAVE_AS_DRAFT_ITO, formData);
      dispatch({
        type: SAVE_AS_DRAFT_ITO,
        payload: itoDraft.data.data,
      });
      toast.success(itoDraft.data?.msg);
    } catch (err) {}
  };
};

//GET_DRAFTED_ITO
export const getDraftIto = () => {
  return async (dispatch) => {
    try {
      const draftItos = await axios.get(ito.GET_DRAFTS_ITO);
      dispatch({
        type: GET_ITO_DRAFTS,
        payload: draftItos.data.data,
      });
    } catch (err) {
      toast.error(err.response?.data?.msg);
    }
  };
};

export const getUpdateDraftsItos = (id) => {
  return async (dispatch) => {
    try {
      const updatedDraftItos = await axios.get(
        ito.GET_UPDATED_DRAFTS_ITOS.replace(":id", id)
      );
      dispatch({
        type: GET_UPDATED_DRAFT_ITO,
        payload: updatedDraftItos?.data?.data,
      });
      // setDraftUpdatedData(updatedDraftItos?.data?.data)
    } catch (err) {
      // toast.error(err.response?.data?.msg);
    }
  };
};

export const updateDraft = (data, id) => {
  return async (dispatch) => {
    try {
      const updatesData = await axios.put(
        ito.UPDATE_ITO_DRAFTS.replace(":id", id),
        data
      );
      dispatch({
        type: UPDATE_DRAFT,
        payload: updatesData.data.data,
      });
      toast.success(updatesData.data?.msg);
    } catch (err) {}
  };
};

export const saveAsDraftSeries = (data) => {
  return async (dispatch) => {
    const seriesDrafts = await axios.post(ito.SAVE_AS_DRAFT_SERIES, data);
    try {
      dispatch({
        type: SAVE_AS_DRAFT_SERIES,
        payload: seriesDrafts.dataf,
      });
      toast.success(seriesDrafts.data?.msg);
    } catch (err) {}
  };
};

export const getSeriesDraft = () => {
  return async (dispatch) => {
    try {
      const seriesDraft = await axios.get(ito.GET_SERIES_DRAFTS);

      dispatch({
        type: GET_SERIES_DRAFTS,
        payload: seriesDraft.data.data,
      });
    } catch (err) {
      alertToast(true, err.data.msg);
    }
  };
};

export const getSeriesDraftById = (id) => {
  // console.log("id at hitting" , id)
  return async (dispatch) => {
    try {
      const seriesDraftsById = await axios.get(ito.GET_SERIES_BY_ID + `${id}`);
      dispatch({
        type: GET_SERIESDRAFTS_BY_ID,
        payload: seriesDraftsById.data.data,
      });
    } catch (err) {
      alertToast(true, err.data.msg);
    }
  };
};

export const updateSeriesDraft = (formData, id, setLoading) => {
  return async (dispatch) => {
    try {
      const updateSeriesDraft = await axios.put(
        ito.UPDATE_SERIES_DRAFT.replace(":id", id),
        formData
      );
      dispatch({
        type: UPDATE_SERIES_DRAFT,
        payload: updateSeriesDraft.data,
      });
      setLoading(false);
      alertToast(false,updateSeriesDraft.data.msg);
    } catch (err) {
      console.log("err", err.response);
      alertToast(true, err.response.data.msg);
      // toast.error(err.response.data.msg)
    }
  };
};

