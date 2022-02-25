//Auth Types
export const LOAD = "LOAD";

export const REGISTER_MSG = "REGISTER_MSG";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const VERIFY_FAIL = "VERIFY_FAIL";

export const FORGET_MSG = "FORGET_MSG";
export const FORGET_SUCCESS = "FORGET_SUCCESS";
export const FORGET_FAIL = "FORGET_FAIL";
export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_FAIL = "RESET_FAIL";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_MSG = "LOGIN_MSG";
export const LOGIN_MSG_ERR = "LOGIN_MSG_ERR";

export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const ERR_USERS = "ERR_USERS";

export const SET_AUTH_VERIFICATION = "SET_AUTH_VERIFICATION";

export const LOGOUT = "LOGOUT";

export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_ERR = "UPDATE_PASSWORD_ERR";

export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_ERR = "UPDATE_PROFILE_ERR";

export const IS_EMAIL_AUTH_ON_SUCCESS = "IS_EMAIL_AUTH_ON_SUCCESS";
export const IS_EMAIL_AUTH_ON_ERR = "IS_EMAIL_AUTH_ON_ERR";

export const IS_GOOGLE_AUTH_ON_SUCCESS = "IS_GOOGLE_AUTH_ON_SUCCESS";
export const IS_GOOGLE_AUTH_ON_ERR = "IS_GOOGLE_AUTH_ON_ERR";

export const IS_SMS_AUTH_ON_SUCCESS = "IS_SMS_AUTH_ON_SUCCESS";
export const IS_SMS_AUTH_ON_ERR = "IS_SMS_AUTH_ON_ERR";

//Dashboard Types
export const ITO_ELECTIONS_COUNT_SUCCESS = "ITO_ELECTIONS_COUNT_SUCCESS";
export const ITO_ELECTIONS_COUNT_ERR = "ITO_ELECTIONS_COUNT_ERR";
export const ITO_USERS_COUNT_SUCCESS = "ITO_USERS_COUNT_SUCCESS";
export const ITO_USERS_COUNT_ERR = "ITO_USERS_COUNT_ERR";
export const ITO_ORDERS_COUNT_SUCCESS = "ITO_ORDERS_COUNT_SUCCESS";
export const ITO_ORDERS_COUNT_ERR = "ITO_ORDERS_COUNT_ERR";
export const ITO_SERIES_COUNT_SUCCESS = "ITO_SERIES_COUNT_SUCCESS";
export const ITO_SERIES_COUNT_ERR = "ITO_SERIES_COUNT_ERR";

export const INVESTMENT_PER_MONTH_SUCCESS = "INVESTMENT_PER_MONTH_SUCCESS";
export const INVESTMENT_PER_MONTH_ERR = "INVESTMENT_PER_MONTH_ERR";
export const USERS_PER_MONTH_SUCCESS = "USERS_PER_MONTH_SUCCESS";
export const USERS_PER_MONTH_ERR = "USERS_PER_MONTH_ERR";
export const ORDERS_PER_DAY_SUCCESS = "ORDERS_PER_DAY_SUCCESS";
export const ORDERS_PER_DAY_ERR = "ORDERS_PER_DAY_ERR";
export const GET_MARKETCAP = "GET_MARKETCAP";
export const GET_SOLD_TOKENS = "GET_SOLD_TOKENS";
export const GET_ALL_TOKENS_DATA = "GET_ALL_TOKENS_DATA";

//User Management Types
export const GET_USERS_LIST_SUCCESS = "GET_USERS_LIST_SUCCESS";
export const GET_USERS_LIST_ERR = "GET_USERS_LIST_ERR";

export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERR = "GET_USER_PROFILE_ERR";

export const GET_INVESTMENT_DETAIL_SUCCESS = "GET_INVESTMENT_DETAIL_SUCCESS";
export const GET_INVESTMENT_DETAIL_ERR = "GET_INVESTMENT_DETAIL_ERR";

