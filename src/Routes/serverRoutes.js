const SERVER_URL = process.env.REACT_APP_SERVER_URL;
// const SERVER_URL = "http://localhost:5000/api";
// const SERVER_URL = "https://6412-72-255-5-119.ngrok.io/api";

export const auth = {
  LOGIN: `${SERVER_URL}/v2/auth/login`,
  VERIFY_EMAIL: `${SERVER_URL}/v2/auth/verifyEmailSMSVerification`,
  VERIFY_SMS: `${SERVER_URL}/v2/auth/verifySMSVCode`,
  VERIFY_GOOGLE: `${SERVER_URL}/v2/auth/verify2fa`,
  LOGGEDIN_USER: `${SERVER_URL}/v3/admin/me`,

  // LOGGEDIN_USER: `${SERVER_URL}/v2/auth/loggedInUser`,

  // update profile data
  UPDATE_PROFILE: `${SERVER_URL}/v2`,

  // update password
  UPDATE_PASSWORD: `${SERVER_URL}/v2/auth/updatePassword`,

  // is_Verificatrion_on
  IS_EMAIL_AUTH_ON: `${SERVER_URL}/v2/auth/updateEmailVerification`,
  ENABLE_GOOGLE_AUTH: `${SERVER_URL}/v3/auth/enable2fa`,
  IS_GOOGLE_AUTH_ON: `${SERVER_URL}/v2/auth/update2faStatus`,
  IS_SMS_AUTH_ON: `${SERVER_URL}/v2/auth/updateSMSVerification`,
};

export const kyc = {
  GET_KYC_BY_STATUS: `${SERVER_URL}/v1/kyc/status`,
  GET_KYC_BY_ID: `${SERVER_URL}/v1/kyc/`,
  UPDATE_KYC_STATUS: `${SERVER_URL}/v1/update/kyc/status`,
};

export const ito = {
  ASSIGNED_ITOS: `${SERVER_URL}/v2/itos/admin/assigned`,
  GET_ASSEIGNED_ITO_BY_ID: `${SERVER_URL}/v1/itos/admin/assigned/`, //:id
  ALL_ADMINS: `${SERVER_URL}/v2/ito/admins/all`,
  CREATE_ITO: `${SERVER_URL}/v2/itos`,
  VERIFY_ITO_CREATION: `${SERVER_URL}/v2/itos/verify/`, //:id
  UPDATE_ITO: `${SERVER_URL}/v2/itos/`, //:id
  CLOSE_REQUEST_ITO: `${SERVER_URL}/v2/ito/close-request/`, //:id
  VERIFY_CLOSE_REQUEST_ITO: `${SERVER_URL}/v2/ito/close-request/verify/`, //:id

  ITO_SERIES: `${SERVER_URL}/v2/itoseries`,
  VERIFY_SERIES_CREATION: `${SERVER_URL}/v2/itoseries/verify/`, //:id
  ITO_SERIES_BY_STATUS: `${SERVER_URL}/v2/itoseries/by_status`,
  GET_SERIES_BY_ID: `${SERVER_URL}/v2/itoseries/`,
  UPDATE_SERIES_SUPPLY_REQUEST: `${SERVER_URL}/v2/itoseries/update/supply/`, //:id
  VERIFY_UPDATE_SERIES_SUPPLY: `${SERVER_URL}/v2/itoseries/verify/update-supply/`, //:id

  MAKE_TOKEN_TRADEABLE: `${SERVER_URL}/v2/tokens/:id/add`, //:id/add
  UPDATE_TOKEN_REQUEST: `${SERVER_URL}/v2/tokens/:id/add/update-request`,
  VERIFY_UPDATE_TOKEN: `${SERVER_URL}/v2/tokens/:id/verify/update-request`,

  GET_AVAILABLE_ITO: `${SERVER_URL}/v1/itos/available`,
  GET_ITO_BY_ID: `${SERVER_URL}/v1/itos/admin/assigned/`, //:id

  UPDATE_BACK_ASSET_REQUEST: `${SERVER_URL}/v2/tokens/add/update-request/back_asset/:id`,
  VERIFY_UPDATE_BACK_ASSET: `${SERVER_URL}/v2/tokens/verify/update-request/back_asset/:id`,
  SAVE_AS_DRAFT_ITO: `${SERVER_URL}/v2/draft/itos`,
  GET_DRAFTS_ITO: `${SERVER_URL}/v2/get/ito/draft`,
  GET_UPDATED_DRAFTS_ITOS: `${SERVER_URL}/v2/get/ito/draft/:id`,
  UPDATE_ITO_DRAFTS: `${SERVER_URL}/v2/draft/update/:id`,
  SAVE_AS_DRAFT_SERIES: `${SERVER_URL}/v2/itoseries/create/draft`,
  GET_SERIES_DRAFTS: `${SERVER_URL}/v2/get/itoseries/draft`,
  GET_SERIES_DRAFTS_BY_ID: `${SERVER_URL}/v2/itoseries/draft/:id`,
  UPDATE_SERIES_DRAFT: `${SERVER_URL}/v2/itoseries/update/draft/:id`,
};

