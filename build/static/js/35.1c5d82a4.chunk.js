(this["webpackJsonpsuper-admin-frontend"]=this["webpackJsonpsuper-admin-frontend"]||[]).push([[35],{239:function(e,t,a){"use strict";t.a={itemsPerScreen:5,userPerScreen:10}},879:function(e,t,a){"use strict";var o=a(12),n=a(46),i=a(2),r=a(29),c=a(115),s=a(34),l=a(10),d=a(179);var b=a(139),u=a(126),p=a(993),m=a(140),h=Object(m.a)(i.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),j=Object(m.a)(i.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),g=Object(m.a)(i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),O=Object(m.a)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),v=a(121),f=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.color,l=void 0===s?"standard":s,d=e.component,b=e.disabled,m=void 0!==b&&b,f=e.page,x=e.selected,y=void 0!==x&&x,N=e.shape,C=void 0===N?"round":N,k=e.size,L=void 0===k?"medium":k,S=e.type,P=void 0===S?"page":S,B=e.variant,$=void 0===B?"text":B,w=Object(n.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),z=("rtl"===Object(u.a)().direction?{previous:O,next:g,last:h,first:j}:{previous:g,next:O,first:h,last:j})[P];return"start-ellipsis"===P||"end-ellipsis"===P?i.createElement("div",{ref:t,className:Object(r.a)(a.root,a.ellipsis,m&&a.disabled,"medium"!==L&&a["size".concat(Object(v.a)(L))])},"\u2026"):i.createElement(p.a,Object(o.a)({ref:t,component:d,disabled:m,focusVisibleClassName:a.focusVisible,className:Object(r.a)(a.root,a.page,a[$],a[C],c,"standard"!==l&&a["".concat($).concat(Object(v.a)(l))],m&&a.disabled,y&&a.selected,"medium"!==L&&a["size".concat(Object(v.a)(L))])},w),"page"===P&&f,z?i.createElement(z,{className:a.icon}):null)})),x=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(b.a)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(b.a)(e.palette.primary.main,.5)),backgroundColor:Object(b.a)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(b.a)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(b.a)(e.palette.secondary.main,.5)),backgroundColor:Object(b.a)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(b.a)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(f);function y(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var N=i.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,c=e.className,b=e.color,u=void 0===b?"standard":b,p=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),m=void 0===p?y:p,h=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),j=void 0===h?function(e){return i.createElement(x,e)}:h,g=e.shape,O=void 0===g?"round":g,v=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),f=void 0===v?"medium":v,N=e.variant,C=void 0===N?"text":N,k=Object(n.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,i=e.componentName,r=void 0===i?"usePagination":i,c=e.count,b=void 0===c?1:c,u=e.defaultPage,p=void 0===u?1:u,m=e.disabled,h=void 0!==m&&m,j=e.hideNextButton,g=void 0!==j&&j,O=e.hidePrevButton,v=void 0!==O&&O,f=e.onChange,x=e.page,y=e.showFirstButton,N=void 0!==y&&y,C=e.showLastButton,k=void 0!==C&&C,L=e.siblingCount,S=void 0===L?1:L,P=Object(n.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),B=Object(d.a)({controlled:x,default:p,name:r,state:"page"}),$=Object(l.a)(B,2),w=$[0],z=$[1],E=function(e,t){x||z(t),f&&f(e,t)},M=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},R=M(1,Math.min(a,b)),A=M(Math.max(b-a+1,a+1),b),T=Math.max(Math.min(w-S,b-a-2*S-1),a+2),I=Math.min(Math.max(w+S,a+2*S+2),A[0]-2),W=[].concat(Object(s.a)(N?["first"]:[]),Object(s.a)(v?[]:["previous"]),Object(s.a)(R),Object(s.a)(T>a+2?["start-ellipsis"]:a+1<b-a?[a+1]:[]),Object(s.a)(M(T,I)),Object(s.a)(I<b-a-1?["end-ellipsis"]:b-a>a?[b-a]:[]),Object(s.a)(A),Object(s.a)(g?[]:["next"]),Object(s.a)(k?["last"]:[])),F=function(e){switch(e){case"first":return 1;case"previous":return w-1;case"next":return w+1;case"last":return b;default:return null}},V=W.map((function(e){return"number"===typeof e?{onClick:function(t){E(t,e)},type:"page",page:e,selected:e===w,disabled:h,"aria-current":e===w?"true":void 0}:{onClick:function(t){E(t,F(e))},type:e,page:F(e),selected:!1,disabled:h||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?w>=b:w<=1)}}));return Object(o.a)({items:V},P)}(Object(o.a)({},e,{componentName:"Pagination"})),S=L.items;return i.createElement("nav",Object(o.a)({"aria-label":"pagination navigation",className:Object(r.a)(a.root,c),ref:t},k),i.createElement("ul",{className:a.ul},S.map((function(e,t){return i.createElement("li",{key:t},j(Object(o.a)({},e,{color:u,"aria-label":m(e.type,e.page,e.selected),shape:O,size:f,variant:C})))}))))}));t.a=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(N)},998:function(e,t,a){"use strict";a.r(t);var o=a(10),n=a(2),i=a(879),r=a(239),c=a(20),s=a(13),l=a(15),d=a(7),b=a(3),u=function(e){var t=e.item;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("td",{className:"fn-600",children:[Object(b.jsx)("div",{className:"icon-flex",children:Object(b.jsx)("div",{className:"icon-wrapper",children:Object(b.jsx)("i",{className:"fas fa-user"})})}),t&&t.fname+" "+t.lname]}),Object(b.jsx)("td",{className:"text-dr-blu",children:t&&t.email}),Object(b.jsx)("td",{children:t&&t.country}),Object(b.jsx)("td",{children:Object(b.jsx)(l.b,{className:"dls-btn bg-semi-black text-white",to:d.a.USER_WALLET_DETAILS_BTN+"".concat(t?t.id:d.a.BLANK_LINK),children:"VIEW DETAILS"})})]})};t.default=Object(s.b)((function(e){return{userWallet:e.userWallet}}),{getAllUserWallet:c.A})((function(e){var t=e.userWallet.allUsersList,a=e.getAllUserWallet,c=Object(n.useState)(1),s=Object(o.a)(c,2),l=s[0],d=s[1],p=Object(n.useState)(0),m=Object(o.a)(p,2),h=m[0],j=m[1],g=t&&t.length;return Object(n.useEffect)((function(){g%r.a.userPerScreen===0?j(Math.floor(g/r.a.userPerScreen)):j(Math.floor(g/r.a.userPerScreen)+1)}),[g,r.a.userPerScreen]),Object(n.useEffect)((function(){a()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"col-12 col-md-8 offset-md-2",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h4",{className:"tbl-small-heading",children:"LIST OF ALL USERS"})}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("div",{className:"table-responsive",children:[Object(b.jsxs)("table",{className:"table hover dils-table fn-500",style:{marginTop:"0",width:"100%",cellspacing:"0"},children:[Object(b.jsx)("thead",{className:"bg-cr-1 text-white",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Country"}),Object(b.jsx)("th",{})]})}),Object(b.jsx)("tbody",{children:t&&t.length>0&&t.slice(l*r.a.userPerScreen-r.a.userPerScreen,r.a.userPerScreen*l).map((function(e,t){return Object(b.jsx)("tr",{children:Object(b.jsx)(u,{item:e})},t)}))})]}),(!t||0===t.length)&&Object(b.jsx)("h4",{className:"text-center",children:"No Record Found"})]}),Object(b.jsx)("div",{style:{marginBottom:"5px"},children:Object(b.jsx)(i.a,{count:h,shape:"rounded",screen:l,onChange:function(e,t){d(t)},showFirstButton:!0,showLastButton:!0})})]})]})})})})}))}}]);
//# sourceMappingURL=35.1c5d82a4.chunk.js.map