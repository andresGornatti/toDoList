(this.webpackJsonptoDoList=this.webpackJsonptoDoList||[]).push([[0],{138:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(18),c=n.n(s);n(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(19),i=n(20),o=n(26),l=n(21),p=n(27),d=n(7),f=n(3),m=n.n(f),k=n(4),b=(n(62),n(63),"https://gornatti-justdoit-api.herokuapp.com"),h=function(){var e=Object(k.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("session"),e.prev=1,a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)},e.next=5,fetch("".concat(b,"/tasks"),a);case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(k.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("session"),e.prev=1,n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.next=5,fetch("".concat(b,"/tasks"),n);case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(k.a)(m.a.mark((function e(t){var n,a,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("session"),e.prev=1,a={method:"delete",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({_id:t})},e.next=5,fetch("".concat(b,"/tasks/").concat(t),a);case 5:return r=e.sent,e.next=8,r.json();case 8:return s=e.sent,e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(k.a)(m.a.mark((function e(t,n){var a,r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("session"),e.prev=1,r={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(n)},e.next=5,fetch("".concat(b,"/tasks/").concat(t),r);case 5:return s=e.sent,e.next=8,s.json();case 8:if(c=e.sent){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(1),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(k.a)(m.a.mark((function e(t){var n,a,r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(b,"/users"),n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(r=e.sent,a.ok){e.next=10;break}throw new Error;case 10:return localStorage.setItem("session",r.token),s=r.user,c=r.token,e.abrupt("return",Object(d.a)({},s,{tkn:c}));case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(k.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(b,"/users/login"),n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(r=e.sent,a.ok){e.next=10;break}throw new Error;case 10:return localStorage.setItem("session",r.token),e.abrupt("return",r);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(k.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("session"),e.prev=1,a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.next=5,fetch("".concat(b,"/users/logout"),a);case 5:if(e.sent){e.next=8;break}throw new Error;case 8:return localStorage.removeItem("session"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(k.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.next=4,fetch("".concat(b,"/users/login/profile"),n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(r=e.sent,a.ok){e.next=10;break}throw new Error;case 10:return e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.userLogged,n=e.setRoute,a=e.updateUserSession,s=function(){var e=Object(k.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:if(t=e.sent,console.log(t,"loggedOut"),t){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a("logout");case 8:n("tasks");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,t?r.a.createElement("ul",null,r.a.createElement("li",{onClick:s},r.a.createElement("span",null,"Cerrar sesi\xf3n"))):r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return n("signup")}},r.a.createElement("span",null,"Reg\xedstrate")),r.a.createElement("li",{onClick:function(){return n("login")}},r.a.createElement("span",null,"Inicia sesi\xf3n"))))},j=function(e){var t=e.userLogged,n=e.setRoute,a=e.route,s=e.updateUserSession,c=!!a.match(/(login|signup)/);return r.a.createElement("header",{className:"header ".concat(a)},r.a.createElement("div",{onClick:function(){return n("tasks")},id:"logo"},"JustDoIt"),!c&&r.a.createElement(w,{userLogged:t,setRoute:n,updateUserSession:s}))},A=n(22),S=(n(64),n(6)),L=n.n(S),R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={email:"",name:"",password:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.userLogged,a=t.setRoute,s=t.route,c=t.updateUserSession,u=t.readTasks,i=function(){var t=Object(k.a)(m.a.mark((function t(r){var s,i,o,l,p;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",!1);case 2:if(r.preventDefault(),s=e.state,i=s.email,o=s.password,L.a.isEmail(i)){t.next=6;break}return t.abrupt("return",!1);case 6:if(!L.a.isEmpty(o)&&L.a.isAlphanumeric(o)){t.next=8;break}return t.abrupt("return",!1);case 8:return l={email:i,password:o},t.next=11,x(l);case 11:if(p=t.sent){t.next=14;break}return t.abrupt("return",!1);case 14:return t.next=16,c("login",p);case 16:return t.next=18,u();case 18:a("tasks");case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(k.a)(m.a.mark((function t(r){var s,u,i,o,l,p;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",!1);case 2:if(r.preventDefault(),s=e.state,u=s.email,i=s.password,o=s.name,L.a.isEmail(u)){t.next=6;break}return t.abrupt("return",!1);case 6:if(!L.a.isEmpty(i)&&L.a.isAlphanumeric(i)){t.next=8;break}return t.abrupt("return",!1);case 8:if(!L.a.isEmpty(o)&&L.a.isAlphanumeric(o)){t.next=10;break}return t.abrupt("return",!1);case 10:return l={name:o,email:u,password:i},t.next=13,y(l);case 13:if(p=t.sent){t.next=16;break}return t.abrupt("return",!1);case 16:return t.next=18,c("signup",p);case 18:a("tasks");case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t){var n=t.target.getAttribute("name"),a=t.target.value;e.setState(Object(A.a)({},n,a))};return"login"===s?r.a.createElement("form",{method:"POST",action:"/"},r.a.createElement("h2",null,"Logueate"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{onChange:function(e){return l(e)},type:"text",name:"email",required:!0}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",{className:"input-label",htmlFor:"input"},"E-mail")),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{onChange:function(e){return l(e)},type:"password",name:"password",required:!0}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",{className:"input-label",htmlFor:"input"},"Contrase\xf1a")),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{type:"submit",onClick:function(e){return i(e)}},"Entrar"),r.a.createElement("button",{type:"button",onClick:function(){return a("signup")}},"Registrarse"))):"signup"===s?r.a.createElement("form",{method:"POST",action:"/"},r.a.createElement("h2",null,"Registrate"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{onChange:function(e){return l(e)},type:"text",name:"name",required:!0}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",{className:"input-label",htmlFor:"input"},"Nombre")),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{onChange:function(e){return l(e)},type:"text",name:"email",required:!0}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",{className:"input-label",htmlFor:"input"},"E-mail")),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{onChange:function(e){return l(e)},type:"password",name:"password",required:!0}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",{className:"input-label",htmlFor:"input"},"Contrase\xf1a")),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{type:"submit",onClick:function(e){return o(e)}},"Registrar"),r.a.createElement("button",{type:"button",onClick:function(){return a("login")}},"Loguearse"))):void 0}}]),t}(r.a.Component),C=n(25),N=function(e){var t=e.buttonAction,n=e.content,a=e.taskId,s=e.className,c=s;return"special-button"===s&&(c="icon-".concat(n," ").concat(s)),r.a.createElement("button",{className:c,onClick:function(){return t(a)}})},I=(n(138),n(149)),U={TASK:"task"},_=function(e){e.leftButtonContent;var t=e.taskState,n=e.description,a=e.taskId,s=r.a.useContext(V),c=s.deleteTask,u=s.editTask,i=s.updateTask,o=Object(I.a)({item:{taskId:a,type:U.TASK},collect:function(e){return{isDragging:!!e.isDragging()}}}),l=Object(C.a)(o,2),p=l[0].isDragging,d=l[1],f=function(e){var t=e.target,n=function(e,n){return function(){t.textContent=n}};if("dblclick"===e.type){t.setAttribute("contentEditable","true"),t.focus();var r=e.target.textContent;e.persist(),t.addEventListener("blur",n(0,r))}if(13===e.keyCode){var s=t.textContent;e.preventDefault(),t.removeAttribute("contentEditable"),t.removeEventListener("blur",n),u(a,s)}},m=p?.2:1;return r.a.createElement("li",{className:"task",ref:d,style:{opacity:m}},r.a.createElement(N,{buttonAction:function(){switch(t){case"pending":return i(a,{taskState:"doing"});case"doing":return i(a,{taskState:"finished"});case"finished":return i(a,{taskState:"doing"});default:return!1}},taskId:a,className:"special-button",content:t}),r.a.createElement("span",{contentEditable:!1,onDoubleClick:function(e){return f(e)},onKeyDown:function(e){return f(e)},style:{cursor:"text"}},n),r.a.createElement(N,{buttonAction:c,taskId:a,className:"close-button icon-trash"}))},D=(n(140),n(150)),P=function(e){var t=e.columnType,n=e.tasks,a=e.title,s=r.a.useContext(V),c=s.updateTask,u=(s.idTaskList,Object(D.a)({accept:U.TASK,drop:function(e,n){return function(e){switch(t){case"tasksPending":return c(e,{taskState:"pending"});case"tasksDoing":return c(e,{taskState:"doing"});case"tasksFinished":return c(e,{taskState:"finished"});default:return!1}}(e.taskId)},collect:function(e){return{isOver:!!e.isOver()}}})),i=Object(C.a)(u,2),o=i[0].isOver,l=i[1],p=o?"calc(".concat(document.querySelector(".columna.".concat(t)).offsetHeight,"px + 30px)"):"initial";return r.a.createElement("div",{className:"columna ".concat(t),ref:l,style:{height:p}},r.a.createElement("h2",null,a),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(_,{taskState:e.taskState,description:e.description,taskId:e._id,key:e._id})}))))},B=(n(141),function(e){var t=e.addTask;return r.a.createElement("div",{id:"add-task-box"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"text-task",placeholder:"Agrega una tarea",autoFocus:!0,required:!0,onKeyUp:function(e){return function(e){var n;if(13===e.keyCode&&(n=e.target.value),"click"===e.type&&(n=e.target.parentNode.children[0].children[0].value),n)return t(n)}(e)}}),r.a.createElement("span",{className:"bar"})))}),J=n(24),F=function(e){return{type:"LEER_TAREAS",payload:e}},q=function(e){return{type:"AGREGAR_TAREA",payload:e}},z=function(e){return{type:"ELIMINAR_TAREA",idTask:e}},G=function(e,t){return{type:"ACTUALIZAR_TAREA",idTask:e,taskUpdate:t}},K=function(e){return{type:"SETEAR_RUTA",payload:e}},Z=function(e,t){return{type:"ACTUALIZAR_SESION",sessionState:e,user:t}},H=function(e){return{type:"LEER_USUARIO",user:e}},M=n(53),W=n(148),$=n(151),Q=function(){var e,t=localStorage.getItem("session");return t&&(e=L.a.isJWT(t)),!(!t||!e)},V=r.a.createContext({updateTask:null,deleteTask:null,editTask:null,idTaskList:null}),X=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(k.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q()){t.next=5;break}return t.next=4,e.props.getUserLogged();case 4:e.props.readTasks();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e,t=this.props,n=t.taskList,a=t.idTaskList,s=t.userLogged,c=t.route,u=this.props,i=u.addTask,o=u.deleteTask,l=u.editTask,p=u.updateTask,d=u.setRoute,f=u.readTasks,m=u.updateUserSession,k=n.filter((function(e){return"pending"===e.taskState})),b=n.filter((function(e){return"doing"===e.taskState})),h=n.filter((function(e){return"finished"===e.taskState}));switch(c){case"tasks":e=r.a.createElement("div",null,r.a.createElement(B,{addTask:i}),r.a.createElement("div",{id:"tasks-container"},r.a.createElement(V.Provider,{value:{updateTask:p,deleteTask:o,editTask:l,idTaskList:a}},r.a.createElement(W.a,{backend:M.a},r.a.createElement(P,{columnType:"tasksPending",title:"Tareas por hacer",tasks:k}),r.a.createElement(P,{columnType:"tasksDoing",title:"Haciendo ahora",tasks:b}),r.a.createElement(P,{columnType:"tasksFinished",title:"Tareas realizadas",tasks:h})))));break;case"signup":case"login":e=r.a.createElement("div",{id:"form-container"},r.a.createElement(R,{userLogged:s,updateUserSession:m,setRoute:d,route:c,readTasks:f}));break;default:e=r.a.createElement("h1",null," Page 404: Not found ")}return r.a.createElement("div",{id:"todo"},r.a.createElement(j,{userLogged:s,setRoute:d,route:c,updateUserSession:m}),r.a.createElement("main",null,e),r.a.createElement("footer",null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://andresgornatti.github.io/andresGornatti/",target:"new"},"@andresGornatti"))))}}]),t}(r.a.Component),Y=Object(J.b)((function(e){var t=null;return 0===e.taskList.length&&(t=e.taskList.map((function(e){return e.id}))),{taskList:e.taskList,idTaskList:t,route:e.route,userLogged:e.userLogged,user:e.user}}),(function(e){return{addTask:function(){var t=Object(k.a)(m.a.mark((function t(n){var a,r,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q()){t.next=10;break}return a={description:n},t.next=4,h(a);case 4:if(r=t.sent){t.next=7;break}return t.abrupt("return",!1);case 7:e(q(r)),t.next=12;break;case 10:s={description:n,taskState:"pending",_id:Object($.a)()},e(q(s));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),readTasks:function(){var t=Object(k.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:a=t.sent,e(F(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteTask:function(){var t=Object(k.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q()){t.next=9;break}return e(z(n)),t.next=4,v(n);case 4:if(t.sent){t.next=7;break}return t.abrupt("return",!1);case 7:t.next=10;break;case 9:e(z(n));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),editTask:function(){var t=Object(k.a)(m.a.mark((function t(n,a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q()){t.next=10;break}return e(G(n,r={description:a})),t.next=5,E(n,r);case 5:if(t.sent){t.next=8;break}return t.abrupt("return",!1);case 8:t.next=11;break;case 10:e({type:"EDITAR_TAREA",idTask:n,payload:a});case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),updateTask:function(){var t=Object(k.a)(m.a.mark((function t(n,a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q()){t.next=9;break}return e(G(n,a)),t.next=4,E(n,a);case 4:if(t.sent){t.next=7;break}return t.abrupt("return",!1);case 7:t.next=10;break;case 9:e(G(n,a));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),setRoute:function(){var t=Object(k.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(K(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updateUserSession:function(){var t=Object(k.a)(m.a.mark((function t(n,a){var r,s,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a?(s=a.user,c=a.token,r=Object(d.a)({},s,{token:c})):r=null,e(Z(n,r));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),getUserLogged:function(){var t=Object(k.a)(m.a.mark((function t(){var n,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("session"),t.next=3,O(n);case 3:if(a=t.sent){t.next=6;break}return t.abrupt("return",!1);case 6:r=Object(d.a)({},a,{tkn:n}),e(H(r));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))(X),ee=n(12),te=n(30),ne={taskList:[],route:"tasks",userLogged:!1,user:null},ae=Object(ee.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("AGREGAR_TAREA"===t.type&&""!==t.payload){var n=[].concat(Object(te.a)(e.taskList),[Object(d.a)({},t.payload,{leftButtonContent:"icon-googleplay"})]);return Object.assign({},e,{taskList:n})}switch(t.type){case"LEER_TAREAS":var a=[].concat(Object(te.a)(e.taskList),Object(te.a)(t.payload));return Object(d.a)({},e,{taskList:a});case"ELIMINAR_TAREA":var r=e.taskList.filter((function(e){return e._id!==t.idTask}));return Object.assign({},e,{taskList:r});case"EDITAR_TAREA":var s=e.taskList.map((function(e){return e._id===t.idTask&&(e.description=t.payload),e}));return Object.assign({},e,{taskList:s});case"ACTUALIZAR_TAREA":var c=e.taskList.map((function(e){e._id===t.idTask&&Object.keys(t.taskUpdate).forEach((function(n){return e[n]=t.taskUpdate[n]}));return e}));return Object.assign({},e,{taskList:c});case"SETEAR_RUTA":return Object(d.a)({},e,{route:t.payload});case"ACTUALIZAR_SESION":switch(t.sessionState){case"login":case"signup":return Object.assign({},e,{userLogged:!0,user:t.user,taskList:[]});case"logout":return Object.assign({},e,{userLogged:!1,user:null,taskList:[]});default:return e}case"LEER_USUARIO":return Object.assign({},e,{userLogged:!0,user:t.user,taskList:[]});default:return e}}));c.a.render(r.a.createElement(J.a,{store:ae},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,n){e.exports=n(145)},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){}},[[55,1,2]]]);
//# sourceMappingURL=main.904068c6.chunk.js.map