(this["webpackJsonpmy-watch-movies-app"]=this["webpackJsonpmy-watch-movies-app"]||[]).push([[0],{63:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(36),s=a.n(c),i=(a(63),a(19)),r=a(0),o=a.n(r),l=a(3),d=a(9),u=a(43),j=a(8),b=a(24),m=a(54);Object(m.a)({apiKey:"AIzaSyAVCEG6KRzRZLcrrw279zUdQR6SeyRP0e8",authDomain:"netflix-clone-88ee9.firebaseapp.com",projectId:"netflix-clone-88ee9",storageBucket:"netflix-clone-88ee9.appspot.com",messagingSenderId:"697372213727",appId:"1:697372213727:web:28e6118941181714d2846a"});var h=a.p+"static/media/Netflix-logo.893e75f1.png",f=(a(71),"[Auth] Login"),p="[Auth] Logout",x="[Load] loading",O="[Load] finish",g=function(e,t){return{type:f,payload:{uid:e,email:t}}},v=function(){return{type:p}},A=a(20),w=(a(72),a(4)),E=function(){var e=Object(i.c)((function(e){return e.load})).loading;return Object(w.jsx)(w.Fragment,{children:e&&Object(w.jsx)("div",{className:"spinnerContent",children:Object(w.jsx)("div",{className:"spinner"})})})},C=function(){return function(e){e({type:x})}},N=function(){var e=Object(i.b)();return Object(w.jsxs)("div",{className:"signUp_screen",children:[Object(w.jsx)("h1",{children:"Inicia sesi\xf3n"}),Object(w.jsx)(A.c,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.email)||(t.email="El correo de poseer caracteres v\xe1lidos"):t.email="Ingresar correo",e.password||(t.password="Ingresar contrase\xf1a"),t},onSubmit:function(t,a){(0,a.resetForm)(),e(C()),e(function(e){var t=e.email,a=e.password;return function(e){var n=Object(b.b)();Object(b.d)(n,t,a).then((function(t){var a=t.user;e(g(a.uid,a.email)),e({type:O})})).catch((function(t){e({type:O}),alert("correo o contrase\xf1a no v\xe1lidos")}))}}(t))},children:function(e){var t=e.values,a=e.touched,n=e.errors,c=e.handleChange,s=e.handleSubmit;return Object(w.jsxs)(A.b,{onSubmit:s,children:[Object(w.jsx)(A.a,{type:"email",autoComplete:"off",placeholder:"email",name:"email",value:t.email,onChange:c,className:"input_netflix"}),a.email&&n.email&&Object(w.jsx)("p",{className:"error",children:n.email}),Object(w.jsx)(A.a,{type:"password",placeholder:"password",autoComplete:"off",name:"password",value:t.password,onChange:c,className:"input_netflix"}),a.password&&n.password&&Object(w.jsx)("p",{className:" error",children:n.password}),Object(w.jsx)("button",{className:"button_netflix",type:"submit",children:"Iniciar sesi\xf3n"})]})}}),Object(w.jsx)(E,{})]})},_=(a(74),function(e){var t=e.correo,a=Object(i.b)();return Object(w.jsxs)("div",{className:"signUp_screen",children:[Object(w.jsx)("h1",{children:"Crea una cuenta "}),Object(w.jsx)(A.c,{initialValues:{email:"".concat(t),password:""},validate:function(e){var t={};return e.email?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.email)||(t.email="El correo de poseer caracteres v\xe1lidos"):t.email="Ingresar correo",e.password||(t.password="Ingresar contrase\xf1a"),t},onSubmit:function(e,t){(0,t.resetForm)(),a(C()),a(function(e){var t=e.email,a=e.password;return function(e){var n=Object(b.b)();Object(b.a)(n,t,a).then((function(t){var a=t.user;e(g(a.uid,a.email)),e({type:O})})).catch((function(t){e({type:O}),alert("correo o contrase\xf1a no v\xe1lidos")}))}}(e))},children:function(e){var t=e.values,a=e.touched,n=e.errors,c=e.handleChange,s=e.handleSubmit;return Object(w.jsxs)(A.b,{onSubmit:s,children:[Object(w.jsx)(A.a,{type:"email",autoComplete:"off",placeholder:"email",name:"email",value:t.email,onChange:c,className:"input_netflix"}),a.email&&n.email&&Object(w.jsx)("p",{className:"error",children:n.email}),Object(w.jsx)(A.a,{type:"password",placeholder:"password",autoComplete:"off",name:"password",value:t.password,onChange:c,className:"input_netflix"}),a.password&&n.password&&Object(w.jsx)("p",{className:" error",children:n.password}),Object(w.jsx)("button",{className:"button_netflix",type:"submit",children:"Registrarse"})]})}}),Object(w.jsx)(E,{})]})}),I=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(""),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(w.jsx)("div",{className:"loginScreen",children:Object(w.jsxs)("div",{className:"background",children:[Object(w.jsxs)("div",{className:"navLogin",children:[Object(w.jsx)("img",{src:h,alt:"logo_Netflix",className:"logo",onClick:function(){return c(!1)}}),Object(w.jsx)("button",{className:"session",onClick:function(){c(!0)},children:"Iniciar Sesion"})]}),a?Object(w.jsx)(N,{}):r?Object(w.jsx)(_,{correo:j}):Object(w.jsxs)("div",{className:"body",children:[Object(w.jsx)("h1",{children:"Pel\xedculas y series ilimitadas y mucho m\xe1s."}),Object(w.jsx)("h2",{children:"Disfruta donde quieras. Cancela cuando quieras."}),Object(w.jsx)("h3",{children:"\xbfQuieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membres\xeda de Netflix."}),Object(w.jsxs)("form",{onSubmit:function(){o(!0)},children:[Object(w.jsx)("input",{type:"email",placeholder:"Email",className:"input_comenzar",value:j,onChange:function(e){return b(e.target.value)}}),Object(w.jsx)("button",{className:"btn_comenzar",children:"Comenzar"})]})]})]})})},y=function(e){var t=e.isAuthenticated,a=e.element;return t?a:Object(w.jsx)(j.a,{to:"/login"})},Q=function(e){var t=e.isAuthenticated,a=e.element;return t?Object(w.jsx)(j.a,{to:"/home"}):a},M=(a(75),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(j.g)(),r=Object(i.b)(),u=Object(i.c)((function(e){return e.auth})).email;Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]);return Object(w.jsxs)("nav",{className:"nav ".concat(a&&"nav_black"),children:[Object(w.jsx)("img",{src:h,alt:"logo_Netflix",className:"nav_logo",onClick:function(){return s({pathname:"./home"})}}),Object(w.jsx)("img",{src:"data:image/png;base64,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",alt:"avatar",className:"nav_avatar"}),Object(w.jsxs)("div",{className:"menu",children:[Object(w.jsx)("div",{className:"flecha",children:Object(w.jsx)("i",{className:"fas fa-sort-down "})}),Object(w.jsx)("div",{className:"close",children:Object(w.jsxs)("span",{className:"spanClose",onClick:function(e){e.preventDefault(),r(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(b.b)(),e.next=3,a.signOut();case 3:t(v());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[" Cerrar sesi\xf3n en Netflix de ",u," "]})})]})]})}),B=a(31),S=a(40),k=a.n(S),Y="98fb07fc01997f5eb9995c471905d6a4",T={fetchNetflixOriginal:"discover/tv?api_key=".concat(Y,"&with_networks=213"),fetchTrending:"trending/all/week?api_key=".concat(Y),fetchActionMovies:"discover/movie?api_key=".concat(Y,"&language=en-US&sort_by=popularity.desc&page=1&with_genres=28"),fetchTopRated:"movie/top_rated?api_key=".concat(Y,"&language=en-US"),fetchComedyMovies:"discover/movie?api_key=".concat(Y,"&language=en-US&sort_by=popularity.desc&page=1&with_genres=35"),fetchHorrorMovies:"discover/movie?api_key=".concat(Y,"&language=en-US&sort_by=popularity.desc&page=1&with_genres=27"),fetchRomanceMovies:"discover/movie?api_key=".concat(Y,"&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749"),fetchDocumentaries:"discover/movie?api_key=".concat(Y,"&language=en-US&sort_by=popularity.desc&page=1&with_genres=99")},L=(a(94),a(95),function(e){var t=e.backdrop_path,a=e.title,n=e.overview,c=e.name,s=(e.release_date,e.first_air_date,e.vote_average),i=e.setModalVisibility;return Object(w.jsx)("div",{className:"presentation",role:"presentation",children:Object(w.jsx)("div",{className:"wrapper-modal",children:Object(w.jsxs)("div",{className:"modal",children:[Object(w.jsx)("span",{onClick:function(){return i(!1)},className:"modal-close",children:Object(w.jsx)("i",{className:"fas fa-times "})}),Object(w.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original/").concat(t),alt:a,className:"modal__poster-img"}),Object(w.jsxs)("div",{className:"modal__content",children:[Object(w.jsx)("p",{className:"modal__title",children:a||c}),Object(w.jsx)("p",{className:"modal__overview",children:n}),Object(w.jsxs)("p",{className:"modal__overview",children:["Vote Average: ",s]})]})]})})})}),D=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),r=i[0],u=i[1],j=Object(n.useState)({}),b=Object(d.a)(j,2),m=b[0],h=b[1];Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.themoviedb.org/3/".concat(T.fetchNetflixOriginal));case 2:return t=e.sent,a=Math.floor(Math.random()*t.data.results.length-1),c(t.data.results[a]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var f,p,x=(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name),O=null===x||void 0===x?void 0:x.toUpperCase();return Object(w.jsxs)("div",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"top center",backgroundSize:"cover"},children:[Object(w.jsxs)("div",{className:"banner__contents",children:[Object(w.jsx)("h1",{className:"banner__title",children:O}),Object(w.jsx)("h2",{className:"banner__description",style:{wordWrap:"break-word"},children:(f=a.overview,p=150,(null===f||void 0===f?void 0:f.length)>p?"".concat(f.substr(0,p-1)," ..."):f)}),Object(w.jsxs)("div",{className:"banner__buttons",children:[Object(w.jsxs)("button",{className:"banner__button play",children:[Object(w.jsx)("i",{className:"fas fa-play",children:" "}),"\xa0Reproducir"]}),Object(w.jsxs)("button",{className:"banner__button information",onClick:function(){return function(e){u(!0),h(e)}(a)},children:[Object(w.jsx)("i",{className:"fas fa-info-circle"}),"\xa0M\xe1s informaci\xf3n"]})]})]}),r&&Object(w.jsx)(L,Object(B.a)(Object(B.a)({},m),{},{setModalVisibility:u}))]})},J=(a(96),function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,s=e.id,i=Object(n.useState)([]),r=Object(d.a)(i,2),u=r[0],j=r[1],b=Object(n.useState)(!1),m=Object(d.a)(b,2),h=m[0],f=m[1],p=Object(n.useState)({}),x=Object(d.a)(p,2),O=x[0],g=x[1];Object(n.useEffect)((function(){try{var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.themoviedb.org/3/".concat(a));case 2:return t=e.sent,j(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[a]);return Object(w.jsxs)("section",{className:"row",children:[Object(w.jsx)("h2",{className:"title",children:t}),Object(w.jsxs)("div",{className:"slider",children:[Object(w.jsx)("div",{className:"slider__arrow-left",children:Object(w.jsx)("span",{className:"arrow",onClick:function(){document.getElementById(s).scrollLeft-=window.innerWidth-80},children:Object(w.jsx)("i",{className:"fas fa-angle-left fa-2x"})})}),Object(w.jsx)("div",{id:s,className:"row__posters",children:u.map((function(e){return(c&&e.poster_path||!c&&e.backdrop_path)&&Object(w.jsx)("img",{className:"row__poster ".concat(c&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(c?e.poster_path:e.backdrop_path),alt:null===e||void 0===e?void 0:e.name,onClick:function(){return function(e){f(!0),g(e)}(e)}},e.id)}))}),Object(w.jsx)("div",{className:"slider__arrow-right",children:Object(w.jsx)("span",{className:"arrow",onClick:function(){document.getElementById(s).scrollLeft+=window.innerWidth-80},children:Object(w.jsx)("i",{className:"fas fa-angle-right fa-2x"})})})]}),h&&Object(w.jsx)(L,Object(B.a)(Object(B.a)({},O),{},{setModalVisibility:f}))]})}),P=(a(97),function(){return Object(w.jsx)("div",{className:"footer",children:Object(w.jsx)("div",{className:"cont-footer",children:Object(w.jsx)("h5",{children:"1997-2021 Netflix-clone"})})})}),F=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(M,{}),Object(w.jsx)(D,{}),Object(w.jsx)(J,{title:"Solo en Netflix",id:"NO",fetchUrl:T.fetchNetflixOriginal,isLargeRow:!0}),Object(w.jsx)(J,{title:"Tendencias",id:"TN",fetchUrl:T.fetchTrending}),Object(w.jsx)(J,{title:"M\xe1s populares",id:"TR",fetchUrl:T.fetchTopRated}),Object(w.jsx)(J,{title:"Documentales",id:"DM",fetchUrl:T.fetchDocumentaries}),Object(w.jsx)(J,{title:"Pel\xedculas de terror",id:"HM",fetchUrl:T.fetchHorrorMovies}),Object(w.jsx)(J,{title:"Pel\xedculas de Acci\xf3n",id:"AM",fetchUrl:T.fetchActionMovies}),Object(w.jsx)(J,{title:"Pel\xedculas de Comedia",id:"CM",fetchUrl:T.fetchComedyMovies}),Object(w.jsx)(J,{title:"Pel\xedculas de Romace",id:"RM",fetchUrl:T.fetchRomanceMovies}),Object(w.jsx)(P,{})]})},U=function(){var e=Object(i.b)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){var t=Object(b.b)();Object(b.c)(t,function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(g(a.uid,a.email)),s(!0)):s(!1);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e]),Object(w.jsx)("div",{className:"root",children:Object(w.jsx)(u.a,{children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{path:"/login",element:Object(w.jsx)(Q,{isAuthenticated:c,element:Object(w.jsx)(I,{})})}),Object(w.jsx)(j.b,{path:"/*",element:Object(w.jsx)(y,{isAuthenticated:c,element:Object(w.jsx)(F,{})})}),Object(w.jsx)(j.b,{path:"/home",element:Object(w.jsx)(y,{isAuthenticated:c,element:Object(w.jsx)(F,{})})})]})})})},z=a(33),V=a(57),W={loading:!1},R="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c,X=Object(z.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{uid:t.payload.uid,email:t.payload.email};case p:return{};default:return e}},load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case O:return{loading:!1};default:return e}}}),Z=Object(z.d)(X,R(Object(z.a)(V.a)));a(98);var H=function(){return Object(w.jsx)(i.a,{store:Z,children:Object(w.jsx)(U,{})})};s.a.render(Object(w.jsx)(H,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.3680e787.chunk.js.map