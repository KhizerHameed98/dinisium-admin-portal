(this["webpackJsonpsuper-admin-frontend"]=this["webpackJsonpsuper-admin-frontend"]||[]).push([[28],{239:function(e,t,a){"use strict";t.a={itemsPerScreen:5,userPerScreen:10}},859:function(e,t,a){"use strict";a(2);var o=a(3);t.a=function(e){var t=e.investmentDetailsData;return Object(o.jsxs)(o.Fragment,{children:[console.log(t),Object(o.jsx)("td",{children:null===t||void 0===t?void 0:t.ito_name}),Object(o.jsx)("td",{children:null===t||void 0===t?void 0:t.balance})]})}},879:function(e,t,a){"use strict";var o=a(12),n=a(46),i=a(2),r=a(29),c=a(115),s=a(34),l=a(10),d=a(179);var u=a(139),p=a(126),b=a(993),m=a(140),h=Object(m.a)(i.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),g=Object(m.a)(i.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),v=Object(m.a)(i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),j=Object(m.a)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),O=a(121),f=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.color,l=void 0===s?"standard":s,d=e.component,u=e.disabled,m=void 0!==u&&u,f=e.page,y=e.selected,x=void 0!==y&&y,C=e.shape,N=void 0===C?"round":C,k=e.size,P=void 0===k?"medium":k,B=e.type,$=void 0===B?"page":B,z=e.variant,M=void 0===z?"text":z,S=Object(n.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),w=("rtl"===Object(p.a)().direction?{previous:j,next:v,last:h,first:g}:{previous:v,next:j,first:h,last:g})[$];return"start-ellipsis"===$||"end-ellipsis"===$?i.createElement("div",{ref:t,className:Object(r.a)(a.root,a.ellipsis,m&&a.disabled,"medium"!==P&&a["size".concat(Object(O.a)(P))])},"\u2026"):i.createElement(b.a,Object(o.a)({ref:t,component:d,disabled:m,focusVisibleClassName:a.focusVisible,className:Object(r.a)(a.root,a.page,a[M],a[N],c,"standard"!==l&&a["".concat(M).concat(Object(O.a)(l))],m&&a.disabled,x&&a.selected,"medium"!==P&&a["size".concat(Object(O.a)(P))])},S),"page"===$&&f,w?i.createElement(w,{className:a.icon}):null)})),y=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(u.a)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(u.a)(e.palette.primary.main,.5)),backgroundColor:Object(u.a)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.a)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(u.a)(e.palette.secondary.main,.5)),backgroundColor:Object(u.a)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.a)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(f);function x(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var C=i.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,c=e.className,u=e.color,p=void 0===u?"standard":u,b=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),m=void 0===b?x:b,h=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),g=void 0===h?function(e){return i.createElement(y,e)}:h,v=e.shape,j=void 0===v?"round":v,O=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),f=void 0===O?"medium":O,C=e.variant,N=void 0===C?"text":C,k=Object(n.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,i=e.componentName,r=void 0===i?"usePagination":i,c=e.count,u=void 0===c?1:c,p=e.defaultPage,b=void 0===p?1:p,m=e.disabled,h=void 0!==m&&m,g=e.hideNextButton,v=void 0!==g&&g,j=e.hidePrevButton,O=void 0!==j&&j,f=e.onChange,y=e.page,x=e.showFirstButton,C=void 0!==x&&x,N=e.showLastButton,k=void 0!==N&&N,P=e.siblingCount,B=void 0===P?1:P,$=Object(n.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),z=Object(d.a)({controlled:y,default:b,name:r,state:"page"}),M=Object(l.a)(z,2),S=M[0],w=M[1],L=function(e,t){y||w(t),f&&f(e,t)},E=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},I=E(1,Math.min(a,u)),R=E(Math.max(u-a+1,a+1),u),D=Math.max(Math.min(S-B,u-a-2*B-1),a+2),F=Math.min(Math.max(S+B,a+2*B+2),R[0]-2),V=[].concat(Object(s.a)(C?["first"]:[]),Object(s.a)(O?[]:["previous"]),Object(s.a)(I),Object(s.a)(D>a+2?["start-ellipsis"]:a+1<u-a?[a+1]:[]),Object(s.a)(E(D,F)),Object(s.a)(F<u-a-1?["end-ellipsis"]:u-a>a?[u-a]:[]),Object(s.a)(R),Object(s.a)(v?[]:["next"]),Object(s.a)(k?["last"]:[])),T=function(e){switch(e){case"first":return 1;case"previous":return S-1;case"next":return S+1;case"last":return u;default:return null}},A=V.map((function(e){return"number"===typeof e?{onClick:function(t){L(t,e)},type:"page",page:e,selected:e===S,disabled:h,"aria-current":e===S?"true":void 0}:{onClick:function(t){L(t,T(e))},type:e,page:T(e),selected:!1,disabled:h||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?S>=u:S<=1)}}));return Object(o.a)({items:A},$)}(Object(o.a)({},e,{componentName:"Pagination"})),B=P.items;return i.createElement("nav",Object(o.a)({"aria-label":"pagination navigation",className:Object(r.a)(a.root,c),ref:t},k),i.createElement("ul",{className:a.ul},B.map((function(e,t){return i.createElement("li",{key:t},g(Object(o.a)({},e,{color:p,"aria-label":m(e.type,e.page,e.selected),shape:j,size:f,variant:N})))}))))}));t.a=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(C)},995:function(e,t,a){"use strict";a.r(t);var o=a(10),n=a(2),i=a(879),r=a(239),c=a(859),s=a(20),l=a(13),d=a(3);t.default=Object(l.b)((function(e){return{userManagement:e.userManagement}}),{getInvestmentDetailByUserId:s.L})((function(e){var t=e.match,a=e.userManagement.investmentDetail.data,s=(e.getInvestmentDetailByUserId,Object(n.useState)(1)),u=Object(o.a)(s,2),p=u[0],b=u[1],m=Object(n.useState)(0),h=Object(o.a)(m,2),g=h[0],v=h[1],j=a&&a.length;console.log("Investmnt Details Items===========",a),Object(n.useEffect)((function(){j%r.a.userPerScreen===0?v(Math.floor(j/r.a.userPerScreen)):v(Math.floor(j/r.a.userPerScreen)+1)}),[j]);Object(l.c)();return console.log(t.params.id),Object(n.useEffect)((function(){}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col-12 col-md-10 offset-md-1",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-12",children:[Object(d.jsx)("div",{className:"sec-heading py-3",children:Object(d.jsx)("h4",{className:"tbl-small-heading mb-0",children:"Investment Details"})}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"table-responsive",children:[Object(d.jsx)("table",{className:"table hover dils-table fn-500",style:{marginTop:"0",width:"100%",cellspacing:"0"},children:Object(d.jsx)("tbody",{children:a&&a.length>0&&a.slice(p*r.a.userPerScreen-r.a.userPerScreen,r.a.userPerScreen*p).filter((function(e){return"0"!=e.balance})).map((function(e,t){return Object(d.jsx)("tr",{children:Object(d.jsx)(c.a,{investmentDetailsData:e})},t)}))})}),!a||a&&0===a.length&&Object(d.jsx)("h2",{className:"text-center",children:"No Record Found"})]}),Object(d.jsx)("div",{style:{marginBottom:"5px"},children:Object(d.jsx)(i.a,{count:g,shape:"rounded",screen:p,onChange:function(e,t){b(t)},showFirstButton:!0,showLastButton:!0})})]})]})})})})}))}}]);
//# sourceMappingURL=28.9559bdea.chunk.js.map