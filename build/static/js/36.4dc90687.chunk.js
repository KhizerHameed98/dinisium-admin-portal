(this["webpackJsonpsuper-admin-frontend"]=this["webpackJsonpsuper-admin-frontend"]||[]).push([[36],{237:function(e,t,c){"use strict";var n=c(1),s=(c(2),c(615)),a=c(616),i=c(617),l=c(429),o=c.n(l),r=c(280),d=c.n(r),j=c(14),b=c(15),h=c(3);t.a=function(e){var t=e.columns,c=e.data,l=e.RouteBtn,r=e.isViewDetailBtn,m=e.isViewIconBtn,x=e.RouteForIconBtn,u=e.title,O=(e.actionIcon,e.dispatchh,Object(j.g)()),f=u;return Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(a.a,{expandIcon:Object(h.jsx)(o.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(h.jsx)("h6",{style:{marginLeft:"1rem"},children:f})}),Object(h.jsx)(i.a,{children:Object(h.jsx)(d.a,{title:u,columns:t,data:c,actions:[Object(n.a)({},r&&{icon:"",tooltip:"View Details",onClick:function(e,t){e.preventDefault(),O.push("".concat(l).concat(null===t||void 0===t?void 0:t.id))}}),Object(n.a)({},m&&{icon:"Explore",tooltip:"Explore more",isFreeAction:!0})],components:{Action:function(e){return Object(h.jsxs)(h.Fragment,{children:["Explore"===e.action.icon&&Object(h.jsx)(b.b,{style:{margin:"20px",textDecoration:"underline",fontSize:"15px"},to:x,children:Object(h.jsx)("b",{children:"Explore More"})}),""===e.action.icon&&Object(h.jsx)("button",{onClick:function(t){return e.action.onClick(t,e.data)},className:"dls-btn bg-semi-black text-white width-max-content",children:"View Details"})]})}},options:{actionsColumnIndex:-1,headerStyle:{backgroundColor:"#0394FD",color:"#FFF"}},localization:{header:{actions:""}}})})]})})}},980:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(14),a=c(13),i=c(3),l=(Object(a.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.auth.userDetails.ito_token;return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("td",{className:"text-dr-blu",children:t&&t.token_name||""}),Object(i.jsxs)("td",{className:"fn-600",children:[t&&t.price||""," "]}),Object(i.jsx)("td",{children:t&&t.token_symbol||""}),Object(i.jsx)("td",{children:t&&t.supply||""})]})})),c(237)),o=[{title:"Token Name",field:"token_name"},{title:"Price",field:"supply"},{title:"Sybmol",field:"token_symbol"},{title:"Price",field:"price"}],r=Object(a.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.auth.userDetails.ito_token;return Object(i.jsx)("div",{className:"card",children:Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsx)(l.a,{data:t,columns:o,title:"YOUR TOKEN"})})})})),d=c(20),j=Object(a.b)((function(e){return{wallet:e.wallet}}),{getWalletDetails:d.ib})((function(e){var t=e.getWalletDetails,c=e.wallet.walletDetails;return Object(n.useEffect)((function(){t()}),[]),Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("div",{className:"card bg-cr-1 text-white mb-4",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("div",{className:"d-inline-block",children:[Object(i.jsxs)("p",{className:"dashboard-cd-amot font-30 fn-500",children:["$",c&&c.fiat_balances||0]}),Object(i.jsx)("span",{className:"dashboard-cd-blc",children:"FIAT BALANCE"})]}),Object(i.jsx)("div",{className:"dashboard-cd-icon d-inline-block float-right",children:Object(i.jsx)("i",{className:"far fa-chart-bar"})})]})})}),Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("div",{className:"card bg-cr-2 text-white mb-4",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("div",{className:"d-inline-block",children:[Object(i.jsxs)("p",{className:"dashboard-cd-amot font-30 fn-500",children:[" ",c&&c.tokens||0]}),Object(i.jsx)("span",{className:"dashboard-cd-blc",children:"TOKENS"})]}),Object(i.jsx)("div",{className:"dashboard-cd-icon d-inline-block float-right",children:Object(i.jsx)("i",{className:"fas fa-coins"})})]})})})]})}));t.default=Object(s.j)((function(e){e.history;return Object(i.jsx)("div",{className:"col-12 col-md-8 offset-md-2",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)(j,{})})}),Object(i.jsxs)("div",{className:"col-md-12",children:[Object(i.jsx)("div",{className:"sec-heading"}),Object(i.jsx)(r,{})]})]})})}))}}]);
//# sourceMappingURL=36.4dc90687.chunk.js.map