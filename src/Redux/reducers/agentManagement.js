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
} from "../actions/types";

const initialState = {
  loading: true,
  buyRequestList: [],
  sellRequestList: [],
  agentsList: [],
  investorList: [],
  agentInvestorList: [],
  createAgent: {},
  agentDetail: {},
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_AGENT_SUCCESS:
    case REGISTER_AGENT_SUCCESS:
    case GET_AGENT_INVESTOR_SUCCESS:
    case CREATE_AGENT_SUCCESS:
    case GET_INVESTOR_SUCCESS:
    case GET_AGENTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case GET_INVESTOR_ERR:
    case GET_SINGLE_AGENT_ERR:
    case CREATE_AGENT_ERR:
    case REGISTER_AGENT_ERR:
    case GET_AGENTS_ERR:
    case GET_AGENT_INVESTOR_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
