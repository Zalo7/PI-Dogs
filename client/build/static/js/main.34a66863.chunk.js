(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),o=n.n(r),s=(n(47),n(14)),i=n.n(s),l=n(37),u=n.n(l),d=(n(68),n(5)),j=n(4),b=(n(69),n(0));function h(){return Object(b.jsxs)("div",{className:"landing",children:[Object(b.jsx)("h1",{className:"welcome"}),Object(b.jsx)(d.b,{to:"/home",children:Object(b.jsx)("button",{className:"button",children:"INGRESAR A MI PLANETA"})})]})}var m=n(42),p=n(19),O=n(3),f=n(13),g=n(12),v=n.n(g),x=n(16);function N(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/dogs");case 3:return n=e.sent,console.log(n),e.abrupt("return",t({type:"GET_DOGS",payload:n.data}));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}function E(e){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/temperaments");case 3:return n=e.sent,e.abrupt("return",t({type:"GET_TEMPERAMENTS",payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}var _=n(7);n(81);function y(){var e=Object(_.b)(),t=Object(j.f)(),n=Object(a.useState)({}),c=Object(f.a)(n,2),r=c[0],o=c[1],s=Object(_.c)((function(e){return e.temperaments})),l=Object(a.useState)({name:"",height:"",weight:"",life_span:"",created:!0,temperament:[]}),u=Object(f.a)(l,2),h=u[0],g=u[1];function N(e){g(Object(O.a)(Object(O.a)({},h),{},Object(p.a)({},e.target.name,e.target.value))),o(function(e){var t={};return e.name.trim()?e.height?e.weight?e.life_span||(t.life_span="Please enter a  life span for your dog"):t.weight="Please enter a  weight for your dog":t.height="Please enter a  height for your dog":t.name="Please enter a name for your dog",t}(Object(O.a)(Object(O.a)({},h),{},Object(p.a)({},e.target.name,e.target.value))))}function y(n){var a;n.preventDefault(),Object.values(r).length>0?alert("You need to fill everything form to create a breed"):(e((a=h,function(){var e=Object(x.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/breed",a);case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Raza creada!"),g({name:"",weight:{metirc:""},height:{metric:""},created:!0,life_span:"",dogs:[]}),t.push("/home"))}return Object(a.useEffect)((function(){e(E())}),[e]),Object(b.jsxs)("div",{className:"br",children:[Object(b.jsxs)("div",{className:"raza",children:[Object(b.jsx)("h1",{style:{margin:0},children:"Cre\xe1 tu Raza!"}),Object(b.jsx)(d.b,{style:{width:500,height:60},to:"/home",children:Object(b.jsx)("button",{className:"boton_X",children:"\u274c"})})]}),Object(b.jsxs)("form",{className:"form",onSubmit:function(e){return y(e)},children:[Object(b.jsx)("label",{className:"label",children:"Nombre:"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"fondo_blanco",children:[Object(b.jsx)("input",{className:"input_fondoBlanco",type:"text",value:h.name,name:"name",onChange:function(e){return N(e)},required:"true"}),r.name&&Object(b.jsx)("p",{children:r.name})]}),Object(b.jsx)("div",{}),Object(b.jsx)("label",{className:"label",children:"Altura:"}),Object(b.jsxs)("div",{className:"fondo_blanco",children:[Object(b.jsx)("input",{className:"input_fondoBlanco",type:"number",value:h.height,name:"height",onChange:function(e){return N(e)},required:"true"}),r.height&&Object(b.jsxs)("p",{children:[" ",r.height]})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"label",children:"Peso:"}),Object(b.jsxs)("div",{className:"fondo_blanco",children:[Object(b.jsx)("input",{className:"input_fondoBlanco",type:"number",value:h.weight,name:"weight",onChange:function(e){return N(e)},required:"true"}),r.weight&&Object(b.jsx)("p",{children:r.weight})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"label",children:"A\xf1os de vida:"}),Object(b.jsxs)("div",{className:"fondo_blanco",children:[Object(b.jsx)("input",{className:"input_fondoBlanco",type:"text",value:h.life_span,name:"life_span",onChange:function(e){return N(e)},required:"true"}),r.life_span&&Object(b.jsx)("p",{children:r.life_span})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("select",{className:"botones",onChange:function(e){return function(e){g(Object(O.a)(Object(O.a)({},h),{},{temperament:[].concat(Object(m.a)(h.temperament),[e.target.value])}))}(e)},children:s.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name},e.id)}))}),Object(b.jsx)("ul",{children:null===h||void 0===h?void 0:h.temperament.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("li",{children:e}),Object(b.jsx)("button",{className:"button-delete",onClick:function(){return t=e,void g(Object(O.a)(Object(O.a)({},h),{},{temperament:h.temperament.filter((function(e){return e!==t}))}));var t},children:"X"})]},t)}))})]}),Object(b.jsx)("button",{className:"crear",onClick:function(e){y(e)},children:"Crear Raza"})]})]})}n(82);function w(e){var t=e.name,n=e.image,a=e.weight;return Object(b.jsxs)("div",{className:"cards",children:[Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("h5",{children:a.metric})]}),Object(b.jsx)("img",{className:"img",src:(null===n||void 0===n?void 0:n.url)?null===n||void 0===n?void 0:n.url:"https://www.creativefabrica.com/wp-content/uploads/2020/09/01/Dog-paw-vector-icon-logo-design-heart-Graphics-5223218-1.jpg",alt:"img not found",width:"100%"})]})}n(83);function T(e){for(var t=e.dogsPerPage,n=e.allDogs,a=e.paginado,c=[],r=1;r<=Math.ceil(n/t);r++)c.push(r);return n<9&&(c=!1),console.log(c),Object(b.jsx)("nav",{className:"paginate",children:Object(b.jsx)("ul",{children:c&&c.map((function(e,t){return Object(b.jsx)("li",{className:"paginate",children:Object(b.jsxs)("button",{className:"button-paginate",onClick:function(){return a(e)},children:[e," "]})},t)}))})})}n(84);function D(){var e=Object(_.b)(),t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],r=n[1];function o(t){t.preventDefault(),e(function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/dogs?name="+e);case 3:return a=t.sent,t.abrupt("return",n({type:"GET_NAME_DOGS",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c))}return Object(b.jsxs)("div",{className:"sb",children:[Object(b.jsx)("input",{className:"searchy",type:"text",placeholder:"Search...",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value),console.log(c)}(e)}}),Object(b.jsx)("button",{className:"searchbar",type:"submit",onClick:function(e){return o(e)},children:"Buscar"})]})}n(85);function C(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("h1",{children:"Hola! soy Gonzalo Lorenz\xf3n, estudio en la academia Henry y este es mi Proyecto Individual de Dogs! donde podras conocer, crear, investigar, divertirte y m\xe1s importante poder conocer posiblemente a tu pr\xf3ximo compa\xf1ero canino! Espero que te guste fue hecho con mucho amor! \ud83d\udc96 "}),Object(b.jsx)(d.b,{to:"/home",children:Object(b.jsx)("button",{className:"button",children:"Back"})}),Object(b.jsx)("h4",{className:"linkedin",children:"LINKEDIN: Gonzalo Lorenzon"}),Object(b.jsx)("h4",{className:"github",children:"GITHUB: Zalo7"}),Object(b.jsx)("h4",{className:"discord",children:"DISCORD: Zalo7#8436"})]})}n(86),n(87);function R(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"escapado",children:"El perro se escap\xf3!"}),Object(b.jsx)("img",{className:"perrito",src:"https://animalpoisons.com.au/wp-content/uploads/2019/11/dog-ques-448x344.png",alt:"",width:"70%",height:"70%"})]})}function A(){var e=Object(_.b)(),t=Object(a.useState)(""),n=Object(f.a)(t,2)[1],c=Object(_.c)((function(e){return e.temperaments})),r=Object(_.c)((function(e){return e.dogs})),o=Object(a.useState)(1),s=Object(f.a)(o,2),i=s[0],l=s[1],u=Object(a.useState)(8),j=Object(f.a)(u,1)[0],h=i*j,m=h-j,p=r.slice(m,h),O=Object(a.useState)(""),g=Object(f.a)(O,2)[1];console.log(p);return Object(a.useEffect)((function(){e(N()),e(E())}),[e]),Object(b.jsxs)("div",{className:"fondo",children:[Object(b.jsx)("h1",{className:"title",children:"Planeta Canino"}),Object(b.jsx)("button",{className:"reload",onClick:function(t){!function(t){t.preventDefault(),e(N())}(t)},children:"Reload"}),Object(b.jsxs)("select",{className:"botones",onChange:function(t){!function(t){e({type:"ORDER_BY_WEIGHT",payload:t.target.value}),n("Ordenado ".concat(t.target.value))}(t)},children:[Object(b.jsx)("option",{disabled:!0,children:"Weight"}),Object(b.jsx)("option",{value:"max",children:"Max Weight"}),Object(b.jsx)("option",{value:"min",children:"Min Weight"})]}),Object(b.jsxs)("select",{className:"botones",onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_ASC",payload:t.target.value}),l(1),g("Ordenado ".concat(t.target.value))}(t)},children:[Object(b.jsx)("option",{value:"asc",children:"A-Z"}),Object(b.jsx)("option",{value:"desc",children:"Z-A"})]}),Object(b.jsxs)("select",{className:"temperamento",onChange:function(t){return function(t){e({type:"ORDER_BY_TEMPERAMENT",payload:t.target.value})}(t)},children:[Object(b.jsx)("option",{value:"All",children:"Temperaments"}),c&&c.map((function(e,t){return Object(b.jsx)("option",{value:e.name,children:e.name},t)}))]})," ",Object(b.jsxs)("select",{className:"botones",onChange:function(t){!function(t){e({type:"FILTER_CREATED",payload:t.target.value})}(t)},children:[Object(b.jsx)("option",{disabled:!0,children:"--Filter dogs--"}),Object(b.jsx)("option",{value:"Api Dogs",children:"Api Dogs"}),Object(b.jsx)("option",{value:"Created",children:"Created Dogs"})]}),Object(b.jsx)(d.b,{className:"crea",to:"/breed",children:"Crear raza"}),Object(b.jsx)(d.b,{className:"me",to:"/aboutme",children:"About me"}),Object(b.jsx)(D,{}),Object(b.jsxs)("div",{className:"doggys",children:[0===p.length&&p?Object(b.jsx)(R,{}):null===p||void 0===p?void 0:p.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/detail/"+e.id,children:Object(b.jsx)(w,{name:e.name,image:e.image?e.image:"https://media.rawg.io/media/games/a8b/a8bf6f31bfbdaf7d4b86c1953c62cee0.jpg",temperament:e.temperament?e.temperament:"No temperament",weight:e.weight?e.weight:"No weight"},e.id)})},t)})),Object(b.jsx)("div",{children:Object(b.jsx)(T,{dogsPerPage:j,allDogs:r.length,paginado:function(e){l(e)}})})]})]})}n(88);function S(e){var t,n,c,r,o=e.match.params.id;console.log(o);var s=Object(_.b)();Object(a.useEffect)((function(){s(function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/dogs/".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:"GET_DETAIL",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(o))}),[s,o]);var l=Object(_.c)((function(e){return e.detail}));return console.log(l),Object(b.jsxs)("div",{className:"detail_backg",children:[l?Object(b.jsxs)("div",{className:"detalle",children:[Object(b.jsxs)("h1",{className:"palabra",children:["Perro:",l.name]}),Object(b.jsx)("img",{className:"detail_image",src:(null===(t=l.image)||void 0===t?void 0:t.url)?null===(n=l.image)||void 0===n?void 0:n.url:"https://aristopet.com/wp-content/uploads/2016/11/sindrome-del-perro-negro-the-black-dog-project-aristopet-2.jpg",alt:"",width:"40%",height:"40%"}),Object(b.jsxs)("h2",{className:"palabra",children:["Altura: ",null===(c=l.height)||void 0===c?void 0:c.metric]}),Object(b.jsxs)("h3",{className:"palabra",children:["Peso: ",null===(r=l.weight)||void 0===r?void 0:r.metric]}),Object(b.jsxs)("h4",{className:"palabra",children:["Temperamentos:",l.temperament," "]}),Object(b.jsxs)("h5",{className:"palabra",children:["A\xf1os de vida: ",l.life_span]}),console.log(l)]}):Object(b.jsx)("h1",{children:"Not Found"}),Object(b.jsx)(d.b,{to:"/home",children:Object(b.jsx)("button",{className:"botone",children:"\u274c"})})]})}var P=function(){return Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(b.jsx)(j.a,{exact:!0,path:"/breed",component:y}),Object(b.jsx)(j.a,{exact:!0,path:"/home",component:A}),Object(b.jsx)(j.a,{exact:!0,path:"/detail/:id",component:S}),Object(b.jsx)(j.a,{exact:!0,path:"/aboutme",component:C})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},B=n(24),I=n(40),k=n(41),M={dogs:[],allDogs:[],filtrados:[],temperaments:[],filtrados2:[],detail:[],filtrados3:[]};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DOGS":function i(e){return!0===e.created&&(e.id=e.id+"db"),e}return Object(O.a)(Object(O.a)({},e),{},{dogs:t.payload.filter((function(e){return void 0!==e.temperament})).map(i),filtrados2:t.payload.filter((function(e){return void 0!==e.temperament})).map(i),filtrados3:t.payload.filter((function(e){return void 0!==e.temperament})).map(i)});case"ORDER_BY_ASC":var n="asc"===t.payload?e.dogs.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.dogs.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(O.a)(Object(O.a)({},e),{},{filtrados2:n});case"GET_TEMPERAMENTS":var a=t.payload.filter((function(e){return""!==e.name}));return Object(O.a)(Object(O.a)({},e),{},{temperaments:a});case"POST_BREED":return Object(O.a)({},e);case"GET_DETAIL":return Object(O.a)(Object(O.a)({},e),{},{detail:t.payload});case"ORDER_BY_TEMPERAMENT":var c=e.filtrados3,r="All"===t.payload?c:c.filter((function(e){return null===e||void 0===e?void 0:e.temperament.includes(t.payload)}));return Object(O.a)(Object(O.a)({},e),{},{dogs:r});case"GET_NAME_DOGS":return Object(O.a)(Object(O.a)({},e),{},{dogs:t.payload});case"ORDER_BY_WEIGHT":var o="max"===t.payload?e.filtrados2.sort((function(e,t){return e.weight.metric<t.weight.metric?1:t.weight.metric<e.weight.metric?-1:0})):e.filtrados2.sort((function(e,t){return e.weight.metric<t.weight.metric?-1:t.weight.metric<e.weight.metric?1:0}));return Object(O.a)(Object(O.a)({},e),{},{dogs:o});case"FILTER_CREATED":var s="Created"===t.payload?e.filtrados2.filter((function(e){return!0===e.created})):e.filtrados2.filter((function(e){return!e.created}));return Object(O.a)(Object(O.a)({},e),{},{dogs:s});default:return e}},F=Object(B.createStore)(L,Object(I.composeWithDevTools)(Object(B.applyMiddleware)(k.a)));u.a.config(),i.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",o.a.render(Object(b.jsx)(_.a,{store:F,children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})})}),document.getElementById("root")),G()}},[[89,1,2]]]);
//# sourceMappingURL=main.34a66863.chunk.js.map