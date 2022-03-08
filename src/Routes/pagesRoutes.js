import React from "react";
//import ViewDetail from "../Components/RequestWithdraw/PendingRequest/ViewDetails/ViewDetail";
import Route from "../Constants/browserRoutes";

import ApprovedRequests from "../Components/CommonComponents/ApprovedRequests";

// const ApprovedRequestss  = React.lazy(() => {
//   import("../Components/CommonComponents/ApprovedRequests")
// })

const Dashboard = React.lazy(() => import("../Components/Dashboard"));

const UserManagement = React.lazy(() =>
  import("../Components/UserManagement/ListofAllUsers/index")
);
const UserDetails = React.lazy(() =>
  import("../Components/UserManagement/UserDetails/index")
);
const InvestmentDetails = React.lazy(() =>
  import("./../Components/UserManagement/InvestmentDetails")
);

const Wallet = React.lazy(() => import("../Components/Wallet"));
const RequestWithdraw = React.lazy(() =>
  import("../Components/RequestWithdraw/RequestWithdraw")
);

const KycManagement = React.lazy(() => import("../Components/KycManagement"));
const RequestStatus = React.lazy(() =>
  import("../Components/KycManagement/RequestStatus")
);

const Exchange = React.lazy(() => import("../Components/Exchange"));

const CompletedOrder = React.lazy(() =>
  import("./../Components/Exchange/CompletedOrders/index")
);

const Voting = React.lazy(() => import("./../Components/Voting/index"));
const VotingDetails = React.lazy(() =>
  import("../Components/Voting/CommonComponents/votingDetails")
);
const CreateNewVote = React.lazy(() =>
  import("./../Components/Voting/CreateNewVote/index")
);
const PastVotingList = React.lazy(() =>
  import("./../Components/Voting/PastVotingList/index")
);

const ItoManagement = React.lazy(() => import("../Components/ItoManagement"));
const ItoDetails = React.lazy(() =>
  import("../Components/ItoManagement/ItoDetails")
);
const ItoSeriesDetails = React.lazy(() =>
  import("../Components/ItoManagement/SeriesDetails")
);

const CreateNewIto = React.lazy(() =>
  import("../Components/ItoManagement/CreateNewIto")
);
const AssetManagement = React.lazy(() =>
  import("../Components/AssetManagement")
);
const AssetDetail = React.lazy(() =>
  import("../Components/AssetManagement/AssetListing/AssetDetail")
);
const AddNewAsset = React.lazy(() =>
  import("../Components/AssetManagement/AddNewAsset")
);
const CreateNewSeries = React.lazy(() =>
  import("../Components/ItoManagement/CreateNewSeries")
);

const AdminManagement = React.lazy(() =>
  import("./../Components/AdminManagement/index")
);
const SubAdminDetails = React.lazy(() =>
  import("../Components/AdminManagement/SubAdminDetails/index")
);
const AddNewSubAdmin = React.lazy(() =>
  import("./../Components/AdminManagement/AddNewSubAdmin")
);

const UserWallet = React.lazy(() => import("./../Components/UserWallet/index"));
const UserWalletDetails = React.lazy(() =>
  import("./../Components/UserWallet/UserWalletDetails/index")
);

const AgentManagement = React.lazy(() =>
  import("./../Components/AgentManagement/index")
);
const AgentDetails = React.lazy(() =>
  import("./../Components/AgentManagement/AgentDetails/index")
);
const AddNewAgent = React.lazy(() =>
  import("./../Components/AgentManagement/AddNewAgent/index")
);
const ContentManagement = React.lazy(() =>
  import("./../Components/ContentManagement/index")
);
const EditHome = React.lazy(() =>
  import("./../Components/ContentManagement/EditHome/index")
);

const EditAbout = React.lazy(() =>
  import("./../Components/ContentManagement/EditAbout/index")
);

const AdminRequset = React.lazy(() =>
  import("./../Components/AdminRequest/index")
);

const DepositeDetails = React.lazy(() =>
  import("../Components/AdminRequest/DepositeDetails/index")
);

const Profile = React.lazy(() => import("./../Components/Profile/index"));
const AddInvestor = React.lazy(() =>
  import("./../Components/AgentManagement/AddInvestor/index")
);

const EditProfile = React.lazy(() =>
  import("./../Components/Profile/EditProfile/index")
);

const CreateSubscription = React.lazy(() =>
  import("../Components/Subscription/CreateSubscription")
);
const Subscription = React.lazy(() => import("../Components/Subscription"));

// const ApprovedRequest  = React.lazy(() => {
//   import("../Components/CommonComponents/ApprovedRequest");
// })

