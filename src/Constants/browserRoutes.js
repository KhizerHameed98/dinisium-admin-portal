const browserRoute = {
  HOST: process.env.REACT_APP_HOST,
  // HOST: "http://139.59.7.248:5000",
  SERVER_URLL: "http://139.59.7.248:5000",
  BLANK_LINK: "#!",
  SIGNIN: "/auth/signin",
  SMS_VERIFICATION: "/auth/sms-verification",
  GOOGLE_VERIFICATION: "/auth/google-verification",
  EMAIL_VERIFICATION: "/auth/email-verification",
  SIGNUP: "/auth/signup",
  SIGNUP_CODE_VERIFICATION: "/auth/code-verification",
  LOGGEDIN_DEFAULT: "/admin/dashboard",
  IMAGE_URL: "http://139.59.7.248:5000/",

  DASHBOARD: "/admin/dashboard",
  ADMIN_ROUTE: "/admin",

  USER_MANAGEMENT: "/admin/user-management",
  USER_DETAILS: "/admin/user-management/user-details/:id",
  USER_DETAIL_BTN: "/admin/user-management/user-details/",
  INVESTMENT_DETAILS: "/admin/user-management/investment-details/:id",
  INVESTMENT_DETAIL_BTN: "/admin/user-management/investment-details/",

  USER_WALLET: "/admin/user-wallet",
  USER_WALLET_DETAILS: "/admin/user-wallet/details/:id",
  USER_WALLET_DETAILS_BTN: "/admin/user-wallet/details/",

  WALLET: "/admin/wallet",
  REQUEST_WITHDRAW: "/admin/RequestWithdraw",
  BANK_PAYMENT: "/admin/wallet/pay-via-bank",

  KYC_MANAGEMENT: "/admin/kyc-management",
  REQUEST_STATUS: "/admin/kyc-management/requst-status/:id",
  REQUEST_STATUS_BTN: "/admin/kyc-management/requst-status/",

  EXCHANGE: "/admin/marketplace",
  ADD_REMOVE_TOKEN: "/admin/marketplace/add-or-remove-token",
  BUY_SELL_REQUESTS: "/admin/marketplace/buy-sell-requests",
  COMPLETED_ORDERS: "/admin/marketplace/completed-orders",

  VOTING: "/admin/voting",
  CREATE_NEW_VOTE: "/admin/voting/create-election",
  PAST_VOTING_LIST: "/admin/voting/past-voting-list",
  VOTING_DETAILS: "/admin/voting/details/:id",
  VOTING_DETAILS_BTN: "/admin/voting/details/",

  ITO_MANAGEMENT: "/admin/ito-management",
  CREATE_NEW_ITO: "/admin/ito-management/create-new-ito",
  UPDATE_DRAFT: "/admin/ito-management/update-draft/:id",
  CREATE_NEW_SERIES: "/admin/ito-management/create-new-series",
  ITO_MANAGEMENT_DETAILS: "/admin/ito-management/details/:id",
  ITO_MANAGEMENT_DETAILS_BTN: "/admin/ito-management/details/",
  SERIES_DETAILS: "/admin/ito-management/series/details/:id",
  SERIES_DETAILS_BTN: "/admin/ito-management/series/details/",

  ASSET_MANAGEMENT: "/admin/asset-management",
  ASSET_MANAGEMENT_DETAILS: "/admin/asset-management/details/:id",
  ASSET_MANAGEMENT_DETAILS_BTN: "/admin/asset-management/details/",
  ADD_NEW_ASSET: "/admin/create-new-asset",

  ADMIN_MANAGEMENT: "/admin/admin-management",
  ADD_NEW_SUB_ADMIN: "/admin/admin-management/add-new-sub-admin",
  ADMIN_DETAILS: "/admin/admin-management/details/:id",
  ADMIN_DETAILS_BTN: "/admin/admin-management/details/",

  AGENT_MANAGEMENT: "/admin/agent-management",
  ADD_NEW_AGENT: "/admin/agent-management/add-new-agent",

  AGENT_DETAILS: "/admin/agent-management/details/:id",
  AGENT_DETAILS_BTN: "/admin/agent-management/details/",

  ADD_INVESTOR: "/admin/agent-management/add-investor/:id",
  ADD_INVESTOR_BTN: "/admin/agent-management/add-investor/",

  CONTENT_MANAGEMENT: "/admin/content-management",
  EDIT_HOME: "/admin/content-management/edit-home",
  EDIT_ABOUT: "/admin/content-management/edit-about",

  ADMIN_REQUESTS: "/admin/admin-requests",

  ADMIN_REQUESTS_DETAILS: "/admin/admin-requests/detail/:id",
  ADMIN_REQUESTS_DETAILS_BTN: "/admin/admin-requests/detail/",

  PROFILE: "/admin/profile",
  EDIT_PROFILE: "/admin/edit-profile",

  SUBSCRIPTION: "/admin/subscription",
  CREATE_SUBSCRIPTION: "/admin/create-subscription",
  SUBSCRIPTION_DETAIL: "/admin/subscription/detail/:id",
  SUBSCRIPTION_DETAIL_BTN: "/admin/subscription/detail/",
  UPDATE_SUBSCRIPTION_DRAFT :"/admin/updatesubscriptiondraft/:id",

  CREATE_ITO_FOR_SUBSCIRPTION: "/admin/subscription/create-ito/:id",
  CREATE_ITO_FOR_SUBSCIRPTION_BTN: "/admin/subscription/create-ito/", // :id
  WITHDRAW_REQUEST_VIEWDETAIL: "/admin/requestwithdraw/viewdetail",
  SINGLE_APPROVE_REQUEST_VIEWDETAIL: "/admin/singleapproveviewdetail",

  APPROVED_REQUEST: "/admin/approvedrequest",
  UPDATE_SERIES_DRAFT: "/admin/updateseriesdrafts/:id",
};

export default browserRoute;