export const BLOCK_UNBLOCK_SUCCESS = "BLOCK_UNBLOCK_SUCCESS";
export const BLOCK_UNBLOCK_ERR = "BLOCK_UNBLOCK_ERR";
export const GET_USER_COUNT = "GET_USER_COUNT";
export const TOTAL_USER_COUNT = "TOTAL_USER_COUNT";

//User Wallet Types
export const GET_USER_WALLET_DETAILS_SUCCESS =
  "GET_USER_WALLET_DETAILS_SUCCESS";
export const GET_USER_WALLET_DETAILS_ERR = "GET_USER_WALLET_DETAILS_ERR";

//Wallet Types

export const GET_TOKEN_LIST_SUCCESS = "GET_TOKEN_LIST_SUCCESS";
export const GET_TOKEN_LIST_ERR = "GET_TOKEN_LIST_ERR";

export const GET_WALLET_DETAILS_SUCCESS = "GET_WALLET_DETAILS_SUCCESS";
export const GET_WALLET_DETAILS_ERR = "GET_WALLET_DETAILS_ERR";

export const DEPOSIT_PAYMENT_SUCCESS = "DEPOSIT_PAYMENT_SUCCESS";
export const DEPOSIT_PAYMENT_ERR = "DEPOSIT_PAYMENT_ERR";

//Kyc Management Types
export const SINGLE_APPROVED_KYC_SUCCESS = "SINGLE_APPROVED_KYC_SUCCESS";
export const SINGLE_APPROVED_KYC_ERR = "SINGLE_APPROVED_KYC_ERR";
export const PENDING_KYC_SUCCESS = "PENDING_KYC_SUCCESS";
export const PENDING_KYC_ERR = "PENDING_KYC_ERR";
export const APPROVED_KYC_SUCCESS = "APPROVED_KYC_SUCCESS";
export const APPROVED_KYC_ERR = "APPROVED_KYC_ERR";
export const REJECTED_KYC_SUCCESS = "REJECTED_KYC_SUCCESS";
export const REJECTED_KYC_ERR = "REJECTED_KYC_ERR";

export const GET_KYC_SUCCESS = "GET_KYC_SUCCESS";
export const GET_KYC_ERR = "GET_KYC_ERR";

export const KYC_UPDATE_SUCCESS = "KYC_UPDATE_SUCCESS";
export const KYC_UPDATE_ERR = "KYC_UPDATE_ERR";
export const KYC_DATA = "KYC_DATA";

//Exhange Types
export const GET_TRADEABLE_TOKENS_SUCCESS = "GET_TRADEABLE_TOKENS_SUCCESS";
export const GET_TRADEABLE_TOKENS_ERR = "GET_TRADEABLE_TOKENS_ERR";
export const TOKEN_SELECTED_STATUS = "TOKEN_SELECTED_STATUS";

export const GET_TOKEN_DETAIL_SUCCESS = "GET_TOKEN_DETAIL_SUCCESS";
export const GET_TOKEN_DETAIL_ERR = "GET_TOKEN_DETAIL_ERR";

export const GET_ONGOING_SERIES_SUCCESS = "GET_ONGOING_SERIES_SUCCESS";
export const GET_ONGOING_SERIES_ERR = "GET_ONGOING_SERIES_ERR";

export const SERIES_SELECTED_STATUS = "SERIES_SELECTED_STATUS";

export const GET_BUY_REQUEST_LIST_SUCCESS = "GET_BUY_REQUEST_LIST_SUCCESS";
export const GET_BUY_REQUEST_LIST_ERR = "GET_BUY_REQUEST_LIST_ERR";

export const GET_SELL_REQUEST_LIST_SUCCESS = "GET_SELL_REQUEST_LIST_SUCCESS";
export const GET_SELL_REQUEST_LIST_ERR = "GET_SELL_REQUEST_LIST_ERR";

export const APPROVE_ORDER_SUCCESS = "APPROVE_ORDER_SUCCESS";
export const APPROVE_ORDER_ERR = "APPROVE_ORDER_ERR";

