(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{199:function(e,t,n){e.exports=function(){return new Worker(n.p+"5de305705e4dddfc6fbe.worker.js")}},237:function(e,t,n){e.exports=n(466)},466:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(44),o=n.n(i),l=n(9),c=n(2),u=n(18),s={red:"#D0103A",yellow:"#FDC82F",blue:"#00338D",azure:"#0098DB",green:"#008542",orange:"#E37222"},d="#FFFFFF",m="#F5F5F5",p="#D5D6D2",f="#747678",h="#666666",g="#4D4F53",b="#363636",v="#222222",y="#171717",E="#000000",O=(Object(l.a)({},s,{dark:{red:"#822433",yellow:"#B88B00",blue:"#002664",azure:"#00549F",green:"#284E36",orange:"#9D5116"},background:d,border:{content:Object(u.a)(.9,E),divider:p,dividerOpacity:Object(u.a)(.85,E)},heading:y,headingSubtle:b,primary:s.red,secundary:s.yellow,surface:{regular:m,selected:p},text:{regular:v,bold:E,subtle:h},title:E}),Object(l.a)({},s,{background:y,border:{content:Object(u.a)(.9,d),divider:g,dividerOpacity:Object(u.a)(.85,d)},heading:m,headingSubtle:b,primary:s.red,secundary:s.yellow,surface:{regular:v,selected:g},text:{regular:p,bold:d,subtle:f},title:d})),x=Object(l.a)({},O,{breakpoints:{xs:0,sm:600,md:960,lg:1280,xl:1920}}),w=function(e){var t=e.children;return r.a.createElement(c.ThemeProvider,{theme:x},t)},j=n(10),k=n(196),C=n.n(k);function _(){var e=Object(j.a)(["\n  ",";\n\n  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);\n\n  body {\n    background-color: ",";\n    color: ",';\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code, pre {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n']);return _=function(){return e},e}var z=Object(c.createGlobalStyle)(_(),C.a,function(e){return e.theme.background},function(e){return e.theme.title}),I=n(3),N=n.n(I),S=c.default.header.withConfig({displayName:"AppBar",componentId:"sc-1aetorj-0"})(["border-bottom:1px solid ",";width:100%;display:flex;z-index:1100;box-sizing:border-box;flex-shrink:0;flex-direction:column;"],function(e){return e.theme.border.content});S.propTypes={children:N.a.any};var T=S,M=c.default.button.withConfig({displayName:"CircleButton",componentId:"sc-1kl2lz0-0"})(["color:",";border-radius:50%;background:none;",";border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;width:","px;height:","px;padding:","px;transition:background-color 150ms ease-out;box-sizing:border-box;&:hover{",";}&:active{transition:background-color 80ms ease-out;background-color:",";}"],function(e){return e.theme.title},function(e){var t=e.variant,n=e.theme;return"regular"===t?Object(c.css)(["background-color:",";"],Object(u.a)(.93,n.title)):"ghost"===t?Object(c.css)(["background-color:",";"],Object(u.a)(1,n.title)):void 0},function(e){return e.size},function(e){return e.size},function(e){return e.padding},function(e){var t=e.variant,n=e.theme;return"regular"===t?Object(c.css)(["background-color:",";"],Object(u.a)(.9,n.title)):"ghost"===t?Object(c.css)(["background-color:",";"],Object(u.a)(.93,n.title)):void 0},function(e){var t=e.theme;return Object(u.a)(.95,t.title)});M.propTypes={onClick:N.a.func,title:N.a.string.isRequired,children:N.a.element.isRequired,size:N.a.number,padding:N.a.number,variant:N.a.oneOf(["regular","ghost"])},M.defaultProps={size:34,padding:5,variant:"regular"};var L=M,P=n(126),H=n(45),D=n(17),A=n(13),R=n(15),U="[evolution] ",V=U+"SET_DCGP_INSTANCE",F=function(e){return{type:"[evolution] WORKER_MESSAGE_OUT",payload:e}},G=U+"START_EVOLUTION",B=U+"PAUSE_EVOLUTION",K=U+"RESET_EVOLUTION",q=U+"DONE_EVOLUTION",W=U+"INITIAL_EVOLUTION",Y=U+"EVOLUTION_PROGRESS",J=function(e){return{type:W,payload:e}},$=function(){return{type:B}},Q=function(){return{type:K}};var X=Object(R.b)({instance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case V:return Object(l.a)({},e,a);default:return e}},isEvolving:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case G:return!0;case B:case K:case q:return!1;default:return e}},isDone:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case q:return!0;case K:return!1;default:return e}},initial:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case W:return a;case K:return{};default:return e}},steps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Y:return[].concat(Object(D.a)(e),[a]);case K:return[];default:return e}}}),Z="[settings] SET_SEED",ee="[settings] TOGGLE_KERNEL",te={sum:"addition",diff:"subtraction",mul:"multiplication",pdiv:"divide",sin:"sine",cos:"cosine",log:"logarithm",exp:"exponential"},ne="[settings] SET_ROWS",ae="[settings] SET_COLUMNS",re="[settings] SET_ARITY",ie="[settings] SET_LEVELS_BACK",oe={rows:{label:"rows",min:1,max:10},columns:{label:"columns",min:1,max:100},arity:{label:"arity",min:2,max:5},levelsBack:{label:"levels back",min:1,max:101}},le="[settings] SET_ALGORITHM",ce={onePlusLambda:{label:"one plus lambda",settings:{offsprings:4,maxGenerations:1e3}}};var ue={sum:!1,diff:!0,mul:!0,pdiv:!0,sin:!0,cos:!0,log:!1,exp:!1};var se={rows:1,columns:25,arity:2,levelsBack:5};var de={id:"onePlusLambda",offsprings:4,maxGenerations:1e3};for(var me=Object(R.b)({seed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return t.payload;default:return e}},kernels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ee:return Object(l.a)({},e,Object(H.a)({},a,!e[a]));default:return e}},network:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ne:return Object(l.a)({},e,{rows:a});case ae:return Object(l.a)({},e,{columns:a});case re:return Object(l.a)({},e,{arity:a});case ie:return Object(l.a)({},e,{levelsBack:a});default:return e}},algorithm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case le:return Object(l.a)({},e,{id:a});default:return e}}}),pe="[dataset] SET_POINTS",fe="[dataset] CHANGE_DATASET",he={linear:{label:"linear"},sinc:{label:"cardinal sine"}},ge="[dataset] ADD_INPUT",be="[dataset] ADD_OUTPUT",ve="[dataset] REMOVE_INPUT",ye="[dataset] REMOVE_OUTPUT",Ee="[dataset] SET_INPUTS",Oe="[dataset] SET_OUTPUTS",xe=10,we=1,je=[],ke=-10;ke<=xe;ke+=we)je.push(ke);for(var Ce={equation:"y = 2x+2",inputs:["x","1"],outputs:["y"],points:je.map(function(e){return{y:2*e+2,1:1,x:e}})},_e=10,ze=1,Ie=[],Ne=-10;Ne<=_e;Ne+=ze)Ie.push(Ne);var Se={equation:"y = sin(x) / x",inputs:["x"],outputs:["y"],points:Ie.map(function(e){var t=Math.sin(e)/e;return{y:isNaN(t)?1:t,x:e}})};var Te=Object(R.b)({outputs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case be:return[].concat(Object(D.a)(e),[a]);case Oe:return a;case ye:return e.filter(function(e){return e!==a});default:return e}},inputs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ge:return[].concat(Object(D.a)(e),[a]);case Ee:return a;case ve:return e.filter(function(e){return e!==a});default:return e}},points:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case pe:return a;default:return e}}}),Me=Object(R.b)({linear:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce},sinc:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se},client:Te}),Le=Object(R.b)({id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sinc",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case fe:return a;default:return e}},byId:Me}),Pe=Object(R.b)({evolution:X,settings:me,datasets:Le}),He=n(198),De=function(e){return e.evolution.instance},Ae=function(e){return e.evolution.steps},Re=Object(A.a)(Ae,function(e){return e.length?e[e.length-1].step:0}),Ue=Object(A.a)(Ae,function(e){return e.evolution.initial},function(e,t){return e.length?e[e.length-1].loss:t?t.loss:null}),Ve=Object(A.a)(function(e){return e.evolution.steps},function(e){return e.evolution.initial},function(e,t){return e.length?e[e.length-1].chromosome:t?t.chromosome:null}),Fe=Object(A.a)(function(e){return e.evolution},function(e){return e.isEvolving?"EVOLVING":e.steps.length?"PAUSING":"EMPTY"}),Ge=function(e){return e.settings},Be=function(e){return e.settings.kernels},Ke=Object(A.a)(Be,function(e){return Object.keys(e).reduce(function(t,n){return e[n]&&t.push(n),t},[])}),qe=function(e){return e.datasets.id},We=Object(A.a)(qe,function(e){return e.datasets.byId},function(e,t){return t[e]}),Ye=Object(A.a)(We,function(e){return e.equation}),Je=Object(A.a)(We,function(e){return e.inputs}),$e=Object(A.a)(We,function(e){return e.outputs}),Qe=Object(A.a)(We,function(e){return e.points}),Xe=Object(A.a)(Je,Qe,function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}),Ze=Object(A.a)($e,Qe,function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}),et=n(199),tt=n.n(et),nt=[function(e){var t=e.dispatch,n=new tt.a;return n.onmessage=function(e){t(e.data)},function(e){return function(t){"[evolution] WORKER_MESSAGE_OUT"===t.type&&n.postMessage(t.payload),e(t)}}},function(e){return function(t){return function(n){n.type!==V?t(n):Object(He.a)(n.payload.module).then(function(a){t(Object(l.a)({},n,{payload:Object(l.a)({},n.payload,a)})),e.dispatch(J())})}}},function(e){return function(t){return function(n){if(n.type===B&&e.dispatch(F(n)),n.type===K){e.dispatch(F(n)),t(n);var a=Math.round(1e3*Math.random());return e.dispatch(function(e){return{type:Z,payload:e}}(a)),void e.dispatch(J())}if("[evolution] STEP_EVOLUTION"===n.type&&e.dispatch($()),n.type!==G&&"[evolution] STEP_EVOLUTION"!==n.type){if(n.type===W){var r=e.getState(),i=De(r),o=Ke(r),c=Ge(r),u=Xe(r),s=Ze(r),d=c.seed,m=c.network,p=m.rows,f=m.columns,h=m.arity,g=m.levelsBack,b=c.algorithm.id,v=new i.KernelSet(o),y=new i.Expression(u[0].length,s[0].length,p,f,g,h,v,d),E=i.algorithms[b](y,1,0,u,s);return v.destroy(),y.destroy(),void t(Object(l.a)({},n,{payload:Object(l.a)({},n.payload,E)}))}t(n)}else{var O=e.getState(),x=Ue(O);if(null!==x&&x<=1e-14)return;t(n);var w=Ke(O),j=Ge(O),k=Re(O),C=Ve(O),_=Xe(O),z=Ze(O);e.dispatch(F(Object(l.a)({},n,{payload:Object(l.a)({},n.payload,{activeKernelIds:w,parameters:j,step:k,inputs:_,labels:z,chromosome:C})})))}}}}],at=[function(e){return function(t){return function(n){if(n.type===ee){var a=e.getState(),r=n.payload;if(!(r in a.settings.kernels))throw new Error('The specified kernelId "'.concat(r,'" does not exist.'));return t(n),void e.dispatch(Q())}t(n)}}},function(e){return function(t){return function(n){if(t(n),"[settings] NETWORK_CHANGE"===n.type){var a=e.dispatch,r=n.payload,i=r.settingId,o=r.value;switch(i){case"rows":a({type:ne,payload:o});break;case"columns":a({type:ae,payload:o});break;case"arity":a({type:re,payload:o});break;case"levelsBack":a({type:ie,payload:o});break;default:throw new Error("settingId ".concat(i," is not allowed"))}a(Q())}}}}],rt=[function(e){return function(t){return function(n){t(n),n.type===fe&&e.dispatch(Q())}}}],it=[].concat(Object(D.a)(nt),Object(D.a)(at),Object(D.a)(rt));var ot,lt=Object(R.d)(Pe,ot,Object(R.c)(R.a.apply(void 0,Object(D.a)(it)))),ct=function(e){var t=Object(a.useMemo)(function(){return function(e){var t=Object.values(e),n=Object.keys(e);return A.a.apply(void 0,Object(D.a)(t).concat([function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce(function(e,t,a){return Object(l.a)({},e,Object(H.a)({},n[a],t))},{})}]))}(e)},[e]),n=Object(a.useState)(function(){return t(lt.getState())}),r=Object(P.a)(n,2),i=r[0],o=r[1],c=Object(a.useRef)(i);return Object(a.useEffect)(function(){return lt.subscribe(function(){var e=lt.getState(),n=t(e);c.current!==n&&(c.current=n,o(n))})},[t]),Object.assign(i,{dispatch:lt.dispatch})},ut=c.default.svg.attrs(function(e){var t=e.size;return{width:t,height:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}}).withConfig({displayName:"Base",componentId:"sc-9r8hfh-0"})(["fill:currentColor;color:",";user-select:none;"],function(e){var t=e.checked,n=e.theme;return t?n.primary:"inherit"});ut.propTypes={size:N.a.number},ut.defaultProps={size:24};var st=ut,dt=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))},mt=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))},pt=n(27);function ft(){var e=Object(j.a)(["flex-grow: 1; margin-left: 30px;"]);return ft=function(){return e},e}function ht(){var e=Object(j.a)(["margin-left: -12px;"]);return ht=function(){return e},e}var gt=c.default.h1.withConfig({displayName:"Navigation__Title",componentId:"sc-4y9by0-0"})(["font-size:20px;font-weight:600;margin:0;"]),bt=c.default.div.withConfig({displayName:"Navigation__Padding",componentId:"sc-4y9by0-1"})(["display:flex;align-items:center;min-height:64px;width:100%;box-sizing:border-box;padding:0px 20px;","{padding:0 50px;}","{padding:0 130px;}"],Object(pt.up)("sm"),Object(pt.up)("md")),vt=c.default.div.withConfig({displayName:"Navigation__Width",componentId:"sc-4y9by0-2"})(["display:flex;align-items:center;width:100%;max-width:1180px;box-sizing:border-box;margin-left:auto;margin-right:auto;"]),yt=function(e){var t=e.handleMenuToggle,n=function(e){var t=Object(a.useMemo)(function(){return window.matchMedia(e)},[e]),n=Object(a.useState)(t.matches),r=Object(P.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)(function(){var e=function(e){o(e.matches)};return t.addListener(e),function(){t.removeListener(e)}},[e]),i}("(min-width: 960px)");return r.a.createElement(T,null,r.a.createElement(bt,null,r.a.createElement(vt,null,r.a.createElement(Et,{onClick:t,title:"Menu",size:48,padding:12,variant:"ghost"},r.a.createElement(mt,{size:null})),r.a.createElement(Ot,null,n?"differentiable cartesian genetic programming":"dcgp"),r.a.createElement(L,{as:"a",title:"GitHub",size:48,padding:12,variant:"ghost",href:"https://github.com/mikeheddes/dcgp.js"},r.a.createElement(dt,{size:null})))))},Et=Object(c.default)(L)(ht()),Ot=Object(c.default)(gt)(ft()),xt=n(78);function wt(){var e=Object(j.a)(["display: inline-block;"]);return wt=function(){return e},e}var jt=c.default.p.withConfig({displayName:"Footer__Text",componentId:"sc-12qak28-0"})(["color:",";text-align:center;font-size:0.75rem;font-weight:400;line-height:1.66;margin:0;"],function(e){return e.theme.text.subtle}),kt=Object(c.default)(function(e){var t=e.className,n=(e.children,Object(xt.a)(e,["className","children"]));return r.a.createElement("footer",Object.assign({className:t},n),r.a.createElement(jt,null,"Copyright \xa9 ",(new Date).getFullYear()," European Space Agency."," ",r.a.createElement(Ct,null,"All rights reserved.")))}).withConfig({displayName:"Footer",componentId:"sc-12qak28-1"})(["background-color:",";height:64px;padding:0 20px;display:flex;align-items:center;justify-content:center;flex-direction:column;"],function(e){return e.theme.surface.regular}),Ct=Object(c.default)("span")(wt()),_t=c.default.main.withConfig({displayName:"Page",componentId:"lil103-0"})(["margin-left:auto;margin-right:auto;max-width:1180px;padding:30px 20px;display:grid;grid-template-columns:[full-start] 1fr [full-end];grid-template-rows:auto;grid-gap:20px;","{grid-template-columns:[full-start] repeat(2,1fr) [full-end];padding:50px;}","{grid-gap:30px;padding-left:130px;padding-right:130px;}","{grid-template-columns:[full-start] repeat(4,1fr) [full-end];}"],Object(pt.up)("sm"),Object(pt.up)("md"),Object(pt.up)("lg"));_t.propType={childern:N.a.node.isRequired};var zt=_t,It=c.default.hr.withConfig({displayName:"Divider",componentId:"v6yb9-0"})(["display:block;height:auto;margin:0;border-bottom:0;border-left:0;border-width:2px;border-top-style:solid;border-right-style:solid;border-color:",";"],function(e){return e.theme.border.divider}),Nt=function(e){return r.a.createElement(st,e,e.checked?r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},St=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};function Tt(){var e=Object(j.a)(["grid-column: full;"]);return Tt=function(){return e},e}var Mt=Object.keys(he),Lt=c.default.h2.withConfig({displayName:"Dataset__Heading",componentId:"evwzon-0"})(["margin:0;margin-bottom:20px;font-weight:600;"]),Pt=c.default.ul.withConfig({displayName:"Dataset__List",componentId:"evwzon-1"})(["list-style:none;display:flex;flex-direction:row;padding:0;margin:0;"]),Ht=c.default.li.withConfig({displayName:"Dataset__Item",componentId:"evwzon-2"})(["display:flex;flex-direction:row;align-items:center;margin-right:15px;cursor:pointer;"]),Dt=c.default.span.withConfig({displayName:"Dataset__Label",componentId:"evwzon-3"})(["margin-left:8px;"]),At={datasetId:qe},Rt=function(){var e=ct(At),t=e.dispatch,n=e.datasetId,i=Object(a.useCallback)(function(e){return function(){return t({type:fe,payload:e})}},[t]);return r.a.createElement(Ut,null,r.a.createElement(Lt,null,"Select data"),r.a.createElement(Pt,null,Mt.map(function(e){return r.a.createElement(Ht,{key:e,onClick:i(e)},r.a.createElement(Nt,{checked:n===e}),r.a.createElement(Dt,null,St(he[e].label)))})))},Ut=Object(c.default)("div")(Tt()),Vt=c.default.div.withConfig({displayName:"GridContainer",componentId:"m4bsmy-0"})(["background-color:",";border-radius:14px;padding:20px 20px 30px;"],function(e){return e.theme.surface.regular}),Ft=c.default.h2.withConfig({displayName:"SubHeader",componentId:"olsfve-0"})(["font-size:20px;font-weight:600;margin:0;margin-bottom:8px;"]);function Gt(){var e=Object(j.a)(["margin-bottom: 15px"]);return Gt=function(){return e},e}var Bt=function(e){var t=e.children,n=e.title;return r.a.createElement(Vt,null,r.a.createElement(Ft,null,n),r.a.createElement(Kt,null),t)},Kt=Object(c.default)(It)(Gt()),qt=c.default.ul.withConfig({displayName:"List",componentId:"l55rm1-0"})(["padding:0;margin:0;list-style:none;margin-top:15px;"]),Wt=c.default.li.withConfig({displayName:"List__Row",componentId:"l55rm1-1"})(["display:flex;flex-direction:row;align-items:center;margin-bottom:8px;color:",";&:last-child{margin-bottom:0;}"],function(e){return e.theme.text.regular}),Yt=Object(c.default)(Wt).withConfig({displayName:"style__Row",componentId:"zu4b9-0"})(["cursor:pointer;","{margin-right:8px;}"],st);function Jt(){var e=Object(j.a)(["font-size: 0.9em; opacity: 0.7; margin-top: 15px; display: block;"]);return Jt=function(){return e},e}var $t=Object.keys(ce),Qt={algorithm:function(e){return e.settings.algorithm}},Xt=function(){var e=ct(Qt),t=e.dispatch,n=e.algorithm,i=Object(a.useCallback)(function(e){return function(){return t({type:le,payload:e})}},[t]);return r.a.createElement(Bt,{title:"Algorithm"},r.a.createElement(qt,null,$t.map(function(e){return r.a.createElement(Yt,{key:e,onClick:i(e)},r.a.createElement(Nt,{checked:n.id===e}),St(ce[e].label))})),r.a.createElement(Zt,null,"More algorithms comming soon."))},Zt=Object(c.default)("span")(Jt()),en=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))},tn=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}))},nn=c.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1cnkh4n-0"})(["display:flex;align-items:center;"]),an=c.default.input.attrs({type:"number"}).withConfig({displayName:"style__Input",componentId:"sc-1cnkh4n-1"})(["-webkit-appearance:none;margin:0 4px;color:",";border:none;background-image:none;background-color:transparent;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;outline:none;font-size:inherit;text-align:center;width:28px;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"],function(e){return e.theme.title}),rn=c.default.button.withConfig({displayName:"style__Button",componentId:"sc-1cnkh4n-2"})(["color:",";background:none;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;transition:color 150ms ease;display:flex;&:active{transition:color 80ms ease-out;color:",";}&[disabled]{color:",";cursor:default;&:active{color:",";}}"],function(e){return e.theme.primary},function(e){var t=e.theme;return Object(u.a)(.3,t.primary)},function(e){return e.theme.text.subtle},function(e){return e.theme.text.subtle}),on=function(e){var t=e.value,n=e.onChange,i=e.min,o=e.max,l=Object(a.useCallback)(function(e){var t=e.target.valueAsNumber;isNaN(t)?n(i):n(t>o?o:t<i?i:t)},[n]);return r.a.createElement(nn,null,r.a.createElement(rn,{onClick:function(){return n(t-1)},title:"Decrement",disabled:t<=i},r.a.createElement(tn,null)),r.a.createElement(an,{value:t,min:i,max:o,onChange:l}),r.a.createElement(rn,{onClick:function(){return n(t+1)},title:"Increment",disabled:t>=o},r.a.createElement(en,null)))};function ln(){var e=Object(j.a)(["flex-grow: 1;"]);return ln=function(){return e},e}var cn=Object.keys(oe),un={network:function(e){return e.settings.network}},sn=function(){var e=ct(un),t=e.dispatch,n=e.network,i=Object(a.useCallback)(function(e){return function(n){return t(function(e,t){return{type:"[settings] NETWORK_CHANGE",payload:{settingId:e,value:t}}}(e,n))}},[t]);return r.a.createElement(Bt,{title:"Network"},r.a.createElement(qt,null,cn.map(function(e){return r.a.createElement(Wt,{key:e},St(oe[e].label),r.a.createElement(dn,null),r.a.createElement(on,{value:n[e],onChange:i(e),min:oe[e].min,max:oe[e].max}))})))},dn=Object(c.default)("div")(ln()),mn=function(e){return r.a.createElement(st,e,e.checked?r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},pn=Object(c.default)(Wt).withConfig({displayName:"style__Row",componentId:"ke7wxy-0"})(["cursor:pointer;","{margin-right:8px;}"],st),fn=Object.keys(te),hn={kernels:Be},gn=function(){var e=ct(hn),t=e.dispatch,n=e.kernels,i=Object(a.useCallback)(function(e){return function(){return t(function(e){return{type:ee,payload:e}}(e))}},[t]);return r.a.createElement(Bt,{title:"Kernels"},r.a.createElement(qt,null,fn.map(function(e){return r.a.createElement(pn,{key:e,checked:n[e],onClick:i(e)},r.a.createElement(mn,{checked:n[e]}),St(te[e]))})))},bn=n(12),vn=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M8 5v14l11-7z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},yn=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},En=function(e){var t=e.isPlaying,n=e.handlePause,a=e.handlePlay,i=Object(xt.a)(e,["isPlaying","handlePause","handlePlay"]);return r.a.createElement(L,Object.assign({},i,{onClick:t?n:a,title:t?"Pause":"Play",size:58,padding:10}),t?r.a.createElement(yn,{size:null}):r.a.createElement(vn,{size:null}))},On=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}))},xn=function(e){return r.a.createElement(st,e,r.a.createElement("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},wn=c.default.div.withConfig({displayName:"Controls__ControlWrapper",componentId:"sc-1tlyotw-0"})(["display:flex;align-items:center;justify-content:center;margin:10px 0 30px;& button:nth-child(2){margin-left:20px;margin-right:20px;}"]),jn={evolutionState:Fe},kn=function(){var e=ct(jn),t=e.dispatch,n=e.evolutionState,i=Object(a.useCallback)(function(){return t(Q())},[t]),o=Object(a.useCallback)(function(){return t({type:G})},[t]),l=Object(a.useCallback)(function(){return t($())},[t]),c=Object(a.useCallback)(function(){return t({type:"[evolution] STEP_EVOLUTION"})},[t]);return r.a.createElement(wn,null,r.a.createElement(L,{onClick:i,title:"Reset"},r.a.createElement(On,{size:null})),r.a.createElement(En,{isPlaying:"EVOLVING"===n,handlePlay:o,handlePause:l}),r.a.createElement(L,{onClick:c,title:"Next step"},r.a.createElement(xn,{size:null})))},Cn=c.default.ul.withConfig({displayName:"Information__List",componentId:"ohdevf-0"})(["list-style:none;padding:0;margin:20px 0 15px;"]),_n=c.default.li.withConfig({displayName:"Information__Row",componentId:"ohdevf-1"})(["display:flex;flex-direction:row;justify-content:space-between;font-size:16px;line-height:1.7;"]),zn=c.default.b.withConfig({displayName:"Information__Heading",componentId:"ohdevf-2"})(["font-size:18px;margin-right:0.25em;"]),In={currentStep:Re,loss:Ue},Nn=function(){var e=ct(In),t=e.currentStep,n=e.loss;return r.a.createElement(Cn,null,r.a.createElement(_n,null,r.a.createElement(zn,null,"Loss:"),n&&n.toPrecision(4)),r.a.createElement(_n,null,r.a.createElement(zn,null,"Step:"),t))};function Sn(){var e=Object(j.a)(["width: 100%; height: 100%; position: absolute;"]);return Sn=function(){return e},e}function Tn(){var e=Object(j.a)(["margin: 0 5px; position: relative; padding-bottom: 65%;"]);return Tn=function(){return e},e}var Mn=Object(c.default)(bn.d).withConfig({displayName:"Evolution__StyledLineChart",componentId:"fcllvf-0"})([".recharts-curve{stroke:",";stroke-width:2px;}.recharts-line-dots circle{stroke:none;fill:",";}.recharts-reference-line line{stroke-width:2px;stroke:",";stroke-dasharray:none;}.recharts-cartesian-grid-horizontal line{stroke:",";stroke-dasharray:3,3;&:nth-last-child(2){stroke-width:2px;stroke:rgba(0,0,0,0);}&:nth-last-child(1){stroke-width:2px;stroke:",";stroke-dasharray:none;}}"],function(e){return e.theme.title},function(e){return e.theme.title},function(e){return e.theme.text.subtle},function(e){return e.theme.border.divider},function(e){return e.theme.text.subtle}),Ln={steps:Ae,isDone:function(e){return e.evolution.isDone}},Pn=function(){var e=ct(Ln),t=function(e,t){return t?e.slice(0,e.length-1):e}(e.steps,e.isDone);return r.a.createElement(Vt,null,r.a.createElement(kn,null),r.a.createElement(It,null),r.a.createElement(Nn,null),r.a.createElement(Hn,null,r.a.createElement(Dn,null,r.a.createElement(bn.f,{style:{position:"absolute"}},r.a.createElement(Mn,{data:t,margin:{top:0,right:0,bottom:0,left:0}},r.a.createElement(bn.g,{dataKey:"step",type:"number",domain:[0,function(e){return Math.max(e,1e3)}],hide:!0}),r.a.createElement(bn.h,{scale:"log",domain:[function(e){return.9*e},function(e){return 1.1*e}],hide:!0}),r.a.createElement(bn.a,{vertical:!1}),r.a.createElement(bn.e,{x:0}),r.a.createElement(bn.c,{type:"stepAfter",dataKey:"loss",dot:!1}))))))},Hn=Object(c.default)("div")(Tn()),Dn=Object(c.default)("div")(Sn()),An=(n(464),n(211)),Rn=Object(c.default)(bn.d).withConfig({displayName:"style__StyledLineChart",componentId:"sc-19bnsjv-0"})([".recharts-curve{stroke-width:1px;}.recharts-line-dots circle{stroke:",";stroke-width:2px;}.recharts-cartesian-axis-line,.recharts-cartesian-axis-tick-line{stroke-width:2px;stroke:",";}.recharts-cartesian-grid line{stroke:",";stroke-dasharray:3,3;}.recharts-legend-item:last-child{margin-right:0;}.recharts-legend-item-text{font-size:14px;color:",";}"],function(e){return e.theme.surface.regular},function(e){return e.theme.text.subtle},function(e){return e.theme.border.divider},function(e){return e.theme.text.regular}),Un=Object(c.default)(Vt).withConfig({displayName:"style__GridContainer",componentId:"sc-19bnsjv-1"})(["grid-column-end:span 1;","{grid-column-end:span 2;}"],Object(pt.up)("sm"));function Vn(){var e=Object(j.a)(["margin: 15px 0;"]);return Vn=function(){return e},e}function Fn(){var e=Object(j.a)(["width: 100%; height: 100%; position: absolute;"]);return Fn=function(){return e},e}function Gn(){var e=Object(j.a)(["margin: 0 5px; position: relative; padding-bottom: 65%;"]);return Gn=function(){return e},e}var Bn={inputs:Je,outputs:$e,points:Qe,equation:Ye,dcgp:De,chromosome:Ve,activeKernelIds:Ke,parameters:Ge},Kn=function(){var e,t=ct(Bn),n=t.inputs,i=t.outputs,o=t.points,u=t.equation,s=t.dcgp,d=t.chromosome,m=t.activeKernelIds,p=t.parameters,f=Object(a.useContext)(c.ThemeContext),h=p.seed,g=p.network,b=g.rows,v=g.columns,y=g.arity,E=g.levelsBack;if(s.KernelSet&&s.Expression&&d){var O=new s.KernelSet(m),x=new s.Expression(n.length,i.length,b,v,E,y,O,h);x.setChromosome(d),e=o.map(function(e){return x.getResult(n.map(function(t){return e[t]}))[0]}),O.destroy(),x.destroy()}var w=e?o.map(function(t,n){return Object(l.a)({},t,{prediction:e[n]})}):o;return r.a.createElement(Un,null,r.a.createElement(qn,null,r.a.createElement(Wn,null,r.a.createElement(bn.f,null,r.a.createElement(Rn,{data:w,margin:{top:0,right:0,bottom:0,left:0}},r.a.createElement(bn.a,null),r.a.createElement(bn.g,{dataKey:n[0],type:"number"}),r.a.createElement(bn.h,null),r.a.createElement(bn.b,{verticalAlign:"top",height:36}),r.a.createElement(bn.c,{name:"labels",type:"monotone",dataKey:i[0],dot:{fill:f.primary,r:4},stroke:f.primary}),r.a.createElement(bn.c,{name:"predictions",dataKey:"prediction",type:"monotone",dot:{fill:f.secundary,r:4},stroke:f.secundary}))))),r.a.createElement(Yn,null),u&&r.a.createElement("p",null,"Label equation: ",r.a.createElement(An.InlineMath,null,u)))},qn=Object(c.default)("div")(Gn()),Wn=Object(c.default)("div")(Fn()),Yn=Object(c.default)(It)(Vn());function Jn(){var e=Object(j.a)(["grid-column: full;"]);return Jn=function(){return e},e}var $n=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(yt,{handleMenuToggle:console.log}),r.a.createElement(zt,null,r.a.createElement(Rt,null),r.a.createElement(Qn,null,r.a.createElement(It,null)),r.a.createElement(Pn,null),r.a.createElement(gn,null),r.a.createElement(sn,null),r.a.createElement(Xt,null),r.a.createElement(Kn,null)),r.a.createElement(kt,null))},Qn=Object(c.default)("div")(Jn()),Xn=function(){return r.a.createElement(w,null,r.a.createElement($n,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Xn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[237,1,2]]]);
//# sourceMappingURL=main.0832e379.chunk.js.map