const SubscriptionDetail = React.lazy(() =>
  import("../Components/Subscription/SubscriptionDetail")
);

const ViewDetails = React.lazy(() =>
  import("../Components/RequestWithdraw/PendingRequest/ViewDetails/ViewDetail")
);

const ViewDetailss = React.lazy(() =>
  import(
    "../Components/RequestWithdraw/SingleApprovedRequest/ViewDetailss/ViewDetails"
  )
);

const UpdateSeriesDrafts = React.lazy(() =>
  import("../Components/ItoManagement/SeriesDraft/UpdateDrafts")
);

const UpdateSubscriptionDraft = React.lazy(() =>
  import("../Components/Subscription/UpdateSubscription/UpdateSubscription")
);

const UpdateAssetDrafts = React.lazy(() =>
  import("../Components/AssetManagement/UpdateAssetDrafts/UpdateAssetDrafts")
);

const pageRoutes = [
  {
    path: Route.PROFILE,
    exact: true,
    name: "PROFILE",
    component: Profile,
    permissionName: "profile",
  },

  {
    path: Route.ADD_INVESTOR,
    exact: true,
    name: "AddInvestor",
    component: AddInvestor,
  },

  {
    path: Route.EDIT_PROFILE,
    exact: true,
    name: "EditProfile",
    component: EditProfile,
    permissionName: "profile",
  },

  {
    path: Route.ADMIN_REQUESTS,
    exact: true,
    name: "AdminRequset",
    component: AdminRequset,
    permissionName: "requests",
  },
  {
    path: Route.ADMIN_REQUESTS_DETAILS,
    exact: true,
    name: "DepositeDetails",
    component: DepositeDetails,
    permissionName: "requests",
  },
  {
    path: Route.DASHBOARD,
    exact: true,
    name: "Dashboard",
    component: Dashboard,
    permissionName: "dashboard",
  },
  {
    path: Route.AGENT_MANAGEMENT,
    exact: true,
    name: "AgentManagement",
    component: AgentManagement,
    permissionName: "agentManagement",
  },
  {
    path: Route.ADD_NEW_AGENT,
    exact: true,
    name: "AddNewAgent",
    component: AddNewAgent,
    permissionName: "agentManagement",
  },
  {
    path: Route.AGENT_DETAILS,
    exact: true,
    name: "AgentDetails",
    component: AgentDetails,
    permissionName: "agentManagement",
  },
  {
    path: Route.CONTENT_MANAGEMENT,
    exact: true,
    name: "ContentManagement",
    component: ContentManagement,
    permissionName: "contentManagement",
  },
  {
    path: Route.EDIT_HOME,
    exact: true,
    name: "EditHome",
    component: EditHome,
    permissionName: "contentManagement",
  },
  {
    path: Route.EDIT_ABOUT,
    exact: true,
    name: "EditAbout",
    component: EditAbout,
    permissionName: "contentManagement",
  },
  {
    path: Route.USER_MANAGEMENT,
    exact: true,
    name: "UserManagement",
    component: UserManagement,
    permissionName: "userManagement",
  },

  {
    path: Route.USER_DETAILS,
    exact: true,
    name: "UserDetails",
    component: UserDetails,
    permissionName: "userManagement",
  },

  {
    path: Route.ADD_INVESTOR,
    exact: true,
    name: "AddInvestor",
    component: AddInvestor,
  },

  {
    path: Route.WALLET,
    exact: true,
    name: "Wallet",
    component: Wallet,
    permissionName: "wallet",
  },

  {
    path: Route.REQUEST_WITHDRAW,
    exact: true,
    name: "RequestWithdraw",
    component: RequestWithdraw,
    permissionName: "RequestWithdraw",
  },

  {
    path: Route.KYC_MANAGEMENT,
    exact: true,
    name: "KycManagement",
    component: KycManagement,
    permissionName: "kyc",
  },

  {
    path: Route.WITHDRAW_REQUEST_VIEWDETAIL,
    component: ViewDetails,
    exact: true,
    name: "View Details",
  },

  {
    path: Route.SINGLE_APPROVE_REQUEST_VIEWDETAIL,
    component: ViewDetailss,
    exact: true,
    name: "View Details",
  },

  {
    path: Route.REQUEST_STATUS,
    exact: true,
    name: "RequestStatus",
    component: RequestStatus,
    permissionName: "kyc",
  },

  {
    path: Route.EXCHANGE,
    exact: true,
    name: "Exchange",
    component: Exchange,
    permissionName: "exchange",
  },

  {
    path: Route.COMPLETED_ORDERS,
    exact: true,
    name: "CompletedOrder",
    component: CompletedOrder,
    permissionName: "exchange",
  },

  {
    path: Route.VOTING,
    exact: true,
    name: "Voting",
    component: Voting,
    permissionName: "voting",
  },
  {
    path: Route.CREATE_NEW_VOTE,
    exact: true,
    name: "CreateNewVote",
    component: CreateNewVote,
    permissionName: "voting",
  },
  {
    path: Route.PAST_VOTING_LIST,
    exact: true,
    name: "PastVotingList",
    component: PastVotingList,
    permissionName: "voting",
  },
  {
    path: Route.VOTING_DETAILS,
    exact: true,
    name: "VotingDetails",
    component: VotingDetails,
    permissionName: "voting",
  },
  {
    path: Route.ITO_MANAGEMENT,
    exact: true,
    name: "ItoManagement",
    component: ItoManagement,
    permissionName: "ito",
  },

  {
    path: Route.UPDATE_SERIES_DRAFT,
    exact: true,
    component: UpdateSeriesDrafts,
  },

  {
    path: [Route.CREATE_NEW_ITO, Route.CREATE_ITO_FOR_SUBSCIRPTION],
    exact: true,
    name: "CreateNewIto",
    component: CreateNewIto,
    permissionName: "ito",
  },

  {
    path: Route.UPDATE_SUBSCRIPTION_DRAFT,
    exact: true,
    component: UpdateSubscriptionDraft,
  },
  {
    path: Route.UPDATE_DRAFT,
    exact: true,
    name: "Update Draft",
    component: CreateNewIto,
    permissionName: "ito",
  },
  {
    path: Route.CREATE_NEW_SERIES,
    exact: true,
    name: "CreateNewSeries",
    component: CreateNewSeries,
    permissionName: "ito",
  },
  {
    path: Route.ITO_MANAGEMENT_DETAILS,
    exact: true,
    name: "ItoDetails",
    component: ItoDetails,
    permissionName: "ito",
  },
  {
    path: Route.SERIES_DETAILS,
    exact: true,
    name: "ItoSeriesDetails",
    component: ItoSeriesDetails,
    permissionName: "ito",
  },

  {
    path: Route.ASSET_MANAGEMENT,
    exact: true,
    name: "AssetManagement",
    component: AssetManagement,
    permissionName: "assetManagement",
  },
  {
    path: Route.UPDATE_ASSET_DRAFT,
    exact: true,
    name: "AssetManagement",
    component: UpdateAssetDrafts,
  },
  {
    path: Route.ASSET_MANAGEMENT_DETAILS,
    exact: true,
    name: "AssetDetail",
    component: AssetDetail,
    permissionName: "assetManagment",
  },
  {
    path: Route.ADD_NEW_ASSET,
    exact: true,
    name: "AddNewAsset",
    component: AddNewAsset,
    permissionName: "assetManagement",
  },
  {
    path: Route.ADMIN_MANAGEMENT,
    exact: true,
    name: "AdminManagement",
    component: AdminManagement,
    permissionName: "adminManagement",
  },
  {
    path: Route.ADD_NEW_SUB_ADMIN,
    exact: true,
    name: "AddNewSubAdmin",
    component: AddNewSubAdmin,
    permissionName: "adminManagement",
  },
  {
    path: Route.ADMIN_DETAILS,
    exact: true,
    name: "SubAdminDetails",
    component: SubAdminDetails,
    permissionName: "adminManagement",
  },
  {
    path: Route.USER_WALLET,
    exact: true,
    name: "User Wallet",
    component: UserWallet,
    permissionName: "userWallet",
  },
  {
    path: Route.USER_WALLET_DETAILS,
    exact: true,
    name: "User Wallet",
    component: UserWalletDetails,
    permissionName: "userWallet",
  },
  {
    path: Route.SUBSCRIPTION,
    exact: true,
    name: "Subscription",
    component: Subscription,
    permissionName: "subscription",
  },
  {
    path: Route.CREATE_SUBSCRIPTION,
    exact: true,
    name: "Create Subscription",
    component: CreateSubscription,
    permissionName: "subscription",
  },
  {
    path: Route.SUBSCRIPTION_DETAIL,
    exact: true,
    name: "Subscription Detail",
    component: SubscriptionDetail,
    permissionName: "subscription",
  },
  {
    path: Route.APPROVED_REQUEST,
    exact: true,
    name: "ApprovedRequest",
    component: ApprovedRequests,
    permissionName: "ito",
  },
];

export default pageRoutes;