export const GET_COMPLETED_ORDERS_SUCCESS = "GET_COMPLETED_ORDERS_SUCCESS";
export const GET_COMPLETED_ORDERS_ERR = "GET_COMPLETED_ORDERS_ERR";
export const GET_TOKEN_HISTORY = "GET_TOKEN_HISTORY";
export const GET_TOKEN_ID_BYPRICE = "GET_TOKEN_ID_BYPRICE";
export const GET_ORDERS = "GET_ORDERS";
export const REJECT_ORDERS = "REJECT_ORDERS";
export const APPROVE_ORDERS = "APPROVE_ORDERS";
export const GET_CANDLETABLE_PRICE_HISTORY = "GET_CANDLETABLE_PRICE_HISTORY";

//Voting Types
export const GET_ALL_ITO_SUCCESS = "GET_ALL_ITO_SUCCESS";
export const GET_ALL_ITO_ERR = "GET_ALL_ITO_ERR";

export const GET_ONGOING_VOTING_SUCCESS = "GET_ONGOING_VOTING_SUCCESS";
export const GET_ONGOING_VOTING_ERR = "GET_ONGOING_VOTING_ERR";

export const GET_UPCOMING_VOTING_SUCCESS = "GET_UPCOMING_VOTING_SUCCESS";
export const GET_UPCOMING_VOTING_ERR = "GET_UPCOMING_VOTING_ERR";

export const GET_CLOSED_VOTING_SUCCESS = "GET_CLOSED_VOTING_SUCCESS";
export const GET_CLOSED_VOTING_ERR = "GET_CLOSED_VOTING_ERR";

export const GET_VOTING_DETAIL_SUCCESS = "GET_VOTING_DETAIL_SUCCESS";
export const GET_VOTING_DETAIL_ERR = "GET_VOTING_DETAIL_ERR";

export const CREATE_VOTE_SUCCESS = "CREATE_VOTE_SUCCESS";
export const CREATE_VOTE_ERR = "CREATE_VOTE_ERR";

export const CAST_VOTE_SUCCESS = "CAST_VOTE_SUCCESS";
export const CAST_VOTE_ERR = "CREATE_VOTE_ERR";

export const GET_VOTE_STATUS_SUCCESS = "GET_VOTE_STATUS_SUCCESS";
export const GET_VOTE_STATUS_ERR = "GET_VOTE_STATUS_ERR";

//Ito Management Types
export const GET_ALL_ADMINS_SUCCESS = "GET_ALL_ADMINS_SUCCESS";
export const GET_ALL_ADMINS_ERR = "GET_ALL_ADMINS_ERR";

export const CREATE_ITO_SUCCESS = "CREATE_ITO_SUCCESS";
export const CREATE_ITO_ERR = "CREATE_ITO_ERR";

export const GET_ASSET_BY_STATUS_SUCCESS = "GET_ASSET_BY_STATUS_SUCCESS";
export const GET_ASSET_BY_STATUS_ERR = "GET_ASSET_BY_STATUS_ERR";

export const UNASSIGNED_ADMINS_SUCCESS = "UNASSIGNED_ADMINS_SUCCESS";
export const UNASSIGNED_ADMINS_ERR = "UNASSIGNED_ADMINS_ERR";

export const CREATE_SERIES_SUCCESS = "CREATE_SERIES_SUCCESS";
export const CREATE_SERIES_ERR = "CREATE_SERIES_ERR";

export const GET_ASSIGNED_ITOS_SUCCESS = "GET_ASSIGNED_ITOS_SUCCESS";
export const GET_ASSIGNED_ITOS_ERR = "GET_ASSIGNED_ITOS_ERR";
export const ONGOING_SERIES_SUCCESS = "ONGOING_SERIES_SUCCESS";
export const ONGOING_SERIES_ERR = "ONGOING_SERIES_ERR";
export const UPCOMING_SERIES_SUCCESS = "UPCOMING_SERIES_SUCCESS";
export const UPCOMING_SERIES_ERR = "UPCOMING_SERIES_ERR";
export const PAST_SERIES_SUCCESS = "PAST_SERIES_SUCCESS";
export const PAST_SERIES_ERR = "PAST_SERIES_ERR";