export const assetManagement = {
  ASSETS: `${SERVER_URL}/v2/assets`,
  VERIFY_UPDATE_REQUEST: `${SERVER_URL}/v2/assets/verify`,
  GET_PENDING_LIST: `${SERVER_URL}/V2/assets/status/pending`,
  GET_APPROVED_LIST: `${SERVER_URL}/V2/assets/status/approved`,
  GET_REJECTED_LIST: `${SERVER_URL}/V2/assets/status/rejected`,
  ASSET_DETAIL: `${SERVER_URL}/v2/assets/detail`,
};

export const exchange = {
  GET_EXCHANGEABLE_TOKENS: `${SERVER_URL}/v1/tokens/status/exchangeable`,
  GET_TOKEN_DETAIL: `${SERVER_URL}/v1/tokens/`, // /tokens/:id
  ONGOING_SERIES_BY_TOKEN_ID: `${SERVER_URL}/v3/itoseries/ito/`, //:itoId/ongoing
  GET_BUY_REQUEST_LIST: `${SERVER_URL}/v3/orders`,
  APPROVE_ORDER_REQUEST: `${SERVER_URL}/v3/orders/`, //:id/approve
  GET_EXHCNAGE_ORDERS: `${SERVER_URL}/v2/orders`,
  MANUAL_TRANSFER: `${SERVER_URL}/v2/orders/manualtransfer/put`,
  GET_CANDLESTICK_TABLE_PRICE: `${SERVER_URL}/v1/dashboard/tokens/info/all`,
  GET_TOKEN_PRICE_HISTORY: `${SERVER_URL}/v1/dashboard/tokens/price_history/`,
  GET_TOKEN_ID_FOR_PRICE_HISTORY: `${SERVER_URL}/v1/tokens`,
};

// wallet route
export const wallet = {
  GET_TOKEN_LIST: `${SERVER_URL}/v1/wallet/list`,
  DEPOSIT_PAYMENT: `${SERVER_URL}/v1/wallet/payement`,
  GET_WALLET_DETAILS: `${SERVER_URL}/v1/wallets/users/me`,
};

// adminRequest route
export const adminRequest = {
  GET_PENDING_DEPOSITES_LIST: `${SERVER_URL}/v1/fiat/deposits/pending/approved_0`,
  GET_ALL_DEPOSITES_LIST: `${SERVER_URL}/v1/fiat/deposits`,
  GET_SINGLE_APPROVED_LIST: `${SERVER_URL}/v1/fiat/deposits/pending/approved_1`,
  GET_DEPOSITE_BY_ID: `${SERVER_URL}/v1/fiat/deposits`,
  CONFIRM_DEPOSITE: `${SERVER_URL}/v1/fiat/deposits`,
  // DEPOSIT_PAYMENT: `${SERVER_URL}/v1/wallet/top/bank`,
};

// adminManamgement route
export const admin = {
  GET_ADMIN_LIST: `${SERVER_URL}/v1/admins/get/all`,
  GET_ADMIN_BY_ID: `${SERVER_URL}/v1/admins`,
  GET_ADMIN_ITO: `${SERVER_URL}/v1`,
  ADD_NEW_ADMIN: `${SERVER_URL}/v1/admins`,
  DELETE_ADMIN: `${SERVER_URL}/v1/admins`,
  ADMIN_LINK_ITO: `${SERVER_URL}/v1/admins`,
  GET_ALL_PERMISSIONS: `${SERVER_URL}/v1/admins/permissions/all`,
  ASSIGN_PERMISSIONS: `${SERVER_URL}/v1/admins/user/permissions`,
  GET_SUBADMIN_BY_ID: `${SERVER_URL}/v2/admins/`, //: 10
};

