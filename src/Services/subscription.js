import axios from "axios";
import {
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_ERR,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_ERR,
  GET_SUBSCRIPTION_DETAIL_SUCCESS,
  GET_SUBSCRIPTION_DETAIL_ERR,
  VERIFY_SUBSCRIPTION_CREATE_SUCCESS,
  VERIFY_SUBSCRIPTION_CREATE_ERR,
  SAVE_AS_DRAFT,
  GET_SUBSCRIPTION_DETAIL,
  GET_SUBSCRIPTION_DRAFTS,
  GET_SUBSCRIPTION_DRAFTS_BY_ID,
  UPDATE_SUBSCRIPTION_DRAFTS,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { subscription } from "../Routes/serverRoutes";
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

//Create ITO Subscription
export const createSubscription =
  ({ data, setFormData, setLoading, history }) =>
  (dispatch) => {
    axios
      .post(subscription.CREATE_SUBSCRIPTION, data)
      .then(async (res) => {
        await dispatch({
          type: CREATE_SUBSCRIPTION_SUCCESS,
          payload: res.data?.data,
        });
        alertToast(false, res.data?.msg || "Subscription created successfully");
        setFormData({
          itoName: "",
          itoSeries: "",
          tokenName: "",
          description: "",
          threshold: "",
          tokenPrice: "",
          startDate: "",
          endDate: "",
        });
        history.push(browserRoute.SUBSCRIPTION_DETAIL_BTN + res.data.data?.id);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: CREATE_SUBSCRIPTION_ERR,
        });
        alertToast(true, err.response?.data?.msg || "Server error");
        setLoading(false);
      });
  };

export const verifySubscriptionCreation = (id, formData) => (dispatch) => {
  axios
    .put(subscription.VERIFY_SUBSCRIPTION_CREATION + `${id}`, formData)
    .then((res) => {
      dispatch({
        type: VERIFY_SUBSCRIPTION_CREATE_SUCCESS,
        payload: formData,
      });
      toast.success(res.data?.msg);
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: VERIFY_SUBSCRIPTION_CREATE_ERR,
      });
      toast.error(err.response?.data?.msg || "Server error");
    });
};

//Get All subscriptions
export const getSubscriptions = () => (dispatch) => {
  axios
    .get(subscription.GET_SUBSCRIPTIONS_BY_ADMIN_ID)
    .then((res) => {
      dispatch({
        type: GET_SUBSCRIPTIONS_SUCCESS,
        payload: { subscriptions: res.data?.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SUBSCRIPTIONS_ERR,
      });
    });
};

//Get subscription by Id
export const getSubscriptionById = (id, setIsSubscription) => (dispatch) => {
  axios
    .get(subscription.GET_SUBSCRIPTION_BY_ID + id)
    .then((res) => {
      dispatch({
        type: GET_SUBSCRIPTION_DETAIL_SUCCESS,
        payload: res.data?.data,
      });
      setIsSubscription?.(true);
    })
    .catch((err) => {
      dispatch({
        type: GET_SUBSCRIPTION_DETAIL_ERR,
      });
    });
};

export const saveAsDraft = (draft) => {
  console.log("dra", draft);
  console.log("draft", draft);
  return async (dispatch) => {
    try {
      const saveasDraftt = await axios.post(subscription.SAVE_AS_DRFAT, draft);
      dispatch({
        type: SAVE_AS_DRAFT,
      });
      alertToast(
        false,
        saveasDraftt?.response?.data?.msg || "Subscription saved in Draft"
      );
    } catch (err) {
      toast.error(err.response?.data?.msg || "Server error");
    }
  };
};

export const getSubscriptionDetaill = () => {
  return async (dispatch) => {
    try {
      const subscriptionDetail = await axios.get(subscription.GET_SUBSCRIPTION);
      dispatch({
        type: GET_SUBSCRIPTION_DETAIL,
        payload: subscriptionDetail.data,
      });
    } catch (err) {
      toast.error(err.response?.data?.msg || "Server error");
    }
  };
};

export const subscriptionDrafts = () => {
  return async (dispatch) => {
    try {
      const subscriptionDrafts = await axios.get(
        subscription.GET_SUBSCRIPTION_DRAFTS
      );
      dispatch({
        type: GET_SUBSCRIPTION_DRAFTS,
        payload: subscriptionDrafts.data,
      });
    } catch (err) {}
  };
};

export const updateSubscriptionDraftsById = (id) => {
  return async (dispatch) => {
    try {
      const updatedSubscriptionDrafts = await axios.get(
        subscription.GET_SUBSCRIPTION_DRAFTS_BY_ID.replace(":id", id)
      );
      dispatch({
        type: GET_SUBSCRIPTION_DRAFTS_BY_ID,
        payload: updatedSubscriptionDrafts.data,
      });
    } catch (err) {}
  };
};

export const updateSubscriptionsDraft = (id, data) => {
  return async (dispatch) => {
    try {
      const subscriptionDrafts = await axios.put(
        subscription.UPDATE_SUBSCRIPTION.replace(":id", id),
        data
      );
      dispatch({
        type: UPDATE_SUBSCRIPTION_DRAFTS,
        payload: subscriptionDrafts.data,
      });
    } catch (err) {
      alertToast(true, err.response.data.msg);
    }
  };
};