export const GET_ITO_BY_ID_SUCCESS = "GET_ITO_BY_ID_SUCCESS";
export const GET_ITO_BY_ID_ERR = "GET_ITO_BY_ID_ERR";

export const ITO_UPDATE_STATUS_SUCCESS = "ITO_UPDATE_STATUS_SUCCESS";
export const ITO_UPDATE_STATUS_ERR = "ITO_UPDATE_STATUS_ERR";

export const ITO_CLOSE_REQUEST_SUCCESS = "ITO_CLOSE_REQUEST_SUCCESS";
export const ITO_CLOSE_REQUEST_ERR = "ITO_CLOSE_REQUEST_ERR";

export const VERIFY_ITO_CREATE_SUCCESS = "VERIFY_ITO_CREATE_SUCCESS";
export const VERIFY_ITO_CREATE_ERR = "VERIFY_ITO_CREATE_ERR";

export const VERIFY_CLOSE_REQUEST_SUCCESS = "VERIFY_CLOSE_REQUEST_SUCCESS";
export const VERIFY_CLOSE_REQUEST_ERR = "VERIFY_CLOSE_REQUEST_ERR";

export const GET_SERIES_SUCCESS = "GET_SERIES_SUCCESS";
export const GET_SERIES_ERR = "GET_SERIES_ERR";
export const VERIFY_SERIES_CREATE_SUCCESS = "VERIFY_SERIES_CREATE_SUCCESS";
export const VERIFY_SERIES_CREATE_ERR = "VERIFY_SERIES_CREATE_ERR";

export const UPDATE_SERIES_REQUEST_SUCCESS = "UPDATE_SERIES_REQUEST_SUCCESS";
export const UPDATE_SERIES_REQUEST_ERR = "UPDATE_SERIES_REQUEST_ERR";
export const VERIFY_SERIES_UPDATION_SUCCESS = "VERIFY_SERIES_UPDATION_SUCCESS";
export const VERIFY_SERIES_UPDATION_ERR = "VERIFY_SERIES_UPDATION_ERR";

export const MAKE_TOKEN_TRADEABLE_SUCCESS = "MAKE_TOKEN_TRADEABLE_SUCCESS";
export const MAKE_TOKEN_TRADEABLE_ERR = "MAKE_TOKEN_TRADEABLE_ERR";

export const UPDATE_TOKEN_REQUEST_SUCCESS = "UPDATE_TOKEN_REQUEST_SUCCESS";
export const UPDATE_TOKEN_REQUEST_ERR = "UPDATE_TOKEN_REQUEST_ERR";
export const VERIFY_TOKEN_UPDATION_SUCCESS = "VERIFY_TOKEN_UPDATION_SUCCESS";
export const VERIFY_TOKEN_UPDATION_ERR = "VERIFY_TOKEN_UPDATION_ERR";
export const GET_SERIES_DRAFTS = "GET_SERIES_DRAFTS"

export const UPDATE_BACK_ASSET_REQUEST_SUCCESS =
  "UPDATE_BACK_ASSET_REQUEST_SUCCESS";
export const UPDATE_BACK_ASSET_REQUEST_ERR = "UPDATE_BACK_ASSET_REQUEST_ERR";
export const VERIFY_BACK_ASSET_UPDATION_SUCCESS =
  "VERIFY_BACK_ASSET_UPDATION_SUCCESS";
export const VERIFY_BACK_ASSET_UPDATION_ERR = "VERIFY_BACK_ASSET_UPDATION_ERR";
export const SAVE_AS_DRAFT_ITO = "SAVE_AS_DRAFT_ITO";
export const GET_ITO_DRAFTS = "GET_ITO_DRAFTS";
export const GET_UPDATED_DRAFT_ITO = "GET_UPDATED_DRAFT_ITO"
export const UPDATE_DRAFT = "UPDATE_DRAFT"
export const SAVE_AS_DRAFT_SERIES = "SAVE_AS_DRAFT_SERIES";
export const GET_SERIESDRAFTS_BY_ID = "GET_SERIESDRAFTS_BY_ID";
export const UPDATE_SERIES_DRAFT = " UPDATE_SERIES_DRAFT";

