(this["webpackJsonpsuper-admin-frontend"]=this["webpackJsonpsuper-admin-frontend"]||[]).push([[48],{965:function(e,t,a){"use strict";a.r(t);var s=a(24),r=a(1),c=a(10),n=a(2),l=a(13),o=a(20),i=a(3);t.default=Object(l.b)((function(e){return{profileData:e.auth}}),{updateProfile:o.xb})((function(e){var t,a,l,o,d=e.updateProfile,u=e.profileData,m=Object(n.useState)(!1),j=Object(c.a)(m,2),b=j[0],v=j[1],O=Object(n.useState)(!1),f=Object(c.a)(O,2),h=f[0],p=f[1],N=Object(n.useState)({fname:(null===u||void 0===u||null===(t=u.userDetails)||void 0===t?void 0:t.fname)||"",lname:(null===u||void 0===u||null===(a=u.userDetails)||void 0===a?void 0:a.lname)||"",contact_no:(null===u||void 0===u||null===(l=u.userDetails)||void 0===l?void 0:l.contact_no)||"",country:(null===u||void 0===u||null===(o=u.userDetails)||void 0===o?void 0:o.country)||""}),x=Object(c.a)(N,2),g=x[0],y=x[1];console.log("Profile data==========>",u);var C=u.userDetails.id,D=g.fname,q=g.lname,S=g.contact_no,w=g.country,F=function(e){y(Object(r.a)(Object(r.a)({},g),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(i.jsx)("div",{className:"col-12 col-md-8 offset-md-2",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)("div",{className:"card mb-4",children:Object(i.jsx)("div",{className:"card-body p-5",children:Object(i.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""===D||""===q||""===S||""===w?v(!0):(v(!1),p(!0),d({formData:g,id:C,setFormData:y,setLoading:p}))},children:[Object(i.jsxs)("div",{className:"form-group row",children:[Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"First Name"}),Object(i.jsx)("input",{type:"text",placeholder:"First Name",className:"form-control",name:"fname",value:D,onChange:function(e){return F(e)},required:!0}),b&&""===D?Object(i.jsxs)("div",{className:"error-msg",children:[" ","First Name is required"," "]}):null]})}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Last Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Last Name",className:"form-control",name:"lname",value:q,onChange:function(e){return F(e)},required:!0}),b&&""===q?Object(i.jsx)("div",{className:"error-msg",children:" Last Name is required "}):null]})}),Object(i.jsxs)("div",{className:"col-sm-6",children:[Object(i.jsx)("label",{children:"Contact No"}),Object(i.jsx)("input",{type:"number",placeholder:"Contact No",className:"form-control",name:"contact_no",value:S,onChange:function(e){return F(e)},required:!0}),b&&""===S?Object(i.jsx)("div",{className:"error-msg",children:" Contact No is required "}):null]}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Country"}),Object(i.jsx)("input",{type:"text",placeholder:"Country",className:"form-control",name:"country",value:w,onChange:function(e){return F(e)},required:!0}),b&&""===w?Object(i.jsx)("div",{className:"error-msg",children:" Country is required "}):null]})})]}),Object(i.jsxs)("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:h,children:[h&&Object(i.jsx)("span",{className:"spinner-border spinner-border-sm"})," ","SUBMIT"]})]})})})})})})}))}}]);
//# sourceMappingURL=48.886283b0.chunk.js.map