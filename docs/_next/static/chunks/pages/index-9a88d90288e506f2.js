(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3409:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(252)}])},252:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return e8}});var s,i=n(2676),r=n(8213),c=n(5013),o=n(6555),l=n(1838),a=n(218),d=n(7163),h=n(6348),x=n(5027),u=n(4733),p=n(471),j=n(5271),g=n(9944),m=n(1330),f=n(6814),b=n(969),v=n(5255),y=n(8537),C=n(310),w=n(6765),Z=n(9366),k=n(2699),K=n.n(k);class S{get target(){return this[this._target]}toString(){let e={};return K().each(Object.keys(this),t=>{e[t]=this[t]}),e}constructor(e,t=!1){this._target="Event.target",this.type=e,this.cancelable=t,this.canceled=!1}}class E extends S{constructor(e,t,n=!1){super(e,n),this.data=t}}class L extends S{get oldValue(){return this._oldValue}get newValue(){return this._newValue}get kind(){return this._kind}constructor(e,t,n,s,i=!1){super(e,i),this._oldValue=t,this._newValue=n,this._kind=s}}L.kindDelete="delete",L.kindUpdate="update",L.kindChange="change";var _="object"==typeof HTMLElement?function(e){return e instanceof HTMLElement}:function(e){return e&&"object"==typeof obj&&1===obj.nodeType&&"string"==typeof obj.nodeName};class N{addDomainEventListener(e,t,n,s){let i=this.listenDomainMap.get(e);i||(i=new Map,this.listenDomainMap.set(e,i));let r=i.get(t);r||(r=[],i.set(t,r)),-1==r.indexOf(n)&&r.push(n),this.addEventListener(t,n,s)}addDomainOnceListener(e,t,n,s){this.addOnceListener(t,n,s,e)}addEventListener(e,t,n){if(""===e)try{throw Error("addDomainEventListener error no type")}catch(t){console.log("EventDispatcher2","addDomainEventListener","err",e,t)}if("function"!=typeof t)try{throw Error("addDomainEventListener error no cb")}catch(e){console.log("EventDispatcher2","addDomainEventListener","err",t,e)}let s=this.listenMap.get(e);s||(s=[],this.listenMap.set(e,s));let i=s.indexOf(t);i>-1&&s.splice(i,1),(void 0==n||n<0)&&(n=s.length),n=Math.max(0,Math.min(n,s.length)),s.splice(n,0,t)}addEventListenerOnce(e,t,n){return this.addOnceListener(e,t,n,void 0)}onceListenerCb(e,t,n){let s=this;return(function(){for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];if("function"==typeof t)t(...r);else throw console.error(t),console.log(...r),Error("onEvent not a function");let o=s.onceListeners.get(e);o&&(n?s.removeDomainEventListener(n,e,o.get(t)):s.removeEventListener(e,o.get(t)))}).bind(this)}addOnceListener(e,t,n,s){let i=this.onceListeners.get(e);i||(i=new Map,this.onceListeners.set(e,i));let r=this.onceListenerCb(e,t,s);return i.set(t,r),s?this.addDomainEventListener(s,e,r,n):this.addEventListener(e,r,n),r}dispatchArgs(e){for(var t=arguments.length,n=Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];let i=this.listenMap.get(e);if(!i)return!1;for(let e=0,t=i.length;e<t;e++)i[e].apply(null,n);return!0}dispatchEvent(e){if(!e||!e.type)return!0;let t=this.listenMap.get(e.type);if(!t)return!1;e[e._target]=this;for(let n=0,s=t.length;n<s;n++){if(e.canceled)return!1;try{t[n](e)}catch(t){console.log("EventDispatcher2","dispatchEvent","err",t),console.log("event is",e)}}return!0}removeDomain(e){let t=this.listenDomainMap.get(e);if(!t)return!1;for(let e in t){var n;null===(n=t.get(e))||void 0===n||n.forEach(t=>{try{this.removeEventListener(e,t)}catch(e){console.log("eventdispatcher2","removedomain","err",e)}},this)}return this.listenDomainMap.delete(e),!0}removeDomainEventListener(e,t,n){let s=this.listenDomainMap.get(e);if(!s)return!1;let i=s.get(t);if(!i)return!1;let r=i.indexOf(n);return -1!=r&&(i.splice(r,1),this.removeEventListener(t,n))}removeEventListener(e,t){let n=this.listenMap.get(e);if(!n)return!1;let s=n.indexOf(t);return -1!=s&&(n.splice(s,1),!0)}willTrigger(e){let t=this.listenMap.get(e);return!!t&&0!=t.length}constructor(){this.listenDomainMap=new Map,this.listenMap=new Map,this.onceListeners=new Map}}let A=0,M=0,I=["#f1581f","#003366","#990033","#663366","#CCCC99","#CC9999","#003300","#8cc540","#009f5d","#019fa0","#019fde","#ff1244","#ff8345"];class D{set forcePrint(e){this.isForcePrint=!!e}get forcePrint(){return this.isForcePrint}set pause(e){this.isPaused=!!e}get pause(){return this.isPaused}set childrenPaused(e){this.isChildrenPaused=!!e}get childrenPaused(){return this.isChildrenPaused}get canPrint(){if(this.isForcePrint)return!0;if(this.isPaused)return!1;let e=this.parent;for(;e;){if(e.isChildrenPaused)return!1;e=e.parent}return!0}constructor(e,...t){var n=this;this.sub=(e,t)=>{let n=D.createCountedLogger(e,"".concat(t),...this.prefixies);return n.parent=this,n},this.warn=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];let i=n.print.apply(n,t);D.addWarn(i.join(" "))},this.error=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];let i=n.print.apply(n,t);D.addError(i.join(" "))},this.print=function(){for(var e,t=arguments.length,s=Array(t),i=0;i<t;i++)s[i]=arguments[i];if(!n.canPrint)return;let r=[],c="";if(c=n.loopParent(n,r,e=>e.globalIndex,c),r.unshift("@"),D.isInApp||(c+="%c%s ",r.unshift("color:#000000;font-weight: bold;")),c=n.loopParent(n,r,e=>e.index,c),D.isInApp||(c+="%c%s ",r.push("color:#000000;font-weight: bold;")),D.isInApp){for(let t=0;t<s.length;t++)if(!(function(e){switch(e){case void 0:case null:case K().isDate(e):case K().isBoolean(e):case K().isInteger(e):case K().isNaN(e):case K().isNull(e):case K().isNumber(e):case K().isSymbol(e):case K().isString(e):return!0;default:return!1}}(e=s[t])||_(e)))try{let e=s[t],n="";n=K().isError(e)?e.message+"\n"+e.stack:JSON.stringify(s[t]),s[t]=n}catch(e){console.log("log print json stringify error",e),console.log("log print json stringify error stack is",e.stack)}}return r.push(n.prefix),console.log(c,...r=r.concat(s)),[].concat(r)},this.log=this.print.bind(this),this.loopParent=(e,t,n,s)=>{for(;e;)t.unshift(n(e)),D.isInApp||(s+="%c%s ",t.unshift("color:".concat(e.color,";font-weight: bold;"))),e=e.parent;return s},this.prefixies=t,this.prefix=t.join(" "),this.isPaused=!!e,this.globalIndex=A++,this.index=0,this.parent=null,this.isChildrenPaused=!1,this.isForcePrint=!1,this.color=I[M++%I.length],this.logger=this}}D.isInApp=!1,D.eventWarnAdd="warnAdd",D.eventErrorAdd="errorAdd",D.dispatcher=new N,D.warnList=[],D.errorList=[],D.logStoreMaxLength=100,D.addWarn=e=>{D.addLog(D.warnList,e,D.eventWarnAdd)},D.addError=e=>{D.addLog(D.errorList,e,D.eventErrorAdd)},D.addLog=(e,t,n)=>{e.length>D.logStoreMaxLength&&e.shift(),t="".concat(function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[s]:("00"+n[s]).substr((""+n[s]).length)));return t}(new Date,"DD HH:MM:SS")),e.push(t),D.dispatcher.dispatchEvent(new E(n,e))},D.forbidden=[],D.allowed=[],D.countMap=new Map,D.createCountedLogger=function(e,t){for(var n=arguments.length,s=Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];let r=D.countMap[t]||0;r++,D.countMap[t]=r;let c="".concat(t," ").concat(r),o=new D(e,...s.concat(c));return o.index=r,o};class P extends N{get isRunning(){return this._isRunning}constructor(...e){var t;super(...e),t=this,this.list=[],this._isRunning=!1,this.add=e=>{this.list.push(e),this.check()},this.check=()=>{if(this.isRunning||0==this.list.length)return;this._isRunning=!0;let e=this.list.shift();e?e(this.onComplete):(this._isRunning=!1,this.check())},this.onComplete=function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];try{t.dispatchOneLoaded(n),0==t.list.length&&t.dispatchComplete()}catch(e){console.log("queuemanager load error",e)}t._isRunning=!1,t.check()},this.dispatchOneLoaded=e=>{let t=new E(P.Events.oneLoaded,e);this.dispatchEvent(t)},this.dispatchComplete=()=>{this.dispatchEvent(new E(P.Events.complete))}}}P.Events={complete:"complete",oneLoaded:"oneLoaded"},new WeakMap;var $=n(5767),G=n(5749);let T=0;class R{async loadAsync(){}getSnapshot(){var e;return(null===(e=this.buildData)||void 0===e?void 0:e.call(this))||this.context}emitChange(){for(let e of this.listeners)e()}reducer(e,t){let n=this.log.sub(!1,"reducerFn");switch(n.pause=!0,this.tempContext=void 0,n.print("this..tempContext",this.tempContext),n.print("action.type=",t.type),n.print("action.data=",JSON.stringify(t.data)),n.print("draft=",JSON.stringify(e)),t.type){case"update":for(let n in t.data)e[n]=t.data[n];"hrefList"in t.data&&n.print("hrefListres22=",this.classIndex,JSON.stringify(this.context));break;case"merge":K().merge(e,t.data);break;default:throw Error("reducer unknown type ".concat(t.type))}}act(e){this.dispatch(e)}update(e){let t=this.log.sub(!1,"update");t.pause=!0,t.print("conroller update",this.classIndex,e),this.dispatch({type:"update",data:e})}merge(e){let t=this.log.sub(!1,"mergeFn");t.pause=!0,t.log("data",e),this.dispatch({type:"merge",data:e})}get destroyed(){return this._destroyed}destroy(){this._destroyed=!0,this.log.log("controller destroyed index=".concat(this.classIndex,", constructor=").concat(this.constructor.name))}removeListeners(){}constructor(){this.classIndex=++T,this.log=new D("ControllerCls".concat(this.classIndex)),this.controller=this,this.listeners=[],this.subscribe=e=>(this.listeners.push(e),()=>{let t=this.listeners.indexOf(e);-1!=t&&this.listeners.splice(t,1)}),this._destroyed=!1}}R=(0,$.gn)([G.Nj],R),n(9143),new WeakMap,new WeakMap;var V=n(4831);let W=null===(s=n.n(V)()().publicRuntimeConfig)||void 0===s?void 0:s.version,O=new D(!1,"i18n"),z=new w.Z;z.init(null,{loadPath:function(e,t){let n=O.sub(!1,"i18n loadpath");n.pause=!0;let s=e[0],i="/options/_locales/".concat(e[0].replace("-","_"),"/messages.json");i="/locales/zh-CN/ns1/content.json",i="locales/".concat(s,"/").concat(t[0],".json?v=").concat(W);let r=t[0].split("/");return r.splice(r.length-1,0,s),i="locales/".concat(r.join("/"),".json?v=").concat(W),n.log("lngs=",e),n.log("namespaces=",t),n.log("p=",i),i},parse:function(e,t,n){let s=O.sub(!1,"i18n backend parse");s.pause=!0;let i=JSON.parse(e);return s.print("before set i18ndata"),s.log("parrrse",t,n),i}});let B=Z.ZP;function U(){let e=g.d,{t,i18n:n}=(0,y.$G)("doc/components/language-selector/content"),s=n.language;s in e||(s=s.split("-")[0]),s in e||(s="en");let[r,c]=j.useState(s);return(0,j.useEffect)(()=>{!function(e){document.documentElement.lang=e;let t=n.dir(e);document.documentElement.dir=t}(r)},[r,n]),(0,i.jsx)(l.Z,{children:(0,i.jsx)(l.Z,{sx:{pt:"1rem",pb:"1rem",float:"right"},children:(0,i.jsxs)(m.Z,{sx:{minWidth:"150px"},size:"small",children:[(0,i.jsx)(f.Z,{id:"demo-simple-select-label",children:t("content.title")}),(0,i.jsx)(b.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,label:"language2",onChange:e=>{let t=e.target.value;c(e.target.value),B.changeLanguage(t)},children:Object.keys(e).map(t=>(0,i.jsx)(v.Z,{value:t,children:e[t]},t))})]})})})}B.on("languageChanged",async function(e){let t=O.sub(!1,"onlanguageChanged");t.pause=!0,t.log("lllllng",e),(e="en").replace("-","_")}),B.use(C.Z).use(z).use(y.Db).init({load:"currentOnly",fallbackLng:"en",partialBundledLanguages:!0,ns:[],debug:!1,interpolation:{escapeValue:!1},detection:{caches:["localStorage"]}}),B.on("missingKey",function(e,t,n,s){console.error("i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s",e,t,n,s)}),B.on("loaded",function(e){let t=O.sub(!1,"onloaded");t.pause=!0,t.log("onloaded arguments",e)}),B.on("failedLoading",function(e,t,n){let s=O.sub(!1,"onfailedLoading");s.pause=!0,s.log("failedLoading arguments",e,t,n)});var F=n(228);function H(){return(0,i.jsx)(u.Z,{color:"default",sx:{position:"sticky"},children:(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(l.Z,{sx:{flexGrow:1}}),(0,i.jsx)(r.Z,{sx:{alignItems:"center",display:"flex",alignSelf:"center"},children:(0,i.jsx)(U,{})})]})})}(0,o.ZP)(F.Z)(e=>{let{theme:t}=e;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"#aab4be",...t.applyStyles("dark",{backgroundColor:"#8796A5"})}}},"& .MuiSwitch-thumb":{backgroundColor:"#001e3c",width:32,height:32,"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')},...t.applyStyles("dark",{backgroundColor:"#003892"})},"& .MuiSwitch-track":{opacity:1,backgroundColor:"#aab4be",borderRadius:10,...t.applyStyles("dark",{backgroundColor:"#8796A5"})}}});var J=n(3319),q=n(3017),X=n(2407);let Y=new D(!1,"Anchor");Y.pause=!0;class Q{getData(){return{anchor:this._anchor,setAnchorComplete:this.setAnchorComplete,animationTriggered:this._animationTriggered}}get anchor(){return this._anchor}get animationTriggered(){return this._animationTriggered}set animationTriggered(e){var t;this._animationTriggered=e,null===(t=this.anchorStore)||void 0===t||t.updateSnapshot(this.getData())}laterCheckElement(e){let t=document.querySelector("#".concat(e));if(!t){if(Date.now()-this._setAnchorTime>3e3)return;setTimeout(()=>{this.laterCheckElement(e)},100);return}t.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{this.setHash(e)},1300)}setHash(e){var t;this.anchor==e&&(window.location.hash=e,this.setAnchorComplete||(this.setAnchorComplete=!0,null===(t=this.anchorStore)||void 0===t||t.updateSnapshot(this.getData())))}clearLaterCheckElement(){clearTimeout(this._laterId),this._laterId=-1}scrollToView(e){this.clearLaterCheckElement(),this._setAnchorTime=Date.now(),this.laterCheckElement(e)}setAnchor(e){var t;this._anchor=e,X.h.set(this.atomAnchor,e),this.animationTriggered=!1,this.setAnchorComplete=!1,null===(t=this.anchorStore)||void 0===t||t.updateSnapshot(this.getData()),this.scrollToView(e)}initAnchor(){Y.log("initAnchor",window.location.hash),window.location.hash&&(Y.log("initAnchor",window.location.hash.replace("#","")),this.setAnchor(window.location.hash.replace("#","")))}constructor(){this._laterId=-1,this._anchor="",this.atomAnchor=(0,q.cn)(""),this.setAnchorComplete=!1,this._setAnchorTime=0,this._animationTriggered=!1}}Q=(0,$.gn)([G.Nj],Q);class ee{tryGetSnapshot(){return this._snapshot}getSnapshot(){return this._snapshot}updateSnapshot(e){this._snapshot=e,this.notify()}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}unsubscribe(e){this.listeners=this.listeners.filter(t=>t!==e)}notify(){console.log("notify2222",this._snapshot,this.listeners),this.listeners.forEach(e=>e())}constructor(e){this.listeners=[],this._snapshot=e,this.getSnapshot.bind(this),this.updateSnapshot.bind(this),this.subscribe.bind(this),this.unsubscribe.bind(this),this.notify.bind(this)}}ee=(0,$.gn)([G.Nj],ee);let et=new Q,en=function(e){let t=e,n=[],s=()=>{n.forEach(e=>e())};return{getSnapshot:()=>t,updateSnapshot:e=>{t=e,s()},subscribe:e=>(n.push(e),()=>{n=n.filter(t=>t!==e)})}}(et.getData());et.anchorStore=en;let es={anchor:et,useAnchor:function(){return(0,j.useSyncExternalStore)(en.subscribe,en.getSnapshot)}};var ei=n(2967),er=n(1656);function ec(e){let{anchor:t,children:n}=e,s=(0,j.useRef)(null),{anchor:r,animationTriggered:c,setAnchorComplete:o}=es.useAnchor(),a=(0,ei.Z)(e=>{e.isIntersecting&&x()}),[d,h]=(0,er.Z)(s,{callback:a}),x=()=>{es.anchor.animationTriggered||es.anchor.anchor!==t||(es.anchor.setHash(t),g())};(0,j.useEffect)(()=>{d&&r===t&&!c&&(o||x())},[d,t,r,c,o]);let[u,p]=(0,J.q_)(()=>({from:{border:"2px solid rgba(255,0,0,0)",borderRadius:3}})),g=()=>{p.start({from:{border:"2px solid rgba(255,0,0,0)"},to:[{border:"2px solid rgba(255,0,0,1)"},{border:"2px solid rgba(255,0,0,0)"},{border:"2px solid rgba(255,0,0,1)"},{border:"2px solid rgba(255,0,0,0)"},{border:"2px solid rgba(255,0,0,1)"},{border:"2px solid rgba(255,0,0,0)"},{border:"2px solid rgba(255,0,0,1)"},{border:"2px solid rgba(255,0,0,0)"},{border:"2px solid rgba(255,0,0,1)"},{border:"2px solid rgba(255,0,0,0)"}]})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Z,{id:t,ref:s,children:(0,i.jsx)(J.q.div,{style:{...u},children:n})})})}var eo=n(9794),el=n(5828),ea=n(3948);function ed(e){let{anchor:t,children:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(eo.ZP,{sx:{p:0},children:(0,i.jsx)(el.Z,{sx:{m:0,p:0},onClick:()=>{es.anchor.setAnchor(t)},children:(0,i.jsx)(ea.Z,{sx:{p:0},children:n})})})})}function eh(e){let{children:t}=e;return(0,i.jsx)("h2",{children:t})}let ex="doc-title",eu=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/overview/content");return(0,i.jsx)(ed,{anchor:ex,children:e("menu.main")})},ep=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/overview/content");return(0,i.jsxs)(ec,{anchor:ex,children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)("div",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.description"})})]})},ej="all-links";function eg(){let{t:e}=(0,y.$G)("doc/components/doc-parts/global/content");return(0,i.jsx)(l.Z,{sx:{border:"1px solid #ccc",padding:2,marginTop:2},children:(0,i.jsx)(a.Z,{direction:"column",spacing:1,children:(0,i.jsxs)(l.Z,{className:"js-script-background",children:[(0,i.jsx)("span",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.exclude.example.domain",values:{url:"https://example.com"},components:{code:(0,i.jsx)("span",{className:"js-script-code"})}})}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.exclude.example.url",values:{url:"https://example.com/path"},components:{code:(0,i.jsx)("span",{className:"js-script-code"})}})}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.exclude.example.glob",values:{glob:"glob",minimatch:"**/example.com/**"},components:{code:(0,i.jsx)("span",{className:"js-script-code"})}})})]})})})}let em=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/all-links/content");return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(ed,{anchor:ej,children:e("menu.main")})})},ef=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/all-links/content");return(0,i.jsx)(ec,{anchor:ej,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/configuration-all-links.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.checkedUseSetting"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)(a.Z,{direction:"column",spacing:1,children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.excludeDomains"})}),(0,i.jsx)(eg,{})]})})})]})]})})},eb="diff-domain-links";function ev(){let{t:e}=(0,y.$G)("doc/components/doc-parts/global/content");return(0,i.jsx)(l.Z,{sx:{border:"1px solid #ccc",padding:2,marginTop:2},children:(0,i.jsx)(a.Z,{direction:"column",spacing:1,children:(0,i.jsxs)(l.Z,{className:"js-script-background",children:[(0,i.jsx)("span",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.exclude.example.domain",values:{url:"https://example.com"},components:{code:(0,i.jsx)("span",{className:"js-script-code"})}})}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.exclude.example.url",values:{url:"https://example.com/path"},components:{code:(0,i.jsx)("span",{className:"js-script-code"})}})}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.exclude.example.glob",values:{glob:"glob",minimatch:"**/example.com/**"},components:{code:(0,i.jsx)("span",{className:"js-script-code"})}})})]})})})}let ey=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/diff-domain-links/content");return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(ed,{anchor:eb,children:e("menu.main")})})},eC=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/diff-domain-links/content");return(0,i.jsx)(ec,{anchor:eb,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/configuration-diff-domain-links.jpg"})}),(0,i.jsx)("div",{children:e("doc.description")}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.checkedUseSetting"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)(a.Z,{direction:"column",spacing:1,children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.excludeDomains"})}),(0,i.jsx)(ev,{})]})})})]})]})})},ew="doc-variables";function eZ(){let{t:e}=(0,y.$G)("doc/components/doc-parts/doc-variables/content");return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.title"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.window.title"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"currentWindow"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.window.currentWindow"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"newWindow"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.window.newWindow"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"incognitoWindow"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.window.incognitoWindow"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"popupWindow"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.window.popupWindow"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"externalBrowser"}),(0,i.jsx)(y.cC,{t:e,values:{tt:"tor"},i18nKey:"doc.returnVariables.window.externalBrowser"})]})]})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.tab.title"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"rightTab"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.tab.rightTab"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"leftTab"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.tab.leftTab"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"currentTab"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.tab.currentTab"})]})]})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.active.title"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"active"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.active.active"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"inactive"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.returnVariables.active.inactive"})]})]})]})]})]})}function ek(){let{t:e}=(0,y.$G)("doc/components/doc-parts/doc-variables/content");return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.functions.title"})}),(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"minimatch"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.functions.minimatch",values:{gg:"glob",mm:"minimatch"},components:{a:(0,i.jsx)("a",{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noreferrer"})}})]})})]})}function eK(){let{t:e}=(0,y.$G)("doc/components/doc-parts/doc-variables/content");return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)("div",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.title"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"page"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.page",components:{a:(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",target:"_blank",rel:"noreferrer"})}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"click"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.click",components:{a:(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",target:"_blank",rel:"noreferrer"})}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"pageHost"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.pageHost"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"clickpath"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.clickpath"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"isSameDomain"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.isSameDomain",components:{a:(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",target:"_blank",rel:"noreferrer"})},values:{tt:"true",ff:"false"}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"isSameSubDomain"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.isSameSubDomain",values:{ss:"isSameSubDomain",yy:"www.youtube.com",ff:"families.youtube.com",mm:"youtube.com",ww:"www",ffss:"families"},components:{a:(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",target:"_blank",rel:"noreferrer"})}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"isSameParent"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.isSameParent",components:{a:(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",target:"_blank",rel:"noreferrer"})},values:{tt:"true",ff:"false"}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"isPageSublink"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.isPageSublink",values:{tt:"true",ff:"false"}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"isPageMultilevelSublink"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.isPageMultilevelSublink",values:{tt:"true",ff:"false"}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"isClickSublink"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.isClickSublink",values:{tt:"true",ff:"false"}})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"doc-variable-text",children:"isClickMultilevelSublink"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.isClickMultilevelSublink",values:{tt:"true",ff:"false"}})]})]})]})}let eS=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/doc-variables/content");return(0,i.jsx)(ed,{anchor:ew,children:e("menu.main")})},eE=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/doc-variables/content");return(0,i.jsxs)(ec,{anchor:ew,children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(eK,{}),(0,i.jsx)(eZ,{}),(0,i.jsx)(ek,{})]})},eL="global-script",e_=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/global-script/content");return(0,i.jsxs)(ec,{anchor:eL,children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(eh,{children:e("doc.title")})}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/configuration-global-script.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.checkedUseSetting"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(eE,{})})]})]})},eN=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/global-script/content");return(0,i.jsx)(ed,{anchor:eL,children:e("menu.main")})},eA="rule-method",eM=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/rule-method/content");return(0,i.jsx)(ed,{anchor:eA,children:e("menu.main")})},eI=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/rule-method/content");return(0,i.jsxs)(ec,{anchor:eA,children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/configuration-rule-method.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.edit"})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.description"})})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.title"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.url.title"})}),(0,i.jsx)(l.Z,{children:(0,i.jsxs)("span",{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.url.example.as"}),(0,i.jsx)("span",{children:"https://www.youtube.com/watch?v=videoId"})]})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.url.explain"})})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)("span",{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.glob.title",components:{a:(0,i.jsx)("a",{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noreferrer"})},values:{1:"minimatch",2:"glob"}})})}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.glob.example.as"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.glob.example.a",values:{1:"https://www.youtube.com/**"}})]})]}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.rule.formats.regexp.title",components:{a:(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noreferrer"})}})})})]})]})]})]})},eD="script-del-save-new",eP=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/script-del-save-new/content");return(0,i.jsx)(ed,{anchor:eD,children:e("menu.main")})},e$=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/script-del-save-new/content");return(0,i.jsx)(ec,{anchor:eD,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/configuration-script-save-del-new-auto.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.newBtn.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.newBtn.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.delBtn.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.delBtn.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.saveBtn.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.saveBtn.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.autoSave.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.autoSave.explain"})]})})]})]})})},eG="script-new",eT=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/script-new/content");return(0,i.jsx)(ed,{anchor:eG,children:e("menu.main")})},eR=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/script-new/content");return(0,i.jsx)(ec,{anchor:eG,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/configuration-script-new.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.name.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.name.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.script.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.script.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.delBtn.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.delBtn.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.saveBtn.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.saveBtn.explain"})]})})]})]})})},eV="script-setting",eW=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/script-setting/content");return(0,i.jsx)(ed,{anchor:eV,children:e("menu.main")})},eO=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/script-setting/content");return(0,i.jsx)(ec,{anchor:eV,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/configuration-rule-script-setting.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.enabled.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.enabled.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.script.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.script.explain"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.tab.title"}),(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.tab.explain"}),(0,i.jsx)("a",{href:"https://github.com/0xFF336699/new-tab-link/blob/main/docs/en/configuration-rule-script-setting.md#tab",target:"_blank"})]})})]})]})})},ez="export-rules",eB=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/export/content");return(0,i.jsx)(ed,{anchor:ez,children:e("menu.main")})},eU=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/export/content");return(0,i.jsxs)(ec,{anchor:ez,children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/export.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.unselectAll"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.selectAll"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.exportFile"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.copyDataToClipboard"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.selectedRule"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.selectedCode"})})})]})]})},eF="import-rules",eH=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/import/content");return(0,i.jsx)(ed,{anchor:eF,children:e("menu.main")})},eJ=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/import/content");return(0,i.jsxs)(ec,{anchor:eF,children:[(0,i.jsx)(eh,{children:e("doc.title")}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/import-1.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.fromHistory"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.pasteFromClipboard"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.loadExamples"})})})]}),(0,i.jsx)(l.Z,{children:(0,i.jsx)("img",{className:"autoImage",src:"/images/en/import-2.jpg"})}),(0,i.jsxs)("ol",{style:{paddingInlineStart:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.unselectAll"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.selectAll"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.use"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(y.cC,{t:e,i18nKey:"doc.selectedRule"})})})]})]})},eq=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/rule-sort/content");return(0,i.jsx)(ed,{anchor:"rule-sort",children:e("menu.main")})},eX=function(){let{t:e}=(0,y.$G)("doc/components/doc-parts/rule-sort/content");return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:e("doc.title")}),(0,i.jsx)("p",{children:e("doc.drag")})]})};(0,o.ZP)("div")(e=>{let{theme:t}=e;return{padding:t.spacing(1),[t.breakpoints.down("md")]:{backgroundColor:d.Z[500]},[t.breakpoints.up("md")]:{backgroundColor:h.Z[500]},[t.breakpoints.up("lg")]:{backgroundColor:x.Z[500]}}});let eY=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{[t.breakpoints.down("md")]:{width:130,borderColor:"red"},[t.breakpoints.up("md")]:{width:180,borderColor:"blue"},[t.breakpoints.up("lg")]:{width:220,borderColor:"green"},margin:1}});function eQ(){return(0,i.jsxs)(eY,{sx:{overflowY:"auto"},children:[(0,i.jsx)(eu,{}),(0,i.jsx)(em,{}),(0,i.jsx)(ey,{}),(0,i.jsx)(eN,{}),(0,i.jsx)(eS,{}),(0,i.jsx)(eM,{}),(0,i.jsx)(eP,{}),(0,i.jsx)(eT,{}),(0,i.jsx)(eW,{}),(0,i.jsx)(eB,{}),(0,i.jsx)(eH,{}),(0,i.jsx)(eq,{})]})}function e0(){return(0,i.jsx)(l.Z,{sx:{width:"100%",height:"100vh"},children:(0,i.jsxs)(l.Z,{sx:{},children:[(0,i.jsx)(H,{}),(0,i.jsxs)(a.Z,{direction:"row",sx:{width:"100%",height:"100%"},children:[(0,i.jsxs)(l.Z,{sx:{maxWidth:"300px"},children:[(0,i.jsx)(l.Z,{sx:{position:"fixed"},children:(0,i.jsx)(eQ,{})}),(0,i.jsx)(l.Z,{sx:{visibility:"hidden"},children:(0,i.jsx)(eQ,{})})]}),(0,i.jsx)(l.Z,{sx:{height:"100%",width:"10px",backgroundColor:"red"}}),(0,i.jsxs)("div",{style:{margin:"0.5rem",padding:"0.5rem",width:"100%"},children:[(0,i.jsx)(ep,{}),(0,i.jsx)(ef,{}),(0,i.jsx)(eC,{}),(0,i.jsx)(e_,{}),(0,i.jsx)(eI,{}),(0,i.jsx)(e$,{}),(0,i.jsx)(eR,{}),(0,i.jsx)(eO,{}),(0,i.jsx)(eU,{}),(0,i.jsx)(eJ,{}),(0,i.jsx)(eX,{})]})]})]})})}function e1(){return(0,i.jsx)(r.Z,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",sx:{minHeight:"100vh"},children:(0,i.jsx)(c.Z,{color:"secondary"})})}var e8=function(){return es.anchor.initAnchor(),(0,i.jsx)(j.Suspense,{fallback:(0,i.jsx)(e1,{}),children:(0,i.jsx)(y.a3,{i18n:B,defaultNS:["ns1"],children:(0,i.jsx)(e0,{})})})}}},function(e){e.O(0,[201,345,888,774,179],function(){return e(e.s=3409)}),_N_E=e.O()}]);