//Asset Management Types
export const ADD_NEW_ASSET_SUCCESS = "ADD_NEW_ASSET_SUCCESS";
export const ADD_NEW_ASSET_ERR = "ADD_NEW_ASSET_ERR";

export const GET_ASSET_SUCCESS = "GET_ASSET_SUCCESS";
export const GET_ASSET_ERR = "GET_ASSET_ERR";

export const GET_ASSET_DETAIL_SUCCESS = "GET_ASSET_DETAIL__SUCCESS";
export const GET_ASSET_DETAIL_ERR = "GET_ASSET_DETAIL_ERR";

export const UPDATE_ASSET_SUCCESS = "UPDATE_ASSET_SUCCESS";
export const UPDATE_ASSET_ERR = "UPDATE_ASSET_ERR";

export const VERIFY_UPDATE_SUCCESS = "VERIFY_UPDATE_SUCCESS";
export const VERIFY_UPDATE_ERR = "VERIFY_UPDATE_ERR";
export const PENDING_LIST = "PENDING_LIST";
export const APPROVED_LIST = "APPROVED_LIST";
export const REJECTED_LIST = "REJECTED_LIST";

//Admin Management Types
export const GET_SUB_ADMIN_LIST_SUCCESS = "GET_SUB_ADMIN_LIST_SUCCESS";
export const GET_SUB_ADMIN_LIST_ERR = "GET_SUB_ADMIN_LIST_ERR";
export const GET_SINGLE_SUB_ADMIN_SUCCESS = "GET_SINGLE_SUB_ADMIN_SUCCESS";
export const GET_SINGLE_SUB_ADMIN_ERR = "GET_SINGLE_SUB_ADMIN_ERR";

export const GET_ADMIN_BY_ID_SUCCESS = "GET_ADMIN_BY_ID_SUCCESS";
export const GET_ADMIN_BY_ID_ERR = "GET_ADMIN_BY_ID_ERR";

export const GET_ADMIN_ITO_SUCCESS = "GET_ADMIN_ITO_SUCCESS";
export const GET_ADMIN_ITO_ERR = "GET_ADMIN_ITO_ERR";

export const ADD_NEW_ADMIN_SUCCESS = "ADD_NEW_ADMIN_SUCCESS";
export const ADD_NEW_ADMIN_ERR = "ADD_NEW_ADMIN_ERR";

export const DELETE_ADMIN_SUCCESS = "DELETE_ADMIN_SUCCESS";
export const DELETE_ADMIN_ERR = "DELETE_ADMIN_ERR";

export const ADMIN_LINK_ITO_SUCCESS = "ADMIN_LINK_ITO_SUCCESS";
export const ADMIN_LINK_ITO_ERR = "ADMIN_LINK_ITO_ERR";

export const GET_ALL_PERMISSIONS_SUCCESS = "GET_ALL_PERMISSIONS_SUCCESS";
export const GET_ALL_PERMISSIONS_ERR = "GET_ALL_PERMISSIONS_ERR";

export const ASSIGN_PERMISSIONS_SUCCESS = "ASSIGN_PERMISSIONS_SUCCESS";
export const ASSIGN_PERMISSIONS_ERR = "ASSIGN_PERMISSIONS_ERR";

// admin request

export const GET_DEPOSITES_LIST_SUCCESS = "GET_DEPOSITES_LIST_SUCCESS";
export const GET_DEPOSITES_LIST_ERR = "GET_DEPOSITES_LIST_ERR";

export const GET_ALL_DEPOSITES_LIST_SUCCESS = "GET_ALL_DEPOSITES_LIST_SUCCESS";
export const GET_ALL_DEPOSITES_LIST_ERR = "GET_ALL_DEPOSITES_LIST_ERR";

export const CONFIRM_DEPOSITE_SUCCESS = "CONFIRM_DEPOSITE_SUCCESS";
export const CONFIRM_DEPOSITE_ERR = "CONFIRM_DEPOSITE_ERR";

