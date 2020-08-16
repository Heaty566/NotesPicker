(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),l=(a(96),a(15)),i=(a(97),a(98),a(73)),m=function(e){var t=e.pageDescription,a=e.pageKeyWords,c=e.pageTitle,r=e.pageImageURL;return n.createElement(i.a,null,n.createElement("title",null,"".concat(c," | Notespicker")),n.createElement("meta",{name:"description",content:t}),n.createElement("meta",{name:"keywords",content:a}),n.createElement("meta",{name:"og:tittle",content:c}),n.createElement("meta",{name:"og:description",content:t}),n.createElement("meta",{name:"og:type",content:"article"}),n.createElement("meta",{name:"og:image",content:r}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:t}),n.createElement("meta",{name:"twitter:image",content:r}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:site",content:"@website-username"}))},s=a(12),u=a(31),d=a(161),p=a(27),g=a.n(p),E=a(76),b=a(80),f=a(175),h=a(162),y=a(163),v=a(54),O=a(157),j=function(e){var t=e.StartIcon,a=e.label,n=Object(v.a)(e,["StartIcon","label"]);return c.a.createElement(O.a,Object.assign({},n,{variant:"contained",startIcon:t}),a)},k=function(e){var t=e.username,a=e.handleOnLogout;return Object(n.useContext)(G).isLogin?c.a.createElement(d.a,{container:!0,spacing:1},c.a.createElement(d.a,{xs:8,item:!0,className:"flex-center"},c.a.createElement(f.a,{className:"max-dimension",style:{fontSize:"14px"},icon:c.a.createElement(h.a,null),label:t,color:"primary",clickable:!0})),c.a.createElement(d.a,{xs:4,item:!0,container:!0,justify:"center",alignItems:"center"},c.a.createElement(j,{StartIcon:c.a.createElement(y.a,null),color:"secondary",onClick:a,label:"Logout"}))):c.a.createElement(d.a,{container:!0},c.a.createElement("a",{className:"google google__btn",href:"".concat("http://localhost:4000","/api/user/auth/google")},c.a.createElement(E.a,{icon:b.a,style:{marginRight:"8px"}}),c.a.createElement("span",null,"Login with Google+")))},N=a(166),x=a(168),S=a(167),w=a(174),C=function(e){var t=e.label,a=Object(v.a)(e,["label"]),r=Object(n.useContext)(G).control;return c.a.createElement(u.a,Object.assign({control:r},a,{as:c.a.createElement(w.a,{variant:"standard",label:t,size:"small",className:"max-dimension"})}))},I=function(e){var t=e.values,a=void 0===t?[]:t,n=e.onSubmit,r=e.handleOnDelete,o=e.handleOnAdd;return c.a.createElement("form",{id:"myform",onSubmit:n},c.a.createElement(d.a,{container:!0},a.map((function(e,t){return c.a.createElement(d.a,{key:e.id,container:!0,spacing:1,style:{marginBottom:"8px"}},c.a.createElement(d.a,{item:!0,xs:3},c.a.createElement(C,{name:"notes[".concat(t,"].name"),defaultValue:"",label:"Note ".concat(t+1)})),c.a.createElement(d.a,{item:!0,xs:5},c.a.createElement(C,{name:"notes[".concat(t,"].data"),defaultValue:"",label:"Data ".concat(t+1)})),c.a.createElement(d.a,{item:!0,xs:4,container:!0,alignItems:"center",justify:"center"},c.a.createElement(j,{onClick:function(){return r(t)},StartIcon:c.a.createElement(N.a,null),color:"secondary",label:"Delete"})))})),c.a.createElement(d.a,{container:!0,justify:"center"},c.a.createElement(S.a,{color:"primary","aria-label":"add",size:"small",onClick:o},c.a.createElement(x.a,null)))))},D=a(126),L=a(169),_=a(173),V=a(172),R=a(177),A=a(170),B=a(171),J=function(e){var t=e.lists,a=void 0===t?[]:t,r=e.onSubmit,o=e.handleOnDelete,l=e.check,i=e.handleOnCheck,m=Object(n.useContext)(G),s=m.control,p=m.isLogin;return c.a.createElement(d.a,{container:!0,spacing:1},c.a.createElement(d.a,{container:!0,item:!0,alignItems:"center",justify:"space-between"},c.a.createElement(D.a,{variant:"h5"},"Menu"),c.a.createElement(L.a,{value:l,onClick:i,control:c.a.createElement(_.a,{name:"copyName",color:"primary"}),label:"Copy Name or Data"})),c.a.createElement(d.a,{container:!0,item:!0,spacing:1,alignItems:"center",justify:"center"},c.a.createElement(d.a,{item:!0,xs:8},c.a.createElement(C,{name:"name",defaultValue:"",label:"Note Name"})),c.a.createElement(d.a,{item:!0,xs:4,container:!0,justify:"center"},c.a.createElement(j,{type:"submit",StartIcon:c.a.createElement(A.a,null),form:"myform",color:"primary",label:"Save"}))),p&&c.a.createElement(d.a,{container:!0,item:!0,justify:"center",alignItems:"center",spacing:1},c.a.createElement(d.a,{item:!0,xs:4},c.a.createElement("form",{id:"user-form",onSubmit:r},c.a.createElement(u.a,{name:"selectNote",control:s,defaultValue:"default",as:c.a.createElement(V.a,{style:{width:"100%"}},c.a.createElement(R.a,{value:"default"},"Select Your Note"),null!==a&&a.map((function(e,t){return c.a.createElement(R.a,{value:t,key:t},e.name)})))}))),c.a.createElement(d.a,{item:!0,xs:4,container:!0,justify:"center"},c.a.createElement(j,{color:"primary",StartIcon:c.a.createElement(B.a,null),type:"submit",form:"user-form",label:"Import"})),c.a.createElement(d.a,{item:!0,xs:4,container:!0,justify:"center"},c.a.createElement(j,{color:"secondary",StartIcon:c.a.createElement(N.a,null),type:"button",form:"user-form",label:"Delete",onClick:o}))))},P=a(81),F=a.n(P),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.length>t?e.slice(0,t)+"...":e},W=function(e){var t=e.data,a=void 0===t?[]:t,n=e.handleOnCopy,r=e.copyName;return c.a.createElement(d.a,{container:!0,item:!0,className:"workspace__container"},a.map((function(e,t){return c.a.createElement(F.a,{onCopy:n,key:t,text:r?e.name:e.data},c.a.createElement(O.a,{className:"workspace__btn",variant:"contained",color:"primary",style:{background:"".concat(e.data)}},c.a.createElement(D.a,{variant:"h6"},T(e.name,15)),c.a.createElement(D.a,{variant:"body2",style:{wordBreak:"break-all"}},T(e.data,50))))})))},z=a(53),H=function(){return c.a.createElement(z.b,{to:"/home",className:"m-b-2"},c.a.createElement("img",{src:"/asset/image/logo.svg",style:{height:"64px",objectFit:"cover"},alt:"Notes Picker"}))},K=function(){return c.a.createElement("span",{style:{display:"block",height:"2px",backgroundColor:"#2c3e50",width:"100%",opacity:"0.8",margin:"16px 0"}})},U=a(82),q=a.n(U),G=c.a.createContext(),M=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),m=i[0],p=i[1],E=Object(n.useState)(!1),b=Object(s.a)(E,2),f=b[0],h=b[1],y=Object(n.useState)([]),v=Object(s.a)(y,2),O=v[0],j=v[1],N=Object(n.useState)(!1),x=Object(s.a)(N,2),S=x[0],w=x[1],C=Object(n.useState)(localStorage.getItem("notes")),D=Object(s.a)(C,1)[0],L=Object(n.useState)("undefined"!==D?JSON.parse(D):[{name:"",data:""}]),_=Object(s.a)(L,1)[0],V=Object(u.c)({defaultValues:{notes:_,copyName:!1}}),R=V.control,A=V.getValues,B=V.handleSubmit,P=V.setValue,F=(0,V.watch)("notes"),T=Object(u.b)({name:"notes",control:R}),z=T.append,U=T.remove,M=T.fields;Object(n.useEffect)((function(){P("notes","undefined"!==D?JSON.parse(D):[{name:"",data:""}])}),[P,D]),Object(n.useEffect)((function(){f||localStorage.setItem("notes",JSON.stringify(A().notes))}),[A,F,f]),Object(n.useEffect)((function(){g.a.get("/api/user/getRecords").then((function(e){var t=e.data.data;j(t)})),g.a.get("/api/user/me").then((function(e){var t=e.data,a=t.data,n=t.msg;a&&(l.b.success(n),r(a),p(!0))}))}),[P]);var Y=Object(n.useCallback)((function(e){var t=e.selectNote;"default"!==t?O[t].data?(h(!0),l.b.success("Importing successes"),U(),O[t].data.forEach((function(e){z()})),h(!1),z(),P("name",O[t].name),P("notes",O[t].data)):(P("name",O[t].name),l.b.success("Importing empty")):l.b.warn("Please select your note")}),[z,O,U,P]),$=Object(n.useCallback)((function(){"default"!==A("selectNote")?g.a.delete("/api/user/deleteNote/".concat(A().selectNote)).then((function(e){var t=e.data.msg;l.b.success(t),g.a.get("/api/user/getRecords").then((function(e){var t=e.data.data;j(t)}))})).catch((function(e){var t=e.response.data.msg,a=void 0===t?"":t;return l.b.error(a)})):l.b.warn("Please select your note")}),[A]),Q=Object(n.useCallback)((function(e){var t=e.name,a=e.notes;g.a.post("/api/user/addNewNote",{name:t,data:a},{headers:{"Content-Type":"application/json"}}).then((function(e){var t=e.data.msg;l.b.success(t),g.a.get("/api/user/getRecords").then((function(e){var t=e.data.data;j(t)}))})).catch((function(e){var t=e.response.data.msg,a=void 0===t?"":t;return l.b.error(a)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{container:!0,className:"container"},c.a.createElement(d.a,{container:!0,item:!0,xs:12,sm:6,md:4,lg:3,style:{minHeight:"100%",background:"#fefefe",padding:"16px 24px"},alignItems:"center",direction:"column"},c.a.createElement(H,null),c.a.createElement(G.Provider,{value:{control:R,isLogin:m}},c.a.createElement(k,{handleOnLogout:function(){g.a.post("/api/user/logout").then((function(e){var t=e.data.msg;l.b.success(t),p(!1)}))},username:a}),c.a.createElement(K,null),c.a.createElement(J,{lists:O,onSubmit:B(Y),handleOnDelete:$,check:S,handleOnCheck:function(){return w(!S)}}),c.a.createElement(K,null),c.a.createElement(I,{values:M,onSubmit:B(Q),handleOnDelete:function(e){l.b.success("Deleted Note"),U(e)},handleOnAdd:function(){l.b.success("Added Note"),z()}}))),c.a.createElement(d.a,{container:!0,xs:12,sm:6,md:8,lg:9,item:!0},c.a.createElement(W,{data:A().notes,handleOnCopy:function(){new Audio(q.a).play()},copyName:S}))))};var Y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{pageTitle:"Home",pageDescription:"A small tool for picking up your notes or palettes quickly and easily, Notespicker can handle multiple notes and remainders at the same time.",pageKeyWords:"picker, note, colors, notespicker, palette, remainder, notes",pageImageURL:"/asset/image/banner.png"}),c.a.createElement(l.a,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),c.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(z.a,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a.p+"static/media/click.627c0e8b.mp3"},91:function(e,t,a){e.exports=a(125)},96:function(e,t,a){},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.0757e70e.chunk.js.map