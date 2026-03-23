function vS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _S(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fw={exports:{}},Vu={},pw={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),wS=Symbol.for("react.portal"),ES=Symbol.for("react.fragment"),xS=Symbol.for("react.strict_mode"),TS=Symbol.for("react.profiler"),IS=Symbol.for("react.provider"),SS=Symbol.for("react.context"),kS=Symbol.for("react.forward_ref"),AS=Symbol.for("react.suspense"),bS=Symbol.for("react.memo"),PS=Symbol.for("react.lazy"),Jg=Symbol.iterator;function CS(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gw=Object.assign,yw={};function _o(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}_o.prototype.isReactComponent={};_o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vw(){}vw.prototype=_o.prototype;function _p(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}var wp=_p.prototype=new vw;wp.constructor=_p;gw(wp,_o.prototype);wp.isPureReactComponent=!0;var Xg=Array.isArray,_w=Object.prototype.hasOwnProperty,Ep={current:null},ww={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)_w.call(e,r)&&!ww.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:hl,type:t,key:i,ref:o,props:s,_owner:Ep.current}}function NS(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xp(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function RS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zg=/\/+/g;function Wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RS(""+t.key):e.toString(36)}function wc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case wS:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Wd(o,0):r,Xg(s)?(n="",t!=null&&(n=t.replace(Zg,"$&/")+"/"),wc(s,e,n,"",function(u){return u})):s!=null&&(xp(s)&&(s=NS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Zg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Xg(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Wd(i,l);o+=wc(i,e,n,c,s)}else if(c=CS(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Wd(i,l++),o+=wc(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],s=0;return wc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function DS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Ec={transition:null},OS={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Ec,ReactCurrentOwner:Ep};function xw(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!xp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=_o;ce.Fragment=ES;ce.Profiler=TS;ce.PureComponent=_p;ce.StrictMode=xS;ce.Suspense=AS;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;ce.act=xw;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Ep.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)_w.call(e,c)&&!ww.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:hl,type:t.type,key:s,ref:i,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:SS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IS,_context:t},t.Consumer=t};ce.createElement=Ew;ce.createFactory=function(t){var e=Ew.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:kS,render:t}};ce.isValidElement=xp;ce.lazy=function(t){return{$$typeof:PS,_payload:{_status:-1,_result:t},_init:DS}};ce.memo=function(t,e){return{$$typeof:bS,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Ec.transition;Ec.transition={};try{t()}finally{Ec.transition=e}};ce.unstable_act=xw;ce.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ce.useContext=function(t){return Mt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ce.useId=function(){return Mt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ce.useRef=function(t){return Mt.current.useRef(t)};ce.useState=function(t){return Mt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Mt.current.useTransition()};ce.version="18.3.1";pw.exports=ce;var R=pw.exports;const Tw=_S(R),jS=vS({__proto__:null,default:Tw},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LS=R,VS=Symbol.for("react.element"),MS=Symbol.for("react.fragment"),FS=Object.prototype.hasOwnProperty,US=LS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BS={key:!0,ref:!0,__self:!0,__source:!0};function Iw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)FS.call(e,r)&&!BS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:VS,type:t,key:i,ref:o,props:s,_owner:US.current}}Vu.Fragment=MS;Vu.jsx=Iw;Vu.jsxs=Iw;fw.exports=Vu;var d=fw.exports,Gh={},Sw={exports:{}},un={},kw={exports:{}},Aw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var J=$.length;$.push(Y);e:for(;0<J;){var ye=J-1>>>1,Te=$[ye];if(0<s(Te,Y))$[ye]=Y,$[J]=Te,J=ye;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],J=$.pop();if(J!==Y){$[0]=J;e:for(var ye=0,Te=$.length,Jt=Te>>>1;ye<Jt;){var ne=2*(ye+1)-1,me=$[ne],ae=ne+1,Ge=$[ae];if(0>s(me,J))ae<Te&&0>s(Ge,me)?($[ye]=Ge,$[ae]=J,ye=ae):($[ye]=me,$[ne]=J,ye=ne);else if(ae<Te&&0>s(Ge,J))$[ye]=Ge,$[ae]=J,ye=ae;else break e}}return Y}function s($,Y){var J=$.sortIndex-Y.sortIndex;return J!==0?J:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,m=null,g=3,A=!1,P=!1,N=!1,j=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=$)r(u),Y.sortIndex=Y.expirationTime,e(c,Y);else break;Y=n(u)}}function L($){if(N=!1,S($),!P)if(n(c)!==null)P=!0,Tt(U);else{var Y=n(u);Y!==null&&hn(L,Y.startTime-$)}}function U($,Y){P=!1,N&&(N=!1,T(v),v=-1),A=!0;var J=g;try{for(S(Y),m=n(c);m!==null&&(!(m.expirationTime>Y)||$&&!b());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var Te=ye(m.expirationTime<=Y);Y=t.unstable_now(),typeof Te=="function"?m.callback=Te:m===n(c)&&r(c),S(Y)}else r(c);m=n(c)}if(m!==null)var Jt=!0;else{var ne=n(u);ne!==null&&hn(L,ne.startTime-Y),Jt=!1}return Jt}finally{m=null,g=J,A=!1}}var z=!1,w=null,v=-1,E=5,k=-1;function b(){return!(t.unstable_now()-k<E)}function C(){if(w!==null){var $=t.unstable_now();k=$;var Y=!0;try{Y=w(!0,$)}finally{Y?I():(z=!1,w=null)}}else z=!1}var I;if(typeof _=="function")I=function(){_(C)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Ut=we.port2;we.port1.onmessage=C,I=function(){Ut.postMessage(null)}}else I=function(){j(C,0)};function Tt($){w=$,z||(z=!0,I())}function hn($,Y){v=j(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,Tt(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var J=g;g=Y;try{return $()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=g;g=$;try{return Y()}finally{g=J}},t.unstable_scheduleCallback=function($,Y,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,$){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,$={id:f++,callback:Y,priorityLevel:$,startTime:J,expirationTime:Te,sortIndex:-1},J>ye?($.sortIndex=J,e(u,$),n(c)===null&&$===n(u)&&(N?(T(v),v=-1):N=!0,hn(L,J-ye))):($.sortIndex=Te,e(c,$),P||A||(P=!0,Tt(U))),$},t.unstable_shouldYield=b,t.unstable_wrapCallback=function($){var Y=g;return function(){var J=g;g=Y;try{return $.apply(this,arguments)}finally{g=J}}}})(Aw);kw.exports=Aw;var zS=kw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $S=R,ln=zS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bw=new Set,ja={};function li(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(ja[t]=e,t=0;t<e.length;t++)bw.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qh=Object.prototype.hasOwnProperty,WS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ey={},ty={};function HS(t){return Qh.call(ty,t)?!0:Qh.call(ey,t)?!1:WS.test(t)?ty[t]=!0:(ey[t]=!0,!1)}function qS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KS(t,e,n,r){if(e===null||typeof e>"u"||qS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tp=/[\-:]([a-z])/g;function Ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tp,Ip);Et[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tp,Ip);Et[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tp,Ip);Et[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sp(t,e,n,r){var s=Et.hasOwnProperty(e)?Et[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KS(e,n,s,r)&&(n=null),r||s===null?HS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ir=$S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hl=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),Yh=Symbol.for("react.profiler"),Pw=Symbol.for("react.provider"),Cw=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),Xh=Symbol.for("react.suspense_list"),bp=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),Nw=Symbol.for("react.offscreen"),ny=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=ny&&t[ny]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Hd;function ca(t){if(Hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hd=e&&e[1]||""}return`
`+Hd+t}var qd=!1;function Kd(t,e){if(!t||qd)return"";qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{qd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function GS(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Kd(t.type,!1),t;case 11:return t=Kd(t.type.render,!1),t;case 1:return t=Kd(t.type,!0),t;default:return""}}function Zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Ni:return"Portal";case Yh:return"Profiler";case kp:return"StrictMode";case Jh:return"Suspense";case Xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cw:return(t.displayName||"Context")+".Consumer";case Pw:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bp:return e=t.displayName||null,e!==null?e:Zh(t.type)||"Memo";case Mr:e=t._payload,t=t._init;try{return Zh(t(e))}catch{}}return null}function QS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YS(t){var e=Rw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=YS(t))}function Dw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ry(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ow(t,e){e=e.checked,e!=null&&Sp(t,"checked",e,!1)}function tf(t,e){Ow(t,e);var n=fs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,fs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||zc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function Wi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function iy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ua(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fs(n)}}function jw(t,e){var n=fs(e.value),r=fs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function oy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,Vw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JS=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){JS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function Mw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function Fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Mw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var XS=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(XS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cf=null,Hi=null,qi=null;function ay(t){if(t=ml(t)){if(typeof cf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=zu(e),cf(t.stateNode,t.type,e))}}function Uw(t){Hi?qi?qi.push(t):qi=[t]:Hi=t}function Bw(){if(Hi){var t=Hi,e=qi;if(qi=Hi=null,ay(t),e)for(t=0;t<e.length;t++)ay(e[t])}}function zw(t,e){return t(e)}function $w(){}var Gd=!1;function Ww(t,e,n){if(Gd)return t(e,n);Gd=!0;try{return zw(t,e,n)}finally{Gd=!1,(Hi!==null||qi!==null)&&($w(),Bw())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var uf=!1;if(gr)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){uf=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{uf=!1}function ZS(t,e,n,r,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var wa=!1,$c=null,Wc=!1,df=null,ek={onError:function(t){wa=!0,$c=t}};function tk(t,e,n,r,s,i,o,l,c){wa=!1,$c=null,ZS.apply(ek,arguments)}function nk(t,e,n,r,s,i,o,l,c){if(tk.apply(this,arguments),wa){if(wa){var u=$c;wa=!1,$c=null}else throw Error(B(198));Wc||(Wc=!0,df=u)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ly(t){if(ci(t)!==t)throw Error(B(188))}function rk(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ly(s),t;if(i===r)return ly(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function qw(t){return t=rk(t),t!==null?Kw(t):null}function Kw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kw(t);if(e!==null)return e;t=t.sibling}return null}var Gw=ln.unstable_scheduleCallback,cy=ln.unstable_cancelCallback,sk=ln.unstable_shouldYield,ik=ln.unstable_requestPaint,Ke=ln.unstable_now,ok=ln.unstable_getCurrentPriorityLevel,Cp=ln.unstable_ImmediatePriority,Qw=ln.unstable_UserBlockingPriority,Hc=ln.unstable_NormalPriority,ak=ln.unstable_LowPriority,Yw=ln.unstable_IdlePriority,Mu=null,Gn=null;function lk(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:dk,ck=Math.log,uk=Math.LN2;function dk(t){return t>>>=0,t===0?32:31-(ck(t)/uk|0)|0}var Gl=64,Ql=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=da(l):(i&=o,i!==0&&(r=da(i)))}else o=n&~s,o!==0?r=da(o):i!==0&&(r=da(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),s=1<<n,r|=t[n],e&=~s;return r}function hk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Rn(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=hk(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jw(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function Qd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function pk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Rn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var _e=0;function Xw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zw,Rp,eE,tE,nE,ff=!1,Yl=[],Zr=null,es=null,ts=null,Ma=new Map,Fa=new Map,Ur=[],mk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uy(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function ta(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ml(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function gk(t,e,n,r,s){switch(e){case"focusin":return Zr=ta(Zr,t,e,n,r,s),!0;case"dragenter":return es=ta(es,t,e,n,r,s),!0;case"mouseover":return ts=ta(ts,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ma.set(i,ta(Ma.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Fa.set(i,ta(Fa.get(i)||null,t,e,n,r,s)),!0}return!1}function rE(t){var e=Us(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=Hw(n),e!==null){t.blockedOn=e,nE(t.priority,function(){eE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return e=ml(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function dy(t,e,n){xc(t)&&n.delete(e)}function yk(){ff=!1,Zr!==null&&xc(Zr)&&(Zr=null),es!==null&&xc(es)&&(es=null),ts!==null&&xc(ts)&&(ts=null),Ma.forEach(dy),Fa.forEach(dy)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,yk)))}function Ua(t){function e(s){return na(s,t)}if(0<Yl.length){na(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zr!==null&&na(Zr,t),es!==null&&na(es,t),ts!==null&&na(ts,t),Ma.forEach(e),Fa.forEach(e),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)rE(n),n.blockedOn===null&&Ur.shift()}var Ki=Ir.ReactCurrentBatchConfig,Kc=!0;function vk(t,e,n,r){var s=_e,i=Ki.transition;Ki.transition=null;try{_e=1,Dp(t,e,n,r)}finally{_e=s,Ki.transition=i}}function _k(t,e,n,r){var s=_e,i=Ki.transition;Ki.transition=null;try{_e=4,Dp(t,e,n,r)}finally{_e=s,Ki.transition=i}}function Dp(t,e,n,r){if(Kc){var s=pf(t,e,n,r);if(s===null)ih(t,e,r,Gc,n),uy(t,r);else if(gk(s,t,e,n,r))r.stopPropagation();else if(uy(t,r),e&4&&-1<mk.indexOf(t)){for(;s!==null;){var i=ml(s);if(i!==null&&Zw(i),i=pf(t,e,n,r),i===null&&ih(t,e,r,Gc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ih(t,e,r,null,n)}}var Gc=null;function pf(t,e,n,r){if(Gc=null,t=Pp(r),t=Us(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gc=t,null}function sE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ok()){case Cp:return 1;case Qw:return 4;case Hc:case ak:return 16;case Yw:return 536870912;default:return 16}default:return 16}}var Gr=null,Op=null,Tc=null;function iE(){if(Tc)return Tc;var t,e=Op,n=e.length,r,s="value"in Gr?Gr.value:Gr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Tc=s.slice(t,1<r?1-r:void 0)}function Ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function hy(){return!1}function dn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jl:hy,this.isPropagationStopped=hy,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=dn(wo),pl=Me({},wo,{view:0,detail:0}),wk=dn(pl),Yd,Jd,ra,Fu=Me({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Yd=t.screenX-ra.screenX,Jd=t.screenY-ra.screenY):Jd=Yd=0,ra=t),Yd)},movementY:function(t){return"movementY"in t?t.movementY:Jd}}),fy=dn(Fu),Ek=Me({},Fu,{dataTransfer:0}),xk=dn(Ek),Tk=Me({},pl,{relatedTarget:0}),Xd=dn(Tk),Ik=Me({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),Sk=dn(Ik),kk=Me({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ak=dn(kk),bk=Me({},wo,{data:0}),py=dn(bk),Pk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ck={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nk[t])?!!e[t]:!1}function Lp(){return Rk}var Dk=Me({},pl,{key:function(t){if(t.key){var e=Pk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ck[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lp,charCode:function(t){return t.type==="keypress"?Ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ok=dn(Dk),jk=Me({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),my=dn(jk),Lk=Me({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lp}),Vk=dn(Lk),Mk=Me({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fk=dn(Mk),Uk=Me({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bk=dn(Uk),zk=[9,13,27,32],Vp=gr&&"CompositionEvent"in window,Ea=null;gr&&"documentMode"in document&&(Ea=document.documentMode);var $k=gr&&"TextEvent"in window&&!Ea,oE=gr&&(!Vp||Ea&&8<Ea&&11>=Ea),gy=" ",yy=!1;function aE(t,e){switch(t){case"keyup":return zk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function Wk(t,e){switch(t){case"compositionend":return lE(e);case"keypress":return e.which!==32?null:(yy=!0,gy);case"textInput":return t=e.data,t===gy&&yy?null:t;default:return null}}function Hk(t,e){if(Di)return t==="compositionend"||!Vp&&aE(t,e)?(t=iE(),Tc=Op=Gr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oE&&e.locale!=="ko"?null:e.data;default:return null}}var qk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qk[t.type]:e==="textarea"}function cE(t,e,n,r){Uw(r),e=Qc(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,Ba=null;function Kk(t){wE(t,0)}function Uu(t){var e=Li(t);if(Dw(e))return t}function Gk(t,e){if(t==="change")return e}var uE=!1;if(gr){var Zd;if(gr){var eh="oninput"in document;if(!eh){var _y=document.createElement("div");_y.setAttribute("oninput","return;"),eh=typeof _y.oninput=="function"}Zd=eh}else Zd=!1;uE=Zd&&(!document.documentMode||9<document.documentMode)}function wy(){xa&&(xa.detachEvent("onpropertychange",dE),Ba=xa=null)}function dE(t){if(t.propertyName==="value"&&Uu(Ba)){var e=[];cE(e,Ba,t,Pp(t)),Ww(Kk,e)}}function Qk(t,e,n){t==="focusin"?(wy(),xa=e,Ba=n,xa.attachEvent("onpropertychange",dE)):t==="focusout"&&wy()}function Yk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(Ba)}function Jk(t,e){if(t==="click")return Uu(e)}function Xk(t,e){if(t==="input"||t==="change")return Uu(e)}function Zk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Zk;function za(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Qh.call(e,s)||!jn(t[s],e[s]))return!1}return!0}function Ey(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xy(t,e){var n=Ey(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ey(n)}}function hE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fE(){for(var t=window,e=zc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zc(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eA(t){var e=fE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hE(n.ownerDocument.documentElement,n)){if(r!==null&&Mp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=xy(n,i);var o=xy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tA=gr&&"documentMode"in document&&11>=document.documentMode,Oi=null,mf=null,Ta=null,gf=!1;function Ty(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||Oi==null||Oi!==zc(r)||(r=Oi,"selectionStart"in r&&Mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ta&&za(Ta,r)||(Ta=r,r=Qc(mf,"onSelect"),0<r.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function Xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},th={},pE={};gr&&(pE=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Bu(t){if(th[t])return th[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pE)return th[t]=e[n];return t}var mE=Bu("animationend"),gE=Bu("animationiteration"),yE=Bu("animationstart"),vE=Bu("transitionend"),_E=new Map,Iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xs(t,e){_E.set(t,e),li(e,[t])}for(var nh=0;nh<Iy.length;nh++){var rh=Iy[nh],nA=rh.toLowerCase(),rA=rh[0].toUpperCase()+rh.slice(1);xs(nA,"on"+rA)}xs(mE,"onAnimationEnd");xs(gE,"onAnimationIteration");xs(yE,"onAnimationStart");xs("dblclick","onDoubleClick");xs("focusin","onFocus");xs("focusout","onBlur");xs(vE,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Sy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nk(r,e,void 0,t),t.currentTarget=null}function wE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Sy(s,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Sy(s,l,u),i=c}}}if(Wc)throw t=df,Wc=!1,df=null,t}function be(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var r=t+"__bubble";n.has(r)||(EE(e,t,2,!1),n.add(r))}function sh(t,e,n){var r=0;e&&(r|=4),EE(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[Zl]){t[Zl]=!0,bw.forEach(function(n){n!=="selectionchange"&&(sA.has(n)||sh(n,!1,t),sh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,sh("selectionchange",!1,e))}}function EE(t,e,n,r){switch(sE(e)){case 1:var s=vk;break;case 4:s=_k;break;default:s=Dp}n=s.bind(null,e,n,t),s=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ih(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Us(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Ww(function(){var u=i,f=Pp(n),m=[];e:{var g=_E.get(t);if(g!==void 0){var A=jp,P=t;switch(t){case"keypress":if(Ic(n)===0)break e;case"keydown":case"keyup":A=Ok;break;case"focusin":P="focus",A=Xd;break;case"focusout":P="blur",A=Xd;break;case"beforeblur":case"afterblur":A=Xd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=xk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Vk;break;case mE:case gE:case yE:A=Sk;break;case vE:A=Fk;break;case"scroll":A=wk;break;case"wheel":A=Bk;break;case"copy":case"cut":case"paste":A=Ak;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=my}var N=(e&4)!==0,j=!N&&t==="scroll",T=N?g!==null?g+"Capture":null:g;N=[];for(var _=u,S;_!==null;){S=_;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,T!==null&&(L=Va(_,T),L!=null&&N.push(Wa(_,L,S)))),j)break;_=_.return}0<N.length&&(g=new A(g,P,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==lf&&(P=n.relatedTarget||n.fromElement)&&(Us(P)||P[yr]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=u,P=P?Us(P):null,P!==null&&(j=ci(P),P!==j||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=u),A!==P)){if(N=fy,L="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=my,L="onPointerLeave",T="onPointerEnter",_="pointer"),j=A==null?g:Li(A),S=P==null?g:Li(P),g=new N(L,_+"leave",A,n,f),g.target=j,g.relatedTarget=S,L=null,Us(f)===u&&(N=new N(T,_+"enter",P,n,f),N.target=S,N.relatedTarget=j,L=N),j=L,A&&P)t:{for(N=A,T=P,_=0,S=N;S;S=ki(S))_++;for(S=0,L=T;L;L=ki(L))S++;for(;0<_-S;)N=ki(N),_--;for(;0<S-_;)T=ki(T),S--;for(;_--;){if(N===T||T!==null&&N===T.alternate)break t;N=ki(N),T=ki(T)}N=null}else N=null;A!==null&&ky(m,g,A,N,!1),P!==null&&j!==null&&ky(m,j,P,N,!0)}}e:{if(g=u?Li(u):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var U=Gk;else if(vy(g))if(uE)U=Xk;else{U=Yk;var z=Qk}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=Jk);if(U&&(U=U(t,u))){cE(m,U,n,f);break e}z&&z(t,g,u),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&nf(g,"number",g.value)}switch(z=u?Li(u):window,t){case"focusin":(vy(z)||z.contentEditable==="true")&&(Oi=z,mf=u,Ta=null);break;case"focusout":Ta=mf=Oi=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Ty(m,n,f);break;case"selectionchange":if(tA)break;case"keydown":case"keyup":Ty(m,n,f)}var w;if(Vp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Di?aE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(oE&&n.locale!=="ko"&&(Di||v!=="onCompositionStart"?v==="onCompositionEnd"&&Di&&(w=iE()):(Gr=f,Op="value"in Gr?Gr.value:Gr.textContent,Di=!0)),z=Qc(u,v),0<z.length&&(v=new py(v,t,null,n,f),m.push({event:v,listeners:z}),w?v.data=w:(w=lE(n),w!==null&&(v.data=w)))),(w=$k?Wk(t,n):Hk(t,n))&&(u=Qc(u,"onBeforeInput"),0<u.length&&(f=new py("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=w))}wE(m,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Va(t,n),i!=null&&r.unshift(Wa(t,i,s)),i=Va(t,e),i!=null&&r.push(Wa(t,i,s))),t=t.return}return r}function ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ky(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Va(n,i),c!=null&&o.unshift(Wa(n,c,l))):s||(c=Va(n,i),c!=null&&o.push(Wa(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iA=/\r\n?/g,oA=/\u0000|\uFFFD/g;function Ay(t){return(typeof t=="string"?t:""+t).replace(iA,`
`).replace(oA,"")}function ec(t,e,n){if(e=Ay(e),Ay(t)!==e&&n)throw Error(B(425))}function Yc(){}var yf=null,vf=null;function _f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,aA=typeof clearTimeout=="function"?clearTimeout:void 0,by=typeof Promise=="function"?Promise:void 0,lA=typeof queueMicrotask=="function"?queueMicrotask:typeof by<"u"?function(t){return by.resolve(null).then(t).catch(cA)}:wf;function cA(t){setTimeout(function(){throw t})}function oh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ua(e)}function ns(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),qn="__reactFiber$"+Eo,Ha="__reactProps$"+Eo,yr="__reactContainer$"+Eo,Ef="__reactEvents$"+Eo,uA="__reactListeners$"+Eo,dA="__reactHandles$"+Eo;function Us(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Py(t);t!==null;){if(n=t[qn])return n;t=Py(t)}return e}t=n,n=t.parentNode}return null}function ml(t){return t=t[qn]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function zu(t){return t[Ha]||null}var xf=[],Vi=-1;function Ts(t){return{current:t}}function Re(t){0>Vi||(t.current=xf[Vi],xf[Vi]=null,Vi--)}function Ie(t,e){Vi++,xf[Vi]=t.current,t.current=e}var ps={},Nt=Ts(ps),Kt=Ts(!1),Ys=ps;function so(t,e){var n=t.type.contextTypes;if(!n)return ps;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Gt(t){return t=t.childContextTypes,t!=null}function Jc(){Re(Kt),Re(Nt)}function Cy(t,e,n){if(Nt.current!==ps)throw Error(B(168));Ie(Nt,e),Ie(Kt,n)}function xE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,QS(t)||"Unknown",s));return Me({},n,r)}function Xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ps,Ys=Nt.current,Ie(Nt,t),Ie(Kt,Kt.current),!0}function Ny(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=xE(t,e,Ys),r.__reactInternalMemoizedMergedChildContext=t,Re(Kt),Re(Nt),Ie(Nt,t)):Re(Kt),Ie(Kt,n)}var ar=null,$u=!1,ah=!1;function TE(t){ar===null?ar=[t]:ar.push(t)}function hA(t){$u=!0,TE(t)}function Is(){if(!ah&&ar!==null){ah=!0;var t=0,e=_e;try{var n=ar;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ar=null,$u=!1}catch(s){throw ar!==null&&(ar=ar.slice(t+1)),Gw(Cp,Is),s}finally{_e=e,ah=!1}}return null}var Mi=[],Fi=0,Zc=null,eu=0,pn=[],mn=0,Js=null,cr=1,ur="";function Ls(t,e){Mi[Fi++]=eu,Mi[Fi++]=Zc,Zc=t,eu=e}function IE(t,e,n){pn[mn++]=cr,pn[mn++]=ur,pn[mn++]=Js,Js=t;var r=cr;t=ur;var s=32-Rn(r)-1;r&=~(1<<s),n+=1;var i=32-Rn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,cr=1<<32-Rn(e)+s|n<<s|r,ur=i+t}else cr=1<<i|n<<s|r,ur=t}function Fp(t){t.return!==null&&(Ls(t,1),IE(t,1,0))}function Up(t){for(;t===Zc;)Zc=Mi[--Fi],Mi[Fi]=null,eu=Mi[--Fi],Mi[Fi]=null;for(;t===Js;)Js=pn[--mn],pn[mn]=null,ur=pn[--mn],pn[mn]=null,cr=pn[--mn],pn[mn]=null}var on=null,nn=null,De=!1,Cn=null;function SE(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,nn=ns(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Js!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,nn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function If(t){if(De){var e=nn;if(e){var n=e;if(!Ry(t,e)){if(Tf(t))throw Error(B(418));e=ns(n.nextSibling);var r=on;e&&Ry(t,e)?SE(r,n):(t.flags=t.flags&-4097|2,De=!1,on=t)}}else{if(Tf(t))throw Error(B(418));t.flags=t.flags&-4097|2,De=!1,on=t}}}function Dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function tc(t){if(t!==on)return!1;if(!De)return Dy(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_f(t.type,t.memoizedProps)),e&&(e=nn)){if(Tf(t))throw kE(),Error(B(418));for(;e;)SE(t,e),e=ns(e.nextSibling)}if(Dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=ns(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=on?ns(t.stateNode.nextSibling):null;return!0}function kE(){for(var t=nn;t;)t=ns(t.nextSibling)}function io(){nn=on=null,De=!1}function Bp(t){Cn===null?Cn=[t]:Cn.push(t)}var fA=Ir.ReactCurrentBatchConfig;function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function nc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oy(t){var e=t._init;return e(t._payload)}function AE(t){function e(T,_){if(t){var S=T.deletions;S===null?(T.deletions=[_],T.flags|=16):S.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function s(T,_){return T=os(T,_),T.index=0,T.sibling=null,T}function i(T,_,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<_?(T.flags|=2,_):S):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,S,L){return _===null||_.tag!==6?(_=ph(S,T.mode,L),_.return=T,_):(_=s(_,S),_.return=T,_)}function c(T,_,S,L){var U=S.type;return U===Ri?f(T,_,S.props.children,L,S.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Mr&&Oy(U)===_.type)?(L=s(_,S.props),L.ref=sa(T,_,S),L.return=T,L):(L=Nc(S.type,S.key,S.props,null,T.mode,L),L.ref=sa(T,_,S),L.return=T,L)}function u(T,_,S,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=mh(S,T.mode,L),_.return=T,_):(_=s(_,S.children||[]),_.return=T,_)}function f(T,_,S,L,U){return _===null||_.tag!==7?(_=qs(S,T.mode,L,U),_.return=T,_):(_=s(_,S),_.return=T,_)}function m(T,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ph(""+_,T.mode,S),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Hl:return S=Nc(_.type,_.key,_.props,null,T.mode,S),S.ref=sa(T,null,_),S.return=T,S;case Ni:return _=mh(_,T.mode,S),_.return=T,_;case Mr:var L=_._init;return m(T,L(_._payload),S)}if(ua(_)||Zo(_))return _=qs(_,T.mode,S,null),_.return=T,_;nc(T,_)}return null}function g(T,_,S,L){var U=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(T,_,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:return S.key===U?c(T,_,S,L):null;case Ni:return S.key===U?u(T,_,S,L):null;case Mr:return U=S._init,g(T,_,U(S._payload),L)}if(ua(S)||Zo(S))return U!==null?null:f(T,_,S,L,null);nc(T,S)}return null}function A(T,_,S,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return T=T.get(S)||null,l(_,T,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Hl:return T=T.get(L.key===null?S:L.key)||null,c(_,T,L,U);case Ni:return T=T.get(L.key===null?S:L.key)||null,u(_,T,L,U);case Mr:var z=L._init;return A(T,_,S,z(L._payload),U)}if(ua(L)||Zo(L))return T=T.get(S)||null,f(_,T,L,U,null);nc(_,L)}return null}function P(T,_,S,L){for(var U=null,z=null,w=_,v=_=0,E=null;w!==null&&v<S.length;v++){w.index>v?(E=w,w=null):E=w.sibling;var k=g(T,w,S[v],L);if(k===null){w===null&&(w=E);break}t&&w&&k.alternate===null&&e(T,w),_=i(k,_,v),z===null?U=k:z.sibling=k,z=k,w=E}if(v===S.length)return n(T,w),De&&Ls(T,v),U;if(w===null){for(;v<S.length;v++)w=m(T,S[v],L),w!==null&&(_=i(w,_,v),z===null?U=w:z.sibling=w,z=w);return De&&Ls(T,v),U}for(w=r(T,w);v<S.length;v++)E=A(w,T,v,S[v],L),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?v:E.key),_=i(E,_,v),z===null?U=E:z.sibling=E,z=E);return t&&w.forEach(function(b){return e(T,b)}),De&&Ls(T,v),U}function N(T,_,S,L){var U=Zo(S);if(typeof U!="function")throw Error(B(150));if(S=U.call(S),S==null)throw Error(B(151));for(var z=U=null,w=_,v=_=0,E=null,k=S.next();w!==null&&!k.done;v++,k=S.next()){w.index>v?(E=w,w=null):E=w.sibling;var b=g(T,w,k.value,L);if(b===null){w===null&&(w=E);break}t&&w&&b.alternate===null&&e(T,w),_=i(b,_,v),z===null?U=b:z.sibling=b,z=b,w=E}if(k.done)return n(T,w),De&&Ls(T,v),U;if(w===null){for(;!k.done;v++,k=S.next())k=m(T,k.value,L),k!==null&&(_=i(k,_,v),z===null?U=k:z.sibling=k,z=k);return De&&Ls(T,v),U}for(w=r(T,w);!k.done;v++,k=S.next())k=A(w,T,v,k.value,L),k!==null&&(t&&k.alternate!==null&&w.delete(k.key===null?v:k.key),_=i(k,_,v),z===null?U=k:z.sibling=k,z=k);return t&&w.forEach(function(C){return e(T,C)}),De&&Ls(T,v),U}function j(T,_,S,L){if(typeof S=="object"&&S!==null&&S.type===Ri&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:e:{for(var U=S.key,z=_;z!==null;){if(z.key===U){if(U=S.type,U===Ri){if(z.tag===7){n(T,z.sibling),_=s(z,S.props.children),_.return=T,T=_;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Mr&&Oy(U)===z.type){n(T,z.sibling),_=s(z,S.props),_.ref=sa(T,z,S),_.return=T,T=_;break e}n(T,z);break}else e(T,z);z=z.sibling}S.type===Ri?(_=qs(S.props.children,T.mode,L,S.key),_.return=T,T=_):(L=Nc(S.type,S.key,S.props,null,T.mode,L),L.ref=sa(T,_,S),L.return=T,T=L)}return o(T);case Ni:e:{for(z=S.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(T,_.sibling),_=s(_,S.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=mh(S,T.mode,L),_.return=T,T=_}return o(T);case Mr:return z=S._init,j(T,_,z(S._payload),L)}if(ua(S))return P(T,_,S,L);if(Zo(S))return N(T,_,S,L);nc(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(T,_.sibling),_=s(_,S),_.return=T,T=_):(n(T,_),_=ph(S,T.mode,L),_.return=T,T=_),o(T)):n(T,_)}return j}var oo=AE(!0),bE=AE(!1),tu=Ts(null),nu=null,Ui=null,zp=null;function $p(){zp=Ui=nu=null}function Wp(t){var e=tu.current;Re(tu),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){nu=t,zp=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(zp!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(nu===null)throw Error(B(308));Ui=t,nu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Bs=null;function Hp(t){Bs===null?Bs=[t]:Bs.push(t)}function PE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Hp(e)):(n.next=s.next,s.next=n),e.interleaved=n,vr(t,r)}function vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fr=!1;function qp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function CE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rs(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,vr(t,n)}return s=r.interleaved,s===null?(e.next=e,Hp(r)):(e.next=s.next,s.next=e),r.interleaved=e,vr(t,n)}function Sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Np(t,n)}}function jy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var s=t.updateQueue;Fr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var m=s.baseState;o=0,f=u=c=null,l=i;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(g=e,A=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(A,m,g);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(A,m,g):P,g==null)break e;m=Me({},m,g);break e;case 2:Fr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=A,c=m):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(c=m),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Zs|=o,t.lanes=o,t.memoizedState=m}}function Ly(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var gl={},Qn=Ts(gl),qa=Ts(gl),Ka=Ts(gl);function zs(t){if(t===gl)throw Error(B(174));return t}function Kp(t,e){switch(Ie(Ka,e),Ie(qa,t),Ie(Qn,gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}Re(Qn),Ie(Qn,e)}function ao(){Re(Qn),Re(qa),Re(Ka)}function NE(t){zs(Ka.current);var e=zs(Qn.current),n=sf(e,t.type);e!==n&&(Ie(qa,t),Ie(Qn,n))}function Gp(t){qa.current===t&&(Re(Qn),Re(qa))}var je=Ts(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lh=[];function Qp(){for(var t=0;t<lh.length;t++)lh[t]._workInProgressVersionPrimary=null;lh.length=0}var kc=Ir.ReactCurrentDispatcher,ch=Ir.ReactCurrentBatchConfig,Xs=0,Le=null,it=null,ht=null,iu=!1,Ia=!1,Ga=0,pA=0;function It(){throw Error(B(321))}function Yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Jp(t,e,n,r,s,i){if(Xs=i,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kc.current=t===null||t.memoizedState===null?vA:_A,t=n(r,s),Ia){i=0;do{if(Ia=!1,Ga=0,25<=i)throw Error(B(301));i+=1,ht=it=null,e.updateQueue=null,kc.current=wA,t=n(r,s)}while(Ia)}if(kc.current=ou,e=it!==null&&it.next!==null,Xs=0,ht=it=Le=null,iu=!1,e)throw Error(B(300));return t}function Xp(){var t=Ga!==0;return Ga=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Le.memoizedState=ht=t:ht=ht.next=t,ht}function xn(){if(it===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ht===null?Le.memoizedState:ht.next;if(e!==null)ht=e,it=t;else{if(t===null)throw Error(B(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ht===null?Le.memoizedState=ht=t:ht=ht.next=t}return ht}function Qa(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=xn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=it,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((Xs&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,Le.lanes|=f,Zs|=f}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,jn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Le.lanes|=i,Zs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dh(t){var e=xn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);jn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function RE(){}function DE(t,e){var n=Le,r=xn(),s=e(),i=!jn(r.memoizedState,s);if(i&&(r.memoizedState=s,qt=!0),r=r.queue,Zp(LE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Ya(9,jE.bind(null,n,r,s,e),void 0,null),ft===null)throw Error(B(349));Xs&30||OE(n,e,s)}return s}function OE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jE(t,e,n,r){e.value=n,e.getSnapshot=r,VE(e)&&ME(t)}function LE(t,e,n){return n(function(){VE(e)&&ME(t)})}function VE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function ME(t){var e=vr(t,1);e!==null&&Dn(e,t,1,-1)}function Vy(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=yA.bind(null,Le,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function FE(){return xn().memoizedState}function Ac(t,e,n,r){var s=Wn();Le.flags|=t,s.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function Wu(t,e,n,r){var s=xn();r=r===void 0?null:r;var i=void 0;if(it!==null){var o=it.memoizedState;if(i=o.destroy,r!==null&&Yp(r,o.deps)){s.memoizedState=Ya(e,n,i,r);return}}Le.flags|=t,s.memoizedState=Ya(1|e,n,i,r)}function My(t,e){return Ac(8390656,8,t,e)}function Zp(t,e){return Wu(2048,8,t,e)}function UE(t,e){return Wu(4,2,t,e)}function BE(t,e){return Wu(4,4,t,e)}function zE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $E(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4,4,zE.bind(null,e,t),n)}function em(){}function WE(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function HE(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qE(t,e,n){return Xs&21?(jn(n,e)||(n=Jw(),Le.lanes|=n,Zs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function mA(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=ch.transition;ch.transition={};try{t(!1),e()}finally{_e=n,ch.transition=r}}function KE(){return xn().memoizedState}function gA(t,e,n){var r=is(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GE(t))QE(e,n);else if(n=PE(t,e,n,r),n!==null){var s=jt();Dn(n,t,r,s),YE(n,e,r)}}function yA(t,e,n){var r=is(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GE(t))QE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,jn(l,o)){var c=e.interleaved;c===null?(s.next=s,Hp(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=PE(t,e,s,r),n!==null&&(s=jt(),Dn(n,t,r,s),YE(n,e,r))}}function GE(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function QE(t,e){Ia=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Np(t,n)}}var ou={readContext:En,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},vA={readContext:En,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:My,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4194308,4,zE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ac(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ac(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gA.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Vy,useDebugValue:em,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Vy(!1),e=t[0];return t=mA.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,s=Wn();if(De){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ft===null)throw Error(B(349));Xs&30||OE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,My(LE.bind(null,r,i,t),[t]),r.flags|=2048,Ya(9,jE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Wn(),e=ft.identifierPrefix;if(De){var n=ur,r=cr;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_A={readContext:En,useCallback:WE,useContext:En,useEffect:Zp,useImperativeHandle:$E,useInsertionEffect:UE,useLayoutEffect:BE,useMemo:HE,useReducer:uh,useRef:FE,useState:function(){return uh(Qa)},useDebugValue:em,useDeferredValue:function(t){var e=xn();return qE(e,it.memoizedState,t)},useTransition:function(){var t=uh(Qa)[0],e=xn().memoizedState;return[t,e]},useMutableSource:RE,useSyncExternalStore:DE,useId:KE,unstable_isNewReconciler:!1},wA={readContext:En,useCallback:WE,useContext:En,useEffect:Zp,useImperativeHandle:$E,useInsertionEffect:UE,useLayoutEffect:BE,useMemo:HE,useReducer:dh,useRef:FE,useState:function(){return dh(Qa)},useDebugValue:em,useDeferredValue:function(t){var e=xn();return it===null?e.memoizedState=t:qE(e,it.memoizedState,t)},useTransition:function(){var t=dh(Qa)[0],e=xn().memoizedState;return[t,e]},useMutableSource:RE,useSyncExternalStore:DE,useId:KE,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hu={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),s=is(t),i=fr(r,s);i.payload=e,n!=null&&(i.callback=n),e=rs(t,i,s),e!==null&&(Dn(e,t,s,r),Sc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),s=is(t),i=fr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=rs(t,i,s),e!==null&&(Dn(e,t,s,r),Sc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=is(t),s=fr(n,r);s.tag=2,e!=null&&(s.callback=e),e=rs(t,s,r),e!==null&&(Dn(e,t,r,n),Sc(e,t,r))}};function Fy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(s,i):!0}function JE(t,e,n){var r=!1,s=ps,i=e.contextType;return typeof i=="object"&&i!==null?i=En(i):(s=Gt(e)?Ys:Nt.current,r=e.contextTypes,i=(r=r!=null)?so(t,s):ps),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Uy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function Af(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},qp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=En(i):(i=Gt(e)?Ys:Nt.current,s.context=so(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(kf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Hu.enqueueReplaceState(s,s.state,null),ru(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",r=e;do n+=GS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EA=typeof WeakMap=="function"?WeakMap:Map;function XE(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,Mf=r),bf(t,e)},n}function ZE(t,e,n){n=fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){bf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function By(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=jA.bind(null,t,e,n),e.then(t,t))}function zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $y(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,rs(n,e,1))),n.lanes|=1),t)}var xA=Ir.ReactCurrentOwner,qt=!1;function Ot(t,e,n,r){e.child=t===null?bE(e,null,n,r):oo(e,t.child,n,r)}function Wy(t,e,n,r,s){n=n.render;var i=e.ref;return Gi(e,s),r=Jp(t,e,n,r,i,s),n=Xp(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_r(t,e,s)):(De&&n&&Fp(e),e.flags|=1,Ot(t,e,r,s),e.child)}function Hy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!lm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,e0(t,e,i,r,s)):(t=Nc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return _r(t,e,s)}return e.flags|=1,t=os(i,r),t.ref=e.ref,t.return=e,e.child=t}function e0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(za(i,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,_r(t,e,s)}return Pf(t,e,n,r,s)}function t0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(zi,tn),tn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(zi,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ie(zi,tn),tn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ie(zi,tn),tn|=r;return Ot(t,e,s,n),e.child}function n0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,r,s){var i=Gt(n)?Ys:Nt.current;return i=so(e,i),Gi(e,s),n=Jp(t,e,n,r,i,s),r=Xp(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_r(t,e,s)):(De&&r&&Fp(e),e.flags|=1,Ot(t,e,n,s),e.child)}function qy(t,e,n,r,s){if(Gt(n)){var i=!0;Xc(e)}else i=!1;if(Gi(e,s),e.stateNode===null)bc(t,e),JE(e,n,r),Af(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=Gt(n)?Ys:Nt.current,u=so(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Uy(e,o,r,u),Fr=!1;var g=e.memoizedState;o.state=g,ru(e,r,o,s),c=e.memoizedState,l!==r||g!==c||Kt.current||Fr?(typeof f=="function"&&(kf(e,n,f,r),c=e.memoizedState),(l=Fr||Fy(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,CE(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:bn(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=En(c):(c=Gt(n)?Ys:Nt.current,c=so(e,c));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&Uy(e,o,r,c),Fr=!1,g=e.memoizedState,o.state=g,ru(e,r,o,s);var P=e.memoizedState;l!==m||g!==P||Kt.current||Fr?(typeof A=="function"&&(kf(e,n,A,r),P=e.memoizedState),(u=Fr||Fy(e,n,u,r,g,P,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Cf(t,e,n,r,i,s)}function Cf(t,e,n,r,s,i){n0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Ny(e,n,!1),_r(t,e,i);r=e.stateNode,xA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,i),e.child=oo(e,null,l,i)):Ot(t,e,l,i),e.memoizedState=r.state,s&&Ny(e,n,!0),e.child}function r0(t){var e=t.stateNode;e.pendingContext?Cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cy(t,e.context,!1),Kp(t,e.containerInfo)}function Ky(t,e,n,r,s){return io(),Bp(s),e.flags|=256,Ot(t,e,n,r),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function s0(t,e,n){var r=e.pendingProps,s=je.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ie(je,s&1),t===null)return If(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gu(o,r,0,null),t=qs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Rf(n),e.memoizedState=Nf,t):tm(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return TA(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=os(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=os(l,i):(i=qs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Nf,r}return i=t.child,t=i.sibling,r=os(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tm(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rc(t,e,n,r){return r!==null&&Bp(r),oo(e,t.child,null,n),t=tm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=hh(Error(B(422))),rc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Gu({mode:"visible",children:r.children},s,0,null),i=qs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=Nf,i);if(!(e.mode&1))return rc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=hh(i,r,void 0),rc(t,e,o,r)}if(l=(o&t.childLanes)!==0,qt||l){if(r=ft,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,vr(t,s),Dn(r,t,s,-1))}return am(),r=hh(Error(B(421))),rc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=LA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,nn=ns(s.nextSibling),on=e,De=!0,Cn=null,t!==null&&(pn[mn++]=cr,pn[mn++]=ur,pn[mn++]=Js,cr=t.id,ur=t.overflow,Js=e),e=tm(e,r.children),e.flags|=4096,e)}function Gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sf(t.return,e,n)}function fh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function i0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ot(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gy(t,n,e);else if(t.tag===19)Gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(je,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),fh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&su(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}fh(e,!0,n,null,i);break;case"together":fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=os(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=os(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IA(t,e,n){switch(e.tag){case 3:r0(e),io();break;case 5:NE(e);break;case 1:Gt(e.type)&&Xc(e);break;case 4:Kp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ie(tu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?s0(t,e,n):(Ie(je,je.current&1),t=_r(t,e,n),t!==null?t.sibling:null);Ie(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ie(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,t0(t,e,n)}return _r(t,e,n)}var o0,Df,a0,l0;o0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};a0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,zs(Qn.current);var i=null;switch(n){case"input":s=ef(t,s),r=ef(t,r),i=[];break;case"select":s=Me({},s,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":s=rf(t,s),r=rf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yc)}of(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&be("scroll",t),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};l0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ia(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SA(t,e,n){var r=e.pendingProps;switch(Up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Gt(e.type)&&Jc(),St(e),null;case 3:return r=e.stateNode,ao(),Re(Kt),Re(Nt),Qp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(Bf(Cn),Cn=null))),Df(t,e),St(e),null;case 5:Gp(e);var s=zs(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)a0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return St(e),null}if(t=zs(Qn.current),tc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[qn]=e,r[Ha]=i,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(s=0;s<ha.length;s++)be(ha[s],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":ry(r,i),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},be("invalid",r);break;case"textarea":iy(r,i),be("invalid",r)}of(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ec(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ec(r.textContent,l,t),s=["children",""+l]):ja.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":ql(r),sy(r,i,!0);break;case"textarea":ql(r),oy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qn]=e,t[Ha]=r,o0(t,e,!1,!1),e.stateNode=t;e:{switch(o=af(n,r),n){case"dialog":be("cancel",t),be("close",t),s=r;break;case"iframe":case"object":case"embed":be("load",t),s=r;break;case"video":case"audio":for(s=0;s<ha.length;s++)be(ha[s],t);s=r;break;case"source":be("error",t),s=r;break;case"img":case"image":case"link":be("error",t),be("load",t),s=r;break;case"details":be("toggle",t),s=r;break;case"input":ry(t,r),s=ef(t,r),be("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Me({},r,{value:void 0}),be("invalid",t);break;case"textarea":iy(t,r),s=rf(t,r),be("invalid",t);break;default:s=r}of(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Fw(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Vw(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&La(t,c):typeof c=="number"&&La(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ja.hasOwnProperty(i)?c!=null&&i==="onScroll"&&be("scroll",t):c!=null&&Sp(t,i,c,o))}switch(n){case"input":ql(t),sy(t,r,!1);break;case"textarea":ql(t),oy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Wi(t,!!r.multiple,i,!1):r.defaultValue!=null&&Wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Yc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=zs(Ka.current),zs(Qn.current),tc(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(i=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:ec(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ec(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return St(e),null;case 13:if(Re(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&nn!==null&&e.mode&1&&!(e.flags&128))kE(),io(),e.flags|=98560,i=!1;else if(i=tc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[qn]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),i=!1}else Cn!==null&&(Bf(Cn),Cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?at===0&&(at=3):am())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return ao(),Df(t,e),t===null&&$a(e.stateNode.containerInfo),St(e),null;case 10:return Wp(e.type._context),St(e),null;case 17:return Gt(e.type)&&Jc(),St(e),null;case 19:if(Re(je),i=e.memoizedState,i===null)return St(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ia(i,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,ia(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(je,je.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ke()>co&&(e.flags|=128,r=!0,ia(i,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!De)return St(e),null}else 2*Ke()-i.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,r=!0,ia(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ke(),e.sibling=null,n=je.current,Ie(je,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return om(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tn&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function kA(t,e){switch(Up(e),e.tag){case 1:return Gt(e.type)&&Jc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Re(Kt),Re(Nt),Qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gp(e),null;case 13:if(Re(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(je),null;case 4:return ao(),null;case 10:return Wp(e.type._context),null;case 22:case 23:return om(),null;case 24:return null;default:return null}}var sc=!1,bt=!1,AA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Of(t,e,n){try{n()}catch(r){ze(t,e,r)}}var Qy=!1;function bA(t,e){if(yf=Kc,t=fE(),Mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,m=t,g=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++u===s&&(l=o),g===i&&++f===r&&(c=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:t,selectionRange:n},Kc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,j=P.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:bn(e.type,N),j);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(L){ze(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return P=Qy,Qy=!1,P}function Sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Of(e,n,i)}s=s.next}while(s!==r)}}function qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function c0(t){var e=t.alternate;e!==null&&(t.alternate=null,c0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Ha],delete e[Ef],delete e[uA],delete e[dA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u0(t){return t.tag===5||t.tag===3||t.tag===4}function Yy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yc));else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function Vf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}var yt=null,Pn=!1;function Lr(t,e,n){for(n=n.child;n!==null;)d0(t,e,n),n=n.sibling}function d0(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:bt||Bi(n,e);case 6:var r=yt,s=Pn;yt=null,Lr(t,e,n),yt=r,Pn=s,yt!==null&&(Pn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Pn?(t=yt,n=n.stateNode,t.nodeType===8?oh(t.parentNode,n):t.nodeType===1&&oh(t,n),Ua(t)):oh(yt,n.stateNode));break;case 4:r=yt,s=Pn,yt=n.stateNode.containerInfo,Pn=!0,Lr(t,e,n),yt=r,Pn=s;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Of(n,e,o),s=s.next}while(s!==r)}Lr(t,e,n);break;case 1:if(!bt&&(Bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,e,l)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Lr(t,e,n),bt=r):Lr(t,e,n);break;default:Lr(t,e,n)}}function Jy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AA),e.forEach(function(r){var s=VA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:yt=l.stateNode,Pn=!1;break e;case 3:yt=l.stateNode.containerInfo,Pn=!0;break e;case 4:yt=l.stateNode.containerInfo,Pn=!0;break e}l=l.return}if(yt===null)throw Error(B(160));d0(i,o,s),yt=null,Pn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ze(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h0(e,t),e=e.sibling}function h0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),$n(t),r&4){try{Sa(3,t,t.return),qu(3,t)}catch(N){ze(t,t.return,N)}try{Sa(5,t,t.return)}catch(N){ze(t,t.return,N)}}break;case 1:An(e,t),$n(t),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(An(e,t),$n(t),r&512&&n!==null&&Bi(n,n.return),t.flags&32){var s=t.stateNode;try{La(s,"")}catch(N){ze(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ow(s,i),af(l,o);var u=af(l,i);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?Fw(s,m):f==="dangerouslySetInnerHTML"?Vw(s,m):f==="children"?La(s,m):Sp(s,f,m,u)}switch(l){case"input":tf(s,i);break;case"textarea":jw(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Wi(s,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?Wi(s,!!i.multiple,i.defaultValue,!0):Wi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ha]=i}catch(N){ze(t,t.return,N)}}break;case 6:if(An(e,t),$n(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){ze(t,t.return,N)}}break;case 3:if(An(e,t),$n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(N){ze(t,t.return,N)}break;case 4:An(e,t),$n(t);break;case 13:An(e,t),$n(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(sm=Ke())),r&4&&Jy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(u=bt)||f,An(e,t),bt=u):An(e,t),$n(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,A=g.child,g.tag){case 0:case 11:case 14:case 15:Sa(4,g,g.return);break;case 1:Bi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){ze(r,n,N)}}break;case 5:Bi(g,g.return);break;case 22:if(g.memoizedState!==null){Zy(m);continue}}A!==null?(A.return=g,q=A):Zy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Mw("display",o))}catch(N){ze(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(N){ze(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:An(e,t),$n(t),r&4&&Jy(t);break;case 21:break;default:An(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u0(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(La(s,""),r.flags&=-33);var i=Yy(t);Vf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Yy(t);Lf(t,l,o);break;default:throw Error(B(161))}}catch(c){ze(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PA(t,e,n){q=t,f0(t)}function f0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||sc;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||bt;l=sc;var u=bt;if(sc=o,(bt=c)&&!u)for(q=s;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null?ev(s):c!==null?(c.return=o,q=c):ev(s);for(;i!==null;)q=i,f0(i),i=i.sibling;q=s,sc=l,bt=u}Xy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Xy(t)}}function Xy(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ly(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ly(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ua(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}bt||e.flags&512&&jf(e)}catch(g){ze(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Zy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function ev(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qu(4,e)}catch(c){ze(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){ze(e,s,c)}}var i=e.return;try{jf(e)}catch(c){ze(e,i,c)}break;case 5:var o=e.return;try{jf(e)}catch(c){ze(e,o,c)}}}catch(c){ze(e,e.return,c)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var CA=Math.ceil,au=Ir.ReactCurrentDispatcher,nm=Ir.ReactCurrentOwner,_n=Ir.ReactCurrentBatchConfig,pe=0,ft=null,Xe=null,wt=0,tn=0,zi=Ts(0),at=0,Ja=null,Zs=0,Ku=0,rm=0,ka=null,Wt=null,sm=0,co=1/0,sr=null,lu=!1,Mf=null,ss=null,ic=!1,Qr=null,cu=0,Aa=0,Ff=null,Pc=-1,Cc=0;function jt(){return pe&6?Ke():Pc!==-1?Pc:Pc=Ke()}function is(t){return t.mode&1?pe&2&&wt!==0?wt&-wt:fA.transition!==null?(Cc===0&&(Cc=Jw()),Cc):(t=_e,t!==0||(t=window.event,t=t===void 0?16:sE(t.type)),t):1}function Dn(t,e,n,r){if(50<Aa)throw Aa=0,Ff=null,Error(B(185));fl(t,n,r),(!(pe&2)||t!==ft)&&(t===ft&&(!(pe&2)&&(Ku|=n),at===4&&Br(t,wt)),Qt(t,r),n===1&&pe===0&&!(e.mode&1)&&(co=Ke()+500,$u&&Is()))}function Qt(t,e){var n=t.callbackNode;fk(t,e);var r=qc(t,t===ft?wt:0);if(r===0)n!==null&&cy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cy(n),e===1)t.tag===0?hA(tv.bind(null,t)):TE(tv.bind(null,t)),lA(function(){!(pe&6)&&Is()}),n=null;else{switch(Xw(r)){case 1:n=Cp;break;case 4:n=Qw;break;case 16:n=Hc;break;case 536870912:n=Yw;break;default:n=Hc}n=E0(n,p0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p0(t,e){if(Pc=-1,Cc=0,pe&6)throw Error(B(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=qc(t,t===ft?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uu(t,r);else{e=r;var s=pe;pe|=2;var i=g0();(ft!==t||wt!==e)&&(sr=null,co=Ke()+500,Hs(t,e));do try{DA();break}catch(l){m0(t,l)}while(!0);$p(),au.current=i,pe=s,Xe!==null?e=0:(ft=null,wt=0,e=at)}if(e!==0){if(e===2&&(s=hf(t),s!==0&&(r=s,e=Uf(t,s))),e===1)throw n=Ja,Hs(t,0),Br(t,r),Qt(t,Ke()),n;if(e===6)Br(t,r);else{if(s=t.current.alternate,!(r&30)&&!NA(s)&&(e=uu(t,r),e===2&&(i=hf(t),i!==0&&(r=i,e=Uf(t,i))),e===1))throw n=Ja,Hs(t,0),Br(t,r),Qt(t,Ke()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Vs(t,Wt,sr);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=sm+500-Ke(),10<e)){if(qc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=wf(Vs.bind(null,t,Wt,sr),e);break}Vs(t,Wt,sr);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Rn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CA(r/1960))-r,10<r){t.timeoutHandle=wf(Vs.bind(null,t,Wt,sr),r);break}Vs(t,Wt,sr);break;case 5:Vs(t,Wt,sr);break;default:throw Error(B(329))}}}return Qt(t,Ke()),t.callbackNode===n?p0.bind(null,t):null}function Uf(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(Hs(t,e).flags|=256),t=uu(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Bf(e)),t}function Bf(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function NA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!jn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~rm,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function tv(t){if(pe&6)throw Error(B(327));Qi();var e=qc(t,0);if(!(e&1))return Qt(t,Ke()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var r=hf(t);r!==0&&(e=r,n=Uf(t,r))}if(n===1)throw n=Ja,Hs(t,0),Br(t,e),Qt(t,Ke()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vs(t,Wt,sr),Qt(t,Ke()),null}function im(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(co=Ke()+500,$u&&Is())}}function ei(t){Qr!==null&&Qr.tag===0&&!(pe&6)&&Qi();var e=pe;pe|=1;var n=_n.transition,r=_e;try{if(_n.transition=null,_e=1,t)return t()}finally{_e=r,_n.transition=n,pe=e,!(pe&6)&&Is()}}function om(){tn=zi.current,Re(zi)}function Hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aA(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(Up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jc();break;case 3:ao(),Re(Kt),Re(Nt),Qp();break;case 5:Gp(r);break;case 4:ao();break;case 13:Re(je);break;case 19:Re(je);break;case 10:Wp(r.type._context);break;case 22:case 23:om()}n=n.return}if(ft=t,Xe=t=os(t.current,null),wt=tn=e,at=0,Ja=null,rm=Ku=Zs=0,Wt=ka=null,Bs!==null){for(e=0;e<Bs.length;e++)if(n=Bs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Bs=null}return t}function m0(t,e){do{var n=Xe;try{if($p(),kc.current=ou,iu){for(var r=Le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}iu=!1}if(Xs=0,ht=it=Le=null,Ia=!1,Ga=0,nm.current=null,n===null||n.return===null){at=1,Ja=e,Xe=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=wt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=zy(o);if(A!==null){A.flags&=-257,$y(A,o,l,i,e),A.mode&1&&By(i,u,e),e=A,c=u;var P=e.updateQueue;if(P===null){var N=new Set;N.add(c),e.updateQueue=N}else P.add(c);break e}else{if(!(e&1)){By(i,u,e),am();break e}c=Error(B(426))}}else if(De&&l.mode&1){var j=zy(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),$y(j,o,l,i,e),Bp(lo(c,l));break e}}i=c=lo(c,l),at!==4&&(at=2),ka===null?ka=[i]:ka.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=XE(i,c,e);jy(i,T);break e;case 1:l=c;var _=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ss===null||!ss.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var L=ZE(i,l,e);jy(i,L);break e}}i=i.return}while(i!==null)}v0(n)}catch(U){e=U,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function g0(){var t=au.current;return au.current=ou,t===null?ou:t}function am(){(at===0||at===3||at===2)&&(at=4),ft===null||!(Zs&268435455)&&!(Ku&268435455)||Br(ft,wt)}function uu(t,e){var n=pe;pe|=2;var r=g0();(ft!==t||wt!==e)&&(sr=null,Hs(t,e));do try{RA();break}catch(s){m0(t,s)}while(!0);if($p(),pe=n,au.current=r,Xe!==null)throw Error(B(261));return ft=null,wt=0,at}function RA(){for(;Xe!==null;)y0(Xe)}function DA(){for(;Xe!==null&&!sk();)y0(Xe)}function y0(t){var e=w0(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?v0(t):Xe=e,nm.current=null}function v0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kA(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,Xe=null;return}}else if(n=SA(n,e,tn),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);at===0&&(at=5)}function Vs(t,e,n){var r=_e,s=_n.transition;try{_n.transition=null,_e=1,OA(t,e,n,r)}finally{_n.transition=s,_e=r}return null}function OA(t,e,n,r){do Qi();while(Qr!==null);if(pe&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(pk(t,i),t===ft&&(Xe=ft=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ic||(ic=!0,E0(Hc,function(){return Qi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_n.transition,_n.transition=null;var o=_e;_e=1;var l=pe;pe|=4,nm.current=null,bA(t,n),h0(n,t),eA(vf),Kc=!!yf,vf=yf=null,t.current=n,PA(n),ik(),pe=l,_e=o,_n.transition=i}else t.current=n;if(ic&&(ic=!1,Qr=t,cu=s),i=t.pendingLanes,i===0&&(ss=null),lk(n.stateNode),Qt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(lu)throw lu=!1,t=Mf,Mf=null,t;return cu&1&&t.tag!==0&&Qi(),i=t.pendingLanes,i&1?t===Ff?Aa++:(Aa=0,Ff=t):Aa=0,Is(),null}function Qi(){if(Qr!==null){var t=Xw(cu),e=_n.transition,n=_e;try{if(_n.transition=null,_e=16>t?16:t,Qr===null)var r=!1;else{if(t=Qr,Qr=null,cu=0,pe&6)throw Error(B(331));var s=pe;for(pe|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(q=u;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Sa(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,A=f.return;if(c0(f),f===u){q=null;break}if(g!==null){g.return=A,q=g;break}q=A}}}var P=i.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var j=N.sibling;N.sibling=null,N=j}while(N!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sa(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,q=T;break e}q=i.return}}var _=t.current;for(q=_;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qu(9,l)}}catch(U){ze(l,l.return,U)}if(l===o){q=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,q=L;break e}q=l.return}}if(pe=s,Is(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Mu,t)}catch{}r=!0}return r}finally{_e=n,_n.transition=e}}return!1}function nv(t,e,n){e=lo(n,e),e=XE(t,e,1),t=rs(t,e,1),e=jt(),t!==null&&(fl(t,1,e),Qt(t,e))}function ze(t,e,n){if(t.tag===3)nv(t,t,n);else for(;e!==null;){if(e.tag===3){nv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ss===null||!ss.has(r))){t=lo(n,t),t=ZE(e,t,1),e=rs(e,t,1),t=jt(),e!==null&&(fl(e,1,t),Qt(e,t));break}}e=e.return}}function jA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(wt&n)===n&&(at===4||at===3&&(wt&130023424)===wt&&500>Ke()-sm?Hs(t,0):rm|=n),Qt(t,e)}function _0(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=jt();t=vr(t,e),t!==null&&(fl(t,e,n),Qt(t,n))}function LA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_0(t,n)}function VA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),_0(t,n)}var w0;w0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,IA(t,e,n);qt=!!(t.flags&131072)}else qt=!1,De&&e.flags&1048576&&IE(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var s=so(e,Nt.current);Gi(e,n),s=Jp(null,e,r,t,s,n);var i=Xp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)?(i=!0,Xc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,qp(e),s.updater=Hu,e.stateNode=s,s._reactInternals=e,Af(e,r,t,n),e=Cf(null,e,r,!0,i,n)):(e.tag=0,De&&i&&Fp(e),Ot(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=FA(r),t=bn(r,t),s){case 0:e=Pf(null,e,r,t,n);break e;case 1:e=qy(null,e,r,t,n);break e;case 11:e=Wy(null,e,r,t,n);break e;case 14:e=Hy(null,e,r,bn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:bn(r,s),Pf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:bn(r,s),qy(t,e,r,s,n);case 3:e:{if(r0(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,CE(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=lo(Error(B(423)),e),e=Ky(t,e,r,n,s);break e}else if(r!==s){s=lo(Error(B(424)),e),e=Ky(t,e,r,n,s);break e}else for(nn=ns(e.stateNode.containerInfo.firstChild),on=e,De=!0,Cn=null,n=bE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===s){e=_r(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return NE(e),t===null&&If(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,_f(r,s)?o=null:i!==null&&_f(r,i)&&(e.flags|=32),n0(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&If(e),null;case 13:return s0(t,e,n);case 4:return Kp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oo(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:bn(r,s),Wy(t,e,r,s,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ie(tu,r._currentValue),r._currentValue=o,i!==null)if(jn(i.value,o)){if(i.children===s.children&&!Kt.current){e=_r(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=fr(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Sf(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ot(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Gi(e,n),s=En(s),r=r(s),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,s=bn(r,e.pendingProps),s=bn(r.type,s),Hy(t,e,r,s,n);case 15:return e0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:bn(r,s),bc(t,e),e.tag=1,Gt(r)?(t=!0,Xc(e)):t=!1,Gi(e,n),JE(e,r,s),Af(e,r,s,n),Cf(null,e,r,!0,t,n);case 19:return i0(t,e,n);case 22:return t0(t,e,n)}throw Error(B(156,e.tag))};function E0(t,e){return Gw(t,e)}function MA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new MA(t,e,n,r)}function lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FA(t){if(typeof t=="function")return lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===bp)return 14}return 2}function os(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return qs(n.children,s,i,e);case kp:o=8,s|=8;break;case Yh:return t=vn(12,n,e,s|2),t.elementType=Yh,t.lanes=i,t;case Jh:return t=vn(13,n,e,s),t.elementType=Jh,t.lanes=i,t;case Xh:return t=vn(19,n,e,s),t.elementType=Xh,t.lanes=i,t;case Nw:return Gu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pw:o=10;break e;case Cw:o=9;break e;case Ap:o=11;break e;case bp:o=14;break e;case Mr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=vn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qs(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function Gu(t,e,n,r){return t=vn(22,t,r,e),t.elementType=Nw,t.lanes=n,t.stateNode={isHidden:!1},t}function ph(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function mh(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qd(0),this.expirationTimes=Qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function cm(t,e,n,r,s,i,o,l,c){return t=new UA(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=vn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qp(i),t}function BA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x0(t){if(!t)return ps;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Gt(n))return xE(t,n,e)}return e}function T0(t,e,n,r,s,i,o,l,c){return t=cm(n,r,!0,t,s,i,o,l,c),t.context=x0(null),n=t.current,r=jt(),s=is(n),i=fr(r,s),i.callback=e??null,rs(n,i,s),t.current.lanes=s,fl(t,s,r),Qt(t,r),t}function Qu(t,e,n,r){var s=e.current,i=jt(),o=is(s);return n=x0(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rs(s,e,o),t!==null&&(Dn(t,s,o,i),Sc(t,s,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){rv(t,e),(t=t.alternate)&&rv(t,e)}function zA(){return null}var I0=typeof reportError=="function"?reportError:function(t){console.error(t)};function dm(t){this._internalRoot=t}Yu.prototype.render=dm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Qu(t,e,null,null)};Yu.prototype.unmount=dm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){Qu(null,t,null,null)}),e[yr]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=tE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ur.length&&e!==0&&e<Ur[n].priority;n++);Ur.splice(n,0,t),n===0&&rE(t)}};function hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sv(){}function $A(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=du(o);i.call(u)}}var o=T0(e,r,t,0,null,!1,!1,"",sv);return t._reactRootContainer=o,t[yr]=o.current,$a(t.nodeType===8?t.parentNode:t),ei(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=du(c);l.call(u)}}var c=cm(t,0,!1,null,null,!1,!1,"",sv);return t._reactRootContainer=c,t[yr]=c.current,$a(t.nodeType===8?t.parentNode:t),ei(function(){Qu(e,c,n,r)}),c}function Xu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=du(o);l.call(c)}}Qu(e,o,t,s)}else o=$A(n,e,t,s,r);return du(o)}Zw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(Np(e,n|1),Qt(e,Ke()),!(pe&6)&&(co=Ke()+500,Is()))}break;case 13:ei(function(){var r=vr(t,1);if(r!==null){var s=jt();Dn(r,t,1,s)}}),um(t,1)}};Rp=function(t){if(t.tag===13){var e=vr(t,134217728);if(e!==null){var n=jt();Dn(e,t,134217728,n)}um(t,134217728)}};eE=function(t){if(t.tag===13){var e=is(t),n=vr(t,e);if(n!==null){var r=jt();Dn(n,t,e,r)}um(t,e)}};tE=function(){return _e};nE=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};cf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=zu(r);if(!s)throw Error(B(90));Dw(r),tf(r,s)}}}break;case"textarea":jw(t,n);break;case"select":e=n.value,e!=null&&Wi(t,!!n.multiple,e,!1)}};zw=im;$w=ei;var WA={usingClientEntryPoint:!1,Events:[ml,Li,zu,Uw,Bw,im]},oa={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HA={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qw(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||zA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{Mu=oc.inject(HA),Gn=oc}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WA;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hm(e))throw Error(B(200));return BA(t,e,null,n)};un.createRoot=function(t,e){if(!hm(t))throw Error(B(299));var n=!1,r="",s=I0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=cm(t,1,!1,null,null,n,!1,r,s),t[yr]=e.current,$a(t.nodeType===8?t.parentNode:t),new dm(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=qw(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return ei(t)};un.hydrate=function(t,e,n){if(!Ju(e))throw Error(B(200));return Xu(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!hm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=I0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=T0(e,null,t,1,n??null,s,!1,i,o),t[yr]=e.current,$a(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Yu(e)};un.render=function(t,e,n){if(!Ju(e))throw Error(B(200));return Xu(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(B(40));return t._reactRootContainer?(ei(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};un.unstable_batchedUpdates=im;un.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Xu(t,e,n,!1,r)};un.version="18.3.1-next-f1338f8080-20240426";function S0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0)}catch(t){console.error(t)}}S0(),Sw.exports=un;var qA=Sw.exports,iv=qA;Gh.createRoot=iv.createRoot,Gh.hydrateRoot=iv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xa.apply(this,arguments)}var Yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yr||(Yr={}));const ov="popstate";function KA(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return zf("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:hu(s)}return QA(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GA(){return Math.random().toString(36).substr(2,8)}function av(t,e){return{usr:t.state,key:t.key,idx:e}}function zf(t,e,n,r){return n===void 0&&(n=null),Xa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xo(e):e,{state:n,key:e&&e.key||r||GA()})}function hu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QA(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=Yr.Pop,c=null,u=f();u==null&&(u=0,o.replaceState(Xa({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Yr.Pop;let j=f(),T=j==null?null:j-u;u=j,c&&c({action:l,location:N.location,delta:T})}function g(j,T){l=Yr.Push;let _=zf(N.location,j,T);u=f()+1;let S=av(_,u),L=N.createHref(_);try{o.pushState(S,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;s.location.assign(L)}i&&c&&c({action:l,location:N.location,delta:1})}function A(j,T){l=Yr.Replace;let _=zf(N.location,j,T);u=f();let S=av(_,u),L=N.createHref(_);o.replaceState(S,"",L),i&&c&&c({action:l,location:N.location,delta:0})}function P(j){let T=s.location.origin!=="null"?s.location.origin:s.location.href,_=typeof j=="string"?j:hu(j);return _=_.replace(/ $/,"%20"),Ve(T,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,T)}let N={get action(){return l},get location(){return t(s,o)},listen(j){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(ov,m),c=j,()=>{s.removeEventListener(ov,m),c=null}},createHref(j){return e(s,j)},createURL:P,encodeLocation(j){let T=P(j);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:A,go(j){return o.go(j)}};return N}var lv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lv||(lv={}));function YA(t,e,n){return n===void 0&&(n="/"),JA(t,e,n)}function JA(t,e,n,r){let s=typeof e=="string"?xo(e):e,i=uo(s.pathname||"/",n);if(i==null)return null;let o=k0(t);XA(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=cb(i);l=ab(o[c],u)}return l}function k0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Ve(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=as([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(Ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),k0(i.children,e,f,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:ib(u,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let c of A0(i.path))s(i,o,c)}),e}function A0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=A0(r.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function XA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ob(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZA=/^:[\w-]+$/,eb=3,tb=2,nb=1,rb=10,sb=-2,cv=t=>t==="*";function ib(t,e){let n=t.split("/"),r=n.length;return n.some(cv)&&(r+=sb),e&&(r+=tb),n.filter(s=>!cv(s)).reduce((s,i)=>s+(ZA.test(i)?eb:i===""?nb:rb),r)}function ob(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function ab(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=$f({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),g=c.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:as([i,m.pathname]),pathnameBase:pb(as([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=as([i,m.pathnameBase]))}return o}function $f(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lb(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:g,isOptional:A}=f;if(g==="*"){let N=l[m]||"";o=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[m];return A&&!P?u[g]=void 0:u[g]=(P||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function lb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function cb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function uo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const ub=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,db=t=>ub.test(t);function hb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?xo(t):t,i;if(n)if(db(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),fm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=uv(n.substring(1),"/"):i=uv(n,e)}else i=e;return{pathname:i,search:mb(r),hash:gb(s)}}function uv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function gh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pm(t,e){let n=fb(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mm(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=xo(t):(s=Xa({},t),Ve(!s.pathname||!s.pathname.includes("?"),gh("?","pathname","search",s)),Ve(!s.pathname||!s.pathname.includes("#"),gh("#","pathname","hash",s)),Ve(!s.search||!s.search.includes("#"),gh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let c=hb(s,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const as=t=>t.join("/").replace(/\/\/+/g,"/"),pb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const b0=["post","put","patch","delete"];new Set(b0);const vb=["get",...b0];new Set(vb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}const Zu=R.createContext(null),P0=R.createContext(null),Sr=R.createContext(null),ed=R.createContext(null),rr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),C0=R.createContext(null);function _b(t,e){let{relative:n}=e===void 0?{}:e;To()||Ve(!1);let{basename:r,navigator:s}=R.useContext(Sr),{hash:i,pathname:o,search:l}=td(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:as([r,o])),s.createHref({pathname:c,search:l,hash:i})}function To(){return R.useContext(ed)!=null}function ui(){return To()||Ve(!1),R.useContext(ed).location}function N0(t){R.useContext(Sr).static||R.useLayoutEffect(t)}function gm(){let{isDataRoute:t}=R.useContext(rr);return t?jb():wb()}function wb(){To()||Ve(!1);let t=R.useContext(Zu),{basename:e,future:n,navigator:r}=R.useContext(Sr),{matches:s}=R.useContext(rr),{pathname:i}=ui(),o=JSON.stringify(pm(s,n.v7_relativeSplatPath)),l=R.useRef(!1);return N0(()=>{l.current=!0}),R.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let m=mm(u,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:as([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}const Eb=R.createContext(null);function xb(t){let e=R.useContext(rr).outlet;return e&&R.createElement(Eb.Provider,{value:t},e)}function Tb(){let{matches:t}=R.useContext(rr),e=t[t.length-1];return e?e.params:{}}function td(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Sr),{matches:s}=R.useContext(rr),{pathname:i}=ui(),o=JSON.stringify(pm(s,r.v7_relativeSplatPath));return R.useMemo(()=>mm(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Ib(t,e){return Sb(t,e)}function Sb(t,e,n,r){To()||Ve(!1);let{navigator:s}=R.useContext(Sr),{matches:i}=R.useContext(rr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=ui(),f;if(e){var m;let j=typeof e=="string"?xo(e):e;c==="/"||(m=j.pathname)!=null&&m.startsWith(c)||Ve(!1),f=j}else f=u;let g=f.pathname||"/",A=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let P=YA(t,{pathname:A}),N=Cb(P&&P.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:as([c,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:as([c,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return e&&N?R.createElement(ed.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Yr.Pop}},N):N}function kb(){let t=Ob(),e=yb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:s},n):null,null)}const Ab=R.createElement(kb,null);class bb extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(rr.Provider,{value:this.props.routeContext},R.createElement(C0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pb(t){let{routeContext:e,match:n,children:r}=t,s=R.useContext(Zu);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(rr.Provider,{value:e},r)}function Cb(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Ve(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:A}=n,P=m.route.loader&&g[m.route.id]===void 0&&(!A||A[m.route.id]===void 0);if(m.route.lazy||P){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let A,P=!1,N=null,j=null;n&&(A=l&&m.route.id?l[m.route.id]:void 0,N=m.route.errorElement||Ab,c&&(u<0&&g===0?(Lb("route-fallback"),P=!0,j=null):u===g&&(P=!0,j=m.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),_=()=>{let S;return A?S=N:P?S=j:m.route.Component?S=R.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=f,R.createElement(Pb,{match:m,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?R.createElement(bb,{location:n.location,revalidation:n.revalidation,component:N,error:A,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):_()},null)}var R0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(R0||{}),D0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(D0||{});function Nb(t){let e=R.useContext(Zu);return e||Ve(!1),e}function Rb(t){let e=R.useContext(P0);return e||Ve(!1),e}function Db(t){let e=R.useContext(rr);return e||Ve(!1),e}function O0(t){let e=Db(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function Ob(){var t;let e=R.useContext(C0),n=Rb(),r=O0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function jb(){let{router:t}=Nb(R0.UseNavigateStable),e=O0(D0.UseNavigateStable),n=R.useRef(!1);return N0(()=>{n.current=!0}),R.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Za({fromRouteId:e},i)))},[t,e])}const dv={};function Lb(t,e,n){dv[t]||(dv[t]=!0)}function Vb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function fu(t){let{to:e,replace:n,state:r,relative:s}=t;To()||Ve(!1);let{future:i,static:o}=R.useContext(Sr),{matches:l}=R.useContext(rr),{pathname:c}=ui(),u=gm(),f=mm(e,pm(l,i.v7_relativeSplatPath),c,s==="path"),m=JSON.stringify(f);return R.useEffect(()=>u(JSON.parse(m),{replace:n,state:r,relative:s}),[u,m,s,n,r]),null}function Mb(t){return xb(t.context)}function zt(t){Ve(!1)}function Fb(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Yr.Pop,navigator:i,static:o=!1,future:l}=t;To()&&Ve(!1);let c=e.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:c,navigator:i,static:o,future:Za({v7_relativeSplatPath:!1},l)}),[c,l,i,o]);typeof r=="string"&&(r=xo(r));let{pathname:f="/",search:m="",hash:g="",state:A=null,key:P="default"}=r,N=R.useMemo(()=>{let j=uo(f,c);return j==null?null:{location:{pathname:j,search:m,hash:g,state:A,key:P},navigationType:s}},[c,f,m,g,A,P,s]);return N==null?null:R.createElement(Sr.Provider,{value:u},R.createElement(ed.Provider,{children:n,value:N}))}function Ub(t){let{children:e,location:n}=t;return Ib(Wf(e),n)}new Promise(()=>{});function Wf(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,s)=>{if(!R.isValidElement(r))return;let i=[...e,s];if(r.type===R.Fragment){n.push.apply(n,Wf(r.props.children,i));return}r.type!==zt&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wf(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pu.apply(this,arguments)}function j0(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Bb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zb(t,e){return t.button===0&&(!e||e==="_self")&&!Bb(t)}const $b=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Hb="6";try{window.__reactRouterVersion=Hb}catch{}const qb=R.createContext({isTransitioning:!1}),Kb="startTransition",hv=jS[Kb];function Gb(t){let{basename:e,children:n,future:r,window:s}=t,i=R.useRef();i.current==null&&(i.current=KA({window:s,v5Compat:!0}));let o=i.current,[l,c]=R.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=R.useCallback(m=>{u&&hv?hv(()=>c(m)):c(m)},[c,u]);return R.useLayoutEffect(()=>o.listen(f),[o,f]),R.useEffect(()=>Vb(r),[r]),R.createElement(Fb,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Qb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ks=R.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:m}=e,g=j0(e,$b),{basename:A}=R.useContext(Sr),P,N=!1;if(typeof u=="string"&&Yb.test(u)&&(P=u,Qb))try{let S=new URL(window.location.href),L=u.startsWith("//")?new URL(S.protocol+u):new URL(u),U=uo(L.pathname,A);L.origin===S.origin&&U!=null?u=U+L.search+L.hash:N=!0}catch{}let j=_b(u,{relative:s}),T=Xb(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:s,viewTransition:m});function _(S){r&&r(S),S.defaultPrevented||T(S)}return R.createElement("a",pu({},g,{href:P||j,onClick:N||i?r:_,ref:n,target:c}))}),yh=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:u,children:f}=e,m=j0(e,Wb),g=td(c,{relative:m.relative}),A=ui(),P=R.useContext(P0),{navigator:N,basename:j}=R.useContext(Sr),T=P!=null&&Zb(g)&&u===!0,_=N.encodeLocation?N.encodeLocation(g).pathname:g.pathname,S=A.pathname,L=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;s||(S=S.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&j&&(L=uo(L,j)||L);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let z=S===_||!o&&S.startsWith(_)&&S.charAt(U)==="/",w=L!=null&&(L===_||!o&&L.startsWith(_)&&L.charAt(_.length)==="/"),v={isActive:z,isPending:w,isTransitioning:T},E=z?r:void 0,k;typeof i=="function"?k=i(v):k=[i,z?"active":null,w?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let b=typeof l=="function"?l(v):l;return R.createElement(Ks,pu({},m,{"aria-current":E,className:k,ref:n,style:b,to:c,viewTransition:u}),typeof f=="function"?f(v):f)});var Hf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hf||(Hf={}));var fv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(fv||(fv={}));function Jb(t){let e=R.useContext(Zu);return e||Ve(!1),e}function Xb(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,c=gm(),u=ui(),f=td(t,{relative:o});return R.useCallback(m=>{if(zb(m,n)){m.preventDefault();let g=r!==void 0?r:hu(u)===hu(f);c(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[u,c,f,r,s,n,t,i,o,l])}function Zb(t,e){e===void 0&&(e={});let n=R.useContext(qb);n==null&&Ve(!1);let{basename:r}=Jb(Hf.useViewTransitionState),s=td(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=uo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=uo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return $f(s.pathname,o)!=null||$f(s.pathname,i)!=null}const pv=["/InaaReLogos.png","/InaareLogos.png","/inaare-logo.png"],eP=({className:t="h-14 w-16"})=>{const[e,n]=R.useState(0),[r,s]=R.useState(!1),i=()=>{if(e<pv.length-1){n(o=>o+1);return}s(!0)};return r?d.jsxs("div",{className:`gold-ring relative flex shrink-0 items-center justify-center rounded-[12px] bg-ivory/90 p-2 ${t}`,children:[d.jsx("div",{className:"absolute left-1/2 top-1 h-6 w-7 -translate-x-1/2 bg-black [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx("div",{className:"absolute bottom-1 left-1 h-6 w-7 bg-pink [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx("div",{className:"absolute bottom-1 right-1 h-6 w-7 bg-gold [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"})]}):d.jsx("div",{className:`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-transparent p-0 ${t}`,children:d.jsx("img",{src:pv[e],alt:"Inaare Consulting Group logo",className:"h-full w-full object-contain",width:"80",height:"56",loading:"lazy",decoding:"async",onError:i})})},L0=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Services",path:"/services"},{name:"Programs",path:"/programs"},{name:"Publications",path:"/publications"},{name:"Booking",path:"/booking"},{name:"Contact",path:"/contact"}],tP=[{title:"Coaching and Mentorship",description:"Develop resilient leaders through high-trust coaching that sharpens decision quality, influence, and execution discipline."},{title:"Leadership Development",description:"Build leadership pipelines and capability systems that sustain performance, accountability, and long-term growth."},{title:"Governance Advisory",description:"Strengthen boards and leadership teams with governance frameworks that protect value and improve strategic oversight."},{title:"Strategy Design & Execution",description:"Translate vision into practical priorities, operating models, and measurable milestones that drive enterprise impact."},{title:"Effective Supply Chain",description:"Optimize supply chain performance with resilient systems, cost discipline, and governance that secures value at scale."}],nP=["Coaching and mentorship","Governance - Character in Leadership","Youth and marriage","Gender Equity","Family Leadership","Growing Cross Generational Businesses"],rP=[{id:"character-in-leadership",title:"The Place of Character in Leadership",description:"How values, trust, and disciplined accountability shape resilient institutions and long-term performance.",category:"Leadership & Governance",date:"2026-02-14",content:`Character is not a soft leadership attribute; it is operational infrastructure. In moments of uncertainty, teams do not rely on charisma alone. They rely on consistency, fairness, and moral clarity from leaders who can align difficult decisions with enduring principles.

At Inaare Consulting Group, we have seen that organizations with character-led leadership maintain stronger execution rhythms over time. They make fewer reactive decisions, communicate with greater transparency, and build cultures where accountability is viewed as stewardship rather than control.

When character is institutionalized through governance routines, performance conversations, and role modeling, it compounds. Trust improves decision speed, decision speed improves agility, and agility protects value in volatile markets.`},{id:"cross-generational-businesses",title:"Cross Generational Businesses",description:"Practical frameworks for preserving continuity while transitioning ownership, authority, and culture across generations.",category:"Enterprise Continuity",date:"2026-01-22",content:`Cross-generational businesses succeed when leadership succession is treated as a strategy, not an event. Too often, transitions focus only on legal ownership while leaving operating culture and decision rights undefined.

Sustainable continuity requires four foundations: shared purpose, governance clarity, capability transfer, and conflict protocols. Families and founders that formalize these early are better positioned to protect enterprise momentum through change.

A transition plan should answer three questions with precision: who decides, how decisions are reviewed, and what values are non-negotiable. These systems prevent ambiguity and ensure each generation can lead with confidence rather than inheritance pressure.`},{id:"tigers-eye-and-becoming",title:"The Tiger’s Eye and Becoming",description:"A reflective essay on leadership identity, discernment, and the discipline required to evolve with purpose.",category:"Executive Reflection",date:"2025-12-05",content:`Becoming is rarely dramatic in real time. It is built through repeated choices to hold vision under pressure, to choose principle over applause, and to remain teachable even when authority is established.

The tiger’s eye represents focused perception: the capacity to identify what matters, what distracts, and what must be protected. Leaders who cultivate this clarity create institutions that are not only productive, but meaningful.

Transformation is both personal and systemic. As leaders evolve, they must redesign the systems around them so their growth translates into collective progress. Without that translation, insight remains private and impact remains limited.`}],lr={name:"CPA Elizabeth Kyengo, CPAK, MBA, AMP",summary:"CPA Elizabeth Kyengo is a transformational advisor with over 25 years of executive experience guiding boards, institutions, and senior leadership teams toward enduring value. Her work integrates governance excellence, strategic supply chain expertise, and board-level advisory rigor to build resilient, high-performing organizations.",certifications:["CPAK","MBA","AMP"],highlights:["25+ years in executive leadership, advisory, and institutional transformation","Board-level governance, risk oversight, and accountability expertise","Deep practical mastery in effective supply chain and value-chain optimization","Working with leaders and organizations across Africa and globally","A professional and inspirational approach rooted in integrity, character, and impact"],quote:"Generational greatness is built when character, capability, and systems are aligned for service, value, and legacy."},sP=()=>{const[t,e]=R.useState(!1),n=L0.filter(s=>s.name!=="Services"),r=({isActive:s})=>`link-underline relative text-[13px] uppercase tracking-[0.13em] ${s?"active-link text-gold":"text-ivory/90 hover:text-[#c67b8d]"}`;return d.jsxs("header",{className:"sticky top-0 z-50 border-b border-gold/15 bg-ink/90 backdrop-blur-md",children:[d.jsxs("nav",{className:"mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:px-10",children:[d.jsxs(yh,{to:"/",className:"flex items-center gap-3",onClick:()=>e(!1),children:[d.jsx(eP,{className:"h-14 w-16 md:h-16 md:w-20"}),d.jsxs("div",{children:[d.jsx("span",{className:"block font-serif text-2xl font-semibold tracking-wide text-ivory",children:"InaaRe Consulting Group"}),d.jsx("span",{className:"hidden text-[10px] uppercase tracking-[0.35em] text-muted md:block",children:"Reshaping Perspectives, Restoring Values"})]})]}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/40 px-4 py-2 text-sm text-ivory hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#c67b8d]/60 hover:text-[#c67b8d] md:hidden",onClick:()=>e(s=>!s),"aria-label":"Toggle navigation",children:"Menu"}),d.jsx("ul",{className:"hidden items-center gap-6 md:flex",children:n.map(s=>d.jsx("li",{children:d.jsx(yh,{to:s.path,className:r,children:s.name})},s.name))})]}),t&&d.jsx("ul",{className:"space-y-2 border-t border-gold/15 px-6 py-4 md:hidden",children:n.map(s=>d.jsx("li",{children:d.jsx(yh,{to:s.path,className:({isActive:i})=>`block rounded-md px-3 py-2 text-sm transition-colors duration-300 ${i?"bg-gold/15 text-gold":"text-ivory/90 hover:bg-[#c67b8d]/10 hover:text-[#c67b8d]"}`,onClick:()=>e(!1),children:s.name})},s.name))})]})},iP=()=>d.jsxs("footer",{className:"border-t border-gold/25 bg-[#111111] text-[#d8d8d8]",children:[d.jsxs("div",{className:"section-shell grid gap-10 py-12 text-sm md:grid-cols-[1.3fr_1fr_1fr]",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-serif text-3xl text-[#f6f1e8]",children:"InaaRe Consulting Group"}),d.jsx("p",{className:"text-measure mt-4",children:"Trusted advisory for boards and executive leaders seeking stronger governance, resilient institutions, and sustainable strategic outcomes."})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-gold",children:"Navigation"}),d.jsx("ul",{className:"mt-4 space-y-2",children:L0.map(t=>d.jsx("li",{children:d.jsx(Ks,{to:t.path,className:"link-underline inline-block hover:text-gold",children:t.name})},t.name))})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-gold",children:"Contact"}),d.jsxs("p",{className:"mt-4 leading-relaxed",children:["Email: ndaizeek@gmail.com",d.jsx("br",{}),"Phone: +254 721 389696"]}),d.jsx("p",{className:"mt-4 text-xs uppercase tracking-[0.14em]",children:"Strategic advisory excellence."})]})]}),d.jsxs("div",{className:"border-t border-gold/20 px-6 py-4 text-center text-xs text-[#bcb6ab] md:px-10",children:["© ",new Date().getFullYear()," InaaRe Consulting Group. All rights reserved."]})]}),oP=()=>{const{pathname:t}=ui();return R.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t]),null},aP=()=>d.jsxs("div",{className:"min-h-screen bg-ink text-ivory",children:[d.jsx(oP,{}),d.jsx(sP,{}),d.jsx("main",{children:d.jsx(Mb,{})}),d.jsx(iP,{})]}),lP=()=>{};var mv={};/**
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
 */const V0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},M0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,A=u&63;c||(A=64,o||(g=64)),r.push(n[f],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||m==null)throw new uP;const g=i<<2|l>>4;if(r.push(g),u!==64){const A=l<<4&240|u>>2;if(r.push(A),m!==64){const P=u<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dP=function(t){const e=V0(t);return M0.encodeByteArray(e,!0)},mu=function(t){return dP(t).replace(/\./g,"")},F0=function(t){try{return M0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fP=()=>hP().__FIREBASE_DEFAULTS__,pP=()=>{if(typeof process>"u"||typeof mv>"u")return;const t=mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&F0(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return lP()||fP()||pP()||mP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},U0=t=>{var e,n;return(n=(e=nd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},B0=t=>{const e=U0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z0=()=>{var t;return(t=nd())==null?void 0:t.config},$0=t=>{var e;return(e=nd())==null?void 0:e[`_${t}`]};/**
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
 */class gP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function W0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function vP(){var e;const t=(e=nd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _P(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ym(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EP(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xP(){return!vP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rd(){try{return typeof indexedDB=="object"}catch{return!1}}function sd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function vm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const TP="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TP,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?IP(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,l,r)}}function IP(t,e){return t.replace(SP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const SP=/\{\$([^}]+)}/g;function kP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gv(i)&&gv(o)){if(!ms(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
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
 */function yl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function AP(t,e){const n=new bP(t,e);return n.subscribe.bind(n)}class bP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vh),s.error===void 0&&(s.error=vh),s.complete===void 0&&(s.complete=vh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vh(){}/**
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
 */const CP=1e3,NP=2,RP=4*60*60*1e3,DP=.5;function yv(t,e=CP,n=NP){const r=e*Math.pow(n,t),s=Math.round(DP*r*(Math.random()-.5)*2);return Math.min(RP,r+s)}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}/**
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
 */function di(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _m(t){return(await fetch(t,{credentials:"include"})).ok}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class OP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LP(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jP(t){return t===Ms?void 0:t}function LP(t){return t.instantiationMode==="EAGER"}/**
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
 */class VP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const MP={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},FP=ue.INFO,UP={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},BP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=FP,this._logHandler=BP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const zP=(t,e)=>e.some(n=>t instanceof n);let vv,_v;function $P(){return vv||(vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WP(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H0=new WeakMap,qf=new WeakMap,q0=new WeakMap,_h=new WeakMap,wm=new WeakMap;function HP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&H0.set(n,t)}).catch(()=>{}),wm.set(e,t),e}function qP(t){if(qf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KP(t){Kf=t(Kf)}function GP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wh(this),e,...n);return q0.set(r,e.sort?e.sort():[e]),pr(r)}:WP().includes(t)?function(...e){return t.apply(wh(this),e),pr(H0.get(this))}:function(...e){return pr(t.apply(wh(this),e))}}function QP(t){return typeof t=="function"?GP(t):(t instanceof IDBTransaction&&qP(t),zP(t,$P())?new Proxy(t,Kf):t)}function pr(t){if(t instanceof IDBRequest)return HP(t);if(_h.has(t))return _h.get(t);const e=QP(t);return e!==t&&(_h.set(t,e),wm.set(e,t)),e}const wh=t=>wm.get(t);function od(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pr(o.result),c.oldVersion,c.newVersion,pr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function Eh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),pr(n).then(()=>{})}const YP=["get","getKey","getAll","getAllKeys","count"],JP=["put","add","delete","clear"],xh=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xh.get(e))return xh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=JP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||YP.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return xh.set(e,i),i}KP(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
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
 */class XP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",Ev="0.14.10";/**
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
 */const wr=new id("@firebase/app"),eC="@firebase/app-compat",tC="@firebase/analytics-compat",nC="@firebase/analytics",rC="@firebase/app-check-compat",sC="@firebase/app-check",iC="@firebase/auth",oC="@firebase/auth-compat",aC="@firebase/database",lC="@firebase/data-connect",cC="@firebase/database-compat",uC="@firebase/functions",dC="@firebase/functions-compat",hC="@firebase/installations",fC="@firebase/installations-compat",pC="@firebase/messaging",mC="@firebase/messaging-compat",gC="@firebase/performance",yC="@firebase/performance-compat",vC="@firebase/remote-config",_C="@firebase/remote-config-compat",wC="@firebase/storage",EC="@firebase/storage-compat",xC="@firebase/firestore",TC="@firebase/ai",IC="@firebase/firestore-compat",SC="firebase",kC="12.11.0";/**
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
 */const Qf="[DEFAULT]",AC={[Gf]:"fire-core",[eC]:"fire-core-compat",[nC]:"fire-analytics",[tC]:"fire-analytics-compat",[sC]:"fire-app-check",[rC]:"fire-app-check-compat",[iC]:"fire-auth",[oC]:"fire-auth-compat",[aC]:"fire-rtdb",[lC]:"fire-data-connect",[cC]:"fire-rtdb-compat",[uC]:"fire-fn",[dC]:"fire-fn-compat",[hC]:"fire-iid",[fC]:"fire-iid-compat",[pC]:"fire-fcm",[mC]:"fire-fcm-compat",[gC]:"fire-perf",[yC]:"fire-perf-compat",[vC]:"fire-rc",[_C]:"fire-rc-compat",[wC]:"fire-gcs",[EC]:"fire-gcs-compat",[xC]:"fire-fst",[IC]:"fire-fst-compat",[TC]:"fire-vertex","fire-js":"fire-js",[SC]:"fire-js-all"};/**
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
 */const gu=new Map,bC=new Map,Yf=new Map;function xv(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(Yf.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Yf.set(e,t);for(const n of gu.values())xv(n,t);for(const n of bC.values())xv(n,t);return!0}function kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const PC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new Ss("app","Firebase",PC);/**
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
 */class CC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=kC;function K0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Qf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ls.create("bad-app-name",{appName:String(s)});if(n||(n=z0()),!n)throw ls.create("no-options");const i=gu.get(s);if(i){if(ms(n,i.options)&&ms(r,i.config))return i;throw ls.create("duplicate-app",{appName:s})}const o=new VP(s);for(const c of Yf.values())o.addComponent(c);const l=new CC(n,r,o);return gu.set(s,l),l}function vl(t=Qf){const e=gu.get(t);if(!e&&t===Qf&&z0())return K0();if(!e)throw ls.create("no-app",{appName:t});return e}function Ct(t,e,n){let r=AC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(o.join(" "));return}cn(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const NC="firebase-heartbeat-database",RC=1,el="firebase-heartbeat-store";let Th=null;function G0(){return Th||(Th=od(NC,RC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(el)}catch(n){console.warn(n)}}}}).catch(t=>{throw ls.create("idb-open",{originalErrorMessage:t.message})})),Th}async function DC(t){try{const n=(await G0()).transaction(el),r=await n.objectStore(el).get(Q0(t));return await n.done,r}catch(e){if(e instanceof Tn)wr.warn(e.message);else{const n=ls.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function Tv(t,e){try{const r=(await G0()).transaction(el,"readwrite");await r.objectStore(el).put(e,Q0(t)),await r.done}catch(n){if(n instanceof Tn)wr.warn(n.message);else{const r=ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function Q0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OC=1024,jC=30;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Iv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jC){const o=FC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iv(),{heartbeatsToSend:r,unsentEntries:s}=VC(this._heartbeatsCache.heartbeats),i=mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wr.warn(n),""}}}function Iv(){return new Date().toISOString().substring(0,10)}function VC(t,e=OC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rd()?sd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Tv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Tv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}function FC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function UC(t){cn(new Yt("platform-logger",e=>new XP(e),"PRIVATE")),cn(new Yt("heartbeat",e=>new LC(e),"PRIVATE")),Ct(Gf,Ev,t),Ct(Gf,Ev,"esm2020"),Ct("fire-js","")}UC("");function Y0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BC=Y0,J0=new Ss("auth","Firebase",Y0());/**
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
 */const yu=new id("@firebase/auth");function zC(t,...e){yu.logLevel<=ue.WARN&&yu.warn(`Auth (${hi}): ${t}`,...e)}function Rc(t,...e){yu.logLevel<=ue.ERROR&&yu.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function Ln(t,...e){throw Em(t,...e)}function Yn(t,...e){return Em(t,...e)}function X0(t,e,n){const r={...BC(),[e]:n};return new Ss("auth","Firebase",r).create(e,{appName:t.name})}function cs(t){return X0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J0.create(t,...e)}function Z(t,e,...n){if(!t)throw Em(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rc(e),new Error(e)}function Er(t,e){t||dr(e)}/**
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
 */function Jf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $C(){return kv()==="http:"||kv()==="https:"}function kv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function WC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($C()||ym()||"connection"in navigator)?navigator.onLine:!0}function HC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _l{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=yP()||wP()}get(){return WC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xm(t,e){Er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Z0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GC=new _l(3e4,6e4);function fi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,s={}){return ex(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=yl({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return _P()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&di(t.emulatorConfig.host)&&(u.credentials="include"),Z0.fetch()(await tx(t,t.config.apiHost,n,l),u)})}async function ex(t,e,n){t._canInitEmulator=!1;const r={...qC,...e};try{const s=new YC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ac(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ac(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ac(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ac(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw X0(t,f,u);Ln(t,f)}}catch(s){if(s instanceof Tn)throw s;Ln(t,"network-request-failed",{message:String(s)})}}async function ad(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&Ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function tx(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xm(t.config,s):`${t.config.apiScheme}://${s}`;return KC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function QC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),GC.get())})}}function ac(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yn(t,e,r);return s.customData._tokenResponse=n,s}function Av(t){return t!==void 0&&t.enterprise!==void 0}class JC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XC(t,e){return Ar(t,"GET","/v2/recaptchaConfig",fi(t,e))}/**
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
 */async function ZC(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function vu(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eN(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Tm(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ba(Ih(s.auth_time)),issuedAtTime:ba(Ih(s.iat)),expirationTime:ba(Ih(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ih(t){return Number(t)*1e3}function Tm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rc("JWT malformed, contained fewer than 3 sections"),null;try{const s=F0(n);return s?JSON.parse(s):(Rc("Failed to decode base64 JWT payload"),null)}catch(s){return Rc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bv(t){const e=Tm(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&tN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _u(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ho(t,vu(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?nx(s.providerUserInfo):[],o=sN(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function rN(t){const e=Se(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nx(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function iN(t,e){const n=await ex(t,{},async()=>{const r=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await tx(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&di(t.emulatorConfig.host)&&(c.credentials="include"),Z0.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oN(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",fi(t,e))}/**
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
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=bv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await iN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
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
 */function Vr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eN(this,e)}reload(){return rN(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(cs(this.auth));const e=await this.getIdToken();return await ho(this,ZC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:A,providerData:P,stsTokenManager:N}=n;Z(m&&N,e,"internal-error");const j=Yi.fromJSON(this.name,N);Z(typeof m=="string",e,"internal-error"),Vr(r,e.name),Vr(s,e.name),Z(typeof g=="boolean",e,"internal-error"),Z(typeof A=="boolean",e,"internal-error"),Vr(i,e.name),Vr(o,e.name),Vr(l,e.name),Vr(c,e.name),Vr(u,e.name),Vr(f,e.name);const T=new Nn({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:j,createdAt:u,lastLoginAt:f});return P&&Array.isArray(P)&&(T.providerData=P.map(_=>({..._}))),c&&(T._redirectEventId=c),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yi;s.updateFromServerResponse(n);const i=new Nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _u(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nx(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yi;l.updateFromIdToken(r);const c=new Nn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Pv=new Map;function hr(t){Er(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(Er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}/**
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
 */class rx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rx.type="NONE";const Cv=rx;/**
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
 */function Dc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Dc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Dc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vu(this.auth,{idToken:e}).catch(()=>{});return n?Nn._fromGetAccountInfoResponse(this.auth,n,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ji(hr(Cv),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||hr(Cv);const o=Dc(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let m;if(typeof f=="string"){const g=await vu(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Nn._fromGetAccountInfoResponse(e,g,f)}else m=Nn._fromJSON(e,f);u!==i&&(l=m),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ji(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ji(i,e,r))}}/**
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
 */function Nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ax(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cx(e))return"Blackberry";if(ux(e))return"Webos";if(ix(e))return"Safari";if((e.includes("chrome/")||ox(e))&&!e.includes("edge/"))return"Chrome";if(lx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sx(t=Rt()){return/firefox\//i.test(t)}function ix(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ox(t=Rt()){return/crios\//i.test(t)}function ax(t=Rt()){return/iemobile/i.test(t)}function lx(t=Rt()){return/android/i.test(t)}function cx(t=Rt()){return/blackberry/i.test(t)}function ux(t=Rt()){return/webos/i.test(t)}function Im(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aN(t=Rt()){var e;return Im(t)&&!!((e=window.navigator)!=null&&e.standalone)}function lN(){return EP()&&document.documentMode===10}function dx(t=Rt()){return Im(t)||lx(t)||ux(t)||cx(t)||/windows phone/i.test(t)||ax(t)}/**
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
 */function hx(t,e=[]){let n;switch(t){case"Browser":n=Nv(Rt());break;case"Worker":n=`${Nv(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
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
 */class cN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uN(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",fi(t,e))}/**
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
 */const dN=6;class hN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class fN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rv(this),this.idTokenSubscription=new Rv(this),this.beforeStateQueue=new cN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vu(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(cs(this));const n=e?Se(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uN(this),n=new hN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&zC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Io(t){return Se(t)}class Rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=AP(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ld={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pN(t){ld=t}function fx(t){return ld.loadJS(t)}function mN(){return ld.recaptchaEnterpriseScript}function gN(){return ld.gapiScript}function yN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vN{constructor(){this.enterprise=new _N}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _N{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wN="recaptcha-enterprise",px="NO_RECAPTCHA";class EN{constructor(e){this.type=wN,this.auth=Io(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{XC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new JC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Av(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(px)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vN().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Av(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=mN();c.length!==0&&(c+=l),fx(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Dv(t,e,n,r=!1,s=!1){const i=new EN(t);let o;if(s)o=px;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ov(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Dv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Dv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function xN(t,e){const n=kr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ms(i,e??{}))return s;Ln(s,"already-initialized")}return n.initialize({options:e})}function TN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IN(t,e,n){const r=Io(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mx(e),{host:o,port:l}=SN(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(ms(u,r.config.emulator)&&ms(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,di(o)?_m(`${i}//${o}${c}`):kN()}function mx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SN(t){const e=mx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jv(o)}}}function jv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}async function AN(t,e){return Ar(t,"POST","/v1/accounts:update",e)}async function bN(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function PN(t,e){return ad(t,"POST","/v1/accounts:signInWithPassword",fi(t,e))}/**
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
 */async function CN(t,e){return ad(t,"POST","/v1/accounts:signInWithEmailLink",fi(t,e))}async function NN(t,e){return ad(t,"POST","/v1/accounts:signInWithEmailLink",fi(t,e))}/**
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
 */class tl extends Sm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new tl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ov(e,n,"signInWithPassword",PN);case"emailLink":return CN(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ov(e,r,"signUpPassword",bN);case"emailLink":return NN(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xi(t,e){return ad(t,"POST","/v1/accounts:signInWithIdp",fi(t,e))}/**
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
 */const RN="http://localhost";class ti extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ti(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:RN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yl(n)}return e}}/**
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
 */function DN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ON(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class km{constructor(e){const n=fa(pa(e)),r=n.apiKey??null,s=n.oobCode??null,i=DN(n.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ON(e);try{return new km(n)}catch{return null}}}/**
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
 */class So{constructor(){this.providerId=So.PROVIDER_ID}static credential(e,n){return tl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=km.parseLink(n);return Z(r,"argument-error"),tl._fromEmailAndCode(e,r.code,r.tenantId)}}So.PROVIDER_ID="password";So.EMAIL_PASSWORD_SIGN_IN_METHOD="password";So.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends gx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zr extends wl{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
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
 */class $r extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
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
 */class Wr extends wl{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.GITHUB_SIGN_IN_METHOD="github.com";Wr.PROVIDER_ID="github.com";/**
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
 */class Hr extends wl{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */class fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nn._fromIdTokenResponse(e,r,s),o=Lv(r);return new fo({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Lv(r);return new fo({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wu extends Tn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wu(e,n,r,s)}}function yx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,i,e,r):i})}async function jN(t,e,n=!1){const r=await ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fo._forOperation(t,"link",r)}/**
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
 */async function LN(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(cs(r));const s="reauthenticate";try{const i=await ho(t,yx(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=Tm(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),fo._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),i}}/**
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
 */async function vx(t,e,n=!1){if(gn(t.app))return Promise.reject(cs(t));const r="signIn",s=await yx(t,r,e),i=await fo._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function VN(t,e){return vx(Io(t),e)}/**
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
 */async function MN(t){const e=Io(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function FN(t,e,n){return gn(t.app)?Promise.reject(cs(t)):VN(Se(t),So.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&MN(t),r})}function UN(t,e){return BN(Se(t),null,e)}async function BN(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await ho(t,AN(r,i));await t._updateTokensIfNecessary(o,!0)}function zN(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function $N(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function _x(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function WN(t){return Se(t).signOut()}const Eu="__sak";/**
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
 */class wx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HN=1e3,qN=10;class Ex extends wx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,qN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ex.type="LOCAL";const KN=Ex;/**
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
 */class xx extends wx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xx.type="SESSION";const Tx=xx;/**
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
 */function GN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await GN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cd.receivers=[];/**
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
 */function Am(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Am("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jn(){return window}function YN(t){Jn().location.href=t}/**
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
 */function Ix(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function JN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ZN(){return Ix()?self:null}/**
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
 */const Sx="firebaseLocalStorageDb",eR=1,xu="firebaseLocalStorage",kx="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ud(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function tR(){const t=indexedDB.deleteDatabase(Sx);return new El(t).toPromise()}function Zf(){const t=indexedDB.open(Sx,eR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:kx})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await tR(),e(await Zf()))})})}async function Vv(t,e,n){const r=ud(t,!0).put({[kx]:e,value:n});return new El(r).toPromise()}async function nR(t,e){const n=ud(t,!1).get(e),r=await new El(n).toPromise();return r===void 0?null:r.value}function Mv(t,e){const n=ud(t,!0).delete(e);return new El(n).toPromise()}const rR=800,sR=3;class Ax{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ix()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cd._getInstance(ZN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await JN(),!this.activeServiceWorker)return;this.sender=new QN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zf();return await Vv(e,Eu,"1"),await Mv(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ud(s,!1).getAll();return new El(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ax.type="LOCAL";const iR=Ax;new _l(3e4,6e4);/**
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
 */function oR(t,e){return e?hr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bm extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aR(t){return vx(t.auth,new bm(t),t.bypassAuthState)}function lR(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),LN(n,new bm(t),t.bypassAuthState)}async function cR(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),jN(n,new bm(t),t.bypassAuthState)}/**
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
 */class bx{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aR;case"linkViaPopup":case"linkViaRedirect":return cR;case"reauthViaPopup":case"reauthViaRedirect":return lR;default:Ln(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uR=new _l(2e3,1e4);class $i extends bx{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$i.currentPopupAction&&$i.currentPopupAction.cancel(),$i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}$i.currentPopupAction=null;/**
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
 */const dR="pendingRedirect",Oc=new Map;class hR extends bx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oc.get(this.auth._key());if(!e){try{const r=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oc.set(this.auth._key(),e)}return this.bypassAuthState||Oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(t,e){const n=gR(e),r=mR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pR(t,e){Oc.set(t._key(),e)}function mR(t){return hr(t._redirectPersistence)}function gR(t){return Dc(dR,t.config.apiKey,t.name)}async function yR(t,e,n=!1){if(gn(t.app))return Promise.reject(cs(t));const r=Io(t),s=oR(r,e),o=await new hR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const vR=10*60*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Px(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fv(e))}saveEventToCache(e){this.cachedEventUids.add(Fv(e)),this.lastProcessedEventTime=Date.now()}}function Fv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Px({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Px(t);default:return!1}}/**
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
 */async function ER(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const xR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TR=/^https?/;async function IR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ER(t);for(const n of e)try{if(SR(n))return}catch{}Ln(t,"unauthorized-domain")}function SR(t){const e=Jf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TR.test(n))return!1;if(xR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kR=new _l(3e4,6e4);function Uv(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AR(t){return new Promise((e,n)=>{var s,i,o;function r(){Uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uv(),n(Yn(t,"network-request-failed"))},timeout:kR.get()})}if((i=(s=Jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Jn().gapi)!=null&&o.load)r();else{const l=yN("iframefcb");return Jn()[l]=()=>{gapi.load?r():n(Yn(t,"network-request-failed"))},fx(`${gN()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw jc=null,e})}let jc=null;function bR(t){return jc=jc||AR(t),jc}/**
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
 */const PR=new _l(5e3,15e3),CR="__/auth/iframe",NR="emulator/auth/iframe",RR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OR(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xm(e,NR):`https://${t.config.authDomain}/${CR}`,r={apiKey:e.apiKey,appName:t.name,v:hi},s=DR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yl(r).slice(1)}`}async function jR(t){const e=await bR(t),n=Jn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:OR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Yn(t,"network-request-failed"),l=Jn().setTimeout(()=>{i(o)},PR.get());function c(){Jn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const LR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VR=500,MR=600,FR="_blank",UR="http://localhost";class Bv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BR(t,e,n,r=VR,s=MR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...LR,width:r.toString(),height:s.toString(),top:i,left:o},u=Rt().toLowerCase();n&&(l=ox(u)?FR:n),sx(u)&&(e=e||UR,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[A,P])=>`${g}${A}=${P},`,"");if(aN(u)&&l!=="_self")return zR(e||"",l),new Bv(null);const m=window.open(e||"",l,f);Z(m,t,"popup-blocked");try{m.focus()}catch{}return new Bv(m)}function zR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $R="__/auth/handler",WR="emulator/auth/handler",HR=encodeURIComponent("fac");async function zv(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:s};if(e instanceof gx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof wl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${HR}=${encodeURIComponent(c)}`:"";return`${qR(t)}?${yl(l).slice(1)}${u}`}function qR({config:t}){return t.emulator?xm(t,WR):`https://${t.authDomain}/${$R}`}/**
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
 */const Sh="webStorageSupport";class KR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tx,this._completeRedirectFn=yR,this._overrideRedirectResult=pR}async _openPopup(e,n,r,s){var o;Er((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await zv(e,n,r,Jf(),s);return BR(e,i,Am())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zv(e,n,r,Jf(),s);return YN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Er(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jR(e),r=new _R(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sh,{type:Sh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Sh];i!==void 0&&n(!!i),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dx()||ix()||Im()}}const GR=KR;var $v="@firebase/auth",Wv="1.12.2";/**
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
 */class QR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JR(t){cn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hx(t)},u=new fN(r,s,i,c);return TN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Yt("auth-internal",e=>{const n=Io(e.getProvider("auth").getImmediate());return(r=>new QR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct($v,Wv,YR(t)),Ct($v,Wv,"esm2020")}/**
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
 */const XR=5*60,ZR=$0("authIdTokenMaxAge")||XR;let Hv=null;const e1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZR)return;const s=n==null?void 0:n.token;Hv!==s&&(Hv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function t1(t=vl()){const e=kr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xN(t,{popupRedirectResolver:GR,persistence:[iR,KN,Tx]}),r=$0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=e1(i.toString());$N(n,o,()=>o(n.currentUser)),zN(n,l=>o(l))}}const s=U0("auth");return s&&IN(n,`http://${s}`),n}function n1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}pN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",n1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JR("Browser");var r1="firebase",s1="12.11.0";/**
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
 */Ct(r1,s1,"app");var qv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var us,Cx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function E(){}E.prototype=v.prototype,w.F=v.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(k,b,C){for(var I=Array(arguments.length-2),we=2;we<arguments.length;we++)I[we-2]=arguments[we];return v.prototype[b].apply(k,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,E){E||(E=0);const k=Array(16);if(typeof v=="string")for(var b=0;b<16;++b)k[b]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(b=0;b<16;++b)k[b]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=w.g[0],E=w.g[1],b=w.g[2];let C=w.g[3],I;I=v+(C^E&(b^C))+k[0]+3614090360&4294967295,v=E+(I<<7&4294967295|I>>>25),I=C+(b^v&(E^b))+k[1]+3905402710&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(E^C&(v^E))+k[2]+606105819&4294967295,b=C+(I<<17&4294967295|I>>>15),I=E+(v^b&(C^v))+k[3]+3250441966&4294967295,E=b+(I<<22&4294967295|I>>>10),I=v+(C^E&(b^C))+k[4]+4118548399&4294967295,v=E+(I<<7&4294967295|I>>>25),I=C+(b^v&(E^b))+k[5]+1200080426&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(E^C&(v^E))+k[6]+2821735955&4294967295,b=C+(I<<17&4294967295|I>>>15),I=E+(v^b&(C^v))+k[7]+4249261313&4294967295,E=b+(I<<22&4294967295|I>>>10),I=v+(C^E&(b^C))+k[8]+1770035416&4294967295,v=E+(I<<7&4294967295|I>>>25),I=C+(b^v&(E^b))+k[9]+2336552879&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(E^C&(v^E))+k[10]+4294925233&4294967295,b=C+(I<<17&4294967295|I>>>15),I=E+(v^b&(C^v))+k[11]+2304563134&4294967295,E=b+(I<<22&4294967295|I>>>10),I=v+(C^E&(b^C))+k[12]+1804603682&4294967295,v=E+(I<<7&4294967295|I>>>25),I=C+(b^v&(E^b))+k[13]+4254626195&4294967295,C=v+(I<<12&4294967295|I>>>20),I=b+(E^C&(v^E))+k[14]+2792965006&4294967295,b=C+(I<<17&4294967295|I>>>15),I=E+(v^b&(C^v))+k[15]+1236535329&4294967295,E=b+(I<<22&4294967295|I>>>10),I=v+(b^C&(E^b))+k[1]+4129170786&4294967295,v=E+(I<<5&4294967295|I>>>27),I=C+(E^b&(v^E))+k[6]+3225465664&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^E&(C^v))+k[11]+643717713&4294967295,b=C+(I<<14&4294967295|I>>>18),I=E+(C^v&(b^C))+k[0]+3921069994&4294967295,E=b+(I<<20&4294967295|I>>>12),I=v+(b^C&(E^b))+k[5]+3593408605&4294967295,v=E+(I<<5&4294967295|I>>>27),I=C+(E^b&(v^E))+k[10]+38016083&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^E&(C^v))+k[15]+3634488961&4294967295,b=C+(I<<14&4294967295|I>>>18),I=E+(C^v&(b^C))+k[4]+3889429448&4294967295,E=b+(I<<20&4294967295|I>>>12),I=v+(b^C&(E^b))+k[9]+568446438&4294967295,v=E+(I<<5&4294967295|I>>>27),I=C+(E^b&(v^E))+k[14]+3275163606&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^E&(C^v))+k[3]+4107603335&4294967295,b=C+(I<<14&4294967295|I>>>18),I=E+(C^v&(b^C))+k[8]+1163531501&4294967295,E=b+(I<<20&4294967295|I>>>12),I=v+(b^C&(E^b))+k[13]+2850285829&4294967295,v=E+(I<<5&4294967295|I>>>27),I=C+(E^b&(v^E))+k[2]+4243563512&4294967295,C=v+(I<<9&4294967295|I>>>23),I=b+(v^E&(C^v))+k[7]+1735328473&4294967295,b=C+(I<<14&4294967295|I>>>18),I=E+(C^v&(b^C))+k[12]+2368359562&4294967295,E=b+(I<<20&4294967295|I>>>12),I=v+(E^b^C)+k[5]+4294588738&4294967295,v=E+(I<<4&4294967295|I>>>28),I=C+(v^E^b)+k[8]+2272392833&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^E)+k[11]+1839030562&4294967295,b=C+(I<<16&4294967295|I>>>16),I=E+(b^C^v)+k[14]+4259657740&4294967295,E=b+(I<<23&4294967295|I>>>9),I=v+(E^b^C)+k[1]+2763975236&4294967295,v=E+(I<<4&4294967295|I>>>28),I=C+(v^E^b)+k[4]+1272893353&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^E)+k[7]+4139469664&4294967295,b=C+(I<<16&4294967295|I>>>16),I=E+(b^C^v)+k[10]+3200236656&4294967295,E=b+(I<<23&4294967295|I>>>9),I=v+(E^b^C)+k[13]+681279174&4294967295,v=E+(I<<4&4294967295|I>>>28),I=C+(v^E^b)+k[0]+3936430074&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^E)+k[3]+3572445317&4294967295,b=C+(I<<16&4294967295|I>>>16),I=E+(b^C^v)+k[6]+76029189&4294967295,E=b+(I<<23&4294967295|I>>>9),I=v+(E^b^C)+k[9]+3654602809&4294967295,v=E+(I<<4&4294967295|I>>>28),I=C+(v^E^b)+k[12]+3873151461&4294967295,C=v+(I<<11&4294967295|I>>>21),I=b+(C^v^E)+k[15]+530742520&4294967295,b=C+(I<<16&4294967295|I>>>16),I=E+(b^C^v)+k[2]+3299628645&4294967295,E=b+(I<<23&4294967295|I>>>9),I=v+(b^(E|~C))+k[0]+4096336452&4294967295,v=E+(I<<6&4294967295|I>>>26),I=C+(E^(v|~b))+k[7]+1126891415&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~E))+k[14]+2878612391&4294967295,b=C+(I<<15&4294967295|I>>>17),I=E+(C^(b|~v))+k[5]+4237533241&4294967295,E=b+(I<<21&4294967295|I>>>11),I=v+(b^(E|~C))+k[12]+1700485571&4294967295,v=E+(I<<6&4294967295|I>>>26),I=C+(E^(v|~b))+k[3]+2399980690&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~E))+k[10]+4293915773&4294967295,b=C+(I<<15&4294967295|I>>>17),I=E+(C^(b|~v))+k[1]+2240044497&4294967295,E=b+(I<<21&4294967295|I>>>11),I=v+(b^(E|~C))+k[8]+1873313359&4294967295,v=E+(I<<6&4294967295|I>>>26),I=C+(E^(v|~b))+k[15]+4264355552&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~E))+k[6]+2734768916&4294967295,b=C+(I<<15&4294967295|I>>>17),I=E+(C^(b|~v))+k[13]+1309151649&4294967295,E=b+(I<<21&4294967295|I>>>11),I=v+(b^(E|~C))+k[4]+4149444226&4294967295,v=E+(I<<6&4294967295|I>>>26),I=C+(E^(v|~b))+k[11]+3174756917&4294967295,C=v+(I<<10&4294967295|I>>>22),I=b+(v^(C|~E))+k[2]+718787259&4294967295,b=C+(I<<15&4294967295|I>>>17),I=E+(C^(b|~v))+k[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,v){v===void 0&&(v=w.length);const E=v-this.blockSize,k=this.C;let b=this.h,C=0;for(;C<v;){if(b==0)for(;C<=E;)s(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<v;)if(k[b++]=w.charCodeAt(C++),b==this.blockSize){s(this,k),b=0;break}}else for(;C<v;)if(k[b++]=w[C++],b==this.blockSize){s(this,k),b=0;break}}this.h=b,this.o+=v},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;v=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=v&255,v/=256;for(this.v(w),w=Array(16),v=0,E=0;E<4;++E)for(let k=0;k<32;k+=8)w[v++]=this.g[E]>>>k&255;return w};function i(w,v){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=v(w)}function o(w,v){this.h=v;const E=[];let k=!0;for(let b=w.length-1;b>=0;b--){const C=w[b]|0;k&&C==v||(E[b]=C,k=!1)}this.g=E}var l={};function c(w){return-128<=w&&w<128?i(w,function(v){return new o([v|0],v<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return j(u(-w));const v=[];let E=1;for(let k=0;w>=E;k++)v[k]=w/E|0,E*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return j(f(w.substring(1),v));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(v,8));let k=m;for(let C=0;C<w.length;C+=8){var b=Math.min(8,w.length-C);const I=parseInt(w.substring(C,C+b),v);b<8?(b=u(Math.pow(v,b)),k=k.j(b).add(u(I))):(k=k.j(E),k=k.add(u(I)))}return k}var m=c(0),g=c(1),A=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-j(this).m();let w=0,v=1;for(let E=0;E<this.g.length;E++){const k=this.i(E);w+=(k>=0?k:4294967296+k)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(N(this))return"-"+j(this).toString(w);const v=u(Math.pow(w,6));var E=this;let k="";for(;;){const b=L(E,v).g;E=T(E,b.j(v));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=b,P(E))return C+k;for(;C.length<6;)C="0"+C;k=C+k}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=T(this,w),N(w)?-1:P(w)?0:1};function j(w){const v=w.g.length,E=[];for(let k=0;k<v;k++)E[k]=~w.g[k];return new o(E,~w.h).add(g)}t.abs=function(){return N(this)?j(this):this},t.add=function(w){const v=Math.max(this.g.length,w.g.length),E=[];let k=0;for(let b=0;b<=v;b++){let C=k+(this.i(b)&65535)+(w.i(b)&65535),I=(C>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);k=I>>>16,C&=65535,I&=65535,E[b]=I<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,v){return w.add(j(v))}t.j=function(w){if(P(this)||P(w))return m;if(N(this))return N(w)?j(this).j(j(w)):j(j(this).j(w));if(N(w))return j(this.j(j(w)));if(this.l(A)<0&&w.l(A)<0)return u(this.m()*w.m());const v=this.g.length+w.g.length,E=[];for(var k=0;k<2*v;k++)E[k]=0;for(k=0;k<this.g.length;k++)for(let b=0;b<w.g.length;b++){const C=this.i(k)>>>16,I=this.i(k)&65535,we=w.i(b)>>>16,Ut=w.i(b)&65535;E[2*k+2*b]+=I*Ut,_(E,2*k+2*b),E[2*k+2*b+1]+=C*Ut,_(E,2*k+2*b+1),E[2*k+2*b+1]+=I*we,_(E,2*k+2*b+1),E[2*k+2*b+2]+=C*we,_(E,2*k+2*b+2)}for(w=0;w<v;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=v;w<2*v;w++)E[w]=0;return new o(E,0)};function _(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function S(w,v){this.g=w,this.h=v}function L(w,v){if(P(v))throw Error("division by zero");if(P(w))return new S(m,m);if(N(w))return v=L(j(w),v),new S(j(v.g),j(v.h));if(N(v))return v=L(w,j(v)),new S(j(v.g),v.h);if(w.g.length>30){if(N(w)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,k=v;k.l(w)<=0;)E=U(E),k=U(k);var b=z(E,1),C=z(k,1);for(k=z(k,2),E=z(E,2);!P(k);){var I=C.add(k);I.l(w)<=0&&(b=b.add(E),C=I),k=z(k,1),E=z(E,1)}return v=T(w,b.j(v)),new S(b,v)}for(b=m;w.l(v)>=0;){for(E=Math.max(1,Math.floor(w.m()/v.m())),k=Math.ceil(Math.log(E)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),C=u(E),I=C.j(v);N(I)||I.l(w)>0;)E-=k,C=u(E),I=C.j(v);P(C)&&(C=g),b=b.add(C),w=T(w,I)}return new S(b,w)}t.B=function(w){return L(this,w).h},t.and=function(w){const v=Math.max(this.g.length,w.g.length),E=[];for(let k=0;k<v;k++)E[k]=this.i(k)&w.i(k);return new o(E,this.h&w.h)},t.or=function(w){const v=Math.max(this.g.length,w.g.length),E=[];for(let k=0;k<v;k++)E[k]=this.i(k)|w.i(k);return new o(E,this.h|w.h)},t.xor=function(w){const v=Math.max(this.g.length,w.g.length),E=[];for(let k=0;k<v;k++)E[k]=this.i(k)^w.i(k);return new o(E,this.h^w.h)};function U(w){const v=w.g.length+1,E=[];for(let k=0;k<v;k++)E[k]=w.i(k)<<1|w.i(k-1)>>>31;return new o(E,w.h)}function z(w,v){const E=v>>5;v%=32;const k=w.g.length-E,b=[];for(let C=0;C<k;C++)b[C]=v>0?w.i(C+E)>>>v|w.i(C+E+1)<<32-v:w.i(C+E);return new o(b,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Cx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,us=o}).apply(typeof qv<"u"?qv:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nx,ma,Rx,Lc,ep,Dx,Ox,jx;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in p))break e;p=p[O]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,O,V){for(var W=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)W[ie-2]=arguments[ie];return h.prototype[O].apply(y,W)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function P(a,h){for(let y=1;y<arguments.length;y++){const O=arguments[y];var p=typeof O;if(p=p!="object"?p:O?Array.isArray(O)?"array":p:"null",p=="array"||p=="object"&&typeof O.length=="number"){p=a.length||0;const V=O.length||0;a.length=p+V;for(let W=0;W<V;W++)a[p+W]=O[W]}else a.push(O)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){o.setTimeout(()=>{throw a},0)}function T(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,p){const y=S.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var S=new N(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let U,z=!1,w=new _,v=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(E)}};function E(){for(var a;a=T();){try{a.h.call(a.g)}catch(p){j(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}z=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function we(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(we,b),we.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ut="closure_listenable_"+(Math.random()*1e6|0),Tt=0;function hn(a,h,p,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=O,this.key=++Tt,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function J(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function ye(a){const h={};for(const p in a)h[p]=a[p];return h}const Te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jt(a,h){let p,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(p in y)a[p]=y[p];for(let V=0;V<Te.length;V++)p=Te[V],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function ne(a){this.src=a,this.g={},this.h=0}ne.prototype.add=function(a,h,p,y,O){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const W=ae(a,h,y,O);return W>-1?(h=a[W],p||(h.fa=!1)):(h=new hn(h,this.src,V,!!y,O),h.fa=p,a.push(h)),h};function me(a,h){const p=h.type;if(p in a.g){var y=a.g[p],O=Array.prototype.indexOf.call(y,h,void 0),V;(V=O>=0)&&Array.prototype.splice.call(y,O,1),V&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ae(a,h,p,y){for(let O=0;O<a.length;++O){const V=a[O];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==y)return O}return-1}var Ge="closure_lm_"+(Math.random()*1e6|0),te={};function tt(a,h,p,y,O){if(Array.isArray(h)){for(let V=0;V<h.length;V++)tt(a,h[V],p,y,O);return null}return p=Oo(p),a&&a[Ut]?a.J(h,p,l(y)?!!y.capture:!1,O):Xt(a,h,p,!1,y,O)}function Xt(a,h,p,y,O,V){if(!h)throw Error("Invalid event type");const W=l(O)?!!O.capture:!!O;let ie=Ro(a);if(ie||(a[Ge]=ie=new ne(a)),p=ie.add(h,p,y,W,V),p.proxy)return p;if(y=Qe(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)C||(O=W),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(No(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Qe(){function a(p){return h.call(a.src,a.listener,p)}const h=bl;return a}function He(a,h,p,y,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)He(a,h[V],p,y,O);else y=l(y)?!!y.capture:!!y,p=Oo(p),a&&a[Ut]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=ae(h,p,y,O),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=Ro(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ae(h,p,y,O)),(p=a>-1?h[a]:null)&&Mn(p))}function Mn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ut])me(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(No(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Ro(h))?(me(p,a),p.h==0&&(p.src=null,h[Ge]=null)):$(a)}}}function No(a){return a in te?te[a]:te[a]="on"+a}function bl(a,h){if(a.da)a=!0;else{h=new we(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&Mn(a),a=p.call(y,h)}return a}function Ro(a){return a=a[Ge],a instanceof ne?a:null}var Do="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oo(a){return typeof a=="function"?a:(a[Do]||(a[Do]=function(h){return a.handleEvent(h)}),a[Do])}function nt(){k.call(this),this.i=new ne(this),this.M=this,this.G=null}m(nt,k),nt.prototype[Ut]=!0,nt.prototype.removeEventListener=function(a,h,p,y){He(this,a,h,p,y)};function pt(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var O=h;h=new b(y,a),Jt(h,O)}O=!0;let V,W;if(p)for(W=p.length-1;W>=0;W--)V=h.g=p[W],O=yi(V,y,!0,h)&&O;if(V=h.g=a,O=yi(V,y,!0,h)&&O,O=yi(V,y,!1,h)&&O,p)for(W=0;W<p.length;W++)V=h.g=p[W],O=yi(V,y,!1,h)&&O}nt.prototype.N=function(){if(nt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)$(p[y]);delete a.g[h],a.h--}}this.G=null},nt.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},nt.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function yi(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let V=0;V<h.length;++V){const W=h[V];if(W&&!W.da&&W.capture==p){const ie=W.listener,rt=W.ha||W.src;W.fa&&me(a.i,W),O=ie.call(rt,y)!==!1&&O}}return O&&!y.defaultPrevented}function Pl(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function jo(a){a.g=Pl(()=>{a.g=null,a.i&&(a.i=!1,jo(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class vi extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:jo(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(a){k.call(this),this.h=a,this.g={}}m(bs,k);var Ye=[];function mt(a){Y(a.g,function(h,p){this.g.hasOwnProperty(p)&&Mn(h)},a),a.g={}}bs.prototype.N=function(){bs.Z.N.call(this),mt(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _i=o.JSON.stringify,In=o.JSON.parse,Lo=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vo(){}function le(){}var br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mo(){b.call(this,"d")}m(Mo,b);function Fo(){b.call(this,"c")}m(Fo,b);var Fn={},wi=null;function Ei(){return wi=wi||new nt}Fn.Ia="serverreachability";function xi(a){b.call(this,Fn.Ia,a)}m(xi,b);function Ps(a){const h=Ei();pt(h,new xi(h))}Fn.STAT_EVENT="statevent";function Cl(a,h){b.call(this,Fn.STAT_EVENT,a),this.stat=h}m(Cl,b);function gt(a){const h=Ei();pt(h,new Cl(h,a))}Fn.Ja="timingevent";function Uo(a,h){b.call(this,Fn.Ja,a),this.size=h}m(Uo,b);function Cs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ns(){this.g=!0}Ns.prototype.ua=function(){this.g=!1};function Nd(a,h,p,y,O,V){a.info(function(){if(a.g)if(V){var W="",ie=V.split("&");for(let Ee=0;Ee<ie.length;Ee++){var rt=ie[Ee].split("=");if(rt.length>1){const ut=rt[0];rt=rt[1];const zn=ut.split("_");W=zn.length>=2&&zn[1]=="type"?W+(ut+"="+rt+"&"):W+(ut+"=redacted&")}}}else W=null;else W=V;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+p+`
`+W})}function Rd(a,h,p,y,O,V,W){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+p+`
`+V+" "+W})}function Pr(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Od(a,p)+(y?" "+y:"")})}function Dd(a,h){a.info(function(){return"TIMEOUT: "+h})}Ns.prototype.info=function(){};function Od(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var O=y[0];if(O!="noop"&&O!="stop"&&O!="close")for(let W=1;W<y.length;W++)y[W]=""}}}}return _i(V)}catch{return h}}var Ti={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Nl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Rl;function Cr(){}m(Cr,Vo),Cr.prototype.g=function(){return new XMLHttpRequest},Rl=new Cr;function Rs(a){return encodeURIComponent(String(a))}function jd(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Un(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new bs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dl}function Dl(){this.i=null,this.g="",this.h=!1}var Ol={},Bo={};function zo(a,h,p){a.M=1,a.A=Ll(Bn(h)),a.u=p,a.R=!0,jl(a,null)}function jl(a,h){a.F=Date.now(),G(a),a.B=Bn(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Pg(p.i,"t",y),a.C=0,p=a.j.L,a.h=new Dl,a.g=Kg(a.j,p?h:null,!a.u),a.P>0&&(a.O=new vi(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(Ye[0]=O.toString()),O=Ye);for(let V=0;V<O.length;V++){const W=tt(p,O[V],y||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ps(),Nd(a.i,a.v,a.B,a.l,a.S,a.u)}Un.prototype.ba=function(a){a=a.target;const h=this.O;h&&Dr(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const ie=Dr(this.g),rt=this.g.ya(),Ee=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Lg(this.g)))){this.K||ie!=4||rt==7||(rt==8||Ee<=0?Ps(3):Ps(2)),ge(this);var h=this.g.ca();this.X=h;var p=Ld(this);if(this.o=h==200,Rd(this.i,this.v,this.B,this.l,this.S,ie,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,O=this.g;if((y=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var V=y;break t}}V=null}if(a=V)Pr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ct(this,a);else{this.o=!1,this.m=3,gt(12),Oe(this),ke(this);break e}}if(this.R){a=!0;let ut;for(;!this.K&&this.C<p.length;)if(ut=D(this,p),ut==Bo){ie==4&&(this.m=4,gt(14),a=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Ol){this.m=4,gt(15),Pr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Pr(this.i,this.l,ut,null),ct(this,ut);if(x(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||p.length!=0||this.h.h||(this.m=1,gt(16),a=!1),this.o=this.o&&a,!a)Pr(this.i,this.l,p,"[Invalid Chunked Response]"),Oe(this),ke(this);else if(p.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),zd(W),W.P=!0,gt(11))}}else Pr(this.i,this.l,p,null),ct(this,p);ie==4&&Oe(this),this.o&&!this.K&&(ie==4?$g(this.j,this):(this.o=!1,G(this)))}else gS(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,gt(12)):(this.m=0,gt(13)),Oe(this),ke(this)}}}catch{}finally{}};function Ld(a){if(!x(a))return a.g.la();const h=Lg(a.g);if(h==="")return"";let p="";const y=h.length,O=Dr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Oe(a),ke(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<y;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(O&&V==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function x(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function D(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Bo:(p=Number(h.substring(p,y)),isNaN(p)?Ol:(y+=1,y+p>h.length?Bo:(h=h.slice(y,y+p),a.C=y+p,h)))}Un.prototype.cancel=function(){this.K=!0,Oe(this)};function G(a){a.T=Date.now()+a.H,X(a,a.H)}function X(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Cs(u(a.aa,a),h)}function ge(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Un.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Dd(this.i,this.B),this.M!=2&&(Ps(),gt(17)),Oe(this),this.m=2,ke(this)):X(this,this.T-a)};function ke(a){a.j.I==0||a.K||$g(a.j,a)}function Oe(a){ge(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,mt(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ct(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Zt(p.h,a))){if(!a.L&&Zt(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Bl(p),Fl(p);else break e;Bd(p),gt(18)}}else p.xa=O[1],0<p.xa-p.K&&O[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Cs(u(p.Va,p),6e3));oe(p.h)<=1&&p.ta&&(p.ta=void 0)}else Os(p,11)}else if((a.L||p.g==a)&&Bl(p),!I(h))for(O=p.Ba.g.parse(h),h=0;h<O.length;h++){let Ee=O[h];const ut=Ee[0];if(!(ut<=p.K))if(p.K=ut,Ee=Ee[1],p.I==2)if(Ee[0]=="c"){p.M=Ee[1],p.ba=Ee[2];const zn=Ee[3];zn!=null&&(p.ka=zn,p.j.info("VER="+p.ka));const js=Ee[4];js!=null&&(p.za=js,p.j.info("SVER="+p.za));const Or=Ee[5];Or!=null&&typeof Or=="number"&&Or>0&&(y=1.5*Or,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const jr=a.g;if(jr){const $l=jr.g?jr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($l){var V=y.h;V.g||$l.indexOf("spdy")==-1&&$l.indexOf("quic")==-1&&$l.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(fn(V,V.h),V.h=null))}if(y.G){const $d=jr.g?jr.g.getResponseHeader("X-HTTP-Session-Id"):null;$d&&(y.wa=$d,Ae(y.J,y.G,$d))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var W=a;if(y.na=qg(y,y.L?y.ba:null,y.W),W.L){kn(y.h,W);var ie=W,rt=y.O;rt&&(ie.H=rt),ie.D&&(ge(ie),G(ie)),y.g=W}else Bg(y);p.i.length>0&&Ul(p)}else Ee[0]!="stop"&&Ee[0]!="close"||Os(p,7);else p.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Os(p,7):Ud(p):Ee[0]!="noop"&&p.l&&p.l.qa(Ee),p.A=0)}}Ps(4)}catch{}}var Bt=class{constructor(a,h){this.g=a,this.map=h}};function Sn(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $o(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oe(a){return a.h?1:a.g?a.g.size:0}function Zt(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fn(a,h){a.g?a.g.add(h):a.h=h}function kn(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Sn.prototype.cancel=function(){if(this.i=Tg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return A(a.i)}var Ig=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sS(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let O,V=null;y>=0?(O=a[p].substring(0,y),V=a[p].substring(y+1)):O=a[p],h(O,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Nr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Nr?(this.l=a.l,Wo(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.u),this.h=a.h,Vd(this,Cg(a.i)),this.m=a.m):a&&(h=String(a).match(Ig))?(this.l=!1,Wo(this,h[1]||"",!0),this.o=qo(h[2]||""),this.g=qo(h[3]||"",!0),Ho(this,h[4]),this.h=qo(h[5]||"",!0),Vd(this,h[6]||"",!0),this.m=qo(h[7]||"")):(this.l=!1,this.i=new Go(null,this.l))}Nr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ko(h,Sg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ko(h,Sg,!0),"@"),a.push(Rs(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ko(p,p.charAt(0)=="/"?aS:oS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ko(p,cS)),a.join("")},Nr.prototype.resolve=function(a){const h=Bn(this);let p=!!a.j;p?Wo(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)Ho(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var O=h.h.lastIndexOf("/");O!=-1&&(y=h.h.slice(0,O+1)+y)}if(O=y,O==".."||O==".")y="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){y=O.lastIndexOf("/",0)==0,O=O.split("/");const V=[];for(let W=0;W<O.length;){const ie=O[W++];ie=="."?y&&W==O.length&&V.push(""):ie==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),y&&W==O.length&&V.push("")):(V.push(ie),y=!0)}y=V.join("/")}else y=O}return p?h.h=y:p=a.i.toString()!=="",p?Vd(h,Cg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Bn(a){return new Nr(a)}function Wo(a,h,p){a.j=p?qo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Vd(a,h,p){h instanceof Go?(a.i=h,uS(a.i,a.l)):(p||(h=Ko(h,lS)),a.i=new Go(h,a.l))}function Ae(a,h,p){a.i.set(h,p)}function Ll(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function qo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ko(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,iS),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sg=/[#\/\?@]/g,oS=/[#\?:]/g,aS=/[#\?]/g,lS=/[#\?@]/g,cS=/#/g;function Go(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ds(a){a.g||(a.g=new Map,a.h=0,a.i&&sS(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Go.prototype,t.add=function(a,h){Ds(this),this.i=null,a=Ii(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function kg(a,h){Ds(a),h=Ii(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ag(a,h){return Ds(a),h=Ii(a,h),a.g.has(h)}t.forEach=function(a,h){Ds(this),this.g.forEach(function(p,y){p.forEach(function(O){a.call(h,O,y,this)},this)},this)};function bg(a,h){Ds(a);let p=[];if(typeof h=="string")Ag(a,h)&&(p=p.concat(a.g.get(Ii(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ds(this),this.i=null,a=Ii(this,a),Ag(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=bg(this,a),a.length>0?String(a[0]):h):h};function Pg(a,h,p){kg(a,h),p.length>0&&(a.i=null,a.g.set(Ii(a,h),A(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const O=Rs(p);p=bg(this,p);for(let V=0;V<p.length;V++){let W=O;p[V]!==""&&(W+="="+Rs(p[V])),a.push(W)}}return this.i=a.join("&")};function Cg(a){const h=new Go;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ii(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function uS(a,h){h&&!a.j&&(Ds(a),a.i=null,a.g.forEach(function(p,y){const O=y.toLowerCase();y!=O&&(kg(this,y),Pg(this,O,p))},a)),a.j=h}function dS(a,h){const p=new Ns;if(o.Image){const y=new Image;y.onload=f(Rr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=f(Rr,p,"TestLoadImage: error",!1,h,y),y.onabort=f(Rr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(Rr,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function hS(a,h){const p=new Ns,y=new AbortController,O=setTimeout(()=>{y.abort(),Rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(O),V.ok?Rr(p,"TestPingServer: ok",!0,h):Rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Rr(p,"TestPingServer: error",!1,h)})}function Rr(a,h,p,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(p)}catch{}}function fS(){this.g=new Lo}function Md(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Md,Vo),Md.prototype.g=function(){return new Vl(this.i,this.h)};function Vl(a,h){nt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Vl,nt),t=Vl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Yo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ng(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ng(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qo(this):Yo(this),this.readyState==3&&Ng(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Qo(this))},t.Na=function(a){this.g&&(this.response=a,Qo(this))},t.ga=function(){this.g&&Qo(this)};function Qo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Yo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Yo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rg(a){let h="";return Y(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Fd(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Rg(p),typeof a=="string"?p!=null&&Rs(p):Ae(a,h,p))}function Ue(a){nt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ue,nt);var pS=/^https?$/i,mS=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Rl.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Dg(this,V);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)p.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())p.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(mS,h,void 0)>=0)||y||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,W]of p)this.g.setRequestHeader(V,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Dg(this,V)}};function Dg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Og(a),Ml(a)}function Og(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,pt(this,"complete"),pt(this,"abort"),Ml(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ml(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?jg(this):this.Xa())},t.Xa=function(){jg(this)};function jg(a){if(a.h&&typeof i<"u"){if(a.v&&Dr(a)==4)setTimeout(a.Ca.bind(a),0);else if(pt(a,"readystatechange"),Dr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=V===0){let W=String(a.D).match(Ig)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),y=!pS.test(W?W.toLowerCase():"")}p=y}if(p)pt(a,"complete"),pt(a,"success");else{a.o=6;try{var O=Dr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Og(a)}}finally{Ml(a)}}}}function Ml(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||pt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),In(h)}};function Lg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gS(a){const h={};a=(a.g&&Dr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var p=jd(a[y]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[O]||[];h[O]=V,V.push(p)}J(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Vg(a){this.za=0,this.i=[],this.j=new Ns,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jo("baseRetryDelayMs",5e3,a),this.Za=Jo("retryDelaySeedMs",1e4,a),this.Ta=Jo("forwardChannelMaxRetries",2,a),this.va=Jo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Sn(a&&a.concurrentRequestLimit),this.Ba=new fS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,y){gt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=qg(this,null,this.W),Ul(this)};function Ud(a){if(Mg(a),a.I==3){var h=a.V++,p=Bn(a.J);if(Ae(p,"SID",a.M),Ae(p,"RID",h),Ae(p,"TYPE","terminate"),Xo(a,p),h=new Un(a,a.j,h),h.M=2,h.A=Ll(Bn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Kg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),G(h)}Hg(a)}function Fl(a){a.g&&(zd(a),a.g.cancel(),a.g=null)}function Mg(a){Fl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Bl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ul(a){if(!$o(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||v(),z||(U(),z=!0),w.add(h,a),a.D=0}}function yS(a,h){return oe(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Cs(u(a.Ea,a,h),Wg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new Un(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ye(V),Jt(V,this.U)):V=this.U),this.u!==null||this.R||(O.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ug(this,O,h),p=Bn(this.J),Ae(p,"RID",a),Ae(p,"CVER",22),this.G&&Ae(p,"X-HTTP-Session-Id",this.G),Xo(this,p),V&&(this.R?h="headers="+Rs(Rg(V))+"&"+h:this.u&&Fd(p,this.u,V)),fn(this.h,O),this.Ra&&Ae(p,"TYPE","init"),this.S?(Ae(p,"$req",h),Ae(p,"SID","null"),O.U=!0,zo(O,p,null)):zo(O,p,h),this.I=2}}else this.I==3&&(a?Fg(this,a):this.i.length==0||$o(this.h)||Fg(this))};function Fg(a,h){var p;h?p=h.l:p=a.V++;const y=Bn(a.J);Ae(y,"SID",a.M),Ae(y,"RID",p),Ae(y,"AID",a.K),Xo(a,y),a.u&&a.o&&Fd(y,a.u,a.o),p=new Un(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ug(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fn(a.h,p),zo(p,y,h)}function Xo(a,h){a.H&&Y(a.H,function(p,y){Ae(h,y,p)}),a.l&&Y({},function(p,y){Ae(h,y,p)})}function Ug(a,h,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var O=a.i;let ie=-1;for(;;){const rt=["count="+p];ie==-1?p>0?(ie=O[0].g,rt.push("ofs="+ie)):ie=0:rt.push("ofs="+ie);let Ee=!0;for(let ut=0;ut<p;ut++){var V=O[ut].g;const zn=O[ut].map;if(V-=ie,V<0)ie=Math.max(0,O[ut].g-100),Ee=!1;else try{V="req"+V+"_"||"";try{var W=zn instanceof Map?zn:Object.entries(zn);for(const[js,Or]of W){let jr=Or;l(Or)&&(jr=_i(Or)),rt.push(V+js+"="+encodeURIComponent(jr))}}catch(js){throw rt.push(V+"type="+encodeURIComponent("_badmap")),js}}catch{y&&y(zn)}}if(Ee){W=rt.join("&");break e}}W=void 0}return a=a.i.splice(0,p),h.G=a,W}function Bg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||v(),z||(U(),z=!0),w.add(h,a),a.A=0}}function Bd(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Cs(u(a.Da,a),Wg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,zg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Cs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,gt(10),Fl(this),zg(this))};function zd(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function zg(a){a.g=new Un(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Bn(a.na);Ae(h,"RID","rpc"),Ae(h,"SID",a.M),Ae(h,"AID",a.K),Ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(h,"TO",a.ia),Ae(h,"TYPE","xmlhttp"),Xo(a,h),a.u&&a.o&&Fd(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ll(Bn(h)),p.u=null,p.R=!0,jl(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Fl(this),Bd(this),gt(19))};function Bl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function $g(a,h){var p=null;if(a.g==h){Bl(a),zd(a),a.g=null;var y=2}else if(Zt(a.h,h))p=h.G,kn(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;y=Ei(),pt(y,new Uo(y,p)),Ul(a)}else Bg(a);else if(O=h.m,O==3||O==0&&h.X>0||!(y==1&&yS(a,h)||y==2&&Bd(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),O){case 1:Os(a,5);break;case 4:Os(a,10);break;case 3:Os(a,6);break;default:Os(a,2)}}}function Wg(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Os(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),y=a.Ua;const O=!y;y=new Nr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Wo(y,"https"),Ll(y),O?dS(y.toString(),p):hS(y.toString(),p)}else gt(2);a.I=0,a.l&&a.l.pa(h),Hg(a),Mg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Hg(a){if(a.I=0,a.ja=[],a.l){const h=Tg(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function qg(a,h,p){var y=p instanceof Nr?Bn(p):new Nr(p);if(y.g!="")h&&(y.g=h+"."+y.g),Ho(y,y.u);else{var O=o.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const V=new Nr(null);y&&Wo(V,y),h&&(V.g=h),O&&Ho(V,O),p&&(V.h=p),y=V}return p=a.G,h=a.wa,p&&h&&Ae(y,p,h),Ae(y,"VER",a.ka),Xo(a,y),y}function Kg(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ue(new Md({ab:p})):new Ue(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gg(){}t=Gg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function zl(){}zl.prototype.g=function(a,h){return new en(a,h)};function en(a,h){nt.call(this),this.g=new Vg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Si(this)}m(en,nt),en.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Ud(this.g)},en.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=_i(a),a=p);h.i.push(new Bt(h.Ya++,a)),h.I==3&&Ul(h)},en.prototype.N=function(){this.g.l=null,delete this.j,Ud(this.g),delete this.g,en.Z.N.call(this)};function Qg(a){Mo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Qg,Mo);function Yg(){Fo.call(this),this.status=1}m(Yg,Fo);function Si(a){this.g=a}m(Si,Gg),Si.prototype.ra=function(){pt(this.g,"a")},Si.prototype.qa=function(a){pt(this.g,new Qg(a))},Si.prototype.pa=function(a){pt(this.g,new Yg)},Si.prototype.oa=function(){pt(this.g,"b")},zl.prototype.createWebChannel=zl.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,jx=function(){return new zl},Ox=function(){return Ei()},Dx=Fn,ep={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ti.NO_ERROR=0,Ti.TIMEOUT=8,Ti.HTTP_ERROR=6,Lc=Ti,Nl.COMPLETE="complete",Rx=Nl,le.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",nt.prototype.listen=nt.prototype.J,ma=le,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Nx=Ue}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let ko="12.11.0";function i1(t){ko=t}/**
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
 */const ni=new id("@firebase/firestore");function Ai(){return ni.logLevel}function H(t,...e){if(ni.logLevel<=ue.DEBUG){const n=e.map(Pm);ni.debug(`Firestore (${ko}): ${t}`,...n)}}function xr(t,...e){if(ni.logLevel<=ue.ERROR){const n=e.map(Pm);ni.error(`Firestore (${ko}): ${t}`,...n)}}function ri(t,...e){if(ni.logLevel<=ue.WARN){const n=e.map(Pm);ni.warn(`Firestore (${ko}): ${t}`,...n)}}function Pm(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Lx(t,r,n)}function Lx(t,e,n){let r=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xr(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Lx(e,s,r)}function se(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class a1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class l1{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new Vx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new At(e)}}class c1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class u1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new c1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function h1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Cm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=h1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function tp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return kh(s)===kh(i)?de(s,i):kh(s)?1:-1}return de(t.length,e.length)}const f1=55296,p1=57343;function kh(t){const e=t.charCodeAt(0);return e>=f1&&e<=p1}function po(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Gv="__name__";class Hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Hn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return de(e.length,n.length)}static compareSegments(e,n){const r=Hn.isNumericId(e),s=Hn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Hn.extractNumericId(e).compare(Hn.extractNumericId(n)):tp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return us.fromString(e.substring(4,e.length-2))}}class Ce extends Hn{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const m1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Hn{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return m1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gv}static keyField(){return new _t([Gv])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ce.fromString(e))}static fromName(e){return new Q(Ce.fromString(e).popFirst(5))}static empty(){return new Q(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ce(e.slice()))}}/**
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
 */function Mx(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function g1(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qv(t){if(!Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yv(t){if(Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fx(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nm(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function xl(t,e){if(!Fx(t))throw new K(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const Jv=-62135596800,Xv=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Xv);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Jv)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xv}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:Ze("string",Ne._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ne(0,0))}static max(){return new re(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nl=-1;function y1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new gs(s,Q.empty(),e)}function v1(t){return new gs(t.readTime,t.key,nl)}class gs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gs(re.min(),Q.empty(),nl)}static max(){return new gs(re.max(),Q.empty(),nl)}}function _1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const w1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ao(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==w1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function x1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class dd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}dd.ce=-1;/**
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
 */const Rm=-1;function hd(t){return t==null}function Tu(t){return t===0&&1/t==-1/0}function T1(t){return typeof t=="number"&&Number.isInteger(t)&&!Tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ux="";function I1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zv(e)),e=S1(t.get(n),e);return Zv(e)}function S1(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ux:n+="";break;default:n+=i}}return n}function Zv(t){return t+Ux+""}/**
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
 */function e_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cc(this.root,e,this.comparator,!0)}}class cc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t_(this.data.getIterator())}getIteratorFrom(e){return new t_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class t_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new rn([])}unionWith(e){let n=new lt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zx("Invalid base64 string: "+i):i}}(e);return new xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const k1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ys(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=k1.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vs(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */const $x="server_timestamp",Wx="__type__",Hx="__previous_value__",qx="__local_write_time__";function Dm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Wx])==null?void 0:r.stringValue)===$x}function fd(t){const e=t.mapValue.fields[Hx];return Dm(e)?fd(e):e}function rl(t){const e=ys(t.mapValue.fields[qx].timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class A1{constructor(e,n,r,s,i,o,l,c,u,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f,this.apiKey=m}}const Iu="(default)";class sl{constructor(e,n){this.projectId=e,this.database=n||Iu}static empty(){return new sl("","")}get isDefaultDatabase(){return this.database===Iu}isEqual(e){return e instanceof sl&&e.projectId===this.projectId&&e.database===this.database}}function b1(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sl(t.options.projectId,e)}/**
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
 */const Kx="__type__",P1="__max__",uc={mapValue:{}},Gx="__vector__",Su="value";function _s(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dm(t)?4:N1(t)?9007199254740991:C1(t)?10:11:ee(28295,{value:t})}function tr(t,e){if(t===e)return!0;const n=_s(t);if(n!==_s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rl(t).isEqual(rl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ys(s.timestampValue),l=ys(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vs(s.bytesValue).isEqual(vs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),l=qe(i.doubleValue);return o===l?Tu(o)===Tu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return po(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(e_(o)!==e_(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!tr(o[c],l[c])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function il(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function mo(t,e){if(t===e)return 0;const n=_s(t),r=_s(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=qe(i.integerValue||i.doubleValue),c=qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return n_(t.timestampValue,e.timestampValue);case 4:return n_(rl(t),rl(e));case 5:return tp(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vs(i),c=vs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=de(l[u],c[u]);if(f!==0)return f}return de(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=de(qe(i.latitude),qe(o.latitude));return l!==0?l:de(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return r_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,A,P,N;const l=i.fields||{},c=o.fields||{},u=(g=l[Su])==null?void 0:g.arrayValue,f=(A=c[Su])==null?void 0:A.arrayValue,m=de(((P=u==null?void 0:u.values)==null?void 0:P.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:r_(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===uc.mapValue&&o===uc.mapValue)return 0;if(i===uc.mapValue)return 1;if(o===uc.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=tp(c[m],f[m]);if(g!==0)return g;const A=mo(l[c[m]],u[f[m]]);if(A!==0)return A}return de(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function n_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=ys(t),r=ys(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function r_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=mo(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function go(t){return np(t)}function np(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ys(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=np(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${np(n.fields[o])}`;return s+"}"}(t.mapValue):ee(61005,{value:t})}function Vc(t){switch(_s(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fd(t);return e?16+Vc(e):16;case 5:return 2*t.stringValue.length;case 6:return vs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Vc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ks(r.fields,(i,o)=>{s+=i.length+Vc(o)}),s}(t.mapValue);default:throw ee(13486,{value:t})}}function rp(t){return!!t&&"integerValue"in t}function Om(t){return!!t&&"arrayValue"in t}function s_(t){return!!t&&"nullValue"in t}function i_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mc(t){return!!t&&"mapValue"in t}function C1(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Kx])==null?void 0:r.stringValue)===Gx}function Pa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pa(t.arrayValue.values[n]);return e}return{...t}}function N1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===P1}/**
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
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Pa(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(Pa(this.value))}}function Qx(t){const e=[];return ks(t.fields,(n,r)=>{const s=new _t([n]);if(Mc(r)){const i=Qx(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
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
 */class Pt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Pt(e,0,re.min(),re.min(),re.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new Pt(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new Pt(e,2,n,re.min(),re.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,re.min(),re.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ku{constructor(e,n){this.position=e,this.inclusive=n}}function o_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=mo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function a_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Au{constructor(e,n="asc"){this.field=e,this.dir=n}}function R1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yx{}class ot extends Yx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new O1(e,n,r):n==="array-contains"?new V1(e,r):n==="in"?new M1(e,r):n==="not-in"?new F1(e,r):n==="array-contains-any"?new U1(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new j1(e,r):new L1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(mo(n,this.value)):n!==null&&_s(this.value)===_s(n)&&this.matchesComparison(mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends Yx{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new nr(e,n)}matches(e){return Jx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jx(t){return t.op==="and"}function Xx(t){return D1(t)&&Jx(t)}function D1(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function sp(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+go(t.value);if(Xx(t))return t.filters.map(e=>sp(e)).join(",");{const e=t.filters.map(n=>sp(n)).join(",");return`${t.op}(${e})`}}function Zx(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&tr(r.value,s.value)}(t,e):t instanceof nr?function(r,s){return s instanceof nr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Zx(o,s.filters[l]),!0):!1}(t,e):void ee(19439)}function eT(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${go(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(eT).join(" ,")+"}"}(t):"Filter"}class O1 extends ot{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class j1 extends ot{constructor(e,n){super(e,"in",n),this.keys=tT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class L1 extends ot{constructor(e,n){super(e,"not-in",n),this.keys=tT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class V1 extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Om(n)&&il(n.arrayValue,this.value)}}class M1 extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&il(this.value.arrayValue,n)}}class F1 extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!il(this.value.arrayValue,n)}}class U1 extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>il(this.value.arrayValue,r))}}/**
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
 */class B1{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function l_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new B1(t,e,n,r,s,i,o)}function jm(t){const e=se(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>go(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>go(r)).join(",")),e.Te=n}return e.Te}function Lm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!R1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!a_(t.startAt,e.startAt)&&a_(t.endAt,e.endAt)}function ip(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class pd{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function z1(t,e,n,r,s,i,o,l){return new pd(t,e,n,r,s,i,o,l)}function Vm(t){return new pd(t)}function c_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $1(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function W1(t){return t.collectionGroup!==null}function Ca(t){const e=se(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Au(i,r))}),n.has(_t.keyField().canonicalString())||e.Ee.push(new Au(_t.keyField(),r))}return e.Ee}function Xn(t){const e=se(t);return e.Ie||(e.Ie=H1(e,Ca(t))),e.Ie}function H1(t,e){if(t.limitType==="F")return l_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Au(s.field,i)});const n=t.endAt?new ku(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ku(t.startAt.position,t.startAt.inclusive):null;return l_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function op(t,e,n){return new pd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function md(t,e){return Lm(Xn(t),Xn(e))&&t.limitType===e.limitType}function nT(t){return`${jm(Xn(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>eT(s)).join(", ")}]`),hd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>go(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>go(s)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function gd(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ca(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=o_(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ca(r),s)||r.endAt&&!function(o,l,c){const u=o_(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ca(r),s))}(t,e)}function q1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rT(t){return(e,n)=>{let r=!1;for(const s of Ca(t)){const i=K1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function K1(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?mo(c,u):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
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
 */class pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Bx(this.inner)}size(){return this.innerSize}}/**
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
 */const G1=new Fe(Q.comparator);function Tr(){return G1}const sT=new Fe(Q.comparator);function ga(...t){let e=sT;for(const n of t)e=e.insert(n.key,n);return e}function iT(t){let e=sT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $s(){return Na()}function oT(){return Na()}function Na(){return new pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Q1=new Fe(Q.comparator),Y1=new lt(Q.comparator);function he(...t){let e=Y1;for(const n of t)e=e.add(n);return e}const J1=new lt(de);function X1(){return J1}/**
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
 */function Mm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tu(e)?"-0":e}}function aT(t){return{integerValue:""+t}}function Z1(t,e){return T1(e)?aT(e):Mm(t,e)}/**
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
 */class yd{constructor(){this._=void 0}}function e2(t,e,n){return t instanceof ol?function(s,i){const o={fields:{[Wx]:{stringValue:$x},[qx]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Dm(i)&&(i=fd(i)),i&&(o.fields[Hx]=i),{mapValue:o}}(n,e):t instanceof al?cT(t,e):t instanceof ll?uT(t,e):function(s,i){const o=lT(s,i),l=u_(o)+u_(s.Ae);return rp(o)&&rp(s.Ae)?aT(l):Mm(s.serializer,l)}(t,e)}function t2(t,e,n){return t instanceof al?cT(t,e):t instanceof ll?uT(t,e):n}function lT(t,e){return t instanceof bu?function(r){return rp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ol extends yd{}class al extends yd{constructor(e){super(),this.elements=e}}function cT(t,e){const n=dT(e);for(const r of t.elements)n.some(s=>tr(s,r))||n.push(r);return{arrayValue:{values:n}}}class ll extends yd{constructor(e){super(),this.elements=e}}function uT(t,e){let n=dT(e);for(const r of t.elements)n=n.filter(s=>!tr(s,r));return{arrayValue:{values:n}}}class bu extends yd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function u_(t){return qe(t.integerValue||t.doubleValue)}function dT(t){return Om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class n2{constructor(e,n){this.field=e,this.transform=n}}function r2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof al&&s instanceof al||r instanceof ll&&s instanceof ll?po(r.elements,s.elements,tr):r instanceof bu&&s instanceof bu?tr(r.Ae,s.Ae):r instanceof ol&&s instanceof ol}(t.transform,e.transform)}class s2{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vd{}function hT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fm(t.key,wn.none()):new Tl(t.key,t.data,wn.none());{const n=t.data,r=Ht.empty();let s=new lt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new As(t.key,r,new rn(s.toArray()),wn.none())}}function i2(t,e,n){t instanceof Tl?function(s,i,o){const l=s.value.clone(),c=h_(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof As?function(s,i,o){if(!Fc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=h_(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(fT(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ra(t,e,n,r){return t instanceof Tl?function(i,o,l,c){if(!Fc(i.precondition,o))return l;const u=i.value.clone(),f=f_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof As?function(i,o,l,c){if(!Fc(i.precondition,o))return l;const u=f_(i.fieldTransforms,c,o),f=o.data;return f.setAll(fT(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Fc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function o2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lT(r.transform,s||null);i!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,i))}return n||null}function d_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&po(r,s,(i,o)=>r2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends vd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class As extends vd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h_(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,t2(o,l,n[s]))}return r}function f_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,e2(i,o,e))}return r}class Fm extends vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a2 extends vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class l2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&i2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=hT(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,(n,r)=>d_(n,r))&&po(this.baseMutations,e.baseMutations,(n,r)=>d_(n,r))}}class Um{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Q1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Um(e,n,r,s)}}/**
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
 */class c2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class u2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Je,fe;function d2(t){switch(t){case F.OK:return ee(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function pT(t){if(t===void 0)return xr("GRPC error has no .code"),F.UNKNOWN;switch(t){case Je.OK:return F.OK;case Je.CANCELLED:return F.CANCELLED;case Je.UNKNOWN:return F.UNKNOWN;case Je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Je.INTERNAL:return F.INTERNAL;case Je.UNAVAILABLE:return F.UNAVAILABLE;case Je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Je.NOT_FOUND:return F.NOT_FOUND;case Je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Je.ABORTED:return F.ABORTED;case Je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Je.DATA_LOSS:return F.DATA_LOSS;default:return ee(39323,{code:t})}}(fe=Je||(Je={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function h2(){return new TextEncoder}/**
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
 */const f2=new us([4294967295,4294967295],0);function p_(t){const e=h2().encode(t),n=new Cx;return n.update(e),new Uint8Array(n.digest())}function m_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new us([n,r],0),new us([s,i],0)]}class Bm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ya(`Invalid padding: ${n}`);if(r<0)throw new ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ya(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=us.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(us.fromNumber(r)));return s.compare(f2)===1&&(s=new us([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=p_(e),[r,s]=m_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=p_(e),[r,s]=m_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _d{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _d(re.min(),s,new Fe(de),Tr(),he())}}class Il{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Il(r,n,he(),he(),he())}}/**
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
 */class Uc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class mT{constructor(e,n){this.targetId=e,this.Ce=n}}class gT{constructor(e,n,r=xt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class g_{constructor(){this.ve=0,this.Fe=y_(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),n=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Il(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=y_()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class p2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tr(),this.Je=dc(),this.He=dc(),this.Ze=new Fe(de)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(ip(i))if(r===0){const o=new Q(i.path);this.et(n,o,Pt.newNoDocument(o,re.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=vs(r).toUint8Array()}catch(c){if(c instanceof zx)return ri("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Bm(o,s,i)}catch(c){return ri(c instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&ip(l.target)){const c=new Q(l.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,Pt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=he();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new _d(e,n,this.Ze,this.je,r);return this.je=Tr(),this.Je=dc(),this.He=dc(),this.Ze=new Fe(de),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new g_,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new lt(de),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new lt(de),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new g_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function dc(){return new Fe(Q.comparator)}function y_(){return new Fe(Q.comparator)}const m2={asc:"ASCENDING",desc:"DESCENDING"},g2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y2={and:"AND",or:"OR"};class v2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ap(t,e){return t.useProto3Json||hd(e)?e:{value:e}}function Pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _2(t,e){return Pu(t,e.toTimestamp())}function Zn(t){return ve(!!t,49232),re.fromTimestamp(function(n){const r=ys(n);return new Ne(r.seconds,r.nanos)}(t))}function zm(t,e){return lp(t,e).canonicalString()}function lp(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vT(t){const e=Ce.fromString(t);return ve(TT(e),10190,{key:e.toString()}),e}function cp(t,e){return zm(t.databaseId,e.path)}function Ah(t,e){const n=vT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(wT(n))}function _T(t,e){return zm(t.databaseId,e)}function w2(t){const e=vT(t);return e.length===4?Ce.emptyPath():wT(e)}function up(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wT(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function v_(t,e,n){return{name:cp(t,e),fields:n.value.mapValue.fields}}function E2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(ve(f===void 0||typeof f=="string",58123),xt.fromBase64String(f||"")):(ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),xt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?F.UNKNOWN:pT(u.code);return new K(f,u.message||"")}(o);n=new gT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ah(t,r.document.name),i=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):re.min(),l=new Ht({mapValue:{fields:r.document.fields}}),c=Pt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Uc(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ah(t,r.document),i=r.readTime?Zn(r.readTime):re.min(),o=Pt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Uc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ah(t,r.document),i=r.removedTargetIds||[];n=new Uc([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new u2(s,i),l=r.targetId;n=new mT(l,o)}}return n}function x2(t,e){let n;if(e instanceof Tl)n={update:v_(t,e.key,e.value)};else if(e instanceof Fm)n={delete:cp(t,e.key)};else if(e instanceof As)n={update:v_(t,e.key,e.data),updateMask:N2(e.fieldMask)};else{if(!(e instanceof a2))return ee(16599,{dt:e.type});n={verify:cp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ol)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof al)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(t,e.precondition)),n}function T2(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Zn(s.updateTime):Zn(i);return o.isEqual(re.min())&&(o=Zn(i)),new s2(o,s.transformResults||[])}(n,e))):[]}function I2(t,e){return{documents:[_T(t,e.path)]}}function S2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_T(t,s);const i=function(u){if(u.length!==0)return xT(nr.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Pi(g.field),direction:b2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ap(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function k2(t){let e=w2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=ET(m);return g instanceof nr&&Xx(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(P){return new Au(Ci(P.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,hd(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,A=m.values||[];return new ku(A,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,A=m.values||[];return new ku(A,g)}(n.endAt)),z1(e,s,o,i,l,"F",c,u)}function A2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ET(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ci(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ci(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return ot.create(Ci(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>ET(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function b2(t){return m2[t]}function P2(t){return g2[t]}function C2(t){return y2[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Ci(t){return _t.fromServerFormat(t.fieldPath)}function xT(t){return t instanceof ot?function(n){if(n.op==="=="){if(i_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(s_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(s_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:P2(n.op),value:n.value}}}(t):t instanceof nr?function(n){const r=n.getFilters().map(s=>xT(s));return r.length===1?r[0]:{compositeFilter:{op:C2(n.op),filters:r}}}(t):ee(54877,{filter:t})}function N2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function IT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Jr{constructor(e,n,r,s,i=re.min(),o=re.min(),l=xt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class R2{constructor(e){this.yt=e}}function D2(t){const e=k2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?op(e,e.limit,"L"):e}/**
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
 */class O2{constructor(){this.bn=new j2}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(gs.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(gs.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class j2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(Ce.comparator)).toArray()}}/**
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
 */const __={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ST=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(ST,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class yo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new yo(0)}static ar(){return new yo(-1)}}/**
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
 */const w_="LruGarbageCollector",L2=1048576;function E_([t,e],[n,r]){const s=de(t,n);return s===0?de(e,r):s}class V2{constructor(e){this.Pr=e,this.buffer=new lt(E_),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();E_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class M2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(w_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bo(n)?H(w_,"Ignoring IndexedDB error during garbage collection: ",n):await Ao(n)}await this.Ar(3e5)})}}class F2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(dd.ce);const r=new V2(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(__)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),__):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Ai()<=ue.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function U2(t,e){return new F2(t,e)}/**
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
 */class B2{constructor(){this.changes=new pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class z2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ra(r.mutation,s,rn.empty(),Ne.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=$s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ga();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Tr();const o=Na(),l=function(){return Na()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof As)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ra(f.mutation,u,f.mutation.getFieldMask(),Ne.now())):o.set(u.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new z2(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Na();let s=new Fe((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||rn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(s.get(l.batchId)||he()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=oT();f.forEach(g=>{if(!i.has(g)){const A=hT(n.get(g),r.get(g));A!==null&&m.set(g,A),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return $1(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve($s());let l=nl,c=i;return o.next(u=>M.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,he())).next(f=>({batchId:l,changes:iT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=ga();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ga();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const u=function(m,g){return new pd(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Pt.newInvalidDocument(f)))});let l=ga();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Ra(f.mutation,u,rn.empty(),Ne.now()),gd(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class W2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:D2(s.bundledQuery),readTime:Zn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class H2{constructor(){this.overlays=new Fe(Q.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$s();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=$s(),i=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=$s(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=$s(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new c2(n,r));let i=this.Lr.get(n);i===void 0&&(i=he(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class q2{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class $m{constructor(){this.kr=new lt(dt.qr),this.Kr=new lt(dt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new dt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new Ce([])),r=new dt(n,e),s=new dt(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new Q(new Ce([])),r=new dt(n,e),s=new dt(n,e+1);let i=he();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return Q.comparator(e.key,n.key)||de(e.Jr,n.Jr)}static Ur(e,n){return de(e.Jr,n.Jr)||Q.comparator(e.key,n.key)}}/**
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
 */class K2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new lt(dt.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new l2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new dt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Rm:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(de);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new dt(new Q(i),0);let l=new lt(de);return this.Hr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new dt(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class G2{constructor(e){this.ti=e,this.docs=function(){return new Fe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_1(v1(f),r)<=0||(s.has(f.key)||gd(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Q2(this)}getSize(e){return M.resolve(this.size)}}class Q2 extends B2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class Y2{constructor(e){this.persistence=e,this.ri=new pi(n=>jm(n),Lm),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.ii=0,this.si=new $m,this.targetCount=0,this.oi=yo._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new yo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class kT{constructor(e,n){this._i={},this.overlays={},this.ai=new dd(0),this.ui=!1,this.ui=!0,this.ci=new q2,this.referenceDelegate=e(this),this.li=new Y2(this),this.indexManager=new O2,this.remoteDocumentCache=function(s){return new G2(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new R2(n),this.Pi=new W2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new K2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new J2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class J2 extends E1{constructor(e){super(),this.currentSequenceNumber=e}}class Wm{constructor(e){this.persistence=e,this.Ri=new $m,this.Ai=null}static Vi(e){return new Wm(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=Q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Cu{constructor(e,n){this.persistence=e,this.fi=new pi(r=>I1(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=U2(this,n)}static Vi(e,n){return new Cu(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Vc(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hm(e,n.fromCache,r,s)}}/**
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
 */class X2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Z2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return xP()?8:x1(Rt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new X2;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ai()<=ue.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ai()<=ue.DEBUG&&H("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ai()<=ue.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):M.resolve())}gs(e,n){if(c_(n))return M.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=op(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ss(n,l);return this.bs(n,u,o,c.readTime)?this.gs(e,op(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,s){return c_(n)||s.isEqual(re.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?M.resolve(null):(Ai()<=ue.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bi(n)),this.Ds(e,o,n,y1(s,nl)).next(l=>l))})}Ss(e,n){let r=new lt(rT(e));return n.forEach((s,i)=>{gd(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ai()<=ue.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",bi(n)),this.fs.getDocumentsMatchingQuery(e,n,gs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const qm="LocalStore",eD=3e8;class tD{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Fe(de),this.Fs=new pi(i=>jm(i),Lm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function nD(t,e,n,r){return new tD(t,e,n,r)}async function AT(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=he();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function rD(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,g=m.keys();let A=M.resolve();return g.forEach(P=>{A=A.next(()=>f.getEntry(c,P)).next(N=>{const j=u.docVersions.get(P);ve(j!==null,48541),N.version.compareTo(j)<0&&(m.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=he();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function bT(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function sD(t,e){const n=se(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(xt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(N,j,T){return N.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=eD?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,A,f)&&l.push(n.li.updateTargetData(i,A))});let c=Tr(),u=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(iD(i,o,e.documentUpdates).next(f=>{c=f.Bs,u=f.Ls})),!r.isEqual(re.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.vs=s,i))}function iD(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):H(qm,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function oD(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aD(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function dp(t,e,n){const r=se(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bo(o))throw o;H(qm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function x_(t,e,n){const r=se(t);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const m=se(c),g=m.Fs.get(f);return g!==void 0?M.resolve(m.vs.get(g)):m.li.getTargetData(u,f)}(r,o,Xn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:he())).next(l=>(lD(r,q1(e),l),{documents:l,ks:i})))}function lD(t,e,n){let r=t.Ms.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class T_{constructor(){this.activeTargetIds=X1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cD{constructor(){this.vo=new T_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new T_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uD{Mo(e){}shutdown(){}}/**
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
 */let hc=null;function hp(){return hc===null?hc=function(){return 268435456+Math.round(2147483648*Math.random())}():hc++,"0x"+hc.toString(16)}/**
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
 */const bh="RestConnection",dD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hD{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Iu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=hp(),l=this.Qo(e,n.toUriEncodedString());H(bh,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(l),f=di(u);return this.zo(e,l,c,r,f).then(m=>(H(bh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ri(bh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=dD[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class fD{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const kt="WebChannelConnection",aa=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Zi extends hD{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zi.c_){const e=Ox();aa(e,Dx.STAT_EVENT,n=>{n.stat===ep.PROXY?H(kt,"STAT_EVENT: detected buffering proxy"):n.stat===ep.NOPROXY&&H(kt,"STAT_EVENT: detected no buffering proxy")}),Zi.c_=!0}}zo(e,n,r,s,i){const o=hp();return new Promise((l,c)=>{const u=new Nx;u.setWithCredentials(!0),u.listenOnce(Rx.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lc.NO_ERROR:const m=u.getResponseJson();H(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Lc.TIMEOUT:H(kt,`RPC '${e}' ${o} timed out`),c(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case Lc.HTTP_ERROR:const g=u.getStatus();if(H(kt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let A=u.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const N=function(T){const _=T.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(P.status);c(new K(N,P.message))}else c(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new K(F.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(kt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(kt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=hp(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");H(kt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const f=o.createWebChannel(u,l);this.E_(f);let m=!1,g=!1;const A=new fD({Jo:P=>{g?H(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(H(kt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),H(kt,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Ho:()=>f.close()});return aa(f,ma.EventType.OPEN,()=>{g||(H(kt,`RPC '${e}' stream ${s} transport opened.`),A.i_())}),aa(f,ma.EventType.CLOSE,()=>{g||(g=!0,H(kt,`RPC '${e}' stream ${s} transport closed`),A.o_(),this.I_(f))}),aa(f,ma.EventType.ERROR,P=>{g||(g=!0,ri(kt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),A.o_(new K(F.UNAVAILABLE,"The operation could not be completed")))}),aa(f,ma.EventType.MESSAGE,P=>{var N;if(!g){const j=P.data[0];ve(!!j,16349);const T=j,_=(T==null?void 0:T.error)||((N=T[0])==null?void 0:N.error);if(_){H(kt,`RPC '${e}' stream ${s} received error:`,_);const S=_.status;let L=function(w){const v=Je[w];if(v!==void 0)return pT(v)}(S),U=_.message;S==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&ri(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=F.INTERNAL,U="Unknown error status: "+S+" with message "+_.message),g=!0,A.o_(new K(L,U)),f.close()}else H(kt,`RPC '${e}' stream ${s} received:`,j),A.__(j)}}),Zi.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return jx()}}/**
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
 */function pD(t){return new Zi(t)}function Ph(){return typeof document<"u"?document:null}/**
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
 */function wd(t){return new v2(t,!0)}/**
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
 */Zi.c_=!1;class PT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const k_="PersistentStream";class CT{constructor(e,n,r,s,i,o,l,c){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new PT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(k_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(k_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mD extends CT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=E2(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Zn(o.readTime):re.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=up(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=ip(c)?{documents:I2(i,c)}:{query:S2(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yT(i,o.resumeToken);const u=ap(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(re.min())>0){l.readTime=Pu(i,o.snapshotVersion.toTimestamp());const u=ap(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=A2(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=up(this.serializer),n.removeTarget=e,this.q_(n)}}class gD extends CT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=T2(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=up(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>x2(this.serializer,r))};this.q_(n)}}/**
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
 */class yD{}class vD extends yD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,lp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(F.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,lp(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _D(t,e,n,r){return new vD(t,e,n,r)}class wD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const si="RemoteStore";class ED{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{mi(this)&&(H(si,"Restarting streams for network reachability change."),await async function(c){const u=se(c);u.Ia.add(4),await Sl(u),u.Va.set("Unknown"),u.Ia.delete(4),await Ed(u)}(this))})}),this.Va=new wD(r,s)}}async function Ed(t){if(mi(t))for(const e of t.Ra)await e(!0)}async function Sl(t){for(const e of t.Ra)await e(!1)}function NT(t,e){const n=se(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Ym(n)?Qm(n):Po(n).O_()&&Gm(n,e))}function Km(t,e){const n=se(t),r=Po(n);n.Ea.delete(e),r.O_()&&RT(n,e),n.Ea.size===0&&(r.O_()?r.L_():mi(n)&&n.Va.set("Unknown"))}function Gm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Po(t).Z_(e)}function RT(t,e){t.da.$e(e),Po(t).X_(e)}function Qm(t){t.da=new p2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Po(t).start(),t.Va.ua()}function Ym(t){return mi(t)&&!Po(t).x_()&&t.Ea.size>0}function mi(t){return se(t).Ia.size===0}function DT(t){t.da=void 0}async function xD(t){t.Va.set("Online")}async function TD(t){t.Ea.forEach((e,n)=>{Gm(t,e)})}async function ID(t,e){DT(t),Ym(t)?(t.Va.ha(e),Qm(t)):t.Va.set("Unknown")}async function SD(t,e,n){if(t.Va.set("Online"),e instanceof gT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){H(si,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof Uc?t.da.Xe(e):e instanceof mT?t.da.st(e):t.da.tt(e),!n.isEqual(re.min()))try{const r=await bT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(u);f&&i.Ea.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(xt.EMPTY_BYTE_STRING,f.snapshotVersion)),RT(i,c);const m=new Jr(f.target,c,u,f.sequenceNumber);Gm(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(si,"Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!bo(e))throw e;t.Ia.add(1),await Sl(t),t.Va.set("Offline"),n||(n=()=>bT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(si,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ed(t)})}function OT(t,e){return e().catch(n=>Nu(t,n,e))}async function xd(t){const e=se(t),n=ws(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rm;for(;kD(e);)try{const s=await oD(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,AD(e,s)}catch(s){await Nu(e,s)}jT(e)&&LT(e)}function kD(t){return mi(t)&&t.Ta.length<10}function AD(t,e){t.Ta.push(e);const n=ws(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function jT(t){return mi(t)&&!ws(t).x_()&&t.Ta.length>0}function LT(t){ws(t).start()}async function bD(t){ws(t).ra()}async function PD(t){const e=ws(t);for(const n of t.Ta)e.ea(n.mutations)}async function CD(t,e,n){const r=t.Ta.shift(),s=Um.from(r,e,n);await OT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xd(t)}async function ND(t,e){e&&ws(t).Y_&&await async function(r,s){if(function(o){return d2(o)&&o!==F.ABORTED}(s.code)){const i=r.Ta.shift();ws(r).B_(),await OT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xd(r)}}(t,e),jT(t)&&LT(t)}async function A_(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),H(si,"RemoteStore received new credentials");const r=mi(n);n.Ia.add(3),await Sl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ed(n)}async function RD(t,e){const n=se(t);e?(n.Ia.delete(2),await Ed(n)):e||(n.Ia.add(2),await Sl(n),n.Va.set("Unknown"))}function Po(t){return t.ma||(t.ma=function(n,r,s){const i=se(n);return i.sa(),new mD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:xD.bind(null,t),Yo:TD.bind(null,t),t_:ID.bind(null,t),H_:SD.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Ym(t)?Qm(t):t.Va.set("Unknown")):(await t.ma.stop(),DT(t))})),t.ma}function ws(t){return t.fa||(t.fa=function(n,r,s){const i=se(n);return i.sa(),new gD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bD.bind(null,t),t_:ND.bind(null,t),ta:PD.bind(null,t),na:CD.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await xd(t)):(await t.fa.stop(),t.Ta.length>0&&(H(si,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Jm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Jm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(t,e){if(xr("AsyncQueue",`${e}: ${t}`),bo(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class eo{static emptySet(e){return new eo(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ga(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class b_{constructor(){this.ga=new Fe(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class vo{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new vo(e,n,eo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class DD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class OD{constructor(){this.queries=P_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=se(n),i=s.queries;s.queries=P_(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function P_(){return new pi(t=>nT(t),md)}async function VT(t,e){const n=se(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new DD,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Xm(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Zm(n)}async function MT(t,e){const n=se(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jD(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Zm(n)}function LD(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Zm(t){t.Ca.forEach(e=>{e.next()})}var fp,C_;(C_=fp||(fp={})).Ma="default",C_.Cache="cache";class FT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==fp.Cache}}/**
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
 */class UT{constructor(e){this.key=e}}class BT{constructor(e){this.key=e}}class VD{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=he(),this.mutatedKeys=he(),this.eu=rT(e),this.tu=new eo(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new b_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),A=gd(this.query,m)?m:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let j=!1;g&&A?g.data.isEqual(A.data)?P!==N&&(r.track({type:3,doc:A}),j=!0):this.su(g,A)||(r.track({type:2,doc:A}),j=!0,(c&&this.eu(A,c)>0||u&&this.eu(A,u)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),j=!0):g&&!A&&(r.track({type:1,doc:g}),j=!0,(c||u)&&(l=!0)),j&&(A?(o=o.add(A),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(A,P){const N=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:j})}};return N(A)-N(P)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new vo(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new b_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new BT(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new UT(r))}),n}cu(e){this.Za=e.ks,this.Ya=he();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const eg="SyncEngine";class MD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FD{constructor(e){this.key=e,this.hu=!1}}class UD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new pi(l=>nT(l),md),this.Eu=new Map,this.Iu=new Set,this.Ru=new Fe(Q.comparator),this.Au=new Map,this.Vu=new $m,this.du={},this.mu=new Map,this.fu=yo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BD(t,e,n=!0){const r=KT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await zT(r,e,n,!0),s}async function zD(t,e){const n=KT(t);await zT(n,e,!0,!1)}async function zT(t,e,n,r){const s=await aD(t.localStore,Xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $D(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&NT(t.remoteStore,s),l}async function $D(t,e,n,r,s){t.pu=(m,g,A)=>async function(N,j,T,_){let S=j.view.ru(T);S.bs&&(S=await x_(N.localStore,j.query,!1).then(({documents:w})=>j.view.ru(w,S)));const L=_&&_.targetChanges.get(j.targetId),U=_&&_.targetMismatches.get(j.targetId)!=null,z=j.view.applyChanges(S,N.isPrimaryClient,L,U);return R_(N,j.targetId,z.au),z.snapshot}(t,m,g,A);const i=await x_(t.localStore,e,!0),o=new VD(e,i.ks),l=o.ru(i.documents),c=Il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);R_(t,n,u.au);const f=new MD(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function WD(t,e,n){const r=se(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!md(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await dp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Km(r.remoteStore,s.targetId),pp(r,s.targetId)}).catch(Ao)):(pp(r,s.targetId),await dp(r.localStore,s.targetId,!0))}async function HD(t,e){const n=se(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Km(n.remoteStore,r.targetId))}async function qD(t,e,n){const r=ZD(t);try{const s=await function(o,l){const c=se(o),u=Ne.now(),f=l.reduce((A,P)=>A.add(P.key),he());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Tr(),N=he();return c.xs.getEntries(A,f).next(j=>{P=j,P.forEach((T,_)=>{_.isValidDocument()||(N=N.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,P)).next(j=>{m=j;const T=[];for(const _ of l){const S=o2(_,m.get(_.key).overlayedDocument);S!=null&&T.push(new As(_.key,S,Qx(S.value.mapValue),wn.exists(!0)))}return c.mutationQueue.addMutationBatch(A,u,T,l)}).next(j=>{g=j;const T=j.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(A,j.batchId,T)})}).then(()=>({batchId:g.batchId,changes:iT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Fe(de)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await kl(r,s.changes),await xd(r.remoteStore)}catch(s){const i=Xm(s,"Failed to persist write");n.reject(i)}}async function $T(t,e){const n=se(t);try{const r=await sD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ve(o.hu,14607):s.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await kl(n,r,e)}catch(r){await Ao(r)}}function N_(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=se(o);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(u=!0)}),u&&Zm(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KD(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Fe(Q.comparator);o=o.insert(i,Pt.newNoDocument(i,re.min()));const l=he().add(i),c=new _d(re.min(),new Map,new Fe(de),o,l);await $T(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),tg(r)}else await dp(r.localStore,e,!1).then(()=>pp(r,e,n)).catch(Ao)}async function GD(t,e){const n=se(t),r=e.batch.batchId;try{const s=await rD(n.localStore,e);HT(n,r,null),WT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kl(n,s)}catch(s){await Ao(s)}}async function QD(t,e,n){const r=se(t);try{const s=await function(o,l){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(ve(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);HT(r,e,n),WT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kl(r,s)}catch(s){await Ao(s)}}function WT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function HT(t,e,n){const r=se(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function pp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||qT(t,r)})}function qT(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Km(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),tg(t))}function R_(t,e,n){for(const r of n)r instanceof UT?(t.Vu.addReference(r.key,e),YD(t,r)):r instanceof BT?(H(eg,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||qT(t,r.key)):ee(19791,{wu:r})}function YD(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(H(eg,"New document in limbo: "+n),t.Iu.add(r),tg(t))}function tg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Q(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new FD(n)),t.Ru=t.Ru.insert(n,r),NT(t.remoteStore,new Jr(Xn(Vm(n.path)),r,"TargetPurposeLimboResolution",dd.ce))}}async function kl(t,e,n){const r=se(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Hm.Is(c.targetId,u);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const f=se(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(u,g=>M.forEach(g.Ts,A=>f.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>M.forEach(g.Es,A=>f.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!bo(m))throw m;H(qm,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const A=f.vs.get(g),P=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(g,N)}}}(r.localStore,i))}async function JD(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){H(eg,"User change. New user:",e.toKey());const r=await AT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new K(F.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kl(n,r.Ns)}}function XD(t,e){const n=se(t),r=n.Au.get(e);if(r&&r.hu)return he().add(r.key);{let s=he();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function KT(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$T.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KD.bind(null,e),e.Pu.H_=jD.bind(null,e.eventManager),e.Pu.yu=LD.bind(null,e.eventManager),e}function ZD(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QD.bind(null,e),e}class Ru{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return nD(this.persistence,new Z2,e.initialUser,this.serializer)}Cu(e){return new kT(Wm.Vi,this.serializer)}Du(e){return new cD}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ru.provider={build:()=>new Ru};class eO extends Ru{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof Cu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new M2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new kT(r=>Cu.Vi(r,n),this.serializer)}}class mp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>N_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JD.bind(null,this.syncEngine),await RD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OD}()}createDatastore(e){const n=wd(e.databaseInfo.databaseId),r=pD(e.databaseInfo);return _D(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ED(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>N_(this.syncEngine,n,0),function(){return S_.v()?new S_:new uD}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const m=new UD(s,i,o,l,c,u);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=se(s);H(si,"RemoteStore shutting down."),i.Ia.add(5),await Sl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}mp.provider={build:()=>new mp};/**
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
 */class GT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Es="FirestoreClient";class tO{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=Cm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Es,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Es,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ch(t,e){t.asyncQueue.verifyOperationInProgress(),H(Es,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await AT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function D_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nO(t);H(Es,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>A_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>A_(e.remoteStore,s)),t._onlineComponents=e}async function nO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Es,"Using user provided OfflineComponentProvider");try{await Ch(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Ch(t,new Ru)}}else H(Es,"Using default OfflineComponentProvider"),await Ch(t,new eO(void 0));return t._offlineComponents}async function QT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Es,"Using user provided OnlineComponentProvider"),await D_(t,t._uninitializedComponentsProvider._online)):(H(Es,"Using default OnlineComponentProvider"),await D_(t,new mp))),t._onlineComponents}function rO(t){return QT(t).then(e=>e.syncEngine)}async function YT(t){const e=await QT(t),n=e.eventManager;return n.onListen=BD.bind(null,e.syncEngine),n.onUnlisten=WD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HD.bind(null,e.syncEngine),n}function sO(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new GT({next:g=>{f.Nu(),o.enqueueAndForget(()=>MT(i,m));const A=g.docs.has(l);!A&&g.fromCache?u.reject(new K(F.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&c&&c.source==="server"?u.reject(new K(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new FT(Vm(l.path),f,{includeMetadataChanges:!0,qa:!0});return VT(i,m)}(await YT(t),t.asyncQueue,e,n,r)),r.promise}function iO(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new GT({next:g=>{f.Nu(),o.enqueueAndForget(()=>MT(i,m)),g.fromCache&&c.source==="server"?u.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new FT(l,f,{includeMetadataChanges:!0,qa:!0});return VT(i,m)}(await YT(t),t.asyncQueue,e,n,r)),r.promise}function oO(t,e){const n=new mr;return t.asyncQueue.enqueueAndForget(async()=>qD(await rO(t),e,n)),n.promise}/**
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
 */function JT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const aO="ComponentProvider",O_=new Map;function lO(t,e,n,r,s){return new A1(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,JT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const XT="firestore.googleapis.com",j_=!0;class L_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=XT,this.ssl=j_}else this.host=e.host,this.ssl=e.ssl??j_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ST;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<L2)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}g1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Td{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new o1;switch(r.type){case"firstParty":return new u1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=O_.get(n);r&&(H(aO,"Removing Datastore"),O_.delete(n),r.terminate())}(this),Promise.resolve()}}function cO(t,e,n,r={}){var u;t=Vn(t,Td);const s=di(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&_m(`https://${l}`),i.host!==XT&&i.host!==l&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!ms(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=At.MOCK_USER;else{f=W0(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new At(g)}t._authCredentials=new a1(new Vx(f,m))}}/**
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
 */class Id{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Id(this.firestore,e,this._query)}}class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xl(n,et._jsonSchema))return new et(e,r||null,new Q(Ce.fromString(n.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:Ze("string",et._jsonSchemaVersion),referencePath:Ze("string")};class ds extends Id{constructor(e,n,r){super(e,n,Vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new Q(e))}withConverter(e){return new ds(this.firestore,e,this._path)}}function Xr(t,e,...n){if(t=Se(t),Mx("collection","path",e),t instanceof Td){const r=Ce.fromString(e,...n);return Yv(r),new ds(t,null,r)}{if(!(t instanceof et||t instanceof ds))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Yv(r),new ds(t.firestore,null,r)}}function st(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Cm.newId()),Mx("doc","path",e),t instanceof Td){const r=Ce.fromString(e,...n);return Qv(r),new et(t,null,new Q(r))}{if(!(t instanceof et||t instanceof ds))throw new K(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Qv(r),new et(t.firestore,t instanceof ds?t.converter:null,new Q(r))}}/**
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
 */const V_="AsyncQueue";class M_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new PT(this,"async_queue_retry"),this._c=()=>{const r=Ph();r&&H(V_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ph();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new mr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bo(e))throw e;H(V_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",F_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Jm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:F_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function F_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gi extends Td{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new M_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new M_(e),this._firestoreClient=void 0,await e}}}function uO(t,e){const n=typeof t=="object"?t:vl(),r=typeof t=="string"?t:Iu,s=kr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=B0("firestore");i&&cO(s,...i)}return s}function ng(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dO(t),t._firestoreClient}function dO(t){var r,s,i,o;const e=t._freezeSettings(),n=lO(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tO(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(xt.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:Ze("string",yn._jsonSchemaVersion),bytes:Ze("string")};/**
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
 */class rg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sd{constructor(e){this._methodName=e}}/**
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
 */class er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(xl(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:Ze("string",er._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new K(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:Ze("string",On._jsonSchemaVersion),vectorValues:Ze("object")};/**
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
 */const hO=/^__.*__$/;class fO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}class ZT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new As(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:t})}}class sg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new sg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Du(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(eI(this.dataSource)&&hO.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class pO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wd(e)}A(e,n,r,s=!1){return new sg({dataSource:e,methodName:n,targetDoc:r,path:_t.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ig(t){const e=t._freezeSettings(),n=wd(t._databaseId);return new pO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tI(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);ag("Data must be an object, but it was:",o,r);const l=nI(r,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=cl(e,m,n);if(!o.contains(g))throw new K(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);iI(f,g)||f.push(g)}c=new rn(f),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new fO(new Ht(l),c,u)}class kd extends Sd{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kd}}class og extends Sd{_toFieldTransform(e){return new n2(e.path,new ol)}isEqual(e){return e instanceof og}}function mO(t,e,n,r){const s=t.A(1,e,n);ag("Data must be an object, but it was:",s,r);const i=[],o=Ht.empty();ks(r,(c,u)=>{const f=sI(e,c,n);u=Se(u);const m=s.fc(f);if(u instanceof kd)i.push(f);else{const g=Ad(u,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new rn(i);return new ZT(o,l,s.fieldTransforms)}function gO(t,e,n,r,s,i){const o=t.A(1,e,n),l=[cl(e,r,n)],c=[s];if(i.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(cl(e,i[g])),c.push(i[g+1]);const u=[],f=Ht.empty();for(let g=l.length-1;g>=0;--g)if(!iI(u,l[g])){const A=l[g];let P=c[g];P=Se(P);const N=o.fc(A);if(P instanceof kd)u.push(A);else{const j=Ad(P,N);j!=null&&(u.push(A),f.set(A,j))}}const m=new rn(u);return new ZT(f,m,o.fieldTransforms)}function Ad(t,e){if(rI(t=Se(t)))return ag("Unsupported field value:",e,t),nI(t,e);if(t instanceof Sd)return function(r,s){if(!eI(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ad(l,s.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Z1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:Pu(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pu(s.serializer,i)}}if(r instanceof er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:yT(s.serializer,r._byteString)};if(r instanceof et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof On)return function(o,l){const c=o instanceof On?o.toArray():o;return{mapValue:{fields:{[Kx]:{stringValue:Gx},[Su]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return Mm(l.serializer,f)})}}}}}}(r,s);if(IT(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Nm(r)}`)}(t,e)}function nI(t,e){const n={};return Bx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,s)=>{const i=Ad(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof er||t instanceof yn||t instanceof et||t instanceof Sd||t instanceof On||IT(t))}function ag(t,e,n){if(!rI(n)||!Fx(n)){const r=Nm(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function cl(t,e,n){if((e=Se(e))instanceof rg)return e._internalPath;if(typeof e=="string")return sI(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const yO=new RegExp("[~\\*/\\[\\]]");function sI(t,e,n){if(e.search(yO)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rg(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new K(F.INVALID_ARGUMENT,l+t+c)}function iI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vO{convertValue(e,n="none"){switch(_s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Su].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new On(n)}convertGeoPoint(e){return new er(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const n=ys(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ve(TT(r),9688,{name:e});const s=new sl(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||xr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class oI extends vO{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function ir(){return new og("serverTimestamp")}const U_="@firebase/firestore",B_="4.13.0";/**
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
 */class aI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _O(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(cl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _O extends aI{data(){return super.data()}}/**
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
 */function wO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function lI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gs extends aI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gs._jsonSchema={type:Ze("string",Gs._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class Bc extends Gs{data(e={}){return super.data(e)}}class to{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new va(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bc(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Bc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new va(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Bc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new va(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:EO(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=to._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
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
 */to._jsonSchemaVersion="firestore/querySnapshot/1.0",to._jsonSchema={type:Ze("string",to._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};/**
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
 */function hs(t){t=Vn(t,et);const e=Vn(t.firestore,gi),n=ng(e);return sO(n,t._key).then(r=>xO(e,t,r))}function Da(t){t=Vn(t,Id);const e=Vn(t.firestore,gi),n=ng(e),r=new oI(e);return wO(t._query),iO(n,t._query).then(s=>new to(e,r,t,s))}function fc(t,e,n){t=Vn(t,et);const r=Vn(t.firestore,gi),s=lI(t.converter,e,n),i=ig(r);return bd(r,[tI(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,wn.none())])}function Nh(t,e,n,...r){t=Vn(t,et);const s=Vn(t.firestore,gi),i=ig(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof rg?gO(i,"updateDoc",t._key,e,n,r):mO(i,"updateDoc",t._key,e),bd(s,[o.toMutation(t._key,wn.exists(!0))])}function Rh(t){return bd(Vn(t.firestore,gi),[new Fm(t._key,wn.none())])}function cI(t,e){const n=Vn(t.firestore,gi),r=st(t),s=lI(t.converter,e),i=ig(t.firestore);return bd(n,[tI(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function bd(t,e){const n=ng(t);return oO(n,e)}function xO(t,e,n){const r=n.docs.get(e._key),s=new oI(t);return new Gs(t,s,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){i1(hi),cn(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new gi(new l1(r.getProvider("auth-internal")),new d1(o,r.getProvider("app-check-internal")),b1(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ct(U_,B_,e),Ct(U_,B_,"esm2020")})();/**
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
 */const uI="firebasestorage.googleapis.com",dI="storageBucket",TO=2*60*1e3,IO=10*60*1e3;/**
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
 */class We extends Tn{constructor(e,n,r=0){super(Dh(e),`Firebase Storage: ${n} (${Dh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function Dh(t){return"storage/"+t}function lg(){const t="An unknown error occurred, please check the error payload for server response.";return new We($e.UNKNOWN,t)}function SO(t){return new We($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function kO(t){return new We($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We($e.UNAUTHENTICATED,t)}function bO(){return new We($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PO(t){return new We($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CO(){return new We($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NO(){return new We($e.CANCELED,"User canceled the upload/download.")}function RO(t){return new We($e.INVALID_URL,"Invalid URL '"+t+"'.")}function DO(t){return new We($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function OO(){return new We($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dI+"' property when initializing the app?")}function jO(){return new We($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LO(){return new We($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VO(t){return new We($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gp(t){return new We($e.INVALID_ARGUMENT,t)}function hI(){return new We($e.APP_DELETED,"The Firebase app was deleted.")}function MO(t){return new We($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oa(t,e){return new We($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function la(t){throw new We($e.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=sn.makeFromUrl(e,n)}catch{return new sn(e,"")}if(r.path==="")return r;throw DO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},N=n===uI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,j="([^?#]*)",T=new RegExp(`^https?://${N}/${s}/${j}`,"i"),S=[{regex:l,indices:c,postModify:i},{regex:A,indices:P,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<S.length;L++){const U=S[L],z=U.regex.exec(e);if(z){const w=z[U.indices.bucket];let v=z[U.indices.path];v||(v=""),r=new sn(w,v),U.postModify(r);break}}if(r==null)throw RO(e);return r}}class FO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function UO(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...j){u||(u=!0,e.apply(null,j))}function m(j){s=setTimeout(()=>{s=null,t(A,c())},j)}function g(){i&&clearTimeout(i)}function A(j,...T){if(u){g();return}if(j){g(),f.call(null,j,...T);return}if(c()||o){g(),f.call(null,j,...T);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,m(S)}let P=!1;function N(j){P||(P=!0,g(),!u&&(s!==null?(j||(l=2),clearTimeout(s),m(0)):j||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function BO(t){t(!1)}/**
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
 */function zO(t){return t!==void 0}function $O(t){return typeof t=="object"&&!Array.isArray(t)}function cg(t){return typeof t=="string"||t instanceof String}function z_(t){return ug()&&t instanceof Blob}function ug(){return typeof Blob<"u"}function $_(t,e,n,r){if(r<e)throw gp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw gp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function dg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function fI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Qs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qs||(Qs={}));/**
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
 */function WO(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class HO{constructor(e,n,r,s,i,o,l,c,u,f,m,g=!0,A=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new pc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Qs.NO_ERROR,c=i.getStatus();if(!l||WO(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Qs.ABORT;r(!1,new pc(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new pc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());zO(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=lg();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?hI():NO();o(c)}else{const c=CO();o(c)}};this.canceled_?n(!1,new pc(!1,null,!0)):this.backoffId_=UO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function qO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YO(t,e,n,r,s,i,o=!0,l=!1){const c=fI(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return GO(f,e),qO(f,n),KO(f,i),QO(f,r),new HO(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function JO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XO(...t){const e=JO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ug())return new Blob(t);throw new We($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ej(t){if(typeof atob>"u")throw VO("base-64");return atob(t)}/**
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
 */const Kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oh{constructor(e,n){this.data=e,this.contentType=n||null}}function tj(t,e){switch(t){case Kn.RAW:return new Oh(pI(e));case Kn.BASE64:case Kn.BASE64URL:return new Oh(mI(t,e));case Kn.DATA_URL:return new Oh(rj(e),sj(e))}throw lg()}function pI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nj(t){let e;try{e=decodeURIComponent(t)}catch{throw Oa(Kn.DATA_URL,"Malformed data URL.")}return pI(e)}function mI(t,e){switch(t){case Kn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Oa(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Kn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Oa(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ej(e)}catch(s){throw s.message.includes("polyfill")?s:Oa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class gI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oa(Kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ij(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rj(t){const e=new gI(t);return e.base64?mI(Kn.BASE64,e.rest):nj(e.rest)}function sj(t){return new gI(t).contentType}function ij(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class qr{constructor(e,n){let r=0,s="";z_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(z_(this.data_)){const r=this.data_,s=ZO(r,e,n);return s===null?null:new qr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qr(r,!0)}}static getBlob(...e){if(ug()){const n=e.map(r=>r instanceof qr?r.data_:r);return new qr(XO.apply(null,n))}else{const n=e.map(o=>cg(o)?tj(Kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new qr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function yI(t){let e;try{e=JSON.parse(t)}catch{return null}return $O(e)?e:null}/**
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
 */function oj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function vI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function lj(t,e){return e}class Dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||lj}}let mc=null;function cj(t){return!cg(t)||t.length<2?t:vI(t)}function _I(){if(mc)return mc;const t=[];t.push(new Dt("bucket")),t.push(new Dt("generation")),t.push(new Dt("metageneration")),t.push(new Dt("name","fullPath",!0));function e(i,o){return cj(o)}const n=new Dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Dt("size");return s.xform=r,t.push(s),t.push(new Dt("timeCreated")),t.push(new Dt("updated")),t.push(new Dt("md5Hash",null,!0)),t.push(new Dt("cacheControl",null,!0)),t.push(new Dt("contentDisposition",null,!0)),t.push(new Dt("contentEncoding",null,!0)),t.push(new Dt("contentLanguage",null,!0)),t.push(new Dt("contentType",null,!0)),t.push(new Dt("metadata","customMetadata",!0)),mc=t,mc}function uj(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new sn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function dj(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return uj(r,t),r}function wI(t,e,n){const r=yI(e);return r===null?null:dj(t,r,n)}function hj(t,e,n,r){const s=yI(e);if(s===null||!cg(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),A=dg(g,n,r),P=fI({alt:"media",token:u});return A+P})[0]}function fj(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class EI{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xI(t){if(!t)throw lg()}function pj(t,e){function n(r,s){const i=wI(t,s,e);return xI(i!==null),i}return n}function mj(t,e){function n(r,s){const i=wI(t,s,e);return xI(i!==null),hj(i,s,t.host,t._protocol)}return n}function TI(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=bO():s=AO():n.getStatus()===402?s=kO(t.bucket):n.getStatus()===403?s=PO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function gj(t){const e=TI(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=SO(t.path)),i.serverResponse=s.serverResponse,i}return n}function yj(t,e,n){const r=e.fullServerUrl(),s=dg(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new EI(s,i,mj(t,n),o);return l.errorHandler=gj(e),l}function vj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _j(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vj(null,e)),r}function wj(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let L=0;L<2;L++)S=S+Math.random().toString().slice(2);return S}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=_j(e,r,s),f=fj(u,n),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",A=qr.getBlob(m,r,g);if(A===null)throw jO();const P={name:u.fullPath},N=dg(i,t.host,t._protocol),j="POST",T=t.maxUploadRetryTime,_=new EI(N,j,pj(t,n),T);return _.urlParams=P,_.headers=o,_.body=A.uploadData(),_.errorHandler=TI(e),_}class Ej{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw la("cannot .send() more than once");if(di(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw la("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw la("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw la("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw la("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xj extends Ej{initXhr(){this.xhr_.responseType="text"}}function II(){return new xj}/**
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
 */class ii{constructor(e,n){this._service=e,n instanceof sn?this._location=n:this._location=sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ii(e,n)}get root(){const e=new sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vI(this._location.path)}get storage(){return this._service}get parent(){const e=oj(this._location.path);if(e===null)return null;const n=new sn(this._location.bucket,e);return new ii(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw MO(e)}}function Tj(t,e,n){t._throwIfRoot("uploadBytes");const r=wj(t.storage,t._location,_I(),new qr(e,!0),n);return t.storage.makeRequestWithTokens(r,II).then(s=>({metadata:s,ref:t}))}function Ij(t){t._throwIfRoot("getDownloadURL");const e=yj(t.storage,t._location,_I());return t.storage.makeRequestWithTokens(e,II).then(n=>{if(n===null)throw LO();return n})}function Sj(t,e){const n=aj(t._location.path,e),r=new sn(t._location.bucket,n);return new ii(t.storage,r)}/**
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
 */function kj(t){return/^[A-Za-z]+:\/\//.test(t)}function Aj(t,e){return new ii(t,e)}function SI(t,e){if(t instanceof hg){const n=t;if(n._bucket==null)throw OO();const r=new ii(n,n._bucket);return e!=null?SI(r,e):r}else return e!==void 0?Sj(t,e):t}function bj(t,e){if(e&&kj(e)){if(t instanceof hg)return Aj(t,e);throw gp("To use ref(service, url), the first argument must be a Storage instance.")}else return SI(t,e)}function W_(t,e){const n=e==null?void 0:e[dI];return n==null?null:sn.makeFromBucketSpec(n,t)}function Pj(t,e,n,r={}){t.host=`${e}:${n}`;const s=di(e);s&&_m(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:W0(i,t.app.options.projectId))}class hg{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=uI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TO,this._maxUploadRetryTime=IO,this._requests=new Set,s!=null?this._bucket=sn.makeFromBucketSpec(s,this._host):this._bucket=W_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=sn.makeFromBucketSpec(this._url,e):this._bucket=W_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ii(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new FO(hI());{const o=YO(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const H_="@firebase/storage",q_="0.14.2";/**
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
 */const kI="storage";function Cj(t,e,n){return t=Se(t),Tj(t,e,n)}function Nj(t){return t=Se(t),Ij(t)}function Rj(t,e){return t=Se(t),bj(t,e)}function Dj(t=vl(),e){t=Se(t);const r=kr(t,kI).getImmediate({identifier:e}),s=B0("storage");return s&&Oj(r,...s),r}function Oj(t,e,n,r={}){Pj(t,e,n,r)}function jj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new hg(n,r,s,e,hi)}function Lj(){cn(new Yt(kI,jj,"PUBLIC").setMultipleInstances(!0)),Ct(H_,q_,""),Ct(H_,q_,"esm2020")}Lj();const AI="@firebase/installations",fg="0.6.21";/**
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
 */const bI=1e4,PI=`w:${fg}`,CI="FIS_v2",Vj="https://firebaseinstallations.googleapis.com/v1",Mj=60*60*1e3,Fj="installations",Uj="Installations";/**
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
 */const Bj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},oi=new Ss(Fj,Uj,Bj);function NI(t){return t instanceof Tn&&t.code.includes("request-failed")}/**
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
 */function RI({projectId:t}){return`${Vj}/projects/${t}/installations`}function DI(t){return{token:t.token,requestStatus:2,expiresIn:$j(t.expiresIn),creationTime:Date.now()}}async function OI(t,e){const r=(await e.json()).error;return oi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zj(t,{refreshToken:e}){const n=jI(t);return n.append("Authorization",Wj(e)),n}async function LI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $j(t){return Number(t.replace("s","000"))}function Wj(t){return`${CI} ${t}`}/**
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
 */async function Hj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=RI(t),s=jI(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:CI,appId:t.appId,sdkVersion:PI},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await LI(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:DI(u.authToken)}}else throw await OI("Create Installation",c)}/**
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
 */function VI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function qj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kj=/^[cdef][\w-]{21}$/,yp="";function Gj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Qj(t);return Kj.test(n)?n:yp}catch{return yp}}function Qj(t){return qj(t).substr(0,22)}/**
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
 */function Pd(t){return`${t.appName}!${t.appId}`}/**
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
 */const MI=new Map;function FI(t,e){const n=Pd(t);UI(n,e),Yj(n,e)}function UI(t,e){const n=MI.get(t);if(n)for(const r of n)r(e)}function Yj(t,e){const n=Jj();n&&n.postMessage({key:t,fid:e}),Xj()}let Ws=null;function Jj(){return!Ws&&"BroadcastChannel"in self&&(Ws=new BroadcastChannel("[Firebase] FID Change"),Ws.onmessage=t=>{UI(t.data.key,t.data.fid)}),Ws}function Xj(){MI.size===0&&Ws&&(Ws.close(),Ws=null)}/**
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
 */const Zj="firebase-installations-database",eL=1,ai="firebase-installations-store";let jh=null;function pg(){return jh||(jh=od(Zj,eL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ai)}}})),jh}async function Ou(t,e){const n=Pd(t),s=(await pg()).transaction(ai,"readwrite"),i=s.objectStore(ai),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&FI(t,e.fid),e}async function BI(t){const e=Pd(t),r=(await pg()).transaction(ai,"readwrite");await r.objectStore(ai).delete(e),await r.done}async function Cd(t,e){const n=Pd(t),s=(await pg()).transaction(ai,"readwrite"),i=s.objectStore(ai),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&FI(t,l.fid),l}/**
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
 */async function mg(t){let e;const n=await Cd(t.appConfig,r=>{const s=tL(r),i=nL(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===yp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tL(t){const e=t||{fid:Gj(),registrationStatus:0};return zI(e)}function nL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(oi.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sL(t)}:{installationEntry:e}}async function rL(t,e){try{const n=await Hj(t,e);return Ou(t.appConfig,n)}catch(n){throw NI(n)&&n.customData.serverCode===409?await BI(t.appConfig):await Ou(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sL(t){let e=await K_(t.appConfig);for(;e.registrationStatus===1;)await VI(100),e=await K_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mg(t);return r||n}return e}function K_(t){return Cd(t,e=>{if(!e)throw oi.create("installation-not-found");return zI(e)})}function zI(t){return iL(t)?{fid:t.fid,registrationStatus:0}:t}function iL(t){return t.registrationStatus===1&&t.registrationTime+bI<Date.now()}/**
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
 */async function oL({appConfig:t,heartbeatServiceProvider:e},n){const r=aL(t,n),s=zj(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:PI,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await LI(()=>fetch(r,l));if(c.ok){const u=await c.json();return DI(u)}else throw await OI("Generate Auth Token",c)}function aL(t,{fid:e}){return`${RI(t)}/${e}/authTokens:generate`}/**
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
 */async function gg(t,e=!1){let n;const r=await Cd(t.appConfig,i=>{if(!$I(i))throw oi.create("not-registered");const o=i.authToken;if(!e&&uL(o))return i;if(o.requestStatus===1)return n=lL(t,e),i;{if(!navigator.onLine)throw oi.create("app-offline");const l=hL(i);return n=cL(t,l),l}});return n?await n:r.authToken}async function lL(t,e){let n=await G_(t.appConfig);for(;n.authToken.requestStatus===1;)await VI(100),n=await G_(t.appConfig);const r=n.authToken;return r.requestStatus===0?gg(t,e):r}function G_(t){return Cd(t,e=>{if(!$I(e))throw oi.create("not-registered");const n=e.authToken;return fL(n)?{...e,authToken:{requestStatus:0}}:e})}async function cL(t,e){try{const n=await oL(t,e),r={...e,authToken:n};return await Ou(t.appConfig,r),n}catch(n){if(NI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await BI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ou(t.appConfig,r)}throw n}}function $I(t){return t!==void 0&&t.registrationStatus===2}function uL(t){return t.requestStatus===2&&!dL(t)}function dL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Mj}function hL(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function fL(t){return t.requestStatus===1&&t.requestTime+bI<Date.now()}/**
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
 */async function pL(t){const e=t,{installationEntry:n,registrationPromise:r}=await mg(e);return r?r.catch(console.error):gg(e).catch(console.error),n.fid}/**
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
 */async function mL(t,e=!1){const n=t;return await gL(n),(await gg(n,e)).token}async function gL(t){const{registrationPromise:e}=await mg(t);e&&await e}/**
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
 */function yL(t){if(!t||!t.options)throw Lh("App Configuration");if(!t.name)throw Lh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Lh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Lh(t){return oi.create("missing-app-config-values",{valueName:t})}/**
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
 */const WI="installations",vL="installations-internal",_L=t=>{const e=t.getProvider("app").getImmediate(),n=yL(e),r=kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wL=t=>{const e=t.getProvider("app").getImmediate(),n=kr(e,WI).getImmediate();return{getId:()=>pL(n),getToken:s=>mL(n,s)}};function EL(){cn(new Yt(WI,_L,"PUBLIC")),cn(new Yt(vL,wL,"PRIVATE"))}EL();Ct(AI,fg);Ct(AI,fg,"esm2020");/**
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
 */const ju="analytics",xL="firebase_id",TL="origin",IL=60*1e3,SL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yg="https://www.googletagmanager.com/gtag/js";/**
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
 */const Lt=new id("@firebase/analytics");/**
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
 */const kL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},an=new Ss("analytics","Analytics",kL);/**
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
 */function AL(t){if(!t.startsWith(yg)){const e=an.create("invalid-gtag-resource",{gtagURL:t});return Lt.warn(e.message),""}return t}function HI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function PL(t,e){const n=bL("firebase-js-sdk-policy",{createScriptURL:AL}),r=document.createElement("script"),s=`${yg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function CL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function NL(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await HI(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){Lt.error(l)}t("config",s,i)}async function RL(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await HI(n);for(const c of o){const u=l.find(m=>m.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Lt.error(i)}}function DL(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await RL(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await NL(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Lt.error(l)}}return s}function OL(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=DL(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function jL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yg)&&n.src.includes(t))return n;return null}/**
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
 */const LL=30,VL=1e3;class ML{constructor(e={},n=VL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qI=new ML;function FL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UL(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:FL(n)},s=SL.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const c=await i.json();(o=c.error)!=null&&o.message&&(l=c.error.message)}catch{}throw an.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function BL(t,e=qI,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw an.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw an.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new WL;return setTimeout(async()=>{l.abort()},IL),KI({appId:r,apiKey:s,measurementId:i},o,l,e)}async function KI(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=qI){var l;const{appId:i,measurementId:o}=t;try{await zL(r,e)}catch(c){if(o)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await UL(t);return s.deleteThrottleMetadata(i),c}catch(c){const u=c;if(!$L(u)){if(s.deleteThrottleMetadata(i),o)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw c}const f=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?yv(n,s.intervalMillis,LL):yv(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,m),Lt.debug(`Calling attemptFetch again in ${f} millis`),KI(t,m,r,s)}}function zL(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(an.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $L(t){if(!(t instanceof Tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HL(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function qL(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function KL(){if(rd())try{await sd()}catch(t){return Lt.warn(an.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Lt.warn(an.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GL(t,e,n,r,s,i,o){const l=BL(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Lt.error(g)),e.push(l);const c=KL().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([l,c]);jL(i)||PL(i,u.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[TL]="firebase",m.update=!0,f!=null&&(m[xL]=f),s("config",u.measurementId,m),u.measurementId}/**
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
 */class QL{constructor(e){this.app=e}_delete(){return delete no[this.app.options.appId],Promise.resolve()}}let no={},Q_=[];const Y_={};let Vh="dataLayer",YL="gtag",J_,vg,X_=!1;function JL(){const t=[];if(ym()&&t.push("This is a browser extension environment."),vm()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=an.create("invalid-analytics-context",{errorInfo:e});Lt.warn(n.message)}}function XL(t,e,n){JL();const r=t.options.appId;if(!r)throw an.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw an.create("no-api-key");if(no[r]!=null)throw an.create("already-exists",{id:r});if(!X_){CL(Vh);const{wrappedGtag:i,gtagCore:o}=OL(no,Q_,Y_,Vh,YL);vg=i,J_=o,X_=!0}return no[r]=GL(t,Q_,Y_,e,J_,Vh,n),new QL(t)}function ZL(t=vl()){t=Se(t);const e=kr(t,ju);return e.isInitialized()?e.getImmediate():eV(t)}function eV(t,e={}){const n=kr(t,ju);if(n.isInitialized()){const s=n.getImmediate();if(ms(e,n.getOptions()))return s;throw an.create("already-initialized")}return n.initialize({options:e})}async function tV(){if(ym()||!vm()||!rd())return!1;try{return await sd()}catch{return!1}}function nV(t,e,n){t=Se(t),qL(vg,no[t.app.options.appId],e,n).catch(r=>Lt.error(r))}function rV(t,e,n,r){t=Se(t),HL(vg,no[t.app.options.appId],e,n,r).catch(s=>Lt.error(s))}const Z_="@firebase/analytics",ew="0.10.21";function sV(){cn(new Yt(ju,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return XL(r,s,n)},"PUBLIC")),cn(new Yt("analytics-internal",t,"PRIVATE")),Ct(Z_,ew),Ct(Z_,ew,"esm2020");function t(e){try{const n=e.getProvider(ju).getImmediate();return{logEvent:(r,s,i)=>rV(n,r,s,i),setUserProperties:(r,s)=>nV(n,r,s)}}catch(n){throw an.create("interop-component-reg-failed",{reason:n})}}}sV();const iV={apiKey:"AIzaSyAUjtOS3DdjsRxzZqxCidu3dGm4aOfPY1E",authDomain:"inaare-consulting.firebaseapp.com",projectId:"inaare-consulting",storageBucket:"inaare-consulting.firebasestorage.app",messagingSenderId:"55649247758",appId:"1:55649247758:web:24d97244b7790cd722125f",measurementId:"G-0X1Q8BXJTQ"},Al=K0(iV);typeof window<"u"?tV().then(t=>t?ZL(Al):null):Promise.resolve(null);const Pe=uO(Al),Lu=t1(Al),oV=Dj(Al),GI=R.createContext(null),gc="inaare_admin_auth",aV=({children:t})=>{const[e,n]=R.useState(()=>{const f=localStorage.getItem(gc);return f?JSON.parse(f):null}),[r,s]=R.useState(null),[i,o]=R.useState(!0);R.useEffect(()=>{const f=_x(Lu,m=>{s(m),m||(n(null),localStorage.removeItem(gc)),o(!1)});return()=>f()},[]);const l=f=>{n(f),localStorage.setItem(gc,JSON.stringify(f))},c=async()=>{await WN(Lu),n(null),localStorage.removeItem(gc)},u=R.useMemo(()=>({auth:e,token:e==null?void 0:e.token,user:e==null?void 0:e.user,firebaseUser:r,authLoading:i,isAuthenticated:!!r,login:l,logout:c}),[e,r,i]);return d.jsx(GI.Provider,{value:u,children:t})},_g=()=>{const t=R.useContext(GI);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},lV=({children:t})=>{const{isAuthenticated:e,authLoading:n}=_g();return n?d.jsx("section",{className:"section-shell",children:d.jsx("p",{className:"text-muted",children:"Checking secure session..."})}):e?t:d.jsx(fu,{to:"/admin/login",replace:!0})},xe=({children:t,className:e="",delay:n=0})=>{const r=R.useRef(null),[s,i]=R.useState(!1);return R.useEffect(()=>{const o=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(i(!0),o.disconnect())})},{threshold:.15});return r.current&&o.observe(r.current),()=>o.disconnect()},[]),d.jsx("div",{ref:r,className:`reveal ${s?"reveal-visible":""} ${e}`,style:{transitionDelay:`${n}ms`},children:t})},cV=()=>{const t=[{image:"/7.jpg",label:"LEADERSHIP DEVELOPMENT",title:"Build Confident Teams",desc:"Shape accountable leadership pipelines that sustain performance"},{image:"/10.jpg",label:"GOVERNANCE ADVISORY",title:"Stewardship with Precision",desc:"Strengthen oversight structures that protect enterprise value"},{image:"/12.jpg",label:"STRATEGY EXECUTION",title:"Move Vision to Results",desc:"Translate direction into measurable momentum across the organization"}],[e,n]=R.useState(0);return R.useEffect(()=>{const r=setInterval(()=>{n(s=>(s+1)%t.length)},5e3);return()=>clearInterval(r)},[t.length]),d.jsxs(d.Fragment,{children:[d.jsxs("section",{className:"hero",children:[d.jsx("div",{className:"pointer-events-none absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"}),d.jsx("div",{className:"pointer-events-none absolute -left-[120px] top-[-100px] h-[520px] w-[520px] rounded-full bg-pink-200/55 blur-[140px]"}),d.jsx("div",{className:"pointer-events-none absolute -right-[80px] top-[8%] h-[520px] w-[520px] rounded-full bg-yellow-200/55 blur-[130px]"}),d.jsx("div",{className:"pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d49a00]/70 to-transparent md:inset-x-12"}),d.jsxs("div",{className:"hero-left hero-content",children:[d.jsxs("h1",{className:"max-w-[11ch] font-serif text-[clamp(3.2rem,7.2vw,6rem)] leading-[1.01] text-[#111111]",children:[d.jsx("span",{className:"block whitespace-nowrap opacity-0 animate-[fadeUp_0.8s_ease_forwards]",children:"Rebirthing Lives."}),d.jsx("span",{className:"block opacity-0 animate-[fadeUp_0.8s_ease_0.18s_forwards]",children:"Building"}),d.jsxs("span",{className:"relative mt-1 block opacity-0 animate-[fadeUp_0.8s_ease_0.34s_forwards]",children:[d.jsx("span",{className:"gradient-text block drop-shadow-[0_4px_14px_rgba(212,175,55,0.42)]",children:"Generational"}),d.jsx("span",{className:"gradient-text block drop-shadow-[0_4px_14px_rgba(212,175,55,0.42)]",children:"Greatness"})]})]}),d.jsx("div",{className:"hero-accent"}),d.jsx("p",{className:"mt-8 max-w-xl text-lg leading-relaxed text-[#4f5662] opacity-0 animate-[fadeUp_0.8s_ease_0.5s_forwards] md:text-xl",children:"We reshape leaders, rebuild systems, and restore value, transforming individuals and organizations into scalable, enduring institutions."}),d.jsxs("div",{className:"mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_0.8s_ease_0.64s_forwards] md:flex-nowrap",children:[d.jsx(Ks,{to:"/booking",className:"button-primary whitespace-nowrap rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white",children:"Schedule Consultation"}),d.jsx("a",{href:"#what-we-do",className:"whitespace-nowrap rounded-full border border-[#d49a00]/55 bg-white/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#9a6d00] transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-pink-50 hover:text-[#7f5800]",children:"Explore Services"})]})]}),d.jsx("div",{className:"hero-media",children:d.jsxs("div",{className:"hero-media-inner",children:[d.jsx("div",{className:"hero-carousel group",children:t.map((r,s)=>d.jsxs("div",{className:`slide ${e===s?"active":""}`,children:[d.jsx("img",{src:r.image,alt:r.title,className:"hero-slide-image"}),d.jsxs("div",{className:"hero-card-content",children:[d.jsx("div",{className:"mb-2 text-xs tracking-[0.2em] text-yellow-300",children:r.label}),d.jsx("h3",{className:"mb-2 text-xl font-semibold",children:r.title}),d.jsx("p",{className:"text-sm text-white/80",children:r.desc})]})]},r.image))}),d.jsx("div",{className:"hero-dots carousel-dots mt-4 flex justify-center gap-2",children:t.map((r,s)=>d.jsx("button",{type:"button","aria-label":`Show slide ${s+1}`,onClick:()=>n(s),className:e===s?"active":""},r.image))})]})})]}),d.jsxs("section",{className:"impact-strip",children:[d.jsx(xe,{children:d.jsxs("div",{className:"impact-inner",children:[d.jsx("h2",{className:"impact-title",children:"We don't build strategies."}),d.jsx("h2",{className:"impact-title gradient",children:"We build systems that outlive leadership."})]})}),d.jsx("div",{className:"glow glow-gold"}),d.jsx("div",{className:"glow glow-pink"})]}),d.jsx("section",{id:"what-we-do",className:"bg-white px-6 py-32 md:px-12",children:d.jsxs("div",{className:"mx-auto max-w-5xl",children:[d.jsxs("div",{className:"mb-20",children:[d.jsx("p",{className:"mb-4 text-xs uppercase tracking-[0.25em] text-yellow-600",children:"What We Do"}),d.jsx("h2",{className:"mb-6 font-serif text-4xl md:text-5xl",children:"Strategic Services"}),d.jsx("p",{className:"max-w-xl text-gray-600",children:"We don't offer services. We build systems that create clarity, scale impact, and outlive leadership."}),d.jsx("div",{className:"mt-6 h-[2px] w-20 bg-yellow-500"})]}),d.jsx("div",{className:"divide-y divide-gray-200",children:[{title:"Coaching & Mentorship",desc:"Develop resilient leaders through high-trust coaching that sharpens decision quality and execution."},{title:"Leadership Development",desc:"Build leadership pipelines and systems that sustain performance, accountability, and long-term growth."},{title:"Governance Advisory",desc:"Strengthen boards and leadership teams with governance frameworks that protect value and improve oversight."},{title:"Strategy Design & Execution",desc:"Translate vision into structured priorities, operating models, and measurable enterprise impact."}].map((r,s)=>d.jsxs("div",{className:"group flex flex-col gap-6 py-10 transition-all duration-300 hover:translate-x-2 md:flex-row md:items-center md:justify-between",children:[d.jsxs("div",{className:"flex items-start gap-6",children:[d.jsx("span",{className:"font-serif text-xl text-yellow-500",children:String(s+1).padStart(2,"0")}),d.jsx("h3",{className:"font-serif text-2xl transition group-hover:text-yellow-600",children:r.title})]}),d.jsx("p",{className:"max-w-md text-sm leading-relaxed text-gray-600",children:r.desc})]},s))})]})}),d.jsx("section",{className:"section-shell rhythm-open flow-section pt-0",children:d.jsxs("div",{className:"layout-offset items-start",children:[d.jsx(xe,{children:d.jsxs("div",{children:[d.jsx("p",{className:"section-kicker",children:"Experience"}),d.jsx("h3",{className:"mt-3 max-w-2xl font-serif text-5xl leading-[1.04] text-ivory md:text-6xl",children:"Making people GREAT, WEALTHY & IMPACTFUL across diverse markets."}),d.jsx("p",{className:"mt-5 max-w-xl text-lg text-muted",children:"We turn leadership intent into systems that produce disciplined execution and measurable outcomes."})]})}),d.jsxs("div",{className:"space-y-7 lg:ml-16",children:[d.jsx(xe,{delay:80,children:d.jsxs("div",{className:"open-feature",children:[d.jsx("p",{className:"font-serif text-6xl text-gold",children:"25+"}),d.jsx("p",{className:"mt-2 text-sm uppercase tracking-[0.2em] text-muted",children:"Years Experience"})]})}),d.jsx(xe,{delay:120,children:d.jsxs("div",{className:"open-feature",children:[d.jsx("p",{className:"font-serif text-5xl text-gold",children:"Global Reach"}),d.jsx("p",{className:"mt-3 text-base leading-relaxed text-muted",children:"Working with leaders and organizations across Africa and globally."})]})}),d.jsx(xe,{delay:160,children:d.jsxs("div",{className:"open-feature",children:[d.jsx("p",{className:"font-serif text-5xl text-gold",children:"Systems Thinking"}),d.jsx("p",{className:"mt-3 text-base leading-relaxed text-muted",children:"Integrating governance, leadership, and execution into one resilient operating model."})]})})]})]})}),d.jsx("section",{className:"relative left-1/2 w-screen -translate-x-1/2 bg-[#101010] py-[112px] lg:py-[156px]",children:d.jsx(xe,{children:d.jsx("div",{className:"mx-auto w-full max-w-[1500px] px-8 md:px-16",children:d.jsxs("div",{className:"relative z-10 mx-auto max-w-5xl text-center",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.24em] text-gold",children:"Strategic Anchor"}),d.jsxs("h3",{className:"mt-4 font-serif text-4xl font-semibold leading-tight text-[#f6f1e8] md:text-6xl",children:["Authority is built where ",d.jsx("span",{className:"gold-emphasis",children:"governance"}),", character, and execution converge."]}),d.jsx("p",{className:"mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#d7d3cb] md:text-lg",children:"We help institutions and leaders move from fragmented effort to aligned systems that compound trust, value, and generational progress."}),d.jsx(Ks,{to:"/booking",className:"premium-btn-primary mt-8",children:"Book Strategic Session"})]})})})}),d.jsx("section",{className:"section-shell rhythm-open flow-section pt-0",children:d.jsxs("div",{className:"layout-offset items-start",children:[d.jsx(xe,{children:d.jsxs("div",{className:"gold-ring floating-layer relative mx-auto w-fit self-start overflow-hidden rounded-2xl border border-gold/35 bg-white p-4 shadow-[0_30px_72px_rgba(0,0,0,0.16)] sm:-mt-16 sm:p-5 lg:ml-8",children:[d.jsx("img",{src:"/ekyengo1.jpg",alt:"Inaare Consulting Group founder",className:"mx-auto h-[360px] w-auto object-contain sm:h-[430px] md:h-[520px]"}),d.jsx("div",{className:"pointer-events-none absolute left-5 top-5 h-6 w-24 bg-gradient-to-r from-gold/85 to-gold/10"})]})}),d.jsxs(xe,{delay:120,children:[d.jsx("p",{className:"section-kicker",children:"Founder Highlight"}),d.jsx("h3",{className:"gold-trace mt-3 inline-block font-serif text-6xl font-bold text-ivory md:text-7xl",children:lr.name}),d.jsx("p",{className:"mt-5 max-w-2xl text-lg text-muted",children:lr.summary}),d.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:(lr.certifications||[]).slice(0,4).map(r=>d.jsx("p",{className:"rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.14em] text-gold shadow-[0_8px_18px_rgba(0,0,0,0.06)]",children:r},r))}),d.jsxs("blockquote",{className:"mt-12 border-l-2 border-gold/70 bg-[radial-gradient(circle_at_10%_50%,rgba(247,214,224,0.24),transparent_62%)] pl-6 font-serif text-5xl italic leading-[1.06] text-ivory/95 md:sticky md:top-24",children:["“",lr.quote,"”"]})]})]})}),d.jsx("section",{className:"section-shell rhythm-open flow-section pt-0",children:d.jsxs("div",{className:"wow-panel floating-layer text-center md:text-left",children:[d.jsx("p",{className:"relative z-10 text-xs uppercase tracking-[0.24em] text-gold",children:"Next Step"}),d.jsx("h3",{className:"relative z-10 mt-4 font-serif text-4xl font-bold text-ivory md:text-6xl",children:"Begin Your Transformation Journey"}),d.jsx("p",{className:"relative z-10 mt-5 text-base leading-relaxed text-muted md:max-w-3xl md:text-lg",children:"Enter a focused advisory partnership that restores clarity, aligns leadership, and advances meaningful outcomes with confidence and discretion."}),d.jsx(Ks,{to:"/booking",className:"premium-btn-primary relative z-10 mt-8",children:"Schedule a Strategic Consultation"})]})})]})},uV=()=>{var t;return d.jsx("section",{className:"section-shell flow-section signature-motif",children:d.jsxs("div",{className:"relative grid gap-10 overflow-hidden rounded-3xl bg-[radial-gradient(70%_90%_at_15%_25%,rgba(247,214,224,0.22),transparent_72%),radial-gradient(65%_90%_at_80%_10%,rgba(198,167,94,0.1),transparent_70%)] p-4 md:grid-cols-[1fr_1.15fr] md:p-6",children:[d.jsx("div",{className:"pointer-events-none absolute -top-10 left-4 h-24 w-24 border border-gold/30 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx("div",{className:"pointer-events-none absolute -bottom-10 right-6 h-28 w-28 border border-gold/20 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"}),d.jsx(xe,{className:"self-start overflow-hidden rounded-2xl bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)]",children:d.jsx("div",{className:"gold-ring overflow-hidden rounded-xl bg-white",children:d.jsx("img",{src:"/ekyengo.JPG",alt:`${lr.name} portrait`,className:"h-full min-h-[360px] w-full object-cover object-top"})})}),d.jsxs(xe,{delay:120,children:[d.jsx("h2",{className:"gold-trace inline-block font-serif text-3xl font-bold text-ivory md:text-6xl",children:"Leadership that Builds Legacy"}),d.jsx("p",{className:"text-measure mt-6 text-lg text-muted",children:lr.summary}),d.jsx("div",{className:"mt-7 grid gap-3 sm:grid-cols-2",children:(t=lr.certifications)==null?void 0:t.map(e=>d.jsx("span",{className:"rounded-[14px] bg-white px-4 py-3 text-xs uppercase tracking-[0.15em] text-gold shadow-[0_8px_20px_rgba(0,0,0,0.06)]",children:e},e))}),d.jsx("ul",{className:"mt-8 space-y-3 text-muted",children:lr.highlights.map(e=>d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"mt-2 h-1.5 w-1.5 rounded-full bg-gold"}),d.jsx("span",{children:e})]},e))}),d.jsxs("blockquote",{className:"mt-10 rounded-r-[16px] border-l-2 border-gold/70 bg-[radial-gradient(circle_at_10%_50%,rgba(247,214,224,0.22),transparent_62%)] px-5 py-7 font-serif text-3xl italic leading-tight text-ivory/95 md:sticky md:top-28",children:[d.jsx("span",{className:"mr-1 text-4xl leading-none text-gold/80",children:"“"}),lr.quote,d.jsx("span",{className:"ml-1 text-4xl leading-none text-gold/80",children:"”"})]})]})]})})},Co=({title:t,description:e})=>d.jsx("section",{className:"section-shell rhythm-open page-intro-soft signature-motif pb-8",children:d.jsxs("div",{className:"layout-split items-end",children:[d.jsxs("div",{className:"max-w-4xl",children:[d.jsx("p",{className:"hero-kicker mb-4 text-xs uppercase tracking-[0.3em] text-gold",children:"Inaare Consulting Group"}),d.jsx("h1",{className:"gold-trace inline-block display-title",children:t}),d.jsx("div",{className:"accent-divider mt-6 max-w-[170px]"})]}),d.jsx("p",{className:"text-measure mt-8 text-lg leading-relaxed text-muted lg:mt-0 lg:pl-8",children:e})]})}),yc={home:{headline:"Rebirthing Lives. Building Generational Greatness.",subtext:"We reshape leaders, rebuild systems, and restore value—transforming individuals and organizations into scalable, resilient engines of measurable impact across diverse markets."},about:{description:"We are a leadership and transformation advisory firm committed to restoring value, shaping perspective, and building enduring systems across diverse markets."},services:{description:"Outcome-focused advisory and development services designed to strengthen leadership, institutions, and execution excellence."}},QI=R.createContext(null),dV=({children:t})=>{const[e,n]=R.useState(yc),[r,s]=R.useState(!1),i=async()=>{try{s(!0);const l=await hs(st(Pe,"content","homepage")),c=l.data(),[u,f]=await Promise.all([hs(st(Pe,"content","about")),hs(st(Pe,"content","services"))]);n({home:{...yc.home,...l.exists()?c:{}},about:{...yc.about,...u.exists()?u.data():{}},services:{...yc.services,...f.exists()?f.data():{}}})}catch{}finally{s(!1)}};R.useEffect(()=>{i()},[]);const o=R.useMemo(()=>({content:e,setContent:n,refreshContent:i,loading:r}),[e,r]);return d.jsx(QI.Provider,{value:o,children:t})},YI=()=>{const t=R.useContext(QI);if(!t)throw new Error("useSiteContent must be used within SiteContentProvider");return t},hV=["Trust","Responsibility","Partnerships","Accountability"],fV=()=>{var e;const{content:t}=YI();return d.jsxs(d.Fragment,{children:[d.jsx(Co,{title:"About Inaare Consulting Group",description:((e=t.about)==null?void 0:e.description)||"We are a leadership and transformation advisory firm committed to restoring value, shaping perspective, and building enduring systems across diverse markets."}),d.jsx("section",{className:"section-shell flow-section signature-motif pt-4",children:d.jsxs("div",{className:"layout-offset items-start",children:[d.jsx(xe,{children:d.jsxs("article",{className:"split-visual lg:sticky lg:top-24",children:[d.jsx("p",{className:"section-kicker",children:"Institutional Identity"}),d.jsx("h2",{className:"gold-trace mt-3 inline-block font-serif text-4xl font-bold text-ivory md:text-5xl",children:"Who We Are"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"Inaare Consulting Group equips leaders, families, and organizations to evolve into resilient engines of progress. We combine strategic discipline, governance clarity, and leadership coaching to unlock excellence that compounds over generations."})]})}),d.jsxs("div",{className:"space-y-8",children:[d.jsx(xe,{delay:80,children:d.jsxs("article",{className:"open-feature lg:ml-12",children:[d.jsx("h2",{className:"gold-trace inline-block font-serif text-3xl font-bold text-ivory",children:"Vision"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"To make people GREAT, WEALTHY & IMPACTFUL across diverse markets."})]})}),d.jsx(xe,{delay:120,children:d.jsxs("article",{className:"open-feature lg:mr-10",children:[d.jsx("h2",{className:"gold-trace inline-block font-serif text-3xl font-bold text-ivory",children:"Mission"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"To Rebuild broken Links, Reshape Perspectives and Restore Values and Value Systems to individuals and organizations."})]})}),d.jsx(xe,{delay:160,children:d.jsxs("article",{className:"open-feature lg:ml-14",children:[d.jsx("h2",{className:"gold-trace inline-block font-serif text-3xl font-bold text-ivory",children:"Promise"}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:"To Transcend Generations to Transgenerational Greatness through PARADIGM shift."})]})})]})]})}),d.jsx("section",{className:"section-shell flow-section pt-6",children:d.jsx(xe,{children:d.jsxs("div",{className:"layout-center section-blush",children:[d.jsx("p",{className:"section-kicker",children:"Core Values"}),d.jsx("h2",{className:"gold-trace inline-block font-serif text-3xl font-bold text-ivory",children:"Core Values"}),d.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:hV.map(n=>d.jsx("div",{className:"rounded-xl bg-[radial-gradient(circle_at_top,rgba(247,214,224,0.2),rgba(255,255,255,0.96))] px-4 py-5 text-center text-ivory shadow-[0_10px_24px_rgba(0,0,0,0.05)]",children:n},n))})]})})}),d.jsx(uV,{})]})},pV=()=>{var e;const{content:t}=YI();return d.jsxs(d.Fragment,{children:[d.jsx(Co,{title:"Services",description:((e=t.services)==null?void 0:e.description)||"Outcome-focused advisory and development services designed to strengthen leadership, institutions, and execution excellence."}),d.jsx("section",{className:"section-shell rhythm-open flow-section signature-motif pt-6",children:d.jsxs("div",{className:"layout-split items-start",children:[d.jsx(xe,{children:d.jsxs("div",{className:"split-visual lg:sticky lg:top-24",children:[d.jsx("p",{className:"section-kicker",children:"Strategic Service Lines"}),d.jsx("h2",{className:"gold-trace mt-4 inline-block font-serif text-4xl font-semibold text-ivory md:text-5xl",children:"Advisory services designed for measurable transformation."}),d.jsx("p",{className:"mt-5 text-muted",children:"Each service is intentionally structured to strengthen leadership behavior, governance discipline, and execution quality."})]})}),d.jsx("div",{className:"space-y-8",children:tP.map((n,r)=>d.jsx(xe,{delay:r*70,children:d.jsxs("article",{className:`open-feature ${r%2===0?"lg:mr-10":"lg:ml-10"}`,children:[d.jsxs("p",{className:"section-kicker",children:["Service ",String(r+1).padStart(2,"0")]}),d.jsx("h3",{className:"gold-trace mt-3 inline-block font-serif text-3xl font-semibold text-ivory md:text-4xl",children:n.title}),d.jsx("p",{className:"mt-4 text-lg text-muted",children:n.description})]})},n.title))})]})})]})},mV=()=>d.jsxs(d.Fragment,{children:[d.jsx(Co,{title:"Transformational Programs",description:"Signature programs engineered to reshape character, strengthen families, and expand cross-generational prosperity."}),d.jsxs("section",{className:"section-shell rhythm-open flow-section signature-motif pt-4",children:[d.jsxs("div",{className:"relative pl-10 md:pl-14",children:[d.jsx("div",{className:"timeline-line"}),d.jsx("div",{className:"space-y-10",children:nP.map((t,e)=>d.jsx(xe,{delay:e*100,children:d.jsxs("article",{className:`open-feature relative ml-2 ${e%2===0?"md:ml-4":"md:ml-10"}`,children:[d.jsx("span",{className:"absolute -left-[38px] top-7 h-4 w-4 rounded-full border-2 border-gold bg-ink"}),d.jsxs("p",{className:"text-xs uppercase tracking-[0.18em] text-gold",children:["Program ",e+1]}),d.jsx("h3",{className:"mt-2 font-serif text-3xl font-bold text-ivory md:text-4xl",children:t})]})},t))})]}),d.jsxs("div",{className:"wow-panel mt-12 text-center",children:[d.jsx("p",{className:"section-kicker relative z-10",children:"Program Impact"}),d.jsx("p",{className:"relative z-10 font-serif text-3xl text-ivory md:text-4xl",children:"Advancing cross-generational wealth capability at scale."})]})]})]}),Mh=(t,e)=>({id:t.id||e,title:t.title||"Untitled Publication",description:t.description||(typeof t.content=="string"&&t.content.trim().length>0?`${t.content.trim().slice(0,180)}...`:"Executive insight for leaders building durable character, strategy, and generational value."),category:t.category||"Thought Leadership",content:t.content||"",pdfUrl:t.pdfUrl||"",date:t.date||null,createdAt:t.createdAt||null,updatedAt:t.updatedAt||null}),vp=t=>{var e;return t!=null&&t.date?t.date:t!=null&&t.createdAt&&typeof((e=t.createdAt)==null?void 0:e.toDate)=="function"?t.createdAt.toDate():(t==null?void 0:t.createdAt)||null},gV=t=>[...t].sort((e,n)=>{const r=vp(e),s=vp(n),i=new Date(r||0).getTime()||0;return(new Date(s||0).getTime()||0)-i}),JI=async()=>{try{const t=await Da(Xr(Pe,"publications")),e=[];if(t.forEach(n=>{e.push(Mh(n.data()||{},n.id))}),e.length>0)return gV(e)}catch{}return rP.map((t,e)=>typeof t=="string"?Mh({id:`publication-${e+1}`,title:t,description:"Executive insight for leaders building durable character, strategy, and generational value.",category:"Thought Leadership"}):Mh(t,t.id||`publication-${e+1}`))},yV=()=>{const[t,e]=R.useState([]);return R.useEffect(()=>{(async()=>{const r=await JI();e(r)})()},[]),d.jsxs(d.Fragment,{children:[d.jsx(Co,{title:"Publications",description:"Thought leadership publications shaping governance, character, and enterprise continuity."}),d.jsx("section",{className:"section-shell rhythm-open flow-section signature-motif pt-4",children:d.jsxs("div",{className:"layout-split items-start",children:[d.jsx(xe,{children:d.jsxs("div",{className:"split-visual lg:sticky lg:top-24",children:[d.jsx("p",{className:"section-kicker",children:"Thought Leadership Library"}),d.jsx("h2",{className:"gold-trace mt-4 inline-block font-serif text-4xl font-semibold text-ivory md:text-5xl",children:"Ideas that shape governance, continuity, and strategic resilience."}),d.jsx("p",{className:"mt-5 text-muted",children:"Explore concise executive perspectives built for boardrooms, institutions, and transformation leaders."})]})}),d.jsx("div",{className:"space-y-7",children:t.map((n,r)=>d.jsx(xe,{delay:r*80,children:d.jsx("article",{className:`offset-panel ${r%2===0?"lg:mr-10":"lg:ml-10"} transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.09)]`,children:d.jsxs(Ks,{to:`/publications/${n.id}`,className:"block",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.18em] text-gold",children:n.category}),d.jsx("h3",{className:"gold-trace mt-4 inline-block font-serif text-3xl font-bold text-ivory",children:n.title}),d.jsx("p",{className:"mt-4 leading-relaxed text-muted",children:n.description}),d.jsx("p",{className:"link-underline mt-6 inline-block text-xs uppercase tracking-[0.16em] text-gold/80",children:"Explore Perspective"})]})})},n.id))})]})})]})},vV=t=>{if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})},_V=()=>{const{id:t}=Tb(),[e,n]=R.useState([]),[r,s]=R.useState(!1);R.useEffect(()=>{(async()=>{const u=await JI();n(u),s(!0)})()},[]);const i=R.useMemo(()=>e.find(c=>c.id===t),[e,t]);if(!r)return d.jsx("section",{className:"section-shell pt-8",children:d.jsx("div",{className:"mx-auto h-48 w-full max-w-4xl animate-pulse rounded-[16px] border border-gold/15 bg-charcoal/40"})});if(!i)return d.jsx(fu,{to:"/publications",replace:!0});const o=i.content?i.content.split(/\n\s*\n/).map(c=>c.trim()).filter(Boolean):[],l=vp(i);return d.jsx("section",{className:"section-shell flow-section signature-motif pt-8",children:d.jsxs("div",{className:"mx-auto w-full max-w-5xl",children:[d.jsxs(xe,{children:[d.jsx(Ks,{to:"/publications",className:"inline-flex items-center text-xs uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-ivory",children:"← Back to Publications"}),d.jsxs("header",{className:"section-blush mt-8 pb-8",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:i.category}),d.jsx("h1",{className:"mt-4 display-title max-w-4xl",children:i.title}),d.jsx("div",{className:"accent-divider mt-6 max-w-[220px]"}),l&&d.jsx("p",{className:"mt-4 text-sm uppercase tracking-[0.12em] text-muted",children:vV(l)})]})]}),o.length>0&&d.jsx(xe,{delay:90,children:d.jsx("article",{className:"publication-prose layout-center mt-12 space-y-7 text-xl text-muted",children:o.map(c=>d.jsx("p",{children:c},c))})}),o.length===0&&i.pdfUrl&&d.jsx(xe,{delay:140,children:d.jsxs("section",{className:"offset-panel mt-12 p-4 md:p-6",children:[d.jsx("h2",{className:"gold-trace inline-block font-serif text-3xl text-ivory",children:"Publication PDF"}),d.jsx("iframe",{src:i.pdfUrl,title:`${i.title} PDF`,className:"mt-5 h-[70vh] w-full rounded-[12px] border border-gold/15 bg-ink"})]})})]})})},tw=t=>String(t).padStart(2,"0"),Fh=t=>{if(!(t instanceof Date)||Number.isNaN(t.getTime()))return"";const e=t.getFullYear(),n=tw(t.getMonth()+1),r=tw(t.getDate());return`${e}-${n}-${r}`},Be=t=>{if(!t)return"";if(typeof(t==null?void 0:t.toDate)=="function")return Fh(t.toDate());if(t instanceof Date)return Fh(t);if(typeof t=="string"){const e=t.trim();if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const n=new Date(e);return Fh(n)}return""},Kr=(t=[])=>Array.from(new Set(t.map(e=>Be(e)).filter(Boolean))),Uh={availableSlots:["09:00 AM","10:30 AM","12:00 PM","02:00 PM","03:30 PM","05:00 PM"],blockedDays:[],blockedSlots:[]},wV=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],nw=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()),EV=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),vc=t=>t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),xV=t=>{const e=t.getFullYear(),n=t.getMonth(),r=new Date(e,n,1),s=new Date(e,n+1,0).getDate(),i=[];for(let o=0;o<r.getDay();o+=1)i.push(null);for(let o=1;o<=s;o+=1)i.push(new Date(e,n,o));for(;i.length%7!==0;)i.push(null);return i},TV=()=>{var Jt;const[t,e]=R.useState(!1),[n,r]=R.useState(1),[s,i]=R.useState(new Date),[o,l]=R.useState(null),[c,u]=R.useState(""),[f,m]=R.useState("No date selected yet"),[g,A]=R.useState({name:"",email:"",phone:"",purpose:""}),[P,N]=R.useState(Uh),[j,T]=R.useState([]),[_,S]=R.useState(!1),[L,U]=R.useState({type:"",message:""});R.useEffect(()=>{(async()=>{var me,ae;try{const[Ge,te,tt]=await Promise.all([Da(Xr(Pe,"bookings")),hs(st(Pe,"availability","main")),hs(st(Pe,"blockedSlots","main"))]),Xt=[];Ge.forEach(Qe=>{const He=Qe.data(),Mn=Be((He==null?void 0:He.dateISO)||(He==null?void 0:He.date));Mn&&(He!=null&&He.time)&&Xt.push({dateISO:Mn,time:He.time})}),T(Xt),N({...Uh,...te.exists()?te.data():{},...tt.exists()?tt.data():{},blockedDays:Kr((te.exists()?(me=te.data())==null?void 0:me.blockedDays:[])||[]),blockedSlots:((tt.exists()?(ae=tt.data())==null?void 0:ae.blockedSlots:[])||[]).map(Qe=>({dateISO:Be(Qe==null?void 0:Qe.dateISO),time:(Qe==null?void 0:Qe.time)||""})).filter(Qe=>Qe.dateISO&&Qe.time)})}catch{}})()},[]);const z=R.useMemo(()=>new Set([...(P.blockedSlots||[]).map(ne=>`${ne.dateISO}__${ne.time}`),...j.map(ne=>`${ne.dateISO}__${ne.time}`)]),[P.blockedSlots,j]),w=R.useMemo(()=>nw(new Date),[]),v=R.useMemo(()=>xV(s),[s]),E=s.toLocaleDateString("en-US",{month:"long",year:"numeric"}),k=(Jt=P==null?void 0:P.availableSlots)!=null&&Jt.length?P.availableSlots:Uh.availableSlots,b=R.useMemo(()=>new Set(Kr((P==null?void 0:P.blockedDays)||[])),[P==null?void 0:P.blockedDays]),C=(ne,me)=>!!(b.has(ne)||z.has(`${ne}__${me}`)),I=!!o,we=!!(o&&c),Ut=()=>{e(!0),r(1)},Tt=()=>{e(!1),r(1)},hn=ne=>{i(me=>new Date(me.getFullYear(),me.getMonth()+ne,1))},$=ne=>{const{name:me,value:ae}=ne.target;A(Ge=>({...Ge,[me]:ae}))},Y=async ne=>{try{await cI(Xr(Pe,"bookings"),{...ne,status:"pending",createdAt:ir()})}catch(me){throw console.error(me),me}},J=async ne=>{if(ne.preventDefault(),U({type:"",message:""}),!o||!c){U({type:"error",message:"Please select a consultation date and time."});return}const me=Be(o),ae=Kr(P.blockedDays||[]).includes(me),Ge=z.has(`${me}__${c}`);if(ae||Ge){U({type:"error",message:"Selected slot is no longer available. Please choose another."});return}try{S(!0),await Y({name:g.name,email:g.email,phone:g.phone,date:vc(o),dateISO:me,time:c,purpose:g.purpose}),U({type:"success",message:"Booking submitted successfully. We will contact you shortly."}),A({name:"",email:"",phone:"",purpose:""}),T(te=>[...te,{dateISO:me,time:c}]),m(`${vc(o)}, ${c}`),r(3),setTimeout(()=>{Tt()},1200)}catch(te){U({type:"error",message:te.message})}finally{S(!1)}},ye=()=>{I&&r(2)},Te=()=>{we&&(r(3),U({type:"",message:""}))};return d.jsxs(d.Fragment,{children:[d.jsx(Co,{title:"Booking",description:"Reserve a confidential advisory session with Inaare Consulting Group through our strategic consultation scheduler. Secure your preferred time and we will prepare a focused agenda for your goals."}),d.jsxs("section",{className:"section-shell rhythm-open flow-section signature-motif pt-4",children:[d.jsxs("div",{className:"layout-split items-center",children:[d.jsx(xe,{children:d.jsxs("div",{className:"split-visual",children:[d.jsx("p",{className:"section-kicker",children:"Consultation Calendar"}),d.jsx("h2",{className:"gold-trace mt-3 inline-block font-serif text-4xl font-bold text-ivory",children:"Reserve Your Strategic Session"}),d.jsxs("p",{className:"mt-4 text-lg text-muted",children:["Selected slot: ",f]}),d.jsx("p",{className:"mt-2 text-sm uppercase tracking-[0.14em] text-muted",children:"Guided booking experience"}),d.jsx("button",{type:"button",className:"premium-btn-primary mt-7",onClick:Ut,children:"Start Guided Booking"})]})}),d.jsx(xe,{delay:120,children:d.jsxs("div",{className:"offset-panel lg:ml-8",children:[d.jsx("p",{className:"section-kicker",children:"Booking Flow"}),d.jsx("p",{className:"mt-4 text-lg text-muted",children:"Choose your date, select a suitable time, and submit your brief in one focused product-style flow."}),d.jsx("div",{className:"accent-divider mt-6 max-w-[210px]"})]})})]}),t&&d.jsx("div",{className:"booking-overlay",children:d.jsx("div",{className:"booking-modal-panel",children:d.jsxs("div",{className:"booking-modal-grid",children:[d.jsxs("aside",{className:"stepper-rail",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.18em] text-gold",children:"Booking Journey"}),d.jsx("div",{className:"accent-divider mt-4 mb-6 max-w-[130px]"}),d.jsxs("div",{className:"stepper-item",children:[d.jsx("span",{className:`stepper-dot ${n===1?"stepper-dot-active":""} ${n>1?"stepper-dot-done":""}`,children:"1"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.14em] text-gold",children:"Step 1"}),d.jsx("p",{className:"mt-1 text-sm text-ivory",children:"Select Date"})]}),d.jsx("span",{className:`stepper-line ${n>1?"stepper-line-active":""}`})]}),d.jsxs("div",{className:"stepper-item",children:[d.jsx("span",{className:`stepper-dot ${n===2?"stepper-dot-active":""} ${n>2?"stepper-dot-done":""}`,children:"2"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.14em] text-gold",children:"Step 2"}),d.jsx("p",{className:"mt-1 text-sm text-ivory",children:"Select Time"})]}),d.jsx("span",{className:`stepper-line ${n>2?"stepper-line-active":""}`})]}),d.jsxs("div",{className:"stepper-item pb-0",children:[d.jsx("span",{className:`stepper-dot ${n===3?"stepper-dot-active":""}`,children:"3"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.14em] text-gold",children:"Step 3"}),d.jsx("p",{className:"mt-1 text-sm text-ivory",children:"Enter Details"})]})]})]}),d.jsxs("div",{className:"p-5 md:p-8",children:[d.jsxs("div",{className:"mb-6 flex items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Premium Booking Flow"}),d.jsx("h2",{className:"mt-2 font-serif text-3xl text-ivory md:text-4xl",children:"Schedule Your Consultation"}),d.jsx("div",{className:"accent-divider mt-4 max-w-[180px]"})]}),d.jsx("button",{type:"button",className:"rounded-xl border border-gold/30 px-4 py-2 text-sm text-ivory hover:bg-gold/10",onClick:Tt,children:"Close"})]}),n===1&&d.jsxs("div",{className:"rounded-2xl bg-[radial-gradient(circle_at_88%_12%,rgba(247,214,224,0.2),transparent_42%)] p-2",children:[d.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[d.jsx("p",{className:"font-serif text-2xl text-ivory md:text-3xl",children:E}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{type:"button",className:"rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory hover:bg-gold/10",onClick:()=>hn(-1),children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory hover:bg-gold/10",onClick:()=>hn(1),children:"Next"})]})]}),d.jsxs("div",{className:"grid grid-cols-7 gap-3 text-center",children:[wV.map(ne=>d.jsx("p",{className:"pb-2 text-xs uppercase tracking-[0.16em] text-muted",children:ne},ne)),v.map((ne,me)=>{if(!ne)return d.jsx("div",{className:"h-12","aria-hidden":"true"},`empty-${me}`);const ae=nw(ne),Ge=ae<w,te=o?EV(ae,o):!1,tt=Be(ae),Xt=k.every(He=>C(tt,He)),Qe=Ge||Xt;return d.jsx("button",{type:"button",disabled:Qe,onClick:()=>{l(ae),u("")},className:`calendar-pill h-11 text-sm font-medium transition ${te?"calendar-pill-selected":Qe?"cursor-not-allowed border-gold/10 text-muted/40":"text-muted"}`,children:ae.getDate()},ae.toISOString())})]}),d.jsx("div",{className:"mt-7 flex justify-end",children:d.jsx("button",{type:"button",className:"premium-btn-primary",disabled:!I,onClick:ye,children:"Continue to Time"})})]}),n===2&&d.jsxs("div",{className:"rounded-2xl bg-[radial-gradient(circle_at_10%_15%,rgba(247,214,224,0.2),transparent_44%)] p-2",children:[d.jsx("p",{className:"text-sm uppercase tracking-[0.16em] text-gold",children:o?vc(o):"Select a date first"}),d.jsx("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3",children:k.map(ne=>{const me=o?Be(o):"",ae=o?C(me,ne):!1,Ge=c===ne;return d.jsx("button",{type:"button",disabled:!o||ae,onClick:()=>u(ne),className:`time-chip min-h-[56px] rounded-xl px-4 py-3 text-sm transition ${Ge?"time-chip-selected text-ivory":!o||ae?"cursor-not-allowed border-gold/10 text-muted/40":"text-muted"}`,children:ne},ne)})}),d.jsxs("div",{className:"mt-6 flex flex-wrap justify-between gap-3",children:[d.jsx("button",{type:"button",className:"premium-btn-secondary",onClick:()=>r(1),children:"Back to Date"}),d.jsx("button",{type:"button",className:"premium-btn-primary",disabled:!we,onClick:Te,children:"Continue to Details"})]})]}),n===3&&d.jsxs("form",{className:"rounded-2xl bg-[radial-gradient(circle_at_82%_10%,rgba(247,214,224,0.2),transparent_44%)] p-2",onSubmit:J,children:[d.jsxs("div",{className:"mb-5 rounded-xl border border-gold/20 bg-white/80 p-4 text-sm text-muted",children:[d.jsx("span",{className:"font-medium text-ivory",children:"Selected:"})," ",o&&c?`${vc(o)}, ${c}`:"Please go back and complete date/time selection."]}),d.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[d.jsxs("div",{className:"field-wrap-soft",children:[d.jsx("input",{id:"book-name",name:"name",type:"text",className:"field-input",placeholder:" ",value:g.name,onChange:$,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"book-name",children:"Full Name"})]}),d.jsxs("div",{className:"field-wrap-soft",children:[d.jsx("input",{id:"book-email",name:"email",type:"email",className:"field-input",placeholder:" ",value:g.email,onChange:$,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"book-email",children:"Email"})]}),d.jsxs("div",{className:"field-wrap-soft md:col-span-2",children:[d.jsx("input",{id:"book-phone",name:"phone",type:"tel",className:"field-input",placeholder:" ",value:g.phone,onChange:$,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"book-phone",children:"Phone Number"})]}),d.jsxs("div",{className:"field-wrap-soft md:col-span-2",children:[d.jsx("textarea",{id:"book-purpose",name:"purpose",className:"field-textarea",placeholder:" ",value:g.purpose,onChange:$,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"book-purpose",children:"Purpose of Consultation"})]})]}),L.message&&d.jsx("p",{className:`mt-4 text-sm font-medium ${L.type==="success"?"text-emerald-700":"text-red-600"}`,children:L.message}),d.jsxs("div",{className:"mt-6 flex flex-wrap justify-between gap-3",children:[d.jsx("button",{type:"button",className:"premium-btn-secondary",onClick:()=>r(2),children:"Back to Time"}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:_,children:_?"Submitting Booking...":"Confirm Strategic Consultation"})]})]})]})]})})})]})]})},IV=()=>{const[t,e]=R.useState({name:"",email:"",phone:"",message:""}),[n,r]=R.useState(!1),[s,i]=R.useState({type:"",message:""}),o=c=>{const{name:u,value:f}=c.target;e(m=>({...m,[u]:f}))},l=async c=>{c.preventDefault(),i({type:"",message:""});const{name:u,email:f,phone:m,message:g}=t;try{r(!0),await cI(Xr(Pe,"messages"),{name:u,email:f,phone:m,message:g,createdAt:ir()}),i({type:"success",message:"Message sent successfully. We will respond shortly."}),e({name:"",email:"",phone:"",message:""})}catch(A){i({type:"error",message:A.message})}finally{r(!1)}};return d.jsxs(d.Fragment,{children:[d.jsx(Co,{title:"Contact",description:"Connect with Inaare Consulting Group for partnerships, strategic conversations, and transformational engagements. We respond with clarity, discretion, and urgency."}),d.jsx("section",{className:"section-shell rhythm-open flow-section signature-motif pt-4",children:d.jsxs("div",{className:"layout-split items-start",children:[d.jsx(xe,{children:d.jsx("div",{className:"form-blush-shell",children:d.jsxs("form",{className:"contact-product-card space-y-7 p-8 md:p-10",onSubmit:l,children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Confidential Inquiry"}),d.jsx("h2",{className:"mt-3 font-serif text-3xl text-ivory",children:"Start a Strategic Conversation"}),d.jsx("div",{className:"accent-divider mt-4 max-w-[170px]"})]}),d.jsxs("div",{className:"field-wrap-soft",children:[d.jsx("input",{id:"contact-name",name:"name",type:"text",className:"field-input",placeholder:" ",value:t.name,onChange:o,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"contact-name",children:"Name"})]}),d.jsxs("div",{className:"field-wrap-soft",children:[d.jsx("input",{id:"contact-email",name:"email",type:"email",className:"field-input",placeholder:" ",value:t.email,onChange:o,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"contact-email",children:"Email"})]}),d.jsxs("div",{className:"field-wrap-soft",children:[d.jsx("input",{id:"contact-phone",name:"phone",type:"tel",className:"field-input",placeholder:" ",value:t.phone,onChange:o,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"contact-phone",children:"Phone"})]}),d.jsxs("div",{className:"field-wrap-soft",children:[d.jsx("textarea",{id:"message",name:"message",className:"field-textarea",placeholder:" ",value:t.message,onChange:o,required:!0}),d.jsx("label",{className:"field-label",htmlFor:"message",children:"How can we support your goals?"})]}),s.message&&d.jsx("p",{className:`text-sm font-medium ${s.type==="success"?"text-emerald-700":"text-red-600"}`,children:s.message}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:n,children:n?"Sending Message...":"Send Confidential Message"})]})})}),d.jsx(xe,{delay:140,children:d.jsxs("aside",{className:"split-visual lg:ml-10",children:[d.jsx("p",{className:"section-kicker",children:"Direct Access"}),d.jsx("h2",{className:"gold-trace mt-3 inline-block font-serif text-4xl font-bold text-ivory",children:"Reach Us"}),d.jsxs("p",{className:"text-measure mt-4 text-muted",children:["Email: ndaizeek@gmail.com",d.jsx("br",{}),"Phone: +254 721 389696"]}),d.jsx("p",{className:"text-measure mt-6 text-muted",children:"Working with leaders and organizations across Africa and globally, we structure advisory experiences for impact, clarity, and sustainable results."})]})})]})})]})},SV=()=>{const t=gm(),{login:e}=_g(),[n,r]=R.useState({email:"",password:""}),[s,i]=R.useState(!1),[o,l]=R.useState(""),c=async(m,g)=>{await FN(Lu,m,g)},u=m=>{const{name:g,value:A}=m.target;r(P=>({...P,[g]:A}))},f=async m=>{m.preventDefault(),l(""),i(!0);try{await c(n.email,n.password),e({user:{email:n.email,role:"admin"}}),t("/admin/dashboard",{replace:!0})}catch(g){l(g.message)}finally{i(!1)}};return d.jsx("section",{className:"section-shell",children:d.jsxs("div",{className:"mx-auto w-full max-w-lg premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Admin Portal"}),d.jsx("h1",{className:"mt-3 font-serif text-4xl text-ivory",children:"Sign In"}),d.jsx("p",{className:"mt-3 text-muted",children:"Secure access for authorized administrators only."}),d.jsxs("form",{className:"mt-6 space-y-4",onSubmit:f,children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm text-muted",children:"Email"}),d.jsx("input",{id:"email",name:"email",type:"email",className:"premium-input",value:n.email,onChange:u,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm text-muted",children:"Password"}),d.jsx("input",{id:"password",name:"password",type:"password",className:"premium-input",value:n.password,onChange:u,required:!0})]}),o&&d.jsx("p",{className:"text-sm text-red-300",children:o}),d.jsx("button",{type:"submit",className:"premium-btn-primary w-full",disabled:s,children:s?"Signing in...":"Sign In to Admin"})]})]})})};/**
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
 */const kV="/firebase-messaging-sw.js",AV="/firebase-cloud-messaging-push-scope",XI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",bV="https://fcmregistrations.googleapis.com/v1",ZI="google.c.a.c_id",PV="google.c.a.c_l",CV="google.c.a.ts",NV="google.c.a.e",rw=1e4;var sw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(sw||(sw={}));/**
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
 */var ul;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ul||(ul={}));/**
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
 */function or(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function RV(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Bh="fcm_token_details_db",DV=5,iw="fcm_token_object_Store";async function OV(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Bh))return null;let e=null;return(await od(Bh,DV,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(iw))return;const l=o.objectStore(iw),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(s===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:u.createTime??Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:or(u.vapidKey)}}}else if(s===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:or(u.auth),p256dh:or(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:or(u.vapidKey)}}}else if(s===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:or(u.auth),p256dh:or(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:or(u.vapidKey)}}}}}})).close(),await Eh(Bh),await Eh("fcm_vapid_details_db"),await Eh("undefined"),jV(e)?e:null}function jV(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const LV="firebase-messaging-database",VV=1,dl="firebase-messaging-store";let zh=null;function eS(){return zh||(zh=od(LV,VV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dl)}}})),zh}async function MV(t){const e=tS(t),r=await(await eS()).transaction(dl).objectStore(dl).get(e);if(r)return r;{const s=await OV(t.appConfig.senderId);if(s)return await wg(t,s),s}}async function wg(t,e){const n=tS(t),s=(await eS()).transaction(dl,"readwrite");return await s.objectStore(dl).put(e,n),await s.done,e}function tS({appConfig:t}){return t.appId}/**
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
 */const FV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Vt=new Ss("messaging","Messaging",FV);/**
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
 */async function UV(t,e){const n=await xg(t),r=nS(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Eg(t.appConfig),s)).json()}catch(o){throw Vt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Vt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Vt.create("token-subscribe-no-token");return i.token}async function BV(t,e){const n=await xg(t),r=nS(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Eg(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Vt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Vt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Vt.create("token-update-no-token");return i.token}async function zV(t,e){const r={method:"DELETE",headers:await xg(t)};try{const i=await(await fetch(`${Eg(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Vt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Vt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Eg({projectId:t}){return`${bV}/projects/${t}/registrations`}async function xg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function nS({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==XI&&(s.web.applicationPubKey=r),s}/**
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
 */const $V=7*24*60*60*1e3;async function WV(t){const e=await qV(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:or(e.getKey("auth")),p256dh:or(e.getKey("p256dh"))},r=await MV(t.firebaseDependencies);if(r){if(KV(r.subscriptionOptions,n))return Date.now()>=r.createTime+$V?HV(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await zV(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return ow(t.firebaseDependencies,n)}else return ow(t.firebaseDependencies,n)}async function HV(t,e){try{const n=await BV(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await wg(t.firebaseDependencies,r),n}catch(n){throw n}}async function ow(t,e){const r={token:await UV(t,e),createTime:Date.now(),subscriptionOptions:e};return await wg(t,r),r.token}async function qV(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:RV(e)})}function KV(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function aw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return GV(e,t),QV(e,t),YV(e,t),e}function GV(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function QV(t,e){e.data&&(t.data=e.data)}function YV(t,e){var s,i,o,l;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function JV(t){return typeof t=="object"&&!!t&&ZI in t}/**
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
 */function XV(t){if(!t||!t.options)throw $h("App Configuration Object");if(!t.name)throw $h("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw $h(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function $h(t){return Vt.create("missing-app-config-values",{valueName:t})}/**
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
 */class ZV{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=XV(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function eM(t){try{t.swRegistration=await navigator.serviceWorker.register(kV,{scope:AV}),t.swRegistration.update().catch(()=>{}),await tM(t.swRegistration)}catch(e){throw Vt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function tM(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${rw} ms`)),rw),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function nM(t,e){if(!e&&!t.swRegistration&&await eM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Vt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function rM(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=XI)}/**
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
 */async function sM(t,e){if(!navigator)throw Vt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Vt.create("permission-blocked");return await rM(t,e==null?void 0:e.vapidKey),await nM(t,e==null?void 0:e.serviceWorkerRegistration),WV(t)}/**
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
 */async function iM(t,e,n){const r=oM(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ZI],message_name:n[PV],message_time:n[CV],message_device_time:Math.floor(Date.now()/1e3)})}function oM(t){switch(t){case ul.NOTIFICATION_CLICKED:return"notification_open";case ul.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function aM(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ul.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(aw(n)):t.onMessageHandler.next(aw(n)));const r=n.data;JV(r)&&r[NV]==="1"&&await iM(t,n.messageType,r)}const lw="@firebase/messaging",cw="0.12.25";/**
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
 */const lM=t=>{const e=new ZV(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>aM(e,n)),e},cM=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>sM(e,r)}};function uM(){cn(new Yt("messaging",lM,"PUBLIC")),cn(new Yt("messaging-internal",cM,"PRIVATE")),Ct(lw,cw),Ct(lw,cw,"esm2020")}/**
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
 */async function rS(){try{await sd()}catch{return!1}return typeof window<"u"&&rd()&&vm()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function dM(t=vl()){return rS().then(e=>{if(!e)throw Vt.create("unsupported-browser")},e=>{throw Vt.create("indexed-db-unsupported")}),kr(Se(t),"messaging").getImmediate()}uM();const hM=async({firebaseUser:t,messaging:e,vapidKey:n,onForegroundMessage:r})=>!t||!e?{ok:!1,reason:"missing-context"}:await Notification.requestPermission()!=="granted"?{ok:!1,reason:"permission-denied"}:{ok:!1,reason:"missing-vapid-key"},fM=t=>{var r;if(!("permissions"in navigator)||!((r=navigator.permissions)!=null&&r.query))return t==null||t(Notification.permission),()=>{};let e=!0,n;return navigator.permissions.query({name:"notifications"}).then(s=>{e&&(n=s,t==null||t(s.state),s.onchange=()=>t==null?void 0:t(s.state))}).catch(()=>t==null?void 0:t(Notification.permission)),()=>{e=!1,n&&(n.onchange=null)}},pM=async()=>await rS()&&typeof Notification<"u",mM=[{key:"dashboard",label:"Dashboards"},{key:"bookings",label:"Bookings"},{key:"messages",label:"Messages"},{key:"calendar",label:"My Calender"},{key:"website-details",label:"Website Details"},{key:"admin-profile",label:"Admin Profile"}],uw=["pending","contacted","scheduled","completed"],dw={title:"",description:"",category:"",content:"",pdfUrl:"",date:""},Wh={githubRepoUrl:"",hostingProvider:"",hostingExpiration:"",domainName:"",domainHost:"",domainExpiration:""},Hh={availableSlots:["09:00 AM","10:30 AM","12:00 PM","02:00 PM","03:30 PM","05:00 PM"],blockedDays:[],blockedSlots:[]},_c={dateISO:"",time:"",type:"personal",email:"",phone:"",summary:""},Fs=t=>t?typeof(t==null?void 0:t.toDate)=="function"?t.toDate():typeof t=="string"?new Date(t):null:null,qh=t=>{const e=Fs(t);return e&&!Number.isNaN(e.getTime())?e.toLocaleString():"N/A"},gM=t=>{const e=t.getFullYear(),n=t.getMonth(),r=new Date(e,n,1),s=new Date(e,n+1,0).getDate(),i=[];for(let o=0;o<r.getDay();o+=1)i.push(null);for(let o=1;o<=s;o+=1)i.push(new Date(e,n,o));for(;i.length%7!==0;)i.push(null);return i},hw=t=>{if(!t)return!1;const e=new Date(t);if(Number.isNaN(e.getTime()))return!1;const n=(e.getTime()-Date.now())/(1e3*60*60*24);return n>=0&&n<=30},Kh=({rows:t=3})=>d.jsx("div",{className:"space-y-3",children:Array.from({length:t}).map((e,n)=>d.jsx("div",{className:"h-20 animate-pulse rounded-[12px] border border-gold/15 bg-charcoal/40"},n))}),yM=()=>{const{logout:t,firebaseUser:e}=_g(),[n,r]=R.useState("dashboard"),[s,i]=R.useState([]),[o,l]=R.useState([]),[c,u]=R.useState([]),[f,m]=R.useState(Wh),[g,A]=R.useState(Hh),[P,N]=R.useState(dw),[j,T]=R.useState(""),[_,S]=R.useState(null),[L,U]=R.useState(""),[z,w]=R.useState("all"),[v,E]=R.useState(1),[k,b]=R.useState(1),[C,I]=R.useState(null),[we,Ut]=R.useState(null),[Tt,hn]=R.useState(null),[$,Y]=R.useState(null),[J,ye]=R.useState(null),[Te,Jt]=R.useState(Hh.availableSlots.join(", ")),[ne,me]=R.useState(()=>new Date(new Date().getFullYear(),new Date().getMonth(),1)),[ae,Ge]=R.useState(""),[te,tt]=R.useState(_c),[Xt,Qe]=R.useState({newPassword:"",confirmPassword:""}),[He,Mn]=R.useState(null),[No,bl]=R.useState(!1),[Ro,Do]=R.useState(!1),[Oo,nt]=R.useState(!1),[pt,yi]=R.useState(typeof Notification<"u"?Notification.permission:"default"),[Pl,jo]=R.useState(!1),[vi,bs]=R.useState({bookings:!0,messages:!0,publications:!0,websiteDetails:!0,calendar:!0}),[Ye,mt]=R.useState({publication:!1,websiteDetails:!1,calendar:!1,profile:!1,deletePublication:!1,deleteBooking:!1,deleteMessage:!1}),[_i,In]=R.useState(""),[Lo,Vo]=R.useState(null),le=(x,D)=>{Vo({type:x,message:D}),setTimeout(()=>Vo(null),2600)},br=async()=>{try{In("");const[x,D,G,X,ge,ke]=await Promise.all([Da(Xr(Pe,"bookings")),Da(Xr(Pe,"messages")),Da(Xr(Pe,"publications")),hs(st(Pe,"websiteDetails","main")),hs(st(Pe,"availability","main")),hs(st(Pe,"blockedSlots","main"))]),Oe=[];x.forEach(oe=>{const Zt=oe.data()||{};Oe.push({id:oe.id,...Zt,dateISO:Be(Zt.dateISO||Zt.date)})}),Oe.sort((oe,Zt)=>{var fn,kn;return(((fn=Fs(Zt.createdAt))==null?void 0:fn.getTime())||0)-(((kn=Fs(oe.createdAt))==null?void 0:kn.getTime())||0)});const ct=[];D.forEach(oe=>ct.push({id:oe.id,...oe.data()})),ct.sort((oe,Zt)=>{var fn,kn;return(((fn=Fs(Zt.createdAt))==null?void 0:fn.getTime())||0)-(((kn=Fs(oe.createdAt))==null?void 0:kn.getTime())||0)});const Bt=[];G.forEach(oe=>Bt.push({id:oe.id,...oe.data()})),Bt.sort((oe,Zt)=>{var fn,kn;return(((fn=Fs(Zt.createdAt))==null?void 0:fn.getTime())||0)-(((kn=Fs(oe.createdAt))==null?void 0:kn.getTime())||0)}),i(Oe),l(ct),u(Bt),m(X.exists()?{...Wh,...X.data()}:Wh);const Sn={...Hh,...ge.exists()?ge.data():{},...ke.exists()?ke.data():{}},$o={...Sn,blockedDays:Kr(Sn.blockedDays||[]),blockedSlots:(Sn.blockedSlots||[]).map(oe=>({dateISO:Be(oe==null?void 0:oe.dateISO),time:(oe==null?void 0:oe.time)||"",type:(oe==null?void 0:oe.type)==="client"?"client":"personal",email:(oe==null?void 0:oe.email)||"",phone:(oe==null?void 0:oe.phone)||"",summary:(oe==null?void 0:oe.summary)||""})).filter(oe=>oe.dateISO&&oe.time)};A($o),Jt(($o.availableSlots||[]).join(", "))}catch(x){In(x.message)}finally{bs({bookings:!1,messages:!1,publications:!1,websiteDetails:!1,calendar:!1})}};R.useEffect(()=>{const x=_x(Lu,D=>{D?br():console.log("Not authenticated")});return()=>x()},[]),R.useEffect(()=>{const x=fM(D=>{yi(D)});return()=>{x()}},[]),R.useEffect(()=>{var Oe,ct;const x=((ct=(Oe=window.matchMedia)==null?void 0:Oe.call(window,"(display-mode: standalone)"))==null?void 0:ct.matches)||window.navigator.standalone;bl(!!x);const D=window.navigator.userAgent||"",G=/iPad|iPhone|iPod/.test(D),X=/Safari/.test(D)&&!/CriOS|FxiOS|EdgiOS/.test(D);Do(G&&X);const ge=Bt=>{Bt.preventDefault(),Mn(Bt)},ke=()=>{Mn(null),bl(!0),le("success","Inaare Admin Portal installed.")};return window.addEventListener("beforeinstallprompt",ge),window.addEventListener("appinstalled",ke),()=>{window.removeEventListener("beforeinstallprompt",ge),window.removeEventListener("appinstalled",ke)}},[]);const Mo=async()=>{if(!He){le("error","Install prompt not available yet. Use supported browser and reload once.");return}try{nt(!0),He.prompt(),await He.userChoice,Mn(null)}catch(x){le("error",x.message)}finally{nt(!1)}},Fo=async()=>{if(!e){le("error","Admin session not found.");return}try{if(jo(!0),!await pM()){le("error","Push notifications are not supported on this browser/device.");return}const D=void 0,G=dM(Al),X=await hM({firebaseUser:e,messaging:G,vapidKey:D,onForegroundMessage:ge=>{var ct,Bt;const ke=((ct=ge==null?void 0:ge.notification)==null?void 0:ct.title)||"Inaare Admin Portal",Oe=((Bt=ge==null?void 0:ge.notification)==null?void 0:Bt.body)||"New update received.";le("success",`${ke}: ${Oe}`)}});if(!X.ok){if(X.reason==="permission-denied"){le("error","Notification permission denied.");return}if(X.reason==="missing-vapid-key"){le("error","Missing VITE_FIREBASE_VAPID_KEY for FCM setup.");return}le("error","Unable to initialize push notifications.");return}le("success","Push notifications enabled for this admin device.")}catch(x){le("error",x.message)}finally{jo(!1)}},Fn=R.useMemo(()=>{const x=L.trim().toLowerCase();return s.filter(D=>{const G=`${D.name||""} ${D.email||""} ${D.phone||""}`.toLowerCase(),X=(D.status||"pending").toLowerCase();return(!x||G.includes(x))&&(z==="all"||X===z)})},[s,L,z]),wi=Math.max(1,Math.ceil(Fn.length/10)),Ei=Fn.slice((v-1)*10,v*10),xi=Math.max(1,Math.ceil(o.length/10)),Ps=o.slice((k-1)*10,k*10),Cl=s.slice(0,5),gt=o.slice(0,5),Uo=[hw(f.hostingExpiration)?`Hosting expires ${qh(f.hostingExpiration)}`:"",hw(f.domainExpiration)?`Domain expires ${qh(f.domainExpiration)}`:""].filter(Boolean),Cs=gM(ne),Ns=R.useMemo(()=>{const x={};return s.forEach(D=>{const G=Be(D.dateISO||D.date);G&&(x[G]=x[G]||{booked:0,blocked:0},x[G].booked+=1)}),Kr(g.blockedDays||[]).forEach(D=>{x[D]=x[D]||{booked:0,blocked:0},x[D].blocked=(g.availableSlots||[]).length||1}),(g.blockedSlots||[]).forEach(D=>{const G=Be(D==null?void 0:D.dateISO);!G||!(D!=null&&D.time)||(x[G]=x[G]||{booked:0,blocked:0},x[G].blocked+=1)}),x},[s,g]),Nd=R.useMemo(()=>new Set(s.map(x=>{const D=Be(x.dateISO||x.date),G=x.time||"";return D&&G?`${D}__${G}`:""}).filter(Boolean)),[s]),Rd=R.useMemo(()=>new Set((g.blockedSlots||[]).map(x=>{const D=Be(x==null?void 0:x.dateISO),G=(x==null?void 0:x.time)||"";return D&&G?`${D}__${G}`:""}).filter(Boolean)),[g.blockedSlots]),Pr=R.useMemo(()=>{const x={};return s.forEach(D=>{const G=Be(D.dateISO||D.date),X=D.time||"";if(!G||!X)return;const ge=`${G}__${X}`;x[ge]||(x[ge]=[]),x[ge].push(D)}),x},[s]),Dd=async(x,D)=>{await Nh(st(Pe,"bookings",x.id),{status:D,updatedAt:ir()}),i(G=>G.map(X=>X.id===x.id?{...X,status:D}:X))},Od=async x=>{x.preventDefault();const D=P.title.trim(),G=P.description.trim(),X=P.category.trim(),ge=P.content.trim();if(!D||!G||!X){le("error","Title, description, and category are required.");return}if(!ge&&!P.pdfUrl&&!_){le("error","Add article content or upload a PDF.");return}try{mt(Sn=>({...Sn,publication:!0}));const ke=!!j,Oe=ke?st(Pe,"publications",j):st(Xr(Pe,"publications"));let ct=P.pdfUrl||"";if(_){const Sn=Rj(oV,`publications/${Oe.id}/${Date.now()}-${_.name}`);await Cj(Sn,_),ct=await Nj(Sn)}const Bt={id:Oe.id,title:D,description:G,category:X,content:ge,pdfUrl:ct,date:P.date||"",updatedAt:ir()};ke?await Nh(Oe,Bt):await fc(Oe,{...Bt,createdAt:ir()}),le("success",ke?"Publication updated.":"Publication created."),N(dw),T(""),S(null),await br()}catch(ke){In(ke.message),le("error",ke.message)}finally{mt(ke=>({...ke,publication:!1}))}},Ti=x=>{T(x.id),S(null),N({title:x.title||"",description:x.description||"",category:x.category||"",content:x.content||"",pdfUrl:x.pdfUrl||"",date:x.date||""}),r("publications")},Nl=async()=>{if(Tt!=null&&Tt.id)try{mt(x=>({...x,deletePublication:!0})),await Rh(st(Pe,"publications",Tt.id)),u(x=>x.filter(D=>D.id!==Tt.id)),hn(null),le("success","Publication deleted.")}catch(x){In(x.message),le("error",x.message)}finally{mt(x=>({...x,deletePublication:!1}))}},Rl=async x=>{x.preventDefault();try{mt(D=>({...D,websiteDetails:!0})),await fc(st(Pe,"websiteDetails","main"),{...f,updatedAt:ir()},{merge:!0}),le("success","Website details saved.")}catch(D){In(D.message),le("error",D.message)}finally{mt(D=>({...D,websiteDetails:!1}))}},Cr=async x=>{try{mt(D=>({...D,calendar:!0})),await Promise.all([fc(st(Pe,"availability","main"),{availableSlots:x.availableSlots||[],blockedDays:Kr(x.blockedDays||[]),updatedAt:ir()},{merge:!0}),fc(st(Pe,"blockedSlots","main"),{blockedSlots:(x.blockedSlots||[]).map(D=>({dateISO:Be(D==null?void 0:D.dateISO),time:(D==null?void 0:D.time)||"",type:(D==null?void 0:D.type)==="client"?"client":"personal",email:(D==null?void 0:D.email)||"",phone:(D==null?void 0:D.phone)||"",summary:(D==null?void 0:D.summary)||""})).filter(D=>D.dateISO&&D.time),updatedAt:ir()},{merge:!0})]),A(x),le("success","Calendar updated.")}catch(D){In(D.message),le("error",D.message)}finally{mt(D=>({...D,calendar:!1}))}},Rs=async()=>{const x=Te.split(",").map(D=>D.trim()).filter(Boolean);if(x.length===0){le("error","Add at least one slot.");return}await Cr({...g,availableSlots:x})},jd=async x=>{const D=Be(x),G=new Set(Kr(g.blockedDays||[]));G.has(D)?G.delete(D):G.add(D),await Cr({...g,blockedDays:Array.from(G)})},Un=(x,D)=>{const G=Be(x),X=(g.blockedSlots||[]).find(ge=>Be(ge.dateISO)===G&&ge.time===D);tt({dateISO:G,time:D,type:(X==null?void 0:X.type)==="client"?"client":"personal",email:(X==null?void 0:X.email)||"",phone:(X==null?void 0:X.phone)||"",summary:(X==null?void 0:X.summary)||""})},Dl=async()=>{if(!te.dateISO||!te.time){le("error","Choose a slot first.");return}if(te.type==="client"&&(!te.email.trim()||!te.phone.trim()||!te.summary.trim())){le("error","Email, number, and consultation summary are required for client holds.");return}const G=[...(g.blockedSlots||[]).filter(X=>!(Be(X.dateISO)===te.dateISO&&X.time===te.time)),{dateISO:te.dateISO,time:te.time,type:te.type,email:te.type==="client"?te.email.trim():"",phone:te.type==="client"?te.phone.trim():"",summary:te.type==="client"?te.summary.trim():""}];await Cr({...g,blockedSlots:G}),tt(_c)},Ol=async()=>{if(!te.dateISO||!te.time)return;const x=(g.blockedSlots||[]).filter(D=>!(Be(D.dateISO)===te.dateISO&&D.time===te.time));await Cr({...g,blockedSlots:x}),tt(_c)},Bo=async(x,D)=>{await Nh(st(Pe,"messages",x.id),{responded:D,updatedAt:ir()}),l(G=>G.map(X=>X.id===x.id?{...X,responded:D}:X)),le("success",D?"Marked as responded.":"Marked as pending.")},zo=async()=>{if($!=null&&$.id)try{mt(x=>({...x,deleteBooking:!0})),await Rh(st(Pe,"bookings",$.id)),i(x=>x.filter(D=>D.id!==$.id)),Y(null),le("success","Booking deleted.")}catch(x){In(x.message),le("error",x.message)}finally{mt(x=>({...x,deleteBooking:!1}))}},jl=async()=>{if(J!=null&&J.id)try{mt(x=>({...x,deleteMessage:!0})),await Rh(st(Pe,"messages",J.id)),l(x=>x.filter(D=>D.id!==J.id)),ye(null),le("success","Message deleted.")}catch(x){In(x.message),le("error",x.message)}finally{mt(x=>({...x,deleteMessage:!1}))}},Ld=async x=>{if(x.preventDefault(),Xt.newPassword.length<8){le("error","Password must be at least 8 characters.");return}if(Xt.newPassword!==Xt.confirmPassword){le("error","Passwords do not match.");return}if(!e){le("error","Admin session not found.");return}try{mt(D=>({...D,profile:!0})),await UN(e,Xt.newPassword),Qe({newPassword:"",confirmPassword:""}),le("success","Password updated successfully.")}catch(D){In(D.message),le("error",D.message)}finally{mt(D=>({...D,profile:!1}))}};return d.jsxs("section",{className:"section-shell",children:[d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[240px_1fr]",children:[d.jsxs("aside",{className:"premium-card h-fit lg:sticky lg:top-24",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Admin"}),d.jsx("h2",{className:"mt-2 font-serif text-3xl text-ivory",children:"Dashboard"}),d.jsx("nav",{className:"mt-6 space-y-2",children:mM.map(x=>d.jsx("button",{type:"button",className:`w-full rounded-[12px] border px-4 py-3 text-left text-sm uppercase tracking-[0.12em] transition ${n===x.key?"border-gold bg-gold/20 text-gold":"border-gold/20 text-muted hover:border-gold/45 hover:text-ivory"}`,onClick:()=>r(x.key),children:x.label},x.key))}),d.jsx("button",{type:"button",className:"premium-btn-secondary mt-6 w-full",onClick:t,children:"Logout"})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-gold",children:"Internal Tool"}),d.jsx("h1",{className:"mt-2 font-serif text-4xl text-ivory",children:"Operations Console"})]}),d.jsxs("div",{className:"flex flex-wrap gap-2",children:[pt!=="granted"&&d.jsx("button",{type:"button",className:"premium-btn-secondary",onClick:Fo,disabled:Pl,children:Pl?"Enabling...":"Enable Push Notifications"}),!No&&He&&d.jsx("button",{type:"button",className:"premium-btn-secondary",onClick:Mo,disabled:Oo,children:Oo?"Preparing...":"Download Inaare Admin Portal"})]})]}),!No&&Ro&&!He&&d.jsxs("article",{className:"rounded-[12px] border border-gold/25 bg-gold/10 px-4 py-3 text-ivory",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.14em] text-gold",children:"Install on iPhone"}),d.jsx("p",{className:"mt-1 text-sm text-muted",children:"In Safari, tap Share, then choose Add to Home Screen to install the Inaare Admin Portal."})]}),Uo.length>0&&d.jsxs("article",{className:"rounded-[12px] border border-red-300/35 bg-red-400/10 px-4 py-3 text-red-200",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.14em]",children:"Expiry Alert"}),d.jsx("p",{className:"mt-1 text-sm",children:Uo.join(" • ")})]}),_i&&d.jsx("p",{className:"text-sm text-red-300",children:_i}),n==="dashboard"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:[d.jsxs("article",{className:"premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:"Total Bookings"}),d.jsx("p",{className:"mt-3 font-serif text-4xl text-ivory",children:s.length})]}),d.jsxs("article",{className:"premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:"New Bookings"}),d.jsx("p",{className:"mt-3 font-serif text-4xl text-gold",children:s.filter(x=>(x.status||"pending")==="pending").length})]}),d.jsxs("article",{className:"premium-card",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:"Messages"}),d.jsx("p",{className:"mt-3 font-serif text-4xl text-ivory",children:o.length})]})]}),d.jsxs("div",{className:"grid gap-6 xl:grid-cols-2",children:[d.jsxs("article",{className:"premium-card",children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Latest Bookings"}),d.jsx("button",{type:"button",className:"text-xs uppercase tracking-[0.12em] text-gold",onClick:()=>r("bookings"),children:"View All"})]}),Cl.map(x=>d.jsxs("div",{className:"mb-2 rounded-[10px] border border-gold/20 px-3 py-2 text-sm text-muted",children:[x.name," • ",x.date," • ",x.time]},x.id))]}),d.jsxs("article",{className:"premium-card",children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Latest Messages"}),d.jsx("button",{type:"button",className:"text-xs uppercase tracking-[0.12em] text-gold",onClick:()=>r("messages"),children:"View All"})]}),gt.map(x=>d.jsxs("div",{className:"mb-2 rounded-[10px] border border-gold/20 px-3 py-2 text-sm text-muted",children:[x.name," • ",x.email]},x.id))]})]})]}),n==="bookings"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("article",{className:"premium-card grid gap-3 md:grid-cols-[1.5fr_1fr]",children:[d.jsx("input",{className:"premium-input",placeholder:"Search name, email, phone",value:L,onChange:x=>U(x.target.value)}),d.jsxs("select",{className:"premium-input",value:z,onChange:x=>w(x.target.value),children:[d.jsx("option",{value:"all",children:"All Statuses"}),uw.map(x=>d.jsx("option",{value:x,children:x},x))]})]}),d.jsx("article",{className:"premium-card overflow-x-auto",children:vi.bookings?d.jsx(Kh,{rows:5}):d.jsxs("table",{className:"w-full min-w-[820px] text-left text-sm",children:[d.jsx("thead",{className:"text-xs uppercase tracking-[0.12em] text-muted",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-3 py-2",children:"Client"}),d.jsx("th",{className:"px-3 py-2",children:"Session"}),d.jsx("th",{className:"px-3 py-2",children:"Status"}),d.jsx("th",{className:"px-3 py-2",children:"Actions"})]})}),d.jsx("tbody",{children:Ei.map(x=>d.jsxs("tr",{className:"border-t border-gold/10 text-muted",children:[d.jsxs("td",{className:"px-3 py-3",children:[d.jsx("p",{className:"font-semibold text-ivory",children:x.name}),d.jsx("p",{children:x.email}),d.jsx("p",{children:x.phone})]}),d.jsxs("td",{className:"px-3 py-3",children:[x.date,d.jsx("br",{}),x.time]}),d.jsx("td",{className:"px-3 py-3",children:d.jsx("select",{className:"rounded-[10px] border border-gold/30 bg-ink px-2 py-1 text-xs text-ivory",value:(x.status||"pending").toLowerCase(),onChange:D=>Dd(x,D.target.value),children:uw.map(D=>d.jsx("option",{value:D,children:D},D))})}),d.jsx("td",{className:"px-3 py-3",children:d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1 text-xs text-ivory",onClick:()=>I(x),children:"View"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-1 text-xs text-red-200",onClick:()=>Y(x),children:"Delete"})]})})]},x.id))})]})}),d.jsxs("article",{className:"premium-card flex items-center justify-between py-3 text-sm text-muted",children:[d.jsxs("p",{children:["Page ",v," of ",wi]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:v===1,onClick:()=>E(x=>Math.max(1,x-1)),children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:v===wi,onClick:()=>E(x=>Math.min(wi,x+1)),children:"Next"})]})]})]}),n==="messages"&&d.jsxs("div",{className:"space-y-4",children:[vi.messages&&d.jsx(Kh,{rows:5}),!vi.messages&&Ps.map(x=>d.jsx("article",{className:"premium-card",children:d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:x.name}),d.jsx("span",{className:`rounded-full border px-2 py-1 text-[10px] uppercase ${x.responded?"border-emerald-300/35 text-emerald-200":"border-gold/30 text-gold"}`,children:x.responded?"Responded":"Pending"})]}),d.jsx("p",{className:"text-muted",children:x.email}),d.jsxs("p",{className:"mt-1 text-sm text-muted",children:["Phone: ",x.phone||x.number||"N/A"]}),d.jsx("p",{className:"mt-2 line-clamp-2 text-sm text-muted",children:x.message})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>Ut(x),children:"Read"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>Bo(x,!x.responded),children:x.responded?"Mark Pending":"Mark Responded"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200 disabled:opacity-40",disabled:!x.responded,onClick:()=>ye(x),children:"Delete"})]})]})},x.id)),d.jsxs("article",{className:"premium-card flex items-center justify-between py-3 text-sm text-muted",children:[d.jsxs("p",{children:["Page ",k," of ",xi]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:k===1,onClick:()=>b(x=>Math.max(1,x-1)),children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-1",disabled:k===xi,onClick:()=>b(x=>Math.min(xi,x+1)),children:"Next"})]})]})]}),n==="publications"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("form",{className:"premium-card space-y-4",onSubmit:Od,children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:j?"Edit Publication":"Add Publication"}),d.jsx("input",{className:"premium-input",placeholder:"Title",value:P.title,onChange:x=>N(D=>({...D,title:x.target.value})),required:!0}),d.jsx("textarea",{className:"premium-textarea",rows:"3",placeholder:"Description",value:P.description,onChange:x=>N(D=>({...D,description:x.target.value})),required:!0}),d.jsx("input",{className:"premium-input",placeholder:"Category",value:P.category,onChange:x=>N(D=>({...D,category:x.target.value})),required:!0}),d.jsx("textarea",{className:"premium-textarea",rows:"8",placeholder:"Write content (for in-site reading)",value:P.content,onChange:x=>N(D=>({...D,content:x.target.value}))}),d.jsx("input",{type:"date",className:"premium-input",value:P.date,onChange:x=>N(D=>({...D,date:x.target.value}))}),d.jsx("input",{type:"file",accept:"application/pdf",className:"premium-input",onChange:x=>{var D;return S(((D=x.target.files)==null?void 0:D[0])||null)}}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:Ye.publication,children:Ye.publication?"Saving...":j?"Update Publication":"Create Publication"})]}),vi.publications?d.jsx(Kh,{rows:4}):c.map(x=>d.jsx("article",{className:"premium-card",children:d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:x.title}),d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-gold",children:x.category}),d.jsx("p",{className:"text-xs text-muted",children:qh(x.date||x.createdAt)})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>Ti(x),children:"Edit"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200",onClick:()=>hn(x),children:"Delete"})]})]})},x.id))]}),n==="calendar"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("article",{className:"premium-card",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Availability Rules"}),d.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[d.jsx("input",{className:"premium-input min-w-[300px] flex-1",value:Te,onChange:x=>Jt(x.target.value)}),d.jsx("button",{type:"button",className:"premium-btn-primary",disabled:Ye.calendar,onClick:Rs,children:Ye.calendar?"Saving...":"Save Rules"})]})]}),d.jsxs("div",{className:"grid gap-6 xl:grid-cols-[1.5fr_1fr]",children:[d.jsxs("article",{className:"premium-card",children:[d.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:ne.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>me(x=>new Date(x.getFullYear(),x.getMonth()-1,1)),children:"Prev"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>me(x=>new Date(x.getFullYear(),x.getMonth()+1,1)),children:"Next"})]})]}),d.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>d.jsx("p",{className:"text-center text-xs uppercase tracking-[0.12em] text-muted",children:x},x)),Cs.map((x,D)=>{if(!x)return d.jsx("div",{className:"h-12"},`e-${D}`);const G=Be(x),X=Ns[G]||{booked:0,blocked:0},ge=(g.availableSlots||[]).length||1,ke=Kr(g.blockedDays||[]).includes(G)||X.blocked>=ge,Oe=ke||X.blocked>0,ct=X.booked>0;return d.jsx("button",{type:"button",className:`h-12 rounded-[10px] border text-sm ${ke?"border-red-300/35 bg-red-400/10 text-red-200":Oe?"border-red-300/30 bg-red-400/5 text-red-100 hover:bg-red-400/10":ct?"border-gold/35 bg-gold/15 text-ivory":"border-gold/20 text-muted hover:bg-gold/10"}`,onClick:()=>Ge(G),children:x.getDate()},G)})]})]}),d.jsxs("article",{className:"premium-card",children:[d.jsx("h3",{className:"font-serif text-2xl text-ivory",children:"Date Panel"}),!ae&&d.jsx("p",{className:"mt-3 text-sm text-muted",children:"Select a date to manage day and slot blocks."}),ae&&d.jsxs("div",{className:"mt-4 space-y-3",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-gold",children:ae}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200",onClick:()=>jd(ae),children:(g.blockedDays||[]).includes(ae)?"Unblock Full Day":"Block Full Day"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:(g.availableSlots||[]).map(x=>{const D=`${Be(ae)}__${x}`,G=Rd.has(D),X=Nd.has(D);return d.jsx("button",{type:"button",className:`rounded-[10px] border px-3 py-2 text-xs ${G?"border-red-300/35 bg-red-400/10 text-red-200":X?"border-gold/35 bg-gold/15 text-ivory hover:bg-gold/25":"border-gold/20 text-muted hover:bg-gold/10"}`,onClick:()=>{if(X){const[ge]=Pr[D]||[];ge&&I(ge);return}Un(ae,x)},children:x},x)})}),te.dateISO===Be(ae)&&te.time&&d.jsxs("div",{className:"mt-3 rounded-[12px] border border-gold/20 bg-ink/35 p-4",children:[d.jsx("p",{className:"text-xs uppercase tracking-[0.12em] text-gold",children:"Selected Slot"}),d.jsxs("p",{className:"mt-1 text-sm text-ivory",children:[te.dateISO," • ",te.time]}),d.jsxs("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[d.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded-[10px] border border-gold/20 px-3 py-2 text-xs text-muted",children:[d.jsx("input",{type:"radio",name:"slot-type",checked:te.type==="personal",onChange:()=>tt(x=>({...x,type:"personal"}))}),"Block no justification (personal time)"]}),d.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded-[10px] border border-gold/20 px-3 py-2 text-xs text-muted",children:[d.jsx("input",{type:"radio",name:"slot-type",checked:te.type==="client",onChange:()=>tt(x=>({...x,type:"client"}))}),"Block to book someone in"]})]}),te.type==="client"&&d.jsxs("div",{className:"mt-3 grid gap-3",children:[d.jsx("input",{type:"email",className:"premium-input",placeholder:"Client email",value:te.email,onChange:x=>tt(D=>({...D,email:x.target.value}))}),d.jsx("input",{type:"text",className:"premium-input",placeholder:"Client number",value:te.phone,onChange:x=>tt(D=>({...D,phone:x.target.value}))}),d.jsx("textarea",{rows:"3",className:"premium-textarea",placeholder:"Consultation summary",value:te.summary,onChange:x=>tt(D=>({...D,summary:x.target.value}))})]}),d.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[d.jsx("button",{type:"button",className:"premium-btn-primary",disabled:Ye.calendar,onClick:Dl,children:Ye.calendar?"Saving...":"Block Slot"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200",disabled:Ye.calendar,onClick:Ol,children:"Unblock Slot"}),d.jsx("button",{type:"button",className:"rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory",onClick:()=>tt(_c),children:"Cancel"})]})]})]})]})]})]}),n==="website-details"&&d.jsxs("form",{className:"premium-card space-y-4",onSubmit:Rl,children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Website Details"}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"GitHub Repo URL"}),d.jsx("input",{className:"premium-input",value:f.githubRepoUrl,onChange:x=>m(D=>({...D,githubRepoUrl:x.target.value}))})]}),d.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Hosting Provider"}),d.jsx("input",{className:"premium-input",value:f.hostingProvider,onChange:x=>m(D=>({...D,hostingProvider:x.target.value}))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Hosting Expiration"}),d.jsx("input",{type:"date",className:"premium-input",value:f.hostingExpiration,onChange:x=>m(D=>({...D,hostingExpiration:x.target.value}))})]})]}),d.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Domain Name"}),d.jsx("input",{className:"premium-input",value:f.domainName,onChange:x=>m(D=>({...D,domainName:x.target.value}))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Domain Host"}),d.jsx("input",{className:"premium-input",value:f.domainHost,onChange:x=>m(D=>({...D,domainHost:x.target.value}))})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"mb-2 block text-sm text-muted",children:"Domain Expiration"}),d.jsx("input",{type:"date",className:"premium-input",value:f.domainExpiration,onChange:x=>m(D=>({...D,domainExpiration:x.target.value}))})]}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:Ye.websiteDetails,children:Ye.websiteDetails?"Saving...":"Save Website Details"})]}),n==="admin-profile"&&d.jsxs("form",{className:"premium-card space-y-4",onSubmit:Ld,children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Admin Profile"}),d.jsx("p",{className:"text-sm text-muted",children:"Change password for the current admin account."}),d.jsx("input",{type:"password",className:"premium-input",placeholder:"New Password",value:Xt.newPassword,onChange:x=>Qe(D=>({...D,newPassword:x.target.value})),required:!0}),d.jsx("input",{type:"password",className:"premium-input",placeholder:"Confirm New Password",value:Xt.confirmPassword,onChange:x=>Qe(D=>({...D,confirmPassword:x.target.value})),required:!0}),d.jsx("button",{type:"submit",className:"premium-btn-primary",disabled:Ye.profile,children:Ye.profile?"Updating...":"Update Password"})]})]})]}),C&&d.jsx("div",{className:"fixed inset-0 z-[70] flex justify-end bg-ink/70 backdrop-blur-sm",children:d.jsxs("div",{className:"h-full w-full max-w-xl overflow-y-auto border-l border-gold/20 bg-charcoal p-6",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Booking Details"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-3 py-2 text-sm text-ivory",onClick:()=>I(null),children:"Close"})]}),d.jsxs("div",{className:"mt-6 space-y-4",children:[d.jsx("p",{className:"text-ivory",children:C.name}),d.jsx("p",{className:"text-muted",children:C.email}),d.jsx("p",{className:"text-muted",children:C.phone}),d.jsxs("p",{className:"text-muted",children:[C.date," • ",C.time]})]})]})}),we&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-2xl rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Message"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-3 py-2 text-sm text-ivory",onClick:()=>Ut(null),children:"Close"})]}),d.jsxs("div",{className:"mt-5 space-y-3",children:[d.jsx("p",{className:"text-ivory",children:we.name}),d.jsx("p",{className:"text-sm text-muted",children:we.email}),d.jsxs("p",{className:"text-sm text-muted",children:["Phone: ",we.phone||we.number||"N/A"]}),d.jsx("p",{className:"rounded-[12px] border border-gold/20 bg-ink/40 px-4 py-4 leading-relaxed text-muted",children:we.message})]})]})}),Tt&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Delete Publication"}),d.jsxs("p",{className:"mt-3 text-sm text-muted",children:["Delete “",Tt.title,"” permanently?"]}),d.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory",onClick:()=>hn(null),children:"Cancel"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200",onClick:Nl,disabled:Ye.deletePublication,children:Ye.deletePublication?"Deleting...":"Delete"})]})]})}),$&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Delete Booking"}),d.jsxs("p",{className:"mt-3 text-sm text-muted",children:["Delete booking for ",$.name,"?"]}),d.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory",onClick:()=>Y(null),children:"Cancel"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200",onClick:zo,disabled:Ye.deleteBooking,children:Ye.deleteBooking?"Deleting...":"Delete"})]})]})}),J&&d.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6",children:[d.jsx("h3",{className:"font-serif text-3xl text-ivory",children:"Delete Message"}),d.jsxs("p",{className:"mt-3 text-sm text-muted",children:["Delete message from ",J.name,"? (Responded only)"]}),d.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[d.jsx("button",{type:"button",className:"rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory",onClick:()=>ye(null),children:"Cancel"}),d.jsx("button",{type:"button",className:"rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200",onClick:jl,disabled:Ye.deleteMessage,children:Ye.deleteMessage?"Deleting...":"Delete"})]})]})}),Lo&&d.jsx("div",{className:"fixed right-6 top-6 z-[80]",children:d.jsx("div",{className:`rounded-[12px] border px-4 py-3 text-sm shadow-soft ${Lo.type==="success"?"border-emerald-300/35 bg-emerald-400/10 text-emerald-200":"border-red-300/35 bg-red-400/10 text-red-200"}`,children:Lo.message})})]})},vM=()=>d.jsxs(Ub,{children:[d.jsx(zt,{path:"/admin/login",element:d.jsx(SV,{})}),d.jsx(zt,{path:"/admin/dashboard",element:d.jsx(lV,{children:d.jsx(yM,{})})}),d.jsx(zt,{path:"/admin",element:d.jsx(fu,{to:"/admin/dashboard",replace:!0})}),d.jsxs(zt,{element:d.jsx(aP,{}),children:[d.jsx(zt,{path:"/",element:d.jsx(cV,{})}),d.jsx(zt,{path:"/about",element:d.jsx(fV,{})}),d.jsx(zt,{path:"/services",element:d.jsx(pV,{})}),d.jsx(zt,{path:"/programs",element:d.jsx(mV,{})}),d.jsx(zt,{path:"/publications",element:d.jsx(yV,{})}),d.jsx(zt,{path:"/publications/:id",element:d.jsx(_V,{})}),d.jsx(zt,{path:"/booking",element:d.jsx(TV,{})}),d.jsx(zt,{path:"/contact",element:d.jsx(IV,{})}),d.jsx(zt,{path:"*",element:d.jsx(fu,{to:"/",replace:!0})})]})]});Gh.createRoot(document.getElementById("root")).render(d.jsx(Tw.StrictMode,{children:d.jsx(aV,{children:d.jsx(dV,{children:d.jsx(Gb,{children:d.jsx(vM,{})})})})}));"serviceWorker"in navigator&&window.addEventListener("load",async()=>{navigator.serviceWorker.register("/sw.js").catch(t=>{console.error("Service worker registration failed:",t)})});
