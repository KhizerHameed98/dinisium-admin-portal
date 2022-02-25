//Auth
export {
  login,
  loadUser,
  verifyEmail,
  verifySms,
  verifyGoogle,
  logout,
  updateProfile,
  emailAuthentiactionOn,
  googleAuthentiactionOn,
  smsAuthentiactionOn,
  updatePassword,
} from "../../Services/authServices";

//Dashboard
export {
  countItoElections,
  countItoRegisteredUsers,
  countItoExchangeOrders,
  countInvestmentPerMonth,
  countRegiteredUsersPerMonth,
  countExchangeOrdersPerDay,
  countItoSeries,
  getTokensMarketcap,
  getSoldTokensGraph,
  getAllTokensDefaultData,
} from "../../Services/dashboardServices";

//KYC Management
export {
  getSingleApprovedKyc,
  getPendingKyc,
  getApprovedKyc,
  getRejectedKyc,
  getKycById,
  updateKycStatus,
  getKycbyId,
} from "../../Services/kycServices";

// ITO Management
export {
  getUnAssignedAdminsToItos,
  getAllAdminToAssignItos,
  createIto,
  getAssetsByStatus,
  createItoSeries,
  getAssignedItos,
  getOngoingItoSeries,
  getUpcomingItoSeries,
  getPastItoSeries,
  getItoSeriesById,
  getAssignedItoById,
  updateOnholdStatusIto,
  makeItoCloseRequest,
  verifyItoClosedRequest,
  verifyItoCreation,
  verifySeriesCreation,
  updateSeriesSupplyRequest,
  verifySeriesSupplyUpdation,
  makeTokenTradeable,
  generateUpdateTokenRequest,
  verifyTokenUpdationRequest,
  generateUpdateBackAssetRequest,
  verifyBackAssetUpdationRequest,
  saveIto,
  getDraftIto ,
  getUpdateDraftsItos,
  updateDraft,
  saveAsDraftSeries ,
  getSeriesDraft,
  getSeriesDraftById,
  updateSeriesDraft
} from "../../Services/itoServices";

// Asset Management
export {
  addNewAsset,
  getAllAssets,
  getAssetDetail,
  updateAsset,
  verifyUpdateRequest,
  getPendingList,
  getApprovedList,
  getRejectedList,
} from "../../Services/assetManagementServices";

// Exchange
export {
  getBuyRequestsList,
  getSellRequestsList,
  approveOrderRequest,
  getCompletedOrdersList,
  getExchangeableTokens,
  isTokenSelected,
  getTokenDetailById,
  getOngoingSeriesById,
  isSeriesSelected,
  getExhangeOrders,
  RejectOrder,
  ApproveOrder,
  getTokenPriceHistory,
  getTokenIdForPriceHistory,
  getCandlestickTablePrice,
} from "../../Services/exchangeServices";

// Admin Management
export {
  getSubAdminsByItoId,
  getSubAdminById,
  getAdminsById,
  getAvailableITO,
  addNewAdmin,
  deleteAdmin,
  adminLinkITO,
  getAllPermissions,
  assignPermission,
} from "../../Services/adminManagementServices";

// Wallet
export {
  depositPayment,
  getTokentList,
  getWalletDetails,
} from "../../Services/walletService";

// adminRequest
export {
  confrimDeposite,
  getDepositesList,
  getDepositesById,
  getAllDepositesList,
  getSingleApprovedList,
} from "../../Services/adminRequest";

// User Management
export {
  getUsersList,
  getUserProfile,
  getInvestmentDetailByUserId,
  userBlockUnBlock,
  getUserCount,
  getUserTotalCount,
} from "../../Services/userManagement";

// Agent Management
export {
  registerAgent,
  getAllAgents,
  creatAgent,
  getAllInvestor,
  getSingleAgent,
  getAgentInvestor,
} from "../../Services/agentManagementServices";

// VOting
export {
  getOngoingVoting,
  getClosedVoting,
  getOnlyClosedVoting,
  getUpcomingVoting,
  getVoteDetailById,
  creatVote,
  getAllITO,
  castVote,
  getVoteStatus,
} from "../../Services/votingServices";

// userWallet
export { getAllUserWallet } from "../../Services/userWalletServices";

//Subscriptions
export {
  createSubscription,
  getSubscriptions,
  getSubscriptionById,
  verifySubscriptionCreation,
  saveAsDraft,
  getSubscriptionDetaill,
  subscriptionDrafts ,
  updateSubscriptionsDraft
} from "../../Services/subscription";

//Withdraw Request

export { getWithdrawRequest } from "../../Services/getWithdrawRequest";

export { approveWithdraw } from "../../Services/approveWithdraw";

export { approvedRequests } from "../../Services/approvedRequests";

export { RejectedData } from "../../Services/rejectWithdraw";
