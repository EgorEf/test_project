(this.webpackJsonptest_project=this.webpackJsonptest_project||[]).push([[0],{124:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),s=n(32),o=n.n(s),l=(n(124),n(125),n(126),n(127),n(128),n(21)),j=n(88),u=n(63),b=n(15),h=n(204),d=n(37),m=n(5),x=n(206),O=n(205),A=n(4),g=n(51),p=n(12),v=n(183),E=n(195),C=n(207),f=n(198),F=n(200),y=n(89),B=n(28),I=Object(y.a)({reducerPath:"authApi",baseQuery:Object(B.d)({baseUrl:"https://my-json-server.typicode.com/EgorEf/fake-server/"}),endpoints:function(e){return{login:e.mutation({query:function(e){return{url:"users",params:{email:e.email,password:e.password},validateStatus:function(e,t){return 200===e.status&&0!==t.length}}},transformResponse:function(e){return Object(p.a)(e,1)[0]}})}}}),w=I.useLoginMutation,R=n(16),S=n(23),Y=n(13),Q=n(40),k=n(90),z=n.n(k),G=Object(Y.d)({name:"auth",initialState:{user:null},reducers:{},extraReducers:function(e){e.addMatcher(I.endpoints.login.matchFulfilled,(function(e,t){var n=t.payload;e.user=n}))}}),X=function(e){return e.auth.user},U=G.reducer,H={key:"root",version:1,storage:z.a,blacklist:[I.reducerPath]},q=Object(S.b)(Object(A.a)({auth:U},I.reducerPath,I.reducer)),V=Object(Q.g)(H,q),W=Object(Y.a)({reducer:V,middleware:function(e){return function(e){return[].concat(Object(R.a)(e({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[I.middleware])}(e)}}),D=Object(Q.h)(W),J=n(2),L={mb:3},K=function(){var e=Object(b.g)(),t=Object(b.f)(),n=Object(c.useState)({email:"",password:"",isRemember:!1}),a=Object(p.a)(n,2),r=a[0],i=a[1],s=w(),o=Object(p.a)(s,2),l=o[0],j=o[1],u=j.isError,h=j.isLoading,d=function(e){var t=e.target,n=t.value,a=t.name,r=t.checked,c="isRemember"===a?r:n;i((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(A.a)({},a,c))}))};return Object(J.jsxs)(v.a,{component:"form",sx:{width:1},onSubmit:function(n){n.preventDefault();var a={email:r.email,password:r.password};!function(e){e?D.persist():D.pause()}(r.isRemember),l(a).unwrap().then((function(){var n,a,r=(null===(n=t.state)||void 0===n||null===(a=n.from)||void 0===a?void 0:a.pathname)||"/";e(r,{replace:!0})})).catch((function(e){return console.error(e,"Error")}))},children:[Object(J.jsx)(E.a,{id:"email",name:"email",label:"\u041b\u043e\u0433\u0438\u043d",variant:"outlined",error:u,type:"email",onChange:d,sx:L,required:!0}),Object(J.jsx)(E.a,{id:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",error:u,variant:"outlined",type:"password",onChange:d,helperText:u?"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!":" ",FormHelperTextProps:{error:u,sx:{mt:"15px"}},required:!0}),Object(J.jsx)(C.a,{id:"isRemember",name:"isRemember",control:Object(J.jsx)(f.a,{}),onChange:d,checked:r.isRemember,label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f",sx:L}),Object(J.jsx)(F.a,{variant:"contained",type:"submit",disabled:h,children:"\u0412\u043e\u0439\u0442\u0438"})]})},N=Object(m.a)("div")(a||(a=Object(d.a)(["\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  height: '100%',\n  width: '100%',\n"]))),T=function(){return Object(J.jsxs)(x.a,{maxWidth:"xs",sx:{pt:30},children:[Object(J.jsx)(O.a,{variant:"h5",align:"center",mb:3,children:"\u0412\u0445\u043e\u0434"}),Object(J.jsx)(N,{children:Object(J.jsx)(K,{})})]})},M=l.e,P=function(e){var t=e.children,n=M(X),a=Object(b.f)();return n?t:Object(J.jsx)(b.a,{to:"/login",state:{from:a}})},Z=n(30),$=n(202),_=n(98),ee=n(199),te=n(189),ne=n(194),ae=n(193),re=n(197),ce=function(e){var t=e.value,n=e.handleChange;return Object(J.jsxs)(ee.a,{component:"fieldset",children:[Object(J.jsx)(te.a,{component:"legend",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(J.jsxs)(ae.a,{row:!0,name:"currency",onChange:n,value:t,children:[Object(J.jsx)(ne.a,{title:"\u0420\u0443\u0431\u043b\u0438",placement:"bottom-start",children:Object(J.jsx)(C.a,{value:"rub",control:Object(J.jsx)(re.a,{}),label:"\u20bd"})}),Object(J.jsx)(ne.a,{title:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b \u0421\u0428\u0410",placement:"bottom-start",children:Object(J.jsx)(C.a,{value:"usd",control:Object(J.jsx)(re.a,{}),label:"$"})})]})]})},ie=n(203),se=n(211),oe=function(e){var t=e.value,n=e.currencySymbol,a=e.handleChange;return Object(J.jsxs)(ee.a,{children:[Object(J.jsx)(te.a,{component:"legend",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(J.jsx)(ie.a,{name:"amount",type:"number",value:t,onChange:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430",sx:{mt:"9px"},startAdornment:Object(J.jsx)(se.a,{position:"start",children:n})})]})},le=function(e){return e>10&&e<20?0:e%10},je={day:function(e){var t=le(e);return 1===t?"\u0414\u0435\u043d\u044c":t>=2&&t<=4?"\u0414\u043d\u044f":"\u0414\u043d\u0435\u0439"},mounth:function(e){var t=le(e);return 1===t?"\u041c\u0435\u0441\u044f\u0446":t>=2&&t<=4?"\u041c\u0435\u0441\u044f\u0446\u0430":"\u041c\u0435\u0441\u044f\u0446\u0435\u0432"},year:function(e){var t=le(e);return 1===t?"\u0413\u043e\u0434":t>=2&&t<=4?"\u0413\u043e\u0434\u0430":"\u041b\u0435\u0442"}},ue={day:function(e){return e},mounth:function(e){return 30*e},year:function(e){return 365*e}},be=function(e){var t=e.changeFormikFieldValue,n=Object(c.useState)({timeInterval:"day",value:0}),a=Object(p.a)(n,2),r=a[0],i=a[1],s=je[r.timeInterval];return Object(J.jsxs)(ee.a,{component:"fieldset",children:[Object(J.jsx)(te.a,{component:"legend",children:"\u0421\u0440\u043e\u043a"}),Object(J.jsxs)(ae.a,{row:!0,value:r.timeInterval,onChange:function(e){var n=e.target.value;i((function(){return{timeInterval:n,value:0}})),t("term",0)},children:[Object(J.jsx)(C.a,{value:"day",control:Object(J.jsx)(re.a,{}),label:"\u0414\u043d\u0438"}),Object(J.jsx)(C.a,{value:"mounth",control:Object(J.jsx)(re.a,{}),label:"\u041c\u0435\u0441\u044f\u0446\u044b"}),Object(J.jsx)(C.a,{value:"year",control:Object(J.jsx)(re.a,{}),label:"\u0413\u043e\u0434\u044b"})]}),Object(J.jsx)(ie.a,{name:"term",type:"number",value:r.value,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0440\u043e\u043a \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430",endAdornment:Object(J.jsx)(se.a,{position:"start",children:s(r.value)}),onChange:function(e){var n=e.target.value,a=r.timeInterval,c=Number(n),s=ue[a];i((function(e){return Object(g.a)(Object(g.a)({},e),{},{value:c})})),t("term",s(c))}})]})},he=n(146),de=n(212),me=function(e){var t=e.handleChange,n=e.optionValues,a=n.isEarlyRepayment,r=n.isPartial,c=n.isCapitalization;return Object(J.jsxs)(ee.a,{children:[Object(J.jsx)(te.a,{component:"legend",children:"\u041e\u043f\u0446\u0438\u0438"}),Object(J.jsxs)(he.a,{children:[Object(J.jsx)(C.a,{control:Object(J.jsx)(de.a,{name:"isEarlyRepayment",checked:a,onChange:t}),label:"\u0414\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0440\u0430\u0441\u0442\u043e\u0440\u0436\u0435\u043d\u0438\u0435"}),Object(J.jsx)(C.a,{control:Object(J.jsx)(de.a,{name:"isPartial",checked:r,onChange:t}),label:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u0441\u043d\u044f\u0442\u0438\u0435 \u0438 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"}),Object(J.jsx)(C.a,{control:Object(J.jsx)(de.a,{name:"isCapitalization",checked:c,onChange:t}),label:"\u041a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432"})]})]})},xe={rub:"\u20bd",usd:"$"},Oe={currency:"rub",amount:0,term:0,isEarlyRepayment:!1,isPartial:!1,isCapitalization:!1},Ae=function(){var e=Object(_.a)({initialValues:Oe,onSubmit:function(e){alert(JSON.stringify(e))}}),t=e.values,n=e.handleChange,a=e.handleSubmit,r=e.setFieldValue;return Object(J.jsxs)(v.a,{component:"form",spacing:3,onSubmit:a,children:[Object(J.jsx)(ce,{value:t.currency,handleChange:n}),Object(J.jsx)(oe,{value:t.amount,currencySymbol:xe[t.currency],handleChange:n}),Object(J.jsx)(be,{changeFormikFieldValue:r}),Object(J.jsx)(me,{handleChange:n,optionValues:{isEarlyRepayment:t.isEarlyRepayment,isPartial:t.isPartial,isCapitalization:t.isCapitalization}}),Object(J.jsx)(F.a,{variant:"text",type:"submit",children:"CheckForm"})]})},ge=Object(m.a)("div")(r||(r=Object(d.a)(["\n  border: 1px solid black;\n  height: 100%;\n"]))),pe=function(){return Object(J.jsx)(h.a,{children:Object(J.jsxs)($.a,{container:!0,spacing:2,children:[Object(J.jsx)($.a,{item:!0,xs:12,children:Object(J.jsx)(O.a,{variant:"h5",children:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})}),Object(J.jsx)($.a,{item:!0,xs:12,children:Object(J.jsx)(O.a,{variant:"subtitle1",mt:2,sx:{color:"text.secondary"},children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442."})}),Object(J.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(J.jsx)(Ae,{})}),Object(J.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(J.jsx)(ge,{})})]})})},ve=function(){return Object(J.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043e\u043a (\u0430\u0434\u043c\u0438\u043d\u043a\u0430)"})},Ee=Object(Z.b)(h.a)({height:"100%",background:"#FFFFFF",padding:"20px",margin:"15px",borderRadius:"15px",boxShadow:"0px 0px 8px 4px rgba(0, 0, 0, 0.06)"}),Ce=function(e){var t=e.userRole;return Object(J.jsx)(Ee,{children:"admin"===t?Object(J.jsx)(ve,{}):Object(J.jsx)(pe,{})})},fe=n(208),Fe=n(209),ye=n(201),Be=function(){return Object(J.jsx)(fe.a,{position:"static",children:Object(J.jsxs)(Fe.a,{children:[Object(J.jsx)(ye.a,{src:"data:image/png;base64,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",alt:"logo",sx:{mr:"15px"}}),Object(J.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"New Test Bank"}),Object(J.jsx)(F.a,{color:"inherit",children:"\u0412\u044b\u0445\u043e\u0434"})]})})},Ie=Object(Z.b)(h.a)({display:"flex",flexDirection:"column",height:"100%",background:"#eeeeee"}),we=function(){var e=M(X);return Object(J.jsxs)(Ie,{children:[Object(J.jsx)(Be,{}),Object(J.jsx)(Ce,{userRole:null===e||void 0===e?void 0:e.role})]})},Re=function(){return Object(J.jsx)(O.a,{variant:"h3",align:"center",mb:3,children:"\u041e\u0448\u0438\u0431\u043a\u0430! \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430."})},Se=function(){return Object(J.jsx)(h.a,{sx:{height:"100vh"},children:Object(J.jsx)(u.a,{children:Object(J.jsxs)(b.d,{children:[Object(J.jsx)(b.b,{path:"/*",element:Object(J.jsx)(P,{children:Object(J.jsx)(we,{})})}),Object(J.jsx)(b.b,{path:"login",element:Object(J.jsx)(T,{})}),Object(J.jsx)(b.b,{path:"*",element:Object(J.jsx)(Re,{})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(J.jsx)(i.a.StrictMode,{children:Object(J.jsx)(l.a,{store:W,children:Object(J.jsx)(j.a,{loading:null,persistor:D,children:Object(J.jsx)(Se,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.36acdc4d.chunk.js.map