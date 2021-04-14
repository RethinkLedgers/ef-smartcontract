(this["webpackJsonpef-app"]=this["webpackJsonpef-app"]||[]).push([[0],{278:function(e,t,a){e.exports=a.p+"static/media/logo.4ac65da8.svg"},316:function(e,t,a){e.exports=a(553)},326:function(e,t){},328:function(e,t){},341:function(e,t){},343:function(e,t){},371:function(e,t){},372:function(e,t){},377:function(e,t){},379:function(e,t){},386:function(e,t){},405:function(e,t){},442:function(e){e.exports=JSON.parse('[{"identifier":"ledger-party-9e384d54-b5c6-495f-8a1c-f4341bf6f42c","displayName":"Originator","isLocal":true},{"identifier":"ledger-party-cc934b63-178b-4bdc-abaf-c840f2a54f09","displayName":"Business","isLocal":true},{"identifier":"ledger-party-833cc98d-61f5-4480-8afe-2a38949f0347","displayName":"Dealer","isLocal":true},{"identifier":"ledger-party-d07e5584-f978-4b1b-ac49-6037393effdf","displayName":"Lessor","isLocal":true}]')},553:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=a(614),i=a(615),s=a(6),u=a(41),m=a.n(u),p={palette:{primary:{main:"#536DFE",light:m()("#536DFE").lighten(7.5).toHexString(),dark:m()("#536DFE").darken(15).toHexString()},secondary:{main:"#FF5C93",light:m()("#FF5C93").lighten(7.5).toHexString(),dark:m()("#FF5C93").darken(15).toHexString(),contrastText:"#FFFFFF"},warning:{main:"#FFC260",light:m()("#FFC260").lighten(7.5).toHexString(),dark:m()("#FFC260").darken(15).toHexString()},success:{main:"#3CD4A0",light:m()("#3CD4A0").lighten(7.5).toHexString(),dark:m()("#3CD4A0").darken(15).toHexString()},info:{main:"#9013FE",light:m()("#9013FE").lighten(7.5).toHexString(),dark:m()("#9013FE").darken(15).toHexString()},text:{primary:"#4A4A4A",secondary:"#6E6E6E",hint:"#B9B9B9"},background:{default:"#F6F7FF",light:"#F3F5FF"}},customShadows:{widget:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetDark:"0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetWide:"0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"}},d=a(287),f={default:Object(d.a)(Object(s.a)(Object(s.a)({},p),{typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2rem"},h3:{fontSize:"1.64rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.285rem"},h6:{fontSize:"1.142rem"}}}))},y=a(170),b=a(51),g=a(18),E=a(276),C=window.location.host.split("."),h=C[0],k=C.slice(1);k.unshift("api");var v="https://"+k.join(".")+(window.location.port?":"+window.location.port:"")+"/data/"+h+"/",O=C.slice(1);O.unshift("login");var x=O.join(".")+(window.location.port?":"+window.location.port:"")+"/auth/login?ledgerId="+h,w=a(13),j=r.a.createContext({isAuthenticated:!1}),N=r.a.createContext({});function S(e,t){switch(t.type){case"LOGIN_SUCCESS":return{isAuthenticated:!0,token:t.token,party:t.party};case"LOGIN_FAILURE":case"SIGN_OUT_SUCCESS":return{isAuthenticated:!1}}}var F=function(e){var t=e.children,a=localStorage.getItem("ef-app.daml.party"),n=localStorage.getItem("ef-app.daml.token"),l=a&&n?{isAuthenticated:!0,token:n,party:a}:{isAuthenticated:!1},o=r.a.useReducer(S,l),c=Object(w.a)(o,2),i=c[0],s=c[1];return r.a.createElement(j.Provider,{value:i},r.a.createElement(N.Provider,{value:s},t))};function B(){var e=r.a.useContext(j);if(void 0===e)throw new Error("useUserState must be used within a UserProvider");return e}function A(){var e=r.a.useContext(N);if(void 0===e)throw new Error("useUserDispatch must be used within a UserProvider");return e}function I(e,t,a,n,r,l){if(l(!1),r(!0),t){var o=a||function(e){return E.sign({"https://daml.com/ledger-api":{ledgerId:h,applicationId:"ef-app",admin:!0,actAs:[e],readAs:[e]}},"secret")}(t);localStorage.setItem("ef-app.daml.party",t),localStorage.setItem("ef-app.daml.token",o),e({type:"LOGIN_SUCCESS",token:o,party:t}),l(!1),r(!1),n.push("/app")}else e({type:"LOGIN_FAILURE"}),l(!0),r(!1)}var T=function(){window.location.assign("https://".concat(x))};var D=a(590),R=a(290),L=a(94),z=a(592),W=a(616),q=a(589),U=Object(W.a)((function(e){return Object(q.a)({container:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0},paperRoot:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:e.spacing(8),paddingBottom:e.spacing(8),paddingLeft:e.spacing(6),paddingRight:e.spacing(6),maxWidth:404},errorCode:{marginBottom:e.spacing(5),fontSize:84,fontWeight:600},safetyText:{marginBottom:e.spacing(5),fontWeight:300,color:e.palette.text,textAlign:"center"},backButton:{textTransform:"none",fontSize:22}})})),P=function(){var e=U();return r.a.createElement(D.a,{container:!0,className:e.container},r.a.createElement(R.a,{classes:{root:e.paperRoot}},r.a.createElement(L.a,{variant:"h3",color:"primary",className:e.errorCode},"404"),r.a.createElement(L.a,{variant:"h5",color:"primary",className:e.safetyText},"Oops. Looks like the page you're looking for no longer exists"),r.a.createElement(z.a,{variant:"contained",color:"primary",component:b.b,to:"/",size:"large",className:e.backButton},"Back to Home")))},V=a(597),H=a(619),Y=a(291),M=Object(W.a)((function(e){return Object(q.a)({container:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0},logotypeContainer:{backgroundColor:e.palette.background.default,width:"60%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},logotypeImage:{width:165,marginBottom:e.spacing(4)},logotypeText:{color:"#3a478f",fontWeight:500,fontSize:64},formContainer:{width:"40%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},form:{width:320},tab:{fontWeight:400,fontSize:18},dablLoginButton:{marginBottom:e.spacing(2)},errorMessage:{textAlign:"center"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},textField:{borderBottomColor:e.palette.background.light},formButtons:{width:"100%",marginTop:e.spacing(4),display:"flex",justifyContent:"space-between",alignItems:"center"},loginLoader:{marginLeft:e.spacing(4)}})})),G=a(278),_=a.n(G),Q=Object(g.g)((function(e){var t=M(),a=A(),l=Object(n.useState)(!1),o=Object(w.a)(l,2),c=o[0],i=o[1],s=Object(n.useState)(!1),u=Object(w.a)(s,2),m=u[0],p=u[1],d=Object(n.useState)(""),f=Object(w.a)(d,2),y=f[0],b=f[1],g=Object(n.useState)(""),E=Object(w.a)(g,2),C=E[0],h=E[1];return r.a.createElement(D.a,{container:!0,className:t.container},r.a.createElement("div",{className:t.logotypeContainer},r.a.createElement("img",{src:_.a,alt:"logo",className:t.logotypeImage}),r.a.createElement(L.a,{className:t.logotypeText},"Smart Contracts for EF ")),r.a.createElement("div",{className:t.formContainer},r.a.createElement("div",{className:t.form},r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{in:m},r.a.createElement(L.a,{color:"secondary",className:t.errorMessage},"Something is wrong with your login or password :(")),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{className:t.dablLoginButton,variant:"contained",color:"primary",size:"large",onClick:T},"Log in with DABL"),r.a.createElement(L.a,null,"OR")),r.a.createElement(H.a,{id:"email",InputProps:{classes:{underline:t.textFieldUnderline,input:t.textField}},value:y,onChange:function(e){return b(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&I(a,y,C,e.history,i,p)},margin:"normal",placeholder:"Username",type:"email",fullWidth:!0}),r.a.createElement(H.a,{id:"password",InputProps:{classes:{underline:t.textFieldUnderline,input:t.textField}},value:C,onChange:function(e){return h(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&I(a,y,C,e.history,i,p)},margin:"normal",placeholder:"Password",type:"password",fullWidth:!0}),r.a.createElement("div",{className:t.formButtons},c?r.a.createElement(V.a,{size:26,className:t.loginLoader}):r.a.createElement(z.a,{disabled:0===y.length,onClick:function(){return I(a,y,C,e.history,i,p)},variant:"contained",color:"primary",size:"large"},"Login"))))))})),J=a(24),K=a.n(J),X=a(598),Z=a(599),$=a(600),ee=a(279),te=a.n(ee),ae=Object(W.a)((function(e){return Object(q.a)({logotype:{color:"white",marginLeft:e.spacing(2.5),marginRight:e.spacing(2.5),fontWeight:500,fontSize:18,whiteSpace:"nowrap"},appBar:{width:"100vw",zIndex:e.zIndex.drawer+1},toolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},grow:{flexGrow:1},headerMenuButton:{marginLeft:e.spacing(2),padding:e.spacing(.5)},headerIcon:{fontSize:28,color:"rgba(255, 255, 255, 0.35)"}})}));function ne(){var e=a(442);return{displayName:function(t){return void 0===t?"":(null===(a=e.filter((function(e){return e.identifier===t}))[0])||void 0===a?void 0:a.displayName)||t;var a},partyIdentifier:function(t){var a=e.filter((function(e){return e.displayName===t}));if(a===[])throw new Error("Party display name doesn't exist");return a[0].identifier},knownPartyDisplayNames:e.map((function(e){return e.displayName||e.identifier}))}}var re=Object(g.g)((function(e){var t=e.history,a=ae(),n=B(),l=A(),o=ne(),c=o.displayName;o.partyIdentifier,o.knownPartyDisplayNames;return r.a.createElement(X.a,{position:"fixed",className:a.appBar},r.a.createElement(Z.a,{className:a.toolbar},r.a.createElement(L.a,{variant:"h6",className:a.logotype},"DAML App Template"),r.a.createElement("div",{className:a.grow}),n.isAuthenticated&&r.a.createElement(L.a,{variant:"h6"},"User: ",c(n.party))," ",r.a.createElement($.a,{"aria-haspopup":"true",color:"inherit",className:a.headerMenuButton,"aria-controls":"profile-menu",onClick:function(e){return function(e,t){localStorage.removeItem("daml.party"),localStorage.removeItem("daml.token"),e({type:"SIGN_OUT_SUCCESS"}),t.push("/login")}(l,t)}},r.a.createElement(te.a,{className:a.headerIcon}))))})),le=a(622),oe=a(596),ce=a(556),ie=a(601),se=a(602),ue=a(93),me=a.n(ue),pe=Object(W.a)((function(e){return Object(q.a)({drawer:{width:250,flexShrink:0,whiteSpace:"nowrap"},toolbar:Object(s.a)({},e.mixins.toolbar),linkRoot:{},link:{textDecoration:"none","&:hover, &:focus":{backgroundColor:e.palette.background.light}},linkActive:{backgroundColor:e.palette.background.light},linkIcon:{marginRight:e.spacing(1),color:e.palette.text.secondary+"99",width:24,display:"flex",justifyContent:"center"},linkIconActive:{marginRight:e.spacing(1),width:24,display:"flex",justifyContent:"center",color:e.palette.primary.main},linkText:{padding:0,fontSize:16,color:e.palette.text.secondary+"CC"},linkTextActive:{padding:0,fontSize:16,color:e.palette.text.primary}})})),de=function(e){var t=e.path,a=e.icon,n=e.label,l=e.location,o=pe(),c=t&&(l.pathname===t||-1!==l.pathname.indexOf(t));return r.a.createElement(ce.a,{button:!0,component:b.b,to:t,className:o.link,classes:{root:c?o.linkActive:o.linkRoot},disableRipple:!0},r.a.createElement(ie.a,{className:c?o.linkIconActive:o.linkIcon},a),r.a.createElement(se.a,{classes:{primary:c?o.linkTextActive:o.linkText},primary:n}))},fe=Object(g.g)((function(e){var t=e.location,a=pe();return r.a.createElement(le.a,{open:!0,variant:"permanent",className:a.drawer,classes:{paper:a.drawer}},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(oe.a,{style:{width:"100%"}},r.a.createElement(de,{key:1,label:"EF Contract",path:"/app/retail",icon:r.a.createElement(me.a,null),location:t}),r.a.createElement(de,{key:2,label:"WholeSale Contract",path:"/app/wholesale",icon:r.a.createElement(me.a,null),location:t}),r.a.createElement(de,{key:3,label:"Funding Request",path:"/app/fundingrequest",icon:r.a.createElement(me.a,null),location:t}),r.a.createElement(de,{key:4,label:"Funding Approved",path:"/app/fundingapproved",icon:r.a.createElement(me.a,null),location:t})))})),ye=a(15),be=a.n(ye),ge=a(30),Ee=a(608),Ce=a(618),he=a(609),ke=a(610),ve=a(611),Oe=a(612),xe=a(613),we=a(28),je=a(40),Ne=a(604),Se=a(605),Fe=a(606),Be=a(607),Ae=a(617),Ie=a(621),Te=a(595),De=a(603);function Re(e){var t=Object(n.useState)(e.defaultValue),a=Object(w.a)(t,2),l=a[0],o=a[1];var c=Object.entries(e.fields);return r.a.createElement(Ne.a,{open:e.open,onClose:function(){return e.onClose(null)},maxWidth:"sm",fullWidth:!0},r.a.createElement(Se.a,null,e.title),r.a.createElement(Fe.a,null,c.map((function(e,t){return function(e,t){var a=Object(w.a)(e,2),n=a[0],c=a[1];return"selection"===c.type?r.a.createElement(Te.a,{key:t,fullWidth:!0},r.a.createElement(Ie.a,{required:!0},c.label),r.a.createElement(Ae.a,{value:l[n],defaultValue:"",onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(je.a)({},n,e.target.value)))}},c.items.map((function(e){return r.a.createElement(De.a,{key:e,value:e},e)})))):r.a.createElement(H.a,{required:!0,autoFocus:!0,fullWidth:!0,key:t,label:c.label,type:c.type,onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(je.a)({},n,e.target.value)))},InputLabelProps:{shrink:!0,required:!0},placeholder:"date"===c.type?"YYYY-MM-DD":""})}(e,t)}))),r.a.createElement(Be.a,null,r.a.createElement(z.a,{onClick:function(){return e.onClose(null)},color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:function(){return e.onClose(l)},color:"primary"},"Okay")))}var Le=Object(W.a)((function(e){return Object(q.a)({tableCellContract:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem",maxWidth:15,overflow:"hidden",textOverflow:"ellipsis"},tableCell:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem"},tableCellButton:{verticalAlign:"center",paddingTop:0,paddingBottom:0,fontSize:"0.75rem"},tableRow:{height:"auto"},textField:{fontSize:"0.75rem"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},choiceButton:{paddingTop:0,paddingBottom:0}})}));function ze(){var e=Object(J.useStreamQueries)(we.EF.WholesaleContract).contracts,t=Le(),a=Object(J.useParty)(),l=Object(J.useLedger)(),o=((new Date).toISOString().slice(0,10),ne()),c=o.displayName,i=o.partyIdentifier,u=(o.knownPartyDisplayNames,{open:!1,title:"New WholeSale Contract",defaultValue:{originator:a,dealer:a,eftype:"Lease",startDate:"",endDate:"",duration:"",amount:"0",rate:"0.0",assetType:"Van",vin:"",closingContractId:"",status:""},fields:{originator:{label:"Originator",type:"text"},dealer:{label:"Dealer",type:"text"},eftype:{label:"EF Type",type:"selection",items:["Loan","Lease"]},startDate:{label:"Start Date",type:"date"},endDate:{label:"End Date",type:"date"},duration:{label:"Duration",type:"selection",items:["3yr","1yr"]},amount:{label:"Amount",type:"number"},rate:{label:"Rate",type:"number"},assetType:{label:"Asset Type",type:"selection",items:["Van","Tractor"]},vin:{label:"Vin",type:"text"},closingContractId:{label:"Closing Contract",type:"text"},status:{label:"Status",type:"selection",items:["Funded","Closed"]}},onClose:function(){var e=Object(ge.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),m=Object(n.useState)(u),p=Object(w.a)(m,2),d=p[0],f=p[1];var y={open:!1,title:"Close Contract",defaultValue:{newEndDate:"",newClosingContractId:""},fields:{newEndDate:{label:"End Date",type:"date"},newClosingContractId:{label:"Closing Contract Id",type:"text"}},onClose:function(){var e=Object(ge.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},b=Object(n.useState)(y),g=Object(w.a)(b,2),E=g[0],C=g[1];return r.a.createElement(Ee.a,null,r.a.createElement(Ce.a,null,r.a.createElement(Re,E),r.a.createElement(Re,d),r.a.createElement(z.a,{color:"primary",size:"small",className:t.choiceButton,variant:"contained",onClick:function(){return function(){function e(){return(e=Object(ge.a)(be.a.mark((function e(t){var a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(Object(s.a)(Object(s.a)({},u),{},{open:!1})),t){e.next=3;break}return e.abrupt("return");case 3:return a=Object(s.a)(Object(s.a)({},t),{},{originator:i(t.originator),dealer:i(t.dealer)}),e.next=6,l.create(we.EF.WholesaleContract,a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f(Object(s.a)(Object(s.a)({},u),{},{open:!0,onClose:function(t){return e.apply(this,arguments)}}))}()}},"Create New WholeSale Contract"),r.a.createElement(he.a,{size:"small"},r.a.createElement(ke.a,null,r.a.createElement("div",null,r.a.createElement("p",null,"WholeSaleContracts")),r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{key:0}," Contract"),r.a.createElement(Oe.a,{key:1}," Originator"),r.a.createElement(Oe.a,{key:2}," Dealer"),r.a.createElement(Oe.a,{key:3}," Type"),r.a.createElement(Oe.a,{key:4}," Amount"),r.a.createElement(Oe.a,{key:5}," Rate"),r.a.createElement(Oe.a,{key:6}," Asset Type"),r.a.createElement(Oe.a,{key:7}," Vin"),r.a.createElement(Oe.a,{key:8}," Status"),r.a.createElement(Oe.a,{key:9}," Closinging Contract"),r.a.createElement(Oe.a,{key:10},"Close"))),r.a.createElement(xe.a,null,e.map((function(e){return r.a.createElement(ve.a,{key:e.contractId},r.a.createElement(Oe.a,{key:0,className:t.tableCellContract},e.contractId),r.a.createElement(Oe.a,{key:1},c(e.payload.originator)),r.a.createElement(Oe.a,{key:2},c(e.payload.dealer)),r.a.createElement(Oe.a,{key:3},e.payload.eftype),r.a.createElement(Oe.a,{key:4},e.payload.amount),r.a.createElement(Oe.a,{key:5},e.payload.rate),r.a.createElement(Oe.a,{key:6},e.payload.assetType),r.a.createElement(Oe.a,{key:7},e.payload.vin),r.a.createElement(Oe.a,{key:8},e.payload.status),r.a.createElement(Oe.a,{key:9},e.payload.closingContractId),r.a.createElement(Oe.a,{key:10,className:t.tableCellButton},r.a.createElement(z.a,{color:"primary",size:"small",className:t.choiceButton,variant:"contained",onClick:function(){return function(e){function t(){return(t=Object(ge.a)(be.a.mark((function t(a){return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C(Object(s.a)(Object(s.a)({},y),{},{open:!1})),a){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,l.exercise(we.EF.WholesaleContract.CloseWholeSaleContract,e.contractId,a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}C(Object(s.a)(Object(s.a)({},y),{},{open:!0,onClose:function(e){return t.apply(this,arguments)}}))}(e)}},"Close Contract")))}))))))}function We(e){var t=Object(n.useState)(e.defaultValue),a=Object(w.a)(t,2),l=a[0],o=a[1];var c=Object.entries(e.fields);return r.a.createElement(Ne.a,{open:e.open,onClose:function(){return e.onClose(null)},maxWidth:"sm",fullWidth:!0},r.a.createElement(Se.a,null,e.title),r.a.createElement(Fe.a,null,c.map((function(e,t){return function(e,t){var a=Object(w.a)(e,2),n=a[0],c=a[1];return"selection"===c.type?r.a.createElement(Te.a,{key:t,fullWidth:!0},r.a.createElement(Ie.a,{required:!0},c.label),r.a.createElement(Ae.a,{value:l[n],defaultValue:"",onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(je.a)({},n,e.target.value)))}},c.items.map((function(e){return r.a.createElement(De.a,{key:e,value:e},e)})))):r.a.createElement(H.a,{required:!0,autoFocus:!0,fullWidth:!0,key:t,label:c.label,type:c.type,onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(je.a)({},n,e.target.value)))},InputLabelProps:{shrink:!0,required:!0},placeholder:"date"===c.type?"YYYY-MM-DD":""})}(e,t)}))),r.a.createElement(Be.a,null,r.a.createElement(z.a,{onClick:function(){return e.onClose(null)},color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:function(){return e.onClose(l)},color:"primary"},"Okay")))}var qe=Object(W.a)((function(e){return Object(q.a)({tableCellContract:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem",maxWidth:15,overflow:"hidden",textOverflow:"ellipsis"},tableCell:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem"},tableCellButton:{verticalAlign:"center",paddingTop:0,paddingBottom:0,fontSize:"0.75rem"},tableRow:{height:"auto"},textField:{fontSize:"0.75rem"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},choiceButton:{paddingTop:0,paddingBottom:0}})}));function Ue(){var e=Object(J.useStreamQueries)(we.EF.EFContract).contracts,t=qe(),a=Object(J.useParty)(),l=Object(J.useLedger)(),o=((new Date).toISOString().slice(0,10),ne()),c=o.displayName,i=o.partyIdentifier,u=(o.knownPartyDisplayNames,{open:!1,title:"New RetailContract",defaultValue:{originator:a,business:a,eftype:"Lease",startdate:"",duration:"",amount:"0",rate:"0.0",assetType:"Van",vin:"",businessCreditScore:"",dealerCommission:""},fields:{originator:{label:"Originator",type:"text"},business:{label:"Business",type:"text"},eftype:{label:"EF Type",type:"selection",items:["Loan","Lease"]},startdate:{label:"Contract Date",type:"date"},duration:{label:"Duration",type:"selection",items:["3yr","1yr"]},amount:{label:"Amount",type:"number"},rate:{label:"Rate",type:"number"},assetType:{label:"Asset Type",type:"selection",items:["Van","Tractor"]},vin:{label:"Vin",type:"text"},businessCreditScore:{label:"Business Score",type:"number"},dealerCommission:{label:"Commission",type:"number"}},onClose:function(){var e=Object(ge.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),m=Object(n.useState)(u),p=Object(w.a)(m,2),d=p[0],f=p[1];var y={open:!1,title:"Funding Request",defaultValue:{newLessor:a,newFee:"",newFundingContractId:""},fields:{newLessor:{label:"Lessor",type:"text"},newFee:{label:"Fee",type:"number"},newFundingContractId:{label:"Funding Contract ID",type:"text"}},onClose:function(){var e=Object(ge.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},b=Object(n.useState)(y),g=Object(w.a)(b,2),E=g[0],C=g[1];return r.a.createElement(Ee.a,null,r.a.createElement(Ce.a,null,r.a.createElement(We,d),r.a.createElement(We,E),r.a.createElement(z.a,{color:"primary",size:"small",className:t.choiceButton,variant:"contained",onClick:function(){return function(){function e(){return(e=Object(ge.a)(be.a.mark((function e(t){var a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(Object(s.a)(Object(s.a)({},u),{},{open:!1})),t){e.next=3;break}return e.abrupt("return");case 3:return a=Object(s.a)(Object(s.a)({},t),{},{originator:i(t.originator),business:i(t.business)}),e.next=6,l.create(we.EF.EFContract,a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f(Object(s.a)(Object(s.a)({},u),{},{open:!0,onClose:function(t){return e.apply(this,arguments)}}))}()}},"Create New Asset"),r.a.createElement(he.a,{size:"small"},r.a.createElement(ke.a,null,r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{key:0}," Contract"),r.a.createElement(Oe.a,{key:1}," Originator"),r.a.createElement(Oe.a,{key:2}," Businesss"),r.a.createElement(Oe.a,{key:3}," EF Type"),r.a.createElement(Oe.a,{key:4}," Duration"),r.a.createElement(Oe.a,{key:5}," Amount"),r.a.createElement(Oe.a,{key:6}," Rate"),r.a.createElement(Oe.a,{key:7}," Asset Type"),r.a.createElement(Oe.a,{key:8}," Vin"),r.a.createElement(Oe.a,{key:9}," Business Score"),r.a.createElement(Oe.a,{key:10}," Commission"),r.a.createElement(Oe.a,{key:11,className:t.tableCell},"Request"))),r.a.createElement(xe.a,null,e.map((function(e){return r.a.createElement(ve.a,{key:e.contractId},r.a.createElement(Oe.a,{key:0,className:t.tableCellContract},e.contractId),r.a.createElement(Oe.a,{key:1},c(e.payload.originator)),r.a.createElement(Oe.a,{key:2},c(e.payload.business)),r.a.createElement(Oe.a,{key:3},e.payload.eftype),r.a.createElement(Oe.a,{key:4},e.payload.duration),r.a.createElement(Oe.a,{key:5},e.payload.amount),r.a.createElement(Oe.a,{key:6},e.payload.rate),r.a.createElement(Oe.a,{key:7},e.payload.assetType),r.a.createElement(Oe.a,{key:8},e.payload.vin),r.a.createElement(Oe.a,{key:9},e.payload.businessCreditScore),r.a.createElement(Oe.a,{key:10},e.payload.dealerCommission),r.a.createElement(Oe.a,{key:11,className:t.tableCellButton},r.a.createElement(z.a,{color:"primary",size:"small",className:t.choiceButton,variant:"contained",onClick:function(){return function(e){function t(){return(t=Object(ge.a)(be.a.mark((function t(a){return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C(Object(s.a)(Object(s.a)({},y),{},{open:!1})),a){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,l.exercise(we.EF.EFContract.FundingRequest,e.contractId,Object(s.a)(Object(s.a)({},a),{},{newLessor:i(a.newLessor)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}C(Object(s.a)(Object(s.a)({},y),{},{open:!0,onClose:function(e){return t.apply(this,arguments)}}))}(e)}},"Funding Request")))}))))))}function Pe(e){var t=Object(n.useState)(e.defaultValue),a=Object(w.a)(t,2),l=a[0],o=a[1];var c=Object.entries(e.fields);return r.a.createElement(Ne.a,{open:e.open,onClose:function(){return e.onClose(null)},maxWidth:"sm",fullWidth:!0},r.a.createElement(Se.a,null,e.title),r.a.createElement(Fe.a,null,c.map((function(e,t){return function(e,t){var a=Object(w.a)(e,2),n=a[0],c=a[1];return"selection"===c.type?r.a.createElement(Te.a,{key:t,fullWidth:!0},r.a.createElement(Ie.a,{required:!0},c.label),r.a.createElement(Ae.a,{value:l[n],defaultValue:"",onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(je.a)({},n,e.target.value)))}},c.items.map((function(e){return r.a.createElement(De.a,{key:e,value:e},e)})))):r.a.createElement(H.a,{required:!0,autoFocus:!0,fullWidth:!0,key:t,label:c.label,type:c.type,onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(je.a)({},n,e.target.value)))},InputLabelProps:{shrink:!0,required:!0},placeholder:"date"===c.type?"YYYY-MM-DD":""})}(e,t)}))),r.a.createElement(Be.a,null,r.a.createElement(z.a,{onClick:function(){return e.onClose(null)},color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:function(){return e.onClose(l)},color:"primary"},"Okay")))}var Ve=Object(W.a)((function(e){return Object(q.a)({tableCellContract:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem",maxWidth:15,overflow:"hidden",textOverflow:"ellipsis"},tableCell:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem"},tableCellButton:{verticalAlign:"center",paddingTop:0,paddingBottom:0,fontSize:"0.75rem"},tableRow:{height:"auto"},textField:{fontSize:"0.75rem"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},choiceButton:{paddingTop:0,paddingBottom:0}})})),He=a(75);function Ye(){var e=Object(J.useStreamQueries)(we.EF.FundingContractRequest).contracts,t=Ve(),a=Object(J.useParty)(),l=(He.ContractId,Object(J.useLedger)()),o=ne(),c=o.displayName,i=o.partyIdentifier,u=(o.knownPartyDisplayNames,{open:!1,title:"Funding Approval",defaultValue:{newFundingDate:"",selectedlessor:a,newFundingRequestId:""},fields:{newFundingDate:{label:"FundingDate",type:"date"},selectedlessor:{label:"Lessor",type:"text"},newFundingRequestId:{label:"FundingRequest Contract Id",type:"text"}},onClose:function(){var e=Object(ge.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),m=Object(n.useState)(u),p=Object(w.a)(m,2),d=p[0],f=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,d),r.a.createElement(he.a,{size:"small"},r.a.createElement(ke.a,null,r.a.createElement(ve.a,{className:t.tableRow},r.a.createElement(Oe.a,{key:0,className:t.tableCell},"Contract"),r.a.createElement(Oe.a,{key:1,className:t.tableCell},"Lessor"),r.a.createElement(Oe.a,{key:2,className:t.tableCell},"Originator"),r.a.createElement(Oe.a,{key:3,className:t.tableCell},"Business"),r.a.createElement(Oe.a,{key:4,className:t.tableCell},"Amount"),r.a.createElement(Oe.a,{key:5,className:t.tableCell},"EF Contrat"),r.a.createElement(Oe.a,{key:6,className:t.tableCell},"Rate"),r.a.createElement(Oe.a,{key:7,className:t.tableCell},"Type"),r.a.createElement(Oe.a,{key:8,className:t.tableCell},"Asset Type"),r.a.createElement(Oe.a,{key:9,className:t.tableCell},"OriginationFee"),r.a.createElement(Oe.a,{key:10,className:t.tableCell},"Approval"))),r.a.createElement(xe.a,null,e.map((function(e){return r.a.createElement(ve.a,{key:e.contractId,className:t.tableRow},r.a.createElement(Oe.a,{key:0,className:t.tableCellContract},e.contractId),r.a.createElement(Oe.a,{key:1,className:t.tableCell},c(e.payload.lessor)),r.a.createElement(Oe.a,{key:2,className:t.tableCell},c(e.payload.fundingContract.originator)),r.a.createElement(Oe.a,{key:3,className:t.tableCell},e.payload.fundingContract.business),r.a.createElement(Oe.a,{key:4,className:t.tableCell},e.payload.fundingContract.amount),r.a.createElement(Oe.a,{key:5,className:t.tableCellContract},e.payload.fundingContractId),r.a.createElement(Oe.a,{key:6,className:t.tableCell},e.payload.fundingContract.rate),r.a.createElement(Oe.a,{key:7,className:t.tableCell},e.payload.fundingContract.eftype),r.a.createElement(Oe.a,{key:8,className:t.tableCell},e.payload.fundingContract.assetType),r.a.createElement(Oe.a,{key:9,className:t.tableCell},e.payload.originationFee),r.a.createElement(Oe.a,{key:10,className:t.tableCellButton},r.a.createElement(z.a,{color:"primary",size:"small",className:t.choiceButton,variant:"contained",onClick:function(){return function(e){function t(){return(t=Object(ge.a)(be.a.mark((function t(a){return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f(Object(s.a)(Object(s.a)({},u),{},{open:!1})),a){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,l.exercise(we.EF.FundingContractRequest.FundingApproval,e.contractId,Object(s.a)(Object(s.a)({},a),{},{selectedlessor:i(a.selectedlessor)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}f(Object(s.a)(Object(s.a)({},u),{},{open:!0,onClose:function(e){return t.apply(this,arguments)}}))}(e)}},"Approval")))})))))}var Me=Object(W.a)((function(e){return Object(q.a)({tableCellContract:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem",maxWidth:15,overflow:"hidden",textOverflow:"ellipsis"},tableCell:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem"},tableCellButton:{verticalAlign:"center",paddingTop:0,paddingBottom:0,fontSize:"0.75rem"},tableRow:{height:"auto"},textField:{fontSize:"0.75rem"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},choiceButton:{paddingTop:0,paddingBottom:0}})}));function Ge(){var e=Object(J.useStreamQueries)(we.EF.FundingContractApproval).contracts,t=Me(),a=ne(),n=a.displayName;a.partyIdentifier,a.knownPartyDisplayNames;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{size:"small"},r.a.createElement(ke.a,null,r.a.createElement(ve.a,{className:t.tableRow},r.a.createElement(Oe.a,{key:0,className:t.tableCell},"Contract"),r.a.createElement(Oe.a,{key:1,className:t.tableCell},"Lessor"),r.a.createElement(Oe.a,{key:2,className:t.tableCell},"FundingDate"),r.a.createElement(Oe.a,{key:3,className:t.tableCell},"Funding Contract ID"),r.a.createElement(Oe.a,{key:4,className:t.tableCell},"Amount"),r.a.createElement(Oe.a,{key:5,className:t.tableCell},"Originator"),r.a.createElement(Oe.a,{key:6,className:t.tableCell},"Business"),r.a.createElement(Oe.a,{key:7,className:t.tableCell},"EF Contract"),r.a.createElement(Oe.a,{key:8,className:t.tableCell},"Rate"),r.a.createElement(Oe.a,{key:9,className:t.tableCell},"Type"),r.a.createElement(Oe.a,{key:10,className:t.tableCell},"Asset Type"))),r.a.createElement(xe.a,null,e.map((function(e){return r.a.createElement(ve.a,{key:e.contractId,className:t.tableRow},r.a.createElement(Oe.a,{key:0,className:t.tableCellContract},e.contractId),r.a.createElement(Oe.a,{key:1,className:t.tableCell},n(e.payload.lessor)),r.a.createElement(Oe.a,{key:2,className:t.tableCell},e.payload.fundingDate),r.a.createElement(Oe.a,{key:3,className:t.tableCellContract},e.payload.fundingRequestId),r.a.createElement(Oe.a,{key:4,className:t.tableCell},e.payload.fundingRequest.fundingContract.amount),r.a.createElement(Oe.a,{key:5,className:t.tableCell},n(e.payload.fundingRequest.fundingContract.originator)),r.a.createElement(Oe.a,{key:6,className:t.tableCell},n(e.payload.fundingRequest.fundingContract.business)),r.a.createElement(Oe.a,{key:7,className:t.tableCellContract},e.payload.fundingRequest.fundingContractId),r.a.createElement(Oe.a,{key:8,className:t.tableCell},e.payload.fundingRequest.fundingContract.rate),r.a.createElement(Oe.a,{key:9,className:t.tableCell},e.payload.fundingRequest.fundingContract.eftype),r.a.createElement(Oe.a,{key:10,className:t.tableCell},e.payload.fundingRequest.fundingContract.assetType))})))))}var _e=Object(W.a)((function(e){return Object(q.a)({root:{display:"flex",maxWidth:"100vw",overflowX:"hidden"},content:{flexGrow:1,padding:e.spacing(3),width:"calc(100vw - ".concat(240+e.spacing(6),"px)"),minHeight:"100vh"},fakeToolbar:Object(s.a)({},e.mixins.toolbar)})})),Qe=Object(g.g)((function(){var e=_e(),t=B();return t.isAuthenticated?r.a.createElement(K.a,{party:t.party,token:t.token,httpBaseUrl:v,wsBaseUrl:void 0},r.a.createElement("div",{className:e.root},r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(fe,null),r.a.createElement("div",{className:e.content},r.a.createElement("div",{className:e.fakeToolbar}),r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/app/retail",component:Ue}),r.a.createElement(g.b,{path:"/app/wholesale",component:ze}),r.a.createElement(g.b,{path:"/app/fundingrequest",component:Ye}),r.a.createElement(g.b,{path:"/app/fundingapproved",component:Ge})))))):null}));function Je(){var e=B();return r.a.createElement(b.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:function(){var e=A();return Object(n.useEffect)((function(){var t=new URL(window.location.toString()),a=t.searchParams.get("token");if(null!==a){var n=t.searchParams.get("party");if(null===n)throw Error("When 'token' is passed via URL, 'party' must be passed too.");localStorage.setItem("ef-app.daml.party",n),localStorage.setItem("ef-app.daml.token",a),e({type:"LOGIN_SUCCESS",token:a,party:n})}})),r.a.createElement(g.a,{to:"/app/retail"})}}),r.a.createElement(g.b,{exact:!0,path:"/app",render:function(){return r.a.createElement(g.a,{to:"/app/retail"})}}),r.a.createElement(t,{path:"/app",component:Qe}),r.a.createElement(a,{path:"/login",component:Q}),r.a.createElement(g.b,{component:P})));function t(t){var a=t.component,n=Object(y.a)(t,["component"]);return r.a.createElement(g.b,Object.assign({},n,{render:function(t){return e.isAuthenticated?r.a.createElement(a,t):r.a.createElement(g.a,{to:{pathname:"/login",state:{from:t.location}}})}}))}function a(t){var a=t.component,n=Object(y.a)(t,["component"]);return r.a.createElement(g.b,Object.assign({},n,{render:function(t){return e.isAuthenticated?r.a.createElement(g.a,{to:{pathname:"/"}}):r.a.createElement(a,t)}}))}}o.a.render(r.a.createElement(F,null,r.a.createElement(c.a,{theme:f.default},r.a.createElement(i.a,null),r.a.createElement(Je,null))),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.fd628d47.chunk.js.map