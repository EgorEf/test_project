(this.webpackJsonptest_project=this.webpackJsonptest_project||[]).push([[0],{161:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(41),s=n.n(i),o=(n(161),n(162),n(163),n(164),n(165),n(25)),u=n(113),l=n(32),j=n(15),d=n(257),b=n(10),p=n(16),O=n(53),x=n(34),h={BASE_URL:"https://my-json-server.typicode.com/EgorEf/fake-server/",LOGIN:"/login",DEPOSIT_CALCULATOR:"/depositCalculator",DEPOSIT_APPLICATION:{PATH:"/depositApplication",NEW:function(e){return"/depositApplication/new/".concat(e)},BY_ID:function(e){return"/depositApplication/".concat(e)}},DEPOSIT_LIST:"/depositList"},m=Object(O.a)({reducerPath:"applicationsApi",baseQuery:Object(x.d)({baseUrl:h.BASE_URL}),tagTypes:["Applications"],endpoints:function(e){return{getAllApplications:e.query({query:function(){return"applications"},providesTags:function(e){return e?[].concat(Object(p.a)(e.map((function(e){return{type:"Applications",id:e.id}}))),[{type:"Applications",id:"LIST"}]):[{type:"Applications",id:"LIST"}]}}),getApplicationById:e.query({query:function(e){return{url:"applications",params:{id:e}}},transformResponse:function(e){return Object(b.a)(e,1)[0]}}),getApplicationsByUserId:e.query({query:function(e){return{url:"applications",params:{userId:e}}},providesTags:function(e){return e?[].concat(Object(p.a)(e.map((function(e){return{type:"Applications",id:e.id}}))),[{type:"Applications",id:"LIST"}]):[{type:"Applications",id:"LIST"}]}}),newApplication:e.mutation({query:function(e){return{url:"applications",method:"POST",headers:{"Content-Type":"application/json"},body:e}},invalidatesTags:[{type:"Applications",id:"LIST"}]}),updateApplication:e.mutation({query:function(e){return{url:"applications/".concat(e.id),method:"PUT",headers:{"Content-Type":"application/json"},body:e}},invalidatesTags:[{type:"Applications",id:"LIST"}]})}}}),f=m.useGetAllApplicationsQuery,v=m.useGetApplicationsByUserIdQuery,A=m.useGetApplicationByIdQuery,g=m.useNewApplicationMutation,y=m.useUpdateApplicationMutation;!function(e){e.ADMIN="admin",e.USER="user"}(a||(a={}));var I,C,E,S,w,F,B,R,T=function(){var e=Date.now().toString().slice(-6);return Number(e)},P=n(85),L=n(86),k=function(){function e(t,n){Object(P.a)(this,e),this.term=void 0,this.createdAt=void 0,this.closedAt=void 0,this.getDateString=function(e){var t=e.getDate(),n=e.getMonth()+1,a=n<10?"0".concat(n):n,r=e.getFullYear();return"".concat(t,".").concat(a,".").concat(r)},this.term=t,this.createdAt=n?new Date(n):new Date,this.closedAt=this.getClosedAt()}return Object(L.a)(e,[{key:"getClosedAt",value:function(){this.closedAt=new Date(this.createdAt);var e=this.closedAt.getDate(),t=this.term+e;return this.closedAt.setDate(t),this.closedAt}},{key:"getCreatedAtString",value:function(){return this.createdAt.toString()}},{key:"getClosedAtString",value:function(){return this.closedAt.toString()}},{key:"getCreatedAtStrInHumanView",value:function(){return this.getDateString(this.createdAt)}},{key:"getClosedAtStrInHumanView",value:function(){return this.getDateString(this.closedAt)}}]),e}(),D=n(14),Q=Object(O.a)({reducerPath:"authApi",baseQuery:Object(x.d)({baseUrl:h.BASE_URL}),endpoints:function(e){return{login:e.query({query:function(e){return{url:"users",params:{email:e.email,password:e.password},validateStatus:function(e,t){return 200===e.status&&0!==t.length}}},transformResponse:function(e){return Object(b.a)(e,1)[0]}})}}}),Y=Q.useLazyLoginQuery,N=Object(D.d)({name:"auth",initialState:{user:null},reducers:{logOut:function(e){e.user=null}},extraReducers:function(e){e.addMatcher(Q.endpoints.login.matchFulfilled,(function(e,t){var n=t.payload;e.user=n}))}}),U=N.actions.logOut,z=function(e){return e.auth.user},G=N.reducer,q=n(39),W=n.n(q),H=n(59),M=n(133),X=n(20),V=["periodStep","rateStep","minAmount"],J=function(e,t){return Number(e.toFixed(t))},K=function(e){return function(t){var n=t.period,a=t.periodStep,r=t.rateStep,c=t.rate,i=t.options,s=function(e,t,n,a,r){var c=Math.floor((r-e)/t);return J(a+c*n,2)}(Object(b.a)(n,1)[0],a,r,c,e),o=function(e,t){var n=0;return t.isEarlyRepayment&&(n+=.7),t.isPartial&&(n+=.35),J(e-n,2)}(s,i);return Object(X.a)(Object(X.a)({},t),{},{rate:o})}},Z=function(e,t){return function(n){var a=n.rate,r=n.options.isCapitalization?function(e,t,n){var a=Math.floor(t/30);return e*Math.pow(1+n/100/12,a)-e}(e,t,a):function(e,t,n){return e*n*(t/365)/100}(e,a,t),c=J(r,2);return Object(X.a)(Object(X.a)({},n),{},{income:c})}},_=function(e){e.periodStep,e.rateStep,e.minAmount;return Object(M.a)(e,V)},$=function(e,t){var n=t.amount,a=t.term;return e.filter(function(e){return function(t){var n=t.minAmount;return e>=n}}(n)).filter(function(e){return function(t){var n=Object(b.a)(t.period,2),a=n[0],r=n[1];return e>=a&&e<=r}}(a)).map(K(a)).map(_).map(Z(n,a)).map(function(e,t){return function(n){return Object(X.a)(Object(X.a)({},n),{},{amount:e,term:t})}}(n,a))},ee=Object(O.a)({reducerPath:"productsApi",baseQuery:Object(x.d)({baseUrl:h.BASE_URL}),endpoints:function(e){return{getProducts:e.query({queryFn:function(e,t,n,a){return Object(H.a)(W.a.mark((function t(){var n,r,c,i,s,o;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.currency,r=e.isEarlyRepayment,c=e.isPartial,i=e.isCapitalization,t.next=3,a({url:"products",params:{currency:n,"options.isEarlyRepayment":r,"options.isPartial":c,"options.isCapitalization":i}});case 3:if((s=t.sent).data){t.next=6;break}return t.abrupt("return",{error:s.error});case 6:return o=s.data,t.abrupt("return",{data:$(o,e)});case 8:case"end":return t.stop()}}),t)})))()}})}}}),te=ee.useLazyGetProductsQuery,ne=Object(D.d)({name:"products",initialState:{items:null},reducers:{},extraReducers:function(e){e.addCase(U,(function(e){e.items=null})),e.addMatcher(ee.endpoints.getProducts.matchFulfilled,(function(e,t){var n=t.payload;e.items=n}))}}),ae=ne.reducer,re=o.e,ce=function(){return re(z)},ie=function(e){var t=ce(),n=function(e){return Object(o.e)((t=Number(e),function(e){var n=e.products.items;return n&&n.find((function(e){var n=e.id;return t===n}))||null}));var t}(e);if(!t||!n)return null;var a=n.name,r=n.description,c=n.currency,i=n.rate,s=n.term,u=n.amount,l=n.income,j=n.options,d=new k(s);return{id:T(),userId:t.id,name:a,description:r,createdAt:d.getCreatedAtStrInHumanView(),closedAt:d.getClosedAtStrInHumanView(),amount:u,billNum:null,status:"draft",currency:c,rate:i,income:l,term:s,options:j}},se=n(23),oe=n(5),ue=n(259),le=n(258),je=n(3),de=n(238),be=n(251),pe=n(261),Oe=n(249),xe=n(253),he=n(26),me=n(50),fe=n(117),ve=n.n(fe),Ae=Object(O.a)({reducerPath:"billsApi",baseQuery:Object(x.d)({baseUrl:h.BASE_URL}),endpoints:function(e){return{getBills:e.query({query:function(e){return{url:"bills",params:{userId:e.userId,currency:e.currency}}}})}}}),ge=Ae.useGetBillsQuery,ye={key:"root",version:1,storage:ve.a,blacklist:[Q.reducerPath,ee.reducerPath,Ae.reducerPath,m.reducerPath,"products"]},Ie=Object(he.b)((I={auth:G,products:ae},Object(je.a)(I,Q.reducerPath,Q.reducer),Object(je.a)(I,ee.reducerPath,ee.reducer),Object(je.a)(I,Ae.reducerPath,Ae.reducer),Object(je.a)(I,m.reducerPath,m.reducer),I)),Ce=Object(me.g)(ye,Ie),Ee=Object(D.a)({reducer:Ce,middleware:function(e){return function(e){return[].concat(Object(p.a)(e({serializableCheck:{ignoredActions:[me.a,me.f,me.b,me.c,me.d,me.e]}})),[Q.middleware,ee.middleware,Ae.middleware,m.middleware])}(e)}}),Se=Object(me.h)(Ee),we=n(1),Fe={mb:3},Be=Object(oe.a)(d.a)(C||(C=Object(se.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Re=function(){var e=Object(j.h)(),t=Object(j.g)(),n=Object(r.useState)({email:"",password:"",isRemember:!1}),a=Object(b.a)(n,2),c=a[0],i=a[1],s=Y(),o=Object(b.a)(s,2),u=o[0],l=o[1],d=l.isError,p=l.isLoading,O=function(e){var t=e.target,n=t.value,a=t.name;i((function(e){return Object(X.a)(Object(X.a)({},e),{},Object(je.a)({},a,n))}))};return Object(we.jsxs)(de.a,{component:"form",sx:{width:1},onSubmit:function(n){n.preventDefault();var a={email:c.email,password:c.password};!function(e){e?Se.persist():Se.pause()}(c.isRemember),u(a).unwrap().then((function(){var n,a,r=(null===(n=t.state)||void 0===n||null===(a=n.from)||void 0===a?void 0:a.pathname)||"/";e(r,{replace:!0})})).catch((function(e){return console.error(e,"Error")}))},children:[Object(we.jsx)(be.a,{id:"email",name:"email",label:"\u041b\u043e\u0433\u0438\u043d",variant:"outlined",error:d,type:"email",onChange:O,sx:Fe,required:!0}),Object(we.jsx)(be.a,{id:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",error:d,variant:"outlined",type:"password",onChange:O,helperText:d?"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!":" ",FormHelperTextProps:{error:d,sx:{mt:"15px"}},required:!0}),Object(we.jsx)(pe.a,{id:"isRemember",name:"isRemember",control:Object(we.jsx)(Oe.a,{}),onChange:function(){var e=c.isRemember;i((function(t){return Object(X.a)(Object(X.a)({},t),{},{isRemember:!e})}))},checked:c.isRemember,label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f",sx:Fe}),Object(we.jsx)(Be,{children:Object(we.jsx)(xe.a,{variant:"contained",type:"submit",disabled:p,sx:{width:"180px"},children:"\u0412\u043e\u0439\u0442\u0438"})})]})},Te=Object(oe.a)("div")(E||(E=Object(se.a)(["\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  height: '100%',\n  width: '100%',\n"]))),Pe=function(){return Object(we.jsxs)(ue.a,{maxWidth:"xs",sx:{pt:30},children:[Object(we.jsx)(le.a,{variant:"h5",align:"center",mb:3,children:"\u0412\u0445\u043e\u0434"}),Object(we.jsx)(Te,{children:Object(we.jsx)(Re,{})})]})},Le=function(e){var t=e.children,n=re(z),a=Object(j.g)();return n?t:Object(we.jsx)(j.a,{to:h.LOGIN,state:{from:a}})},ke=n(262),De=n(263),Qe=n(275),Ye=n(123),Ne=n.n(Ye),Ue=n(130),ze=n(250),Ge=n(254),qe=n(61),We=Object(oe.a)(l.c)({textDecorationLine:"none",color:"inherit","&.active":{color:qe.a[700]}}),He=function(e){var t=e.path,n=e.name;return Object(we.jsx)(We,{to:t,children:Object(we.jsx)(le.a,{variant:"button",children:n})})},Me={user:[{path:"depositCalculator",name:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"},{path:"depositList",name:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043e\u043a"}],admin:[{path:"depositList",name:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043e\u043a"}]},Xe=function(){var e=Object(o.d)(),t=re(z),n=Object(r.useState)(null),a=Object(b.a)(n,2),c=a[0],i=a[1],s=Boolean(c),u=function(){i(null)};return Object(we.jsx)(ke.a,{position:"static",children:Object(we.jsxs)(De.a,{children:[Object(we.jsx)(Qe.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",onClick:function(e){i(e.currentTarget)},sx:{mr:2},children:Object(we.jsx)(Ne.a,{})}),Object(we.jsx)(Ue.a,{id:"basic-menu",anchorEl:c,open:s,onClose:u,children:function(){var e=null===t||void 0===t?void 0:t.role;return Me[e].map((function(e){var t=e.path,n=e.name;return Object(we.jsx)(ze.a,{onClick:u,children:Object(we.jsx)(He,{path:t,name:n})},t)}))}()}),Object(we.jsx)(Ge.a,{src:"data:image/png;base64,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",alt:"logo",sx:{mr:"15px"}}),Object(we.jsx)(le.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"New Test Bank"}),Object(we.jsx)(xe.a,{color:"inherit",onClick:function(){e(U())},children:"\u0412\u044b\u0445\u043e\u0434"})]})})},Ve=Object(oe.a)(d.a)({display:"flex",flexDirection:"column",height:"100%",overflowY:"auto",background:"#eeeeee"}),Je=Object(oe.a)(d.a)({flexGrow:1,background:"#FFFFFF",padding:"30px",margin:"15px",borderRadius:"15px",boxShadow:"0px 0px 8px 4px rgba(0, 0, 0, 0.06)"}),Ke=function(){return Object(we.jsxs)(Ve,{children:[Object(we.jsx)(Xe,{}),Object(we.jsx)(Je,{children:Object(we.jsx)(j.b,{})})]})},Ze=function(){return Object(we.jsx)(le.a,{variant:"h4",align:"center",mb:3,children:"\u041e\u0448\u0438\u0431\u043a\u0430! \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430."})},_e=n(252),$e=function(e){var t=e.text;return Object(we.jsx)(le.a,{variant:"h4",children:t})},et=n(129),tt=n(126),nt=n.n(tt),at=n(272),rt=n(240),ct=n(244),it=n(243),st=n(248),ot=function(e){var t=e.value,n=e.handleChange;return Object(we.jsxs)(at.a,{component:"fieldset",children:[Object(we.jsx)(rt.a,{component:"legend",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(we.jsxs)(it.a,{row:!0,name:"currency",onChange:n,value:t,children:[Object(we.jsx)(ct.a,{title:"\u0420\u0443\u0431\u043b\u0438",placement:"bottom-start",children:Object(we.jsx)(pe.a,{value:"rub",control:Object(we.jsx)(st.a,{}),label:"\u20bd"})}),Object(we.jsx)(ct.a,{title:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410",placement:"bottom-start",children:Object(we.jsx)(pe.a,{value:"usd",control:Object(we.jsx)(st.a,{}),label:"$"})})]})]})},ut=n(276),lt=n(255),jt=Object(oe.a)(lt.a)(S||(S=Object(se.a)(["\n  max-width: 300px;\n  .MuiOutlinedInput-input {\n    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n    }\n  }\n"]))),dt={rub:"\u20bd",usd:"$"},bt=function(e){return dt[e]},pt=function(e){var t=e.value,n=e.currency,a=e.handleChange,r=bt(n),c="rub"===n?1e3:100,i=0===t?"":t;return Object(we.jsxs)(at.a,{children:[Object(we.jsx)(rt.a,{component:"legend",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(we.jsx)(jt,{name:"amount",type:"number",value:i,onChange:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430",inputProps:{min:0,step:c},sx:{mt:"9px"},endAdornment:Object(we.jsx)(ut.a,{position:"start",children:r})})]})},Ot=function(e){return e>10&&e<20?0:e%10},xt={day:function(e){var t=Ot(e);return 1===t?"\u0414\u0435\u043d\u044c":t>=2&&t<=4?"\u0414\u043d\u044f":"\u0414\u043d\u0435\u0439"},mounth:function(e){var t=Ot(e);return 1===t?"\u041c\u0435\u0441\u044f\u0446":t>=2&&t<=4?"\u041c\u0435\u0441\u044f\u0446\u0430":"\u041c\u0435\u0441\u044f\u0446\u0435\u0432"},year:function(e){var t=Ot(e);return 1===t?"\u0413\u043e\u0434":t>=2&&t<=4?"\u0413\u043e\u0434\u0430":"\u041b\u0435\u0442"}},ht={day:function(e){return e},mounth:function(e){return 30*e},year:function(e){return 365*e}},mt={day:1095,mounth:36,year:3},ft=function(e){var t=e.changeFormikFieldValue,n=Object(r.useState)({timeInterval:"day",value:0}),a=Object(b.a)(n,2),c=a[0],i=a[1],s=xt[c.timeInterval],o=mt[c.timeInterval],u=0===c.value?"":c.value;return Object(we.jsxs)(at.a,{component:"fieldset",children:[Object(we.jsx)(rt.a,{component:"legend",children:"\u0421\u0440\u043e\u043a"}),Object(we.jsxs)(it.a,{row:!0,value:c.timeInterval,onChange:function(e){var n=e.target.value;i((function(){return{timeInterval:n,value:0}})),t("term",0)},children:[Object(we.jsx)(pe.a,{value:"day",control:Object(we.jsx)(st.a,{}),label:"\u0414\u043d\u0438"}),Object(we.jsx)(pe.a,{value:"mounth",control:Object(we.jsx)(st.a,{}),label:"\u041c\u0435\u0441\u044f\u0446\u044b"}),Object(we.jsx)(pe.a,{value:"year",control:Object(we.jsx)(st.a,{}),label:"\u0413\u043e\u0434\u044b"})]}),Object(we.jsx)(jt,{name:"term",type:"number",value:u,inputProps:{min:0,max:o},placeholder:"0",endAdornment:Object(we.jsx)(ut.a,{position:"start",children:s(c.value)}),onChange:function(e){var n=e.target.value,a=c.timeInterval,r=Number(n),s=ht[a];i((function(e){return Object(X.a)(Object(X.a)({},e),{},{value:r})})),t("term",s(r))}})]})},vt=n(186),At=n(277),gt=function(e){var t=e.handleChange,n=e.value,a=n.isEarlyRepayment,r=n.isPartial,c=n.isCapitalization;return Object(we.jsxs)(at.a,{children:[Object(we.jsx)(rt.a,{component:"legend",children:"\u041e\u043f\u0446\u0438\u0438"}),Object(we.jsxs)(vt.a,{children:[Object(we.jsx)(pe.a,{control:Object(we.jsx)(At.a,{name:"isEarlyRepayment",checked:a,onChange:t}),label:"\u0414\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0440\u0430\u0441\u0442\u043e\u0440\u0436\u0435\u043d\u0438\u0435"}),Object(we.jsx)(pe.a,{control:Object(we.jsx)(At.a,{name:"isPartial",checked:r,onChange:t}),label:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u0441\u043d\u044f\u0442\u0438\u0435 \u0438 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"}),Object(we.jsx)(pe.a,{control:Object(we.jsx)(At.a,{name:"isCapitalization",checked:c,onChange:t}),label:"\u041a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432"})]})]})},yt={currency:"rub",amount:0,term:0,isEarlyRepayment:!1,isPartial:!1,isCapitalization:!1},It=function(e){var t=e.getProducts,n=Object(et.a)({initialValues:yt,onSubmit:function(e){t(e)}}),a=n.values,c=n.handleChange,i=n.handleSubmit,s=n.setFieldValue,o=n.submitForm,u=function(){o()},l=Object(r.useMemo)((function(){return nt()(u,500)}),[]);return Object(we.jsxs)(de.a,{component:"form",spacing:3,onSubmit:i,onChange:l,children:[Object(we.jsx)(ot,{value:a.currency,handleChange:c}),Object(we.jsx)(pt,{value:a.amount,currency:a.currency,handleChange:c}),Object(we.jsx)(ft,{changeFormikFieldValue:s}),Object(we.jsx)(gt,{handleChange:c,value:{isEarlyRepayment:a.isEarlyRepayment,isPartial:a.isPartial,isCapitalization:a.isCapitalization}})]})},Ct=n(121),Et=n(278),St=n(280),wt=n(281),Ft=n(279),Bt=Object(oe.a)(Et.a)(w||(w=Object(se.a)(["\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.06);\n"]))),Rt=Object(oe.a)(Ft.a)(F||(F=Object(se.a)(["\n  padding: 0px;\n  &:last-child {\n    padding: 0px;\n  }\n"]))),Tt=function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return n===a?"".concat(n," \u0434\u0435\u043d\u044c"):"".concat(n,"-").concat(a," \u0434\u043d\u0435\u0439")},Pt=function(e,t){return"".concat(e," ").concat(bt(t))},Lt=function(e){return"".concat(e," %")},kt=function(e){var t=e.productData,n=t.id,a=t.name,r=t.description,c=t.currency,i=t.rate,s=t.period,o=t.income,u=Object(j.h)();return Object(we.jsxs)(Bt,{sx:{p:"20px"},children:[Object(we.jsx)(St.a,{title:a,subheader:r,titleTypographyProps:{variant:"h6"},sx:{p:"0px 0px 15px 0px"}}),Object(we.jsx)(Rt,{children:Object(we.jsxs)(de.a,{direction:"row",justifyContent:"space-between",flexWrap:"wrap",children:[Object(we.jsxs)(de.a,{direction:"row",spacing:3,children:[Object(we.jsxs)(d.a,{children:[Object(we.jsx)(le.a,{variant:"body1",sx:{color:Ct.a[500]},children:"\u0421\u0442\u0430\u0432\u043a\u0430 \u0433\u043e\u0434\u043e\u0432\u044b\u0445"}),Object(we.jsx)(le.a,{variant:"body1",sx:{fontWeight:500},children:Lt(i)})]}),Object(we.jsxs)(d.a,{children:[Object(we.jsx)(le.a,{variant:"body1",sx:{color:Ct.a[500]},children:"\u0414\u043e\u0445\u043e\u0434"}),Object(we.jsx)(le.a,{variant:"body1",sx:{fontWeight:500},children:Pt(o,c)})]}),Object(we.jsxs)(d.a,{children:[Object(we.jsx)(le.a,{variant:"body1",sx:{color:Ct.a[500]},children:"\u0421\u0440\u043e\u043a"}),Object(we.jsx)(le.a,{variant:"body1",sx:{fontWeight:500},children:Tt(s)})]})]}),Object(we.jsx)(wt.a,{sx:{px:"0px"},children:Object(we.jsx)(xe.a,{variant:"contained",onClick:function(){return u(h.DEPOSIT_APPLICATION.NEW(n))},children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e"})})]})})]})},Dt=n(127),Qt=n.n(Dt),Yt=Object(oe.a)(d.a)(B||(B=Object(se.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Nt=function(){return Object(we.jsxs)(Yt,{children:[Object(we.jsx)(le.a,{variant:"body2",sx:{color:Ct.a[400],mr:1},children:"\u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."}),Object(we.jsx)(Qt.a,{color:"disabled"})]})},Ut=function(e){var t=e.products;if(!t)return null;return Object(we.jsx)(de.a,{spacing:2,children:0===t.length?Object(we.jsx)(Nt,{}):t.map((function(e){return Object(we.jsx)(kt,{productData:e},e.id)}))})},zt=n(264),Gt={display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},qt=function(){return Object(we.jsx)(d.a,{sx:Gt,children:Object(we.jsx)(zt.a,{})})},Wt=function(){var e=te(),t=Object(b.a)(e,2),n=t[0],a=t[1].isFetching,c=Object(r.useState)(null),i=Object(b.a)(c,2),s=i[0],o=i[1],u=function(){var e=Object(H.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t).unwrap().then((function(e){return o(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(we.jsx)(d.a,{children:Object(we.jsxs)(_e.a,{container:!0,spacing:2,children:[Object(we.jsx)(_e.a,{item:!0,xs:12,children:Object(we.jsx)($e,{text:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})}),Object(we.jsxs)(_e.a,{item:!0,xs:12,sm:5,children:[Object(we.jsx)(d.a,{mb:3,children:Object(we.jsx)(le.a,{variant:"h6",sx:{color:"text.secondary"},children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442."})}),Object(we.jsx)(It,{getProducts:u})]}),Object(we.jsxs)(_e.a,{item:!0,xs:12,sm:7,children:[Object(we.jsx)(d.a,{mb:3,children:Object(we.jsx)(le.a,{variant:"h6",sx:{color:"text.secondary"},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432:"})}),a?Object(we.jsx)(qt,{}):Object(we.jsx)(Ut,{products:s})]})]})})};!function(e){e.DRAFT="draft",e.IN_PROCESSING="inProcessing",e.OPEN="open"}(R||(R={}));var Ht=n(128),Mt=n.n(Ht),Xt=Object(oe.a)(l.b)({display:"flex",alignItems:"center",textDecorationLine:"none",color:qe.a[700]}),Vt=function(){return Object(we.jsxs)(Xt,{to:h.DEPOSIT_CALCULATOR,children:[Object(we.jsx)(Mt.a,{fontSize:"small",color:"inherit"}),Object(we.jsx)(le.a,{variant:"subtitle1",ml:"3px",children:"\u041d\u0430\u0437\u0430\u0434"})]})},Jt=n(256),Kt={draft:{label:"\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a"},inProcessing:{label:"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435",color:"primary",variant:"outlined"},open:{label:"\u041e\u0442\u043a\u0440\u044b\u0442",color:"primary"}},Zt=function(e){var t=e.status,n=Kt[t];return Object(we.jsx)(Jt.a,Object(X.a)({},n))},_t=function(e){var t=e.status;return Object(we.jsxs)(de.a,{direction:"row",alignItems:"center",spacing:3,children:[Object(we.jsx)($e,{text:"\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u0434\u0435\u043f\u043e\u0437\u0438\u0442"}),Object(we.jsx)(Zt,{status:t})]})},$t=function(e){var t=e.name,n=e.value;return Object(we.jsxs)(de.a,{direction:"row",spacing:3,py:1,children:[Object(we.jsx)(le.a,{variant:"body2",minWidth:"25%",maxWidth:"60%",color:Ct.a[600],children:t}),Object(we.jsx)(le.a,{variant:"body2",children:n})]})},en=function(e){var t=e.applicationData,n=t.name,a=t.createdAt,r=t.closedAt,c=t.description,i=t.amount,s=t.currency,o=t.income,u=t.rate,l="".concat(u," %"),j=bt(s),b="".concat(i," ").concat(j),p="".concat(o," ").concat(j);return Object(we.jsxs)(d.a,{mt:2,children:[Object(we.jsx)(le.a,{variant:"h6",children:'\u0414\u0435\u043f\u043e\u0437\u0438\u0442 "'.concat(n,'"')}),Object(we.jsx)(le.a,{variant:"h6",children:c}),Object(we.jsxs)(d.a,{sx:{mt:"5px"},children:[Object(we.jsx)($t,{name:"\u0414\u0430\u0442\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f",value:a}),Object(we.jsx)($t,{name:"\u0414\u0430\u0442\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f",value:r}),Object(we.jsx)($t,{name:"\u0421\u0443\u043c\u043c\u0430",value:b}),Object(we.jsx)($t,{name:"\u0414\u043e\u0445\u043e\u0434",value:p}),Object(we.jsx)($t,{name:"\u0421\u0442\u0430\u0432\u043a\u0430, \u0433\u043e\u0434\u043e\u0432\u044b\u0445",value:l})]})]})},tn={isEarlyRepayment:"\u0414\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0440\u0430\u0441\u0442\u043e\u0440\u0436\u0435\u043d\u0438\u0435",isPartial:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u0441\u043d\u044f\u0442\u0438\u0435 \u0438 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",isCapitalization:"\u041a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432"},nn=function(e){var t=function(e){return Object.entries(e).map((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return[tn[n],a?"\u0414\u0430":"\u041d\u0435\u0442"]}))}(e.options);return Object(we.jsxs)(d.a,{mt:2,children:[Object(we.jsx)(le.a,{variant:"h6",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438"}),Object(we.jsx)(d.a,{sx:{mt:"5px"},children:t.map((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(we.jsx)($t,{name:n,value:a},n)}))})]})},an=n(273),rn=n(247),cn=function(e){var t=e.text;return Object(we.jsx)(le.a,{variant:"h6",children:t})},sn=function(e){var t=e.status,n=e.userId,a=e.currency,r=e.billNum,c=e.setApplication,i=ge({userId:n,currency:a}).data;return Object(we.jsxs)(d.a,{mt:2,children:[Object(we.jsx)(cn,{text:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0441\u0440\u0435\u0434\u0441\u0442\u0432"}),t===R.DRAFT?Object(we.jsx)(d.a,{width:"300px",py:"14px",children:Object(we.jsxs)(at.a,{fullWidth:!0,children:[Object(we.jsx)(an.a,{id:"select-label",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0447\u0435\u0442"}),Object(we.jsx)(rn.a,{labelId:"select-label",value:r,label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0447\u0435\u0442",onChange:function(e){var t=e.target.value;c((function(e){return Object(X.a)(Object(X.a)({},e),{},{billNum:t})}))},children:null===i||void 0===i?void 0:i.map((function(e){var t=e.id,n=e.numBill;return Object(we.jsx)(ze.a,{value:n,children:n},t)}))})]})}):Object(we.jsx)($t,{name:"\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0451\u0442\u0430",value:r}),Object(we.jsx)($t,{name:"\u0421\u0447\u0435\u0442 \u0434\u043b\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",value:"\u0421\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441\u043e \u0441\u0447\u0435\u0442\u043e\u043c \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),Object(we.jsx)($t,{name:"\u0421\u0447\u0435\u0442 \u0434\u043b\u044f \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432",value:"\u0421\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441\u043e \u0441\u0447\u0435\u0442\u043e\u043c \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})]})},on=function(){var e=re(z);if(!e)return null;var t=e.info;return t?Object(we.jsxs)(d.a,{mt:2,children:[Object(we.jsx)(le.a,{variant:"h6",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0435"}),Object(we.jsxs)(d.a,{children:[Object(we.jsx)($t,{name:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",value:t.name}),Object(we.jsx)($t,{name:"\u0418\u041d\u041d",value:t.taxNumber})]})]}):null},un=function(e){var t=e.application,n=e.isNew,a=Object(j.h)(),c=Object(r.useState)(t),i=Object(b.a)(c,2),s=i[0],o=i[1],u=g(),l=Object(b.a)(u,2),p=l[0],O=l[1].isLoading,x=y(),m=Object(b.a)(x,2),f=m[0],v=m[1].isLoading,A=s.billNum,I=s.status,C=s.options,E=s.currency,S=s.userId,w=function(){var e=Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t).unwrap();case 2:a(h.DEPOSIT_LIST);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(H.a)(W.a.mark((function e(){var r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(X.a)(Object(X.a)({},t),{},{status:"inProcessing"}),!n){e.next=6;break}return e.next=4,p(r).unwrap();case 4:e.next=8;break;case 6:return e.next=8,f(r).unwrap();case 8:a(h.DEPOSIT_LIST);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=!A||O||v;return Object(we.jsxs)(d.a,{component:"form",children:[Object(we.jsx)(Vt,{}),Object(we.jsx)(_t,{status:I}),Object(we.jsx)(en,{applicationData:t}),Object(we.jsx)(nn,{options:C}),Object(we.jsx)(sn,{status:I,userId:S,currency:E,billNum:A||"",setApplication:o}),Object(we.jsx)(on,{}),Object(we.jsxs)(de.a,{direction:"row",spacing:4,mt:5,children:[n&&Object(we.jsx)(xe.a,{variant:"outlined",onClick:w,disabled:B,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),I===R.DRAFT&&Object(we.jsx)(xe.a,{variant:"contained",onClick:F,disabled:B,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},ln=function(){var e=Object(j.i)().productId,t=Object(j.g)(),n=ie(Number(e));if(!n){var a,r,c=(null===(a=t.state)||void 0===a||null===(r=a.from)||void 0===r?void 0:r.pathname)||"/";return Object(we.jsx)(j.a,{to:c,state:{from:t}})}return Object(we.jsx)(un,{application:n,isNew:!0})},jn=function(){var e=Object(j.i)().applicationId,t=A(e).data;return t?Object(we.jsx)(un,{application:t,isNew:!1}):null},dn=n(245),bn=n(260),pn=n(268),On=n(269),xn=n(266),hn=n(267),mn=n(265),fn=n(282),vn=function(e){var t=e.columns;return Object(we.jsx)(fn.a,{children:Object(we.jsx)(mn.a,{children:t.map((function(e){return Object(we.jsx)(xn.a,{children:e},e)}))})})},An=function(e){var t=e.applications,n=re(z);if(!t||!n)return null;var a=n.role,c=Object(r.useMemo)((function(){return"user"===a?["\u0421\u043e\u0437\u0434\u0430\u043d","\u0412\u0438\u0434 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430","\u0421\u0443\u043c\u043c\u0430","\u0421\u0440\u043e\u043a","\u0421\u0442\u0430\u0442\u0443\u0441"]:["\u0421\u043e\u0437\u0434\u0430\u043d","\u041a\u043b\u0438\u0435\u043d\u0442","\u0412\u0438\u0434 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430","\u0421\u0443\u043c\u043c\u0430","\u0421\u0440\u043e\u043a","\u0421\u0442\u0430\u0442\u0443\u0441"]}),[a]);return Object(we.jsx)(hn.a,{children:Object(we.jsxs)(pn.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[Object(we.jsx)(vn,{columns:c}),Object(we.jsx)(On.a,{children:t.map((function(e){return Object(we.jsxs)(mn.a,{children:[Object(we.jsx)(xn.a,{component:"th",scope:"row",children:e.createdAt}),Object(we.jsx)(xn.a,{children:e.name}),Object(we.jsx)(xn.a,{children:e.amount}),Object(we.jsx)(xn.a,{children:e.closedAt}),Object(we.jsx)(xn.a,{children:e.status})]},e.name)}))})]})})},gn=function(){var e=re(z),t=Object(r.useState)("all"),n=Object(b.a)(t,2),c=n[0],i=n[1];if(!e)return null;var s,o,u=function(e,t){var n=Object(r.useRef)({all:null,draft:null,inProcessing:null,open:null});return t?(n.current[e]||(n.current[e]="all"===e?t:t.filter((function(t){return t.status===e}))),n.current[e]):[]}(c,(s=e.role,o=e.id,s===a.ADMIN?f().data:v(o).data));return Object(we.jsxs)(d.a,{children:[Object(we.jsx)($e,{text:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043e\u043a"}),Object(we.jsx)(d.a,{mt:3,children:Object(we.jsxs)(dn.a,{value:c,onChange:function(e,t){i(t)},"aria-label":"wrapped label tabs",children:[Object(we.jsx)(bn.a,{value:"all",label:"\u0412\u0441\u0435 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u044b"}),Object(we.jsx)(bn.a,{value:"draft",label:"\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0438"}),Object(we.jsx)(bn.a,{value:"inProcessing",label:"\u0412 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0438"}),Object(we.jsx)(bn.a,{value:"open",label:"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435"})]})}),Object(we.jsx)(An,{applications:u})]})},yn=function(){var e=ce();return Object(we.jsx)(d.a,{height:"100%",children:Object(we.jsx)(l.a,{children:Object(we.jsxs)(j.e,{children:[Object(we.jsxs)(j.c,{path:"/",element:Object(we.jsx)(Le,{children:Object(we.jsx)(Ke,{})}),children:[(null===e||void 0===e?void 0:e.role)===a.ADMIN?Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)(j.c,{index:!0,element:Object(we.jsx)(j.a,{to:h.DEPOSIT_LIST,replace:!0})}),Object(we.jsx)(j.c,{path:h.DEPOSIT_LIST,element:Object(we.jsx)(gn,{})})]}):Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)(j.c,{index:!0,element:Object(we.jsx)(j.a,{to:h.DEPOSIT_CALCULATOR,replace:!0})}),Object(we.jsx)(j.c,{path:h.DEPOSIT_CALCULATOR,element:Object(we.jsx)(Wt,{})}),Object(we.jsx)(j.c,{path:h.DEPOSIT_LIST,element:Object(we.jsx)(gn,{})}),Object(we.jsxs)(j.c,{path:h.DEPOSIT_APPLICATION.PATH,element:Object(we.jsx)(j.b,{}),children:[Object(we.jsx)(j.c,{path:":applicationId",element:Object(we.jsx)(jn,{})}),Object(we.jsx)(j.c,{path:"new/:productId",element:Object(we.jsx)(ln,{})})]})]}),Object(we.jsx)(j.c,{path:"*",element:Object(we.jsx)(Ze,{})})]}),Object(we.jsx)(j.c,{path:h.LOGIN,element:Object(we.jsx)(Pe,{})}),Object(we.jsx)(j.c,{path:"*",element:Object(we.jsx)(Ze,{})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(we.jsx)(c.a.StrictMode,{children:Object(we.jsx)(o.a,{store:Ee,children:Object(we.jsx)(u.a,{loading:null,persistor:Se,children:Object(we.jsx)(yn,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[176,1,2]]]);
//# sourceMappingURL=main.bd038fdc.chunk.js.map