export const GET_DEPOSITE_BY_ID_SUCCESS = "GET_DEPOSITE_BY_ID_SUCCESS";
export const GET_DEPOSITE_BY_ID_ERR = "GET_DEPOSITE_BY_ID_ERR";

export const GET_SINGLE_APPROVED_SUCCESS = "GET_SINGLE_APPROVED_SUCCESS";
export const GET_SINGLE_APPROVED_ERR = "GET_SINGLE_APPROVED_ERR";

// Agent Management Reguest
export const REGISTER_AGENT_SUCCESS = "REGISTER_AGENT_SUCCESS";
export const REGISTER_AGENT_ERR = "REGISTER_AGENT_ERR";

export const GET_INVESTOR_SUCCESS = "GET_INVESTOR_SUCCESS";
export const GET_INVESTOR_ERR = "GET_INVESTOR_ERR";

export const GET_AGENT_INVESTOR_SUCCESS = "GET_AGENT_INVESTOR_SUCCESS";
export const GET_AGENT_INVESTOR_ERR = "GET_AGENT_INVESTOR_ERR";

export const GET_SINGLE_AGENT_SUCCESS = "GET_SINGLE_AGENT_SUCCESS";
export const GET_SINGLE_AGENT_ERR = "GET_SINGLE_AGENT_ERR";

export const GET_AGENTS_SUCCESS = "GET_AGENTS_SUCCESS";
export const GET_AGENTS_ERR = "GET_AGENTS_ERR";

export const CREATE_AGENT_SUCCESS = "CREATE_AGENT_SUCCESS";
export const CREATE_AGENT_ERR = "CREATE_AGENT_ERR";

// Subscription
export const CREATE_SUBSCRIPTION_SUCCESS = "CREATE_SUBSCRIPTION_SUCCESS";
export const CREATE_SUBSCRIPTION_ERR = " CREATE_SUBSCRIPTION_ERR";

export const GET_SUBSCRIPTIONS_SUCCESS = "GET_SUBSCRIPTIONS_SUCCESS";
export const GET_SUBSCRIPTIONS_ERR = " GET_SUBSCRIPTIONS_ERR";

export const GET_SUBSCRIPTION_DETAIL_SUCCESS =
  "GET_SUBSCRIPTION_DETAIL_SUCCESS";
export const GET_SUBSCRIPTION_DETAIL_ERR = " GET_SUBSCRIPTION_DETAIL_ERR";
export const VERIFY_SUBSCRIPTION_CREATE_SUCCESS =
  "VERIFY_SUBSCRIPTION_CREATE_SUCCESS";
export const VERIFY_SUBSCRIPTION_CREATE_ERR = "VERIFY_SUBSCRIPTION_CREATE_ERR";
export const SAVE_AS_DRAFT = "SAVE_AS_DRAFT";
export const GET_SUBSCRIPTION_DETAIL = "GET_SUBSCRIPTION_DETAIL";
export const GET_SUBSCRIPTION_DRAFTS  = "GET_SUBSCRIPTION_DRAFTS ";
export const GET_SUBSCRIPTION_DRAFTS_BY_ID = "GET_SUBSCRIPTION_DRAFTS_BY_ID";
export const UPDATE_SUBSCRIPTION_DRAFTS = "UPDATE_SUBSCRIPTION_DRAFTS ";

//Withdraw Reqeust
export const GET_WITHDRAW_REQUEST = "GET_WITHDRAW_REQUEST";
export const APPROVE_WITHDRAW_SUCCESS = "APPROVE_WITHDRAW_SUCCESS";
export const APPROVE_WITHDRAW_ERROR = "APPROVE_WITHDRAW_ERROR";
export const REJECT_WITHDRAW = "REJECT_WITHDRAW";
export const REJECTED_DATA = "REJECTED_DATA";

export const APPROVED_REQUESTS = "APPROVED_REQUESTS";
export const SINGLE_APPROVED = "SINGLE_APPROVED";