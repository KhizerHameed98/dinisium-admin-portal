import { combineReducers } from "redux";
import auth from "./auth";
import kyc from "./kyc";
import ito from "./ito";
import assetManagement from "./assetManagement";
import exchange from "./exchange";
import admin from "./admin";
import wallet from "./wallet";
import adminRequest from "./adminRequest";
import userManagement from "./userManagement";
import agentManagement from "./agentManagement";
import voting from "./voting";
import userWallet from "./userWallet";
import dashboard from "./dashboard";
import subscription from "./subscription";
import getWithdrawRequest from "./getWithdrawRequest";
import approveWithdraw from "./approvewithdraw";
import singleapproved from "./singleapproved";
import approvedRequestss from "./approvedRequestss";
import userCount from "./userCount";
import rejectedWithdraw from "./rejectedWithdraw";

export default combineReducers({
  auth,
  kyc,
  exchange,
  ito,
  assetManagement,
  admin,
  wallet,
  adminRequest,
  userManagement,
  agentManagement,
  userWallet,
  voting,
  dashboard,
  subscription,
  getWithdrawRequest,
  approveWithdraw,
  userCount,
  singleapproved,
  userCount,
  approvedRequestss,
  rejectedWithdraw,
});
