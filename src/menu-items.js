import Route from "./Constants/browserRoutes";

const MenuItems = {
  items: [
    {
      id: "menuItems",
      // title: 'Users',
      type: "group",
      // icon: 'icon-navigation',
      children: [
        // {
        //   id: "dashboard",
        //   title: "Dashboard",
        //   type: "item",
        //   //type: "collapse" for dropdown on menu
        //   url: Route.DASHBOARD,
        //   icon: "fas fa-chart-line",
        //   breadcrumbs: true,
        //   permissionName: "dashboard",
        // },
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: Route.DASHBOARD,
          icon: "fas fa-chart-line",
          breadcrumbs: true,
          subItems: [
            {
              id: "   Profile",
              title: "   Profile",
              type: "subItem",
              url: Route.PROFILE,
              icon: "far fa-user",
              breadcrumbs: true,
              subItemsChildren: [
                {
                  id: "EditProfile",
                  title: "Edit Profile",
                  type: "subItemChild",
                  url: Route.EDIT_PROFILE,
                  breadcrumbs: true,
                },
              ],
            },
          ],
        },

        {
          id: "assetManagement",
          title: "Asset Management",
          type: "item",
          url: Route.ASSET_MANAGEMENT,
          icon: "far fa-handshake",
          breadcrumbs: true,
          permissionName: "assetManagement",
          subItems: [
            {
              id: "addNewAsset",
              title: "Add New Asset",
              type: "subItem",
              url: Route.ADD_NEW_ASSET,
              breadcrumbs: true,
              permissionName: "assetManagement",
            },
            {
              id: "assetDetail",
              title: "Asset Details",
              type: "subItem",
              url: Route.ASSET_MANAGEMENT_DETAILS,
              breadcrumbs: true,
              permissionName: "assetManagement",
            },
          ],
        },

        {
          id: "itoManagement",
          title: "ITO Management",
          type: "item",
          url: Route.ITO_MANAGEMENT,
          icon: "fas fa-poll-h",
          breadcrumbs: true,
          permissionName: "ito",
          subItems: [
            {
              id: "createNewIto",
              title: "Create New ITO",
              type: "subItem",
              url: Route.CREATE_NEW_ITO,
              breadcrumbs: true,
              permissionName: "ito",
            },
            {
              id: "createNewSeries",
              title: "Create New Series",
              type: "subItem",
              url: Route.CREATE_NEW_SERIES,
              breadcrumbs: true,
              permissionName: "ito",
            },
            {
              id: "itoDetails",
              title: "Ito Details",
              type: "subItem",
              url: Route.ITO_MANAGEMENT_DETAILS,
              breadcrumbs: true,
              permissionName: "ito",
            },
            {
              id: "seriesDetails",
              title: "Series Details",
              type: "subItem",
              url: Route.SERIES_DETAILS,
              breadcrumbs: true,
              permissionName: "ito",
            },
          ],
        },

        {
          id: "subscription",
          title: "Subscriptions",
          type: "item",
          url: Route.SUBSCRIPTION,
          icon: "fas fa-wallet",
          breadcrumbs: true,
          permissionName: "subscription",
          subItems: [
            {
              id: "createSubscription",
              title: "Create Subscription",
              type: "subItem",
              url: Route.CREATE_SUBSCRIPTION,
              breadcrumbs: true,
              permissionName: "subscription",
            },
            {
              id: "subscriptionDetail",
              title: "Subscription Detail",
              type: "subItem",
              url: Route.SUBSCRIPTION_DETAIL,
              breadcrumbs: true,
              permissionName: "subscription",
            },
            {
              id: "createNewItoForSubscription",
              title: "Create ITO",
              type: "subItem",
              url: Route.CREATE_ITO_FOR_SUBSCIRPTION,
              breadcrumbs: true,
              permissionName: "ito",
            },
          ],
        },

        {
          id: "requestwithdraw",
          title: "Withdraw Requests",
          type: "item",
          url: Route.REQUEST_WITHDRAW,
          icon: "fas fa-wallet",
          breadcrumbs: true,
          permissionName: "RequestWithdraw",
          // subItems: [
          //   {
          //     id: "requestStatus",
          //     title: "Request Status",
          //     type: "subItem",
          //     url: Route.WITHDRAW_REQUEST_VIEWDETAIL,
          //     breadcrumbs: true,
          //     permissionName: "RequestWithdraw",
          //   },
          // ],
        },

        {
          id: "exchange",
          title: "Marketplace",
          type: "item",
          url: Route.EXCHANGE,
          icon: "fas fa-sync",
          breadcrumbs: true,
          permissionName: "exchange",
          subItems: [
            {
              id: "CompletedOrder",
              title: "Completed Order",
              type: "subItem",
              url: Route.COMPLETED_ORDERS,
              breadcrumbs: true,
              permissionName: "exchange",
            },
          ],
        },

        {
          id: "kycManagement",
          title: "KYC Management",
          type: "item",
          url: Route.KYC_MANAGEMENT,
          icon: "far fa-comment-dots",
          breadcrumbs: true,
          permissionName: "kyc",
          subItems: [
            {
              id: "requestStatus",
              title: "Request Status",
              type: "subItem",
              url: Route.REQUEST_STATUS,
              breadcrumbs: true,
              permissionName: "kyc",
            },
          ],
        },

        {
          id: "userManagement",
          title: "User Management",
          type: "item",
          url: Route.USER_MANAGEMENT,
          icon: "far fa-user",
          breadcrumbs: true,
          permissionName: "userManagement",
          subItems: [
            {
              id: "userDetails",
              title: "User Details",
              type: "subItem",
              url: Route.USER_DETAILS,
              breadcrumbs: true,
              permissionName: "userManagement",
              subItemsChildren: [
                {
                  id: "investmentDetail",
                  title: "Investment Details",
                  type: "subItemChild",
                  url: Route.INVESTMENT_DETAILS,
                  breadcrumbs: true,
                },
              ],
            },
          ],
        },

        {
          id: "adminRequests",
          title: "Admin Requests",
          type: "item",
          url: Route.ADMIN_REQUESTS,
          icon: "fas fa-user-shield",
          breadcrumbs: true,
          permissionName: "requests",
          subItems: [
            {
              id: "requestDetails",
              title: "Request Details",
              type: "subItem",
              url: Route.ADMIN_REQUESTS_DETAILS,
              breadcrumbs: true,
              permissionName: "requests",
            },
          ],
        },

        {
          id: "voting",
          title: "Voting",
          type: "item",
          url: Route.VOTING,
          icon: "fas fa-poll-h",
          breadcrumbs: true,
          permissionName: "voting",
          subItems: [
            {
              id: "createNewVote",
              title: "Create New Election",
              type: "subItem",
              url: Route.CREATE_NEW_VOTE,
              breadcrumbs: true,
              permissionName: "voting",
            },
            {
              id: "pastVotingList",
              title: "Past Voting List",
              type: "subItem",
              url: Route.PAST_VOTING_LIST,
              breadcrumbs: true,
              permissionName: "voting",
            },
            {
              id: "votingDetails",
              title: "Voting Details",
              type: "subItem",
              url: Route.VOTING_DETAILS,
              breadcrumbs: true,
              permissionName: "voting",
            },
       
          ],
        },

        // {
        //   id: "profile",
        //   title: "Profile",
        //   // type: "item",
        //   url: Route.PROFILE,
        //   icon: "far fa-user",
        //   breadcrumbs: true,
        //   permissionName: "profile",
        //   subItems: [
        //     {
        //       id: "editProfile",
        //       title: "Edit Profile",
        //       type: "subItem",
        //       url: Route.EDIT_PROFILE,
        //       breadcrumbs: true,
        //       permissionName: "profile",
        //     },
        //   ],
        // },

        // {
        //   id: "UserWallet",
        //   title: "User Wallet",
        //   type: "item",
        //   url: Route.USER_WALLET,
        //   icon: "fas fa-wallet",
        //   breadcrumbs: true,
        // },

        // {
        //   id: "wallet",
        //   title: "Wallet",
        //   type: "item",
        //   url: Route.WALLET,
        //   icon: "fas fa-wallet",
        //   breadcrumbs: true,
        //   permissionName: "wallet",
        // },

        // {
        //   id: "agentManagement",
        //   title: "Agent Management",
        //   type: "item",
        //   url: Route.AGENT_MANAGEMENT,
        //   icon: "far fa-handshake",
        //   breadcrumbs: true,
        //   permissionName: "agentManagement",
        //   subItems: [
        //     {
        //       id: "addNewAgent",
        //       title: "Add New Agent",
        //       type: "subItem",
        //       url: Route.ADD_NEW_AGENT,
        //       breadcrumbs: true,
        //       permissionName: "agentManagement",
        //     },
        //     {
        //       id: "addInvestor",
        //       title: "Add Investor",
        //       type: "subItem",
        //       url: Route.ADD_INVESTOR,
        //       breadcrumbs: true,
        //     },
        //     {
        //       id: "AgentDetails",
        //       title: "Agent Details",
        //       type: "subItem",
        //       url: Route.AGENT_DETAILS,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        // {
        //   id: "adminManagement",
        //   title: "Admin Management",
        //   type: "item",
        //   url: Route.ADMIN_MANAGEMENT,
        //   icon: "fas fa-users-cog",
        //   breadcrumbs: true,
        //   permissionName: "adminManagement",
        //   subItems: [
        //     {
        //       id: "addNewAdmin",
        //       title: "Add Sub Admin",
        //       type: "subItem",
        //       url: Route.ADD_NEW_SUB_ADMIN,
        //       breadcrumbs: true,
        //     },
        //     {
        //       id: "adminDetails",
        //       title: "Admin Details",
        //       type: "subItem",
        //       url: Route.ADMIN_DETAILS,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        // {
        //   id: "ContentManagement",
        //   title: "Content Management",
        //   type: "item",
        //   url: Route.CONTENT_MANAGEMENT,
        //   icon: "fas fa-chalkboard-teacher",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "EditHome",
        //       title: "Edit Home",
        //       type: "subItem",
        //       url: Route.EDIT_HOME,
        //       breadcrumbs: true,
        //     },
        //     {
        //       id: "EditAbout",
        //       title: "Edit About",
        //       type: "subItem",
        //       url: Route.EDIT_ABOUT,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export default MenuItems;
