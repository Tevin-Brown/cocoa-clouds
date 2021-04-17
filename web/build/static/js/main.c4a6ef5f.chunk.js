(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{27:function(e,n,t){e.exports=t.p+"static/media/Logo.714253c8.png"},30:function(e,n,t){e.exports=t(59)},35:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(26),o=t.n(c);t(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(7),u=t(11),l={config:void 0},s=r.a.createContext(void 0),f=r.a.createContext(void 0),d=function(e,n){var t=Object(u.a)({},e);switch(n.type){case"setConfig":return t.config=n.data,t;default:throw new Error("Unhandled action type: ".concat(n))}},v=function(e){var n=e.children,t=r.a.useReducer(d,l),a=Object(i.a)(t,2),c=a[0],o=a[1];return r.a.createElement(s.Provider,{value:c},r.a.createElement(f.Provider,{value:o},n))},m=function(){var e=r.a.useContext(s);if(void 0===e)throw new Error("useAppState must be used within a AppProvider");return e},b=t(1),p=t(2),x=t(8),h=t(6);function g(){var e=Object(b.a)(["\n  ",";\n  color: #3cacae;\n"]);return g=function(){return e},e}function w(){var e=Object(b.a)(["\n  color: black;\n  outline: none;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 500;\n  padding: 0px 10px;\n"]);return w=function(){return e},e}function E(){var e=Object(b.a)(["\n  box-sizing: border-box;\n  margin: 0px 10px;\n"]);return E=function(){return e},e}function j(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100px;\n  box-shadow: 2px 0 5px 0px #888;\n  background: #efebff;\n  box-sizing: border-box;\n"]);return j=function(){return e},e}var O=Object(p.a)(j()),y=Object(p.a)(E()),N=Object(p.a)(w()),C=Object(p.a)(g(),N),A=t(27),k=t.n(A),I="/",S="/satellites",_="/about",P="/gfs",R=function(){return r.a.createElement("div",{className:O},r.a.createElement("div",{className:y},r.a.createElement("img",{src:k.a,width:"60px",height:"50px"})),r.a.createElement(x.b,{exact:!0,to:I,className:N,activeClassName:C},"Home"),r.a.createElement(x.b,{to:P,className:N,activeClassName:C},"GFS"),r.a.createElement(x.b,{to:S,className:N,activeClassName:C},"Satellite Imagery"))};function B(){var e=Object(b.a)(["\n  background: #ffffff;\n  box-shadow: 0px 1px 10px 0px #888;\n  box-sizing: border-box;\n  padding: 25px;\n"]);return B=function(){return e},e}var z=Object(p.a)(B()),D=function(e){var n=e.styleOverrides,t=e.children;return r.a.createElement("div",{className:z,style:n},t)};function F(){var e=Object(b.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  flex-direction: column;\n  width: 80vw;\n  min-height: calc(100vh - 250px);\n  box-sizing: border-box;\n  margin: 25px auto;\n"]);return F=function(){return e},e}var U=Object(p.a)(F()),L=function(){return r.a.createElement("div",{className:U},r.a.createElement(D,null,"Home"))};function W(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100px;\n  box-shadow: 2px 0 5px 0px #888;\n  background: #efebff;\n  box-sizing: border-box;\n  color: #888;\n"]);return W=function(){return e},e}var T=Object(p.a)(W()),G=function(){return r.a.createElement("div",{className:T},r.a.createElement("span",null,"Copyright Tevin Brown"))},V=t(12),H=t.n(V),J=t(9),M=t.n(J);function $(){var e=Object(b.a)(["\n  margin: 8px;\n"]);return $=function(){return e},e}function q(){var e=Object(b.a)(["\n  margin:8px;\n  color:blue;\n  &:hover {\n    cursor: pointer;\n    color: gray;\n  }\n"]);return q=function(){return e},e}function K(){var e=Object(b.a)(["\n  margin:8px;\n  &:hover {\n    cursor: pointer;\n    color: gray;\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(b.a)(["\n  display: flex;\n"]);return Q=function(){return e},e}function X(){var e=Object(b.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  flex-direction: column;\n  align-items: center;\n"]);return X=function(){return e},e}function Y(){var e=Object(b.a)(["\n  max-width:75%;\n  max-height:75%;\n"]);return Y=function(){return e},e}function Z(){var e=Object(b.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  min-height: 100vh;\n  box-sizing: border-box;\n"]);return Z=function(){return e},e}var ee=Object(p.a)(Z()),ne=Object(p.a)(Y()),te=Object(p.a)(X()),ae=Object(p.a)(Q()),re=Object(p.a)(K()),ce=Object(p.a)(q()),oe=Object(p.a)($()),ie={color_IR:"Infared",color_WV:"Water Vapor"},ue=Object(h.f)((function(e){var n=e.location,t=e.history,c=function(){var e=m().config;return Object(a.useMemo)((function(){return{satelliteService:{getSattelliteDirectories:function(){return H.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",M.a.get((null===e||void 0===e?void 0:e.API_BASE_URL)+"/satellites/list/all"));case 1:case"end":return n.stop()}}))},getDirectoryFiles:function(n){return H.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",M.a.get((null===e||void 0===e?void 0:e.API_BASE_URL)+"/satellites/list/"+n));case 1:case"end":return t.stop()}}))},getImage:function(n,t){return H.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",M.a.get("".concat(null===e||void 0===e?void 0:e.API_BASE_URL,"/satellites/").concat(n,"/").concat(t),{responseType:"blob"}));case 1:case"end":return a.stop()}}))}}}}),[e])}().satelliteService,o=Object(a.useState)(),u=Object(i.a)(o,2),l=u[0],s=u[1],f=Object(a.useState)(0),d=Object(i.a)(f,2),v=d[0],b=d[1],p=Object(a.useRef)(null),x=n.hash.slice(1),h=function(e){switch(e){case"next":l&&(null===l||void 0===l?void 0:l.length)>v&&b(v+1);break;case"previous":v>0&&b(v-1)}};return Object(a.useEffect)((function(){Object.keys(ie).includes(x)&&c.getDirectoryFiles(x).then((function(e){s(e.data.data),b(0)}))}),[n]),Object(a.useEffect)((function(){l&&c.getImage(x,l[v]).then((function(e){var n=new window.FileReader;n.readAsDataURL(e.data),n.onload=function(){var e,t=n.result;null===(e=p.current)||void 0===e||e.setAttribute("src",t)}}))}),[v,l]),r.a.createElement("div",{className:ee},r.a.createElement("div",{className:ae},Object.entries(ie).map((function(e){var n=Object(i.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{className:x===a?ce:re,onClick:function(){return function(e){var n="".concat(S,"#").concat(e);t.push(n)}(a)}},c)}))),r.a.createElement("div",{className:te},r.a.createElement("img",{className:ne,ref:p}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return h("previous")},className:oe},"Previous"),r.a.createElement("button",{onClick:function(){return h("next")},className:oe},"Next"))))})),le={ABI_GeoColor:[],ABI_TrueColor:[],color_IR:[],color_WV:[]},se=r.a.createContext(void 0),fe=r.a.createContext(void 0),de=function(e,n){var t=Object(u.a)({},e);switch(n.type){case"setDirectory":return t[n.data.directoryName]=n.data.directories,t;default:throw new Error("Unhandled action type: ".concat(n))}},ve=function(e){var n=e.children,t=r.a.useReducer(de,le),a=Object(i.a)(t,2),c=a[0],o=a[1];return r.a.createElement(se.Provider,{value:c},r.a.createElement(fe.Provider,{value:o},n))};function me(){var e=Object(b.a)(["\n  background: #eeeeee;\n"]);return me=function(){return e},e}var be=Object(p.a)(me()),pe=function(){var e=m().config,n=function(){var e=r.a.useContext(f);if(void 0===e)throw new Error("useAppDispatch must be used within a AppProvider");return e}();return Object(a.useEffect)((function(){e||M.a.get(window.location.origin+"/config.json").then((function(e){n({type:"setConfig",data:e.data})}))}),[]),r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(x.a,null,r.a.createElement("div",{className:be},r.a.createElement(R,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:I,component:L}),r.a.createElement(h.a,{path:_},r.a.createElement("div",null,"About")),r.a.createElement(h.a,{path:P},r.a.createElement("div",null,"GFS Model")),r.a.createElement(ve,null,r.a.createElement(h.a,{exact:!0,path:S,component:ue})),r.a.createElement(h.a,null,r.a.createElement("div",null,"This page was not found"))),r.a.createElement(G,null))))},xe=function(){return r.a.createElement(v,null,r.a.createElement(pe,null))};o.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c4a6ef5f.chunk.js.map