export const userManagement = {
  GET_ALL_USERS: `${SERVER_URL}/v2/getAllUers`,
  GET_USER_PROFILE: `${SERVER_URL}/v2/getProfile`,
  USER_BLOCK_UNBLOCK: `${SERVER_URL}/v3/blockUser/`,
  USER_COUNT: `${SERVER_URL}/v1/dashboard/users/registered/all?filterWith=per`,
  GET_USER_TOTAL_COUNT: `${SERVER_URL}/v1/dashboard/users/counts`,
  GET_TOKEN_DETAIL_BY_ID: `${SERVER_URL}/v3/wallets/list/accounts/`,
};

export const agentManagement = {
  REGISTER_AGENT: `${SERVER_URL}/v2/agents`,
  ALL_AGENTS: `${SERVER_URL}/v2/agents`,
  CREATE_AGENT: `${SERVER_URL}/v2/investors`,
  GET_ALL_INVESTOR: `${SERVER_URL}/v2/investors`,
  GET_AGENT_INVESTOR: `${SERVER_URL}/v2/investors`,
  GET_SINGLE_AGENT: `${SERVER_URL}/v2//agents`,
};

// voting
export const voting = {
  GET_VOTING: `${SERVER_URL}/v1/elections`,
  CAST_VOTE: `${SERVER_URL}/v1/votes`,
  GET_VOTE_STATUS: `${SERVER_URL}/v1/elections/`,
};

//dashboard
export const dashboard = {
  ITO_ELECTIONS_COUNT: `${SERVER_URL}/v2/dashboard/elections/ito`, // /1/counts
  ITO_USERS_COUNT: `${SERVER_URL}/v2/dashboard/users/ito`, // /1/counts
  ITO_ORDERS_COUNT: `${SERVER_URL}/v2/dashboard/orders/ito`, // /2/counts
  ITO_SERIES_COUNT: `${SERVER_URL}/v2/dashboard/itoseries/ongoing/count`, // ?ito=2
  ITO_INVESTMENT_PER_MONTH: `${SERVER_URL}/v2/dashboard/investment/ito`, // /2/total_month
  ITO_REGISTERED_USERS_PER_MONTH: `${SERVER_URL}/v2/dashboard/users/ito`, // /1/register_month
  ITO_ORDERS_PER_DAY: `${SERVER_URL}/v2/dashboard/exchange/ito`, // /2/count_day
  GET_TOKENS_MARKETCAP: `${SERVER_URL}/v1/dashboard/tokens/marketcap/`,
  GET_SOLD_TOKENS_GRAPH: `${SERVER_URL}/v1/dashboard/tokens/sold/`,
  GET_ALL_TOKENS_DEFAULT_DATA: `${SERVER_URL}/v1/tokens/current_price/all`,
};

// Subscription
export const subscription = {
  CREATE_SUBSCRIPTION: `${SERVER_URL}/v1/subscriptions`,
  GET_SUBSCRIPTIONS_BY_ADMIN_ID: `${SERVER_URL}/v1/subscriptions/admin/assigned`,
  GET_SUBSCRIPTION_BY_ID: `${SERVER_URL}/v1/subscriptions/`, //:id
  VERIFY_SUBSCRIPTION_CREATION: `${SERVER_URL}/v2/subscription/verify/`, //:id
  SAVE_AS_DRFAT: `${SERVER_URL}/v2/draft/subscriptions`,
  GET_SUBSCRIPTION: `${SERVER_URL}/v2/get/draft/subscriptions`,
  GET_SUBSCRIPTION_DRAFTS: `${SERVER_URL}/v2/get/draft/subscriptions`,
  GET_SUBSCRIPTION_DRAFTS_BY_ID: `${SERVER_URL}/v2/get/draft/subscriptions/:id`,
  UPDATE_SUBSCRIPTION: `${SERVER_URL}/v2/update/draft/subscriptions/:id`,
};

export const WithdrawRequest = {
  GET_WITHDRAW_REQUEST: `${SERVER_URL}/v2/withdraw/list/pending`,
  GET_WITHDRAW_REQUEST_SINGLE_APPROVE: `${SERVER_URL}/v2/withdraw/list/single_approved`,
  GET_WITHDRAW_REQUEST_APPROVED: `${SERVER_URL}/v2/withdraw/list/approved`,
  APPROVE_WITHDRAW_REQUEST: `${SERVER_URL}/v3/withdraw/update/status/`, //:id
  REJECT_WITHDRAW_REQUEST: `${SERVER_URL}/v3/withdraw/update/status/`, //:id
  REJECTED_DATA: `${SERVER_URL}/v2/withdraw/list/rejected`,
};
