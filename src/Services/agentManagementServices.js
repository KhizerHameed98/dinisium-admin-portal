import axios from "axios";
import {
  REGISTER_AGENT_SUCCESS,
  REGISTER_AGENT_ERR,
  GET_AGENTS_SUCCESS,
  GET_AGENTS_ERR,
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_ERR,
  GET_INVESTOR_SUCCESS,
  GET_INVESTOR_ERR,
  GET_AGENT_INVESTOR_SUCCESS,
  GET_AGENT_INVESTOR_ERR,
  GET_SINGLE_AGENT_SUCCESS,
  GET_SINGLE_AGENT_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { agentManagement } from "../Routes/serverRoutes";

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
export const registerAgent =
  ({ formData, setFormData, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(formData);

    axios
      .post(agentManagement.REGISTER_AGENT, body, config)
      .then(async (res) => {
        await dispatch({
          type: REGISTER_AGENT_SUCCESS,
          payload: res.data,
        });
        alertToast(false, res.data.msg);
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
      .catch((err) => {
        dispatch({
          type: REGISTER_AGENT_ERR,
        });
        setLoading(false);

        alertToast(true, err.response.data.msg);
        // setFormData({
        //   fname: "",
        //   lname: "",
        //   email: "",
        //   contact_no: "",
        //   country: "",
        //   address: "",
        // });
      });
  };

//Get All Agents
export const getAllAgents = () => (dispatch) => {
  axios
    .get(agentManagement.ALL_AGENTS)
    .then((res) => {
      dispatch({
        type: GET_AGENTS_SUCCESS,
        payload: { agentsList: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_AGENTS_ERR,
      });
    });
};

// //Get Ito Series by id
// export const getItoSeriesById = ({ itoId }) => (dispatch) => {
//   axios
//     .get(ito.GET_ITO_BY_ID + `${itoId}`)
//     .then((res) => {
//       dispatch({
//         type: GET_SERIES_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_SERIES_ERR,
//       });
//     });
// };

// creat Agent
export const creatAgent =
  ({ formData, setItoSeriesId, setFormData, setLoading }) =>
  (dispatch) => {
    axios
      .post(agentManagement.CREATE_AGENT, formData)
      .then((res) => {
        dispatch({
          type: CREATE_AGENT_SUCCESS,
          payload: { createAgent: res.data.data },
        });
        let successMessage = (res && res.data.msg) || res.message;
        alertToast(false, successMessage);

        setFormData({ investment: "" });
        setItoSeriesId("");
        setLoading(false);
      })
      .catch((error) => {
        dispatch({
          type: CREATE_AGENT_ERR,
        });
        setLoading(false);

        let errorMessage =
          (error &&
            error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message;
        alertToast(true, errorMessage);
      });
  };

//Get All Investor
export const getAllInvestor = () => (dispatch) => {
  axios
    .get(agentManagement.GET_ALL_INVESTOR)
    .then((res) => {
      dispatch({
        type: GET_INVESTOR_SUCCESS,
        payload: { investorList: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_INVESTOR_ERR,
      });
    });
};

//Get agent investor
export const getAgentInvestor =
  ({ id }) =>
  (dispatch) => {
    axios
      .get(agentManagement.GET_AGENT_INVESTOR + `?agent=${id}`)
      .then((res) => {
        dispatch({
          type: GET_AGENT_INVESTOR_SUCCESS,
          payload: { agentInvestorList: res.data.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_AGENT_INVESTOR_ERR,
        });
      });
  };

//Get agent investor
export const getSingleAgent =
  ({ id }) =>
  (dispatch) => {
    axios
      .get(agentManagement.GET_SINGLE_AGENT + `/${id}`)
      .then((res) => {
        dispatch({
          type: GET_SINGLE_AGENT_SUCCESS,
          payload: { agentDetail: res.data.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SINGLE_AGENT_ERR,
        });
      });
  };
