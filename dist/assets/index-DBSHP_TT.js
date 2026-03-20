function ES(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function TS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gw={exports:{}},Vc={},yw={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),xS=Symbol.for("react.portal"),IS=Symbol.for("react.fragment"),SS=Symbol.for("react.strict_mode"),kS=Symbol.for("react.profiler"),AS=Symbol.for("react.provider"),bS=Symbol.for("react.context"),PS=Symbol.for("react.forward_ref"),CS=Symbol.for("react.suspense"),RS=Symbol.for("react.memo"),NS=Symbol.for("react.lazy"),Jg=Symbol.iterator;function DS(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var vw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_w=Object.assign,ww={};function vo(t,e,n){this.props=t,this.context=e,this.refs=ww,this.updater=n||vw}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ew(){}Ew.prototype=vo.prototype;function vp(t,e,n){this.props=t,this.context=e,this.refs=ww,this.updater=n||vw}var _p=vp.prototype=new Ew;_p.constructor=vp;_w(_p,vo.prototype);_p.isPureReactComponent=!0;var Xg=Array.isArray,Tw=Object.prototype.hasOwnProperty,wp={current:null},xw={key:!0,ref:!0,__self:!0,__source:!0};function Iw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Tw.call(e,r)&&!xw.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:hl,type:t,key:i,ref:o,props:s,_owner:wp.current}}function OS(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function LS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zg=/\/+/g;function $d(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LS(""+t.key):e.toString(36)}function _u(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case xS:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+$d(o,0):r,Xg(s)?(n="",t!=null&&(n=t.replace(Zg,"$&/")+"/"),_u(s,e,n,"",function(c){return c})):s!=null&&(Ep(s)&&(s=OS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Zg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Xg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+$d(i,l);o+=_u(i,e,n,u,s)}else if(u=DS(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+$d(i,l++),o+=_u(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],s=0;return _u(t,r,"","",function(i){return e.call(n,i,s++)}),r}function VS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},wu={transition:null},MS={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:wu,ReactCurrentOwner:wp};function Sw(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!Ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=vo;oe.Fragment=IS;oe.Profiler=kS;oe.PureComponent=vp;oe.StrictMode=SS;oe.Suspense=CS;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS;oe.act=Sw;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_w({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=wp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Tw.call(e,u)&&!xw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:hl,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AS,_context:t},t.Consumer=t};oe.createElement=Iw;oe.createFactory=function(t){var e=Iw.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:PS,render:t}};oe.isValidElement=Ep;oe.lazy=function(t){return{$$typeof:NS,_payload:{_status:-1,_result:t},_init:VS}};oe.memo=function(t,e){return{$$typeof:RS,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=wu.transition;wu.transition={};try{t()}finally{wu.transition=e}};oe.unstable_act=Sw;oe.useCallback=function(t,e){return Ot.current.useCallback(t,e)};oe.useContext=function(t){return Ot.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Ot.current.useEffect(t,e)};oe.useId=function(){return Ot.current.useId()};oe.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Ot.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};oe.useRef=function(t){return Ot.current.useRef(t)};oe.useState=function(t){return Ot.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Ot.current.useTransition()};oe.version="18.3.1";yw.exports=oe;var N=yw.exports;const kw=TS(N),jS=ES({__proto__:null,default:kw},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FS=N,US=Symbol.for("react.element"),BS=Symbol.for("react.fragment"),zS=Object.prototype.hasOwnProperty,$S=FS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WS={key:!0,ref:!0,__self:!0,__source:!0};function Aw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zS.call(e,r)&&!WS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:US,type:t,key:i,ref:o,props:s,_owner:$S.current}}Vc.Fragment=BS;Vc.jsx=Aw;Vc.jsxs=Aw;gw.exports=Vc;var d=gw.exports,qh={},bw={exports:{}},nn={},Pw={exports:{}},Cw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Y){var ee=W.length;W.push(Y);e:for(;0<ee;){var ye=ee-1>>>1,Pe=W[ye];if(0<s(Pe,Y))W[ye]=Y,W[ee]=Pe,ee=ye;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Y=W[0],ee=W.pop();if(ee!==Y){W[0]=ee;e:for(var ye=0,Pe=W.length,Rn=Pe>>>1;ye<Rn;){var bt=2*(ye+1)-1,Nn=W[bt],We=bt+1,Dn=W[We];if(0>s(Nn,ee))We<Pe&&0>s(Dn,Nn)?(W[ye]=Dn,W[We]=ee,ye=We):(W[ye]=Nn,W[bt]=ee,ye=bt);else if(We<Pe&&0>s(Dn,ee))W[ye]=Dn,W[We]=ee,ye=We;else break e}}return Y}function s(W,Y){var ee=W.sortIndex-Y.sortIndex;return ee!==0?ee:W.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,A=!1,P=!1,R=!1,L=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(W){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=W)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V(W){if(R=!1,k(W),!P)if(n(u)!==null)P=!0,At(j);else{var Y=n(c);Y!==null&&Zn(V,Y.startTime-W)}}function j(W,Y){P=!1,R&&(R=!1,x(y),y=-1),A=!0;var ee=g;try{for(k(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||W&&!b());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var Pe=ye(m.expirationTime<=Y);Y=t.unstable_now(),typeof Pe=="function"?m.callback=Pe:m===n(u)&&r(u),k(Y)}else r(u);m=n(u)}if(m!==null)var Rn=!0;else{var bt=n(c);bt!==null&&Zn(V,bt.startTime-Y),Rn=!1}return Rn}finally{m=null,g=ee,A=!1}}var B=!1,_=null,y=-1,E=5,S=-1;function b(){return!(t.unstable_now()-S<E)}function C(){if(_!==null){var W=t.unstable_now();S=W;var Y=!0;try{Y=_(!0,W)}finally{Y?T():(B=!1,_=null)}}else B=!1}var T;if(typeof w=="function")T=function(){w(C)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,kt=me.port2;me.port1.onmessage=C,T=function(){kt.postMessage(null)}}else T=function(){L(C,0)};function At(W){_=W,B||(B=!0,T())}function Zn(W,Y){y=L(function(){W(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,At(j))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var ee=g;g=Y;try{return W()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Y){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ee=g;g=W;try{return Y()}finally{g=ee}},t.unstable_scheduleCallback=function(W,Y,ee){var ye=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ye+ee:ye):ee=ye,W){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=ee+Pe,W={id:f++,callback:Y,priorityLevel:W,startTime:ee,expirationTime:Pe,sortIndex:-1},ee>ye?(W.sortIndex=ee,e(c,W),n(u)===null&&W===n(c)&&(R?(x(y),y=-1):R=!0,Zn(V,ee-ye))):(W.sortIndex=Pe,e(u,W),P||A||(P=!0,At(j))),W},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(W){var Y=g;return function(){var ee=g;g=Y;try{return W.apply(this,arguments)}finally{g=ee}}}})(Cw);Pw.exports=Cw;var HS=Pw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=N,en=HS;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rw=new Set,La={};function oi(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(La[t]=e,t=0;t<e.length;t++)Rw.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kh=Object.prototype.hasOwnProperty,KS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ey={},ty={};function GS(t){return Kh.call(ty,t)?!0:Kh.call(ey,t)?!1:KS.test(t)?ty[t]=!0:(ey[t]=!0,!1)}function QS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YS(t,e,n,r){if(e===null||typeof e>"u"||QS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tp=/[\-:]([a-z])/g;function xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tp,xp);mt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tp,xp);mt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tp,xp);mt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ip(t,e,n,r){var s=mt.hasOwnProperty(e)?mt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YS(e,n,s,r)&&(n=null),r||s===null?GS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=qS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hl=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),Gh=Symbol.for("react.profiler"),Nw=Symbol.for("react.provider"),Dw=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Qh=Symbol.for("react.suspense"),Yh=Symbol.for("react.suspense_list"),Ap=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),Ow=Symbol.for("react.offscreen"),ny=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=ny&&t[ny]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Wd;function ua(t){if(Wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wd=e&&e[1]||""}return`
`+Wd+t}var Hd=!1;function qd(t,e){if(!t||Hd)return"";Hd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function JS(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=qd(t.type,!1),t;case 11:return t=qd(t.type.render,!1),t;case 1:return t=qd(t.type,!0),t;default:return""}}function Jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Pi:return"Portal";case Gh:return"Profiler";case Sp:return"StrictMode";case Qh:return"Suspense";case Yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dw:return(t.displayName||"Context")+".Consumer";case Nw:return(t._context.displayName||"Context")+".Provider";case kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ap:return e=t.displayName||null,e!==null?e:Jh(t.type)||"Memo";case Lr:e=t._payload,t=t._init;try{return Jh(t(e))}catch{}}return null}function XS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ds(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZS(t){var e=Lw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=ZS(t))}function Vw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xh(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ry(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ds(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mw(t,e){e=e.checked,e!=null&&Ip(t,"checked",e,!1)}function Zh(t,e){Mw(t,e);var n=ds(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&ef(t,e.type,ds(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ef(t,e,n){(e!=="number"||Bu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function zi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ds(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function iy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ca(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ds(n)}}function jw(t,e){var n=ds(e.value),r=ds(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function oy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,Uw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ek=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){ek.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function Bw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function zw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Bw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var tk=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(t,e){if(e){if(tk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var af=null,$i=null,Wi=null;function ay(t){if(t=ml(t)){if(typeof af!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Bc(e),af(t.stateNode,t.type,e))}}function $w(t){$i?Wi?Wi.push(t):Wi=[t]:$i=t}function Ww(){if($i){var t=$i,e=Wi;if(Wi=$i=null,ay(t),e)for(t=0;t<e.length;t++)ay(e[t])}}function Hw(t,e){return t(e)}function qw(){}var Kd=!1;function Kw(t,e,n){if(Kd)return t(e,n);Kd=!0;try{return Hw(t,e,n)}finally{Kd=!1,($i!==null||Wi!==null)&&(qw(),Ww())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var lf=!1;if(dr)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){lf=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{lf=!1}function nk(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var wa=!1,zu=null,$u=!1,uf=null,rk={onError:function(t){wa=!0,zu=t}};function sk(t,e,n,r,s,i,o,l,u){wa=!1,zu=null,nk.apply(rk,arguments)}function ik(t,e,n,r,s,i,o,l,u){if(sk.apply(this,arguments),wa){if(wa){var c=zu;wa=!1,zu=null}else throw Error(z(198));$u||($u=!0,uf=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ly(t){if(ai(t)!==t)throw Error(z(188))}function ok(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ly(s),t;if(i===r)return ly(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Qw(t){return t=ok(t),t!==null?Yw(t):null}function Yw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yw(t);if(e!==null)return e;t=t.sibling}return null}var Jw=en.unstable_scheduleCallback,uy=en.unstable_cancelCallback,ak=en.unstable_shouldYield,lk=en.unstable_requestPaint,$e=en.unstable_now,uk=en.unstable_getCurrentPriorityLevel,Pp=en.unstable_ImmediatePriority,Xw=en.unstable_UserBlockingPriority,Wu=en.unstable_NormalPriority,ck=en.unstable_LowPriority,Zw=en.unstable_IdlePriority,Mc=null,$n=null;function dk(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:pk,hk=Math.log,fk=Math.LN2;function pk(t){return t>>>=0,t===0?32:31-(hk(t)/fk|0)|0}var Gl=64,Ql=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=da(l):(i&=o,i!==0&&(r=da(i)))}else o=n&~s,o!==0?r=da(o):i!==0&&(r=da(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sn(e),s=1<<n,r|=t[n],e&=~s;return r}function mk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Sn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=mk(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function eE(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function Gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=n}function yk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Sn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ge=0;function tE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nE,Rp,rE,sE,iE,df=!1,Yl=[],Jr=null,Xr=null,Zr=null,ja=new Map,Fa=new Map,Mr=[],vk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cy(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function ta(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ml(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function _k(t,e,n,r,s){switch(e){case"focusin":return Jr=ta(Jr,t,e,n,r,s),!0;case"dragenter":return Xr=ta(Xr,t,e,n,r,s),!0;case"mouseover":return Zr=ta(Zr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ja.set(i,ta(ja.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Fa.set(i,ta(Fa.get(i)||null,t,e,n,r,s)),!0}return!1}function oE(t){var e=Fs(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=Gw(n),e!==null){t.blockedOn=e,iE(t.priority,function(){rE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);of=r,n.target.dispatchEvent(r),of=null}else return e=ml(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function dy(t,e,n){Eu(t)&&n.delete(e)}function wk(){df=!1,Jr!==null&&Eu(Jr)&&(Jr=null),Xr!==null&&Eu(Xr)&&(Xr=null),Zr!==null&&Eu(Zr)&&(Zr=null),ja.forEach(dy),Fa.forEach(dy)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,wk)))}function Ua(t){function e(s){return na(s,t)}if(0<Yl.length){na(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&na(Jr,t),Xr!==null&&na(Xr,t),Zr!==null&&na(Zr,t),ja.forEach(e),Fa.forEach(e),n=0;n<Mr.length;n++)r=Mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mr.length&&(n=Mr[0],n.blockedOn===null);)oE(n),n.blockedOn===null&&Mr.shift()}var Hi=_r.ReactCurrentBatchConfig,qu=!0;function Ek(t,e,n,r){var s=ge,i=Hi.transition;Hi.transition=null;try{ge=1,Np(t,e,n,r)}finally{ge=s,Hi.transition=i}}function Tk(t,e,n,r){var s=ge,i=Hi.transition;Hi.transition=null;try{ge=4,Np(t,e,n,r)}finally{ge=s,Hi.transition=i}}function Np(t,e,n,r){if(qu){var s=hf(t,e,n,r);if(s===null)sh(t,e,r,Ku,n),cy(t,r);else if(_k(s,t,e,n,r))r.stopPropagation();else if(cy(t,r),e&4&&-1<vk.indexOf(t)){for(;s!==null;){var i=ml(s);if(i!==null&&nE(i),i=hf(t,e,n,r),i===null&&sh(t,e,r,Ku,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else sh(t,e,r,null,n)}}var Ku=null;function hf(t,e,n,r){if(Ku=null,t=bp(r),t=Fs(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ku=t,null}function aE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uk()){case Pp:return 1;case Xw:return 4;case Wu:case ck:return 16;case Zw:return 536870912;default:return 16}default:return 16}}var qr=null,Dp=null,Tu=null;function lE(){if(Tu)return Tu;var t,e=Dp,n=e.length,r,s="value"in qr?qr.value:qr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Tu=s.slice(t,1<r?1-r:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function hy(){return!1}function rn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jl:hy,this.isPropagationStopped=hy,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Op=rn(_o),pl=Ve({},_o,{view:0,detail:0}),xk=rn(pl),Qd,Yd,ra,jc=Ve({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Qd=t.screenX-ra.screenX,Yd=t.screenY-ra.screenY):Yd=Qd=0,ra=t),Qd)},movementY:function(t){return"movementY"in t?t.movementY:Yd}}),fy=rn(jc),Ik=Ve({},jc,{dataTransfer:0}),Sk=rn(Ik),kk=Ve({},pl,{relatedTarget:0}),Jd=rn(kk),Ak=Ve({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),bk=rn(Ak),Pk=Ve({},_o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ck=rn(Pk),Rk=Ve({},_o,{data:0}),py=rn(Rk),Nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ok={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ok[t])?!!e[t]:!1}function Lp(){return Lk}var Vk=Ve({},pl,{key:function(t){if(t.key){var e=Nk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lp,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mk=rn(Vk),jk=Ve({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),my=rn(jk),Fk=Ve({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lp}),Uk=rn(Fk),Bk=Ve({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),zk=rn(Bk),$k=Ve({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wk=rn($k),Hk=[9,13,27,32],Vp=dr&&"CompositionEvent"in window,Ea=null;dr&&"documentMode"in document&&(Ea=document.documentMode);var qk=dr&&"TextEvent"in window&&!Ea,uE=dr&&(!Vp||Ea&&8<Ea&&11>=Ea),gy=" ",yy=!1;function cE(t,e){switch(t){case"keyup":return Hk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ri=!1;function Kk(t,e){switch(t){case"compositionend":return dE(e);case"keypress":return e.which!==32?null:(yy=!0,gy);case"textInput":return t=e.data,t===gy&&yy?null:t;default:return null}}function Gk(t,e){if(Ri)return t==="compositionend"||!Vp&&cE(t,e)?(t=lE(),Tu=Dp=qr=null,Ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uE&&e.locale!=="ko"?null:e.data;default:return null}}var Qk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qk[t.type]:e==="textarea"}function hE(t,e,n,r){$w(r),e=Gu(e,"onChange"),0<e.length&&(n=new Op("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ta=null,Ba=null;function Yk(t){xE(t,0)}function Fc(t){var e=Oi(t);if(Vw(e))return t}function Jk(t,e){if(t==="change")return e}var fE=!1;if(dr){var Xd;if(dr){var Zd="oninput"in document;if(!Zd){var _y=document.createElement("div");_y.setAttribute("oninput","return;"),Zd=typeof _y.oninput=="function"}Xd=Zd}else Xd=!1;fE=Xd&&(!document.documentMode||9<document.documentMode)}function wy(){Ta&&(Ta.detachEvent("onpropertychange",pE),Ba=Ta=null)}function pE(t){if(t.propertyName==="value"&&Fc(Ba)){var e=[];hE(e,Ba,t,bp(t)),Kw(Yk,e)}}function Xk(t,e,n){t==="focusin"?(wy(),Ta=e,Ba=n,Ta.attachEvent("onpropertychange",pE)):t==="focusout"&&wy()}function Zk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(Ba)}function eA(t,e){if(t==="click")return Fc(e)}function tA(t,e){if(t==="input"||t==="change")return Fc(e)}function nA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:nA;function za(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Kh.call(e,s)||!bn(t[s],e[s]))return!1}return!0}function Ey(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ty(t,e){var n=Ey(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ey(n)}}function mE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gE(){for(var t=window,e=Bu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bu(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rA(t){var e=gE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mE(n.ownerDocument.documentElement,n)){if(r!==null&&Mp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ty(n,i);var o=Ty(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sA=dr&&"documentMode"in document&&11>=document.documentMode,Ni=null,ff=null,xa=null,pf=!1;function xy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||Ni==null||Ni!==Bu(r)||(r=Ni,"selectionStart"in r&&Mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xa&&za(xa,r)||(xa=r,r=Gu(ff,"onSelect"),0<r.length&&(e=new Op("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},eh={},yE={};dr&&(yE=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Uc(t){if(eh[t])return eh[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yE)return eh[t]=e[n];return t}var vE=Uc("animationend"),_E=Uc("animationiteration"),wE=Uc("animationstart"),EE=Uc("transitionend"),TE=new Map,Iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ws(t,e){TE.set(t,e),oi(e,[t])}for(var th=0;th<Iy.length;th++){var nh=Iy[th],iA=nh.toLowerCase(),oA=nh[0].toUpperCase()+nh.slice(1);ws(iA,"on"+oA)}ws(vE,"onAnimationEnd");ws(_E,"onAnimationIteration");ws(wE,"onAnimationStart");ws("dblclick","onDoubleClick");ws("focusin","onFocus");ws("focusout","onBlur");ws(EE,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Sy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ik(r,e,void 0,t),t.currentTarget=null}function xE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Sy(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Sy(s,l,c),i=u}}}if($u)throw t=uf,$u=!1,uf=null,t}function Ie(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var r=t+"__bubble";n.has(r)||(IE(e,t,2,!1),n.add(r))}function rh(t,e,n){var r=0;e&&(r|=4),IE(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[Zl]){t[Zl]=!0,Rw.forEach(function(n){n!=="selectionchange"&&(aA.has(n)||rh(n,!1,t),rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,rh("selectionchange",!1,e))}}function IE(t,e,n,r){switch(aE(e)){case 1:var s=Ek;break;case 4:s=Tk;break;default:s=Np}n=s.bind(null,e,n,t),s=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function sh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Fs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Kw(function(){var c=i,f=bp(n),m=[];e:{var g=TE.get(t);if(g!==void 0){var A=Op,P=t;switch(t){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":A=Mk;break;case"focusin":P="focus",A=Jd;break;case"focusout":P="blur",A=Jd;break;case"beforeblur":case"afterblur":A=Jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Sk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Uk;break;case vE:case _E:case wE:A=bk;break;case EE:A=zk;break;case"scroll":A=xk;break;case"wheel":A=Wk;break;case"copy":case"cut":case"paste":A=Ck;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=my}var R=(e&4)!==0,L=!R&&t==="scroll",x=R?g!==null?g+"Capture":null:g;R=[];for(var w=c,k;w!==null;){k=w;var V=k.stateNode;if(k.tag===5&&V!==null&&(k=V,x!==null&&(V=Ma(w,x),V!=null&&R.push(Wa(w,V,k)))),L)break;w=w.return}0<R.length&&(g=new A(g,P,null,n,f),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==of&&(P=n.relatedTarget||n.fromElement)&&(Fs(P)||P[hr]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=c,P=P?Fs(P):null,P!==null&&(L=ai(P),P!==L||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=c),A!==P)){if(R=fy,V="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(R=my,V="onPointerLeave",x="onPointerEnter",w="pointer"),L=A==null?g:Oi(A),k=P==null?g:Oi(P),g=new R(V,w+"leave",A,n,f),g.target=L,g.relatedTarget=k,V=null,Fs(f)===c&&(R=new R(x,w+"enter",P,n,f),R.target=k,R.relatedTarget=L,V=R),L=V,A&&P)t:{for(R=A,x=P,w=0,k=R;k;k=Ii(k))w++;for(k=0,V=x;V;V=Ii(V))k++;for(;0<w-k;)R=Ii(R),w--;for(;0<k-w;)x=Ii(x),k--;for(;w--;){if(R===x||x!==null&&R===x.alternate)break t;R=Ii(R),x=Ii(x)}R=null}else R=null;A!==null&&ky(m,g,A,R,!1),P!==null&&L!==null&&ky(m,L,P,R,!0)}}e:{if(g=c?Oi(c):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var j=Jk;else if(vy(g))if(fE)j=tA;else{j=Zk;var B=Xk}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=eA);if(j&&(j=j(t,c))){hE(m,j,n,f);break e}B&&B(t,g,c),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&ef(g,"number",g.value)}switch(B=c?Oi(c):window,t){case"focusin":(vy(B)||B.contentEditable==="true")&&(Ni=B,ff=c,xa=null);break;case"focusout":xa=ff=Ni=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,xy(m,n,f);break;case"selectionchange":if(sA)break;case"keydown":case"keyup":xy(m,n,f)}var _;if(Vp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ri?cE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(uE&&n.locale!=="ko"&&(Ri||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ri&&(_=lE()):(qr=f,Dp="value"in qr?qr.value:qr.textContent,Ri=!0)),B=Gu(c,y),0<B.length&&(y=new py(y,t,null,n,f),m.push({event:y,listeners:B}),_?y.data=_:(_=dE(n),_!==null&&(y.data=_)))),(_=qk?Kk(t,n):Gk(t,n))&&(c=Gu(c,"onBeforeInput"),0<c.length&&(f=new py("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=_))}xE(m,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ma(t,n),i!=null&&r.unshift(Wa(t,i,s)),i=Ma(t,e),i!=null&&r.push(Wa(t,i,s))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ky(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Ma(n,i),u!=null&&o.unshift(Wa(n,u,l))):s||(u=Ma(n,i),u!=null&&o.push(Wa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lA=/\r\n?/g,uA=/\u0000|\uFFFD/g;function Ay(t){return(typeof t=="string"?t:""+t).replace(lA,`
`).replace(uA,"")}function eu(t,e,n){if(e=Ay(e),Ay(t)!==e&&n)throw Error(z(425))}function Qu(){}var mf=null,gf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,cA=typeof clearTimeout=="function"?clearTimeout:void 0,by=typeof Promise=="function"?Promise:void 0,dA=typeof queueMicrotask=="function"?queueMicrotask:typeof by<"u"?function(t){return by.resolve(null).then(t).catch(hA)}:vf;function hA(t){setTimeout(function(){throw t})}function ih(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ua(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Bn="__reactFiber$"+wo,Ha="__reactProps$"+wo,hr="__reactContainer$"+wo,_f="__reactEvents$"+wo,fA="__reactListeners$"+wo,pA="__reactHandles$"+wo;function Fs(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hr]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Py(t);t!==null;){if(n=t[Bn])return n;t=Py(t)}return e}t=n,n=t.parentNode}return null}function ml(t){return t=t[Bn]||t[hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Bc(t){return t[Ha]||null}var wf=[],Li=-1;function Es(t){return{current:t}}function be(t){0>Li||(t.current=wf[Li],wf[Li]=null,Li--)}function we(t,e){Li++,wf[Li]=t.current,t.current=e}var hs={},It=Es(hs),zt=Es(!1),Gs=hs;function no(t,e){var n=t.type.contextTypes;if(!n)return hs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function $t(t){return t=t.childContextTypes,t!=null}function Yu(){be(zt),be(It)}function Cy(t,e,n){if(It.current!==hs)throw Error(z(168));we(It,e),we(zt,n)}function SE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,XS(t)||"Unknown",s));return Ve({},n,r)}function Ju(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hs,Gs=It.current,we(It,t),we(zt,zt.current),!0}function Ry(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=SE(t,e,Gs),r.__reactInternalMemoizedMergedChildContext=t,be(zt),be(It),we(It,t)):be(zt),we(zt,n)}var rr=null,zc=!1,oh=!1;function kE(t){rr===null?rr=[t]:rr.push(t)}function mA(t){zc=!0,kE(t)}function Ts(){if(!oh&&rr!==null){oh=!0;var t=0,e=ge;try{var n=rr;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rr=null,zc=!1}catch(s){throw rr!==null&&(rr=rr.slice(t+1)),Jw(Pp,Ts),s}finally{ge=e,oh=!1}}return null}var Vi=[],Mi=0,Xu=null,Zu=0,an=[],ln=0,Qs=null,sr=1,ir="";function Ls(t,e){Vi[Mi++]=Zu,Vi[Mi++]=Xu,Xu=t,Zu=e}function AE(t,e,n){an[ln++]=sr,an[ln++]=ir,an[ln++]=Qs,Qs=t;var r=sr;t=ir;var s=32-Sn(r)-1;r&=~(1<<s),n+=1;var i=32-Sn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,sr=1<<32-Sn(e)+s|n<<s|r,ir=i+t}else sr=1<<i|n<<s|r,ir=t}function jp(t){t.return!==null&&(Ls(t,1),AE(t,1,0))}function Fp(t){for(;t===Xu;)Xu=Vi[--Mi],Vi[Mi]=null,Zu=Vi[--Mi],Vi[Mi]=null;for(;t===Qs;)Qs=an[--ln],an[ln]=null,ir=an[--ln],an[ln]=null,sr=an[--ln],an[ln]=null}var Xt=null,Qt=null,Ce=!1,xn=null;function bE(t,e){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ny(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qs!==null?{id:sr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Qt=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(Ce){var e=Qt;if(e){var n=e;if(!Ny(t,e)){if(Ef(t))throw Error(z(418));e=es(n.nextSibling);var r=Xt;e&&Ny(t,e)?bE(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Xt=t)}}else{if(Ef(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ce=!1,Xt=t}}}function Dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function tu(t){if(t!==Xt)return!1;if(!Ce)return Dy(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Qt)){if(Ef(t))throw PE(),Error(z(418));for(;e;)bE(t,e),e=es(e.nextSibling)}if(Dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Xt?es(t.stateNode.nextSibling):null;return!0}function PE(){for(var t=Qt;t;)t=es(t.nextSibling)}function ro(){Qt=Xt=null,Ce=!1}function Up(t){xn===null?xn=[t]:xn.push(t)}var gA=_r.ReactCurrentBatchConfig;function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function nu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oy(t){var e=t._init;return e(t._payload)}function CE(t){function e(x,w){if(t){var k=x.deletions;k===null?(x.deletions=[w],x.flags|=16):k.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function s(x,w){return x=ss(x,w),x.index=0,x.sibling=null,x}function i(x,w,k){return x.index=k,t?(k=x.alternate,k!==null?(k=k.index,k<w?(x.flags|=2,w):k):(x.flags|=2,w)):(x.flags|=1048576,w)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,w,k,V){return w===null||w.tag!==6?(w=fh(k,x.mode,V),w.return=x,w):(w=s(w,k),w.return=x,w)}function u(x,w,k,V){var j=k.type;return j===Ci?f(x,w,k.props.children,V,k.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lr&&Oy(j)===w.type)?(V=s(w,k.props),V.ref=sa(x,w,k),V.return=x,V):(V=Cu(k.type,k.key,k.props,null,x.mode,V),V.ref=sa(x,w,k),V.return=x,V)}function c(x,w,k,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=ph(k,x.mode,V),w.return=x,w):(w=s(w,k.children||[]),w.return=x,w)}function f(x,w,k,V,j){return w===null||w.tag!==7?(w=Hs(k,x.mode,V,j),w.return=x,w):(w=s(w,k),w.return=x,w)}function m(x,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=fh(""+w,x.mode,k),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hl:return k=Cu(w.type,w.key,w.props,null,x.mode,k),k.ref=sa(x,null,w),k.return=x,k;case Pi:return w=ph(w,x.mode,k),w.return=x,w;case Lr:var V=w._init;return m(x,V(w._payload),k)}if(ca(w)||Zo(w))return w=Hs(w,x.mode,k,null),w.return=x,w;nu(x,w)}return null}function g(x,w,k,V){var j=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return j!==null?null:l(x,w,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Hl:return k.key===j?u(x,w,k,V):null;case Pi:return k.key===j?c(x,w,k,V):null;case Lr:return j=k._init,g(x,w,j(k._payload),V)}if(ca(k)||Zo(k))return j!==null?null:f(x,w,k,V,null);nu(x,k)}return null}function A(x,w,k,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return x=x.get(k)||null,l(w,x,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Hl:return x=x.get(V.key===null?k:V.key)||null,u(w,x,V,j);case Pi:return x=x.get(V.key===null?k:V.key)||null,c(w,x,V,j);case Lr:var B=V._init;return A(x,w,k,B(V._payload),j)}if(ca(V)||Zo(V))return x=x.get(k)||null,f(w,x,V,j,null);nu(w,V)}return null}function P(x,w,k,V){for(var j=null,B=null,_=w,y=w=0,E=null;_!==null&&y<k.length;y++){_.index>y?(E=_,_=null):E=_.sibling;var S=g(x,_,k[y],V);if(S===null){_===null&&(_=E);break}t&&_&&S.alternate===null&&e(x,_),w=i(S,w,y),B===null?j=S:B.sibling=S,B=S,_=E}if(y===k.length)return n(x,_),Ce&&Ls(x,y),j;if(_===null){for(;y<k.length;y++)_=m(x,k[y],V),_!==null&&(w=i(_,w,y),B===null?j=_:B.sibling=_,B=_);return Ce&&Ls(x,y),j}for(_=r(x,_);y<k.length;y++)E=A(_,x,y,k[y],V),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),w=i(E,w,y),B===null?j=E:B.sibling=E,B=E);return t&&_.forEach(function(b){return e(x,b)}),Ce&&Ls(x,y),j}function R(x,w,k,V){var j=Zo(k);if(typeof j!="function")throw Error(z(150));if(k=j.call(k),k==null)throw Error(z(151));for(var B=j=null,_=w,y=w=0,E=null,S=k.next();_!==null&&!S.done;y++,S=k.next()){_.index>y?(E=_,_=null):E=_.sibling;var b=g(x,_,S.value,V);if(b===null){_===null&&(_=E);break}t&&_&&b.alternate===null&&e(x,_),w=i(b,w,y),B===null?j=b:B.sibling=b,B=b,_=E}if(S.done)return n(x,_),Ce&&Ls(x,y),j;if(_===null){for(;!S.done;y++,S=k.next())S=m(x,S.value,V),S!==null&&(w=i(S,w,y),B===null?j=S:B.sibling=S,B=S);return Ce&&Ls(x,y),j}for(_=r(x,_);!S.done;y++,S=k.next())S=A(_,x,y,S.value,V),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?y:S.key),w=i(S,w,y),B===null?j=S:B.sibling=S,B=S);return t&&_.forEach(function(C){return e(x,C)}),Ce&&Ls(x,y),j}function L(x,w,k,V){if(typeof k=="object"&&k!==null&&k.type===Ci&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Hl:e:{for(var j=k.key,B=w;B!==null;){if(B.key===j){if(j=k.type,j===Ci){if(B.tag===7){n(x,B.sibling),w=s(B,k.props.children),w.return=x,x=w;break e}}else if(B.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lr&&Oy(j)===B.type){n(x,B.sibling),w=s(B,k.props),w.ref=sa(x,B,k),w.return=x,x=w;break e}n(x,B);break}else e(x,B);B=B.sibling}k.type===Ci?(w=Hs(k.props.children,x.mode,V,k.key),w.return=x,x=w):(V=Cu(k.type,k.key,k.props,null,x.mode,V),V.ref=sa(x,w,k),V.return=x,x=V)}return o(x);case Pi:e:{for(B=k.key;w!==null;){if(w.key===B)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(x,w.sibling),w=s(w,k.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=ph(k,x.mode,V),w.return=x,x=w}return o(x);case Lr:return B=k._init,L(x,w,B(k._payload),V)}if(ca(k))return P(x,w,k,V);if(Zo(k))return R(x,w,k,V);nu(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(x,w.sibling),w=s(w,k),w.return=x,x=w):(n(x,w),w=fh(k,x.mode,V),w.return=x,x=w),o(x)):n(x,w)}return L}var so=CE(!0),RE=CE(!1),ec=Es(null),tc=null,ji=null,Bp=null;function zp(){Bp=ji=tc=null}function $p(t){var e=ec.current;be(ec),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){tc=t,Bp=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(Bp!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(tc===null)throw Error(z(308));ji=t,tc.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Us=null;function Wp(t){Us===null?Us=[t]:Us.push(t)}function NE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Wp(e)):(n.next=s.next,s.next=n),e.interleaved=n,fr(t,r)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function Hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function DE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,fr(t,n)}return s=r.interleaved,s===null?(e.next=e,Wp(r)):(e.next=s.next,s.next=e),r.interleaved=e,fr(t,n)}function Iu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}function Ly(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,r){var s=t.updateQueue;Vr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,R=l;switch(g=e,A=n,R.tag){case 1:if(P=R.payload,typeof P=="function"){m=P.call(A,m,g);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=R.payload,g=typeof P=="function"?P.call(A,m,g):P,g==null)break e;m=Ve({},m,g);break e;case 2:Vr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=A,u=m):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Js|=o,t.lanes=o,t.memoizedState=m}}function Vy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var gl={},Wn=Es(gl),qa=Es(gl),Ka=Es(gl);function Bs(t){if(t===gl)throw Error(z(174));return t}function qp(t,e){switch(we(Ka,e),we(qa,t),we(Wn,gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nf(e,t)}be(Wn),we(Wn,e)}function io(){be(Wn),be(qa),be(Ka)}function OE(t){Bs(Ka.current);var e=Bs(Wn.current),n=nf(e,t.type);e!==n&&(we(qa,t),we(Wn,n))}function Kp(t){qa.current===t&&(be(Wn),be(qa))}var De=Es(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function Gp(){for(var t=0;t<ah.length;t++)ah[t]._workInProgressVersionPrimary=null;ah.length=0}var Su=_r.ReactCurrentDispatcher,lh=_r.ReactCurrentBatchConfig,Ys=0,Oe=null,Ze=null,ot=null,sc=!1,Ia=!1,Ga=0,yA=0;function yt(){throw Error(z(321))}function Qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function Yp(t,e,n,r,s,i){if(Ys=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Su.current=t===null||t.memoizedState===null?EA:TA,t=n(r,s),Ia){i=0;do{if(Ia=!1,Ga=0,25<=i)throw Error(z(301));i+=1,ot=Ze=null,e.updateQueue=null,Su.current=xA,t=n(r,s)}while(Ia)}if(Su.current=ic,e=Ze!==null&&Ze.next!==null,Ys=0,ot=Ze=Oe=null,sc=!1,e)throw Error(z(300));return t}function Jp(){var t=Ga!==0;return Ga=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Oe.memoizedState=ot=t:ot=ot.next=t,ot}function mn(){if(Ze===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=ot===null?Oe.memoizedState:ot.next;if(e!==null)ot=e,Ze=t;else{if(t===null)throw Error(z(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},ot===null?Oe.memoizedState=ot=t:ot=ot.next=t}return ot}function Qa(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ze,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Ys&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Oe.lanes|=f,Js|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,bn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,Js|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);bn(i,e.memoizedState)||(Bt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function LE(){}function VE(t,e){var n=Oe,r=mn(),s=e(),i=!bn(r.memoizedState,s);if(i&&(r.memoizedState=s,Bt=!0),r=r.queue,Xp(FE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,Ya(9,jE.bind(null,n,r,s,e),void 0,null),at===null)throw Error(z(349));Ys&30||ME(n,e,s)}return s}function ME(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jE(t,e,n,r){e.value=n,e.getSnapshot=r,UE(e)&&BE(t)}function FE(t,e,n){return n(function(){UE(e)&&BE(t)})}function UE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function BE(t){var e=fr(t,1);e!==null&&kn(e,t,1,-1)}function My(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=wA.bind(null,Oe,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zE(){return mn().memoizedState}function ku(t,e,n,r){var s=Fn();Oe.flags|=t,s.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function $c(t,e,n,r){var s=mn();r=r===void 0?null:r;var i=void 0;if(Ze!==null){var o=Ze.memoizedState;if(i=o.destroy,r!==null&&Qp(r,o.deps)){s.memoizedState=Ya(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=Ya(1|e,n,i,r)}function jy(t,e){return ku(8390656,8,t,e)}function Xp(t,e){return $c(2048,8,t,e)}function $E(t,e){return $c(4,2,t,e)}function WE(t,e){return $c(4,4,t,e)}function HE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qE(t,e,n){return n=n!=null?n.concat([t]):null,$c(4,4,HE.bind(null,e,t),n)}function Zp(){}function KE(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function GE(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function QE(t,e,n){return Ys&21?(bn(n,e)||(n=eE(),Oe.lanes|=n,Js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function vA(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=lh.transition;lh.transition={};try{t(!1),e()}finally{ge=n,lh.transition=r}}function YE(){return mn().memoizedState}function _A(t,e,n){var r=rs(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},JE(t))XE(e,n);else if(n=NE(t,e,n,r),n!==null){var s=Rt();kn(n,t,r,s),ZE(n,e,r)}}function wA(t,e,n){var r=rs(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(JE(t))XE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,bn(l,o)){var u=e.interleaved;u===null?(s.next=s,Wp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=NE(t,e,s,r),n!==null&&(s=Rt(),kn(n,t,r,s),ZE(n,e,r))}}function JE(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function XE(t,e){Ia=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ZE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}var ic={readContext:pn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},EA={readContext:pn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:jy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ku(4194308,4,HE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ku(4194308,4,t,e)},useInsertionEffect:function(t,e){return ku(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_A.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:My,useDebugValue:Zp,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=My(!1),e=t[0];return t=vA.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=Fn();if(Ce){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),at===null)throw Error(z(349));Ys&30||ME(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,jy(FE.bind(null,r,i,t),[t]),r.flags|=2048,Ya(9,jE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Fn(),e=at.identifierPrefix;if(Ce){var n=ir,r=sr;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TA={readContext:pn,useCallback:KE,useContext:pn,useEffect:Xp,useImperativeHandle:qE,useInsertionEffect:$E,useLayoutEffect:WE,useMemo:GE,useReducer:uh,useRef:zE,useState:function(){return uh(Qa)},useDebugValue:Zp,useDeferredValue:function(t){var e=mn();return QE(e,Ze.memoizedState,t)},useTransition:function(){var t=uh(Qa)[0],e=mn().memoizedState;return[t,e]},useMutableSource:LE,useSyncExternalStore:VE,useId:YE,unstable_isNewReconciler:!1},xA={readContext:pn,useCallback:KE,useContext:pn,useEffect:Xp,useImperativeHandle:qE,useInsertionEffect:$E,useLayoutEffect:WE,useMemo:GE,useReducer:ch,useRef:zE,useState:function(){return ch(Qa)},useDebugValue:Zp,useDeferredValue:function(t){var e=mn();return Ze===null?e.memoizedState=t:QE(e,Ze.memoizedState,t)},useTransition:function(){var t=ch(Qa)[0],e=mn().memoizedState;return[t,e]},useMutableSource:LE,useSyncExternalStore:VE,useId:YE,unstable_isNewReconciler:!1};function En(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function If(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),s=rs(t),i=lr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ts(t,i,s),e!==null&&(kn(e,t,s,r),Iu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),s=rs(t),i=lr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ts(t,i,s),e!==null&&(kn(e,t,s,r),Iu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=rs(t),s=lr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ts(t,s,r),e!==null&&(kn(e,t,r,n),Iu(e,t,r))}};function Fy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(s,i):!0}function e0(t,e,n){var r=!1,s=hs,i=e.contextType;return typeof i=="object"&&i!==null?i=pn(i):(s=$t(e)?Gs:It.current,r=e.contextTypes,i=(r=r!=null)?no(t,s):hs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Uy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function Sf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Hp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=pn(i):(i=$t(e)?Gs:It.current,s.context=no(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(If(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Wc.enqueueReplaceState(s,s.state,null),nc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",r=e;do n+=JS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function dh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IA=typeof WeakMap=="function"?WeakMap:Map;function t0(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ac||(ac=!0,Vf=r),kf(t,e)},n}function n0(t,e,n){n=lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){kf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof r!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function By(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=jA.bind(null,t,e,n),e.then(t,t))}function zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $y(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var SA=_r.ReactCurrentOwner,Bt=!1;function Ct(t,e,n,r){e.child=t===null?RE(e,null,n,r):so(e,t.child,n,r)}function Wy(t,e,n,r,s){n=n.render;var i=e.ref;return qi(e,s),r=Yp(t,e,n,r,i,s),n=Jp(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,pr(t,e,s)):(Ce&&n&&jp(e),e.flags|=1,Ct(t,e,r,s),e.child)}function Hy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!am(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,r0(t,e,i,r,s)):(t=Cu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return pr(t,e,s)}return e.flags|=1,t=ss(i,r),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(za(i,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,pr(t,e,s)}return Af(t,e,n,r,s)}function s0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ui,Gt),Gt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ui,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(Ui,Gt),Gt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,we(Ui,Gt),Gt|=r;return Ct(t,e,s,n),e.child}function i0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Af(t,e,n,r,s){var i=$t(n)?Gs:It.current;return i=no(e,i),qi(e,s),n=Yp(t,e,n,r,i,s),r=Jp(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,pr(t,e,s)):(Ce&&r&&jp(e),e.flags|=1,Ct(t,e,n,s),e.child)}function qy(t,e,n,r,s){if($t(n)){var i=!0;Ju(e)}else i=!1;if(qi(e,s),e.stateNode===null)Au(t,e),e0(e,n,r),Sf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pn(c):(c=$t(n)?Gs:It.current,c=no(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Uy(e,o,r,c),Vr=!1;var g=e.memoizedState;o.state=g,nc(e,r,o,s),u=e.memoizedState,l!==r||g!==u||zt.current||Vr?(typeof f=="function"&&(If(e,n,f,r),u=e.memoizedState),(l=Vr||Fy(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,DE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:En(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pn(u):(u=$t(n)?Gs:It.current,u=no(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Uy(e,o,r,u),Vr=!1,g=e.memoizedState,o.state=g,nc(e,r,o,s);var P=e.memoizedState;l!==m||g!==P||zt.current||Vr?(typeof A=="function"&&(If(e,n,A,r),P=e.memoizedState),(c=Vr||Fy(e,n,c,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return bf(t,e,n,r,i,s)}function bf(t,e,n,r,s,i){i0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Ry(e,n,!1),pr(t,e,i);r=e.stateNode,SA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,i),e.child=so(e,null,l,i)):Ct(t,e,l,i),e.memoizedState=r.state,s&&Ry(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?Cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cy(t,e.context,!1),qp(t,e.containerInfo)}function Ky(t,e,n,r,s){return ro(),Up(s),e.flags|=256,Ct(t,e,n,r),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function a0(t,e,n){var r=e.pendingProps,s=De.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),we(De,s&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Kc(o,r,0,null),t=Hs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Cf(n),e.memoizedState=Pf,t):em(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return kA(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ss(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ss(l,i):(i=Hs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Pf,r}return i=t.child,t=i.sibling,r=ss(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function em(t,e){return e=Kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ru(t,e,n,r){return r!==null&&Up(r),so(e,t.child,null,n),t=em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=dh(Error(z(422))),ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Kc({mode:"visible",children:r.children},s,0,null),i=Hs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Cf(o),e.memoizedState=Pf,i);if(!(e.mode&1))return ru(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=dh(i,r,void 0),ru(t,e,o,r)}if(l=(o&t.childLanes)!==0,Bt||l){if(r=at,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,fr(t,s),kn(r,t,s,-1))}return om(),r=dh(Error(z(421))),ru(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=FA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Qt=es(s.nextSibling),Xt=e,Ce=!0,xn=null,t!==null&&(an[ln++]=sr,an[ln++]=ir,an[ln++]=Qs,sr=t.id,ir=t.overflow,Qs=e),e=em(e,r.children),e.flags|=4096,e)}function Gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xf(t.return,e,n)}function hh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function l0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ct(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gy(t,n,e);else if(t.tag===19)Gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(De,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&rc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hh(e,!0,n,null,i);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Au(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ss(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ss(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AA(t,e,n){switch(e.tag){case 3:o0(e),ro();break;case 5:OE(e);break;case 1:$t(e.type)&&Ju(e);break;case 4:qp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;we(ec,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?a0(t,e,n):(we(De,De.current&1),t=pr(t,e,n),t!==null?t.sibling:null);we(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return l0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return pr(t,e,n)}var u0,Rf,c0,d0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};c0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Bs(Wn.current);var i=null;switch(n){case"input":s=Xh(t,s),r=Xh(t,r),i=[];break;case"select":s=Ve({},s,{value:void 0}),r=Ve({},r,{value:void 0}),i=[];break;case"textarea":s=tf(t,s),r=tf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qu)}rf(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};d0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ia(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bA(t,e,n){var r=e.pendingProps;switch(Fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return $t(e.type)&&Yu(),vt(e),null;case 3:return r=e.stateNode,io(),be(zt),be(It),Gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(Ff(xn),xn=null))),Rf(t,e),vt(e),null;case 5:Kp(e);var s=Bs(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)c0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return vt(e),null}if(t=Bs(Wn.current),tu(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Bn]=e,r[Ha]=i,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(s=0;s<ha.length;s++)Ie(ha[s],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":ry(r,i),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ie("invalid",r);break;case"textarea":iy(r,i),Ie("invalid",r)}rf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&eu(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&eu(r.textContent,l,t),s=["children",""+l]):La.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":ql(r),sy(r,i,!0);break;case"textarea":ql(r),oy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bn]=e,t[Ha]=r,u0(t,e,!1,!1),e.stateNode=t;e:{switch(o=sf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),s=r;break;case"iframe":case"object":case"embed":Ie("load",t),s=r;break;case"video":case"audio":for(s=0;s<ha.length;s++)Ie(ha[s],t);s=r;break;case"source":Ie("error",t),s=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),s=r;break;case"details":Ie("toggle",t),s=r;break;case"input":ry(t,r),s=Xh(t,r),Ie("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ve({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":iy(t,r),s=tf(t,r),Ie("invalid",t);break;default:s=r}rf(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?zw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uw(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Va(t,u):typeof u=="number"&&Va(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(La.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ie("scroll",t):u!=null&&Ip(t,i,u,o))}switch(n){case"input":ql(t),sy(t,r,!1);break;case"textarea":ql(t),oy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ds(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?zi(t,!!r.multiple,i,!1):r.defaultValue!=null&&zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Bs(Ka.current),Bs(Wn.current),tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bn]=e,(i=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eu(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bn]=e,e.stateNode=r}return vt(e),null;case 13:if(be(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Qt!==null&&e.mode&1&&!(e.flags&128))PE(),ro(),e.flags|=98560,i=!1;else if(i=tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Bn]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),i=!1}else xn!==null&&(Ff(xn),xn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?tt===0&&(tt=3):om())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return io(),Rf(t,e),t===null&&$a(e.stateNode.containerInfo),vt(e),null;case 10:return $p(e.type._context),vt(e),null;case 17:return $t(e.type)&&Yu(),vt(e),null;case 19:if(be(De),i=e.memoizedState,i===null)return vt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ia(i,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,ia(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(De,De.current&1|2),e.child}t=t.sibling}i.tail!==null&&$e()>ao&&(e.flags|=128,r=!0,ia(i,!1),e.lanes=4194304)}else{if(!r)if(t=rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ce)return vt(e),null}else 2*$e()-i.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,r=!0,ia(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=$e(),e.sibling=null,n=De.current,we(De,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function PA(t,e){switch(Fp(e),e.tag){case 1:return $t(e.type)&&Yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),be(zt),be(It),Gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kp(e),null;case 13:if(be(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(De),null;case 4:return io(),null;case 10:return $p(e.type._context),null;case 22:case 23:return im(),null;case 24:return null;default:return null}}var su=!1,Et=!1,CA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function Nf(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Qy=!1;function RA(t,e){if(mf=qu,t=gE(),Mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:t,selectionRange:n},qu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var R=P.memoizedProps,L=P.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?R:En(e.type,R),L);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(V){Fe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return P=Qy,Qy=!1,P}function Sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Nf(e,n,i)}s=s.next}while(s!==r)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h0(t){var e=t.alternate;e!==null&&(t.alternate=null,h0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[Ha],delete e[_f],delete e[fA],delete e[pA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function f0(t){return t.tag===5||t.tag===3||t.tag===4}function Yy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qu));else if(r!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var dt=null,Tn=!1;function Dr(t,e,n){for(n=n.child;n!==null;)p0(t,e,n),n=n.sibling}function p0(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:Et||Fi(n,e);case 6:var r=dt,s=Tn;dt=null,Dr(t,e,n),dt=r,Tn=s,dt!==null&&(Tn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(Tn?(t=dt,n=n.stateNode,t.nodeType===8?ih(t.parentNode,n):t.nodeType===1&&ih(t,n),Ua(t)):ih(dt,n.stateNode));break;case 4:r=dt,s=Tn,dt=n.stateNode.containerInfo,Tn=!0,Dr(t,e,n),dt=r,Tn=s;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Nf(n,e,o),s=s.next}while(s!==r)}Dr(t,e,n);break;case 1:if(!Et&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}Dr(t,e,n);break;case 21:Dr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,Dr(t,e,n),Et=r):Dr(t,e,n);break;default:Dr(t,e,n)}}function Jy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CA),e.forEach(function(r){var s=UA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,Tn=!1;break e;case 3:dt=l.stateNode.containerInfo,Tn=!0;break e;case 4:dt=l.stateNode.containerInfo,Tn=!0;break e}l=l.return}if(dt===null)throw Error(z(160));p0(i,o,s),dt=null,Tn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Fe(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m0(e,t),e=e.sibling}function m0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),jn(t),r&4){try{Sa(3,t,t.return),Hc(3,t)}catch(R){Fe(t,t.return,R)}try{Sa(5,t,t.return)}catch(R){Fe(t,t.return,R)}}break;case 1:wn(e,t),jn(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(wn(e,t),jn(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var s=t.stateNode;try{Va(s,"")}catch(R){Fe(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Mw(s,i),sf(l,o);var c=sf(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?zw(s,m):f==="dangerouslySetInnerHTML"?Uw(s,m):f==="children"?Va(s,m):Ip(s,f,m,c)}switch(l){case"input":Zh(s,i);break;case"textarea":jw(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?zi(s,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?zi(s,!!i.multiple,i.defaultValue,!0):zi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ha]=i}catch(R){Fe(t,t.return,R)}}break;case 6:if(wn(e,t),jn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){Fe(t,t.return,R)}}break;case 3:if(wn(e,t),jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(R){Fe(t,t.return,R)}break;case 4:wn(e,t),jn(t);break;case 13:wn(e,t),jn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(rm=$e())),r&4&&Jy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(c=Et)||f,wn(e,t),Et=c):wn(e,t),jn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,A=g.child,g.tag){case 0:case 11:case 14:case 15:Sa(4,g,g.return);break;case 1:Fi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(R){Fe(r,n,R)}}break;case 5:Fi(g,g.return);break;case 22:if(g.memoizedState!==null){Zy(m);continue}}A!==null?(A.return=g,q=A):Zy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Bw("display",o))}catch(R){Fe(t,t.return,R)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(R){Fe(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:wn(e,t),jn(t),r&4&&Jy(t);break;case 21:break;default:wn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(f0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Va(s,""),r.flags&=-33);var i=Yy(t);Lf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Yy(t);Of(t,l,o);break;default:throw Error(z(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NA(t,e,n){q=t,g0(t)}function g0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||su;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Et;l=su;var c=Et;if(su=o,(Et=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?ev(s):u!==null?(u.return=o,q=u):ev(s);for(;i!==null;)q=i,g0(i),i=i.sibling;q=s,su=l,Et=c}Xy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Xy(t)}}function Xy(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Vy(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ua(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Et||e.flags&512&&Df(e)}catch(g){Fe(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Zy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function ev(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Fe(e,s,u)}}var i=e.return;try{Df(e)}catch(u){Fe(e,i,u)}break;case 5:var o=e.return;try{Df(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var DA=Math.ceil,oc=_r.ReactCurrentDispatcher,tm=_r.ReactCurrentOwner,hn=_r.ReactCurrentBatchConfig,he=0,at=null,Ke=null,pt=0,Gt=0,Ui=Es(0),tt=0,Ja=null,Js=0,qc=0,nm=0,ka=null,Ft=null,rm=0,ao=1/0,er=null,ac=!1,Vf=null,ns=null,iu=!1,Kr=null,lc=0,Aa=0,Mf=null,bu=-1,Pu=0;function Rt(){return he&6?$e():bu!==-1?bu:bu=$e()}function rs(t){return t.mode&1?he&2&&pt!==0?pt&-pt:gA.transition!==null?(Pu===0&&(Pu=eE()),Pu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:aE(t.type)),t):1}function kn(t,e,n,r){if(50<Aa)throw Aa=0,Mf=null,Error(z(185));fl(t,n,r),(!(he&2)||t!==at)&&(t===at&&(!(he&2)&&(qc|=n),tt===4&&jr(t,pt)),Wt(t,r),n===1&&he===0&&!(e.mode&1)&&(ao=$e()+500,zc&&Ts()))}function Wt(t,e){var n=t.callbackNode;gk(t,e);var r=Hu(t,t===at?pt:0);if(r===0)n!==null&&uy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&uy(n),e===1)t.tag===0?mA(tv.bind(null,t)):kE(tv.bind(null,t)),dA(function(){!(he&6)&&Ts()}),n=null;else{switch(tE(r)){case 1:n=Pp;break;case 4:n=Xw;break;case 16:n=Wu;break;case 536870912:n=Zw;break;default:n=Wu}n=I0(n,y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y0(t,e){if(bu=-1,Pu=0,he&6)throw Error(z(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=Hu(t,t===at?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var s=he;he|=2;var i=_0();(at!==t||pt!==e)&&(er=null,ao=$e()+500,Ws(t,e));do try{VA();break}catch(l){v0(t,l)}while(!0);zp(),oc.current=i,he=s,Ke!==null?e=0:(at=null,pt=0,e=tt)}if(e!==0){if(e===2&&(s=cf(t),s!==0&&(r=s,e=jf(t,s))),e===1)throw n=Ja,Ws(t,0),jr(t,r),Wt(t,$e()),n;if(e===6)jr(t,r);else{if(s=t.current.alternate,!(r&30)&&!OA(s)&&(e=uc(t,r),e===2&&(i=cf(t),i!==0&&(r=i,e=jf(t,i))),e===1))throw n=Ja,Ws(t,0),jr(t,r),Wt(t,$e()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Vs(t,Ft,er);break;case 3:if(jr(t,r),(r&130023424)===r&&(e=rm+500-$e(),10<e)){if(Hu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=vf(Vs.bind(null,t,Ft,er),e);break}Vs(t,Ft,er);break;case 4:if(jr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Sn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DA(r/1960))-r,10<r){t.timeoutHandle=vf(Vs.bind(null,t,Ft,er),r);break}Vs(t,Ft,er);break;case 5:Vs(t,Ft,er);break;default:throw Error(z(329))}}}return Wt(t,$e()),t.callbackNode===n?y0.bind(null,t):null}function jf(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(Ws(t,e).flags|=256),t=uc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Ff(e)),t}function Ff(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function OA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!bn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jr(t,e){for(e&=~nm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sn(e),r=1<<n;t[n]=-1,e&=~r}}function tv(t){if(he&6)throw Error(z(327));Ki();var e=Hu(t,0);if(!(e&1))return Wt(t,$e()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=cf(t);r!==0&&(e=r,n=jf(t,r))}if(n===1)throw n=Ja,Ws(t,0),jr(t,e),Wt(t,$e()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vs(t,Ft,er),Wt(t,$e()),null}function sm(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ao=$e()+500,zc&&Ts())}}function Xs(t){Kr!==null&&Kr.tag===0&&!(he&6)&&Ki();var e=he;he|=1;var n=hn.transition,r=ge;try{if(hn.transition=null,ge=1,t)return t()}finally{ge=r,hn.transition=n,he=e,!(he&6)&&Ts()}}function im(){Gt=Ui.current,be(Ui)}function Ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cA(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Fp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:io(),be(zt),be(It),Gp();break;case 5:Kp(r);break;case 4:io();break;case 13:be(De);break;case 19:be(De);break;case 10:$p(r.type._context);break;case 22:case 23:im()}n=n.return}if(at=t,Ke=t=ss(t.current,null),pt=Gt=e,tt=0,Ja=null,nm=qc=Js=0,Ft=ka=null,Us!==null){for(e=0;e<Us.length;e++)if(n=Us[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Us=null}return t}function v0(t,e){do{var n=Ke;try{if(zp(),Su.current=ic,sc){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}sc=!1}if(Ys=0,ot=Ze=Oe=null,Ia=!1,Ga=0,tm.current=null,n===null||n.return===null){tt=1,Ja=e,Ke=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=pt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=zy(o);if(A!==null){A.flags&=-257,$y(A,o,l,i,e),A.mode&1&&By(i,c,e),e=A,u=c;var P=e.updateQueue;if(P===null){var R=new Set;R.add(u),e.updateQueue=R}else P.add(u);break e}else{if(!(e&1)){By(i,c,e),om();break e}u=Error(z(426))}}else if(Ce&&l.mode&1){var L=zy(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),$y(L,o,l,i,e),Up(oo(u,l));break e}}i=u=oo(u,l),tt!==4&&(tt=2),ka===null?ka=[i]:ka.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=t0(i,u,e);Ly(i,x);break e;case 1:l=u;var w=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ns===null||!ns.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=n0(i,l,e);Ly(i,V);break e}}i=i.return}while(i!==null)}E0(n)}catch(j){e=j,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function _0(){var t=oc.current;return oc.current=ic,t===null?ic:t}function om(){(tt===0||tt===3||tt===2)&&(tt=4),at===null||!(Js&268435455)&&!(qc&268435455)||jr(at,pt)}function uc(t,e){var n=he;he|=2;var r=_0();(at!==t||pt!==e)&&(er=null,Ws(t,e));do try{LA();break}catch(s){v0(t,s)}while(!0);if(zp(),he=n,oc.current=r,Ke!==null)throw Error(z(261));return at=null,pt=0,tt}function LA(){for(;Ke!==null;)w0(Ke)}function VA(){for(;Ke!==null&&!ak();)w0(Ke)}function w0(t){var e=x0(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?E0(t):Ke=e,tm.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PA(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ke=null;return}}else if(n=bA(n,e,Gt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);tt===0&&(tt=5)}function Vs(t,e,n){var r=ge,s=hn.transition;try{hn.transition=null,ge=1,MA(t,e,n,r)}finally{hn.transition=s,ge=r}return null}function MA(t,e,n,r){do Ki();while(Kr!==null);if(he&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(yk(t,i),t===at&&(Ke=at=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||iu||(iu=!0,I0(Wu,function(){return Ki(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=hn.transition,hn.transition=null;var o=ge;ge=1;var l=he;he|=4,tm.current=null,RA(t,n),m0(n,t),rA(gf),qu=!!mf,gf=mf=null,t.current=n,NA(n),lk(),he=l,ge=o,hn.transition=i}else t.current=n;if(iu&&(iu=!1,Kr=t,lc=s),i=t.pendingLanes,i===0&&(ns=null),dk(n.stateNode),Wt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ac)throw ac=!1,t=Vf,Vf=null,t;return lc&1&&t.tag!==0&&Ki(),i=t.pendingLanes,i&1?t===Mf?Aa++:(Aa=0,Mf=t):Aa=0,Ts(),null}function Ki(){if(Kr!==null){var t=tE(lc),e=hn.transition,n=ge;try{if(hn.transition=null,ge=16>t?16:t,Kr===null)var r=!1;else{if(t=Kr,Kr=null,lc=0,he&6)throw Error(z(331));var s=he;for(he|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Sa(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,A=f.return;if(h0(f),f===c){q=null;break}if(g!==null){g.return=A,q=g;break}q=A}}}var P=i.alternate;if(P!==null){var R=P.child;if(R!==null){P.child=null;do{var L=R.sibling;R.sibling=null,R=L}while(R!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sa(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,q=x;break e}q=i.return}}var w=t.current;for(q=w;q!==null;){o=q;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,q=k;else e:for(o=w;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hc(9,l)}}catch(j){Fe(l,l.return,j)}if(l===o){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(he=s,Ts(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{ge=n,hn.transition=e}}return!1}function nv(t,e,n){e=oo(n,e),e=t0(t,e,1),t=ts(t,e,1),e=Rt(),t!==null&&(fl(t,1,e),Wt(t,e))}function Fe(t,e,n){if(t.tag===3)nv(t,t,n);else for(;e!==null;){if(e.tag===3){nv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ns===null||!ns.has(r))){t=oo(n,t),t=n0(e,t,1),e=ts(e,t,1),t=Rt(),e!==null&&(fl(e,1,t),Wt(e,t));break}}e=e.return}}function jA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(pt&n)===n&&(tt===4||tt===3&&(pt&130023424)===pt&&500>$e()-rm?Ws(t,0):nm|=n),Wt(t,e)}function T0(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=Rt();t=fr(t,e),t!==null&&(fl(t,e,n),Wt(t,n))}function FA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T0(t,n)}function UA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),T0(t,n)}var x0;x0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,AA(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Ce&&e.flags&1048576&&AE(e,Zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Au(t,e),t=e.pendingProps;var s=no(e,It.current);qi(e,n),s=Yp(null,e,r,t,s,n);var i=Jp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(i=!0,Ju(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Hp(e),s.updater=Wc,e.stateNode=s,s._reactInternals=e,Sf(e,r,t,n),e=bf(null,e,r,!0,i,n)):(e.tag=0,Ce&&i&&jp(e),Ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Au(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=zA(r),t=En(r,t),s){case 0:e=Af(null,e,r,t,n);break e;case 1:e=qy(null,e,r,t,n);break e;case 11:e=Wy(null,e,r,t,n);break e;case 14:e=Hy(null,e,r,En(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),Af(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),qy(t,e,r,s,n);case 3:e:{if(o0(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,DE(t,e),nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=oo(Error(z(423)),e),e=Ky(t,e,r,n,s);break e}else if(r!==s){s=oo(Error(z(424)),e),e=Ky(t,e,r,n,s);break e}else for(Qt=es(e.stateNode.containerInfo.firstChild),Xt=e,Ce=!0,xn=null,n=RE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===s){e=pr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return OE(e),t===null&&Tf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,yf(r,s)?o=null:i!==null&&yf(r,i)&&(e.flags|=32),i0(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&Tf(e),null;case 13:return a0(t,e,n);case 4:return qp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=so(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),Wy(t,e,r,s,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,we(ec,r._currentValue),r._currentValue=o,i!==null)if(bn(i.value,o)){if(i.children===s.children&&!zt.current){e=pr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=lr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),xf(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,qi(e,n),s=pn(s),r=r(s),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,s=En(r,e.pendingProps),s=En(r.type,s),Hy(t,e,r,s,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),Au(t,e),e.tag=1,$t(r)?(t=!0,Ju(e)):t=!1,qi(e,n),e0(e,r,s),Sf(e,r,s,n),bf(null,e,r,!0,t,n);case 19:return l0(t,e,n);case 22:return s0(t,e,n)}throw Error(z(156,e.tag))};function I0(t,e){return Jw(t,e)}function BA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,e,n,r){return new BA(t,e,n,r)}function am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zA(t){if(typeof t=="function")return am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kp)return 11;if(t===Ap)return 14}return 2}function ss(t,e){var n=t.alternate;return n===null?(n=dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Hs(n.children,s,i,e);case Sp:o=8,s|=8;break;case Gh:return t=dn(12,n,e,s|2),t.elementType=Gh,t.lanes=i,t;case Qh:return t=dn(13,n,e,s),t.elementType=Qh,t.lanes=i,t;case Yh:return t=dn(19,n,e,s),t.elementType=Yh,t.lanes=i,t;case Ow:return Kc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nw:o=10;break e;case Dw:o=9;break e;case kp:o=11;break e;case Ap:o=14;break e;case Lr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=dn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Hs(t,e,n,r){return t=dn(7,t,r,e),t.lanes=n,t}function Kc(t,e,n,r){return t=dn(22,t,r,e),t.elementType=Ow,t.lanes=n,t.stateNode={isHidden:!1},t}function fh(t,e,n){return t=dn(6,t,null,e),t.lanes=n,t}function ph(t,e,n){return e=dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $A(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gd(0),this.expirationTimes=Gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function lm(t,e,n,r,s,i,o,l,u){return t=new $A(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=dn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hp(i),t}function WA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return hs;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if($t(n))return SE(t,n,e)}return e}function k0(t,e,n,r,s,i,o,l,u){return t=lm(n,r,!0,t,s,i,o,l,u),t.context=S0(null),n=t.current,r=Rt(),s=rs(n),i=lr(r,s),i.callback=e??null,ts(n,i,s),t.current.lanes=s,fl(t,s,r),Wt(t,r),t}function Gc(t,e,n,r){var s=e.current,i=Rt(),o=rs(s);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ts(s,e,o),t!==null&&(kn(t,s,o,i),Iu(t,s,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){rv(t,e),(t=t.alternate)&&rv(t,e)}function HA(){return null}var A0=typeof reportError=="function"?reportError:function(t){console.error(t)};function cm(t){this._internalRoot=t}Qc.prototype.render=cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Gc(t,e,null,null)};Qc.prototype.unmount=cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xs(function(){Gc(null,t,null,null)}),e[hr]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=sE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mr.length&&e!==0&&e<Mr[n].priority;n++);Mr.splice(n,0,t),n===0&&oE(t)}};function dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sv(){}function qA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=cc(o);i.call(c)}}var o=k0(e,r,t,0,null,!1,!1,"",sv);return t._reactRootContainer=o,t[hr]=o.current,$a(t.nodeType===8?t.parentNode:t),Xs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=cc(u);l.call(c)}}var u=lm(t,0,!1,null,null,!1,!1,"",sv);return t._reactRootContainer=u,t[hr]=u.current,$a(t.nodeType===8?t.parentNode:t),Xs(function(){Gc(e,u,n,r)}),u}function Jc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=cc(o);l.call(u)}}Gc(e,o,t,s)}else o=qA(n,e,t,s,r);return cc(o)}nE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(Cp(e,n|1),Wt(e,$e()),!(he&6)&&(ao=$e()+500,Ts()))}break;case 13:Xs(function(){var r=fr(t,1);if(r!==null){var s=Rt();kn(r,t,1,s)}}),um(t,1)}};Rp=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=Rt();kn(e,t,134217728,n)}um(t,134217728)}};rE=function(t){if(t.tag===13){var e=rs(t),n=fr(t,e);if(n!==null){var r=Rt();kn(n,t,e,r)}um(t,e)}};sE=function(){return ge};iE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};af=function(t,e,n){switch(e){case"input":if(Zh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Bc(r);if(!s)throw Error(z(90));Vw(r),Zh(r,s)}}}break;case"textarea":jw(t,n);break;case"select":e=n.value,e!=null&&zi(t,!!n.multiple,e,!1)}};Hw=sm;qw=Xs;var KA={usingClientEntryPoint:!1,Events:[ml,Oi,Bc,$w,Ww,sm]},oa={findFiberByHostInstance:Fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GA={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qw(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||HA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Mc=ou.inject(GA),$n=ou}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KA;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dm(e))throw Error(z(200));return WA(t,e,null,n)};nn.createRoot=function(t,e){if(!dm(t))throw Error(z(299));var n=!1,r="",s=A0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=lm(t,1,!1,null,null,n,!1,r,s),t[hr]=e.current,$a(t.nodeType===8?t.parentNode:t),new cm(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Qw(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return Xs(t)};nn.hydrate=function(t,e,n){if(!Yc(e))throw Error(z(200));return Jc(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!dm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=A0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=k0(e,null,t,1,n??null,s,!1,i,o),t[hr]=e.current,$a(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Qc(e)};nn.render=function(t,e,n){if(!Yc(e))throw Error(z(200));return Jc(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(z(40));return t._reactRootContainer?(Xs(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[hr]=null})}),!0):!1};nn.unstable_batchedUpdates=sm;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Jc(t,e,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bw.exports=nn;var QA=bw.exports,iv=QA;qh.createRoot=iv.createRoot,qh.hydrateRoot=iv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xa.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const ov="popstate";function YA(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Uf("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:dc(s)}return XA(e,n,null,t)}function Le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JA(){return Math.random().toString(36).substr(2,8)}function av(t,e){return{usr:t.state,key:t.key,idx:e}}function Uf(t,e,n,r){return n===void 0&&(n=null),Xa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Eo(e):e,{state:n,key:e&&e.key||r||JA()})}function dc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function XA(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=Gr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Xa({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Gr.Pop;let L=f(),x=L==null?null:L-c;c=L,u&&u({action:l,location:R.location,delta:x})}function g(L,x){l=Gr.Push;let w=Uf(R.location,L,x);c=f()+1;let k=av(w,c),V=R.createHref(w);try{o.pushState(k,"",V)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(V)}i&&u&&u({action:l,location:R.location,delta:1})}function A(L,x){l=Gr.Replace;let w=Uf(R.location,L,x);c=f();let k=av(w,c),V=R.createHref(w);o.replaceState(k,"",V),i&&u&&u({action:l,location:R.location,delta:0})}function P(L){let x=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof L=="string"?L:dc(L);return w=w.replace(/ $/,"%20"),Le(x,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,x)}let R={get action(){return l},get location(){return t(s,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(ov,m),u=L,()=>{s.removeEventListener(ov,m),u=null}},createHref(L){return e(s,L)},createURL:P,encodeLocation(L){let x=P(L);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:A,go(L){return o.go(L)}};return R}var lv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lv||(lv={}));function ZA(t,e,n){return n===void 0&&(n="/"),eb(t,e,n)}function eb(t,e,n,r){let s=typeof e=="string"?Eo(e):e,i=lo(s.pathname||"/",n);if(i==null)return null;let o=P0(t);tb(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=hb(i);l=cb(o[u],c)}return l}function P0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Le(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=is([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(Le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),P0(i.children,e,f,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:lb(c,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of C0(i.path))s(i,o,u)}),e}function C0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=C0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function tb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ub(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nb=/^:[\w-]+$/,rb=3,sb=2,ib=1,ob=10,ab=-2,uv=t=>t==="*";function lb(t,e){let n=t.split("/"),r=n.length;return n.some(uv)&&(r+=ab),e&&(r+=sb),n.filter(s=>!uv(s)).reduce((s,i)=>s+(nb.test(i)?rb:i===""?ib:ob),r)}function ub(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function cb(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=Bf({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:is([i,m.pathname]),pathnameBase:yb(is([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=is([i,m.pathnameBase]))}return o}function Bf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=db(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:g,isOptional:A}=f;if(g==="*"){let R=l[m]||"";o=i.slice(0,i.length-R.length).replace(/(.)\/+$/,"$1")}const P=l[m];return A&&!P?c[g]=void 0:c[g]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function db(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function hb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const fb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pb=t=>fb.test(t);function mb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Eo(t):t,i;if(n)if(pb(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),hm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=cv(n.substring(1),"/"):i=cv(n,e)}else i=e;return{pathname:i,search:vb(r),hash:_b(s)}}function cv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function mh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fm(t,e){let n=gb(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pm(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Eo(t):(s=Xa({},t),Le(!s.pathname||!s.pathname.includes("?"),mh("?","pathname","search",s)),Le(!s.pathname||!s.pathname.includes("#"),mh("#","pathname","hash",s)),Le(!s.search||!s.search.includes("#"),mh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=mb(s,l),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const is=t=>t.join("/").replace(/\/\/+/g,"/"),yb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_b=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const R0=["post","put","patch","delete"];new Set(R0);const Eb=["get",...R0];new Set(Eb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}const Xc=N.createContext(null),N0=N.createContext(null),wr=N.createContext(null),Zc=N.createContext(null),Xn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),D0=N.createContext(null);function Tb(t,e){let{relative:n}=e===void 0?{}:e;To()||Le(!1);let{basename:r,navigator:s}=N.useContext(wr),{hash:i,pathname:o,search:l}=ed(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:is([r,o])),s.createHref({pathname:u,search:l,hash:i})}function To(){return N.useContext(Zc)!=null}function li(){return To()||Le(!1),N.useContext(Zc).location}function O0(t){N.useContext(wr).static||N.useLayoutEffect(t)}function mm(){let{isDataRoute:t}=N.useContext(Xn);return t?jb():xb()}function xb(){To()||Le(!1);let t=N.useContext(Xc),{basename:e,future:n,navigator:r}=N.useContext(wr),{matches:s}=N.useContext(Xn),{pathname:i}=li(),o=JSON.stringify(fm(s,n.v7_relativeSplatPath)),l=N.useRef(!1);return O0(()=>{l.current=!0}),N.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=pm(c,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:is([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}const Ib=N.createContext(null);function Sb(t){let e=N.useContext(Xn).outlet;return e&&N.createElement(Ib.Provider,{value:t},e)}function kb(){let{matches:t}=N.useContext(Xn),e=t[t.length-1];return e?e.params:{}}function ed(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(wr),{matches:s}=N.useContext(Xn),{pathname:i}=li(),o=JSON.stringify(fm(s,r.v7_relativeSplatPath));return N.useMemo(()=>pm(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Ab(t,e){return bb(t,e)}function bb(t,e,n,r){To()||Le(!1);let{navigator:s}=N.useContext(wr),{matches:i}=N.useContext(Xn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=li(),f;if(e){var m;let L=typeof e=="string"?Eo(e):e;u==="/"||(m=L.pathname)!=null&&m.startsWith(u)||Le(!1),f=L}else f=c;let g=f.pathname||"/",A=g;if(u!=="/"){let L=u.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(L.length).join("/")}let P=ZA(t,{pathname:A}),R=Db(P&&P.map(L=>Object.assign({},L,{params:Object.assign({},l,L.params),pathname:is([u,s.encodeLocation?s.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?u:is([u,s.encodeLocation?s.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),i,n,r);return e&&R?N.createElement(Zc.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Gr.Pop}},R):R}function Pb(){let t=Mb(),e=wb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:s},n):null,null)}const Cb=N.createElement(Pb,null);class Rb extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Xn.Provider,{value:this.props.routeContext},N.createElement(D0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nb(t){let{routeContext:e,match:n,children:r}=t,s=N.useContext(Xc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Xn.Provider,{value:e},r)}function Db(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Le(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:A}=n,P=m.route.loader&&g[m.route.id]===void 0&&(!A||A[m.route.id]===void 0);if(m.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let A,P=!1,R=null,L=null;n&&(A=l&&m.route.id?l[m.route.id]:void 0,R=m.route.errorElement||Cb,u&&(c<0&&g===0?(Fb("route-fallback"),P=!0,L=null):c===g&&(P=!0,L=m.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,g+1)),w=()=>{let k;return A?k=R:P?k=L:m.route.Component?k=N.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=f,N.createElement(Nb,{match:m,routeContext:{outlet:f,matches:x,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?N.createElement(Rb,{location:n.location,revalidation:n.revalidation,component:R,error:A,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):w()},null)}var L0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(L0||{}),V0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(V0||{});function Ob(t){let e=N.useContext(Xc);return e||Le(!1),e}function Lb(t){let e=N.useContext(N0);return e||Le(!1),e}function Vb(t){let e=N.useContext(Xn);return e||Le(!1),e}function M0(t){let e=Vb(),n=e.matches[e.matches.length-1];return n.route.id||Le(!1),n.route.id}function Mb(){var t;let e=N.useContext(D0),n=Lb(),r=M0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function jb(){let{router:t}=Ob(L0.UseNavigateStable),e=M0(V0.UseNavigateStable),n=N.useRef(!1);return O0(()=>{n.current=!0}),N.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Za({fromRouteId:e},i)))},[t,e])}const dv={};function Fb(t,e,n){dv[t]||(dv[t]=!0)}function Ub(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hc(t){let{to:e,replace:n,state:r,relative:s}=t;To()||Le(!1);let{future:i,static:o}=N.useContext(wr),{matches:l}=N.useContext(Xn),{pathname:u}=li(),c=mm(),f=pm(e,fm(l,i.v7_relativeSplatPath),u,s==="path"),m=JSON.stringify(f);return N.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:s}),[c,m,s,n,r]),null}function Bb(t){return Sb(t.context)}function Mt(t){Le(!1)}function zb(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Gr.Pop,navigator:i,static:o=!1,future:l}=t;To()&&Le(!1);let u=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:i,static:o,future:Za({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=Eo(r));let{pathname:f="/",search:m="",hash:g="",state:A=null,key:P="default"}=r,R=N.useMemo(()=>{let L=lo(f,u);return L==null?null:{location:{pathname:L,search:m,hash:g,state:A,key:P},navigationType:s}},[u,f,m,g,A,P,s]);return R==null?null:N.createElement(wr.Provider,{value:c},N.createElement(Zc.Provider,{children:n,value:R}))}function $b(t){let{children:e,location:n}=t;return Ab(zf(e),n)}new Promise(()=>{});function zf(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,s)=>{if(!N.isValidElement(r))return;let i=[...e,s];if(r.type===N.Fragment){n.push.apply(n,zf(r.props.children,i));return}r.type!==Mt&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=zf(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fc(){return fc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fc.apply(this,arguments)}function j0(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Wb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Hb(t,e){return t.button===0&&(!e||e==="_self")&&!Wb(t)}const qb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Kb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Gb="6";try{window.__reactRouterVersion=Gb}catch{}const Qb=N.createContext({isTransitioning:!1}),Yb="startTransition",hv=jS[Yb];function Jb(t){let{basename:e,children:n,future:r,window:s}=t,i=N.useRef();i.current==null&&(i.current=YA({window:s,v5Compat:!0}));let o=i.current,[l,u]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=N.useCallback(m=>{c&&hv?hv(()=>u(m)):u(m)},[u,c]);return N.useLayoutEffect(()=>o.listen(f),[o,f]),N.useEffect(()=>Ub(r),[r]),N.createElement(zb,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Xb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uo=N.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:m}=e,g=j0(e,qb),{basename:A}=N.useContext(wr),P,R=!1;if(typeof c=="string"&&Zb.test(c)&&(P=c,Xb))try{let k=new URL(window.location.href),V=c.startsWith("//")?new URL(k.protocol+c):new URL(c),j=lo(V.pathname,A);V.origin===k.origin&&j!=null?c=j+V.search+V.hash:R=!0}catch{}let L=Tb(c,{relative:s}),x=tP(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:m});function w(k){r&&r(k),k.defaultPrevented||x(k)}return N.createElement("a",fc({},g,{href:P||L,onClick:R||i?r:w,ref:n,target:u}))}),gh=N.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:c,children:f}=e,m=j0(e,Kb),g=ed(u,{relative:m.relative}),A=li(),P=N.useContext(N0),{navigator:R,basename:L}=N.useContext(wr),x=P!=null&&nP(g)&&c===!0,w=R.encodeLocation?R.encodeLocation(g).pathname:g.pathname,k=A.pathname,V=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;s||(k=k.toLowerCase(),V=V?V.toLowerCase():null,w=w.toLowerCase()),V&&L&&(V=lo(V,L)||V);const j=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let B=k===w||!o&&k.startsWith(w)&&k.charAt(j)==="/",_=V!=null&&(V===w||!o&&V.startsWith(w)&&V.charAt(w.length)==="/"),y={isActive:B,isPending:_,isTransitioning:x},E=B?r:void 0,S;typeof i=="function"?S=i(y):S=[i,B?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let b=typeof l=="function"?l(y):l;return N.createElement(uo,fc({},m,{"aria-current":E,className:S,ref:n,style:b,to:u,viewTransition:c}),typeof f=="function"?f(y):f)});var $f;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($f||($f={}));var fv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(fv||(fv={}));function eP(t){let e=N.useContext(Xc);return e||Le(!1),e}function tP(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=mm(),c=li(),f=ed(t,{relative:o});return N.useCallback(m=>{if(Hb(m,n)){m.preventDefault();let g=r!==void 0?r:dc(c)===dc(f);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[c,u,f,r,s,n,t,i,o,l])}function nP(t,e){e===void 0&&(e={});let n=N.useContext(Qb);n==null&&Le(!1);let{basename:r}=eP($f.useViewTransitionState),s=ed(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=lo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=lo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Bf(s.pathname,o)!=null||Bf(s.pathname,i)!=null}const pv=["/InaaReLogos.png","/InaareLogos.png","/inaare-logo.png"],rP=({className:t="h-14 w-16"})=>{const[e,n]=N.useState(0),[r,s]=N.useState(!1),i=()=>{if(e<pv.length-1){n(o=>o+1);return}s(!0)};return r?d.jsxs("div",{className:`gold-ring relative flex shrink-0 items-center justify-center rounded-[12px] bg-ivory/90 p-2 ${t}`,children:[d.jsx("div",{className:"absolute left-1/2 top-1 h-6 w-7 -translate-x-1/2 bg-black [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx("div",{className:"absolute bottom-1 left-1 h-6 w-7 bg-pink [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx("div",{className:"absolute bottom-1 right-1 h-6 w-7 bg-gold [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"})]}):d.jsx("div",{className:`gold-ring inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-ivory/95 p-1 ${t}`,children:d.jsx("img",{src:pv[e],alt:"Inaare Consulting Group logo",className:"h-full w-full object-contain",width:"80",height:"56",loading:"lazy",decoding:"async",onError:i})})},Wf=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Services",path:"/services"},{name:"Programs",path:"/programs"},{name:"Publications",path:"/publications"},{name:"Booking",path:"/booking"},{name:"Contact",path:"/contact"}],F0=[{title:"Coaching and Mentorship",description:"Develop resilient leaders through high-trust coaching that sharpens decision quality, influence, and execution discipline."},{title:"Leadership Development",description:"Build leadership pipelines and capability systems that sustain performance, accountability, and long-term growth."},{title:"Governance Advisory",description:"Strengthen boards and leadership teams with governance frameworks that protect value and improve strategic oversight."},{title:"Strategy Design & Execution",description:"Translate vision into practical priorities, operating models, and measurable milestones that drive enterprise impact."},{title:"Effective Supply Chain",description:"Optimize supply chain performance with resilient systems, cost discipline, and governance that secures value at scale."}],sP=["Coaching and mentorship","Governance - Character in Leadership","Youth and marriage","Gender Equity","Family Leadership","Growing Cross Generational Businesses"],iP=[{id:"character-in-leadership",title:"The Place of Character in Leadership",description:"How values, trust, and disciplined accountability shape resilient institutions and long-term performance.",category:"Leadership & Governance",date:"2026-02-14",content:`Character is not a soft leadership attribute; it is operational infrastructure. In moments of uncertainty, teams do not rely on charisma alone. They rely on consistency, fairness, and moral clarity from leaders who can align difficult decisions with enduring principles.

At Inaare Consulting Group, we have seen that organizations with character-led leadership maintain stronger execution rhythms over time. They make fewer reactive decisions, communicate with greater transparency, and build cultures where accountability is viewed as stewardship rather than control.

When character is institutionalized through governance routines, performance conversations, and role modeling, it compounds. Trust improves decision speed, decision speed improves agility, and agility protects value in volatile markets.`},{id:"cross-generational-businesses",title:"Cross Generational Businesses",description:"Practical frameworks for preserving continuity while transitioning ownership, authority, and culture across generations.",category:"Enterprise Continuity",date:"2026-01-22",content:`Cross-generational businesses succeed when leadership succession is treated as a strategy, not an event. Too often, transitions focus only on legal ownership while leaving operating culture and decision rights undefined.

Sustainable continuity requires four foundations: shared purpose, governance clarity, capability transfer, and conflict protocols. Families and founders that formalize these early are better positioned to protect enterprise momentum through change.

A transition plan should answer three questions with precision: who decides, how decisions are reviewed, and what values are non-negotiable. These systems prevent ambiguity and ensure each generation can lead with confidence rather than inheritance pressure.`},{id:"tigers-eye-and-becoming",title:"The Tiger’s Eye and Becoming",description:"A reflective essay on leadership identity, discernment, and the discipline required to evolve with purpose.",category:"Executive Reflection",date:"2025-12-05",content:`Becoming is rarely dramatic in real time. It is built through repeated choices to hold vision under pressure, to choose principle over applause, and to remain teachable even when authority is established.

The tiger’s eye represents focused perception: the capacity to identify what matters, what distracts, and what must be protected. Leaders who cultivate this clarity create institutions that are not only productive, but meaningful.

Transformation is both personal and systemic. As leaders evolve, they must redesign the systems around them so their growth translates into collective progress. Without that translation, insight remains private and impact remains limited.`}],oP=["Boards & Executive Leadership","Growing Enterprises","Family-Owned Businesses","Public & Private Sector Leaders"],aP=["Strong governance frameworks","Scalable and resilient organizations","Cross-generational wealth strategies","High-integrity leadership systems"],lP=[{quote:"Inaare brought practical governance discipline to our board and helped us align decision-making with long-term value.",attribution:"Board Member, Regional Financial Services Group"},{quote:"Their advisory support transformed our leadership cadence and improved execution clarity across business units.",attribution:"Executive Director, Growth-Stage Enterprise"},{quote:"The blend of strategy, leadership coaching, and accountability systems delivered measurable institutional confidence.",attribution:"Senior Executive, Public Sector Institution"}],Fr={name:"CPA Elizabeth Kyengo, CPAK, MBA, AMP",summary:"CPA Elizabeth Kyengo is a transformational advisor with over 25 years of executive experience guiding boards, institutions, and senior leadership teams toward enduring value. Her work integrates governance excellence, strategic supply chain expertise, and board-level advisory rigor to build resilient, high-performing organizations.",certifications:["CPAK","MBA","AMP"],highlights:["25+ years in executive leadership, advisory, and institutional transformation","Board-level governance, risk oversight, and accountability expertise","Deep practical mastery in effective supply chain and value-chain optimization","Working with leaders and organizations across Africa and globally","A professional and inspirational approach rooted in integrity, character, and impact"],quote:"Generational greatness is built when character, capability, and systems are aligned for service, value, and legacy."},uP=()=>{const[t,e]=N.useState(!1),n=({isActive:r})=>`relative text-[13px] uppercase tracking-[0.13em] transition-colors duration-300 ${r?"text-gold":"text-ivory/90 hover:text-gold"}`;return d.jsxs("header",{className:"sticky top-0 z-50 border-b border-gold/15 bg-ink/90 backdrop-blur-md",children:[d.jsxs("nav",{className:"mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:px-10",children:[d.jsxs(gh,{to:"/",className:"flex items-center gap-3",onClick:()=>e(!1),children:[d.jsx(rP,{className:"h-14 w-16 md:h-16 md:w-20"}),d.jsxs("div",{children:[d.jsx("span",{className:"block font-serif text-2xl font-semibold tracking-wide text-ivory",children:"InaaRe Consulting Group"}),d.jsx("span",{className:"hidden text-[10px] uppercase tracking-[0.35em] text-muted md:block",children:"Reshaping Perspectives, Restoring Values"})]})]}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/40 px-4 py-2 text-sm text-ivory md:hidden",onClick:()=>e(r=>!r),"aria-label":"Toggle navigation",children:"Menu"}),d.jsx("ul",{className:"hidden items-center gap-6 md:flex",children:Wf.map(r=>d.jsx("li",{children:d.jsx(gh,{to:r.path,className:n,children:r.name})},r.name))})]}),t&&d.jsx("ul",{className:"space-y-2 border-t border-gold/15 px-6 py-4 md:hidden",children:Wf.map(r=>d.jsx("li",{children:d.jsx(gh,{to:r.path,className:({isActive:s})=>`block rounded-md px-3 py-2 text-sm transition-colors duration-300 ${s?"bg-gold/15 text-gold":"text-ivory/90 hover:bg-gold/10 hover:text-gold"}`,onClick:()=>e(!1),children:r.name})},r.name))})]})},cP=()=>d.jsxs("footer",{className:"border-t border-gold/15",children:[d.jsxs("div",{className:"section-shell grid gap-10 py-12 text-sm text-muted md:grid-cols-[1.3fr_1fr_1fr]",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"InaaRe Consulting Group"}),d.jsx("p",{className:"text-measure mt-4",children:"Trusted advisory for boards and executive leaders seeking stronger governance, resilient institutions, and sustainable strategic outcomes."})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-gold",children:"Navigation"}),d.jsx("ul",{className:"mt-4 space-y-2",children:Wf.map(t=>d.jsx("li",{children:d.jsx(uo,{to:t.path,className:"transition-colors hover:text-gold",children:t.name})},t.name))})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-gold",children:"Contact"}),d.jsxs("p",{className:"mt-4 leading-relaxed",children:["Email: ndaizeek@gmail.com",d.jsx("br",{}),"Phone: +254 721 389696"]}),d.jsx("p",{className:"mt-4 text-xs uppercase tracking-[0.14em]",children:"Strategic advisory excellence."})]})]}),d.jsxs("div",{className:"border-t border-gold/10 px-6 py-4 text-center text-xs text-muted md:px-10",children:["© ",new Date().getFullYear()," InaaRe Consulting Group. All rights reserved."]})]}),dP=()=>{const{pathname:t}=li();return N.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t]),null},hP=()=>d.jsxs("div",{className:"min-h-screen bg-ink text-ivory",children:[d.jsx(dP,{}),d.jsx(uP,{}),d.jsx("main",{children:d.jsx(Bb,{})}),d.jsx(cP,{})]}),fP=()=>{};var mv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},B0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(g=64)),r.push(n[f],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new mP;const g=i<<2|l>>4;if(r.push(g),c!==64){const A=l<<4&240|c>>2;if(r.push(A),m!==64){const P=c<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gP=function(t){const e=U0(t);return B0.encodeByteArray(e,!0)},pc=function(t){return gP(t).replace(/\./g,"")},z0=function(t){try{return B0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=()=>yP().__FIREBASE_DEFAULTS__,_P=()=>{if(typeof process>"u"||typeof mv>"u")return;const t=mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z0(t[1]);return e&&JSON.parse(e)},td=()=>{try{return fP()||vP()||_P()||wP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$0=t=>{var e,n;return(n=(e=td())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},W0=t=>{const e=$0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},H0=()=>{var t;return(t=td())==null?void 0:t.config},q0=t=>{var e;return(e=td())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pc(JSON.stringify(n)),pc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function xP(){var e;const t=(e=td())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kP(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AP(){return!xP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nd(){try{return typeof indexedDB=="object"}catch{return!1}}function rd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function ym(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bP,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?PP(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new gn(s,l,r)}}function PP(t,e){return t.replace(CP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const CP=/\{\$([^}]+)}/g;function RP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gv(i)&&gv(o)){if(!fs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NP(t,e){const n=new DP(t,e);return n.subscribe.bind(n)}class DP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yh),s.error===void 0&&(s.error=yh),s.complete===void 0&&(s.complete=yh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=1e3,VP=2,MP=4*60*60*1e3,jP=.5;function yv(t,e=LP,n=VP){const r=e*Math.pow(n,t),s=Math.round(jP*r*(Math.random()-.5)*2);return Math.min(MP,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vm(t){return(await fetch(t,{credentials:"include"})).ok}class Ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BP(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UP(t){return t===Ms?void 0:t}function BP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const $P={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},WP=ae.INFO,HP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},qP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=WP,this._logHandler=qP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$P[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const KP=(t,e)=>e.some(n=>t instanceof n);let vv,_v;function GP(){return vv||(vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QP(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const G0=new WeakMap,Hf=new WeakMap,Q0=new WeakMap,vh=new WeakMap,_m=new WeakMap;function YP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&G0.set(n,t)}).catch(()=>{}),_m.set(e,t),e}function JP(t){if(Hf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hf.set(t,e)}let qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XP(t){qf=t(qf)}function ZP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_h(this),e,...n);return Q0.set(r,e.sort?e.sort():[e]),ur(r)}:QP().includes(t)?function(...e){return t.apply(_h(this),e),ur(G0.get(this))}:function(...e){return ur(t.apply(_h(this),e))}}function eC(t){return typeof t=="function"?ZP(t):(t instanceof IDBTransaction&&JP(t),KP(t,GP())?new Proxy(t,qf):t)}function ur(t){if(t instanceof IDBRequest)return YP(t);if(vh.has(t))return vh.get(t);const e=eC(t);return e!==t&&(vh.set(t,e),_m.set(e,t)),e}const _h=t=>_m.get(t);function id(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function wh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ur(n).then(()=>{})}const tC=["get","getKey","getAll","getAllKeys","count"],nC=["put","add","delete","clear"],Eh=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eh.get(e))return Eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tC.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Eh.set(e,i),i}XP(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kf="@firebase/app",Ev="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new sd("@firebase/app"),iC="@firebase/app-compat",oC="@firebase/analytics-compat",aC="@firebase/analytics",lC="@firebase/app-check-compat",uC="@firebase/app-check",cC="@firebase/auth",dC="@firebase/auth-compat",hC="@firebase/database",fC="@firebase/data-connect",pC="@firebase/database-compat",mC="@firebase/functions",gC="@firebase/functions-compat",yC="@firebase/installations",vC="@firebase/installations-compat",_C="@firebase/messaging",wC="@firebase/messaging-compat",EC="@firebase/performance",TC="@firebase/performance-compat",xC="@firebase/remote-config",IC="@firebase/remote-config-compat",SC="@firebase/storage",kC="@firebase/storage-compat",AC="@firebase/firestore",bC="@firebase/ai",PC="@firebase/firestore-compat",CC="firebase",RC="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="[DEFAULT]",NC={[Kf]:"fire-core",[iC]:"fire-core-compat",[aC]:"fire-analytics",[oC]:"fire-analytics-compat",[uC]:"fire-app-check",[lC]:"fire-app-check-compat",[cC]:"fire-auth",[dC]:"fire-auth-compat",[hC]:"fire-rtdb",[fC]:"fire-data-connect",[pC]:"fire-rtdb-compat",[mC]:"fire-fn",[gC]:"fire-fn-compat",[yC]:"fire-iid",[vC]:"fire-iid-compat",[_C]:"fire-fcm",[wC]:"fire-fcm-compat",[EC]:"fire-perf",[TC]:"fire-perf-compat",[xC]:"fire-rc",[IC]:"fire-rc-compat",[SC]:"fire-gcs",[kC]:"fire-gcs-compat",[AC]:"fire-fst",[PC]:"fire-fst-compat",[bC]:"fire-vertex","fire-js":"fire-js",[CC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map,DC=new Map,Qf=new Map;function Tv(t,e){try{t.container.addComponent(e)}catch(n){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tn(t){const e=t.name;if(Qf.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,t);for(const n of mc.values())Tv(n,t);for(const n of DC.values())Tv(n,t);return!0}function Er(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},os=new xs("app","Firebase",OC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=RC;function Y0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Gf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw os.create("bad-app-name",{appName:String(s)});if(n||(n=H0()),!n)throw os.create("no-options");const i=mc.get(s);if(i){if(fs(n,i.options)&&fs(r,i.config))return i;throw os.create("duplicate-app",{appName:s})}const o=new zP(s);for(const u of Qf.values())o.addComponent(u);const l=new LC(n,r,o);return mc.set(s,l),l}function vl(t=Gf){const e=mc.get(t);if(!e&&t===Gf&&H0())return Y0();if(!e)throw os.create("no-app",{appName:t});return e}function xt(t,e,n){let r=NC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(o.join(" "));return}tn(new Ht(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="firebase-heartbeat-database",MC=1,el="firebase-heartbeat-store";let Th=null;function J0(){return Th||(Th=id(VC,MC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(el)}catch(n){console.warn(n)}}}}).catch(t=>{throw os.create("idb-open",{originalErrorMessage:t.message})})),Th}async function jC(t){try{const n=(await J0()).transaction(el),r=await n.objectStore(el).get(X0(t));return await n.done,r}catch(e){if(e instanceof gn)mr.warn(e.message);else{const n=os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(n.message)}}}async function xv(t,e){try{const r=(await J0()).transaction(el,"readwrite");await r.objectStore(el).put(e,X0(t)),await r.done}catch(n){if(n instanceof gn)mr.warn(n.message);else{const r=os.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function X0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=1024,UC=30;class BC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $C(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Iv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>UC){const o=WC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iv(),{heartbeatsToSend:r,unsentEntries:s}=zC(this._heartbeatsCache.heartbeats),i=pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mr.warn(n),""}}}function Iv(){return new Date().toISOString().substring(0,10)}function zC(t,e=FC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $C{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nd()?rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}function WC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){tn(new Ht("platform-logger",e=>new rC(e),"PRIVATE")),tn(new Ht("heartbeat",e=>new BC(e),"PRIVATE")),xt(Kf,Ev,t),xt(Kf,Ev,"esm2020"),xt("fire-js","")}HC("");function Z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qC=Z0,eT=new xs("auth","Firebase",Z0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new sd("@firebase/auth");function KC(t,...e){gc.logLevel<=ae.WARN&&gc.warn(`Auth (${ci}): ${t}`,...e)}function Ru(t,...e){gc.logLevel<=ae.ERROR&&gc.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw wm(t,...e)}function Hn(t,...e){return wm(t,...e)}function tT(t,e,n){const r={...qC(),[e]:n};return new xs("auth","Firebase",r).create(e,{appName:t.name})}function as(t){return tT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eT.create(t,...e)}function X(t,e,...n){if(!t)throw wm(e,...n)}function or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ru(e),new Error(e)}function gr(t,e){t||or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function GC(){return kv()==="http:"||kv()==="https:"}function kv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GC()||gm()||"connection"in navigator)?navigator.onLine:!0}function YC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.shortDelay=e,this.longDelay=n,gr(n>e,"Short delay should be less than long delay!"),this.isMobile=TP()||SP()}get(){return QC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e){gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZC=new _l(3e4,6e4);function di(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Tr(t,e,n,r,s={}){return rT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=yl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return IP()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ui(t.emulatorConfig.host)&&(c.credentials="include"),nT.fetch()(await sT(t,t.config.apiHost,n,l),c)})}async function rT(t,e,n){t._canInitEmulator=!1;const r={...JC,...e};try{const s=new tR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw au(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tT(t,f,c);Pn(t,f)}}catch(s){if(s instanceof gn)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function od(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function sT(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Em(t.config,s):`${t.config.apiScheme}://${s}`;return XC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function eR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),ZC.get())})}}function au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Hn(t,e,r);return s.customData._tokenResponse=n,s}function Av(t){return t!==void 0&&t.enterprise!==void 0}class nR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rR(t,e){return Tr(t,"GET","/v2/recaptchaConfig",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function yc(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iR(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),s=Tm(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ba(xh(s.auth_time)),issuedAtTime:ba(xh(s.iat)),expirationTime:ba(xh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xh(t){return Number(t)*1e3}function Tm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const s=z0(n);return s?JSON.parse(s):(Ru("Failed to decode base64 JWT payload"),null)}catch(s){return Ru("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bv(t){const e=Tm(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&oR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await co(t,yc(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?iT(s.providerUserInfo):[],o=uR(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Jf(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function lR(t){const e=Ee(t);await vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function iT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e){const n=await rT(t,{},async()=>{const r=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await sT(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ui(t.emulatorConfig.host)&&(u.credentials="include"),nT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dR(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=bv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gi;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new aR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iR(this,e)}reload(){return lR(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await co(this,sR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:A,providerData:P,stsTokenManager:R}=n;X(m&&R,e,"internal-error");const L=Gi.fromJSON(this.name,R);X(typeof m=="string",e,"internal-error"),Or(r,e.name),Or(s,e.name),X(typeof g=="boolean",e,"internal-error"),X(typeof A=="boolean",e,"internal-error"),Or(i,e.name),Or(o,e.name),Or(l,e.name),Or(u,e.name),Or(c,e.name),Or(f,e.name);const x=new In({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:L,createdAt:c,lastLoginAt:f});return P&&Array.isArray(P)&&(x.providerData=P.map(w=>({...w}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gi;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?iT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Gi;l.updateFromIdToken(r);const u=new In({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;function ar(t){gr(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oT.type="NONE";const Cv=oT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e,n){return`firebase:${t}:${e}:${n}`}class Qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yc(this.auth,{idToken:e}).catch(()=>{});return n?In._fromGetAccountInfoResponse(this.auth,n,e):null}return In._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qi(ar(Cv),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||ar(Cv);const o=Nu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await yc(e,{idToken:f}).catch(()=>{});if(!g)break;m=await In._fromGetAccountInfoResponse(e,g,f)}else m=In._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Qi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Qi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hT(e))return"Blackberry";if(fT(e))return"Webos";if(lT(e))return"Safari";if((e.includes("chrome/")||uT(e))&&!e.includes("edge/"))return"Chrome";if(dT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aT(t=St()){return/firefox\//i.test(t)}function lT(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uT(t=St()){return/crios\//i.test(t)}function cT(t=St()){return/iemobile/i.test(t)}function dT(t=St()){return/android/i.test(t)}function hT(t=St()){return/blackberry/i.test(t)}function fT(t=St()){return/webos/i.test(t)}function xm(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hR(t=St()){var e;return xm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function fR(){return kP()&&document.documentMode===10}function pT(t=St()){return xm(t)||dT(t)||fT(t)||hT(t)||/windows phone/i.test(t)||cT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t,e=[]){let n;switch(t){case"Browser":n=Rv(St());break;case"Worker":n=`${Rv(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",di(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=6;class yR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nv(this),this.idTokenSubscription=new Nv(this),this.beforeStateQueue=new pR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yc(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(as(this));const n=e?Ee(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mR(this),n=new yR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&KC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function xo(t){return Ee(t)}class Nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=NP(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _R(t){ad=t}function gT(t){return ad.loadJS(t)}function wR(){return ad.recaptchaEnterpriseScript}function ER(){return ad.gapiScript}function TR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class xR{constructor(){this.enterprise=new IR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class IR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const SR="recaptcha-enterprise",yT="NO_RECAPTCHA";class kR{constructor(e){this.type=SR,this.auth=xo(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{rR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new nR(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Av(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(yT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Av(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wR();u.length!==0&&(u+=l),gT(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Dv(t,e,n,r=!1,s=!1){const i=new kR(t);let o;if(s)o=yT;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ov(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Dv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Dv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t,e){const n=Er(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fs(i,e??{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function bR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PR(t,e,n){const r=xo(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vT(e),{host:o,port:l}=CR(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(fs(c,r.config.emulator)&&fs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ui(o)?vm(`${i}//${o}${u}`):RR()}function vT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CR(t){const e=vT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lv(o)}}}function Lv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,n){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}async function NR(t,e){return Tr(t,"POST","/v1/accounts:update",e)}async function DR(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){return od(t,"POST","/v1/accounts:signInWithPassword",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e){return od(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}async function VR(t,e){return od(t,"POST","/v1/accounts:signInWithEmailLink",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Im{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new tl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ov(e,n,"signInWithPassword",OR);case"emailLink":return LR(e,{email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ov(e,r,"signUpPassword",DR);case"emailLink":return VR(e,{idToken:n,email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return od(t,"POST","/v1/accounts:signInWithIdp",di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="http://localhost";class Zs extends Im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:MR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FR(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class Sm{constructor(e){const n=fa(pa(e)),r=n.apiKey??null,s=n.oobCode??null,i=jR(n.mode??null);X(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=FR(e);try{return new Sm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.providerId=Io.PROVIDER_ID}static credential(e,n){return tl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sm.parseLink(n);return X(r,"argument-error"),tl._fromEmailAndCode(e,r.code,r.tenantId)}}Io.PROVIDER_ID="password";Io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends _T{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends wl{constructor(){super("facebook.com")}static credential(e){return Zs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends wl{constructor(){super("github.com")}static credential(e){return Zs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends wl{constructor(){super("twitter.com")}static credential(e,n){return Zs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=Vv(r);return new ho({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vv(r);return new ho({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends gn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _c(e,n,r,s)}}function wT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,i,e,r):i})}async function UR(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ho._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(as(r));const s="reauthenticate";try{const i=await co(t,wT(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Tm(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),ho._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(t,e,n=!1){if(un(t.app))return Promise.reject(as(t));const r="signIn",s=await wT(t,r,e),i=await ho._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zR(t,e){return ET(xo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t){const e=xo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function WR(t,e,n){return un(t.app)?Promise.reject(as(t)):zR(Ee(t),Io.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$R(t),r})}function HR(t,e){return qR(Ee(t),null,e)}async function qR(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await co(t,NR(r,i));await t._updateTokensIfNecessary(o,!0)}function KR(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function GR(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function TT(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function QR(t){return Ee(t).signOut()}const wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=1e3,JR=10;class IT extends xT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}IT.type="LOCAL";const XR=IT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST extends xT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ST.type="SESSION";const kT=ST;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ld(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await ZR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ld.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=km("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function tN(t){qn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function nN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function sN(){return AT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="firebaseLocalStorageDb",iN=1,Ec="firebaseLocalStorage",PT="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ud(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function oN(){const t=indexedDB.deleteDatabase(bT);return new El(t).toPromise()}function Xf(){const t=indexedDB.open(bT,iN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:PT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await oN(),e(await Xf()))})})}async function Mv(t,e,n){const r=ud(t,!0).put({[PT]:e,value:n});return new El(r).toPromise()}async function aN(t,e){const n=ud(t,!1).get(e),r=await new El(n).toPromise();return r===void 0?null:r.value}function jv(t,e){const n=ud(t,!0).delete(e);return new El(n).toPromise()}const lN=800,uN=3;class CT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ld._getInstance(sN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await nN(),!this.activeServiceWorker)return;this.sender=new eN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xf();return await Mv(e,wc,"1"),await jv(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ud(s,!1).getAll();return new El(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CT.type="LOCAL";const cN=CT;new _l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t,e){return e?ar(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hN(t){return ET(t.auth,new Am(t),t.bypassAuthState)}function fN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),BR(n,new Am(t),t.bypassAuthState)}async function pN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),UR(n,new Am(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hN;case"linkViaPopup":case"linkViaRedirect":return pN;case"reauthViaPopup":case"reauthViaRedirect":return fN;default:Pn(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new _l(2e3,1e4);class Bi extends RT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=km();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mN.get())};e()}}Bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="pendingRedirect",Du=new Map;class yN extends RT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const r=await vN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vN(t,e){const n=EN(e),r=wN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _N(t,e){Du.set(t._key(),e)}function wN(t){return ar(t._redirectPersistence)}function EN(t){return Nu(gN,t.config.apiKey,t.name)}async function TN(t,e,n=!1){if(un(t.app))return Promise.reject(as(t));const r=xo(t),s=dN(r,e),o=await new yN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=10*60*1e3;class IN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!NT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fv(e))}saveEventToCache(e){this.cachedEventUids.add(Fv(e)),this.lastProcessedEventTime=Date.now()}}function Fv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function NT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bN=/^https?/;async function PN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kN(t);for(const n of e)try{if(CN(n))return}catch{}Pn(t,"unauthorized-domain")}function CN(t){const e=Yf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bN.test(n))return!1;if(AN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=new _l(3e4,6e4);function Uv(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NN(t){return new Promise((e,n)=>{var s,i,o;function r(){Uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uv(),n(Hn(t,"network-request-failed"))},timeout:RN.get()})}if((i=(s=qn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=qn().gapi)!=null&&o.load)r();else{const l=TR("iframefcb");return qn()[l]=()=>{gapi.load?r():n(Hn(t,"network-request-failed"))},gT(`${ER()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ou=null,e})}let Ou=null;function DN(t){return Ou=Ou||NN(t),Ou}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new _l(5e3,15e3),LN="__/auth/iframe",VN="emulator/auth/iframe",MN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Em(e,VN):`https://${t.config.authDomain}/${LN}`,r={apiKey:e.apiKey,appName:t.name,v:ci},s=jN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yl(r).slice(1)}`}async function UN(t){const e=await DN(t),n=qn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:FN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),l=qn().setTimeout(()=>{i(o)},ON.get());function u(){qn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zN=500,$N=600,WN="_blank",HN="http://localhost";class Bv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qN(t,e,n,r=zN,s=$N){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...BN,width:r.toString(),height:s.toString(),top:i,left:o},c=St().toLowerCase();n&&(l=uT(c)?WN:n),aT(c)&&(e=e||HN,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,P])=>`${g}${A}=${P},`,"");if(hR(c)&&l!=="_self")return KN(e||"",l),new Bv(null);const m=window.open(e||"",l,f);X(m,t,"popup-blocked");try{m.focus()}catch{}return new Bv(m)}function KN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="__/auth/handler",QN="emulator/auth/handler",YN=encodeURIComponent("fac");async function zv(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:s};if(e instanceof _T){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof wl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${YN}=${encodeURIComponent(u)}`:"";return`${JN(t)}?${yl(l).slice(1)}${c}`}function JN({config:t}){return t.emulator?Em(t,QN):`https://${t.authDomain}/${GN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="webStorageSupport";class XN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=TN,this._overrideRedirectResult=_N}async _openPopup(e,n,r,s){var o;gr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await zv(e,n,r,Yf(),s);return qN(e,i,km())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zv(e,n,r,Yf(),s);return tN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UN(e),r=new IN(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ih,{type:Ih},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ih];i!==void 0&&n(!!i),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pT()||lT()||xm()}}const ZN=XN;var $v="@firebase/auth",Wv="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n1(t){tn(new Ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mT(t)},c=new vR(r,s,i,u);return bR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tn(new Ht("auth-internal",e=>{const n=xo(e.getProvider("auth").getImmediate());return(r=>new e1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt($v,Wv,t1(t)),xt($v,Wv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=5*60,s1=q0("authIdTokenMaxAge")||r1;let Hv=null;const i1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s1)return;const s=n==null?void 0:n.token;Hv!==s&&(Hv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function o1(t=vl()){const e=Er(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AR(t,{popupRedirectResolver:ZN,persistence:[cN,XR,kT]}),r=q0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=i1(i.toString());GR(n,o,()=>o(n.currentUser)),KR(n,l=>o(l))}}const s=$0("auth");return s&&PR(n,`http://${s}`),n}function a1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}_R({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",a1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n1("Browser");var l1="firebase",u1="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(l1,u1,"app");var qv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,DT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function E(){}E.prototype=y.prototype,_.F=y.prototype,_.prototype=new E,_.prototype.constructor=_,_.D=function(S,b,C){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return y.prototype[b].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,E){E||(E=0);const S=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)S[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;b<16;++b)S[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=_.g[0],E=_.g[1],b=_.g[2];let C=_.g[3],T;T=y+(C^E&(b^C))+S[0]+3614090360&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[2]+606105819&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[3]+3250441966&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(C^E&(b^C))+S[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[6]+2821735955&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[7]+4249261313&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(C^E&(b^C))+S[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[10]+4294925233&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[11]+2304563134&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(C^E&(b^C))+S[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[14]+2792965006&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[15]+1236535329&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(b^C&(E^b))+S[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[11]+643717713&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[0]+3921069994&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^C&(E^b))+S[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[15]+3634488961&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[4]+3889429448&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^C&(E^b))+S[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[3]+4107603335&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[8]+1163531501&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^C&(E^b))+S[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[7]+1735328473&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[12]+2368359562&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(E^b^C)+S[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[11]+1839030562&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[14]+4259657740&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^C)+S[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[7]+4139469664&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[10]+3200236656&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^C)+S[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[3]+3572445317&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[6]+76029189&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^C)+S[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[15]+530742520&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[2]+3299628645&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(b^(E|~C))+S[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[14]+2878612391&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[5]+4237533241&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~C))+S[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[10]+4293915773&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[1]+2240044497&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~C))+S[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[6]+2734768916&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[13]+1309151649&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~C))+S[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[2]+718787259&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+b&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const E=y-this.blockSize,S=this.C;let b=this.h,C=0;for(;C<y;){if(b==0)for(;C<=E;)s(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<y;)if(S[b++]=_.charCodeAt(C++),b==this.blockSize){s(this,S),b=0;break}}else for(;C<y;)if(S[b++]=_[C++],b==this.blockSize){s(this,S),b=0;break}}this.h=b,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var E=_.length-8;E<_.length;++E)_[E]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,E=0;E<4;++E)for(let S=0;S<32;S+=8)_[y++]=this.g[E]>>>S&255;return _};function i(_,y){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=y(_)}function o(_,y){this.h=y;const E=[];let S=!0;for(let b=_.length-1;b>=0;b--){const C=_[b]|0;S&&C==y||(E[b]=C,S=!1)}this.g=E}var l={};function u(_){return-128<=_&&_<128?i(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return m;if(_<0)return L(c(-_));const y=[];let E=1;for(let S=0;_>=E;S++)y[S]=_/E|0,E*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return L(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let S=m;for(let C=0;C<_.length;C+=8){var b=Math.min(8,_.length-C);const T=parseInt(_.substring(C,C+b),y);b<8?(b=c(Math.pow(y,b)),S=S.j(b).add(c(T))):(S=S.j(E),S=S.add(c(T)))}return S}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-L(this).m();let _=0,y=1;for(let E=0;E<this.g.length;E++){const S=this.i(E);_+=(S>=0?S:4294967296+S)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(R(this))return"-"+L(this).toString(_);const y=c(Math.pow(_,6));var E=this;let S="";for(;;){const b=V(E,y).g;E=x(E,b.j(y));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(_);if(E=b,P(E))return C+S;for(;C.length<6;)C="0"+C;S=C+S}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function R(_){return _.h==-1}t.l=function(_){return _=x(this,_),R(_)?-1:P(_)?0:1};function L(_){const y=_.g.length,E=[];for(let S=0;S<y;S++)E[S]=~_.g[S];return new o(E,~_.h).add(g)}t.abs=function(){return R(this)?L(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),E=[];let S=0;for(let b=0;b<=y;b++){let C=S+(this.i(b)&65535)+(_.i(b)&65535),T=(C>>>16)+(this.i(b)>>>16)+(_.i(b)>>>16);S=T>>>16,C&=65535,T&=65535,E[b]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(_,y){return _.add(L(y))}t.j=function(_){if(P(this)||P(_))return m;if(R(this))return R(_)?L(this).j(L(_)):L(L(this).j(_));if(R(_))return L(this.j(L(_)));if(this.l(A)<0&&_.l(A)<0)return c(this.m()*_.m());const y=this.g.length+_.g.length,E=[];for(var S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(let b=0;b<_.g.length;b++){const C=this.i(S)>>>16,T=this.i(S)&65535,me=_.i(b)>>>16,kt=_.i(b)&65535;E[2*S+2*b]+=T*kt,w(E,2*S+2*b),E[2*S+2*b+1]+=C*kt,w(E,2*S+2*b+1),E[2*S+2*b+1]+=T*me,w(E,2*S+2*b+1),E[2*S+2*b+2]+=C*me,w(E,2*S+2*b+2)}for(_=0;_<y;_++)E[_]=E[2*_+1]<<16|E[2*_];for(_=y;_<2*y;_++)E[_]=0;return new o(E,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function k(_,y){this.g=_,this.h=y}function V(_,y){if(P(y))throw Error("division by zero");if(P(_))return new k(m,m);if(R(_))return y=V(L(_),y),new k(L(y.g),L(y.h));if(R(y))return y=V(_,L(y)),new k(L(y.g),y.h);if(_.g.length>30){if(R(_)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,S=y;S.l(_)<=0;)E=j(E),S=j(S);var b=B(E,1),C=B(S,1);for(S=B(S,2),E=B(E,2);!P(S);){var T=C.add(S);T.l(_)<=0&&(b=b.add(E),C=T),S=B(S,1),E=B(E,1)}return y=x(_,b.j(y)),new k(b,y)}for(b=m;_.l(y)>=0;){for(E=Math.max(1,Math.floor(_.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),C=c(E),T=C.j(y);R(T)||T.l(_)>0;)E-=S,C=c(E),T=C.j(y);P(C)&&(C=g),b=b.add(C),_=x(_,T)}return new k(b,_)}t.B=function(_){return V(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)&_.i(S);return new o(E,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)|_.i(S);return new o(E,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)^_.i(S);return new o(E,this.h^_.h)};function j(_){const y=_.g.length+1,E=[];for(let S=0;S<y;S++)E[S]=_.i(S)<<1|_.i(S-1)>>>31;return new o(E,_.h)}function B(_,y){const E=y>>5;y%=32;const S=_.g.length-E,b=[];for(let C=0;C<S;C++)b[C]=y>0?_.i(C+E)>>>y|_.i(C+E+1)<<32-y:_.i(C+E);return new o(b,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,DT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,ls=o}).apply(typeof qv<"u"?qv:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var OT,ma,LT,Lu,Zf,VT,MT,jT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var O=a[v];if(!(O in p))break e;p=p[O]}a=a[a.length-1],v=p[a],h=h(v),h!=v&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&p.push([v,h[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(v,O,M){for(var $=Array(arguments.length-2),re=2;re<arguments.length;re++)$[re-2]=arguments[re];return h.prototype[O].apply(v,$)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const p=Array(h);for(let v=0;v<h;v++)p[v]=a[v];return p}return[]}function P(a,h){for(let v=1;v<arguments.length;v++){const O=arguments[v];var p=typeof O;if(p=p!="object"?p:O?Array.isArray(O)?"array":p:"null",p=="array"||p=="object"&&typeof O.length=="number"){p=a.length||0;const M=O.length||0;a.length=p+M;for(let $=0;$<M;$++)a[p+$]=O[$]}else a.push(O)}}class R{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){o.setTimeout(()=>{throw a},0)}function x(){var a=_;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,p){const v=k.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var k=new R(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let j,B=!1,_=new w,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(E)}};function E(){for(var a;a=x();){try{a.h.call(a.g)}catch(p){L(p)}var h=k;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}B=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function me(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(me,b),me.prototype.init=function(a,h){const p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kt="closure_listenable_"+(Math.random()*1e6|0),At=0;function Zn(a,h,p,v,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=O,this.key=++At,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,p){for(const v in a)h.call(p,a[v],v,a)}function ee(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function ye(a){const h={};for(const p in a)h[p]=a[p];return h}const Pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rn(a,h){let p,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(p in v)a[p]=v[p];for(let M=0;M<Pe.length;M++)p=Pe[M],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function bt(a){this.src=a,this.g={},this.h=0}bt.prototype.add=function(a,h,p,v,O){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const $=We(a,h,v,O);return $>-1?(h=a[$],p||(h.fa=!1)):(h=new Zn(h,this.src,M,!!v,O),h.fa=p,a.push(h)),h};function Nn(a,h){const p=h.type;if(p in a.g){var v=a.g[p],O=Array.prototype.indexOf.call(v,h,void 0),M;(M=O>=0)&&Array.prototype.splice.call(v,O,1),M&&(W(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function We(a,h,p,v){for(let O=0;O<a.length;++O){const M=a[O];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==v)return O}return-1}var Dn="closure_lm_"+(Math.random()*1e6|0),ce={};function sn(a,h,p,v,O){if(Array.isArray(h)){for(let M=0;M<h.length;M++)sn(a,h[M],p,v,O);return null}return p=Oo(p),a&&a[kt]?a.J(h,p,l(v)?!!v.capture:!1,O):xr(a,h,p,!1,v,O)}function xr(a,h,p,v,O,M){if(!h)throw Error("Invalid event type");const $=l(O)?!!O.capture:!!O;let re=No(a);if(re||(a[Dn]=re=new bt(a)),p=re.add(h,p,v,$,M),p.proxy)return p;if(v=Co(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)C||(O=$),O===void 0&&(O=!1),a.addEventListener(h.toString(),v,O);else if(a.attachEvent)a.attachEvent(Ro(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Co(){function a(p){return h.call(a.src,a.listener,p)}const h=bl;return a}function Ir(a,h,p,v,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)Ir(a,h[M],p,v,O);else v=l(v)?!!v.capture:!!v,p=Oo(p),a&&a[kt]?(a=a.i,M=String(h).toString(),M in a.g&&(h=a.g[M],p=We(h,p,v,O),p>-1&&(W(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[M],a.h--)))):a&&(a=No(a))&&(h=a.g[h.toString()],a=-1,h&&(a=We(h,p,v,O)),(p=a>-1?h[a]:null)&&ks(p))}function ks(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[kt])Nn(h.i,a);else{var p=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(p,v,a.capture):h.detachEvent?h.detachEvent(Ro(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=No(h))?(Nn(p,a),p.h==0&&(p.src=null,h[Dn]=null)):W(a)}}}function Ro(a){return a in ce?ce[a]:ce[a]="on"+a}function bl(a,h){if(a.da)a=!0;else{h=new me(h,this);const p=a.listener,v=a.ha||a.src;a.fa&&ks(a),a=p.call(v,h)}return a}function No(a){return a=a[Dn],a instanceof bt?a:null}var Do="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oo(a){return typeof a=="function"?a:(a[Do]||(a[Do]=function(h){return a.handleEvent(h)}),a[Do])}function Ye(){S.call(this),this.i=new bt(this),this.M=this,this.G=null}m(Ye,S),Ye.prototype[kt]=!0,Ye.prototype.removeEventListener=function(a,h,p,v){Ir(this,a,h,p,v)};function lt(a,h){var p,v=a.G;if(v)for(p=[];v;v=v.G)p.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var O=h;h=new b(v,a),Rn(h,O)}O=!0;let M,$;if(p)for($=p.length-1;$>=0;$--)M=h.g=p[$],O=mi(M,v,!0,h)&&O;if(M=h.g=a,O=mi(M,v,!0,h)&&O,O=mi(M,v,!1,h)&&O,p)for($=0;$<p.length;$++)M=h.g=p[$],O=mi(M,v,!1,h)&&O}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let v=0;v<p.length;v++)W(p[v]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,p,v){return this.i.add(String(a),h,!1,p,v)},Ye.prototype.K=function(a,h,p,v){return this.i.add(String(a),h,!0,p,v)};function mi(a,h,p,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let M=0;M<h.length;++M){const $=h[M];if($&&!$.da&&$.capture==p){const re=$.listener,Je=$.ha||$.src;$.fa&&Nn(a.i,$),O=re.call(Je,v)!==!1&&O}}return O&&!v.defaultPrevented}function Pl(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Lo(a){a.g=Pl(()=>{a.g=null,a.i&&(a.i=!1,Lo(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class gi extends S{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(a){S.call(this),this.h=a,this.g={}}m(As,S);var He=[];function ut(a){Y(a.g,function(h,p){this.g.hasOwnProperty(p)&&ks(h)},a),a.g={}}As.prototype.N=function(){As.Z.N.call(this),ut(this)},As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yi=o.JSON.stringify,yn=o.JSON.parse,Vo=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Mo(){}function ie(){}var Sr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jo(){b.call(this,"d")}m(jo,b);function Fo(){b.call(this,"c")}m(Fo,b);var On={},vi=null;function _i(){return vi=vi||new Ye}On.Ia="serverreachability";function wi(a){b.call(this,On.Ia,a)}m(wi,b);function bs(a){const h=_i();lt(h,new wi(h))}On.STAT_EVENT="statevent";function Cl(a,h){b.call(this,On.STAT_EVENT,a),this.stat=h}m(Cl,b);function ct(a){const h=_i();lt(h,new Cl(h,a))}On.Ja="timingevent";function Uo(a,h){b.call(this,On.Ja,a),this.size=h}m(Uo,b);function Ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Cs(){this.g=!0}Cs.prototype.ua=function(){this.g=!1};function Cd(a,h,p,v,O,M){a.info(function(){if(a.g)if(M){var $="",re=M.split("&");for(let _e=0;_e<re.length;_e++){var Je=re[_e].split("=");if(Je.length>1){const st=Je[0];Je=Je[1];const Mn=st.split("_");$=Mn.length>=2&&Mn[1]=="type"?$+(st+"="+Je+"&"):$+(st+"=redacted&")}}}else $=null;else $=M;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+h+`
`+p+`
`+$})}function Rd(a,h,p,v,O,M,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+h+`
`+p+`
`+M+" "+$})}function kr(a,h,p,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Dd(a,p)+(v?" "+v:"")})}function Nd(a,h){a.info(function(){return"TIMEOUT: "+h})}Cs.prototype.info=function(){};function Dd(a,h){if(!a.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var p=M[a];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var O=v[0];if(O!="noop"&&O!="stop"&&O!="close")for(let $=1;$<v.length;$++)v[$]=""}}}}return yi(M)}catch{return h}}var Ei={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Rl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Nl;function Ar(){}m(Ar,Mo),Ar.prototype.g=function(){return new XMLHttpRequest},Nl=new Ar;function Rs(a){return encodeURIComponent(String(a))}function Od(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Ln(a,h,p,v){this.j=a,this.i=h,this.l=p,this.S=v||1,this.V=new As(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dl}function Dl(){this.i=null,this.g="",this.h=!1}var Ol={},Bo={};function zo(a,h,p){a.M=1,a.A=Vl(Vn(h)),a.u=p,a.R=!0,Ll(a,null)}function Ll(a,h){a.F=Date.now(),G(a),a.B=Vn(a.A);var p=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Pg(p.i,"t",v),a.C=0,p=a.j.L,a.h=new Dl,a.g=Kg(a.j,p?h:null,!a.u),a.P>0&&(a.O=new gi(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,v=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(He[0]=O.toString()),O=He);for(let M=0;M<O.length;M++){const $=sn(p,O[M],v||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),bs(),Cd(a.i,a.v,a.B,a.l,a.S,a.u)}Ln.prototype.ba=function(a){a=a.target;const h=this.O;h&&Cr(a)==3?h.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const re=Cr(this.g),Je=this.g.ya(),_e=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Vg(this.g)))){this.K||re!=4||Je==7||(Je==8||_e<=0?bs(3):bs(2)),fe(this);var h=this.g.ca();this.X=h;var p=Ld(this);if(this.o=h==200,Rd(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,O=this.g;if((v=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var M=v;break t}}M=null}if(a=M)kr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rt(this,a);else{this.o=!1,this.m=3,ct(12),Re(this),Te(this);break e}}if(this.R){a=!0;let st;for(;!this.K&&this.C<p.length;)if(st=D(this,p),st==Bo){re==4&&(this.m=4,ct(14),a=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(st==Ol){this.m=4,ct(15),kr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else kr(this.i,this.l,st,null),rt(this,st);if(I(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||p.length!=0||this.h.h||(this.m=1,ct(16),a=!1),this.o=this.o&&a,!a)kr(this.i,this.l,p,"[Invalid Chunked Response]"),Re(this),Te(this);else if(p.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Bd($),$.P=!0,ct(11))}}else kr(this.i,this.l,p,null),rt(this,p);re==4&&Re(this),this.o&&!this.K&&(re==4?$g(this.j,this):(this.o=!1,G(this)))}else _S(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),Re(this),Te(this)}}}catch{}finally{}};function Ld(a){if(!I(a))return a.g.la();const h=Vg(a.g);if(h==="")return"";let p="";const v=h.length,O=Cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Re(a),Te(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<v;M++)a.h.h=!0,p+=a.h.i.decode(h[M],{stream:!(O&&M==v-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function I(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function D(a,h){var p=a.C,v=h.indexOf(`
`,p);return v==-1?Bo:(p=Number(h.substring(p,v)),isNaN(p)?Ol:(v+=1,v+p>h.length?Bo:(h=h.slice(v,v+p),a.C=v+p,h)))}Ln.prototype.cancel=function(){this.K=!0,Re(this)};function G(a){a.T=Date.now()+a.H,J(a,a.H)}function J(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ps(c(a.aa,a),h)}function fe(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Ln.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Nd(this.i,this.B),this.M!=2&&(bs(),ct(17)),Re(this),this.m=2,Te(this)):J(this,this.T-a)};function Te(a){a.j.I==0||a.K||$g(a.j,a)}function Re(a){fe(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ut(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function rt(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||qt(p.h,a))){if(!a.L&&qt(p.h,a)&&p.I==3){try{var v=p.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Bl(p),Fl(p);else break e;Ud(p),ct(18)}}else p.xa=O[1],0<p.xa-p.K&&O[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ps(c(p.Va,p),6e3));se(p.h)<=1&&p.ta&&(p.ta=void 0)}else Ds(p,11)}else if((a.L||p.g==a)&&Bl(p),!T(h))for(O=p.Ba.g.parse(h),h=0;h<O.length;h++){let _e=O[h];const st=_e[0];if(!(st<=p.K))if(p.K=st,_e=_e[1],p.I==2)if(_e[0]=="c"){p.M=_e[1],p.ba=_e[2];const Mn=_e[3];Mn!=null&&(p.ka=Mn,p.j.info("VER="+p.ka));const Os=_e[4];Os!=null&&(p.za=Os,p.j.info("SVER="+p.za));const Rr=_e[5];Rr!=null&&typeof Rr=="number"&&Rr>0&&(v=1.5*Rr,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Nr=a.g;if(Nr){const $l=Nr.g?Nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($l){var M=v.h;M.g||$l.indexOf("spdy")==-1&&$l.indexOf("quic")==-1&&$l.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(on(M,M.h),M.h=null))}if(v.G){const zd=Nr.g?Nr.g.getResponseHeader("X-HTTP-Session-Id"):null;zd&&(v.wa=zd,xe(v.J,v.G,zd))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var $=a;if(v.na=qg(v,v.L?v.ba:null,v.W),$.L){_n(v.h,$);var re=$,Je=v.O;Je&&(re.H=Je),re.D&&(fe(re),G(re)),v.g=$}else Bg(v);p.i.length>0&&Ul(p)}else _e[0]!="stop"&&_e[0]!="close"||Ds(p,7);else p.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Ds(p,7):Fd(p):_e[0]!="noop"&&p.l&&p.l.qa(_e),p.A=0)}}bs(4)}catch{}}var Vt=class{constructor(a,h){this.g=a,this.map=h}};function vn(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $o(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function se(a){return a.h?1:a.g?a.g.size:0}function qt(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function on(a,h){a.g?a.g.add(h):a.h=h}function _n(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}vn.prototype.cancel=function(){if(this.i=xg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return A(a.i)}var Ig=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aS(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const v=a[p].indexOf("=");let O,M=null;v>=0?(O=a[p].substring(0,v),M=a[p].substring(v+1)):O=a[p],h(O,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function br(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof br?(this.l=a.l,Wo(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.u),this.h=a.h,Vd(this,Cg(a.i)),this.m=a.m):a&&(h=String(a).match(Ig))?(this.l=!1,Wo(this,h[1]||"",!0),this.o=qo(h[2]||""),this.g=qo(h[3]||"",!0),Ho(this,h[4]),this.h=qo(h[5]||"",!0),Vd(this,h[6]||"",!0),this.m=qo(h[7]||"")):(this.l=!1,this.i=new Go(null,this.l))}br.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ko(h,Sg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ko(h,Sg,!0),"@"),a.push(Rs(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ko(p,p.charAt(0)=="/"?cS:uS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ko(p,hS)),a.join("")},br.prototype.resolve=function(a){const h=Vn(this);let p=!!a.j;p?Wo(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var v=a.h;if(p)Ho(h,a.u);else if(p=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var O=h.h.lastIndexOf("/");O!=-1&&(v=h.h.slice(0,O+1)+v)}if(O=v,O==".."||O==".")v="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){v=O.lastIndexOf("/",0)==0,O=O.split("/");const M=[];for(let $=0;$<O.length;){const re=O[$++];re=="."?v&&$==O.length&&M.push(""):re==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),v&&$==O.length&&M.push("")):(M.push(re),v=!0)}v=M.join("/")}else v=O}return p?h.h=v:p=a.i.toString()!=="",p?Vd(h,Cg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Vn(a){return new br(a)}function Wo(a,h,p){a.j=p?qo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Vd(a,h,p){h instanceof Go?(a.i=h,fS(a.i,a.l)):(p||(h=Ko(h,dS)),a.i=new Go(h,a.l))}function xe(a,h,p){a.i.set(h,p)}function Vl(a){return xe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function qo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ko(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,lS),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sg=/[#\/\?@]/g,uS=/[#\?:]/g,cS=/[#\?]/g,dS=/[#\?@]/g,hS=/#/g;function Go(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ns(a){a.g||(a.g=new Map,a.h=0,a.i&&aS(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Go.prototype,t.add=function(a,h){Ns(this),this.i=null,a=Ti(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function kg(a,h){Ns(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ag(a,h){return Ns(a),h=Ti(a,h),a.g.has(h)}t.forEach=function(a,h){Ns(this),this.g.forEach(function(p,v){p.forEach(function(O){a.call(h,O,v,this)},this)},this)};function bg(a,h){Ns(a);let p=[];if(typeof h=="string")Ag(a,h)&&(p=p.concat(a.g.get(Ti(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ns(this),this.i=null,a=Ti(this,a),Ag(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=bg(this,a),a.length>0?String(a[0]):h):h};function Pg(a,h,p){kg(a,h),p.length>0&&(a.i=null,a.g.set(Ti(a,h),A(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var p=h[v];const O=Rs(p);p=bg(this,p);for(let M=0;M<p.length;M++){let $=O;p[M]!==""&&($+="="+Rs(p[M])),a.push($)}}return this.i=a.join("&")};function Cg(a){const h=new Go;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function fS(a,h){h&&!a.j&&(Ns(a),a.i=null,a.g.forEach(function(p,v){const O=v.toLowerCase();v!=O&&(kg(this,v),Pg(this,O,p))},a)),a.j=h}function pS(a,h){const p=new Cs;if(o.Image){const v=new Image;v.onload=f(Pr,p,"TestLoadImage: loaded",!0,h,v),v.onerror=f(Pr,p,"TestLoadImage: error",!1,h,v),v.onabort=f(Pr,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=f(Pr,p,"TestLoadImage: timeout",!1,h,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function mS(a,h){const p=new Cs,v=new AbortController,O=setTimeout(()=>{v.abort(),Pr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(M=>{clearTimeout(O),M.ok?Pr(p,"TestPingServer: ok",!0,h):Pr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Pr(p,"TestPingServer: error",!1,h)})}function Pr(a,h,p,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(p)}catch{}}function gS(){this.g=new Vo}function Md(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Md,Mo),Md.prototype.g=function(){return new Ml(this.i,this.h)};function Ml(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ml,Ye),t=Ml.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Yo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qo(this):Yo(this),this.readyState==3&&Rg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Qo(this))},t.Na=function(a){this.g&&(this.response=a,Qo(this))},t.ga=function(){this.g&&Qo(this)};function Qo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Yo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Yo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ng(a){let h="";return Y(a,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function jd(a,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Ng(p),typeof a=="string"?p!=null&&Rs(p):xe(a,h,p))}function je(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(je,Ye);var yS=/^https?$/i,vS=["POST","PUT"];t=je.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Nl.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){Dg(this,M);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)p.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())p.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(vS,h,void 0)>=0)||v||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of p)this.g.setRequestHeader(M,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){Dg(this,M)}};function Dg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Og(a),jl(a)}function Og(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,lt(this,"complete"),lt(this,"abort"),jl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jl(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Lg(this):this.Xa())},t.Xa=function(){Lg(this)};function Lg(a){if(a.h&&typeof i<"u"){if(a.v&&Cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(lt(a,"readystatechange"),Cr(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=M===0){let $=String(a.D).match(Ig)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),v=!yS.test($?$.toLowerCase():"")}p=v}if(p)lt(a,"complete"),lt(a,"success");else{a.o=6;try{var O=Cr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Og(a)}}finally{jl(a)}}}}function jl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||lt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),yn(h)}};function Vg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _S(a){const h={};a=(a.g&&Cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(T(a[v]))continue;var p=Od(a[v]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[O]||[];h[O]=M,M.push(p)}ee(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Mg(a){this.za=0,this.i=[],this.j=new Cs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jo("baseRetryDelayMs",5e3,a),this.Za=Jo("retryDelaySeedMs",1e4,a),this.Ta=Jo("forwardChannelMaxRetries",2,a),this.va=Jo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new vn(a&&a.concurrentRequestLimit),this.Ba=new gS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Mg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,v){ct(0),this.W=a,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=qg(this,null,this.W),Ul(this)};function Fd(a){if(jg(a),a.I==3){var h=a.V++,p=Vn(a.J);if(xe(p,"SID",a.M),xe(p,"RID",h),xe(p,"TYPE","terminate"),Xo(a,p),h=new Ln(a,a.j,h),h.M=2,h.A=Vl(Vn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Kg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),G(h)}Hg(a)}function Fl(a){a.g&&(Bd(a),a.g.cancel(),a.g=null)}function jg(a){Fl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Bl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ul(a){if(!$o(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||y(),B||(j(),B=!0),_.add(h,a),a.D=0}}function wS(a,h){return se(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ps(c(a.Ea,a,h),Wg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new Ln(this,this.j,a);let M=this.o;if(this.U&&(M?(M=ye(M),Rn(M,this.U)):M=this.U),this.u!==null||this.R||(O.J=M,M=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ug(this,O,h),p=Vn(this.J),xe(p,"RID",a),xe(p,"CVER",22),this.G&&xe(p,"X-HTTP-Session-Id",this.G),Xo(this,p),M&&(this.R?h="headers="+Rs(Ng(M))+"&"+h:this.u&&jd(p,this.u,M)),on(this.h,O),this.Ra&&xe(p,"TYPE","init"),this.S?(xe(p,"$req",h),xe(p,"SID","null"),O.U=!0,zo(O,p,null)):zo(O,p,h),this.I=2}}else this.I==3&&(a?Fg(this,a):this.i.length==0||$o(this.h)||Fg(this))};function Fg(a,h){var p;h?p=h.l:p=a.V++;const v=Vn(a.J);xe(v,"SID",a.M),xe(v,"RID",p),xe(v,"AID",a.K),Xo(a,v),a.u&&a.o&&jd(v,a.u,a.o),p=new Ln(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ug(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),on(a.h,p),zo(p,v,h)}function Xo(a,h){a.H&&Y(a.H,function(p,v){xe(h,v,p)}),a.l&&Y({},function(p,v){xe(h,v,p)})}function Ug(a,h,p){p=Math.min(a.i.length,p);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let re=-1;for(;;){const Je=["count="+p];re==-1?p>0?(re=O[0].g,Je.push("ofs="+re)):re=0:Je.push("ofs="+re);let _e=!0;for(let st=0;st<p;st++){var M=O[st].g;const Mn=O[st].map;if(M-=re,M<0)re=Math.max(0,O[st].g-100),_e=!1;else try{M="req"+M+"_"||"";try{var $=Mn instanceof Map?Mn:Object.entries(Mn);for(const[Os,Rr]of $){let Nr=Rr;l(Rr)&&(Nr=yi(Rr)),Je.push(M+Os+"="+encodeURIComponent(Nr))}}catch(Os){throw Je.push(M+"type="+encodeURIComponent("_badmap")),Os}}catch{v&&v(Mn)}}if(_e){$=Je.join("&");break e}}$=void 0}return a=a.i.splice(0,p),h.G=a,$}function Bg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||y(),B||(j(),B=!0),_.add(h,a),a.A=0}}function Ud(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ps(c(a.Da,a),Wg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,zg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ps(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),Fl(this),zg(this))};function Bd(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function zg(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Vn(a.na);xe(h,"RID","rpc"),xe(h,"SID",a.M),xe(h,"AID",a.K),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&xe(h,"TO",a.ia),xe(h,"TYPE","xmlhttp"),Xo(a,h),a.u&&a.o&&jd(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Vl(Vn(h)),p.u=null,p.R=!0,Ll(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Fl(this),Ud(this),ct(19))};function Bl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function $g(a,h){var p=null;if(a.g==h){Bl(a),Bd(a),a.g=null;var v=2}else if(qt(a.h,h))p=h.G,_n(a.h,h),v=1;else return;if(a.I!=0){if(h.o)if(v==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;v=_i(),lt(v,new Uo(v,p)),Ul(a)}else Bg(a);else if(O=h.m,O==3||O==0&&h.X>0||!(v==1&&wS(a,h)||v==2&&Ud(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),O){case 1:Ds(a,5);break;case 4:Ds(a,10);break;case 3:Ds(a,6);break;default:Ds(a,2)}}}function Wg(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Ds(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),v=a.Ua;const O=!v;v=new br(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Wo(v,"https"),Vl(v),O?pS(v.toString(),p):mS(v.toString(),p)}else ct(2);a.I=0,a.l&&a.l.pa(h),Hg(a),jg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Hg(a){if(a.I=0,a.ja=[],a.l){const h=xg(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function qg(a,h,p){var v=p instanceof br?Vn(p):new br(p);if(v.g!="")h&&(v.g=h+"."+v.g),Ho(v,v.u);else{var O=o.location;v=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const M=new br(null);v&&Wo(M,v),h&&(M.g=h),O&&Ho(M,O),p&&(M.h=p),v=M}return p=a.G,h=a.wa,p&&h&&xe(v,p,h),xe(v,"VER",a.ka),Xo(a,v),v}function Kg(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new je(new Md({ab:p})):new je(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gg(){}t=Gg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function zl(){}zl.prototype.g=function(a,h){return new Kt(a,h)};function Kt(a,h){Ye.call(this),this.g=new Mg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new xi(this)}m(Kt,Ye),Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Fd(this.g)},Kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=yi(a),a=p);h.i.push(new Vt(h.Ya++,a)),h.I==3&&Ul(h)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Fd(this.g),delete this.g,Kt.Z.N.call(this)};function Qg(a){jo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Qg,jo);function Yg(){Fo.call(this),this.status=1}m(Yg,Fo);function xi(a){this.g=a}m(xi,Gg),xi.prototype.ra=function(){lt(this.g,"a")},xi.prototype.qa=function(a){lt(this.g,new Qg(a))},xi.prototype.pa=function(a){lt(this.g,new Yg)},xi.prototype.oa=function(){lt(this.g,"b")},zl.prototype.createWebChannel=zl.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,jT=function(){return new zl},MT=function(){return _i()},VT=On,Zf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ei.NO_ERROR=0,Ei.TIMEOUT=8,Ei.HTTP_ERROR=6,Lu=Ei,Rl.COMPLETE="complete",LT=Rl,ie.EventType=Sr,Sr.OPEN="a",Sr.CLOSE="b",Sr.ERROR="c",Sr.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,ma=ie,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,OT=je}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="12.11.0";function c1(t){So=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new sd("@firebase/firestore");function Si(){return ei.logLevel}function H(t,...e){if(ei.logLevel<=ae.DEBUG){const n=e.map(bm);ei.debug(`Firestore (${So}): ${t}`,...n)}}function yr(t,...e){if(ei.logLevel<=ae.ERROR){const n=e.map(bm);ei.error(`Firestore (${So}): ${t}`,...n)}}function ti(t,...e){if(ei.logLevel<=ae.WARN){const n=e.map(bm);ei.warn(`Firestore (${So}): ${t}`,...n)}}function bm(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,FT(t,r,n)}function FT(t,e,n){let r=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yr(r),new Error(r)}function pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||FT(e,s,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class h1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class f1{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new UT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class p1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class m1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new p1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=y1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function ep(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Sh(s)===Sh(i)?le(s,i):Sh(s)?1:-1}return le(t.length,e.length)}const v1=55296,_1=57343;function Sh(t){const e=t.charCodeAt(0);return e>=v1&&e<=_1}function fo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="__name__";class Un{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Un.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=Un.isNumericId(e),s=Un.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Un.extractNumericId(e).compare(Un.extractNumericId(n)):ep(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ls.fromString(e.substring(4,e.length-2))}}class ke extends Un{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const w1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Un{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return w1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gv}static keyField(){return new ft([Gv])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ke.fromString(e))}static fromName(e){return new Q(ke.fromString(e).popFirst(5))}static empty(){return new Q(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e,n){if(!n)throw new K(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function E1(t,e,n,r){if(e===!0&&r===!0)throw new K(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qv(t){if(!Q.isDocumentKey(t))throw new K(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yv(t){if(Q.isDocumentKey(t))throw new K(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Cm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cm(t);throw new K(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function Tl(t,e){if(!zT(t))throw new K(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=-62135596800,Xv=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Xv);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Jv)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xv}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Tl(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Ge("string",Ae._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Ae(0,0))}static max(){return new te(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=-1;function T1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new ps(s,Q.empty(),e)}function x1(t){return new ps(t.readTime,t.key,nl)}class ps{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ps(te.min(),Q.empty(),nl)}static max(){return new ps(te.max(),Q.empty(),nl)}}function I1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==S1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function A1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=-1;function dd(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function b1(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="";function P1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zv(e)),e=C1(t.get(n),e);return Zv(e)}function C1(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case $T:n+="";break;default:n+=i}}return n}function Zv(t){return t+$T+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function WT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uu(this.root,e,this.comparator,!0)}}class uu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t_(this.data.getIterator())}getIteratorFrom(e){return new t_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class t_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new nt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new HT("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const R1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ms(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=R1.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="server_timestamp",KT="__type__",GT="__previous_value__",QT="__local_write_time__";function Nm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[KT])==null?void 0:r.stringValue)===qT}function hd(t){const e=t.mapValue.fields[GT];return Nm(e)?hd(e):e}function rl(t){const e=ms(t.mapValue.fields[QT].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const xc="(default)";class sl{constructor(e,n){this.projectId=e,this.database=n||xc}static empty(){return new sl("","")}get isDefaultDatabase(){return this.database===xc}isEqual(e){return e instanceof sl&&e.projectId===this.projectId&&e.database===this.database}}function D1(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="__type__",O1="__max__",cu={mapValue:{}},JT="__vector__",Ic="value";function ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nm(t)?4:V1(t)?9007199254740991:L1(t)?10:11:Z(28295,{value:t})}function Yn(t,e){if(t===e)return!0;const n=ys(t);if(n!==ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rl(t).isEqual(rl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ms(s.timestampValue),l=ms(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gs(s.bytesValue).isEqual(gs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),l=ze(i.doubleValue);return o===l?Tc(o)===Tc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return fo(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(e_(o)!==e_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Yn(o[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function il(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=ys(t),r=ys(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ze(i.integerValue||i.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return n_(t.timestampValue,e.timestampValue);case 4:return n_(rl(t),rl(e));case 5:return ep(t.stringValue,e.stringValue);case 6:return function(i,o){const l=gs(i),u=gs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=le(l[c],u[c]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=le(ze(i.latitude),ze(o.latitude));return l!==0?l:le(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return r_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,A,P,R;const l=i.fields||{},u=o.fields||{},c=(g=l[Ic])==null?void 0:g.arrayValue,f=(A=u[Ic])==null?void 0:A.arrayValue,m=le(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return m!==0?m:r_(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===cu.mapValue&&o===cu.mapValue)return 0;if(i===cu.mapValue)return 1;if(o===cu.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ep(u[m],f[m]);if(g!==0)return g;const A=po(l[u[m]],c[f[m]]);if(A!==0)return A}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function n_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ms(t),r=ms(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function r_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=po(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function mo(t){return tp(t)}function tp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ms(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=tp(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${tp(n.fields[o])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function Vu(t){switch(ys(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hd(t);return e?16+Vu(e):16;case 5:return 2*t.stringValue.length;case 6:return gs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Vu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Is(r.fields,(i,o)=>{s+=i.length+Vu(o)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function np(t){return!!t&&"integerValue"in t}function Dm(t){return!!t&&"arrayValue"in t}function s_(t){return!!t&&"nullValue"in t}function i_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mu(t){return!!t&&"mapValue"in t}function L1(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[YT])==null?void 0:r.stringValue)===JT}function Pa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pa(t.arrayValue.values[n]);return e}return{...t}}function V1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===O1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Pa(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Pa(this.value))}}function XT(t){const e=[];return Is(t.fields,(n,r)=>{const s=new ft([n]);if(Mu(r)){const i=XT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,te.min(),te.min(),te.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,te.min(),te.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,te.min(),te.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.position=e,this.inclusive=n}}function o_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=po(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function a_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n="asc"){this.field=e,this.dir=n}}function M1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{}class et extends ZT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F1(e,n,r):n==="array-contains"?new z1(e,r):n==="in"?new $1(e,r):n==="not-in"?new W1(e,r):n==="array-contains-any"?new H1(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U1(e,r):new B1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(po(n,this.value)):n!==null&&ys(this.value)===ys(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends ZT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Jn(e,n)}matches(e){return ex(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ex(t){return t.op==="and"}function tx(t){return j1(t)&&ex(t)}function j1(t){for(const e of t.filters)if(e instanceof Jn)return!1;return!0}function rp(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+mo(t.value);if(tx(t))return t.filters.map(e=>rp(e)).join(",");{const e=t.filters.map(n=>rp(n)).join(",");return`${t.op}(${e})`}}function nx(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Yn(r.value,s.value)}(t,e):t instanceof Jn?function(r,s){return s instanceof Jn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&nx(o,s.filters[l]),!0):!1}(t,e):void Z(19439)}function rx(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${mo(n.value)}`}(t):t instanceof Jn?function(n){return n.op.toString()+" {"+n.getFilters().map(rx).join(" ,")+"}"}(t):"Filter"}class F1 extends et{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class U1 extends et{constructor(e,n){super(e,"in",n),this.keys=sx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class B1 extends et{constructor(e,n){super(e,"not-in",n),this.keys=sx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sx(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class z1 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dm(n)&&il(n.arrayValue,this.value)}}class $1 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&il(this.value.arrayValue,n)}}class W1 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!il(this.value.arrayValue,n)}}class H1 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>il(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function l_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new q1(t,e,n,r,s,i,o)}function Om(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),dd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),e.Te=n}return e.Te}function Lm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!a_(t.startAt,e.startAt)&&a_(t.endAt,e.endAt)}function sp(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function K1(t,e,n,r,s,i,o,l){return new fd(t,e,n,r,s,i,o,l)}function Vm(t){return new fd(t)}function u_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function G1(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Q1(t){return t.collectionGroup!==null}function Ca(t){const e=ne(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ft.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new kc(i,r))}),n.has(ft.keyField().canonicalString())||e.Ee.push(new kc(ft.keyField(),r))}return e.Ee}function Kn(t){const e=ne(t);return e.Ie||(e.Ie=Y1(e,Ca(t))),e.Ie}function Y1(t,e){if(t.limitType==="F")return l_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new kc(s.field,i)});const n=t.endAt?new Sc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sc(t.startAt.position,t.startAt.inclusive):null;return l_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ip(t,e,n){return new fd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pd(t,e){return Lm(Kn(t),Kn(e))&&t.limitType===e.limitType}function ix(t){return`${Om(Kn(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rx(s)).join(", ")}]`),dd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>mo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>mo(s)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function md(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ca(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=o_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ca(r),s)||r.endAt&&!function(o,l,u){const c=o_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ca(r),s))}(t,e)}function J1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ox(t){return(e,n)=>{let r=!1;for(const s of Ca(t)){const i=X1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function X1(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?po(u,c):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return WT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Me(Q.comparator);function vr(){return Z1}const ax=new Me(Q.comparator);function ga(...t){let e=ax;for(const n of t)e=e.insert(n.key,n);return e}function lx(t){let e=ax;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zs(){return Ra()}function ux(){return Ra()}function Ra(){return new hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const eD=new Me(Q.comparator),tD=new nt(Q.comparator);function ue(...t){let e=tD;for(const n of t)e=e.add(n);return e}const nD=new nt(le);function rD(){return nD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function cx(t){return{integerValue:""+t}}function sD(t,e){return b1(e)?cx(e):Mm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this._=void 0}}function iD(t,e,n){return t instanceof ol?function(s,i){const o={fields:{[KT]:{stringValue:qT},[QT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nm(i)&&(i=hd(i)),i&&(o.fields[GT]=i),{mapValue:o}}(n,e):t instanceof al?hx(t,e):t instanceof ll?fx(t,e):function(s,i){const o=dx(s,i),l=c_(o)+c_(s.Ae);return np(o)&&np(s.Ae)?cx(l):Mm(s.serializer,l)}(t,e)}function oD(t,e,n){return t instanceof al?hx(t,e):t instanceof ll?fx(t,e):n}function dx(t,e){return t instanceof Ac?function(r){return np(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ol extends gd{}class al extends gd{constructor(e){super(),this.elements=e}}function hx(t,e){const n=px(e);for(const r of t.elements)n.some(s=>Yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ll extends gd{constructor(e){super(),this.elements=e}}function fx(t,e){let n=px(e);for(const r of t.elements)n=n.filter(s=>!Yn(s,r));return{arrayValue:{values:n}}}class Ac extends gd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function c_(t){return ze(t.integerValue||t.doubleValue)}function px(t){return Dm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.field=e,this.transform=n}}function lD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof al&&s instanceof al||r instanceof ll&&s instanceof ll?fo(r.elements,s.elements,Yn):r instanceof Ac&&s instanceof Ac?Yn(r.Ae,s.Ae):r instanceof ol&&s instanceof ol}(t.transform,e.transform)}class uD{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yd{}function mx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jm(t.key,fn.none()):new xl(t.key,t.data,fn.none());{const n=t.data,r=Ut.empty();let s=new nt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ss(t.key,r,new Yt(s.toArray()),fn.none())}}function cD(t,e,n){t instanceof xl?function(s,i,o){const l=s.value.clone(),u=h_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,i,o){if(!ju(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=h_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(gx(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Na(t,e,n,r){return t instanceof xl?function(i,o,l,u){if(!ju(i.precondition,o))return l;const c=i.value.clone(),f=f_(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ss?function(i,o,l,u){if(!ju(i.precondition,o))return l;const c=f_(i.fieldTransforms,u,o),f=o.data;return f.setAll(gx(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return ju(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=dx(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function d_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fo(r,s,(i,o)=>lD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xl extends yd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ss extends yd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h_(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,oD(o,l,n[s]))}return r}function f_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iD(i,o,e))}return r}class jm extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hD extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ux();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=mx(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,r)=>d_(n,r))&&fo(this.baseMutations,e.baseMutations,(n,r)=>d_(n,r))}}class Fm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return eD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fm(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,de;function gD(t){switch(t){case U.OK:return Z(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function yx(t){if(t===void 0)return yr("GRPC error has no .code"),U.UNKNOWN;switch(t){case qe.OK:return U.OK;case qe.CANCELLED:return U.CANCELLED;case qe.UNKNOWN:return U.UNKNOWN;case qe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case qe.INTERNAL:return U.INTERNAL;case qe.UNAVAILABLE:return U.UNAVAILABLE;case qe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case qe.NOT_FOUND:return U.NOT_FOUND;case qe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case qe.ABORTED:return U.ABORTED;case qe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case qe.DATA_LOSS:return U.DATA_LOSS;default:return Z(39323,{code:t})}}(de=qe||(qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new ls([4294967295,4294967295],0);function p_(t){const e=yD().encode(t),n=new DT;return n.update(e),new Uint8Array(n.digest())}function m_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ls([n,r],0),new ls([s,i],0)]}class Um{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ya(`Invalid padding: ${n}`);if(r<0)throw new ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ya(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ls.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ls.fromNumber(r)));return s.compare(vD)===1&&(s=new ls([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=p_(e),[r,s]=m_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Um(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=p_(e),[r,s]=m_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vd(te.min(),s,new Me(le),vr(),ue())}}class Il{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Il(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class vx{constructor(e,n){this.targetId=e,this.Ce=n}}class _x{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class g_{constructor(){this.ve=0,this.Fe=y_(),this.Me=gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ue(),n=ue(),r=ue();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new Il(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=y_()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class _D{constructor(e){this.Ge=e,this.ze=new Map,this.je=vr(),this.Je=du(),this.He=du(),this.Ze=new Me(le)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(sp(i))if(r===0){const o=new Q(i.path);this.et(n,o,Tt.newNoDocument(o,te.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=gs(r).toUint8Array()}catch(u){if(u instanceof HT)return ti("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Um(o,s,i)}catch(u){return ti(u instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&sp(l.target)){const u=new Q(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,Tt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ue();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new vd(e,n,this.Ze,this.je,r);return this.je=vr(),this.Je=du(),this.He=du(),this.Ze=new Me(le),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new g_,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new nt(le),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new nt(le),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new g_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function du(){return new Me(Q.comparator)}function y_(){return new Me(Q.comparator)}const wD={asc:"ASCENDING",desc:"DESCENDING"},ED={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TD={and:"AND",or:"OR"};class xD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function op(t,e){return t.useProto3Json||dd(e)?e:{value:e}}function bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ID(t,e){return bc(t,e.toTimestamp())}function Gn(t){return pe(!!t,49232),te.fromTimestamp(function(n){const r=ms(n);return new Ae(r.seconds,r.nanos)}(t))}function Bm(t,e){return ap(t,e).canonicalString()}function ap(t,e){const n=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ex(t){const e=ke.fromString(t);return pe(kx(e),10190,{key:e.toString()}),e}function lp(t,e){return Bm(t.databaseId,e.path)}function kh(t,e){const n=Ex(e);if(n.get(1)!==t.databaseId.projectId)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(xx(n))}function Tx(t,e){return Bm(t.databaseId,e)}function SD(t){const e=Ex(t);return e.length===4?ke.emptyPath():xx(e)}function up(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xx(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function v_(t,e,n){return{name:lp(t,e),fields:n.value.mapValue.fields}}function kD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(pe(f===void 0||typeof f=="string",58123),gt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?U.UNKNOWN:yx(c.code);return new K(f,c.message||"")}(o);n=new _x(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=kh(t,r.document.name),i=Gn(r.document.updateTime),o=r.document.createTime?Gn(r.document.createTime):te.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Fu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=kh(t,r.document),i=r.readTime?Gn(r.readTime):te.min(),o=Tt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Fu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=kh(t,r.document),i=r.removedTargetIds||[];n=new Fu([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new mD(s,i),l=r.targetId;n=new vx(l,o)}}return n}function AD(t,e){let n;if(e instanceof xl)n={update:v_(t,e.key,e.value)};else if(e instanceof jm)n={delete:lp(t,e.key)};else if(e instanceof Ss)n={update:v_(t,e.key,e.data),updateMask:VD(e.fieldMask)};else{if(!(e instanceof hD))return Z(16599,{dt:e.type});n={verify:lp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ol)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof al)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ac)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ID(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function bD(t,e){return t&&t.length>0?(pe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Gn(s.updateTime):Gn(i);return o.isEqual(te.min())&&(o=Gn(i)),new uD(o,s.transformResults||[])}(n,e))):[]}function PD(t,e){return{documents:[Tx(t,e.path)]}}function CD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tx(t,s);const i=function(c){if(c.length!==0)return Sx(Jn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ai(g.field),direction:DD(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=op(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function RD(t){let e=SD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Ix(m);return g instanceof Jn&&tx(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(P){return new kc(bi(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,dd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new Sc(A,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,A=m.values||[];return new Sc(A,g)}(n.endAt)),K1(e,s,o,i,l,"F",u,c)}function ND(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ix(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bi(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bi(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bi(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bi(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return et.create(bi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jn.create(n.compositeFilter.filters.map(r=>Ix(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function DD(t){return wD[t]}function OD(t){return ED[t]}function LD(t){return TD[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function bi(t){return ft.fromServerFormat(t.fieldPath)}function Sx(t){return t instanceof et?function(n){if(n.op==="=="){if(i_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(s_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(s_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:OD(n.op),value:n.value}}}(t):t instanceof Jn?function(n){const r=n.getFilters().map(s=>Sx(s));return r.length===1?r[0]:{compositeFilter:{op:LD(n.op),filters:r}}}(t):Z(54877,{filter:t})}function VD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Ax(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,r,s,i=te.min(),o=te.min(),l=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.yt=e}}function jD(t){const e=RD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ip(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this.bn=new UD}addToCollectionParentIndex(e,n){return this.bn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ps.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ps.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class UD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bx=41943040;class jt{static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(bx,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new go(0)}static ar(){return new go(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="LruGarbageCollector",BD=1048576;function E_([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class zD{constructor(e){this.Pr=e,this.buffer=new nt(E_),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();E_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $D{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(w_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?H(w_,"Ignoring IndexedDB error during garbage collection: ",n):await ko(n)}await this.Ar(3e5)})}}class WD{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(cd.ce);const r=new zD(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(__)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),__):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Si()<=ae.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function HD(t,e){return new WD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.changes=new hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Na(r.mutation,s,Yt.empty(),Ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=zs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ga();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=vr();const o=Ra(),l=function(){return Ra()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Ss)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Na(f.mutation,c,f.mutation.getFieldMask(),Ae.now())):o.set(c.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new KD(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ra();let s=new Me((o,l)=>o-l),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Yt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||ue()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=ux();f.forEach(g=>{if(!i.has(g)){const A=mx(n.get(g),r.get(g));A!==null&&m.set(g,A),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return G1(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Q1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(zs());let l=nl,u=i;return o.next(c=>F.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ue())).next(f=>({batchId:l,changes:lx(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=ga();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ga();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const c=function(m,g){return new fd(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let l=ga();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Na(f.mutation,c,Yt.empty(),Ae.now()),md(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Gn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:jD(s.bundledQuery),readTime:Gn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.overlays=new Me(Q.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=zs(),i=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=zs(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=zs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pD(n,r));let i=this.Lr.get(n);i===void 0&&(i=ue(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.kr=new nt(it.qr),this.Kr=new nt(it.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new it(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new it(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new ke([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new Q(new ke([])),r=new it(n,e),s=new it(n,e+1);let i=ue();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return Q.comparator(e.key,n.key)||le(e.Jr,n.Jr)}static Ur(e,n){return le(e.Jr,n.Jr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new nt(it.qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fD(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Rm:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(le);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new it(new Q(i),0);let l=new nt(le);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return F.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new it(n,0),s=this.Hr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.ti=e,this.docs=function(){return new Me(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=vr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vr();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||I1(x1(f),r)<=0||(s.has(f.key)||md(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new e2(this)}getSize(e){return F.resolve(this.size)}}class e2 extends qD{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.persistence=e,this.ri=new hi(n=>Om(n),Lm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new zm,this.targetCount=0,this.oi=go._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new go(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n){this._i={},this.overlays={},this.ai=new cd(0),this.ui=!1,this.ui=!0,this.ci=new JD,this.referenceDelegate=e(this),this.li=new t2(this),this.indexManager=new FD,this.remoteDocumentCache=function(s){return new ZD(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new MD(n),this.Pi=new QD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new XD(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new n2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class n2 extends k1{constructor(e){super(),this.currentSequenceNumber=e}}class $m{constructor(e){this.persistence=e,this.Ri=new zm,this.Ai=null}static Vi(e){return new $m(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=Q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Pc{constructor(e,n){this.persistence=e,this.fi=new hi(r=>P1(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=HD(this,n)}static Vi(e,n){return new Pc(e,n)}Ti(){}Ei(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Vu(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wm(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return AP()?8:A1(St())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new r2;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Si()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(Si()<=ae.DEBUG&&H("QueryEngine","Query:",ki(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Si()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):F.resolve())}gs(e,n){if(u_(n))return F.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ip(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,ip(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return u_(n)||s.isEqual(te.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?F.resolve(null):(Si()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ki(n)),this.Ds(e,o,n,T1(s,nl)).next(l=>l))})}Ss(e,n){let r=new nt(ox(e));return n.forEach((s,i)=>{md(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Si()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ki(n)),this.fs.getDocumentsMatchingQuery(e,n,ps.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="LocalStore",i2=3e8;class o2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Me(le),this.Fs=new hi(i=>Om(i),Lm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GD(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function a2(t,e,n,r){return new o2(t,e,n,r)}async function Cx(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ue();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function l2(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let A=F.resolve();return g.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(R=>{const L=c.docVersions.get(P);pe(L!==null,48541),R.version.compareTo(L)<0&&(m.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),f.addEntry(R)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ue();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Rx(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function u2(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(gt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(R,L,x){return R.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=i2?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,A,f)&&l.push(n.li.updateTargetData(i,A))});let u=vr(),c=ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(c2(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(te.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function c2(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=vr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Hm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function d2(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function h2(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function cp(t,e,n){const r=ne(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ao(o))throw o;H(Hm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function T_(t,e,n){const r=ne(t);let s=te.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=ne(u),g=m.Fs.get(f);return g!==void 0?F.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,Kn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ue())).next(l=>(f2(r,J1(e),l),{documents:l,ks:i})))}function f2(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class x_{constructor(){this.activeTargetIds=rD()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p2{constructor(){this.vo=new x_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new x_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="ConnectivityMonitor";class S_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(I_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(I_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu=null;function dp(){return hu===null?hu=function(){return 268435456+Math.round(2147483648*Math.random())}():hu++,"0x"+hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="RestConnection",g2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class y2{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===xc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=dp(),l=this.Qo(e,n.toUriEncodedString());H(Ah,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=ui(c);return this.zo(e,l,u,r,f).then(m=>(H(Ah,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ti(Ah,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=g2[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection",aa=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ji extends y2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ji.c_){const e=MT();aa(e,VT.STAT_EVENT,n=>{n.stat===Zf.PROXY?H(_t,"STAT_EVENT: detected buffering proxy"):n.stat===Zf.NOPROXY&&H(_t,"STAT_EVENT: detected no buffering proxy")}),Ji.c_=!0}}zo(e,n,r,s,i){const o=dp();return new Promise((l,u)=>{const c=new OT;c.setWithCredentials(!0),c.listenOnce(LT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Lu.NO_ERROR:const m=c.getResponseJson();H(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Lu.TIMEOUT:H(_t,`RPC '${e}' ${o} timed out`),u(new K(U.DEADLINE_EXCEEDED,"Request time out"));break;case Lu.HTTP_ERROR:const g=c.getStatus();if(H(_t,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const R=function(x){const w=x.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(w)>=0?w:U.UNKNOWN}(P.status);u(new K(R,P.message))}else u(new K(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(U.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(_t,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(_t,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=dp(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");H(_t,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.E_(f);let m=!1,g=!1;const A=new v2({Jo:P=>{g?H(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(H(_t,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),H(_t,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Ho:()=>f.close()});return aa(f,ma.EventType.OPEN,()=>{g||(H(_t,`RPC '${e}' stream ${s} transport opened.`),A.i_())}),aa(f,ma.EventType.CLOSE,()=>{g||(g=!0,H(_t,`RPC '${e}' stream ${s} transport closed`),A.o_(),this.I_(f))}),aa(f,ma.EventType.ERROR,P=>{g||(g=!0,ti(_t,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),A.o_(new K(U.UNAVAILABLE,"The operation could not be completed")))}),aa(f,ma.EventType.MESSAGE,P=>{var R;if(!g){const L=P.data[0];pe(!!L,16349);const x=L,w=(x==null?void 0:x.error)||((R=x[0])==null?void 0:R.error);if(w){H(_t,`RPC '${e}' stream ${s} received error:`,w);const k=w.status;let V=function(_){const y=qe[_];if(y!==void 0)return yx(y)}(k),j=w.message;k==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ti(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=U.INTERNAL,j="Unknown error status: "+k+" with message "+w.message),g=!0,A.o_(new K(V,j)),f.close()}else H(_t,`RPC '${e}' stream ${s} received:`,L),A.__(L)}}),Ji.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return jT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t){return new Ji(t)}function bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){return new xD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji.c_=!1;class Nx{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="PersistentStream";class Dx{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Nx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(yr(n.toString()),yr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(k_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(k_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w2 extends Dx{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=kD(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Gn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=up(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=sp(u)?{documents:PD(i,u)}:{query:CD(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=wx(i,o.resumeToken);const c=op(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=bc(i,o.snapshotVersion.toTimestamp());const c=op(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=ND(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=up(this.serializer),n.removeTarget=e,this.q_(n)}}class E2 extends Dx{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=bD(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=up(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AD(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{}class x2 extends T2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,ap(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(U.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,ap(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function I2(t,e,n,r){return new x2(t,e,n,r)}class S2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(yr(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="RemoteStore";class k2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{fi(this)&&(H(ni,"Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.Ia.add(4),await Sl(c),c.Va.set("Unknown"),c.Ia.delete(4),await wd(c)}(this))})}),this.Va=new S2(r,s)}}async function wd(t){if(fi(t))for(const e of t.Ra)await e(!0)}async function Sl(t){for(const e of t.Ra)await e(!1)}function Ox(t,e){const n=ne(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Qm(n)?Gm(n):bo(n).O_()&&Km(n,e))}function qm(t,e){const n=ne(t),r=bo(n);n.Ea.delete(e),r.O_()&&Lx(n,e),n.Ea.size===0&&(r.O_()?r.L_():fi(n)&&n.Va.set("Unknown"))}function Km(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bo(t).Z_(e)}function Lx(t,e){t.da.$e(e),bo(t).X_(e)}function Gm(t){t.da=new _D({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),bo(t).start(),t.Va.ua()}function Qm(t){return fi(t)&&!bo(t).x_()&&t.Ea.size>0}function fi(t){return ne(t).Ia.size===0}function Vx(t){t.da=void 0}async function A2(t){t.Va.set("Online")}async function b2(t){t.Ea.forEach((e,n)=>{Km(t,e)})}async function P2(t,e){Vx(t),Qm(t)?(t.Va.ha(e),Gm(t)):t.Va.set("Unknown")}async function C2(t,e,n){if(t.Va.set("Online"),e instanceof _x&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){H(ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof Fu?t.da.Xe(e):e instanceof vx?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await Rx(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ea.get(c);f&&i.Ea.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ea.get(u);if(!f)return;i.Ea.set(u,f.withResumeToken(gt.EMPTY_BYTE_STRING,f.snapshotVersion)),Lx(i,u);const m=new Qr(f.target,u,c,f.sequenceNumber);Km(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(ni,"Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!Ao(e))throw e;t.Ia.add(1),await Sl(t),t.Va.set("Offline"),n||(n=()=>Rx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(ni,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await wd(t)})}function Mx(t,e){return e().catch(n=>Cc(t,n,e))}async function Ed(t){const e=ne(t),n=vs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rm;for(;R2(e);)try{const s=await d2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,N2(e,s)}catch(s){await Cc(e,s)}jx(e)&&Fx(e)}function R2(t){return fi(t)&&t.Ta.length<10}function N2(t,e){t.Ta.push(e);const n=vs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function jx(t){return fi(t)&&!vs(t).x_()&&t.Ta.length>0}function Fx(t){vs(t).start()}async function D2(t){vs(t).ra()}async function O2(t){const e=vs(t);for(const n of t.Ta)e.ea(n.mutations)}async function L2(t,e,n){const r=t.Ta.shift(),s=Fm.from(r,e,n);await Mx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ed(t)}async function V2(t,e){e&&vs(t).Y_&&await async function(r,s){if(function(o){return gD(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();vs(r).B_(),await Mx(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ed(r)}}(t,e),jx(t)&&Fx(t)}async function A_(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H(ni,"RemoteStore received new credentials");const r=fi(n);n.Ia.add(3),await Sl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await wd(n)}async function M2(t,e){const n=ne(t);e?(n.Ia.delete(2),await wd(n)):e||(n.Ia.add(2),await Sl(n),n.Va.set("Unknown"))}function bo(t){return t.ma||(t.ma=function(n,r,s){const i=ne(n);return i.sa(),new w2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:A2.bind(null,t),Yo:b2.bind(null,t),t_:P2.bind(null,t),H_:C2.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Qm(t)?Gm(t):t.Va.set("Unknown")):(await t.ma.stop(),Vx(t))})),t.ma}function vs(t){return t.fa||(t.fa=function(n,r,s){const i=ne(n);return i.sa(),new E2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:D2.bind(null,t),t_:V2.bind(null,t),ta:O2.bind(null,t),na:L2.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ed(t)):(await t.fa.stop(),t.Ta.length>0&&(H(ni,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ym(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jm(t,e){if(yr("AsyncQueue",`${e}: ${t}`),Ao(t))return new K(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{static emptySet(e){return new Xi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ga(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.ga=new Me(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new yo(e,n,Xi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class F2{constructor(){this.queries=P_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=P_(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(U.ABORTED,"Firestore shutting down"))}}function P_(){return new hi(t=>ix(t),pd)}async function Ux(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new j2,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Jm(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Xm(n)}async function Bx(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function U2(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Xm(n)}function B2(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Xm(t){t.Ca.forEach(e=>{e.next()})}var hp,C_;(C_=hp||(hp={})).Ma="default",C_.Cache="cache";class zx{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==hp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.key=e}}class Wx{constructor(e){this.key=e}}class z2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ue(),this.mutatedKeys=ue(),this.eu=ox(e),this.tu=new Xi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new b_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),A=md(this.query,m)?m:null,P=!!g&&this.mutatedKeys.has(g.key),R=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;g&&A?g.data.isEqual(A.data)?P!==R&&(r.track({type:3,doc:A}),L=!0):this.su(g,A)||(r.track({type:2,doc:A}),L=!0,(u&&this.eu(A,u)>0||c&&this.eu(A,c)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),L=!0):g&&!A&&(r.track({type:1,doc:g}),L=!0,(u||c)&&(l=!0)),L&&(A?(o=o.add(A),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(A,P){const R=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:L})}};return R(A)-R(P)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new yo(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new b_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ue(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Wx(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new $x(r))}),n}cu(e){this.Za=e.ks,this.Ya=ue();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return yo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Zm="SyncEngine";class $2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W2{constructor(e){this.key=e,this.hu=!1}}class H2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new hi(l=>ix(l),pd),this.Eu=new Map,this.Iu=new Set,this.Ru=new Me(Q.comparator),this.Au=new Map,this.Vu=new zm,this.du={},this.mu=new Map,this.fu=go.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function q2(t,e,n=!0){const r=Yx(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Hx(r,e,n,!0),s}async function K2(t,e){const n=Yx(t);await Hx(n,e,!0,!1)}async function Hx(t,e,n,r){const s=await h2(t.localStore,Kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await G2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ox(t.remoteStore,s),l}async function G2(t,e,n,r,s){t.pu=(m,g,A)=>async function(R,L,x,w){let k=L.view.ru(x);k.bs&&(k=await T_(R.localStore,L.query,!1).then(({documents:_})=>L.view.ru(_,k)));const V=w&&w.targetChanges.get(L.targetId),j=w&&w.targetMismatches.get(L.targetId)!=null,B=L.view.applyChanges(k,R.isPrimaryClient,V,j);return N_(R,L.targetId,B.au),B.snapshot}(t,m,g,A);const i=await T_(t.localStore,e,!0),o=new z2(e,i.ks),l=o.ru(i.documents),u=Il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);N_(t,n,c.au);const f=new $2(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function Q2(t,e,n){const r=ne(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!pd(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await cp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qm(r.remoteStore,s.targetId),fp(r,s.targetId)}).catch(ko)):(fp(r,s.targetId),await cp(r.localStore,s.targetId,!0))}async function Y2(t,e){const n=ne(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qm(n.remoteStore,r.targetId))}async function J2(t,e,n){const r=sO(t);try{const s=await function(o,l){const u=ne(o),c=Ae.now(),f=l.reduce((A,P)=>A.add(P.key),ue());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=vr(),R=ue();return u.xs.getEntries(A,f).next(L=>{P=L,P.forEach((x,w)=>{w.isValidDocument()||(R=R.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(L=>{m=L;const x=[];for(const w of l){const k=dD(w,m.get(w.key).overlayedDocument);k!=null&&x.push(new Ss(w.key,k,XT(k.value.mapValue),fn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,x,l)}).next(L=>{g=L;const x=L.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(A,L.batchId,x)})}).then(()=>({batchId:g.batchId,changes:lx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Me(le)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await kl(r,s.changes),await Ed(r.remoteStore)}catch(s){const i=Jm(s,"Failed to persist write");n.reject(i)}}async function qx(t,e){const n=ne(t);try{const r=await u2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?pe(o.hu,14607):s.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))}),await kl(n,r,e)}catch(r){await ko(r)}}function R_(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Xm(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function X2(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Me(Q.comparator);o=o.insert(i,Tt.newNoDocument(i,te.min()));const l=ue().add(i),u=new vd(te.min(),new Map,new Me(le),o,l);await qx(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),eg(r)}else await cp(r.localStore,e,!1).then(()=>fp(r,e,n)).catch(ko)}async function Z2(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await l2(n.localStore,e);Gx(n,r,null),Kx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kl(n,s)}catch(s){await ko(s)}}async function eO(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(pe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);Gx(r,e,n),Kx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kl(r,s)}catch(s){await ko(s)}}function Kx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Gx(t,e,n){const r=ne(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function fp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Qx(t,r)})}function Qx(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(qm(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),eg(t))}function N_(t,e,n){for(const r of n)r instanceof $x?(t.Vu.addReference(r.key,e),tO(t,r)):r instanceof Wx?(H(Zm,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Qx(t,r.key)):Z(19791,{wu:r})}function tO(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(H(Zm,"New document in limbo: "+n),t.Iu.add(r),eg(t))}function eg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Q(ke.fromString(e)),r=t.fu.next();t.Au.set(r,new W2(n)),t.Ru=t.Ru.insert(n,r),Ox(t.remoteStore,new Qr(Kn(Vm(n.path)),r,"TargetPurposeLimboResolution",cd.ce))}}async function kl(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Wm.Is(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,g=>F.forEach(g.Ts,A=>f.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>F.forEach(g.Es,A=>f.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!Ao(m))throw m;H(Hm,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const A=f.vs.get(g),P=A.snapshotVersion,R=A.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(g,R)}}}(r.localStore,i))}async function nO(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H(Zm,"User change. New user:",e.toKey());const r=await Cx(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kl(n,r.Ns)}}function rO(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return ue().add(r.key);{let s=ue();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Yx(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X2.bind(null,e),e.Pu.H_=U2.bind(null,e.eventManager),e.Pu.yu=B2.bind(null,e.eventManager),e}function sO(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eO.bind(null,e),e}class Rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_d(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return a2(this.persistence,new s2,e.initialUser,this.serializer)}Cu(e){return new Px($m.Vi,this.serializer)}Du(e){return new p2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rc.provider={build:()=>new Rc};class iO extends Rc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){pe(this.persistence.referenceDelegate instanceof Pc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $D(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new Px(r=>Pc.Vi(r,n),this.serializer)}}class pp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>R_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nO.bind(null,this.syncEngine),await M2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F2}()}createDatastore(e){const n=_d(e.databaseInfo.databaseId),r=_2(e.databaseInfo);return I2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new k2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>R_(this.syncEngine,n,0),function(){return S_.v()?new S_:new m2}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new H2(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);H(ni,"RemoteStore shutting down."),i.Ia.add(5),await Sl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}pp.provider={build:()=>new pp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):yr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="FirestoreClient";class oO{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Pm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(_s,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(_s,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),H(_s,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cx(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function D_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aO(t);H(_s,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>A_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>A_(e.remoteStore,s)),t._onlineComponents=e}async function aO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(_s,"Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Rc)}}else H(_s,"Using default OfflineComponentProvider"),await Ph(t,new iO(void 0));return t._offlineComponents}async function Xx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(_s,"Using user provided OnlineComponentProvider"),await D_(t,t._uninitializedComponentsProvider._online)):(H(_s,"Using default OnlineComponentProvider"),await D_(t,new pp))),t._onlineComponents}function lO(t){return Xx(t).then(e=>e.syncEngine)}async function Zx(t){const e=await Xx(t),n=e.eventManager;return n.onListen=q2.bind(null,e.syncEngine),n.onUnlisten=Q2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=K2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Y2.bind(null,e.syncEngine),n}function uO(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Jx({next:g=>{f.Nu(),o.enqueueAndForget(()=>Bx(i,m));const A=g.docs.has(l);!A&&g.fromCache?c.reject(new K(U.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?c.reject(new K(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new zx(Vm(l.path),f,{includeMetadataChanges:!0,qa:!0});return Ux(i,m)}(await Zx(t),t.asyncQueue,e,n,r)),r.promise}function cO(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Jx({next:g=>{f.Nu(),o.enqueueAndForget(()=>Bx(i,m)),g.fromCache&&u.source==="server"?c.reject(new K(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new zx(l,f,{includeMetadataChanges:!0,qa:!0});return Ux(i,m)}(await Zx(t),t.asyncQueue,e,n,r)),r.promise}function dO(t,e){const n=new cr;return t.asyncQueue.enqueueAndForget(async()=>J2(await lO(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO="ComponentProvider",O_=new Map;function fO(t,e,n,r,s){return new N1(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,eI(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firestore.googleapis.com",L_=!0;class V_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tI,this.ssl=L_}else this.host=e.host,this.ssl=e.ssl??L_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BD)throw new K(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}E1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Td{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new V_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new V_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d1;switch(r.type){case"firstParty":return new m1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=O_.get(n);r&&(H(hO,"Removing Datastore"),O_.delete(n),r.terminate())}(this),Promise.resolve()}}function pO(t,e,n,r={}){var c;t=Cn(t,Td);const s=ui(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&vm(`https://${l}`),i.host!==tI&&i.host!==l&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!fs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=wt.MOCK_USER;else{f=K0(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new wt(g)}t._authCredentials=new h1(new UT(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xd(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Tl(n,Qe._jsonSchema))return new Qe(e,r||null,new Q(ke.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Ge("string",Qe._jsonSchemaVersion),referencePath:Ge("string")};class us extends xd{constructor(e,n,r){super(e,n,Vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new Q(e))}withConverter(e){return new us(this.firestore,e,this._path)}}function Yr(t,e,...n){if(t=Ee(t),BT("collection","path",e),t instanceof Td){const r=ke.fromString(e,...n);return Yv(r),new us(t,null,r)}{if(!(t instanceof Qe||t instanceof us))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Yv(r),new us(t.firestore,null,r)}}function Xe(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=Pm.newId()),BT("doc","path",e),t instanceof Td){const r=ke.fromString(e,...n);return Qv(r),new Qe(t,null,new Q(r))}{if(!(t instanceof Qe||t instanceof us))throw new K(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Qv(r),new Qe(t.firestore,t instanceof us?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="AsyncQueue";class j_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Nx(this,"async_queue_retry"),this._c=()=>{const r=bh();r&&H(M_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=bh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new cr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;H(M_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,yr("INTERNAL UNHANDLED ERROR: ",F_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ym.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:F_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function F_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class pi extends Td{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new j_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new j_(e),this._firestoreClient=void 0,await e}}}function mO(t,e){const n=typeof t=="object"?t:vl(),r=typeof t=="string"?t:xc,s=Er(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=W0("firestore");i&&pO(s,...i)}return s}function tg(t){if(t._terminated)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gO(t),t._firestoreClient}function gO(t){var r,s,i,o;const e=t._freezeSettings(),n=fO(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new oO(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cn(gt.fromBase64String(e))}catch(n){throw new K(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cn(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Tl(e,cn._jsonSchema))return cn.fromBase64String(e.bytes)}}cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:Ge("string",cn._jsonSchemaVersion),bytes:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qn._jsonSchemaVersion}}static fromJSON(e){if(Tl(e,Qn._jsonSchema))return new Qn(e.latitude,e.longitude)}}Qn._jsonSchemaVersion="firestore/geoPoint/1.0",Qn._jsonSchema={type:Ge("string",Qn._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Tl(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new An(e.vectorValues);throw new K(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:Ge("string",An._jsonSchemaVersion),vectorValues:Ge("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=/^__.*__$/;class vO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new xl(e,this.data,n,this.fieldTransforms)}}class nI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class rg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new rg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Nc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(rI(this.dataSource)&&yO.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class _O{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_d(e)}A(e,n,r,s=!1){return new rg({dataSource:e,methodName:n,targetDoc:r,path:ft.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sg(t){const e=t._freezeSettings(),n=_d(t._databaseId);return new _O(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sI(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);og("Data must be an object, but it was:",o,r);const l=iI(r,o);let u,c;if(i.merge)u=new Yt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=ul(e,m,n);if(!o.contains(g))throw new K(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);lI(f,g)||f.push(g)}u=new Yt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new vO(new Ut(l),u,c)}class Sd extends Id{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sd}}class ig extends Id{_toFieldTransform(e){return new aD(e.path,new ol)}isEqual(e){return e instanceof ig}}function wO(t,e,n,r){const s=t.A(1,e,n);og("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Is(r,(u,c)=>{const f=aI(e,u,n);c=Ee(c);const m=s.fc(f);if(c instanceof Sd)i.push(f);else{const g=kd(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Yt(i);return new nI(o,l,s.fieldTransforms)}function EO(t,e,n,r,s,i){const o=t.A(1,e,n),l=[ul(e,r,n)],u=[s];if(i.length%2!=0)throw new K(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(ul(e,i[g])),u.push(i[g+1]);const c=[],f=Ut.empty();for(let g=l.length-1;g>=0;--g)if(!lI(c,l[g])){const A=l[g];let P=u[g];P=Ee(P);const R=o.fc(A);if(P instanceof Sd)c.push(A);else{const L=kd(P,R);L!=null&&(c.push(A),f.set(A,L))}}const m=new Yt(c);return new nI(f,m,o.fieldTransforms)}function kd(t,e){if(oI(t=Ee(t)))return og("Unsupported field value:",e,t),iI(t,e);if(t instanceof Id)return function(r,s){if(!rI(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=kd(l,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:bc(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bc(s.serializer,i)}}if(r instanceof Qn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:wx(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return function(o,l){const u=o instanceof An?o.toArray():o;return{mapValue:{fields:{[YT]:{stringValue:JT},[Ic]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return Mm(l.serializer,f)})}}}}}}(r,s);if(Ax(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Cm(r)}`)}(t,e)}function iI(t,e){const n={};return WT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,s)=>{const i=kd(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function oI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Qn||t instanceof cn||t instanceof Qe||t instanceof Id||t instanceof An||Ax(t))}function og(t,e,n){if(!oI(n)||!zT(n)){const r=Cm(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ul(t,e,n){if((e=Ee(e))instanceof ng)return e._internalPath;if(typeof e=="string")return aI(t,e);throw Nc("Field path arguments must be of type string or ",t,!1,void 0,n)}const TO=new RegExp("[~\\*/\\[\\]]");function aI(t,e,n){if(e.search(TO)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ng(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(U.INVALID_ARGUMENT,l+t+u)}function lI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{convertValue(e,n="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ic].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ze(o.doubleValue));return new An(n)}convertGeoPoint(e){return new Qn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const n=ms(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);pe(kx(r),9688,{name:e});const s=new sl(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||yr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends xO{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function tr(){return new ig("serverTimestamp")}const U_="@firebase/firestore",B_="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ul("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IO extends cI{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function dI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qs extends cI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ul("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",qs._jsonSchema={type:Ge("string",qs._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class Uu extends qs{data(e={}){return super.data(e)}}class Zi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new va(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uu(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Uu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new va(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Uu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new va(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:kO(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zi._jsonSchemaVersion="firestore/querySnapshot/1.0",Zi._jsonSchema={type:Ge("string",Zi._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){t=Cn(t,Qe);const e=Cn(t.firestore,pi),n=tg(e);return uO(n,t._key).then(r=>AO(e,t,r))}function Da(t){t=Cn(t,xd);const e=Cn(t.firestore,pi),n=tg(e),r=new uI(e);return SO(t._query),cO(n,t._query).then(s=>new Zi(e,r,t,s))}function fu(t,e,n){t=Cn(t,Qe);const r=Cn(t.firestore,pi),s=dI(t.converter,e,n),i=sg(r);return Ad(r,[sI(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,fn.none())])}function Ch(t,e,n,...r){t=Cn(t,Qe);const s=Cn(t.firestore,pi),i=sg(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof ng?EO(i,"updateDoc",t._key,e,n,r):wO(i,"updateDoc",t._key,e),Ad(s,[o.toMutation(t._key,fn.exists(!0))])}function Rh(t){return Ad(Cn(t.firestore,pi),[new jm(t._key,fn.none())])}function hI(t,e){const n=Cn(t.firestore,pi),r=Xe(t),s=dI(t.converter,e),i=sg(t.firestore);return Ad(n,[sI(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function Ad(t,e){const n=tg(t);return dO(n,e)}function AO(t,e,n){const r=n.docs.get(e._key),s=new uI(t);return new qs(t,s,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){c1(ci),tn(new Ht("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new pi(new f1(r.getProvider("auth-internal")),new g1(o,r.getProvider("app-check-internal")),D1(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),xt(U_,B_,e),xt(U_,B_,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebasestorage.googleapis.com",pI="storageBucket",bO=2*60*1e3,PO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends gn{constructor(e,n,r=0){super(Nh(e),`Firebase Storage: ${n} (${Nh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Nh(t){return"storage/"+t}function ag(){const t="An unknown error occurred, please check the error payload for server response.";return new Be(Ue.UNKNOWN,t)}function CO(t){return new Be(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RO(t){return new Be(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be(Ue.UNAUTHENTICATED,t)}function DO(){return new Be(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OO(t){return new Be(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LO(){return new Be(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VO(){return new Be(Ue.CANCELED,"User canceled the upload/download.")}function MO(t){return new Be(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function jO(t){return new Be(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function FO(){return new Be(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pI+"' property when initializing the app?")}function UO(){return new Be(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BO(){return new Be(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zO(t){return new Be(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mp(t){return new Be(Ue.INVALID_ARGUMENT,t)}function mI(){return new Be(Ue.APP_DELETED,"The Firebase app was deleted.")}function $O(t){return new Be(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oa(t,e){return new Be(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function la(t){throw new Be(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw jO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(V){V.path_=decodeURIComponent(V.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},R=n===fI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,L="([^?#]*)",x=new RegExp(`^https?://${R}/${s}/${L}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:A,indices:P,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let V=0;V<k.length;V++){const j=k[V],B=j.regex.exec(e);if(B){const _=B[j.indices.bucket];let y=B[j.indices.path];y||(y=""),r=new Jt(_,y),j.postModify(r);break}}if(r==null)throw MO(e);return r}}class WO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...L){c||(c=!0,e.apply(null,L))}function m(L){s=setTimeout(()=>{s=null,t(A,u())},L)}function g(){i&&clearTimeout(i)}function A(L,...x){if(c){g();return}if(L){g(),f.call(null,L,...x);return}if(u()||o){g(),f.call(null,L,...x);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let P=!1;function R(L){P||(P=!0,g(),!c&&(s!==null?(L||(l=2),clearTimeout(s),m(0)):L||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function qO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){return t!==void 0}function GO(t){return typeof t=="object"&&!Array.isArray(t)}function lg(t){return typeof t=="string"||t instanceof String}function z_(t){return ug()&&t instanceof Blob}function ug(){return typeof Blob<"u"}function $_(t,e,n,r){if(r<e)throw mp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw mp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ks;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ks||(Ks={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,s,i,o,l,u,c,f,m,g=!0,A=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,R)=>{this.resolve_=P,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new pu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Ks.NO_ERROR,u=i.getStatus();if(!l||QO(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ks.ABORT;r(!1,new pu(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new pu(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());KO(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=ag();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?mI():VO();o(u)}else{const u=LO();o(u)}};this.canceled_?n(!1,new pu(!1,null,!0)):this.backoffId_=HO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function eL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function tL(t,e,n,r,s,i,o=!0,l=!1){const u=gI(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return ZO(f,e),JO(f,n),XO(f,i),eL(f,r),new YO(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rL(...t){const e=nL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ug())return new Blob(t);throw new Be(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t){if(typeof atob>"u")throw zO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dh{constructor(e,n){this.data=e,this.contentType=n||null}}function oL(t,e){switch(t){case zn.RAW:return new Dh(yI(e));case zn.BASE64:case zn.BASE64URL:return new Dh(vI(t,e));case zn.DATA_URL:return new Dh(lL(e),uL(e))}throw ag()}function yI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aL(t){let e;try{e=decodeURIComponent(t)}catch{throw Oa(zn.DATA_URL,"Malformed data URL.")}return yI(e)}function vI(t,e){switch(t){case zn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Oa(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case zn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Oa(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iL(e)}catch(s){throw s.message.includes("polyfill")?s:Oa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class _I{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oa(zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=cL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lL(t){const e=new _I(t);return e.base64?vI(zn.BASE64,e.rest):aL(e.rest)}function uL(t){return new _I(t).contentType}function cL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){let r=0,s="";z_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(z_(this.data_)){const r=this.data_,s=sL(r,e,n);return s===null?null:new Wr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Wr(r,!0)}}static getBlob(...e){if(ug()){const n=e.map(r=>r instanceof Wr?r.data_:r);return new Wr(rL.apply(null,n))}else{const n=e.map(o=>lg(o)?oL(zn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Wr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){let e;try{e=JSON.parse(t)}catch{return null}return GO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function EI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t,e){return e}class Pt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||fL}}let mu=null;function pL(t){return!lg(t)||t.length<2?t:EI(t)}function TI(){if(mu)return mu;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(i,o){return pL(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Pt("size");return s.xform=r,t.push(s),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),mu=t,mu}function mL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function gL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return mL(r,t),r}function xI(t,e,n){const r=wI(e);return r===null?null:gL(t,r,n)}function yL(t,e,n,r){const s=wI(e);if(s===null||!lg(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),A=cg(g,n,r),P=gI({alt:"media",token:c});return A+P})[0]}function vL(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class II{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){if(!t)throw ag()}function _L(t,e){function n(r,s){const i=xI(t,s,e);return SI(i!==null),i}return n}function wL(t,e){function n(r,s){const i=xI(t,s,e);return SI(i!==null),yL(i,s,t.host,t._protocol)}return n}function kI(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=DO():s=NO():n.getStatus()===402?s=RO(t.bucket):n.getStatus()===403?s=OO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function EL(t){const e=kI(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=CO(t.path)),i.serverResponse=s.serverResponse,i}return n}function TL(t,e,n){const r=e.fullServerUrl(),s=cg(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new II(s,i,wL(t,n),o);return l.errorHandler=EL(e),l}function xL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function IL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=xL(null,e)),r}function SL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let V=0;V<2;V++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=IL(e,r,s),f=vL(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",A=Wr.getBlob(m,r,g);if(A===null)throw UO();const P={name:c.fullPath},R=cg(i,t.host,t._protocol),L="POST",x=t.maxUploadRetryTime,w=new II(R,L,_L(t,n),x);return w.urlParams=P,w.headers=o,w.body=A.uploadData(),w.errorHandler=kI(e),w}class kL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ks.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ks.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ks.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw la("cannot .send() more than once");if(ui(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw la("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw la("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw la("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw la("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AL extends kL{initXhr(){this.xhr_.responseType="text"}}function AI(){return new AL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ri(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return EI(this._location.path)}get storage(){return this._service}get parent(){const e=dL(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $O(e)}}function bL(t,e,n){t._throwIfRoot("uploadBytes");const r=SL(t.storage,t._location,TI(),new Wr(e,!0),n);return t.storage.makeRequestWithTokens(r,AI).then(s=>({metadata:s,ref:t}))}function PL(t){t._throwIfRoot("getDownloadURL");const e=TL(t.storage,t._location,TI());return t.storage.makeRequestWithTokens(e,AI).then(n=>{if(n===null)throw BO();return n})}function CL(t,e){const n=hL(t._location.path,e),r=new Jt(t._location.bucket,n);return new ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t){return/^[A-Za-z]+:\/\//.test(t)}function NL(t,e){return new ri(t,e)}function bI(t,e){if(t instanceof dg){const n=t;if(n._bucket==null)throw FO();const r=new ri(n,n._bucket);return e!=null?bI(r,e):r}else return e!==void 0?CL(t,e):t}function DL(t,e){if(e&&RL(e)){if(t instanceof dg)return NL(t,e);throw mp("To use ref(service, url), the first argument must be a Storage instance.")}else return bI(t,e)}function W_(t,e){const n=e==null?void 0:e[pI];return n==null?null:Jt.makeFromBucketSpec(n,t)}function OL(t,e,n,r={}){t.host=`${e}:${n}`;const s=ui(e);s&&vm(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:K0(i,t.app.options.projectId))}class dg{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=fI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bO,this._maxUploadRetryTime=PO,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=W_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=W_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ri(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new WO(mI());{const o=tL(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const H_="@firebase/storage",q_="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="storage";function LL(t,e,n){return t=Ee(t),bL(t,e,n)}function VL(t){return t=Ee(t),PL(t)}function ML(t,e){return t=Ee(t),DL(t,e)}function jL(t=vl(),e){t=Ee(t);const r=Er(t,PI).getImmediate({identifier:e}),s=W0("storage");return s&&FL(r,...s),r}function FL(t,e,n,r={}){OL(t,e,n,r)}function UL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new dg(n,r,s,e,ci)}function BL(){tn(new Ht(PI,UL,"PUBLIC").setMultipleInstances(!0)),xt(H_,q_,""),xt(H_,q_,"esm2020")}BL();const CI="@firebase/installations",hg="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=1e4,NI=`w:${hg}`,DI="FIS_v2",zL="https://firebaseinstallations.googleapis.com/v1",$L=60*60*1e3,WL="installations",HL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},si=new xs(WL,HL,qL);function OI(t){return t instanceof gn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI({projectId:t}){return`${zL}/projects/${t}/installations`}function VI(t){return{token:t.token,requestStatus:2,expiresIn:GL(t.expiresIn),creationTime:Date.now()}}async function MI(t,e){const r=(await e.json()).error;return si.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KL(t,{refreshToken:e}){const n=jI(t);return n.append("Authorization",QL(e)),n}async function FI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GL(t){return Number(t.replace("s","000"))}function QL(t){return`${DI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=LI(t),s=jI(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:DI,appId:t.appId,sdkVersion:NI},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await FI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:VI(c.authToken)}}else throw await MI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=/^[cdef][\w-]{21}$/,gp="";function ZL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=eV(t);return XL.test(n)?n:gp}catch{return gp}}function eV(t){return JL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Map;function zI(t,e){const n=bd(t);$I(n,e),tV(n,e)}function $I(t,e){const n=BI.get(t);if(n)for(const r of n)r(e)}function tV(t,e){const n=nV();n&&n.postMessage({key:t,fid:e}),rV()}let $s=null;function nV(){return!$s&&"BroadcastChannel"in self&&($s=new BroadcastChannel("[Firebase] FID Change"),$s.onmessage=t=>{$I(t.data.key,t.data.fid)}),$s}function rV(){BI.size===0&&$s&&($s.close(),$s=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV="firebase-installations-database",iV=1,ii="firebase-installations-store";let Oh=null;function fg(){return Oh||(Oh=id(sV,iV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}})),Oh}async function Dc(t,e){const n=bd(t),s=(await fg()).transaction(ii,"readwrite"),i=s.objectStore(ii),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&zI(t,e.fid),e}async function WI(t){const e=bd(t),r=(await fg()).transaction(ii,"readwrite");await r.objectStore(ii).delete(e),await r.done}async function Pd(t,e){const n=bd(t),s=(await fg()).transaction(ii,"readwrite"),i=s.objectStore(ii),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&zI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t){let e;const n=await Pd(t.appConfig,r=>{const s=oV(r),i=aV(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===gp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function oV(t){const e=t||{fid:ZL(),registrationStatus:0};return HI(e)}function aV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(si.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uV(t)}:{installationEntry:e}}async function lV(t,e){try{const n=await YL(t,e);return Dc(t.appConfig,n)}catch(n){throw OI(n)&&n.customData.serverCode===409?await WI(t.appConfig):await Dc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uV(t){let e=await K_(t.appConfig);for(;e.registrationStatus===1;)await UI(100),e=await K_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pg(t);return r||n}return e}function K_(t){return Pd(t,e=>{if(!e)throw si.create("installation-not-found");return HI(e)})}function HI(t){return cV(t)?{fid:t.fid,registrationStatus:0}:t}function cV(t){return t.registrationStatus===1&&t.registrationTime+RI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dV({appConfig:t,heartbeatServiceProvider:e},n){const r=hV(t,n),s=KL(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:NI,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await FI(()=>fetch(r,l));if(u.ok){const c=await u.json();return VI(c)}else throw await MI("Generate Auth Token",u)}function hV(t,{fid:e}){return`${LI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(t,e=!1){let n;const r=await Pd(t.appConfig,i=>{if(!qI(i))throw si.create("not-registered");const o=i.authToken;if(!e&&mV(o))return i;if(o.requestStatus===1)return n=fV(t,e),i;{if(!navigator.onLine)throw si.create("app-offline");const l=yV(i);return n=pV(t,l),l}});return n?await n:r.authToken}async function fV(t,e){let n=await G_(t.appConfig);for(;n.authToken.requestStatus===1;)await UI(100),n=await G_(t.appConfig);const r=n.authToken;return r.requestStatus===0?mg(t,e):r}function G_(t){return Pd(t,e=>{if(!qI(e))throw si.create("not-registered");const n=e.authToken;return vV(n)?{...e,authToken:{requestStatus:0}}:e})}async function pV(t,e){try{const n=await dV(t,e),r={...e,authToken:n};return await Dc(t.appConfig,r),n}catch(n){if(OI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await WI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Dc(t.appConfig,r)}throw n}}function qI(t){return t!==void 0&&t.registrationStatus===2}function mV(t){return t.requestStatus===2&&!gV(t)}function gV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$L}function yV(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function vV(t){return t.requestStatus===1&&t.requestTime+RI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _V(t){const e=t,{installationEntry:n,registrationPromise:r}=await pg(e);return r?r.catch(console.error):mg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV(t,e=!1){const n=t;return await EV(n),(await mg(n,e)).token}async function EV(t){const{registrationPromise:e}=await pg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TV(t){if(!t||!t.options)throw Lh("App Configuration");if(!t.name)throw Lh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Lh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Lh(t){return si.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="installations",xV="installations-internal",IV=t=>{const e=t.getProvider("app").getImmediate(),n=TV(e),r=Er(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},SV=t=>{const e=t.getProvider("app").getImmediate(),n=Er(e,KI).getImmediate();return{getId:()=>_V(n),getToken:s=>wV(n,s)}};function kV(){tn(new Ht(KI,IV,"PUBLIC")),tn(new Ht(xV,SV,"PRIVATE"))}kV();xt(CI,hg);xt(CI,hg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="analytics",AV="firebase_id",bV="origin",PV=60*1e3,CV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new sd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Zt=new xs("analytics","Analytics",RV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){if(!t.startsWith(gg)){const e=Zt.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function GI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function DV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function OV(t,e){const n=DV("firebase-js-sdk-policy",{createScriptURL:NV}),r=document.createElement("script"),s=`${gg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function LV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VV(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await GI(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){Nt.error(l)}t("config",s,i)}async function MV(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await GI(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Nt.error(i)}}function jV(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await MV(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await VV(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Nt.error(l)}}return s}function FV(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=jV(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function UV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BV=30,zV=1e3;class $V{constructor(e={},n=zV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const QI=new $V;function WV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HV(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:WV(n)},s=CV.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Zt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function qV(t,e=QI,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Zt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new QV;return setTimeout(async()=>{l.abort()},PV),YI({appId:r,apiKey:s,measurementId:i},o,l,e)}async function YI(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=QI){var l;const{appId:i,measurementId:o}=t;try{await KV(r,e)}catch(u){if(o)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await HV(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!GV(c)){if(s.deleteThrottleMetadata(i),o)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?yv(n,s.intervalMillis,BV):yv(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,m),Nt.debug(`Calling attemptFetch again in ${f} millis`),YI(t,m,r,s)}}function KV(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function GV(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class QV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function YV(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function JV(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XV(){if(nd())try{await rd()}catch(t){return Nt.warn(Zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Nt.warn(Zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZV(t,e,n,r,s,i,o){const l=qV(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Nt.error(g)),e.push(l);const u=XV().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);UV(i)||OV(i,c.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[bV]="firebase",m.update=!0,f!=null&&(m[AV]=f),s("config",c.measurementId,m),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.app=e}_delete(){return delete eo[this.app.options.appId],Promise.resolve()}}let eo={},Q_=[];const Y_={};let Vh="dataLayer",tM="gtag",J_,yg,X_=!1;function nM(){const t=[];if(gm()&&t.push("This is a browser extension environment."),ym()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Zt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function rM(t,e,n){nM();const r=t.options.appId;if(!r)throw Zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Zt.create("no-api-key");if(eo[r]!=null)throw Zt.create("already-exists",{id:r});if(!X_){LV(Vh);const{wrappedGtag:i,gtagCore:o}=FV(eo,Q_,Y_,Vh,tM);yg=i,J_=o,X_=!0}return eo[r]=ZV(t,Q_,Y_,e,J_,Vh,n),new eM(t)}function sM(t=vl()){t=Ee(t);const e=Er(t,Oc);return e.isInitialized()?e.getImmediate():iM(t)}function iM(t,e={}){const n=Er(t,Oc);if(n.isInitialized()){const s=n.getImmediate();if(fs(e,n.getOptions()))return s;throw Zt.create("already-initialized")}return n.initialize({options:e})}async function oM(){if(gm()||!ym()||!nd())return!1;try{return await rd()}catch{return!1}}function aM(t,e,n){t=Ee(t),JV(yg,eo[t.app.options.appId],e,n).catch(r=>Nt.error(r))}function lM(t,e,n,r){t=Ee(t),YV(yg,eo[t.app.options.appId],e,n,r).catch(s=>Nt.error(s))}const Z_="@firebase/analytics",ew="0.10.21";function uM(){tn(new Ht(Oc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return rM(r,s,n)},"PUBLIC")),tn(new Ht("analytics-internal",t,"PRIVATE")),xt(Z_,ew),xt(Z_,ew,"esm2020");function t(e){try{const n=e.getProvider(Oc).getImmediate();return{logEvent:(r,s,i)=>lM(n,r,s,i),setUserProperties:(r,s)=>aM(n,r,s)}}catch(n){throw Zt.create("interop-component-reg-failed",{reason:n})}}}uM();const cM={apiKey:"AIzaSyAUjtOS3DdjsRxzZqxCidu3dGm4aOfPY1E",authDomain:"inaare-consulting.firebaseapp.com",projectId:"inaare-consulting",storageBucket:"inaare-consulting.firebasestorage.app",messagingSenderId:"55649247758",appId:"1:55649247758:web:24d97244b7790cd722125f",measurementId:"G-0X1Q8BXJTQ"},Al=Y0(cM);typeof window<"u"?oM().then(t=>t?sM(Al):null):Promise.resolve(null);const Se=mO(Al),Lc=o1(Al),dM=jL(Al),JI=N.createContext(null),gu="inaare_admin_auth",hM=({children:t})=>{const[e,n]=N.useState(()=>{const f=localStorage.getItem(gu);return f?JSON.parse(f):null}),[r,s]=N.useState(null),[i,o]=N.useState(!0);N.useEffect(()=>{const f=TT(Lc,m=>{s(m),m||(n(null),localStorage.removeItem(gu)),o(!1)});return()=>f()},[]);const l=f=>{n(f),localStorage.setItem(gu,JSON.stringify(f))},u=async()=>{await QR(Lc),n(null),localStorage.removeItem(gu)},c=N.useMemo(()=>({auth:e,token:e==null?void 0:e.token,user:e==null?void 0:e.user,firebaseUser:r,authLoading:i,isAuthenticated:!!r,login:l,logout:u}),[e,r,i]);return d.jsx(JI.Provider,{value:c,children:t})},vg=()=>{const t=N.useContext(JI);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},fM=({children:t})=>{const{isAuthenticated:e,authLoading:n}=vg();return n?d.jsx("section",{className:"section-shell",children:d.jsx("p",{className:"text-muted",children:"Checking secure session..."})}):e?t:d.jsx(hc,{to:"/admin/login",replace:!0})},pM={"Coaching and Mentorship":"◉","Leadership Development":"△","Governance Advisory":"▣","Strategy Design & Execution":"◆","Effective Supply Chain":"⬢"},XI=({title:t,description:e})=>{const n=N.useRef(null),r=i=>{const o=n.current;if(!o)return;const l=o.getBoundingClientRect(),u=i.clientX-l.left,f=((i.clientY-l.top)/l.height-.5)*-3,m=(u/l.width-.5)*3;o.style.transform=`perspective(1200px) rotateX(${f}deg) rotateY(${m}deg)`},s=()=>{n.current&&(n.current.style.transform="perspective(1200px) rotateX(0deg) rotateY(0deg)")};return d.jsxs("article",{ref:n,className:"premium-card service-tilt h-full",onMouseMove:r,onMouseLeave:s,children:[d.jsx("span",{className:"inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-ink/70 text-lg text-gold",children:pM[t]||"◈"}),d.jsx("h3",{className:"mt-5 font-serif text-2xl text-ivory",children:t}),d.jsx("p",{className:"text-measure mt-3 leading-relaxed text-muted",children:e})]})},mM=({end:t,suffix:e="",label:n})=>{const[r,s]=N.useState(0);return N.useEffect(()=>{let i=0;const l=Math.max(18,Math.floor(1400/t)),u=setInterval(()=>{i+=1,s(i),i>=t&&clearInterval(u)},l);return()=>clearInterval(u)},[t]),d.jsxs("article",{className:"premium-card text-center",children:[d.jsxs("p",{className:"font-serif text-5xl font-bold text-gold",children:[r,e]}),d.jsx("p",{className:"mt-3 text-sm uppercase tracking-[0.18em] text-muted",children:n})]})},ve=({children:t,className:e="",delay:n=0})=>{const r=N.useRef(null),[s,i]=N.useState(!1);return N.useEffect(()=>{const o=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&(i(!0),o.disconnect())})},{threshold:.15});return r.current&&o.observe(r.current),()=>o.disconnect()},[]),d.jsx("div",{ref:r,className:`reveal ${s?"reveal-visible":""} ${e}`,style:{transitionDelay:`${n}ms`},children:t})},yu={home:{headline:"Rebirthing Lives. Building Generational Greatness.",subtext:"We reshape leaders, rebuild systems, and restore value—transforming individuals and organizations into scalable, resilient engines of measurable impact across diverse markets."},about:{description:"We are a leadership and transformation advisory firm committed to restoring value, shaping perspective, and building enduring systems across diverse markets."},services:{description:"Outcome-focused advisory and development services designed to strengthen leadership, institutions, and execution excellence."}},ZI=N.createContext(null),gM=({children:t})=>{const[e,n]=N.useState(yu),[r,s]=N.useState(!1),i=async()=>{try{s(!0);const l=await cs(Xe(Se,"content","homepage")),u=l.data(),[c,f]=await Promise.all([cs(Xe(Se,"content","about")),cs(Xe(Se,"content","services"))]);n({home:{...yu.home,...l.exists()?u:{}},about:{...yu.about,...c.exists()?c.data():{}},services:{...yu.services,...f.exists()?f.data():{}}})}catch{}finally{s(!1)}};N.useEffect(()=>{i()},[]);const o=N.useMemo(()=>({content:e,setContent:n,refreshContent:i,loading:r}),[e,r]);return d.jsx(ZI.Provider,{value:o,children:t})},_g=()=>{const t=N.useContext(ZI);if(!t)throw new Error("useSiteContent must be used within SiteContentProvider");return t},yM=()=>{var e,n;const{content:t}=_g();return d.jsxs(d.Fragment,{children:[d.jsx("section",{className:"hero-cinematic overflow-hidden border-b border-gold/10",children:d.jsxs("div",{className:"section-shell relative z-10 flex min-h-[calc(100vh-84px)] flex-col justify-center",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.32em] text-gold",children:"Inaare Consulting Group"}),d.jsx("h1",{className:"hero-headline mt-5 max-w-5xl animate-fadeUp font-serif text-4xl font-bold text-ivory md:text-7xl",children:((e=t.home)==null?void 0:e.headline)||"Rebirthing Lives. Building Generational Greatness."}),d.jsx("p",{className:"text-measure mt-7 animate-fadeUp text-lg text-muted md:text-xl",style:{animationDelay:"140ms"},children:((n=t.home)==null?void 0:n.subtext)||"We reshape leaders, rebuild systems, and restore value—transforming individuals and organizations into scalable, resilient engines of measurable impact across diverse markets."}),d.jsxs("div",{className:"mt-12 flex flex-wrap gap-4 animate-fadeUp",style:{animationDelay:"260ms"},children:[d.jsx(uo,{to:"/booking",className:"premium-btn-primary",children:"Schedule a Strategic Consultation"}),d.jsx("a",{href:"#what-we-do",className:"premium-btn-secondary",children:"Explore Strategic Services"})]})]})}),d.jsxs("section",{id:"what-we-do",className:"section-shell",children:[d.jsxs(ve,{children:[d.jsx("h2",{className:"font-serif text-4xl font-bold text-ivory md:text-6xl",children:"What We Do"}),d.jsx("p",{className:"text-measure mt-4 text-lg text-muted",children:"From personal leadership renewal to enterprise transformation, we deliver integrated advisory and development solutions."})]}),d.jsx("div",{className:"mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:F0.map(r=>d.jsx(ve,{children:d.jsx(XI,{title:r.title,description:r.description})},r.title))})]}),d.jsx("section",{className:"section-shell pt-0",children:d.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[d.jsx(ve,{children:d.jsxs("div",{className:"premium-card h-full",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Who We Work With"}),d.jsx("h3",{className:"mt-3 font-serif text-3xl text-ivory",children:"Trusted by Decision-Makers"}),d.jsx("ul",{className:"mt-6 space-y-3 text-muted",children:oP.map(r=>d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"mt-2 h-1.5 w-1.5 rounded-full bg-gold"}),d.jsx("span",{children:r})]},r))})]})}),d.jsx(ve,{delay:80,children:d.jsxs("div",{className:"premium-card h-full",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"What We Deliver"}),d.jsx("h3",{className:"mt-3 font-serif text-3xl text-ivory",children:"Outcomes That Endure"}),d.jsx("ul",{className:"mt-6 space-y-3 text-muted",children:aP.map(r=>d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"mt-2 h-1.5 w-1.5 rounded-full bg-gold"}),d.jsx("span",{children:r})]},r))})]})})]})}),d.jsx("section",{className:"section-shell pt-0",children:d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch",children:[d.jsx(ve,{children:d.jsx("div",{className:"flex h-full items-center rounded-3xl border border-gold/30 bg-charcoal/60 px-8 py-10 shadow-soft md:px-10 md:py-12",children:d.jsx("p",{className:"font-serif text-3xl leading-tight text-ivory md:text-5xl",children:"Making people GREAT, WEALTHY & IMPACTFUL across diverse markets."})})}),d.jsxs("div",{className:"grid gap-4",children:[d.jsx(ve,{delay:80,children:d.jsx("div",{className:"h-full",children:d.jsx(mM,{end:25,suffix:"+",label:"Years Experience"})})}),d.jsx(ve,{delay:120,children:d.jsxs("article",{className:"premium-card h-full text-center",children:[d.jsx("p",{className:"font-serif text-3xl font-bold text-gold md:text-4xl",children:"Diverse Markets"}),d.jsx("p",{className:"mt-3 text-base leading-relaxed text-muted",children:"Working with leaders and organizations across Africa and globally."})]})})]})]})}),d.jsx("section",{className:"section-shell triangle-bg pt-8",children:d.jsxs("div",{className:"grid gap-8 rounded-3xl border border-gold/20 bg-charcoal/55 p-8 md:grid-cols-[1fr_1.1fr] md:p-12",children:[d.jsx(ve,{children:d.jsx("div",{className:"gold-ring mx-auto w-fit self-start overflow-hidden rounded-2xl border border-gold/25 bg-ink/70 p-4 sm:p-5",children:d.jsx("img",{src:"/ekyengo1.jpg",alt:"Inaare Consulting Group founder",className:"mx-auto h-[320px] w-auto object-contain sm:h-[360px] md:h-[420px]"})})}),d.jsxs(ve,{delay:120,children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Founder Highlight"}),d.jsx("h3",{className:"mt-3 font-serif text-4xl font-bold text-ivory",children:Fr.name}),d.jsx("p",{className:"mt-4 text-lg text-muted",children:Fr.summary}),d.jsxs("blockquote",{className:"mt-6 border-l-2 border-gold/60 pl-4 font-serif text-2xl italic text-ivory/95 md:sticky md:top-28",children:["“",Fr.quote,"”"]})]})]})}),d.jsxs("section",{className:"section-shell pt-0",children:[d.jsxs(ve,{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Executive Testimonials"}),d.jsx("h3",{className:"mt-3 font-serif text-4xl text-ivory md:text-5xl",children:"What Leaders Say"})]}),d.jsx("div",{className:"mt-8 grid gap-6 lg:grid-cols-3",children:lP.map((r,s)=>d.jsx(ve,{delay:s*90,children:d.jsxs("article",{className:"premium-card h-full",children:[d.jsxs("p",{className:"text-lg italic text-ivory/95",children:["“",r.quote,"”"]}),d.jsx("p",{className:"mt-6 text-sm uppercase tracking-[0.12em] text-muted",children:r.attribution})]})},r.attribution))})]}),d.jsx("section",{className:"section-shell pt-0",children:d.jsxs("div",{className:"rounded-3xl border border-gold/20 bg-gradient-to-r from-charcoal to-ink px-8 py-14 text-center",children:[d.jsx("h3",{className:"font-serif text-3xl font-bold text-ivory md:text-5xl",children:"Begin Your Transformation Journey"}),d.jsx("p",{className:"mt-4 text-sm uppercase tracking-[0.18em] text-muted",children:"Strategic advisory excellence."}),d.jsx(uo,{to:"/booking",className:"premium-btn-primary mt-8",children:"Schedule a Strategic Consultation"})]})})]})},vM=()=>{var t;return d.jsx("section",{className:"section-shell",children:d.jsxs("div",{className:"relative grid gap-8 overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/50 p-8 md:grid-cols-[1fr_1.15fr] md:p-12",children:[d.jsx("div",{className:"pointer-events-none absolute -top-10 left-4 h-24 w-24 border border-gold/30 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx("div",{className:"pointer-events-none absolute -bottom-10 right-6 h-28 w-28 border border-gold/20 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx(ve,{className:"self-start overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-charcoal to-ink p-3",children:d.jsx("div",{className:"gold-ring overflow-hidden rounded-xl border border-gold/25 bg-ink/60",children:d.jsx("img",{src:"/ekyengo.JPG",alt:`${Fr.name} portrait`,className:"h-full min-h-[360px] w-full object-cover object-top"})})}),d.jsxs(ve,{delay:120,children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory md:text-6xl",children:"Leadership that Builds Legacy"}),d.jsx("p",{className:"text-measure mt-6 text-lg text-muted",children:Fr.summary}),d.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:(t=Fr.certifications)==null?void 0:t.map(e=>d.jsx("span",{className:"rounded-full border border-gold/35 bg-ink/50 px-3 py-1 text-xs uppercase tracking-[0.16em] text-gold",children:e},e))}),d.jsx("ul",{className:"mt-8 space-y-3 text-muted",children:Fr.highlights.map(e=>d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"mt-2 h-1.5 w-1.5 rounded-full bg-gold"}),d.jsx("span",{children:e})]},e))}),d.jsxs("blockquote",{className:"mt-10 rounded-r-[16px] border-l-2 border-gold/70 bg-ink/45 px-5 py-6 font-serif text-2xl italic text-ivory/95 md:sticky md:top-28",children:[d.jsx("span",{className:"mr-1 text-4xl leading-none text-gold/80",children:"“"}),Fr.quote,d.jsx("span",{className:"ml-1 text-4xl leading-none text-gold/80",children:"”"})]})]})]})})},Po=({title:t,description:e})=>d.jsxs("section",{className:"section-shell page-intro-soft pb-6",children:[d.jsx("p",{className:"mb-3 text-xs uppercase tracking-[0.3em] text-gold",children:"Inaare Consulting Group"}),d.jsx("h1",{className:"font-serif text-4xl font-bold text-ivory md:text-6xl",children:t}),d.jsx("p",{className:"text-measure mt-6 text-lg text-muted",children:e})]}),_M=["Trust","Responsibility","Partnerships","Accountability"],wM=()=>{var e;const{content:t}=_g();return d.jsxs(d.Fragment,{children:[d.jsx(Po,{title:"About Inaare Consulting Group",description:((e=t.about)==null?void 0:e.description)||"We are a leadership and transformation advisory firm committed to restoring value, shaping perspective, and building enduring systems across diverse markets."}),d.jsx("section",{className:"section-shell pt-4",children:d.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[d.jsx(ve,{children:d.jsxs("article",{className:"premium-card",children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory",children:"Who We Are"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"Inaare Consulting Group equips leaders, families, and organizations to evolve into resilient engines of progress. We combine strategic discipline, governance clarity, and leadership coaching to unlock excellence that compounds over generations."})]})}),d.jsx(ve,{delay:80,children:d.jsxs("article",{className:"premium-card",children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory",children:"Vision"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"To make people GREAT, WEALTHY & IMPACTFUL across diverse markets."})]})}),d.jsx(ve,{delay:120,children:d.jsxs("article",{className:"premium-card",children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory",children:"Mission"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"To Rebuild broken Links, Reshape Perspectives and Restore Values and Value Systems to individuals and organizations."})]})}),d.jsx(ve,{delay:160,children:d.jsxs("article",{className:"premium-card",children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory",children:"Promise"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"To Transcend Generations to Transgenerational Greatness through PARADIGM shift."})]})})]})}),d.jsx("section",{className:"section-shell pt-4",children:d.jsx(ve,{children:d.jsxs("div",{className:"premium-card",children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory",children:"Core Values"}),d.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",children:_M.map(n=>d.jsx("div",{className:"rounded-xl border border-gold/20 bg-ink/40 px-4 py-4 text-center text-ivory",children:n},n))})]})})}),d.jsx(vM,{})]})},EM=()=>{var e;const{content:t}=_g();return d.jsxs(d.Fragment,{children:[d.jsx(Po,{title:"Services",description:((e=t.services)==null?void 0:e.description)||"Outcome-focused advisory and development services designed to strengthen leadership, institutions, and execution excellence."}),d.jsx("section",{className:"section-shell pt-4",children:d.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:F0.map((n,r)=>d.jsx(ve,{delay:r*70,children:d.jsx(XI,{title:n.title,description:n.description})},n.title))})})]})},TM=()=>d.jsxs(d.Fragment,{children:[d.jsx(Po,{title:"Transformational Programs",description:"Signature programs engineered to reshape character, strengthen families, and expand cross-generational prosperity."}),d.jsxs("section",{className:"section-shell pt-4",children:[d.jsxs("div",{className:"relative pl-10",children:[d.jsx("div",{className:"timeline-line"}),d.jsx("div",{className:"space-y-6",children:sP.map((t,e)=>d.jsx(ve,{delay:e*100,children:d.jsxs("article",{className:"premium-card relative ml-2",children:[d.jsx("span",{className:"absolute -left-[38px] top-7 h-4 w-4 rounded-full border-2 border-gold bg-ink"}),d.jsxs("p",{className:"text-xs uppercase tracking-[0.18em] text-gold",children:["Program ",e+1]}),d.jsx("h3",{className:"mt-2 font-serif text-2xl font-bold text-ivory",children:t})]})},t))})]}),d.jsx("div",{className:"mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-8 text-center",children:d.jsx("p",{className:"font-serif text-3xl text-ivory md:text-4xl",children:"Advancing cross-generational wealth capability at scale."})})]})]}),Mh=(t,e)=>({id:t.id||e,title:t.title||"Untitled Publication",description:t.description||(typeof t.content=="string"&&t.content.trim().length>0?`${t.content.trim().slice(0,180)}...`:"Executive insight for leaders building durable character, strategy, and generational value."),category:t.category||"Thought Leadership",content:t.content||"",pdfUrl:t.pdfUrl||"",date:t.date||null,createdAt:t.createdAt||null,updatedAt:t.updatedAt||null}),yp=t=>{var e;return t!=null&&t.date?t.date:t!=null&&t.createdAt&&typeof((e=t.createdAt)==null?void 0:e.toDate)=="function"?t.createdAt.toDate():(t==null?void 0:t.createdAt)||null},xM=t=>[...t].sort((e,n)=>{const r=yp(e),s=yp(n),i=new Date(r||0).getTime()||0;return(new Date(s||0).getTime()||0)-i}),eS=async()=>{try{const t=await Da(Yr(Se,"publications")),e=[];if(t.forEach(n=>{e.push(Mh(n.data()||{},n.id))}),e.length>0)return xM(e)}catch{}return iP.map((t,e)=>typeof t=="string"?Mh({id:`publication-${e+1}`,title:t,description:"Executive insight for leaders building durable character, strategy, and generational value.",category:"Thought Leadership"}):Mh(t,t.id||`publication-${e+1}`))},IM=()=>{const[t,e]=N.useState([]);return N.useEffect(()=>{(async()=>{const r=await eS();e(r)})()},[]),d.jsxs(d.Fragment,{children:[d.jsx(Po,{title:"Publications",description:"Thought leadership publications shaping governance, character, and enterprise continuity."}),d.jsx("section",{className:"section-shell pt-4",children:d.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:t.map((n,r)=>d.jsx(ve,{delay:r*80,children:d.jsx("article",{className:"premium-card h-full p-0",children:d.jsxs(uo,{to:`/publications/${n.id}`,className:"block h-full rounded-[16px] p-6 transition duration-500 hover:bg-ink/30",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.18em] text-gold",children:n.category}),d.jsx("h3",{className:"mt-4 font-serif text-3xl font-bold text-ivory",children:n.title}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:n.description}),d.jsx("p",{className:"mt-6 text-xs uppercase tracking-[0.16em] text-gold/80",children:"Read Insight"})]})})},n.id))})})]})},SM=t=>{if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})},kM=()=>{const{id:t}=kb(),[e,n]=N.useState([]),[r,s]=N.useState(!1);N.useEffect(()=>{(async()=>{const c=await eS();n(c),s(!0)})()},[]);const i=N.useMemo(()=>e.find(u=>u.id===t),[e,t]);if(!r)return d.jsx("section",{className:"section-shell pt-8",children:d.jsx("div",{className:"mx-auto h-48 w-full max-w-4xl animate-pulse rounded-[16px] border border-gold/15 bg-charcoal/40"})});if(!i)return d.jsx(hc,{to:"/publications",replace:!0});const o=i.content?i.content.split(/\n\s*\n/).map(u=>u.trim()).filter(Boolean):[],l=yp(i);return d.jsx("section",{className:"section-shell pt-8",children:d.jsxs("div",{className:"mx-auto w-full max-w-4xl",children:[d.jsxs(ve,{children:[d.jsx(uo,{to:"/publications",className:"inline-flex items-center text-xs uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-ivory",children:"← Back to Publications"}),d.jsxs("header",{className:"mt-8 border-b border-gold/15 pb-8",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:i.category}),d.jsx("h1",{className:"mt-4 font-serif text-4xl font-bold text-ivory md:text-6xl",children:i.title}),l&&d.jsx("p",{className:"mt-4 text-sm uppercase tracking-[0.12em] text-muted",children:SM(l)})]})]}),o.length>0&&d.jsx(ve,{delay:90,children:d.jsx("article",{className:"publication-prose mt-10 space-y-6 text-lg leading-relaxed text-muted",children:o.map(u=>d.jsx("p",{children:u},u))})}),o.length===0&&i.pdfUrl&&d.jsx(ve,{delay:140,children:d.jsxs("section",{className:"mt-12 rounded-[16px] border border-gold/20 bg-charcoal/50 p-4 md:p-6",children:[d.jsx("h2",{className:"font-serif text-2xl text-ivory",children:"Publication PDF"}),d.jsx("iframe",{src:i.pdfUrl,title:`${i.title} PDF`,className:"mt-4 h-[70vh] w-full rounded-[12px] border border-gold/15 bg-ink"})]})})]})})},tw=t=>String(t).padStart(2,"0"),jh=t=>{if(!(t instanceof Date)||Number.isNaN(t.getTime()))return"";const e=t.getFullYear(),n=tw(t.getMonth()+1),r=tw(t.getDate());return`${e}-${n}-${r}`},Ne=t=>{if(!t)return"";if(typeof(t==null?void 0:t.toDate)=="function")return jh(t.toDate());if(t instanceof Date)return jh(t);if(typeof t=="string"){const e=t.trim();if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const n=new Date(e);return jh(n)}return""},Hr=(t=[])=>Array.from(new Set(t.map(e=>Ne(e)).filter(Boolean))),AM=["09:00 AM","10:30 AM","12:00 PM","02:00 PM","03:30 PM","05:00 PM"],bM=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],nw=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()),rw=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),sw=t=>t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),PM=t=>{const e=t.getFullYear(),n=t.getMonth(),r=new Date(e,n,1),s=new Date(e,n+1,0).getDate(),i=[];for(let o=0;o<r.getDay();o+=1)i.push(null);for(let o=1;o<=s;o+=1)i.push(new Date(e,n,o));for(;i.length%7!==0;)i.push(null);return i},CM=({onConfirm:t,bookedSlots:e=[],calendarSettings:n})=>{var B;const r=N.useMemo(()=>nw(new Date),[]),[s,i]=N.useState(new Date(r.getFullYear(),r.getMonth(),1)),[o,l]=N.useState(null),[u,c]=N.useState(""),f=(B=n==null?void 0:n.availableSlots)!=null&&B.length?n.availableSlots:AM,m=N.useMemo(()=>PM(s),[s]),g=N.useMemo(()=>new Set(e.filter(_=>(_==null?void 0:_.dateISO)&&(_==null?void 0:_.time)).map(_=>`${_.dateISO}__${_.time}`)),[e]),A=N.useMemo(()=>new Set(Hr((n==null?void 0:n.blockedDays)||[])),[n==null?void 0:n.blockedDays]),P=N.useMemo(()=>new Set(((n==null?void 0:n.blockedSlots)||[]).filter(_=>(_==null?void 0:_.dateISO)&&(_==null?void 0:_.time)).map(_=>`${_.dateISO}__${_.time}`)),[n==null?void 0:n.blockedSlots]),R=s.toLocaleDateString("en-US",{month:"long",year:"numeric"}),L=o&&u?`${sw(o)}, ${u}`:"No date selected yet",x=!!(o&&u),w=_=>{i(y=>new Date(y.getFullYear(),y.getMonth()+_,1))},k=_=>{l(_),c("")},V=(_,y)=>!!(A.has(_)||P.has(`${_}__${y}`)||g.has(`${_}__${y}`)),j=()=>{x&&(t==null||t({date:o,dateLabel:sw(o),isoDate:Ne(o),time:u}))};return d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8",children:[d.jsxs("div",{className:"premium-card",children:[d.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-gold",children:"Step 1"}),d.jsx("p",{className:"mt-1 text-sm uppercase tracking-[0.2em] text-gold",children:"Select Date"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{type:"button",className:"rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory transition hover:bg-gold/10",onClick:()=>w(-1),"aria-label":"Previous month",children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory transition hover:bg-gold/10",onClick:()=>w(1),"aria-label":"Next month",children:"Next"})]})]}),d.jsx("div",{className:"mb-4 rounded-xl border border-gold/20 bg-ink/35 px-4 py-3 text-center",children:d.jsx("p",{className:"font-serif text-xl text-ivory",children:R})}),d.jsxs("div",{className:"grid grid-cols-7 gap-1.5 text-center sm:gap-2",children:[bM.map(_=>d.jsx("p",{className:"pb-1 text-xs uppercase tracking-[0.16em] text-muted",children:_},_)),m.map((_,y)=>{if(!_)return d.jsx("div",{className:"h-12 rounded-lg","aria-hidden":"true"},`empty-${y}`);const E=nw(_),S=E<r,b=rw(E,r),C=o?rw(E,o):!1,T=Ne(E),me=f.every(At=>V(T,At)),kt=S||me;return d.jsx("button",{type:"button",disabled:kt,onClick:()=>k(E),className:`h-11 rounded-lg border text-sm font-medium transition sm:h-12 ${C?"border-gold bg-gold/20 text-ivory shadow-lg shadow-gold/10":kt?"cursor-not-allowed border-gold/10 text-muted/40":"border-gold/20 text-muted hover:border-gold/60 hover:bg-gold/10 hover:text-ivory"} ${b?"ring-1 ring-gold/60":""}`,children:E.getDate()},E.toISOString())})]})]}),d.jsxs("div",{className:"premium-card",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-gold",children:"Step 2"}),d.jsx("p",{className:"mt-1 text-sm uppercase tracking-[0.2em] text-gold",children:"Select Time"})]}),!o&&d.jsx("p",{className:"mt-4 rounded-xl border border-gold/20 bg-ink/35 px-4 py-3 text-sm text-muted",children:"Select a date first to view available time slots."}),d.jsx("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",children:f.map(_=>{const y=u===_,E=o?Ne(o):"",S=o?V(E,_):!1;return d.jsx("button",{type:"button",disabled:!o||S,onClick:()=>c(_),className:`min-h-[48px] rounded-lg border px-4 py-3 text-sm transition ${y?"border-gold bg-gold/20 text-ivory shadow-lg shadow-gold/10":!o||S?"cursor-not-allowed border-gold/10 text-muted/40":"border-gold/20 text-muted hover:border-gold/60 hover:bg-gold/10 hover:text-ivory"}`,children:_},_)})}),d.jsxs("div",{className:"mt-6",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.22em] text-gold",children:"Step 3"}),d.jsxs("div",{className:"mt-2 rounded-xl border border-gold/20 bg-ink/40 p-4 text-sm text-muted transition",children:["Selected: ",L]})]}),d.jsx("button",{type:"button",className:"premium-btn-primary mt-5 w-full",disabled:!x,onClick:j,children:"Confirm Date & Time"})]})]})},iw={availableSlots:["09:00 AM","10:30 AM","12:00 PM","02:00 PM","03:30 PM","05:00 PM"],blockedDays:[],blockedSlots:[]},RM=()=>{const[t,e]=N.useState(!1),[n,r]=N.useState("No date selected yet"),[s,i]=N.useState(null),[o,l]=N.useState({name:"",email:"",phone:"",purpose:""}),[u,c]=N.useState(iw),[f,m]=N.useState([]),[g,A]=N.useState(!1),[P,R]=N.useState({type:"",message:""});N.useEffect(()=>{(async()=>{var B,_;try{const[y,E,S]=await Promise.all([Da(Yr(Se,"bookings")),cs(Xe(Se,"availability","main")),cs(Xe(Se,"blockedSlots","main"))]),b=[];y.forEach(C=>{const T=C.data(),me=Ne((T==null?void 0:T.dateISO)||(T==null?void 0:T.date));me&&(T!=null&&T.time)&&b.push({dateISO:me,time:T.time})}),m(b),c({...iw,...E.exists()?E.data():{},...S.exists()?S.data():{},blockedDays:Hr((E.exists()?(B=E.data())==null?void 0:B.blockedDays:[])||[]),blockedSlots:((S.exists()?(_=S.data())==null?void 0:_.blockedSlots:[])||[]).map(C=>({dateISO:Ne(C==null?void 0:C.dateISO),time:(C==null?void 0:C.time)||""})).filter(C=>C.dateISO&&C.time)})}catch{}})()},[]);const L=N.useMemo(()=>new Set([...(u.blockedSlots||[]).map(j=>`${j.dateISO}__${j.time}`),...f.map(j=>`${j.dateISO}__${j.time}`)]),[u.blockedSlots,f]),x=({dateLabel:j,isoDate:B,time:_})=>{i({dateLabel:j,isoDate:B,time:_}),r(`${j}, ${_}`),e(!1)},w=j=>{const{name:B,value:_}=j.target;l(y=>({...y,[B]:_}))},k=async j=>{try{await hI(Yr(Se,"bookings"),{...j,status:"pending",createdAt:tr()}),alert("Booking submitted!")}catch(B){throw console.error(B),B}},V=async j=>{if(j.preventDefault(),R({type:"",message:""}),!s){R({type:"error",message:"Please select a consultation date and time."});return}const B=Ne(s.isoDate),_=Hr(u.blockedDays||[]).includes(B),y=L.has(`${B}__${s.time}`);if(_||y){R({type:"error",message:"Selected slot is no longer available. Please choose another."});return}try{A(!0),await k({name:o.name,email:o.email,phone:o.phone,date:s.dateLabel,dateISO:B,time:s.time,purpose:o.purpose}),R({type:"success",message:"Booking submitted successfully. We will contact you shortly."}),l({name:"",email:"",phone:"",purpose:""}),m(E=>[...E,{dateISO:B,time:s.time}]),i(null),r("No date selected yet")}catch(E){R({type:"error",message:E.message})}finally{A(!1)}};return d.jsxs(d.Fragment,{children:[d.jsx(Po,{title:"Booking",description:"Reserve a confidential advisory session with Inaare Consulting Group through our strategic consultation scheduler. Secure your preferred time and we will prepare a focused agenda for your goals."}),d.jsxs("section",{className:"section-shell pt-4",children:[d.jsx(ve,{children:d.jsxs("div",{className:"premium-card flex flex-col gap-6 md:flex-row md:items-center md:justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.18em] text-gold",children:"Calendar Integration UI"}),d.jsxs("p",{className:"mt-2 text-lg text-muted",children:["Selected slot: ",n]}),d.jsx("p",{className:"mt-2 text-sm uppercase tracking-[0.14em] text-muted",children:"Strategic advisory scheduling"})]}),d.jsx("button",{type:"button",className:"premium-btn-primary",onClick:()=>e(!0),children:"Schedule a Strategic Consultation"})]})}),d.jsx(ve,{delay:120,children:d.jsxs("form",{className:"premium-card mt-8 grid gap-4 md:grid-cols-2",onSubmit:V,children:[d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"name",children:"Name"}),d.jsx("input",{id:"name",name:"name",type:"text",className:"premium-input",placeholder:"Your full name",value:o.name,onChange:w,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"email",children:"Email"}),d.jsx("input",{id:"email",name:"email",type:"email",className:"premium-input",placeholder:"you@example.com",value:o.email,onChange:w,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"phone",children:"Phone"}),d.jsx("input",{id:"phone",name:"phone",type:"tel",className:"premium-input",placeholder:"+254 700 000 000",value:o.phone,onChange:w,required:!0})]}),d.jsxs("div",{className:"md:col-span-2",children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"purpose",children:"Purpose of consultation"}),d.jsx("textarea",{id:"purpose",name:"purpose",rows:"4",className:"premium-textarea",placeholder:"Tell us what you would like to address",value:o.purpose,onChange:w,required:!0})]}),P.message&&d.jsx("div",{className:"md:col-span-2",children:d.jsx("p",{className:`text-sm ${P.type==="success"?"text-emerald-300":"text-red-300"}`,children:P.message})}),d.jsx("div",{className:"md:col-span-2",children:d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:g,children:g?"Submitting...":"Schedule a Strategic Consultation"})})]})}),t&&d.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-ink/75 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-gold/30 bg-charcoal p-6 md:p-8",children:[d.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory",children:"Select Consultation Slot"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory hover:bg-gold/10",onClick:()=>e(!1),children:"Close"})]}),d.jsx(CM,{onConfirm:x,bookedSlots:f,calendarSettings:u})]})})]})]})},NM=()=>{const[t,e]=N.useState({name:"",email:"",phone:"",message:""}),[n,r]=N.useState(!1),[s,i]=N.useState({type:"",message:""}),o=u=>{const{name:c,value:f}=u.target;e(m=>({...m,[c]:f}))},l=async u=>{u.preventDefault(),i({type:"",message:""});const{name:c,email:f,phone:m,message:g}=t;try{r(!0),await hI(Yr(Se,"messages"),{name:c,email:f,phone:m,message:g,createdAt:tr()}),i({type:"success",message:"Message sent successfully. We will respond shortly."}),e({name:"",email:"",phone:"",message:""})}catch(A){i({type:"error",message:A.message})}finally{r(!1)}};return d.jsxs(d.Fragment,{children:[d.jsx(Po,{title:"Contact",description:"Connect with Inaare Consulting Group for partnerships, strategic conversations, and transformational engagements. We respond with clarity, discretion, and urgency."}),d.jsx("section",{className:"section-shell pt-4",children:d.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1.2fr_1fr]",children:[d.jsx(ve,{children:d.jsxs("form",{className:"premium-card space-y-4",onSubmit:l,children:[d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"contact-name",children:"Name"}),d.jsx("input",{id:"contact-name",name:"name",type:"text",className:"premium-input",placeholder:"Your name",value:t.name,onChange:o,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"contact-email",children:"Email"}),d.jsx("input",{id:"contact-email",name:"email",type:"email",className:"premium-input",placeholder:"you@example.com",value:t.email,onChange:o,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"contact-phone",children:"Phone"}),d.jsx("input",{id:"contact-phone",name:"phone",type:"tel",className:"premium-input",placeholder:"+254 700 000 000",value:t.phone,onChange:o,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",htmlFor:"message",children:"Message"}),d.jsx("textarea",{id:"message",name:"message",rows:"5",className:"premium-textarea",placeholder:"How can we support your goals?",value:t.message,onChange:o,required:!0})]}),s.message&&d.jsx("p",{className:`text-sm ${s.type==="success"?"text-emerald-300":"text-red-300"}`,children:s.message}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:n,children:n?"Sending...":"Send Message"})]})}),d.jsx(ve,{delay:140,children:d.jsxs("aside",{className:"premium-card",children:[d.jsx("h2",{className:"font-serif text-3xl font-bold text-ivory",children:"Reach Us"}),d.jsxs("p",{className:"text-measure mt-4 text-muted",children:["Email: ndaizeek@gmail.com",d.jsx("br",{}),"Phone: +254 721 389696"]}),d.jsx("p",{className:"text-measure mt-6 text-muted",children:"Working with leaders and organizations across Africa and globally, we structure advisory experiences for impact, clarity, and sustainable results."})]})})]})})]})},DM=()=>{const t=mm(),{login:e}=vg(),[n,r]=N.useState({email:"",password:""}),[s,i]=N.useState(!1),[o,l]=N.useState(""),u=async(m,g)=>{await WR(Lc,m,g)},c=m=>{const{name:g,value:A}=m.target;r(P=>({...P,[g]:A}))},f=async m=>{m.preventDefault(),l(""),i(!0);try{await u(n.email,n.password),e({user:{email:n.email,role:"admin"}}),t("/admin/dashboard",{replace:!0})}catch(g){l(g.message)}finally{i(!1)}};return d.jsx("section",{className:"section-shell",children:d.jsxs("div",{className:"mx-auto w-full max-w-lg premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Admin Portal"}),d.jsx("h1",{className:"mt-3 font-serif text-4xl text-ivory",children:"Sign In"}),d.jsx("p",{className:"mt-3 text-muted",children:"Secure access for authorized administrators only."}),d.jsxs("form",{className:"mt-6 space-y-4",onSubmit:f,children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm text-muted",children:"Email"}),d.jsx("input",{id:"email",name:"email",type:"email",className:"premium-input",value:n.email,onChange:c,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm text-muted",children:"Password"}),d.jsx("input",{id:"password",name:"password",type:"password",className:"premium-input",value:n.password,onChange:c,required:!0})]}),o&&d.jsx("p",{className:"text-sm text-red-300",children:o}),d.jsx("button",{type:"submit",className:"premium-btn-primary w-full",disabled:s,children:s?"Signing in...":"Sign In to Admin"})]})]})})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM="/firebase-messaging-sw.js",LM="/firebase-cloud-messaging-push-scope",tS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",VM="https://fcmregistrations.googleapis.com/v1",nS="google.c.a.c_id",MM="google.c.a.c_l",jM="google.c.a.ts",FM="google.c.a.e",ow=1e4;var aw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(aw||(aw={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var cl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(cl||(cl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function UM(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="fcm_token_details_db",BM=5,lw="fcm_token_object_Store";async function zM(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Fh))return null;let e=null;return(await id(Fh,BM,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(lw))return;const l=o.objectStore(lw),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(s===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:nr(c.vapidKey)}}}else if(s===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:nr(c.auth),p256dh:nr(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:nr(c.vapidKey)}}}else if(s===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:nr(c.auth),p256dh:nr(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:nr(c.vapidKey)}}}}}})).close(),await wh(Fh),await wh("fcm_vapid_details_db"),await wh("undefined"),$M(e)?e:null}function $M(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM="firebase-messaging-database",HM=1,dl="firebase-messaging-store";let Uh=null;function rS(){return Uh||(Uh=id(WM,HM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dl)}}})),Uh}async function qM(t){const e=sS(t),r=await(await rS()).transaction(dl).objectStore(dl).get(e);if(r)return r;{const s=await zM(t.appConfig.senderId);if(s)return await wg(t,s),s}}async function wg(t,e){const n=sS(t),s=(await rS()).transaction(dl,"readwrite");return await s.objectStore(dl).put(e,n),await s.done,e}function sS({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Dt=new xs("messaging","Messaging",KM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GM(t,e){const n=await Tg(t),r=iS(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Eg(t.appConfig),s)).json()}catch(o){throw Dt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Dt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Dt.create("token-subscribe-no-token");return i.token}async function QM(t,e){const n=await Tg(t),r=iS(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Eg(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Dt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Dt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Dt.create("token-update-no-token");return i.token}async function YM(t,e){const r={method:"DELETE",headers:await Tg(t)};try{const i=await(await fetch(`${Eg(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Dt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Dt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Eg({projectId:t}){return`${VM}/projects/${t}/registrations`}async function Tg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function iS({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==tS&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=7*24*60*60*1e3;async function XM(t){const e=await ej(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:nr(e.getKey("auth")),p256dh:nr(e.getKey("p256dh"))},r=await qM(t.firebaseDependencies);if(r){if(tj(r.subscriptionOptions,n))return Date.now()>=r.createTime+JM?ZM(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await YM(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return uw(t.firebaseDependencies,n)}else return uw(t.firebaseDependencies,n)}async function ZM(t,e){try{const n=await QM(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await wg(t.firebaseDependencies,r),n}catch(n){throw n}}async function uw(t,e){const r={token:await GM(t,e),createTime:Date.now(),subscriptionOptions:e};return await wg(t,r),r.token}async function ej(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:UM(e)})}function tj(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return nj(e,t),rj(e,t),sj(e,t),e}function nj(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function rj(t,e){e.data&&(t.data=e.data)}function sj(t,e){var s,i,o,l;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ij(t){return typeof t=="object"&&!!t&&nS in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oj(t){if(!t||!t.options)throw Bh("App Configuration Object");if(!t.name)throw Bh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Bh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Bh(t){return Dt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=oj(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lj(t){try{t.swRegistration=await navigator.serviceWorker.register(OM,{scope:LM}),t.swRegistration.update().catch(()=>{}),await uj(t.swRegistration)}catch(e){throw Dt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function uj(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${ow} ms`)),ow),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cj(t,e){if(!e&&!t.swRegistration&&await lj(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Dt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dj(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=tS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hj(t,e){if(!navigator)throw Dt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Dt.create("permission-blocked");return await dj(t,e==null?void 0:e.vapidKey),await cj(t,e==null?void 0:e.serviceWorkerRegistration),XM(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fj(t,e,n){const r=pj(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[nS],message_name:n[MM],message_time:n[jM],message_device_time:Math.floor(Date.now()/1e3)})}function pj(t){switch(t){case cl.NOTIFICATION_CLICKED:return"notification_open";case cl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mj(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===cl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(cw(n)):t.onMessageHandler.next(cw(n)));const r=n.data;ij(r)&&r[FM]==="1"&&await fj(t,n.messageType,r)}const dw="@firebase/messaging",hw="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gj=t=>{const e=new aj(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>mj(e,n)),e},yj=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>hj(e,r)}};function vj(){tn(new Ht("messaging",gj,"PUBLIC")),tn(new Ht("messaging-internal",yj,"PRIVATE")),xt(dw,hw),xt(dw,hw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(){try{await rd()}catch{return!1}return typeof window<"u"&&nd()&&ym()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _j(t=vl()){return oS().then(e=>{if(!e)throw Dt.create("unsupported-browser")},e=>{throw Dt.create("indexed-db-unsupported")}),Er(Ee(t),"messaging").getImmediate()}vj();const wj=async({firebaseUser:t,messaging:e,vapidKey:n,onForegroundMessage:r})=>!t||!e?{ok:!1,reason:"missing-context"}:await Notification.requestPermission()!=="granted"?{ok:!1,reason:"permission-denied"}:{ok:!1,reason:"missing-vapid-key"},Ej=t=>{var r;if(!("permissions"in navigator)||!((r=navigator.permissions)!=null&&r.query))return t==null||t(Notification.permission),()=>{};let e=!0,n;return navigator.permissions.query({name:"notifications"}).then(s=>{e&&(n=s,t==null||t(s.state),s.onchange=()=>t==null?void 0:t(s.state))}).catch(()=>t==null?void 0:t(Notification.permission)),()=>{e=!1,n&&(n.onchange=null)}},Tj=async()=>await oS()&&typeof Notification<"u",xj=[{key:"dashboard",label:"Dashboards"},{key:"bookings",label:"Bookings"},{key:"messages",label:"Messages"},{key:"calendar",label:"My Calender"},{key:"website-details",label:"Website Details"},{key:"admin-profile",label:"Admin Profile"}],fw=["pending","contacted","scheduled","completed"],pw={title:"",description:"",category:"",content:"",pdfUrl:"",date:""},zh={githubRepoUrl:"",hostingProvider:"",hostingExpiration:"",domainName:"",domainHost:"",domainExpiration:""},$h={availableSlots:["09:00 AM","10:30 AM","12:00 PM","02:00 PM","03:30 PM","05:00 PM"],blockedDays:[],blockedSlots:[]},vu={dateISO:"",time:"",type:"personal",email:"",phone:"",summary:""},js=t=>t?typeof(t==null?void 0:t.toDate)=="function"?t.toDate():typeof t=="string"?new Date(t):null:null,Wh=t=>{const e=js(t);return e&&!Number.isNaN(e.getTime())?e.toLocaleString():"N/A"},Ij=t=>{const e=t.getFullYear(),n=t.getMonth(),r=new Date(e,n,1),s=new Date(e,n+1,0).getDate(),i=[];for(let o=0;o<r.getDay();o+=1)i.push(null);for(let o=1;o<=s;o+=1)i.push(new Date(e,n,o));for(;i.length%7!==0;)i.push(null);return i},mw=t=>{if(!t)return!1;const e=new Date(t);if(Number.isNaN(e.getTime()))return!1;const n=(e.getTime()-Date.now())/(1e3*60*60*24);return n>=0&&n<=30},Hh=({rows:t=3})=>d.jsx("div",{className:"space-y-3",children:Array.from({length:t}).map((e,n)=>d.jsx("div",{className:"h-20 animate-pulse rounded-[12px] border border-gold/15 bg-charcoal/40"},n))}),Sj=()=>{const{logout:t,firebaseUser:e}=vg(),[n,r]=N.useState("dashboard"),[s,i]=N.useState([]),[o,l]=N.useState([]),[u,c]=N.useState([]),[f,m]=N.useState(zh),[g,A]=N.useState($h),[P,R]=N.useState(pw),[L,x]=N.useState(""),[w,k]=N.useState(null),[V,j]=N.useState(""),[B,_]=N.useState("all"),[y,E]=N.useState(1),[S,b]=N.useState(1),[C,T]=N.useState(null),[me,kt]=N.useState(null),[At,Zn]=N.useState(null),[W,Y]=N.useState(null),[ee,ye]=N.useState(null),[Pe,Rn]=N.useState($h.availableSlots.join(", ")),[bt,Nn]=N.useState(()=>new Date(new Date().getFullYear(),new Date().getMonth(),1)),[We,Dn]=N.useState(""),[ce,sn]=N.useState(vu),[xr,Co]=N.useState({newPassword:"",confirmPassword:""}),[Ir,ks]=N.useState(null),[Ro,bl]=N.useState(!1),[No,Do]=N.useState(!1),[Oo,Ye]=N.useState(!1),[lt,mi]=N.useState(typeof Notification<"u"?Notification.permission:"default"),[Pl,Lo]=N.useState(!1),[gi,As]=N.useState({bookings:!0,messages:!0,publications:!0,websiteDetails:!0,calendar:!0}),[He,ut]=N.useState({publication:!1,websiteDetails:!1,calendar:!1,profile:!1,deletePublication:!1,deleteBooking:!1,deleteMessage:!1}),[yi,yn]=N.useState(""),[Vo,Mo]=N.useState(null),ie=(I,D)=>{Mo({type:I,message:D}),setTimeout(()=>Mo(null),2600)},Sr=async()=>{try{yn("");const[I,D,G,J,fe,Te]=await Promise.all([Da(Yr(Se,"bookings")),Da(Yr(Se,"messages")),Da(Yr(Se,"publications")),cs(Xe(Se,"websiteDetails","main")),cs(Xe(Se,"availability","main")),cs(Xe(Se,"blockedSlots","main"))]),Re=[];I.forEach(se=>{const qt=se.data()||{};Re.push({id:se.id,...qt,dateISO:Ne(qt.dateISO||qt.date)})}),Re.sort((se,qt)=>{var on,_n;return(((on=js(qt.createdAt))==null?void 0:on.getTime())||0)-(((_n=js(se.createdAt))==null?void 0:_n.getTime())||0)});const rt=[];D.forEach(se=>rt.push({id:se.id,...se.data()})),rt.sort((se,qt)=>{var on,_n;return(((on=js(qt.createdAt))==null?void 0:on.getTime())||0)-(((_n=js(se.createdAt))==null?void 0:_n.getTime())||0)});const Vt=[];G.forEach(se=>Vt.push({id:se.id,...se.data()})),Vt.sort((se,qt)=>{var on,_n;return(((on=js(qt.createdAt))==null?void 0:on.getTime())||0)-(((_n=js(se.createdAt))==null?void 0:_n.getTime())||0)}),i(Re),l(rt),c(Vt),m(J.exists()?{...zh,...J.data()}:zh);const vn={...$h,...fe.exists()?fe.data():{},...Te.exists()?Te.data():{}},$o={...vn,blockedDays:Hr(vn.blockedDays||[]),blockedSlots:(vn.blockedSlots||[]).map(se=>({dateISO:Ne(se==null?void 0:se.dateISO),time:(se==null?void 0:se.time)||"",type:(se==null?void 0:se.type)==="client"?"client":"personal",email:(se==null?void 0:se.email)||"",phone:(se==null?void 0:se.phone)||"",summary:(se==null?void 0:se.summary)||""})).filter(se=>se.dateISO&&se.time)};A($o),Rn(($o.availableSlots||[]).join(", "))}catch(I){yn(I.message)}finally{As({bookings:!1,messages:!1,publications:!1,websiteDetails:!1,calendar:!1})}};N.useEffect(()=>{const I=TT(Lc,D=>{D?Sr():console.log("Not authenticated")});return()=>I()},[]),N.useEffect(()=>{const I=Ej(D=>{mi(D)});return()=>{I()}},[]),N.useEffect(()=>{var Re,rt;const I=((rt=(Re=window.matchMedia)==null?void 0:Re.call(window,"(display-mode: standalone)"))==null?void 0:rt.matches)||window.navigator.standalone;bl(!!I);const D=window.navigator.userAgent||"",G=/iPad|iPhone|iPod/.test(D),J=/Safari/.test(D)&&!/CriOS|FxiOS|EdgiOS/.test(D);Do(G&&J);const fe=Vt=>{Vt.preventDefault(),ks(Vt)},Te=()=>{ks(null),bl(!0),ie("success","Inaare Admin Portal installed.")};return window.addEventListener("beforeinstallprompt",fe),window.addEventListener("appinstalled",Te),()=>{window.removeEventListener("beforeinstallprompt",fe),window.removeEventListener("appinstalled",Te)}},[]);const jo=async()=>{if(!Ir){ie("error","Install prompt not available yet. Use supported browser and reload once.");return}try{Ye(!0),Ir.prompt(),await Ir.userChoice,ks(null)}catch(I){ie("error",I.message)}finally{Ye(!1)}},Fo=async()=>{if(!e){ie("error","Admin session not found.");return}try{if(Lo(!0),!await Tj()){ie("error","Push notifications are not supported on this browser/device.");return}const D=void 0,G=_j(Al),J=await wj({firebaseUser:e,messaging:G,vapidKey:D,onForegroundMessage:fe=>{var rt,Vt;const Te=((rt=fe==null?void 0:fe.notification)==null?void 0:rt.title)||"Inaare Admin Portal",Re=((Vt=fe==null?void 0:fe.notification)==null?void 0:Vt.body)||"New update received.";ie("success",`${Te}: ${Re}`)}});if(!J.ok){if(J.reason==="permission-denied"){ie("error","Notification permission denied.");return}if(J.reason==="missing-vapid-key"){ie("error","Missing VITE_FIREBASE_VAPID_KEY for FCM setup.");return}ie("error","Unable to initialize push notifications.");return}ie("success","Push notifications enabled for this admin device.")}catch(I){ie("error",I.message)}finally{Lo(!1)}},On=N.useMemo(()=>{const I=V.trim().toLowerCase();return s.filter(D=>{const G=`${D.name||""} ${D.email||""} ${D.phone||""}`.toLowerCase(),J=(D.status||"pending").toLowerCase();return(!I||G.includes(I))&&(B==="all"||J===B)})},[s,V,B]),vi=Math.max(1,Math.ceil(On.length/10)),_i=On.slice((y-1)*10,y*10),wi=Math.max(1,Math.ceil(o.length/10)),bs=o.slice((S-1)*10,S*10),Cl=s.slice(0,5),ct=o.slice(0,5),Uo=[mw(f.hostingExpiration)?`Hosting expires ${Wh(f.hostingExpiration)}`:"",mw(f.domainExpiration)?`Domain expires ${Wh(f.domainExpiration)}`:""].filter(Boolean),Ps=Ij(bt),Cs=N.useMemo(()=>{const I={};return s.forEach(D=>{const G=Ne(D.dateISO||D.date);G&&(I[G]=I[G]||{booked:0,blocked:0},I[G].booked+=1)}),Hr(g.blockedDays||[]).forEach(D=>{I[D]=I[D]||{booked:0,blocked:0},I[D].blocked=(g.availableSlots||[]).length||1}),(g.blockedSlots||[]).forEach(D=>{const G=Ne(D==null?void 0:D.dateISO);!G||!(D!=null&&D.time)||(I[G]=I[G]||{booked:0,blocked:0},I[G].blocked+=1)}),I},[s,g]),Cd=N.useMemo(()=>new Set(s.map(I=>{const D=Ne(I.dateISO||I.date),G=I.time||"";return D&&G?`${D}__${G}`:""}).filter(Boolean)),[s]),Rd=N.useMemo(()=>new Set((g.blockedSlots||[]).map(I=>{const D=Ne(I==null?void 0:I.dateISO),G=(I==null?void 0:I.time)||"";return D&&G?`${D}__${G}`:""}).filter(Boolean)),[g.blockedSlots]),kr=N.useMemo(()=>{const I={};return s.forEach(D=>{const G=Ne(D.dateISO||D.date),J=D.time||"";if(!G||!J)return;const fe=`${G}__${J}`;I[fe]||(I[fe]=[]),I[fe].push(D)}),I},[s]),Nd=async(I,D)=>{await Ch(Xe(Se,"bookings",I.id),{status:D,updatedAt:tr()}),i(G=>G.map(J=>J.id===I.id?{...J,status:D}:J))},Dd=async I=>{I.preventDefault();const D=P.title.trim(),G=P.description.trim(),J=P.category.trim(),fe=P.content.trim();if(!D||!G||!J){ie("error","Title, description, and category are required.");return}if(!fe&&!P.pdfUrl&&!w){ie("error","Add article content or upload a PDF.");return}try{ut(vn=>({...vn,publication:!0}));const Te=!!L,Re=Te?Xe(Se,"publications",L):Xe(Yr(Se,"publications"));let rt=P.pdfUrl||"";if(w){const vn=ML(dM,`publications/${Re.id}/${Date.now()}-${w.name}`);await LL(vn,w),rt=await VL(vn)}const Vt={id:Re.id,title:D,description:G,category:J,content:fe,pdfUrl:rt,date:P.date||"",updatedAt:tr()};Te?await Ch(Re,Vt):await fu(Re,{...Vt,createdAt:tr()}),ie("success",Te?"Publication updated.":"Publication created."),R(pw),x(""),k(null),await Sr()}catch(Te){yn(Te.message),ie("error",Te.message)}finally{ut(Te=>({...Te,publication:!1}))}},Ei=I=>{x(I.id),k(null),R({title:I.title||"",description:I.description||"",category:I.category||"",content:I.content||"",pdfUrl:I.pdfUrl||"",date:I.date||""}),r("publications")},Rl=async()=>{if(At!=null&&At.id)try{ut(I=>({...I,deletePublication:!0})),await Rh(Xe(Se,"publications",At.id)),c(I=>I.filter(D=>D.id!==At.id)),Zn(null),ie("success","Publication deleted.")}catch(I){yn(I.message),ie("error",I.message)}finally{ut(I=>({...I,deletePublication:!1}))}},Nl=async I=>{I.preventDefault();try{ut(D=>({...D,websiteDetails:!0})),await fu(Xe(Se,"websiteDetails","main"),{...f,updatedAt:tr()},{merge:!0}),ie("success","Website details saved.")}catch(D){yn(D.message),ie("error",D.message)}finally{ut(D=>({...D,websiteDetails:!1}))}},Ar=async I=>{try{ut(D=>({...D,calendar:!0})),await Promise.all([fu(Xe(Se,"availability","main"),{availableSlots:I.availableSlots||[],blockedDays:Hr(I.blockedDays||[]),updatedAt:tr()},{merge:!0}),fu(Xe(Se,"blockedSlots","main"),{blockedSlots:(I.blockedSlots||[]).map(D=>({dateISO:Ne(D==null?void 0:D.dateISO),time:(D==null?void 0:D.time)||"",type:(D==null?void 0:D.type)==="client"?"client":"personal",email:(D==null?void 0:D.email)||"",phone:(D==null?void 0:D.phone)||"",summary:(D==null?void 0:D.summary)||""})).filter(D=>D.dateISO&&D.time),updatedAt:tr()},{merge:!0})]),A(I),ie("success","Calendar updated.")}catch(D){yn(D.message),ie("error",D.message)}finally{ut(D=>({...D,calendar:!1}))}},Rs=async()=>{const I=Pe.split(",").map(D=>D.trim()).filter(Boolean);if(I.length===0){ie("error","Add at least one slot.");return}await Ar({...g,availableSlots:I})},Od=async I=>{const D=Ne(I),G=new Set(Hr(g.blockedDays||[]));G.has(D)?G.delete(D):G.add(D),await Ar({...g,blockedDays:Array.from(G)})},Ln=(I,D)=>{const G=Ne(I),J=(g.blockedSlots||[]).find(fe=>Ne(fe.dateISO)===G&&fe.time===D);sn({dateISO:G,time:D,type:(J==null?void 0:J.type)==="client"?"client":"personal",email:(J==null?void 0:J.email)||"",phone:(J==null?void 0:J.phone)||"",summary:(J==null?void 0:J.summary)||""})},Dl=async()=>{if(!ce.dateISO||!ce.time){ie("error","Choose a slot first.");return}if(ce.type==="client"&&(!ce.email.trim()||!ce.phone.trim()||!ce.summary.trim())){ie("error","Email, number, and consultation summary are required for client holds.");return}const G=[...(g.blockedSlots||[]).filter(J=>!(Ne(J.dateISO)===ce.dateISO&&J.time===ce.time)),{dateISO:ce.dateISO,time:ce.time,type:ce.type,email:ce.type==="client"?ce.email.trim():"",phone:ce.type==="client"?ce.phone.trim():"",summary:ce.type==="client"?ce.summary.trim():""}];await Ar({...g,blockedSlots:G}),sn(vu)},Ol=async()=>{if(!ce.dateISO||!ce.time)return;const I=(g.blockedSlots||[]).filter(D=>!(Ne(D.dateISO)===ce.dateISO&&D.time===ce.time));await Ar({...g,blockedSlots:I}),sn(vu)},Bo=async(I,D)=>{await Ch(Xe(Se,"messages",I.id),{responded:D,updatedAt:tr()}),l(G=>G.map(J=>J.id===I.id?{...J,responded:D}:J)),ie("success",D?"Marked as responded.":"Marked as pending.")},zo=async()=>{if(W!=null&&W.id)try{ut(I=>({...I,deleteBooking:!0})),await Rh(Xe(Se,"bookings",W.id)),i(I=>I.filter(D=>D.id!==W.id)),Y(null),ie("success","Booking deleted.")}catch(I){yn(I.message),ie("error",I.message)}finally{ut(I=>({...I,deleteBooking:!1}))}},Ll=async()=>{if(ee!=null&&ee.id)try{ut(I=>({...I,deleteMessage:!0})),await Rh(Xe(Se,"messages",ee.id)),l(I=>I.filter(D=>D.id!==ee.id)),ye(null),ie("success","Message deleted.")}catch(I){yn(I.message),ie("error",I.message)}finally{ut(I=>({...I,deleteMessage:!1}))}},Ld=async I=>{if(I.preventDefault(),xr.newPassword.length<8){ie("error","Password must be at least 8 characters.");return}if(xr.newPassword!==xr.confirmPassword){ie("error","Passwords do not match.");return}if(!e){ie("error","Admin session not found.");return}try{ut(D=>({...D,profile:!0})),await HR(e,xr.newPassword),Co({newPassword:"",confirmPassword:""}),ie("success","Password updated successfully.")}catch(D){yn(D.message),ie("error",D.message)}finally{ut(D=>({...D,profile:!1}))}};return d.jsxs("section",{className:"section-shell",children:[d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[240px_1fr]",children:[d.jsxs("aside",{className:"premium-card h-fit lg:sticky lg:top-24",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Admin"}),d.jsx("h2",{className:"mt-2 font-serif text-3xl text-ivory",children:"Dashboard"}),d.jsx("nav",{className:"mt-6 space-y-2",children:xj.map(I=>d.jsx("button",{type:"button",className:`w-full rounded-[12px] border px-4 py-3 text-left text-sm uppercase tracking-[0.12em] transition ${n===I.key?"border-gold bg-gold/20 text-gold":"border-gold/20 text-muted hover:border-gold/45 hover:text-ivory"}`,onClick:()=>r(I.key),children:I.label},I.key))}),d.jsx("button",{type:"button",className:"premium-btn-secondary mt-6 w-full",onClick:t,children:"Logout"})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Internal Tool"}),d.jsx("h1",{className:"mt-2 font-serif text-4xl text-ivory",children:"Operations Console"})]}),d.jsxs("div",{className:"flex flex-wrap gap-2",children:[lt!=="granted"&&d.jsx("button",{type:"button",className:"premium-btn-secondary",onClick:Fo,disabled:Pl,children:Pl?"Enabling...":"Enable Push Notifications"}),!Ro&&Ir&&d.jsx("button",{type:"button",className:"premium-btn-secondary",onClick:jo,disabled:Oo,children:Oo?"Preparing...":"Download Inaare Admin Portal"})]})]}),!Ro&&No&&!Ir&&d.jsxs("article",{className:"rounded-[12px] border border-gold/25 bg-gold/10 px-4 py-3 text-ivory",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.14em] text-gold",children:"Install on iPhone"}),d.jsx("p",{className:"mt-1 text-sm text-muted",children:"In Safari, tap Share, then choose Add to Home Screen to install the Inaare Admin Portal."})]}),Uo.length>0&&d.jsxs("article",{className:"rounded-[12px] border border-red-300/35 bg-red-400/10 px-4 py-3 text-red-200",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.14em]",children:"Expiry Alert"}),d.jsx("p",{className:"mt-1 text-sm",children:Uo.join(" • ")})]}),yi&&d.jsx("p",{className:"text-sm text-red-300",children:yi}),n==="dashboard"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:[d.jsxs("article",{className:"premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:"Total Bookings"}),d.jsx("p",{className:"mt-3 font-serif text-4xl text-ivory",children:s.length})]}),d.jsxs("article",{className:"premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:"New Bookings"}),d.jsx("p",{className:"mt-3 font-serif text-4xl text-gold",children:s.filter(I=>(I.status||"pending")==="pending").length})]}),d.jsxs("article",{className:"premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:"Messages"}),d.jsx("p",{className:"mt-3 font-serif text-4xl text-ivory",children:o.length})]})]}),d.jsxs("div",{className:"grid gap-6 xl:grid-cols-2",children:[d.jsxs("article",{className:"premium-card",children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Latest Bookings"}),d.jsx("button",{type:"button",className:"text-xs uppercase tracking-[0.12em] text-gold",onClick:()=>r("bookings"),children:"View All"})]}),Cl.map(I=>d.jsxs("div",{className:"mb-2 rounded-[10px] border border-gold/20 px-3 py-2 text-sm text-muted",children:[I.name," • ",I.date," • ",I.time]},I.id))]}),d.jsxs("article",{className:"premium-card",children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Latest Messages"}),d.jsx("button",{type:"button",className:"text-xs uppercase tracking-[0.12em] text-gold",onClick:()=>r("messages"),children:"View All"})]}),ct.map(I=>d.jsxs("div",{className:"mb-2 rounded-[10px] border border-gold/20 px-3 py-2 text-sm text-muted",children:[I.name," • ",I.email]},I.id))]})]})]}),n==="bookings"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("article",{className:"premium-card grid gap-3 md:grid-cols-[1.5fr_1fr]",children:[d.jsx("input",{className:"premium-input",placeholder:"Search name, email, phone",value:V,onChange:I=>j(I.target.value)}),d.jsxs("select",{className:"premium-input",value:B,onChange:I=>_(I.target.value),children:[d.jsx("option",{value:"all",children:"All Statuses"}),fw.map(I=>d.jsx("option",{value:I,children:I},I))]})]}),d.jsx("article",{className:"premium-card overflow-x-auto",children:gi.bookings?d.jsx(Hh,{rows:5}):d.jsxs("table",{className:"w-full min-w-[820px] text-left text-sm",children:[d.jsx("thead",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-3 py-2",children:"Client"}),d.jsx("th",{className:"px-3 py-2",children:"Session"}),d.jsx("th",{className:"px-3 py-2",children:"Status"}),d.jsx("th",{className:"px-3 py-2",children:"Actions"})]})}),d.jsx("tbody",{children:_i.map(I=>d.jsxs("tr",{className:"border-t border-gold/10 text-muted",children:[d.jsxs("td",{className:"px-3 py-3",children:[d.jsx("p",{className:"font-semibold text-ivory",children:I.name}),d.jsx("p",{children:I.email}),d.jsx("p",{children:I.phone})]}),d.jsxs("td",{className:"px-3 py-3",children:[I.date,d.jsx("br",{}),I.time]}),d.jsx("td",{className:"px-3 py-3",children:d.jsx("select",{className:"rounded-[10px] border border-gold/30 bg-ink px-2 py-1 text-xs text-ivory",value:(I.status||"pending").toLowerCase(),onChange:D=>Nd(I,D.target.value),children:fw.map(D=>d.jsx("option",{value:D,children:D},D))})}),d.jsx("td",{className:"px-3 py-3",children:d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1 text-xs text-ivory",onClick:()=>T(I),children:"View"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-1 text-xs text-red-200",onClick:()=>Y(I),children:"Delete"})]})})]},I.id))})]})}),d.jsxs("article",{className:"premium-card flex items-center justify-between py-3 text-sm text-muted",children:[d.jsxs("p",{children:["Page ",y," of ",vi]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:y===1,onClick:()=>E(I=>Math.max(1,I-1)),children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:y===vi,onClick:()=>E(I=>Math.min(vi,I+1)),children:"Next"})]})]})]}),n==="messages"&&d.jsxs("div",{className:"space-y-4",children:[gi.messages&&d.jsx(Hh,{rows:5}),!gi.messages&&bs.map(I=>d.jsx("article",{className:"premium-card",children:d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:I.name}),d.jsx("span",{className:`rounded-full border px-2 py-1 text-[10px] uppercase ${I.responded?"border-emerald-300/35 text-emerald-200":"border-gold/30 text-gold"}`,children:I.responded?"Responded":"Pending"})]}),d.jsx("p",{className:"text-muted",children:I.email}),d.jsxs("p",{className:"mt-1 text-sm text-muted",children:["Phone: ",I.phone||I.number||"N/A"]}),d.jsx("p",{className:"mt-2 line-clamp-2 text-sm text-muted",children:I.message})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>kt(I),children:"Read"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>Bo(I,!I.responded),children:I.responded?"Mark Pending":"Mark Responded"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200 disabled:opacity-40",disabled:!I.responded,onClick:()=>ye(I),children:"Delete"})]})]})},I.id)),d.jsxs("article",{className:"premium-card flex items-center justify-between py-3 text-sm text-muted",children:[d.jsxs("p",{children:["Page ",S," of ",wi]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:S===1,onClick:()=>b(I=>Math.max(1,I-1)),children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:S===wi,onClick:()=>b(I=>Math.min(wi,I+1)),children:"Next"})]})]})]}),n==="publications"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("form",{className:"premium-card space-y-4",onSubmit:Dd,children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:L?"Edit Publication":"Add Publication"}),d.jsx("input",{className:"premium-input",placeholder:"Title",value:P.title,onChange:I=>R(D=>({...D,title:I.target.value})),required:!0}),d.jsx("textarea",{className:"premium-textarea",rows:"3",placeholder:"Description",value:P.description,onChange:I=>R(D=>({...D,description:I.target.value})),required:!0}),d.jsx("input",{className:"premium-input",placeholder:"Category",value:P.category,onChange:I=>R(D=>({...D,category:I.target.value})),required:!0}),d.jsx("textarea",{className:"premium-textarea",rows:"8",placeholder:"Write content (for in-site reading)",value:P.content,onChange:I=>R(D=>({...D,content:I.target.value}))}),d.jsx("input",{type:"date",className:"premium-input",value:P.date,onChange:I=>R(D=>({...D,date:I.target.value}))}),d.jsx("input",{type:"file",accept:"application/pdf",className:"premium-input",onChange:I=>{var D;return k(((D=I.target.files)==null?void 0:D[0])||null)}}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:He.publication,children:He.publication?"Saving...":L?"Update Publication":"Create Publication"})]}),gi.publications?d.jsx(Hh,{rows:4}):u.map(I=>d.jsx("article",{className:"premium-card",children:d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:I.title}),d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-gold",children:I.category}),d.jsx("p",{className:"text-xs text-muted",children:Wh(I.date||I.createdAt)})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>Ei(I),children:"Edit"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200",onClick:()=>Zn(I),children:"Delete"})]})]})},I.id))]}),n==="calendar"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("article",{className:"premium-card",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Availability Rules"}),d.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[d.jsx("input",{className:"premium-input min-w-[300px] flex-1",value:Pe,onChange:I=>Rn(I.target.value)}),d.jsx("button",{type:"button",className:"premium-btn-primary",disabled:He.calendar,onClick:Rs,children:He.calendar?"Saving...":"Save Rules"})]})]}),d.jsxs("div",{className:"grid gap-6 xl:grid-cols-[1.5fr_1fr]",children:[d.jsxs("article",{className:"premium-card",children:[d.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:bt.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>Nn(I=>new Date(I.getFullYear(),I.getMonth()-1,1)),children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>Nn(I=>new Date(I.getFullYear(),I.getMonth()+1,1)),children:"Next"})]})]}),d.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(I=>d.jsx("p",{className:"text-center text-xs uppercase tracking-[0.12em] text-muted",children:I},I)),Ps.map((I,D)=>{if(!I)return d.jsx("div",{className:"h-12"},`e-${D}`);const G=Ne(I),J=Cs[G]||{booked:0,blocked:0},fe=(g.availableSlots||[]).length||1,Te=Hr(g.blockedDays||[]).includes(G)||J.blocked>=fe,Re=Te||J.blocked>0,rt=J.booked>0;return d.jsx("button",{type:"button",className:`h-12 rounded-[10px] border text-sm ${Te?"border-red-300/35 bg-red-400/10 text-red-200":Re?"border-red-300/30 bg-red-400/5 text-red-100 hover:bg-red-400/10":rt?"border-gold/35 bg-gold/15 text-ivory":"border-gold/20 text-muted hover:bg-gold/10"}`,onClick:()=>Dn(G),children:I.getDate()},G)})]})]}),d.jsxs("article",{className:"premium-card",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Date Panel"}),!We&&d.jsx("p",{className:"mt-3 text-sm text-muted",children:"Select a date to manage day and slot blocks."}),We&&d.jsxs("div",{className:"mt-4 space-y-3",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-gold",children:We}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200",onClick:()=>Od(We),children:(g.blockedDays||[]).includes(We)?"Unblock Full Day":"Block Full Day"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:(g.availableSlots||[]).map(I=>{const D=`${Ne(We)}__${I}`,G=Rd.has(D),J=Cd.has(D);return d.jsx("button",{type:"button",className:`rounded-[10px] border px-3 py-2 text-xs ${G?"border-red-300/35 bg-red-400/10 text-red-200":J?"border-gold/35 bg-gold/15 text-ivory hover:bg-gold/25":"border-gold/20 text-muted hover:bg-gold/10"}`,onClick:()=>{if(J){const[fe]=kr[D]||[];fe&&T(fe);return}Ln(We,I)},children:I},I)})}),ce.dateISO===Ne(We)&&ce.time&&d.jsxs("div",{className:"mt-3 rounded-[12px] border border-gold/20 bg-ink/35 p-4",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-gold",children:"Selected Slot"}),d.jsxs("p",{className:"mt-1 text-sm text-ivory",children:[ce.dateISO," • ",ce.time]}),d.jsxs("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[d.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded-[10px] border border-gold/20 px-3 py-2 text-xs text-muted",children:[d.jsx("input",{type:"radio",name:"slot-type",checked:ce.type==="personal",onChange:()=>sn(I=>({...I,type:"personal"}))}),"Block no justification (personal time)"]}),d.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded-[10px] border border-gold/20 px-3 py-2 text-xs text-muted",children:[d.jsx("input",{type:"radio",name:"slot-type",checked:ce.type==="client",onChange:()=>sn(I=>({...I,type:"client"}))}),"Block to book someone in"]})]}),ce.type==="client"&&d.jsxs("div",{className:"mt-3 grid gap-3",children:[d.jsx("input",{type:"email",className:"premium-input",placeholder:"Client email",value:ce.email,onChange:I=>sn(D=>({...D,email:I.target.value}))}),d.jsx("input",{type:"text",className:"premium-input",placeholder:"Client number",value:ce.phone,onChange:I=>sn(D=>({...D,phone:I.target.value}))}),d.jsx("textarea",{rows:"3",className:"premium-textarea",placeholder:"Consultation summary",value:ce.summary,onChange:I=>sn(D=>({...D,summary:I.target.value}))})]}),d.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[d.jsx("button",{type:"button",className:"premium-btn-primary",disabled:He.calendar,onClick:Dl,children:He.calendar?"Saving...":"Block Slot"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200",disabled:He.calendar,onClick:Ol,children:"Unblock Slot"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>sn(vu),children:"Cancel"})]})]})]})]})]})]}),n==="website-details"&&d.jsxs("form",{className:"premium-card space-y-4",onSubmit:Nl,children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Website Details"}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"GitHub Repo URL"}),d.jsx("input",{className:"premium-input",value:f.githubRepoUrl,onChange:I=>m(D=>({...D,githubRepoUrl:I.target.value}))})]}),d.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Hosting Provider"}),d.jsx("input",{className:"premium-input",value:f.hostingProvider,onChange:I=>m(D=>({...D,hostingProvider:I.target.value}))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Hosting Expiration"}),d.jsx("input",{type:"date",className:"premium-input",value:f.hostingExpiration,onChange:I=>m(D=>({...D,hostingExpiration:I.target.value}))})]})]}),d.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Domain Name"}),d.jsx("input",{className:"premium-input",value:f.domainName,onChange:I=>m(D=>({...D,domainName:I.target.value}))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Domain Host"}),d.jsx("input",{className:"premium-input",value:f.domainHost,onChange:I=>m(D=>({...D,domainHost:I.target.value}))})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Domain Expiration"}),d.jsx("input",{type:"date",className:"premium-input",value:f.domainExpiration,onChange:I=>m(D=>({...D,domainExpiration:I.target.value}))})]}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:He.websiteDetails,children:He.websiteDetails?"Saving...":"Save Website Details"})]}),n==="admin-profile"&&d.jsxs("form",{className:"premium-card space-y-4",onSubmit:Ld,children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Admin Profile"}),d.jsx("p",{className:"text-sm text-muted",children:"Change password for the current admin account."}),d.jsx("input",{type:"password",className:"premium-input",placeholder:"New Password",value:xr.newPassword,onChange:I=>Co(D=>({...D,newPassword:I.target.value})),required:!0}),d.jsx("input",{type:"password",className:"premium-input",placeholder:"Confirm New Password",value:xr.confirmPassword,onChange:I=>Co(D=>({...D,confirmPassword:I.target.value})),required:!0}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:He.profile,children:He.profile?"Updating...":"Update Password"})]})]})]}),C&&d.jsx("div",{className:"fixed inset-0 z-[70] flex justify-end bg-ink/70 backdrop-blur-sm",children:d.jsxs("div",{className:"h-full w-full max-w-xl overflow-y-auto border-l border-gold/20 bg-charcoal p-6",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Booking Details"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-3 py-2 text-sm text-ivory",onClick:()=>T(null),children:"Close"})]}),d.jsxs("div",{className:"mt-6 space-y-4",children:[d.jsx("p",{className:"text-ivory",children:C.name}),d.jsx("p",{className:"text-muted",children:C.email}),d.jsx("p",{className:"text-muted",children:C.phone}),d.jsxs("p",{className:"text-muted",children:[C.date," • ",C.time]})]})]})}),me&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-2xl rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Message"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-3 py-2 text-sm text-ivory",onClick:()=>kt(null),children:"Close"})]}),d.jsxs("div",{className:"mt-5 space-y-3",children:[d.jsx("p",{className:"text-ivory",children:me.name}),d.jsx("p",{className:"text-sm text-muted",children:me.email}),d.jsxs("p",{className:"text-sm text-muted",children:["Phone: ",me.phone||me.number||"N/A"]}),d.jsx("p",{className:"rounded-[12px] border border-gold/20 bg-ink/40 px-4 py-4 leading-relaxed text-muted",children:me.message})]})]})}),At&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Delete Publication"}),d.jsxs("p",{className:"mt-3 text-sm text-muted",children:["Delete “",At.title,"” permanently?"]}),d.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory",onClick:()=>Zn(null),children:"Cancel"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200",onClick:Rl,disabled:He.deletePublication,children:He.deletePublication?"Deleting...":"Delete"})]})]})}),W&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Delete Booking"}),d.jsxs("p",{className:"mt-3 text-sm text-muted",children:["Delete booking for ",W.name,"?"]}),d.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory",onClick:()=>Y(null),children:"Cancel"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200",onClick:zo,disabled:He.deleteBooking,children:He.deleteBooking?"Deleting...":"Delete"})]})]})}),ee&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Delete Message"}),d.jsxs("p",{className:"mt-3 text-sm text-muted",children:["Delete message from ",ee.name,"? (Responded only)"]}),d.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory",onClick:()=>ye(null),children:"Cancel"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200",onClick:Ll,disabled:He.deleteMessage,children:He.deleteMessage?"Deleting...":"Delete"})]})]})}),Vo&&d.jsx("div",{className:"fixed right-6 top-6 z-[80]",children:d.jsx("div",{className:`rounded-[12px] border px-4 py-3 text-sm shadow-soft ${Vo.type==="success"?"border-emerald-300/35 bg-emerald-400/10 text-emerald-200":"border-red-300/35 bg-red-400/10 text-red-200"}`,children:Vo.message})})]})},kj=()=>d.jsxs($b,{children:[d.jsx(Mt,{path:"/admin/login",element:d.jsx(DM,{})}),d.jsx(Mt,{path:"/admin/dashboard",element:d.jsx(fM,{children:d.jsx(Sj,{})})}),d.jsx(Mt,{path:"/admin",element:d.jsx(hc,{to:"/admin/dashboard",replace:!0})}),d.jsxs(Mt,{element:d.jsx(hP,{}),children:[d.jsx(Mt,{path:"/",element:d.jsx(yM,{})}),d.jsx(Mt,{path:"/about",element:d.jsx(wM,{})}),d.jsx(Mt,{path:"/services",element:d.jsx(EM,{})}),d.jsx(Mt,{path:"/programs",element:d.jsx(TM,{})}),d.jsx(Mt,{path:"/publications",element:d.jsx(IM,{})}),d.jsx(Mt,{path:"/publications/:id",element:d.jsx(kM,{})}),d.jsx(Mt,{path:"/booking",element:d.jsx(RM,{})}),d.jsx(Mt,{path:"/contact",element:d.jsx(NM,{})}),d.jsx(Mt,{path:"*",element:d.jsx(hc,{to:"/",replace:!0})})]})]});qh.createRoot(document.getElementById("root")).render(d.jsx(kw.StrictMode,{children:d.jsx(hM,{children:d.jsx(gM,{children:d.jsx(Jb,{children:d.jsx(kj,{})})})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(t=>{console.error("Service worker registration failed:",t)})});
