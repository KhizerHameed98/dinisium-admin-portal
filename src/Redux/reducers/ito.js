import {
  GET_ALL_ADMINS_SUCCESS,
  GET_ALL_ADMINS_ERR,
  CREATE_SERIES_ERR,
  CREATE_SERIES_SUCCESS,
  GET_SERIES_ERR,
  GET_SERIES_SUCCESS,
  ONGOING_SERIES_ERR,
  ONGOING_SERIES_SUCCESS,
  PAST_SERIES_ERR,
  PAST_SERIES_SUCCESS,
  UPCOMING_SERIES_ERR,
  UPCOMING_SERIES_SUCCESS,
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
  VERIFY_BACK_ASSET_UPDATION_SUCCESS,
  VERIFY_BACK_ASSET_UPDATION_ERR,
  SAVE_AS_DRAFT_ITO,
  GET_ITO_DRAFTS,
  GET_UPDATED_DRAFT_ITO,
  UPDATE_DRAFT,
  SAVE_AS_DRAFT_SERIES,
  GET_SERIES_DRAFTS,
  GET_SERIESDRAFTS_BY_ID,
  UPDATE_SERIES_DRAFT,
} from "../actions/types";

const initialState = {
  loading: true,
  assignedItosData: {},
  itoDetail: {},
  ongoingData: {},
  upcomingData: {},
  pastData: {},
  assetsList: [],
  allAdmins: [],
  draftItos: [],
  UpdatedData: [],
  ito: {},
  token: {},
  backedAssets: [],
  updatedDataa: [],
  seriesDraftss: [],
  seriesDraftsId: [],
  GET_SERIESDRAFTS_BY_ID: [],
  updatedSeriesDrafts: [],
  series: {},
  subscription: null,
  admins: [],
  seriesDetail: {},
  saveAsDraftSeries: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ADMINS_SUCCESS:
    case CREATE_SERIES_SUCCESS:
    case GET_ASSIGNED_ITOS_SUCCESS:
    case ONGOING_SERIES_SUCCESS:
    case UPCOMING_SERIES_SUCCESS:
    case PAST_SERIES_SUCCESS:
    case GET_SERIES_SUCCESS:
    case GET_ASSET_BY_STATUS_SUCCESS:
    case GET_ITO_BY_ID_SUCCESS:
    case UPDATE_SERIES_REQUEST_SUCCESS:
    case VERIFY_SERIES_UPDATION_SUCCESS:
    case UPDATE_TOKEN_REQUEST_SUCCESS:
    case VERIFY_TOKEN_UPDATION_SUCCESS:
    case VERIFY_BACK_ASSET_UPDATION_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case ITO_UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        ito: { ...state.ito, onhold: payload.onhold },
        loading: false,
      };

    case VERIFY_ITO_CREATE_SUCCESS:
      return {
        ...state,
        ito: {
          ...state.ito,
          status: payload.status,
        },
        loading: false,
      };

    case VERIFY_SERIES_CREATE_SUCCESS:
      return {
        ...state,
        seriesDetail: {
          ...state.seriesDetail,
          status: payload.status,
        },
        loading: false,
      };

    case ITO_CLOSE_REQUEST_SUCCESS:
      return {
        ...state,
        ito: {
          ...state.ito,
          updated_closed: payload.updated_closed,
          closed_request_user: payload.closed_request_user,
        },
        loading: false,
      };

    case VERIFY_CLOSE_REQUEST_SUCCESS:
      return {
        ...state,
        ito: {
          ...state.ito,
          updated_closed: payload.updated_closed,
          closed_request_user: payload.closed_request_user,
          verify_closed: payload.verify_closed,
          closed: payload.closed,
        },
        loading: false,
      };

    case MAKE_TOKEN_TRADEABLE_SUCCESS:
      return {
        ...state,
        token: {
          ...state.token,
          is_tradeable: payload.is_tradeable,
        },
        loading: false,
      };

    case UPDATE_BACK_ASSET_REQUEST_SUCCESS:
      return {
        ...state,
        backedAssets: state.backedAssets.map((back_asset) =>
          back_asset.id === payload.id ? payload : back_asset
        ),
        loading: false,
      };

    case GET_ALL_ADMINS_ERR:
    case CREATE_SERIES_ERR:
    case GET_ASSIGNED_ITOS_ERR:
    case ONGOING_SERIES_ERR:
    case UPCOMING_SERIES_ERR:
    case PAST_SERIES_ERR:
    case GET_SERIES_ERR:
    case GET_ASSET_BY_STATUS_ERR:
    case GET_ITO_BY_ID_ERR:
    case ITO_UPDATE_STATUS_ERR:
    case ITO_CLOSE_REQUEST_ERR:
    case VERIFY_CLOSE_REQUEST_ERR:
    case VERIFY_ITO_CREATE_ERR:
    case VERIFY_SERIES_CREATE_ERR:
    case UPDATE_SERIES_REQUEST_ERR:
    case VERIFY_SERIES_UPDATION_ERR:
    case MAKE_TOKEN_TRADEABLE_ERR:
    case UPDATE_TOKEN_REQUEST_ERR:
    case VERIFY_TOKEN_UPDATION_ERR:
    case UPDATE_BACK_ASSET_REQUEST_SUCCESS:
    case VERIFY_BACK_ASSET_UPDATION_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SAVE_AS_DRAFT_ITO:
      return {
        ...state,
        saveAsDraft: payload,
      };
    case GET_ITO_DRAFTS:
      return {
        ...state,
        draftItos: payload,
      };

    case GET_UPDATED_DRAFT_ITO:
      return {
        ...state,
        UpdatedData: payload,
      };
    case UPDATE_DRAFT:
      return {
        ...state,
        UpdatedData: payload,
      };
    case SAVE_AS_DRAFT_SERIES:
      return {
        ...state,
        saveAsDraftSeries: payload,
      };
    case GET_SERIES_DRAFTS:
      return {
        ...state,
        seriesDraftss: payload,
      };
    case GET_SERIESDRAFTS_BY_ID:
      return {
        ...state,
        GET_SERIESDRAFTS_BY_ID: payload,
      };
    case UPDATE_SERIES_DRAFT:
      return {
        ...state,
        updatedSeriesDrafts: payload,
      };
    default:
      return state;
  }
};
