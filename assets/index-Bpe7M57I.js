(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kc={exports:{}},Jl={},Sc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kr=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),Xd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),fo=Symbol.iterator;function am(e){return e===null||typeof e!="object"?null:(e=fo&&e[fo]||e["@@iterator"],typeof e=="function"?e:null)}var bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,Pc={};function Mn(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||bc}Mn.prototype.isReactComponent={};Mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=Mn.prototype;function ii(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||bc}var oi=ii.prototype=new Ec;oi.constructor=ii;Cc(oi,Mn.prototype);oi.isPureReactComponent=!0;var po=Array.isArray,zc=Object.prototype.hasOwnProperty,ci={current:null},Rc={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,s={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)zc.call(t,r)&&!Rc.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),m=0;m<c;m++)u[m]=arguments[m+2];s.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:kr,type:e,key:a,ref:i,props:s,_owner:ci.current}}function im(e,t){return{$$typeof:kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===kr}function om(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ho=/\/+/g;function Hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?om(""+e.key):t.toString(36)}function pl(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case kr:case Jd:i=!0}}if(i)return i=e,s=s(i),e=r===""?"."+Hs(i,0):r,po(s)?(n="",e!=null&&(n=e.replace(ho,"$&/")+"/"),pl(s,t,n,"",function(m){return m})):s!=null&&(ui(s)&&(s=im(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(ho,"$&/")+"/")+e)),t.push(s)),1;if(i=0,r=r===""?".":r+":",po(e))for(var c=0;c<e.length;c++){a=e[c];var u=r+Hs(a,c);i+=pl(a,t,n,u,s)}else if(u=am(e),typeof u=="function")for(e=u.call(e),c=0;!(a=e.next()).done;)a=a.value,u=r+Hs(a,c++),i+=pl(a,t,n,u,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Xr(e,t,n){if(e==null)return e;var r=[],s=0;return pl(e,r,"","",function(a){return t.call(n,a,s++)}),r}function cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},hl={transition:null},um={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:hl,ReactCurrentOwner:ci};function Tc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Mn;B.Fragment=Xd;B.Profiler=qd;B.PureComponent=ii;B.StrictMode=Zd;B.Suspense=rm;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=um;B.act=Tc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),s=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=ci.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)zc.call(t,u)&&!Rc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var m=0;m<u;m++)c[m]=arguments[m+2];r.children=c}return{$$typeof:kr,type:e.type,key:s,ref:a,props:r,_owner:i}};B.createContext=function(e){return e={$$typeof:tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:em,_context:e},e.Consumer=e};B.createElement=Lc;B.createFactory=function(e){var t=Lc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:nm,render:e}};B.isValidElement=ui;B.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:cm}};B.memo=function(e,t){return{$$typeof:lm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=hl.transition;hl.transition={};try{e()}finally{hl.transition=t}};B.unstable_act=Tc;B.useCallback=function(e,t){return ye.current.useCallback(e,t)};B.useContext=function(e){return ye.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};B.useEffect=function(e,t){return ye.current.useEffect(e,t)};B.useId=function(){return ye.current.useId()};B.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ye.current.useMemo(e,t)};B.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};B.useRef=function(e){return ye.current.useRef(e)};B.useState=function(e){return ye.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return ye.current.useTransition()};B.version="18.3.1";Sc.exports=B;var E=Sc.exports;const dm=Kd(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm=E,fm=Symbol.for("react.element"),pm=Symbol.for("react.fragment"),hm=Object.prototype.hasOwnProperty,gm=mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,s={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)hm.call(t,r)&&!vm.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:fm,type:e,key:a,ref:i,props:s,_owner:gm.current}}Jl.Fragment=pm;Jl.jsx=_c;Jl.jsxs=_c;kc.exports=Jl;var l=kc.exports,pa={},Mc={exports:{}},_e={},Fc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var $=z.length;z.push(M);e:for(;0<$;){var W=$-1>>>1,K=z[W];if(0<s(K,M))z[W]=M,z[$]=K,$=W;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],$=z.pop();if($!==M){z[0]=$;e:for(var W=0,K=z.length,Ue=K>>>1;W<Ue;){var Ne=2*(W+1)-1,Ze=z[Ne],we=Ne+1,Ve=z[we];if(0>s(Ze,$))we<K&&0>s(Ve,Ze)?(z[W]=Ve,z[we]=$,W=we):(z[W]=Ze,z[Ne]=$,W=Ne);else if(we<K&&0>s(Ve,$))z[W]=Ve,z[we]=$,W=we;else break e}}return M}function s(z,M){var $=z.sortIndex-M.sortIndex;return $!==0?$:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,c=i.now();e.unstable_now=function(){return i.now()-c}}var u=[],m=[],y=1,x=null,h=3,N=!1,b=!1,j=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var M=n(m);M!==null;){if(M.callback===null)r(m);else if(M.startTime<=z)r(m),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(m)}}function g(z){if(j=!1,p(z),!b)if(n(u)!==null)b=!0,ie(C);else{var M=n(m);M!==null&&Fe(g,M.startTime-z)}}function C(z,M){b=!1,j&&(j=!1,f(v),v=-1),N=!0;var $=h;try{for(p(M),x=n(u);x!==null&&(!(x.expirationTime>M)||z&&!P());){var W=x.callback;if(typeof W=="function"){x.callback=null,h=x.priorityLevel;var K=W(x.expirationTime<=M);M=e.unstable_now(),typeof K=="function"?x.callback=K:x===n(u)&&r(u),p(M)}else r(u);x=n(u)}if(x!==null)var Ue=!0;else{var Ne=n(m);Ne!==null&&Fe(g,Ne.startTime-M),Ue=!1}return Ue}finally{x=null,h=$,N=!1}}var R=!1,L=null,v=-1,D=5,O=-1;function P(){return!(e.unstable_now()-O<D)}function k(){if(L!==null){var z=e.unstable_now();O=z;var M=!0;try{M=L(!0,z)}finally{M?_():(R=!1,L=null)}}else R=!1}var _;if(typeof d=="function")_=function(){d(k)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,U=A.port2;A.port1.onmessage=k,_=function(){U.postMessage(null)}}else _=function(){I(k,0)};function ie(z){L=z,R||(R=!0,_())}function Fe(z,M){v=I(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){b||N||(b=!0,ie(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var $=h;h=M;try{return z()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=h;h=z;try{return M()}finally{h=$}},e.unstable_scheduleCallback=function(z,M,$){var W=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?W+$:W):$=W,z){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=$+K,z={id:y++,callback:M,priorityLevel:z,startTime:$,expirationTime:K,sortIndex:-1},$>W?(z.sortIndex=$,t(m,z),n(u)===null&&z===n(m)&&(j?(f(v),v=-1):j=!0,Fe(g,$-W))):(z.sortIndex=K,t(u,z),b||N||(b=!0,ie(C))),z},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(z){var M=h;return function(){var $=h;h=M;try{return z.apply(this,arguments)}finally{h=$}}}})(Ic);Fc.exports=Ic;var xm=Fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=E,Te=xm;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,ar={};function Yt(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(ar[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,go={},vo={};function Nm(e){return ha.call(vo,e)?!0:ha.call(go,e)?!1:jm.test(e)?vo[e]=!0:(go[e]=!0,!1)}function wm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function km(e,t,n,r){if(t===null||typeof t>"u"||wm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,s,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var di=/[\-:]([a-z])/g;function mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(di,mi);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(di,mi);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(di,mi);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function fi(e,t,n,r){var s=me.hasOwnProperty(t)?me[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(km(t,n,s,r)&&(n=null),r||s===null?Nm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),pi=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),hi=Symbol.for("react.forward_ref"),va=Symbol.for("react.suspense"),xa=Symbol.for("react.suspense_list"),gi=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Ac=Symbol.for("react.offscreen"),xo=Symbol.iterator;function Dn(e){return e===null||typeof e!="object"?null:(e=xo&&e[xo]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Us;function Yn(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var Vs=!1;function Ws(e,t){if(!e||Vs)return"";Vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var s=m.stack.split(`
`),a=r.stack.split(`
`),i=s.length-1,c=a.length-1;1<=i&&0<=c&&s[i]!==a[c];)c--;for(;1<=i&&0<=c;i--,c--)if(s[i]!==a[c]){if(i!==1||c!==1)do if(i--,c--,0>c||s[i]!==a[c]){var u=`
`+s[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=c);break}}}finally{Vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function Sm(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=Ws(e.type,!1),e;case 11:return e=Ws(e.type.render,!1),e;case 1:return e=Ws(e.type,!0),e;default:return""}}function ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case cn:return"Portal";case ga:return"Profiler";case pi:return"StrictMode";case va:return"Suspense";case xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dc:return(e.displayName||"Context")+".Consumer";case $c:return(e._context.displayName||"Context")+".Provider";case hi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gi:return t=e.displayName||null,t!==null?t:ya(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return ya(e(t))}catch{}}return null}function bm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ya(t);case 8:return t===pi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cm(e){var t=Bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=Cm(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uc(e,t){t=t.checked,t!=null&&fi(e,"checked",t,!1)}function Na(e,t){Uc(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wa(e,t.type,n):t.hasOwnProperty("defaultValue")&&wa(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wa(e,t,n){(t!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ka(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function No(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Gn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function Vc(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var el,Qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=el.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function Yc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Yc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Em=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(e,t){if(t){if(Em[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ea=null,wn=null,kn=null;function ko(e){if(e=Cr(e)){if(typeof Ea!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ts(t),Ea(e.stateNode,e.type,t))}}function Kc(e){wn?kn?kn.push(e):kn=[e]:wn=e}function Jc(){if(wn){var e=wn,t=kn;if(kn=wn=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function Xc(e,t){return e(t)}function Zc(){}var Qs=!1;function qc(e,t,n){if(Qs)return e(t,n);Qs=!0;try{return Xc(e,t,n)}finally{Qs=!1,(wn!==null||kn!==null)&&(Zc(),Jc())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var za=!1;if(ut)try{var An={};Object.defineProperty(An,"passive",{get:function(){za=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{za=!1}function zm(e,t,n,r,s,a,i,c,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var Zn=!1,Pl=null,El=!1,Ra=null,Rm={onError:function(e){Zn=!0,Pl=e}};function Lm(e,t,n,r,s,a,i,c,u){Zn=!1,Pl=null,zm.apply(Rm,arguments)}function Tm(e,t,n,r,s,a,i,c,u){if(Lm.apply(this,arguments),Zn){if(Zn){var m=Pl;Zn=!1,Pl=null}else throw Error(S(198));El||(El=!0,Ra=m)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function So(e){if(Gt(e)!==e)throw Error(S(188))}function _m(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return So(s),e;if(a===r)return So(s),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=s,r=a;else{for(var i=!1,c=s.child;c;){if(c===n){i=!0,n=s,r=a;break}if(c===r){i=!0,r=s,n=a;break}c=c.sibling}if(!i){for(c=a.child;c;){if(c===n){i=!0,n=a,r=s;break}if(c===r){i=!0,r=a,n=s;break}c=c.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function tu(e){return e=_m(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nu(e);if(t!==null)return t;e=e.sibling}return null}var ru=Te.unstable_scheduleCallback,bo=Te.unstable_cancelCallback,Mm=Te.unstable_shouldYield,Fm=Te.unstable_requestPaint,ne=Te.unstable_now,Im=Te.unstable_getCurrentPriorityLevel,xi=Te.unstable_ImmediatePriority,lu=Te.unstable_UserBlockingPriority,zl=Te.unstable_NormalPriority,Om=Te.unstable_LowPriority,su=Te.unstable_IdlePriority,Xl=null,rt=null;function $m(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Bm,Dm=Math.log,Am=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(Dm(e)/Am|0)|0}var tl=64,nl=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var c=i&~s;c!==0?r=Kn(c):(a&=i,a!==0&&(r=Kn(a)))}else i=n&~s,i!==0?r=Kn(i):a!==0&&(r=Kn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),s=1<<n,r|=e[n],t&=~s;return r}function Hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Um(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Ke(a),c=1<<i,u=s[i];u===-1?(!(c&n)||c&r)&&(s[i]=Hm(c,t)):u<=t&&(e.expiredLanes|=c),a&=~c}}function La(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function au(){var e=tl;return tl<<=1,!(tl&4194240)&&(tl=64),e}function Ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Vm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ke(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function yi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var V=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,ji,cu,uu,du,Ta=!1,rl=[],wt=null,kt=null,St=null,cr=new Map,ur=new Map,xt=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Co(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(t.pointerId)}}function Bn(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Cr(t),t!==null&&ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Qm(e,t,n,r,s){switch(t){case"focusin":return wt=Bn(wt,e,t,n,r,s),!0;case"dragenter":return kt=Bn(kt,e,t,n,r,s),!0;case"mouseover":return St=Bn(St,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return cr.set(a,Bn(cr.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,ur.set(a,Bn(ur.get(a)||null,e,t,n,r,s)),!0}return!1}function mu(e){var t=Ot(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=eu(n),t!==null){e.blockedOn=t,du(e.priority,function(){cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return t=Cr(n),t!==null&&ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Po(e,t,n){gl(e)&&n.delete(t)}function Ym(){Ta=!1,wt!==null&&gl(wt)&&(wt=null),kt!==null&&gl(kt)&&(kt=null),St!==null&&gl(St)&&(St=null),cr.forEach(Po),ur.forEach(Po)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ta||(Ta=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Ym)))}function dr(e){function t(s){return Hn(s,e)}if(0<rl.length){Hn(rl[0],e);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Hn(wt,e),kt!==null&&Hn(kt,e),St!==null&&Hn(St,e),cr.forEach(t),ur.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)mu(n),n.blockedOn===null&&xt.shift()}var Sn=pt.ReactCurrentBatchConfig,Ll=!0;function Gm(e,t,n,r){var s=V,a=Sn.transition;Sn.transition=null;try{V=1,Ni(e,t,n,r)}finally{V=s,Sn.transition=a}}function Km(e,t,n,r){var s=V,a=Sn.transition;Sn.transition=null;try{V=4,Ni(e,t,n,r)}finally{V=s,Sn.transition=a}}function Ni(e,t,n,r){if(Ll){var s=_a(e,t,n,r);if(s===null)ra(e,t,r,Tl,n),Co(e,r);else if(Qm(s,e,t,n,r))r.stopPropagation();else if(Co(e,r),t&4&&-1<Wm.indexOf(e)){for(;s!==null;){var a=Cr(s);if(a!==null&&ou(a),a=_a(e,t,n,r),a===null&&ra(e,t,r,Tl,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else ra(e,t,r,null,n)}}var Tl=null;function _a(e,t,n,r){if(Tl=null,e=vi(r),e=Ot(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tl=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Im()){case xi:return 1;case lu:return 4;case zl:case Om:return 16;case su:return 536870912;default:return 16}default:return 16}}var jt=null,wi=null,vl=null;function pu(){if(vl)return vl;var e,t=wi,n=t.length,r,s="value"in jt?jt.value:jt.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===s[a-r];r++);return vl=s.slice(e,1<r?1-r:void 0)}function xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Eo(){return!1}function Me(e){function t(n,r,s,a,i){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ll:Eo,this.isPropagationStopped=Eo,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=Me(Fn),br=q({},Fn,{view:0,detail:0}),Jm=Me(br),Gs,Ks,Un,Zl=q({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(Gs=e.screenX-Un.screenX,Ks=e.screenY-Un.screenY):Ks=Gs=0,Un=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),zo=Me(Zl),Xm=q({},Zl,{dataTransfer:0}),Zm=Me(Xm),qm=q({},br,{relatedTarget:0}),Js=Me(qm),ef=q({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),tf=Me(ef),nf=q({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rf=Me(nf),lf=q({},Fn,{data:0}),Ro=Me(lf),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function Si(){return cf}var uf=q({},br,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Si,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),df=Me(uf),mf=q({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=Me(mf),ff=q({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Si}),pf=Me(ff),hf=q({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gf=Me(hf),vf=q({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=Me(vf),yf=[9,13,27,32],bi=ut&&"CompositionEvent"in window,qn=null;ut&&"documentMode"in document&&(qn=document.documentMode);var jf=ut&&"TextEvent"in window&&!qn,hu=ut&&(!bi||qn&&8<qn&&11>=qn),To=" ",_o=!1;function gu(e,t){switch(e){case"keyup":return yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Nf(e,t){switch(e){case"compositionend":return vu(t);case"keypress":return t.which!==32?null:(_o=!0,To);case"textInput":return e=t.data,e===To&&_o?null:e;default:return null}}function wf(e,t){if(dn)return e==="compositionend"||!bi&&gu(e,t)?(e=pu(),vl=wi=jt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hu&&t.locale!=="ko"?null:t.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kf[e.type]:t==="textarea"}function xu(e,t,n,r){Kc(r),t=_l(t,"onChange"),0<t.length&&(n=new ki("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,mr=null;function Sf(e){zu(e,0)}function ql(e){var t=pn(e);if(Hc(t))return e}function bf(e,t){if(e==="change")return t}var yu=!1;if(ut){var Xs;if(ut){var Zs="oninput"in document;if(!Zs){var Fo=document.createElement("div");Fo.setAttribute("oninput","return;"),Zs=typeof Fo.oninput=="function"}Xs=Zs}else Xs=!1;yu=Xs&&(!document.documentMode||9<document.documentMode)}function Io(){er&&(er.detachEvent("onpropertychange",ju),mr=er=null)}function ju(e){if(e.propertyName==="value"&&ql(mr)){var t=[];xu(t,mr,e,vi(e)),qc(Sf,t)}}function Cf(e,t,n){e==="focusin"?(Io(),er=t,mr=n,er.attachEvent("onpropertychange",ju)):e==="focusout"&&Io()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(mr)}function Ef(e,t){if(e==="click")return ql(t)}function zf(e,t){if(e==="input"||e==="change")return ql(t)}function Rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Rf;function fr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ha.call(t,s)||!Xe(e[s],t[s]))return!1}return!0}function Oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $o(e,t){var n=Oo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oo(n)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wu(){for(var e=window,t=Cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cl(e.document)}return t}function Ci(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=wu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nu(n.ownerDocument.documentElement,n)){if(r!==null&&Ci(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=$o(n,a);var i=$o(n,r);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=ut&&"documentMode"in document&&11>=document.documentMode,mn=null,Ma=null,tr=null,Fa=!1;function Do(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fa||mn==null||mn!==Cl(r)||(r=mn,"selectionStart"in r&&Ci(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&fr(tr,r)||(tr=r,r=_l(Ma,"onSelect"),0<r.length&&(t=new ki("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function sl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},qs={},ku={};ut&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function es(e){if(qs[e])return qs[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ku)return qs[e]=t[n];return e}var Su=es("animationend"),bu=es("animationiteration"),Cu=es("animationstart"),Pu=es("transitionend"),Eu=new Map,Ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Eu.set(e,t),Yt(t,[e])}for(var ea=0;ea<Ao.length;ea++){var ta=Ao[ea],_f=ta.toLowerCase(),Mf=ta[0].toUpperCase()+ta.slice(1);Tt(_f,"on"+Mf)}Tt(Su,"onAnimationEnd");Tt(bu,"onAnimationIteration");Tt(Cu,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Pu,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tm(r,t,void 0,e),e.currentTarget=null}function zu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var c=r[i],u=c.instance,m=c.currentTarget;if(c=c.listener,u!==a&&s.isPropagationStopped())break e;Bo(s,c,m),a=u}else for(i=0;i<r.length;i++){if(c=r[i],u=c.instance,m=c.currentTarget,c=c.listener,u!==a&&s.isPropagationStopped())break e;Bo(s,c,m),a=u}}}if(El)throw e=Ra,El=!1,Ra=null,e}function Y(e,t){var n=t[Aa];n===void 0&&(n=t[Aa]=new Set);var r=e+"__bubble";n.has(r)||(Ru(t,e,2,!1),n.add(r))}function na(e,t,n){var r=0;t&&(r|=4),Ru(n,e,r,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[al]){e[al]=!0,Oc.forEach(function(n){n!=="selectionchange"&&(Ff.has(n)||na(n,!1,e),na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,na("selectionchange",!1,t))}}function Ru(e,t,n,r){switch(fu(t)){case 1:var s=Gm;break;case 4:s=Km;break;default:s=Ni}n=s.bind(null,t,n,e),s=void 0,!za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ra(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;i=i.return}for(;c!==null;){if(i=Ot(c),i===null)return;if(u=i.tag,u===5||u===6){r=a=i;continue e}c=c.parentNode}}r=r.return}qc(function(){var m=a,y=vi(n),x=[];e:{var h=Eu.get(e);if(h!==void 0){var N=ki,b=e;switch(e){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":N=df;break;case"focusin":b="focus",N=Js;break;case"focusout":b="blur",N=Js;break;case"beforeblur":case"afterblur":N=Js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=pf;break;case Su:case bu:case Cu:N=tf;break;case Pu:N=gf;break;case"scroll":N=Jm;break;case"wheel":N=xf;break;case"copy":case"cut":case"paste":N=rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Lo}var j=(t&4)!==0,I=!j&&e==="scroll",f=j?h!==null?h+"Capture":null:h;j=[];for(var d=m,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=or(d,f),g!=null&&j.push(hr(d,g,p)))),I)break;d=d.return}0<j.length&&(h=new N(h,b,null,n,y),x.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",h&&n!==Pa&&(b=n.relatedTarget||n.fromElement)&&(Ot(b)||b[dt]))break e;if((N||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,N?(b=n.relatedTarget||n.toElement,N=m,b=b?Ot(b):null,b!==null&&(I=Gt(b),b!==I||b.tag!==5&&b.tag!==6)&&(b=null)):(N=null,b=m),N!==b)){if(j=zo,g="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=Lo,g="onPointerLeave",f="onPointerEnter",d="pointer"),I=N==null?h:pn(N),p=b==null?h:pn(b),h=new j(g,d+"leave",N,n,y),h.target=I,h.relatedTarget=p,g=null,Ot(y)===m&&(j=new j(f,d+"enter",b,n,y),j.target=p,j.relatedTarget=I,g=j),I=g,N&&b)t:{for(j=N,f=b,d=0,p=j;p;p=on(p))d++;for(p=0,g=f;g;g=on(g))p++;for(;0<d-p;)j=on(j),d--;for(;0<p-d;)f=on(f),p--;for(;d--;){if(j===f||f!==null&&j===f.alternate)break t;j=on(j),f=on(f)}j=null}else j=null;N!==null&&Ho(x,h,N,j,!1),b!==null&&I!==null&&Ho(x,I,b,j,!0)}}e:{if(h=m?pn(m):window,N=h.nodeName&&h.nodeName.toLowerCase(),N==="select"||N==="input"&&h.type==="file")var C=bf;else if(Mo(h))if(yu)C=zf;else{C=Pf;var R=Cf}else(N=h.nodeName)&&N.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ef);if(C&&(C=C(e,m))){xu(x,C,n,y);break e}R&&R(e,h,m),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&wa(h,"number",h.value)}switch(R=m?pn(m):window,e){case"focusin":(Mo(R)||R.contentEditable==="true")&&(mn=R,Ma=m,tr=null);break;case"focusout":tr=Ma=mn=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,Do(x,n,y);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":Do(x,n,y)}var L;if(bi)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else dn?gu(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(hu&&n.locale!=="ko"&&(dn||v!=="onCompositionStart"?v==="onCompositionEnd"&&dn&&(L=pu()):(jt=y,wi="value"in jt?jt.value:jt.textContent,dn=!0)),R=_l(m,v),0<R.length&&(v=new Ro(v,e,null,n,y),x.push({event:v,listeners:R}),L?v.data=L:(L=vu(n),L!==null&&(v.data=L)))),(L=jf?Nf(e,n):wf(e,n))&&(m=_l(m,"onBeforeInput"),0<m.length&&(y=new Ro("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:m}),y.data=L))}zu(x,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _l(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=or(e,n),a!=null&&r.unshift(hr(e,a,s)),a=or(e,t),a!=null&&r.push(hr(e,a,s))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ho(e,t,n,r,s){for(var a=t._reactName,i=[];n!==null&&n!==r;){var c=n,u=c.alternate,m=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&m!==null&&(c=m,s?(u=or(n,a),u!=null&&i.unshift(hr(n,u,c))):s||(u=or(n,a),u!=null&&i.push(hr(n,u,c)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var If=/\r\n?/g,Of=/\u0000|\uFFFD/g;function Uo(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(Of,"")}function il(e,t,n){if(t=Uo(t),Uo(e)!==t&&n)throw Error(S(425))}function Ml(){}var Ia=null,Oa=null;function $a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,Vo=typeof Promise=="function"?Promise:void 0,Df=typeof queueMicrotask=="function"?queueMicrotask:typeof Vo<"u"?function(e){return Vo.resolve(null).then(e).catch(Af)}:Da;function Af(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);dr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),nt="__reactFiber$"+In,gr="__reactProps$"+In,dt="__reactContainer$"+In,Aa="__reactEvents$"+In,Bf="__reactListeners$"+In,Hf="__reactHandles$"+In;function Ot(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wo(e);e!==null;){if(n=e[nt])return n;e=Wo(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ts(e){return e[gr]||null}var Ba=[],hn=-1;function _t(e){return{current:e}}function G(e){0>hn||(e.current=Ba[hn],Ba[hn]=null,hn--)}function Q(e,t){hn++,Ba[hn]=e.current,e.current=t}var Lt={},ge=_t(Lt),be=_t(!1),Ht=Lt;function En(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ce(e){return e=e.childContextTypes,e!=null}function Fl(){G(be),G(ge)}function Qo(e,t,n){if(ge.current!==Lt)throw Error(S(168));Q(ge,t),Q(be,n)}function Lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(S(108,bm(e)||"Unknown",s));return q({},n,r)}function Il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Ht=ge.current,Q(ge,e),Q(be,be.current),!0}function Yo(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Lu(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,G(be),G(ge),Q(ge,e)):G(be),Q(be,n)}var at=null,ns=!1,sa=!1;function Tu(e){at===null?at=[e]:at.push(e)}function Uf(e){ns=!0,Tu(e)}function Mt(){if(!sa&&at!==null){sa=!0;var e=0,t=V;try{var n=at;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,ns=!1}catch(s){throw at!==null&&(at=at.slice(e+1)),ru(xi,Mt),s}finally{V=t,sa=!1}}return null}var gn=[],vn=0,Ol=null,$l=0,Oe=[],$e=0,Ut=null,it=1,ot="";function Ft(e,t){gn[vn++]=$l,gn[vn++]=Ol,Ol=e,$l=t}function _u(e,t,n){Oe[$e++]=it,Oe[$e++]=ot,Oe[$e++]=Ut,Ut=e;var r=it;e=ot;var s=32-Ke(r)-1;r&=~(1<<s),n+=1;var a=32-Ke(t)+s;if(30<a){var i=s-s%5;a=(r&(1<<i)-1).toString(32),r>>=i,s-=i,it=1<<32-Ke(t)+s|n<<s|r,ot=a+e}else it=1<<a|n<<s|r,ot=e}function Pi(e){e.return!==null&&(Ft(e,1),_u(e,1,0))}function Ei(e){for(;e===Ol;)Ol=gn[--vn],gn[vn]=null,$l=gn[--vn],gn[vn]=null;for(;e===Ut;)Ut=Oe[--$e],Oe[$e]=null,ot=Oe[--$e],Oe[$e]=null,it=Oe[--$e],Oe[$e]=null}var Le=null,Re=null,J=!1,Ge=null;function Mu(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Go(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Re=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Re=null,!0):!1;default:return!1}}function Ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ua(e){if(J){var t=Re;if(t){var n=t;if(!Go(e,t)){if(Ha(e))throw Error(S(418));t=bt(n.nextSibling);var r=Le;t&&Go(e,t)?Mu(r,n):(e.flags=e.flags&-4097|2,J=!1,Le=e)}}else{if(Ha(e))throw Error(S(418));e.flags=e.flags&-4097|2,J=!1,Le=e}}}function Ko(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ol(e){if(e!==Le)return!1;if(!J)return Ko(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$a(e.type,e.memoizedProps)),t&&(t=Re)){if(Ha(e))throw Fu(),Error(S(418));for(;t;)Mu(e,t),t=bt(t.nextSibling)}if(Ko(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Le?bt(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=Re;e;)e=bt(e.nextSibling)}function zn(){Re=Le=null,J=!1}function zi(e){Ge===null?Ge=[e]:Ge.push(e)}var Vf=pt.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var c=s.refs;i===null?delete c[a]:c[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function cl(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jo(e){var t=e._init;return t(e._payload)}function Iu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function s(f,d){return f=zt(f,d),f.index=0,f.sibling=null,f}function a(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,d,p,g){return d===null||d.tag!==6?(d=ma(p,f.mode,g),d.return=f,d):(d=s(d,p),d.return=f,d)}function u(f,d,p,g){var C=p.type;return C===un?y(f,d,p.props.children,g,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&Jo(C)===d.type)?(g=s(d,p.props),g.ref=Vn(f,d,p),g.return=f,g):(g=bl(p.type,p.key,p.props,null,f.mode,g),g.ref=Vn(f,d,p),g.return=f,g)}function m(f,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=fa(p,f.mode,g),d.return=f,d):(d=s(d,p.children||[]),d.return=f,d)}function y(f,d,p,g,C){return d===null||d.tag!==7?(d=Bt(p,f.mode,g,C),d.return=f,d):(d=s(d,p),d.return=f,d)}function x(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ma(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Zr:return p=bl(d.type,d.key,d.props,null,f.mode,p),p.ref=Vn(f,null,d),p.return=f,p;case cn:return d=fa(d,f.mode,p),d.return=f,d;case gt:var g=d._init;return x(f,g(d._payload),p)}if(Gn(d)||Dn(d))return d=Bt(d,f.mode,p,null),d.return=f,d;cl(f,d)}return null}function h(f,d,p,g){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:c(f,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zr:return p.key===C?u(f,d,p,g):null;case cn:return p.key===C?m(f,d,p,g):null;case gt:return C=p._init,h(f,d,C(p._payload),g)}if(Gn(p)||Dn(p))return C!==null?null:y(f,d,p,g,null);cl(f,p)}return null}function N(f,d,p,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,c(d,f,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zr:return f=f.get(g.key===null?p:g.key)||null,u(d,f,g,C);case cn:return f=f.get(g.key===null?p:g.key)||null,m(d,f,g,C);case gt:var R=g._init;return N(f,d,p,R(g._payload),C)}if(Gn(g)||Dn(g))return f=f.get(p)||null,y(d,f,g,C,null);cl(d,g)}return null}function b(f,d,p,g){for(var C=null,R=null,L=d,v=d=0,D=null;L!==null&&v<p.length;v++){L.index>v?(D=L,L=null):D=L.sibling;var O=h(f,L,p[v],g);if(O===null){L===null&&(L=D);break}e&&L&&O.alternate===null&&t(f,L),d=a(O,d,v),R===null?C=O:R.sibling=O,R=O,L=D}if(v===p.length)return n(f,L),J&&Ft(f,v),C;if(L===null){for(;v<p.length;v++)L=x(f,p[v],g),L!==null&&(d=a(L,d,v),R===null?C=L:R.sibling=L,R=L);return J&&Ft(f,v),C}for(L=r(f,L);v<p.length;v++)D=N(L,f,v,p[v],g),D!==null&&(e&&D.alternate!==null&&L.delete(D.key===null?v:D.key),d=a(D,d,v),R===null?C=D:R.sibling=D,R=D);return e&&L.forEach(function(P){return t(f,P)}),J&&Ft(f,v),C}function j(f,d,p,g){var C=Dn(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var R=C=null,L=d,v=d=0,D=null,O=p.next();L!==null&&!O.done;v++,O=p.next()){L.index>v?(D=L,L=null):D=L.sibling;var P=h(f,L,O.value,g);if(P===null){L===null&&(L=D);break}e&&L&&P.alternate===null&&t(f,L),d=a(P,d,v),R===null?C=P:R.sibling=P,R=P,L=D}if(O.done)return n(f,L),J&&Ft(f,v),C;if(L===null){for(;!O.done;v++,O=p.next())O=x(f,O.value,g),O!==null&&(d=a(O,d,v),R===null?C=O:R.sibling=O,R=O);return J&&Ft(f,v),C}for(L=r(f,L);!O.done;v++,O=p.next())O=N(L,f,v,O.value,g),O!==null&&(e&&O.alternate!==null&&L.delete(O.key===null?v:O.key),d=a(O,d,v),R===null?C=O:R.sibling=O,R=O);return e&&L.forEach(function(k){return t(f,k)}),J&&Ft(f,v),C}function I(f,d,p,g){if(typeof p=="object"&&p!==null&&p.type===un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Zr:e:{for(var C=p.key,R=d;R!==null;){if(R.key===C){if(C=p.type,C===un){if(R.tag===7){n(f,R.sibling),d=s(R,p.props.children),d.return=f,f=d;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gt&&Jo(C)===R.type){n(f,R.sibling),d=s(R,p.props),d.ref=Vn(f,R,p),d.return=f,f=d;break e}n(f,R);break}else t(f,R);R=R.sibling}p.type===un?(d=Bt(p.props.children,f.mode,g,p.key),d.return=f,f=d):(g=bl(p.type,p.key,p.props,null,f.mode,g),g.ref=Vn(f,d,p),g.return=f,f=g)}return i(f);case cn:e:{for(R=p.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=s(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=fa(p,f.mode,g),d.return=f,f=d}return i(f);case gt:return R=p._init,I(f,d,R(p._payload),g)}if(Gn(p))return b(f,d,p,g);if(Dn(p))return j(f,d,p,g);cl(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=s(d,p),d.return=f,f=d):(n(f,d),d=ma(p,f.mode,g),d.return=f,f=d),i(f)):n(f,d)}return I}var Rn=Iu(!0),Ou=Iu(!1),Dl=_t(null),Al=null,xn=null,Ri=null;function Li(){Ri=xn=Al=null}function Ti(e){var t=Dl.current;G(Dl),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bn(e,t){Al=e,Ri=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Ri!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(Al===null)throw Error(S(308));xn=e,Al.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var $t=null;function _i(e){$t===null?$t=[e]:$t.push(e)}function $u(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,_i(t)):(n.next=s.next,s.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,mt(e,n)}return s=r.interleaved,s===null?(t.next=t,_i(r)):(t.next=s.next,s.next=t),r.interleaved=t,mt(e,n)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yi(e,n)}}function Xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bl(e,t,n,r){var s=e.updateQueue;vt=!1;var a=s.firstBaseUpdate,i=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,m=u.next;u.next=null,i===null?a=m:i.next=m,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==i&&(c===null?y.firstBaseUpdate=m:c.next=m,y.lastBaseUpdate=u))}if(a!==null){var x=s.baseState;i=0,y=m=u=null,c=a;do{var h=c.lane,N=c.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:N,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,j=c;switch(h=t,N=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){x=b.call(N,x,h);break e}x=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,h=typeof b=="function"?b.call(N,x,h):b,h==null)break e;x=q({},x,h);break e;case 2:vt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[c]:h.push(c))}else N={eventTime:N,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(m=y=N,u=x):y=y.next=N,i|=h;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;h=c,c=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(y===null&&(u=x),s.baseState=u,s.firstBaseUpdate=m,s.lastBaseUpdate=y,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=x}}function Zo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(S(191,s));s.call(r)}}}var Pr={},lt=_t(Pr),vr=_t(Pr),xr=_t(Pr);function Dt(e){if(e===Pr)throw Error(S(174));return e}function Fi(e,t){switch(Q(xr,t),Q(vr,e),Q(lt,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sa(t,e)}G(lt),Q(lt,t)}function Ln(){G(lt),G(vr),G(xr)}function Au(e){Dt(xr.current);var t=Dt(lt.current),n=Sa(t,e.type);t!==n&&(Q(vr,e),Q(lt,n))}function Ii(e){vr.current===e&&(G(lt),G(vr))}var X=_t(0);function Hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=[];function Oi(){for(var e=0;e<aa.length;e++)aa[e]._workInProgressVersionPrimary=null;aa.length=0}var jl=pt.ReactCurrentDispatcher,ia=pt.ReactCurrentBatchConfig,Vt=0,Z=null,se=null,oe=null,Ul=!1,nr=!1,yr=0,Wf=0;function fe(){throw Error(S(321))}function $i(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Di(e,t,n,r,s,a){if(Vt=a,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jl.current=e===null||e.memoizedState===null?Kf:Jf,e=n(r,s),nr){a=0;do{if(nr=!1,yr=0,25<=a)throw Error(S(301));a+=1,oe=se=null,t.updateQueue=null,jl.current=Xf,e=n(r,s)}while(nr)}if(jl.current=Vl,t=se!==null&&se.next!==null,Vt=0,oe=se=Z=null,Ul=!1,t)throw Error(S(300));return e}function Ai(){var e=yr!==0;return yr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Z.memoizedState=oe=e:oe=oe.next=e,oe}function He(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=oe===null?Z.memoizedState:oe.next;if(t!==null)oe=t,se=e;else{if(e===null)throw Error(S(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},oe===null?Z.memoizedState=oe=e:oe=oe.next=e}return oe}function jr(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=se,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var i=s.next;s.next=a.next,a.next=i}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var c=i=null,u=null,m=a;do{var y=m.lane;if((Vt&y)===y)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(c=u=x,i=r):u=u.next=x,Z.lanes|=y,Wt|=y}m=m.next}while(m!==null&&m!==a);u===null?i=r:u.next=c,Xe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,Z.lanes|=a,Wt|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ca(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var i=s=s.next;do a=e(a,i.action),i=i.next;while(i!==s);Xe(a,t.memoizedState)||(Se=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Bu(){}function Hu(e,t){var n=Z,r=He(),s=t(),a=!Xe(r.memoizedState,s);if(a&&(r.memoizedState=s,Se=!0),r=r.queue,Bi(Wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Nr(9,Vu.bind(null,n,r,s,t),void 0,null),ce===null)throw Error(S(349));Vt&30||Uu(n,t,s)}return s}function Uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,r){t.value=n,t.getSnapshot=r,Qu(t)&&Yu(e)}function Wu(e,t,n){return n(function(){Qu(t)&&Yu(e)})}function Qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Yu(e){var t=mt(e,1);t!==null&&Je(t,e,1,-1)}function qo(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,Z,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return He().memoizedState}function Nl(e,t,n,r){var s=tt();Z.flags|=e,s.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function rs(e,t,n,r){var s=He();r=r===void 0?null:r;var a=void 0;if(se!==null){var i=se.memoizedState;if(a=i.destroy,r!==null&&$i(r,i.deps)){s.memoizedState=Nr(t,n,a,r);return}}Z.flags|=e,s.memoizedState=Nr(1|t,n,a,r)}function ec(e,t){return Nl(8390656,8,e,t)}function Bi(e,t){return rs(2048,8,e,t)}function Ku(e,t){return rs(4,2,e,t)}function Ju(e,t){return rs(4,4,e,t)}function Xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zu(e,t,n){return n=n!=null?n.concat([e]):null,rs(4,4,Xu.bind(null,t,e),n)}function Hi(){}function qu(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$i(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ed(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$i(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function td(e,t,n){return Vt&21?(Xe(n,t)||(n=au(),Z.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Qf(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{V=n,ia.transition=r}}function nd(){return He().memoizedState}function Yf(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rd(e))ld(t,n);else if(n=$u(e,t,n,r),n!==null){var s=xe();Je(n,e,r,s),sd(n,t,r)}}function Gf(e,t,n){var r=Et(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rd(e))ld(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,c=a(i,n);if(s.hasEagerState=!0,s.eagerState=c,Xe(c,i)){var u=t.interleaved;u===null?(s.next=s,_i(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=$u(e,t,s,r),n!==null&&(s=xe(),Je(n,e,r,s),sd(n,t,r))}}function rd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ld(e,t){nr=Ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yi(e,n)}}var Vl={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Kf={readContext:Be,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4194308,4,Xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nl(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yf.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:qo,useDebugValue:Hi,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=qo(!1),t=e[0];return e=Qf.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,s=tt();if(J){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ce===null)throw Error(S(349));Vt&30||Uu(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,ec(Wu.bind(null,r,a,e),[e]),r.flags|=2048,Nr(9,Vu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=tt(),t=ce.identifierPrefix;if(J){var n=ot,r=it;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jf={readContext:Be,useCallback:qu,useContext:Be,useEffect:Bi,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Ju,useMemo:ed,useReducer:oa,useRef:Gu,useState:function(){return oa(jr)},useDebugValue:Hi,useDeferredValue:function(e){var t=He();return td(t,se.memoizedState,e)},useTransition:function(){var e=oa(jr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Hu,useId:nd,unstable_isNewReconciler:!1},Xf={readContext:Be,useCallback:qu,useContext:Be,useEffect:Bi,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Ju,useMemo:ed,useReducer:ca,useRef:Gu,useState:function(){return ca(jr)},useDebugValue:Hi,useDeferredValue:function(e){var t=He();return se===null?t.memoizedState=e:td(t,se.memoizedState,e)},useTransition:function(){var e=ca(jr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Hu,useId:nd,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ls={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),s=Et(e),a=ct(r,s);a.payload=t,n!=null&&(a.callback=n),t=Ct(e,a,s),t!==null&&(Je(t,e,s,r),yl(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),s=Et(e),a=ct(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ct(e,a,s),t!==null&&(Je(t,e,s,r),yl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Et(e),s=ct(n,r);s.tag=2,t!=null&&(s.callback=t),t=Ct(e,s,r),t!==null&&(Je(t,e,r,n),yl(t,e,r))}};function tc(e,t,n,r,s,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(s,a):!0}function ad(e,t,n){var r=!1,s=Lt,a=t.contextType;return typeof a=="object"&&a!==null?a=Be(a):(s=Ce(t)?Ht:ge.current,r=t.contextTypes,a=(r=r!=null)?En(e,s):Lt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ls,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function Qa(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Mi(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Be(a):(a=Ce(t)?Ht:ge.current,s.context=En(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Wa(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ls.enqueueReplaceState(s,s.state,null),Bl(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=Sm(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function ua(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function id(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ql||(Ql=!0,ri=r),Ya(e,t)},n}function od(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ya(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ya(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zf;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=mp.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sc(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Ct(n,t,1))),n.lanes|=1),e)}var qf=pt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Ou(t,null,n,r):Rn(t,e.child,n,r)}function ac(e,t,n,r,s){n=n.render;var a=t.ref;return bn(t,s),r=Di(e,t,n,r,a,s),n=Ai(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ft(e,t,s)):(J&&n&&Pi(t),t.flags|=1,ve(e,t,r,s),t.child)}function ic(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!Ji(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,cd(e,t,a,r,s)):(e=bl(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(i,r)&&e.ref===t.ref)return ft(e,t,s)}return t.flags|=1,e=zt(a,r),e.ref=t.ref,e.return=t,t.child=e}function cd(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(fr(a,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ft(e,t,s)}return Ga(e,t,n,r,s)}function ud(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(jn,ze),ze|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(jn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Q(jn,ze),ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Q(jn,ze),ze|=r;return ve(e,t,s,n),t.child}function dd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ga(e,t,n,r,s){var a=Ce(n)?Ht:ge.current;return a=En(t,a),bn(t,s),n=Di(e,t,n,r,a,s),r=Ai(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ft(e,t,s)):(J&&r&&Pi(t),t.flags|=1,ve(e,t,n,s),t.child)}function oc(e,t,n,r,s){if(Ce(n)){var a=!0;Il(t)}else a=!1;if(bn(t,s),t.stateNode===null)wl(e,t),ad(t,n,r),Qa(t,n,r,s),r=!0;else if(e===null){var i=t.stateNode,c=t.memoizedProps;i.props=c;var u=i.context,m=n.contextType;typeof m=="object"&&m!==null?m=Be(m):(m=Ce(n)?Ht:ge.current,m=En(t,m));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==r||u!==m)&&nc(t,i,r,m),vt=!1;var h=t.memoizedState;i.state=h,Bl(t,r,i,s),u=t.memoizedState,c!==r||h!==u||be.current||vt?(typeof y=="function"&&(Wa(t,n,y,r),u=t.memoizedState),(c=vt||tc(t,n,c,r,h,u,m))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=m,r=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Du(e,t),c=t.memoizedProps,m=t.type===t.elementType?c:Qe(t.type,c),i.props=m,x=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Be(u):(u=Ce(n)?Ht:ge.current,u=En(t,u));var N=n.getDerivedStateFromProps;(y=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==x||h!==u)&&nc(t,i,r,u),vt=!1,h=t.memoizedState,i.state=h,Bl(t,r,i,s);var b=t.memoizedState;c!==x||h!==b||be.current||vt?(typeof N=="function"&&(Wa(t,n,N,r),b=t.memoizedState),(m=vt||tc(t,n,m,r,h,b,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,b,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,b,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),i.props=r,i.state=b,i.context=u,r=m):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ka(e,t,n,r,a,s)}function Ka(e,t,n,r,s,a){dd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return s&&Yo(t,n,!1),ft(e,t,a);r=t.stateNode,qf.current=t;var c=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Rn(t,e.child,null,a),t.child=Rn(t,null,c,a)):ve(e,t,c,a),t.memoizedState=r.state,s&&Yo(t,n,!0),t.child}function md(e){var t=e.stateNode;t.pendingContext?Qo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qo(e,t.context,!1),Fi(e,t.containerInfo)}function cc(e,t,n,r,s){return zn(),zi(s),t.flags|=256,ve(e,t,n,r),t.child}var Ja={dehydrated:null,treeContext:null,retryLane:0};function Xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function fd(e,t,n){var r=t.pendingProps,s=X.current,a=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Q(X,s&1),e===null)return Ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=is(i,r,0,null),e=Bt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Xa(n),t.memoizedState=Ja,e):Ui(t,i));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return ep(e,t,i,r,c,s,n);if(a){a=r.fallback,i=t.mode,s=e.child,c=s.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?a=zt(c,a):(a=Bt(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Xa(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Ja,r}return a=e.child,e=a.sibling,r=zt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ui(e,t){return t=is({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&zi(r),Rn(t,e.child,null,n),e=Ui(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ep(e,t,n,r,s,a,i){if(n)return t.flags&256?(t.flags&=-257,r=ua(Error(S(422))),ul(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=is({mode:"visible",children:r.children},s,0,null),a=Bt(a,s,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Rn(t,e.child,null,i),t.child.memoizedState=Xa(i),t.memoizedState=Ja,a);if(!(t.mode&1))return ul(e,t,i,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(S(419)),r=ua(a,r,void 0),ul(e,t,i,r)}if(c=(i&e.childLanes)!==0,Se||c){if(r=ce,r!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|i)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,mt(e,s),Je(r,e,s,-1))}return Ki(),r=ua(Error(S(421))),ul(e,t,i,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=fp.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,Re=bt(s.nextSibling),Le=t,J=!0,Ge=null,e!==null&&(Oe[$e++]=it,Oe[$e++]=ot,Oe[$e++]=Ut,it=e.id,ot=e.overflow,Ut=t),t=Ui(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function da(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function pd(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(ve(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(X,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Hl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),da(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Hl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}da(t,!0,n,null,a);break;case"together":da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tp(e,t,n){switch(t.tag){case 3:md(t),zn();break;case 5:Au(t);break;case 1:Ce(t.type)&&Il(t);break;case 4:Fi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Q(Dl,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?fd(e,t,n):(Q(X,X.current&1),e=ft(e,t,n),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pd(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,n)}return ft(e,t,n)}var hd,Za,gd,vd;hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};gd=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Dt(lt.current);var a=null;switch(n){case"input":s=ja(e,s),r=ja(e,r),a=[];break;case"select":s=q({},s,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":s=ka(e,s),r=ka(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ml)}ba(n,r);var i;n=null;for(m in s)if(!r.hasOwnProperty(m)&&s.hasOwnProperty(m)&&s[m]!=null)if(m==="style"){var c=s[m];for(i in c)c.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(ar.hasOwnProperty(m)?a||(a=[]):(a=a||[]).push(m,null));for(m in r){var u=r[m];if(c=s!=null?s[m]:void 0,r.hasOwnProperty(m)&&u!==c&&(u!=null||c!=null))if(m==="style")if(c){for(i in c)!c.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&c[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(a=a||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(ar.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&Y("scroll",e),a||c===u||(a=[])):(a=a||[]).push(m,u))}n&&(a=a||[]).push("style",n);var m=a;(t.updateQueue=m)&&(t.flags|=4)}};vd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wn(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function np(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ce(t.type)&&Fl(),pe(t),null;case 3:return r=t.stateNode,Ln(),G(be),G(ge),Oi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(ai(Ge),Ge=null))),Za(e,t),pe(t),null;case 5:Ii(t);var s=Dt(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)gd(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return pe(t),null}if(e=Dt(lt.current),ol(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[nt]=t,r[gr]=a,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(s=0;s<Jn.length;s++)Y(Jn[s],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":yo(r,a),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Y("invalid",r);break;case"textarea":No(r,a),Y("invalid",r)}ba(n,a),s=null;for(var i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&il(r.textContent,c,e),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&il(r.textContent,c,e),s=["children",""+c]):ar.hasOwnProperty(i)&&c!=null&&i==="onScroll"&&Y("scroll",r)}switch(n){case"input":qr(r),jo(r,a,!0);break;case"textarea":qr(r),wo(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ml)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[nt]=t,e[gr]=r,hd(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ca(n,r),n){case"dialog":Y("cancel",e),Y("close",e),s=r;break;case"iframe":case"object":case"embed":Y("load",e),s=r;break;case"video":case"audio":for(s=0;s<Jn.length;s++)Y(Jn[s],e);s=r;break;case"source":Y("error",e),s=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),s=r;break;case"details":Y("toggle",e),s=r;break;case"input":yo(e,r),s=ja(e,r),Y("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=q({},r,{value:void 0}),Y("invalid",e);break;case"textarea":No(e,r),s=ka(e,r),Y("invalid",e);break;default:s=r}ba(n,s),c=s;for(a in c)if(c.hasOwnProperty(a)){var u=c[a];a==="style"?Gc(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Qc(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ir(e,u):typeof u=="number"&&ir(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ar.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Y("scroll",e):u!=null&&fi(e,a,u,i))}switch(n){case"input":qr(e),jo(e,r,!1);break;case"textarea":qr(e),wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Nn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)vd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(xr.current),Dt(lt.current),ol(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(a=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return pe(t),null;case 13:if(G(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Re!==null&&t.mode&1&&!(t.flags&128))Fu(),zn(),t.flags|=98560,a=!1;else if(a=ol(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[nt]=t}else zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),a=!1}else Ge!==null&&(ai(Ge),Ge=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ae===0&&(ae=3):Ki())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Ln(),Za(e,t),e===null&&pr(t.stateNode.containerInfo),pe(t),null;case 10:return Ti(t.type._context),pe(t),null;case 17:return Ce(t.type)&&Fl(),pe(t),null;case 19:if(G(X),a=t.memoizedState,a===null)return pe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Wn(a,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Hl(e),i!==null){for(t.flags|=128,Wn(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(X,X.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>_n&&(t.flags|=128,r=!0,Wn(a,!1),t.lanes=4194304)}else{if(!r)if(e=Hl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!J)return pe(t),null}else 2*ne()-a.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,Wn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,n=X.current,Q(X,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Gi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function rp(e,t){switch(Ei(t),t.tag){case 1:return Ce(t.type)&&Fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),G(be),G(ge),Oi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ii(t),null;case 13:if(G(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(X),null;case 4:return Ln(),null;case 10:return Ti(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var dl=!1,he=!1,lp=typeof WeakSet=="function"?WeakSet:Set,T=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function qa(e,t,n){try{n()}catch(r){ee(e,t,r)}}var dc=!1;function sp(e,t){if(Ia=Ll,e=wu(),Ci(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,c=-1,u=-1,m=0,y=0,x=e,h=null;t:for(;;){for(var N;x!==n||s!==0&&x.nodeType!==3||(c=i+s),x!==a||r!==0&&x.nodeType!==3||(u=i+r),x.nodeType===3&&(i+=x.nodeValue.length),(N=x.firstChild)!==null;)h=x,x=N;for(;;){if(x===e)break t;if(h===n&&++m===s&&(c=i),h===a&&++y===r&&(u=i),(N=x.nextSibling)!==null)break;x=h,h=x.parentNode}x=N}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oa={focusedElem:e,selectionRange:n},Ll=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,I=b.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Qe(t.type,j),I);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(g){ee(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=dc,dc=!1,b}function rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&qa(t,n,a)}s=s.next}while(s!==r)}}function ss(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ei(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xd(e){var t=e.alternate;t!==null&&(e.alternate=null,xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[gr],delete t[Aa],delete t[Bf],delete t[Hf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yd(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ti(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ml));else if(r!==4&&(e=e.child,e!==null))for(ti(e,t,n),e=e.sibling;e!==null;)ti(e,t,n),e=e.sibling}function ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ni(e,t,n),e=e.sibling;e!==null;)ni(e,t,n),e=e.sibling}var ue=null,Ye=!1;function ht(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:he||yn(n,t);case 6:var r=ue,s=Ye;ue=null,ht(e,t,n),ue=r,Ye=s,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),dr(e)):la(ue,n.stateNode));break;case 4:r=ue,s=Ye,ue=n.stateNode.containerInfo,Ye=!0,ht(e,t,n),ue=r,Ye=s;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&qa(n,t,i),s=s.next}while(s!==r)}ht(e,t,n);break;case 1:if(!he&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ee(n,t,c)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ht(e,t,n),he=r):ht(e,t,n);break;default:ht(e,t,n)}}function fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lp),t.forEach(function(r){var s=pp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 5:ue=c.stateNode,Ye=!1;break e;case 3:ue=c.stateNode.containerInfo,Ye=!0;break e;case 4:ue=c.stateNode.containerInfo,Ye=!0;break e}c=c.return}if(ue===null)throw Error(S(160));jd(a,i,s),ue=null,Ye=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(m){ee(s,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nd(t,e),t=t.sibling}function Nd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),r&4){try{rr(3,e,e.return),ss(3,e)}catch(j){ee(e,e.return,j)}try{rr(5,e,e.return)}catch(j){ee(e,e.return,j)}}break;case 1:We(t,e),et(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(We(t,e),et(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var s=e.stateNode;try{ir(s,"")}catch(j){ee(e,e.return,j)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Uc(s,a),Ca(c,i);var m=Ca(c,a);for(i=0;i<u.length;i+=2){var y=u[i],x=u[i+1];y==="style"?Gc(s,x):y==="dangerouslySetInnerHTML"?Qc(s,x):y==="children"?ir(s,x):fi(s,y,x,m)}switch(c){case"input":Na(s,a);break;case"textarea":Vc(s,a);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var N=a.value;N!=null?Nn(s,!!a.multiple,N,!1):h!==!!a.multiple&&(a.defaultValue!=null?Nn(s,!!a.multiple,a.defaultValue,!0):Nn(s,!!a.multiple,a.multiple?[]:"",!1))}s[gr]=a}catch(j){ee(e,e.return,j)}}break;case 6:if(We(t,e),et(e),r&4){if(e.stateNode===null)throw Error(S(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(j){ee(e,e.return,j)}}break;case 3:if(We(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(j){ee(e,e.return,j)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Qi=ne())),r&4&&fc(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(he=(m=he)||y,We(t,e),he=m):We(t,e),et(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(x=T=y;T!==null;){switch(h=T,N=h.child,h.tag){case 0:case 11:case 14:case 15:rr(4,h,h.return);break;case 1:yn(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){ee(r,n,j)}}break;case 5:yn(h,h.return);break;case 22:if(h.memoizedState!==null){hc(x);continue}}N!==null?(N.return=h,T=N):hc(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{s=x.stateNode,m?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=x.stateNode,u=x.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=Yc("display",i))}catch(j){ee(e,e.return,j)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(j){ee(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:We(t,e),et(e),r&4&&fc(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ir(s,""),r.flags&=-33);var a=mc(e);ni(e,a,s);break;case 3:case 4:var i=r.stateNode.containerInfo,c=mc(e);ti(e,c,i);break;default:throw Error(S(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ap(e,t,n){T=e,wd(e)}function wd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var s=T,a=s.child;if(s.tag===22&&r){var i=s.memoizedState!==null||dl;if(!i){var c=s.alternate,u=c!==null&&c.memoizedState!==null||he;c=dl;var m=he;if(dl=i,(he=u)&&!m)for(T=s;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?gc(s):u!==null?(u.return=i,T=u):gc(s);for(;a!==null;)T=a,wd(a),a=a.sibling;T=s,dl=c,he=m}pc(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,T=a):pc(e)}}function pc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||ss(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zo(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zo(t,i,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&dr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&ei(t)}catch(h){ee(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function hc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function gc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ss(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){ee(t,s,u)}}var a=t.return;try{ei(t)}catch(u){ee(t,a,u)}break;case 5:var i=t.return;try{ei(t)}catch(u){ee(t,i,u)}}}catch(u){ee(t,t.return,u)}if(t===e){T=null;break}var c=t.sibling;if(c!==null){c.return=t.return,T=c;break}T=t.return}}var ip=Math.ceil,Wl=pt.ReactCurrentDispatcher,Vi=pt.ReactCurrentOwner,Ae=pt.ReactCurrentBatchConfig,H=0,ce=null,re=null,de=0,ze=0,jn=_t(0),ae=0,wr=null,Wt=0,as=0,Wi=0,lr=null,ke=null,Qi=0,_n=1/0,st=null,Ql=!1,ri=null,Pt=null,ml=!1,Nt=null,Yl=0,sr=0,li=null,kl=-1,Sl=0;function xe(){return H&6?ne():kl!==-1?kl:kl=ne()}function Et(e){return e.mode&1?H&2&&de!==0?de&-de:Vf.transition!==null?(Sl===0&&(Sl=au()),Sl):(e=V,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function Je(e,t,n,r){if(50<sr)throw sr=0,li=null,Error(S(185));Sr(e,n,r),(!(H&2)||e!==ce)&&(e===ce&&(!(H&2)&&(as|=n),ae===4&&yt(e,de)),Pe(e,r),n===1&&H===0&&!(t.mode&1)&&(_n=ne()+500,ns&&Mt()))}function Pe(e,t){var n=e.callbackNode;Um(e,t);var r=Rl(e,e===ce?de:0);if(r===0)n!==null&&bo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bo(n),t===1)e.tag===0?Uf(vc.bind(null,e)):Tu(vc.bind(null,e)),Df(function(){!(H&6)&&Mt()}),n=null;else{switch(iu(r)){case 1:n=xi;break;case 4:n=lu;break;case 16:n=zl;break;case 536870912:n=su;break;default:n=zl}n=Rd(n,kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kd(e,t){if(kl=-1,Sl=0,H&6)throw Error(S(327));var n=e.callbackNode;if(Cn()&&e.callbackNode!==n)return null;var r=Rl(e,e===ce?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gl(e,r);else{t=r;var s=H;H|=2;var a=bd();(ce!==e||de!==t)&&(st=null,_n=ne()+500,At(e,t));do try{up();break}catch(c){Sd(e,c)}while(!0);Li(),Wl.current=a,H=s,re!==null?t=0:(ce=null,de=0,t=ae)}if(t!==0){if(t===2&&(s=La(e),s!==0&&(r=s,t=si(e,s))),t===1)throw n=wr,At(e,0),yt(e,r),Pe(e,ne()),n;if(t===6)yt(e,r);else{if(s=e.current.alternate,!(r&30)&&!op(s)&&(t=Gl(e,r),t===2&&(a=La(e),a!==0&&(r=a,t=si(e,a))),t===1))throw n=wr,At(e,0),yt(e,r),Pe(e,ne()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:It(e,ke,st);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Qi+500-ne(),10<t)){if(Rl(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Da(It.bind(null,e,ke,st),t);break}It(e,ke,st);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var i=31-Ke(r);a=1<<i,i=t[i],i>s&&(s=i),r&=~a}if(r=s,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ip(r/1960))-r,10<r){e.timeoutHandle=Da(It.bind(null,e,ke,st),r);break}It(e,ke,st);break;case 5:It(e,ke,st);break;default:throw Error(S(329))}}}return Pe(e,ne()),e.callbackNode===n?kd.bind(null,e):null}function si(e,t){var n=lr;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=Gl(e,t),e!==2&&(t=ke,ke=n,t!==null&&ai(t)),e}function ai(e){ke===null?ke=e:ke.push.apply(ke,e)}function op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Xe(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Wi,t&=~as,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if(H&6)throw Error(S(327));Cn();var t=Rl(e,0);if(!(t&1))return Pe(e,ne()),null;var n=Gl(e,t);if(e.tag!==0&&n===2){var r=La(e);r!==0&&(t=r,n=si(e,r))}if(n===1)throw n=wr,At(e,0),yt(e,t),Pe(e,ne()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,ke,st),Pe(e,ne()),null}function Yi(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(_n=ne()+500,ns&&Mt())}}function Qt(e){Nt!==null&&Nt.tag===0&&!(H&6)&&Cn();var t=H;H|=1;var n=Ae.transition,r=V;try{if(Ae.transition=null,V=1,e)return e()}finally{V=r,Ae.transition=n,H=t,!(H&6)&&Mt()}}function Gi(){ze=jn.current,G(jn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$f(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:Ln(),G(be),G(ge),Oi();break;case 5:Ii(r);break;case 4:Ln();break;case 13:G(X);break;case 19:G(X);break;case 10:Ti(r.type._context);break;case 22:case 23:Gi()}n=n.return}if(ce=e,re=e=zt(e.current,null),de=ze=t,ae=0,wr=null,Wi=as=Wt=0,ke=lr=null,$t!==null){for(t=0;t<$t.length;t++)if(n=$t[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=s,r.next=i}n.pending=r}$t=null}return e}function Sd(e,t){do{var n=re;try{if(Li(),jl.current=Vl,Ul){for(var r=Z.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ul=!1}if(Vt=0,oe=se=Z=null,nr=!1,yr=0,Vi.current=null,n===null||n.return===null){ae=1,wr=t,re=null;break}e:{var a=e,i=n.return,c=n,u=t;if(t=de,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,y=c,x=y.tag;if(!(y.mode&1)&&(x===0||x===11||x===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var N=lc(i);if(N!==null){N.flags&=-257,sc(N,i,c,a,t),N.mode&1&&rc(a,m,t),t=N,u=m;var b=t.updateQueue;if(b===null){var j=new Set;j.add(u),t.updateQueue=j}else b.add(u);break e}else{if(!(t&1)){rc(a,m,t),Ki();break e}u=Error(S(426))}}else if(J&&c.mode&1){var I=lc(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),sc(I,i,c,a,t),zi(Tn(u,c));break e}}a=u=Tn(u,c),ae!==4&&(ae=2),lr===null?lr=[a]:lr.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=id(a,u,t);Xo(a,f);break e;case 1:c=u;var d=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var g=od(a,c,t);Xo(a,g);break e}}a=a.return}while(a!==null)}Pd(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function bd(){var e=Wl.current;return Wl.current=Vl,e===null?Vl:e}function Ki(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(Wt&268435455)&&!(as&268435455)||yt(ce,de)}function Gl(e,t){var n=H;H|=2;var r=bd();(ce!==e||de!==t)&&(st=null,At(e,t));do try{cp();break}catch(s){Sd(e,s)}while(!0);if(Li(),H=n,Wl.current=r,re!==null)throw Error(S(261));return ce=null,de=0,ae}function cp(){for(;re!==null;)Cd(re)}function up(){for(;re!==null&&!Mm();)Cd(re)}function Cd(e){var t=zd(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Pd(e):re=t,Vi.current=null}function Pd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rp(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=np(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function It(e,t,n){var r=V,s=Ae.transition;try{Ae.transition=null,V=1,dp(e,t,n,r)}finally{Ae.transition=s,V=r}return null}function dp(e,t,n,r){do Cn();while(Nt!==null);if(H&6)throw Error(S(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Vm(e,a),e===ce&&(re=ce=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,Rd(zl,function(){return Cn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ae.transition,Ae.transition=null;var i=V;V=1;var c=H;H|=4,Vi.current=null,sp(e,n),Nd(n,e),Lf(Oa),Ll=!!Ia,Oa=Ia=null,e.current=n,ap(n),Fm(),H=c,V=i,Ae.transition=a}else e.current=n;if(ml&&(ml=!1,Nt=e,Yl=s),a=e.pendingLanes,a===0&&(Pt=null),$m(n.stateNode),Pe(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ql)throw Ql=!1,e=ri,ri=null,e;return Yl&1&&e.tag!==0&&Cn(),a=e.pendingLanes,a&1?e===li?sr++:(sr=0,li=e):sr=0,Mt(),null}function Cn(){if(Nt!==null){var e=iu(Yl),t=Ae.transition,n=V;try{if(Ae.transition=null,V=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,Yl=0,H&6)throw Error(S(331));var s=H;for(H|=4,T=e.current;T!==null;){var a=T,i=a.child;if(T.flags&16){var c=a.deletions;if(c!==null){for(var u=0;u<c.length;u++){var m=c[u];for(T=m;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:rr(8,y,a)}var x=y.child;if(x!==null)x.return=y,T=x;else for(;T!==null;){y=T;var h=y.sibling,N=y.return;if(xd(y),y===m){T=null;break}if(h!==null){h.return=N,T=h;break}T=N}}}var b=a.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var I=j.sibling;j.sibling=null,j=I}while(j!==null)}}T=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,T=i;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:rr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,T=f;break e}T=a.return}}var d=e.current;for(T=d;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=d;T!==null;){if(c=T,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ss(9,c)}}catch(C){ee(c,c.return,C)}if(c===i){T=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,T=g;break e}T=c.return}}if(H=s,Mt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Xl,e)}catch{}r=!0}return r}finally{V=n,Ae.transition=t}}return!1}function xc(e,t,n){t=Tn(n,t),t=id(e,t,1),e=Ct(e,t,1),t=xe(),e!==null&&(Sr(e,1,t),Pe(e,t))}function ee(e,t,n){if(e.tag===3)xc(e,e,n);else for(;t!==null;){if(t.tag===3){xc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Tn(n,e),e=od(t,e,1),t=Ct(t,e,1),e=xe(),t!==null&&(Sr(t,1,e),Pe(t,e));break}}t=t.return}}function mp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(de&n)===n&&(ae===4||ae===3&&(de&130023424)===de&&500>ne()-Qi?At(e,0):Wi|=n),Pe(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):t=1);var n=xe();e=mt(e,t),e!==null&&(Sr(e,t,n),Pe(e,n))}function fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ed(e,n)}function pp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Ed(e,n)}var zd;zd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,tp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,J&&t.flags&1048576&&_u(t,$l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wl(e,t),e=t.pendingProps;var s=En(t,ge.current);bn(t,n),s=Di(null,t,r,e,s,n);var a=Ai();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(a=!0,Il(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Mi(t),s.updater=ls,t.stateNode=s,s._reactInternals=t,Qa(t,r,e,n),t=Ka(null,t,r,!0,a,n)):(t.tag=0,J&&a&&Pi(t),ve(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wl(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=gp(r),e=Qe(r,e),s){case 0:t=Ga(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=ac(null,t,r,e,n);break e;case 14:t=ic(null,t,r,Qe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qe(r,s),Ga(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qe(r,s),oc(e,t,r,s,n);case 3:e:{if(md(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,s=a.element,Du(e,t),Bl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=Tn(Error(S(423)),t),t=cc(e,t,r,n,s);break e}else if(r!==s){s=Tn(Error(S(424)),t),t=cc(e,t,r,n,s);break e}else for(Re=bt(t.stateNode.containerInfo.firstChild),Le=t,J=!0,Ge=null,n=Ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zn(),r===s){t=ft(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Au(t),e===null&&Ua(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,i=s.children,$a(r,s)?i=null:a!==null&&$a(r,a)&&(t.flags|=32),dd(e,t),ve(e,t,i,n),t.child;case 6:return e===null&&Ua(t),null;case 13:return fd(e,t,n);case 4:return Fi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qe(r,s),ac(e,t,r,s,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,i=s.value,Q(Dl,r._currentValue),r._currentValue=i,a!==null)if(Xe(a.value,i)){if(a.children===s.children&&!be.current){t=ft(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){i=a.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=ct(-1,n&-n),u.tag=2;var m=a.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?u.next=u:(u.next=y.next,y.next=u),m.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Va(a.return,n,t),c.lanes|=n;break}u=u.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(S(341));i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Va(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ve(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,bn(t,n),s=Be(s),r=r(s),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,s=Qe(r,t.pendingProps),s=Qe(r.type,s),ic(e,t,r,s,n);case 15:return cd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qe(r,s),wl(e,t),t.tag=1,Ce(r)?(e=!0,Il(t)):e=!1,bn(t,n),ad(t,r,s),Qa(t,r,s,n),Ka(null,t,r,!0,e,n);case 19:return pd(e,t,n);case 22:return ud(e,t,n)}throw Error(S(156,t.tag))};function Rd(e,t){return ru(e,t)}function hp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new hp(e,t,n,r)}function Ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gp(e){if(typeof e=="function")return Ji(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hi)return 11;if(e===gi)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bl(e,t,n,r,s,a){var i=2;if(r=e,typeof e=="function")Ji(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case un:return Bt(n.children,s,a,t);case pi:i=8,s|=8;break;case ga:return e=De(12,n,t,s|2),e.elementType=ga,e.lanes=a,e;case va:return e=De(13,n,t,s),e.elementType=va,e.lanes=a,e;case xa:return e=De(19,n,t,s),e.elementType=xa,e.lanes=a,e;case Ac:return is(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $c:i=10;break e;case Dc:i=9;break e;case hi:i=11;break e;case gi:i=14;break e;case gt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(i,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function Bt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function is(e,t,n,r){return e=De(22,e,r,t),e.elementType=Ac,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function fa(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ys(0),this.expirationTimes=Ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Xi(e,t,n,r,s,a,i,c,u){return e=new vp(e,t,n,c,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=De(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mi(a),e}function xp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ld(e){if(!e)return Lt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Lu(e,n,t)}return t}function Td(e,t,n,r,s,a,i,c,u){return e=Xi(n,r,!0,e,s,a,i,c,u),e.context=Ld(null),n=e.current,r=xe(),s=Et(n),a=ct(r,s),a.callback=t??null,Ct(n,a,s),e.current.lanes=s,Sr(e,s,r),Pe(e,r),e}function os(e,t,n,r){var s=t.current,a=xe(),i=Et(s);return n=Ld(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ct(s,t,i),e!==null&&(Je(e,s,i,a),yl(e,s,i)),i}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zi(e,t){yc(e,t),(e=e.alternate)&&yc(e,t)}function yp(){return null}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function qi(e){this._internalRoot=e}cs.prototype.render=qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));os(e,t,null,null)};cs.prototype.unmount=qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){os(null,e,null,null)}),t[dt]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&mu(e)}};function eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function jp(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var m=Kl(i);a.call(m)}}var i=Td(t,r,e,0,null,!1,!1,"",jc);return e._reactRootContainer=i,e[dt]=i.current,pr(e.nodeType===8?e.parentNode:e),Qt(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var m=Kl(u);c.call(m)}}var u=Xi(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=u,e[dt]=u.current,pr(e.nodeType===8?e.parentNode:e),Qt(function(){os(t,u,n,r)}),u}function ds(e,t,n,r,s){var a=n._reactRootContainer;if(a){var i=a;if(typeof s=="function"){var c=s;s=function(){var u=Kl(i);c.call(u)}}os(t,i,e,s)}else i=jp(n,t,e,s,r);return Kl(i)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(yi(t,n|1),Pe(t,ne()),!(H&6)&&(_n=ne()+500,Mt()))}break;case 13:Qt(function(){var r=mt(e,1);if(r!==null){var s=xe();Je(r,e,1,s)}}),Zi(e,1)}};ji=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=xe();Je(t,e,134217728,n)}Zi(e,134217728)}};cu=function(e){if(e.tag===13){var t=Et(e),n=mt(e,t);if(n!==null){var r=xe();Je(n,e,t,r)}Zi(e,t)}};uu=function(){return V};du=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Ea=function(e,t,n){switch(t){case"input":if(Na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=ts(r);if(!s)throw Error(S(90));Hc(r),Na(r,s)}}}break;case"textarea":Vc(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Xc=Yi;Zc=Qt;var Np={usingClientEntryPoint:!1,Events:[Cr,pn,ts,Kc,Jc,Yi]},Qn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wp={bundleType:Qn.bundleType,version:Qn.version,rendererPackageName:Qn.rendererPackageName,rendererConfig:Qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:Qn.findFiberByHostInstance||yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Xl=fl.inject(wp),rt=fl}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eo(t))throw Error(S(200));return xp(e,t,null,n)};_e.createRoot=function(e,t){if(!eo(e))throw Error(S(299));var n=!1,r="",s=_d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Xi(e,1,!1,null,null,n,!1,r,s),e[dt]=t.current,pr(e.nodeType===8?e.parentNode:e),new qi(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=tu(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Qt(e)};_e.hydrate=function(e,t,n){if(!us(t))throw Error(S(200));return ds(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!eo(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",i=_d;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Td(t,null,e,1,n??null,s,!1,a,i),e[dt]=t.current,pr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new cs(t)};_e.render=function(e,t,n){if(!us(t))throw Error(S(200));return ds(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!us(e))throw Error(S(40));return e._reactRootContainer?(Qt(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};_e.unstable_batchedUpdates=Yi;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!us(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ds(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function Md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Md)}catch(e){console.error(e)}}Md(),Mc.exports=_e;var kp=Mc.exports,Nc=kp;pa.createRoot=Nc.createRoot,pa.hydrateRoot=Nc.hydrateRoot;function Sp({activeTab:e,setActiveTab:t,subscription:n}){const r=()=>{switch(n){case"basic":return l.jsx("span",{className:"badge badge-primary",children:"Basic Plan"});case"premium":return l.jsx("span",{className:"badge badge-warning",children:"Premium Member"});case"savings":return l.jsx("span",{className:"badge badge-info",children:"Savings-Share"});default:return l.jsx("span",{className:"badge badge-danger",children:"Unsubscribed"})}},s=[{id:"landing",label:"Home & Concept",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"dashboard",label:"Dashboard",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"7",height:"9"}),l.jsx("rect",{x:"14",y:"3",width:"7",height:"5"}),l.jsx("rect",{x:"14",y:"12",width:"7",height:"9"}),l.jsx("rect",{x:"3",y:"16",width:"7",height:"5"})]})},{id:"properties",label:"Rental Properties",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})},{id:"crowdsource",label:"Crowdsource Hub",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"reminders",label:"Reminders & Tasks",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})},{id:"feedback",label:"Tester Panel",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}];return l.jsxs("aside",{className:"sidebar-container",children:[l.jsxs("div",{className:"sidebar-brand",children:[l.jsx("div",{className:"brand-logo",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"url(#logo-grad)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"logo-grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ecc94b"}),l.jsx("stop",{offset:"100%",stopColor:"#e53e3e"})]})}),l.jsx("path",{d:"M3 21h18M3 10l9-7 9 7v11H3V10z"}),l.jsx("path",{d:"M9 21v-8h6v8"})]})}),l.jsxs("div",{children:[l.jsx("h2",{children:"RealPal"}),l.jsx("span",{className:"brand-tagline",children:"Trusted Companion"})]})]}),l.jsxs("div",{className:"sidebar-vision",children:[l.jsx("div",{className:"vision-title",children:"VISION & MISSION"}),l.jsx("p",{className:"vision-text",children:"To build better communities across the world one at a time by providing a platform for landlords, tenants, and service providers."})]}),l.jsx("nav",{className:"sidebar-nav",children:s.map(a=>l.jsxs("button",{className:`nav-item ${e===a.id?"active":""}`,onClick:()=>t(a.id),children:[l.jsx("span",{className:"nav-icon",children:a.icon}),l.jsx("span",{className:"nav-label",children:a.label}),a.id==="reminders"&&l.jsx("span",{className:"nav-badge pulse-indicator"})]},a.id))}),l.jsx("div",{className:"sidebar-footer",children:l.jsxs("div",{className:"user-profile",children:[l.jsx("div",{className:"avatar",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),l.jsxs("div",{className:"user-info",children:[l.jsx("div",{className:"user-name",children:"Alex Miller"}),l.jsx("div",{className:"user-role",children:"Independent Landlord"}),l.jsx("div",{className:"sub-status",children:r()})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .sidebar-container {
          width: var(--sidebar-width);
          background-color: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 1.75rem 1.25rem;
          height: 100vh;
          position: sticky;
          top: 0;
          flex-shrink: 0;
          z-index: 100;
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .brand-logo {
          background: rgba(229, 62, 62, 0.08);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(229, 62, 62, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-brand h2 {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 40%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          display: block;
          margin-top: -2px;
        }

        .sidebar-vision {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 2rem;
        }

        .vision-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }

        .vision-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: 0.92rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          position: relative;
        }

        .nav-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.03);
        }

        .nav-item.active {
          color: #fff;
          background: var(--color-primary-light);
          border-left: 3px solid var(--color-primary);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          opacity: 0.8;
        }

        .nav-item.active .nav-icon {
          color: var(--color-primary);
          opacity: 1;
        }

        .nav-badge {
          position: absolute;
          right: 1rem;
        }

        .sidebar-footer {
          margin-top: auto;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(229, 62, 62, 0.1);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(229, 62, 62, 0.2);
        }

        .user-info {
          flex: 1;
          min-width: 0;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-role {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .sub-status {
          display: inline-block;
        }

        @media (max-width: 768px) {
          .sidebar-container {
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            position: relative;
            padding: 1.25rem;
          }
          .sidebar-vision {
            display: none;
          }
          .sidebar-nav {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
          .nav-item {
            white-space: nowrap;
          }
        }
      `}})]})}function wc({subscription:e,setSubscription:t,setActiveTab:n}){const[r,s]=E.useState(3),[a,i]=E.useState(0),c=h=>{t(h),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{n("dashboard")},400)},u=()=>{var h;(h=document.getElementById("concept-detail-section"))==null||h.scrollIntoView({behavior:"smooth"})},m=[{title:"Repairs & Maintenance Costs",desc:"An average of $2,000 to $3,000 is spent per unit annually on maintenance. RealPal helps reduce this by 10-15% through competitive bidding and group service pools.",icon:"🔧"},{title:"Compliance & Laws",desc:"Local, state, and federal leasing regulations change constantly. RealPal tracks statutory inspections, certifications, and compliance deadlines automatically.",icon:"📜"},{title:"Tenant Turnover & Rent Loss",desc:"Finding and vetting tenants leads to vacant periods that eat into passive income. Keep tenants longer by resolving maintenance issues fast and maintaining transparent comms.",icon:"🔑"},{title:"Stress of Property Management",desc:"Balancing property emergencies with personal life leads to burnout. RealPal centralizes communications, tasks, reminders, and invoices in one secure workspace.",icon:"🧠"},{title:"Accounting & Taxes",desc:"Tracking deductible expenses, vendor invoices, rent deposits, and writing off depreciation is complex. Keep records neat and ready for tax seasons.",icon:"📊"}],y=r*2500,x=r*325;return l.jsxs("div",{className:"landing-container animate-fade-in",style:{padding:0,margin:"-2.5rem -2.5rem 0"},children:[l.jsxs("section",{className:"typewriter-hero-container",children:[l.jsxs("div",{className:"typewriter-wrapper",children:[l.jsx("h1",{className:"typewriter-bold-title",children:"REAL PAL"}),l.jsx("p",{className:"typewriter-bold-subtitle",children:"A trusted companion for Landlords, Tenants & Service Providers."})]}),l.jsxs("button",{className:"scroll-down-btn",onClick:u,"aria-label":"Scroll Down",children:[l.jsx("span",{className:"scroll-arrow",children:"▼"}),l.jsx("span",{className:"scroll-text",children:"Scroll Down for Details"})]})]}),l.jsxs("section",{id:"concept-detail-section",className:"concept-detail-section",style:{padding:"2.5rem"},children:[l.jsxs("div",{className:"hero-showcase glass-card",style:{marginTop:"1rem"},children:[l.jsxs("div",{className:"hero-text-content",children:[l.jsx("span",{className:"badge badge-primary",children:"Platform Concept"}),l.jsx("h2",{className:"hero-title",style:{fontSize:"2rem"},children:"Better communities, one rental at a time."}),l.jsxs("p",{className:"hero-p",children:["Independent landlords represent ",l.jsx("strong",{children:"10 million investors"})," managing over ",l.jsx("strong",{children:"23 million rental units"})," in the US. RealPal bridges the gap between Landlords, Tenants, and Service Providers to streamline property management and reduce the $46 billion annual maintenance burden."]}),l.jsxs("div",{className:"hero-buttons",children:[l.jsx("button",{className:"btn btn-primary",onClick:()=>c("premium"),children:"Activate Trial Demo"}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>{const h=document.getElementById("savings-calculator");h==null||h.scrollIntoView({behavior:"smooth"})},children:"Calculate ROI Savings"})]})]}),l.jsxs("div",{className:"hero-image-pane",children:[l.jsxs("div",{className:"concept-stat-box",children:[l.jsx("div",{className:"stat-num text-gradient",children:"$46B"}),l.jsx("div",{className:"stat-lbl",children:"US Annual Maintenance Spend"})]}),l.jsxs("div",{className:"concept-stat-box accent-box",children:[l.jsx("div",{className:"stat-num savings-gradient",children:"10-15%"}),l.jsx("div",{className:"stat-lbl",children:"Target Expense Savings"})]})]})]}),l.jsxs("div",{id:"savings-calculator",className:"savings-calc-section grid-2",children:[l.jsxs("div",{className:"glass-card flex-column-center",children:[l.jsx("h3",{className:"section-title",children:"Interactive savings calculator"}),l.jsx("p",{className:"section-p",children:"See how much you can expect to save in repairs, administration, and vacant turnovers using RealPal's smart crowdsourcing and preventive tracking tools."}),l.jsxs("div",{className:"calc-slider-wrapper",children:[l.jsxs("label",{className:"form-label",style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"Number of Rental Units:"}),l.jsxs("span",{className:"slider-val",children:[r," ",r===1?"Unit":"Units"]})]}),l.jsx("input",{type:"range",min:"1",max:"50",value:r,onChange:h=>s(parseInt(h.target.value)),className:"calc-slider"})]}),l.jsxs("div",{className:"savings-grid",children:[l.jsxs("div",{className:"savings-item",children:[l.jsx("span",{className:"savings-lbl",children:"Estimated Annual Spend"}),l.jsxs("span",{className:"savings-val",children:["$",y.toLocaleString()]})]}),l.jsxs("div",{className:"savings-item highlight-savings",children:[l.jsx("span",{className:"savings-lbl",children:"RealPal Saved (13%)"}),l.jsxs("span",{className:"savings-val",children:["$",x.toLocaleString()]})]})]}),l.jsx("div",{className:"savings-foot-note",children:"*Based on industry averages of $2,000–$3,000 spent per property unit on repairs, plumbing, electrical, and landscaping annually."})]}),l.jsxs("div",{className:"glass-card",children:[l.jsx("h3",{className:"section-title",children:"Major Landlord Hassles Addressed"}),l.jsx("p",{className:"section-p",children:"Click on the challenges below to see how RealPal's specific feature set helps mitigate them."}),l.jsx("div",{className:"problem-list",children:m.map((h,N)=>l.jsxs("div",{className:`problem-item ${a===N?"expanded":""}`,onClick:()=>i(N),children:[l.jsxs("div",{className:"problem-header",children:[l.jsx("span",{className:"prob-icon",children:h.icon}),l.jsx("span",{className:"prob-title",children:h.title}),l.jsx("span",{className:"prob-arrow",children:a===N?"▲":"▼"})]}),a===N&&l.jsx("div",{className:"problem-body animate-slide-up",children:l.jsx("p",{children:h.desc})})]},N))})]})]}),l.jsxs("div",{className:"business-models-section",children:[l.jsx("h3",{className:"section-title",style:{textAlign:"center",marginBottom:"0.5rem"},children:"Flexible Business Models"}),l.jsx("p",{className:"section-p",style:{textAlign:"center",marginBottom:"2.5rem",maxWidth:"600px",margin:"0 auto 2.5rem"},children:"We evaluate multiple revenue avenues to align incentive with landlord savings and ease of adoption. Choose a mock model below to experience the platform."}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:`pricing-card glass-card ${e==="basic"?"active-plan":""}`,children:[e==="basic"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Basic Flat Fee"}),l.jsxs("div",{className:"plan-price",children:["$19",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"For small landlords starting their automation journey."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Manage up to 5 properties"}),l.jsx("li",{children:"✓ Core compliance reminders"}),l.jsx("li",{children:"✓ Basic digital lease storage"}),l.jsx("li",{children:"✓ Crowdsource service listings"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="basic"?"btn-success":""}`,onClick:()=>c("basic"),children:e==="basic"?"Selected Plan":"Select Flat Subscription"})]}),l.jsxs("div",{className:`pricing-card glass-card premium-card ${e==="premium"?"active-plan":""}`,children:[e==="premium"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-badge",children:"Most Popular"}),l.jsx("div",{className:"plan-name",children:"Premium Hub"}),l.jsxs("div",{className:"plan-price",children:["$39",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"Full dashboard and integrated service provider bidding network."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Interactive maintenance bidding"}),l.jsx("li",{children:"✓ Auto-reminders & calendar sync"}),l.jsx("li",{children:"✓ Group saving zip pool access"}),l.jsx("li",{children:"✓ Live tenant ticket portal"})]}),l.jsx("button",{className:"btn btn-primary",onClick:()=>c("premium"),children:e==="premium"?"Active Member":"Upgrade to Premium"})]}),l.jsxs("div",{className:`pricing-card glass-card ${e==="savings"?"active-plan":""}`,children:[e==="savings"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Share of Savings"}),l.jsxs("div",{className:"plan-price",children:["10%",l.jsx("span",{children:"of savings"})]}),l.jsx("div",{className:"plan-desc",children:"Zero subscription fees. Pay only a percentage of verified repair savings."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Full provider bidding simulator"}),l.jsx("li",{children:"✓ RealPal bulk service pricing"}),l.jsx("li",{children:"✓ Pay only when we save you money"}),l.jsx("li",{children:"✓ Quarterly savings report"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="savings"?"btn-success":""}`,onClick:()=>c("savings"),children:e==="savings"?"Selected Plan":"Select Pay-on-Savings"})]})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .scroll-down-btn {
          position: absolute;
          bottom: 2rem;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Courier New', Courier, monospace;
          font-weight: 700;
          font-size: 0.85rem;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .scroll-down-btn:hover {
          transform: translateY(5px);
          opacity: 0.8;
        }

        .scroll-arrow {
          font-size: 1.5rem;
          color: var(--color-primary);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        .hero-showcase {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(5, 5, 5, 0.95) 100%);
        }

        .hero-text-content {
          flex: 1.3;
        }

        .hero-title {
          font-weight: 800;
          line-height: 1.25;
          margin: 0.85rem 0;
          letter-spacing: -0.03em;
        }

        .hero-p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
          font-size: 1.05rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        .hero-image-pane {
          flex: 0.8;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .concept-stat-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .concept-stat-box.accent-box {
          border-color: var(--border-color-active);
          background: rgba(229, 62, 62, 0.04);
        }

        .stat-num {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .stat-lbl {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .savings-calc-section {
          margin-bottom: 2.5rem;
        }

        .flex-column-center {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .section-title {
          font-size: 1.35rem;
          font-weight: 750;
          margin-bottom: 0.5rem;
        }

        .section-p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .calc-slider-wrapper {
          width: 100%;
          margin: 1.5rem 0;
          background: rgba(0, 0, 0, 0.3);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .slider-val {
          color: var(--color-warning);
          font-weight: 700;
          font-size: 1.05rem;
        }

        .calc-slider {
          width: 100%;
          -webkit-appearance: none;
          height: 6px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.15);
          outline: none;
          margin-top: 0.75rem;
        }

        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--color-primary);
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .savings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          width: 100%;
          margin-bottom: 1.25rem;
        }

        .savings-item {
          background: rgba(0, 0, 0, 0.3);
          padding: 1rem;
          border-radius: var(--radius-sm);
          text-align: center;
          border: 1px solid var(--border-color);
        }

        .savings-item.highlight-savings {
          background: var(--color-warning-light);
          border-color: rgba(236, 201, 75, 0.2);
        }

        .savings-lbl {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.25rem;
        }

        .savings-val {
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
        }

        .highlight-savings .savings-val {
          color: var(--color-warning);
        }

        .savings-foot-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .problem-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .problem-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.9rem 1.2rem;
          background: rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .problem-item:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .problem-item.expanded {
          border-color: var(--border-color-active);
          background: rgba(229, 62, 62, 0.02);
        }

        .problem-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .prob-icon {
          font-size: 1.15rem;
        }

        .prob-title {
          font-weight: 600;
          color: #fff;
          flex: 1;
        }

        .prob-arrow {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .problem-body {
          margin-top: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.5;
          padding-left: 1.9rem;
          border-left: 2px solid var(--color-primary);
        }

        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 2.25rem 2rem;
          background: rgba(10, 10, 10, 0.8);
        }

        .pricing-card.premium-card {
          background: linear-gradient(180deg, rgba(229, 62, 62, 0.06) 0%, rgba(10, 10, 10, 0.8) 100%);
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px -10px rgba(229, 62, 62, 0.2);
        }

        .active-plan {
          border-color: var(--color-warning);
          box-shadow: 0 0 15px rgba(236, 201, 75, 0.1);
        }

        .active-tag {
          position: absolute;
          top: -10px;
          right: 20px;
          background-color: var(--color-warning);
          color: #000;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .plan-badge {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background-color: var(--color-primary);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .plan-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .plan-price {
          font-size: 2.25rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
        }

        .plan-price span {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .plan-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.4;
          min-height: 2.8rem;
        }

        .plan-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex: 1;
        }

        .plan-features li {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .hero-showcase {
            flex-direction: column;
            padding: 1.5rem;
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .pricing-card {
            margin-bottom: 1rem;
          }
        }
      `}})]})}function bp({properties:e,reminders:t,jobs:n,groupDeals:r,setActiveTab:s}){const a=e.length,i=e.filter(g=>g.status==="Occupied").length,c=a>0?Math.round(i/a*100):0,u=e.reduce((g,C)=>g+(C.status==="Occupied"?C.rent:0),0),m=n.filter(g=>g.status==="active"&&g.savings).reduce((g,C)=>g+C.savings,0),y=r.filter(g=>g.joined&&g.unlocked).reduce((g,C)=>g+C.bulkPrice*(C.discountPercent/100),0),x=m+y,h=t.filter(g=>!g.completed),N=h.filter(g=>g.priority==="High"),b=n.filter(g=>g.status==="bidding"),j={months:["Jan","Feb","Mar","Apr","May","Jun"],rent:[3200,3200,4800,4800,5400,u||5400],expense:[850,400,1200,300,1600,b.length*150+200]},I=6e3,f=g=>g.map((C,R)=>{const L=30+R*90,v=170-C/I*150;return`${L},${v}`}).join(" "),d=f(j.rent),p=f(j.expense);return l.jsxs("div",{className:"dashboard-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Dashboard Overview"}),l.jsx("p",{className:"view-description",children:"Real-time financials, property occupancies, and operational actions."})]})}),l.jsxs("div",{className:"grid-4",style:{marginBottom:"2rem"},children:[l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>s("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-primary-light)",color:"var(--color-primary)"},children:"🏠"}),l.jsxs("div",{className:"kpi-info",children:[l.jsx("span",{className:"kpi-val",children:a}),l.jsx("span",{className:"kpi-lbl",children:"Properties"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>s("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-info-light)",color:"var(--color-info)"},children:"👥"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[c,"%"]}),l.jsx("span",{className:"kpi-lbl",children:"Occupancy Rate"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>s("crowdsource"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-warning-light)",color:"var(--color-warning)"},children:"🪙"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",style:{color:"var(--color-warning)"},children:["$",x.toLocaleString()]}),l.jsx("span",{className:"kpi-lbl",children:"Saved on Repairs"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>s("reminders"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"rgba(255,255,255,0.05)",color:"#fff"},children:"🔔"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[h.length,N.length>0&&l.jsxs("span",{className:"kpi-sub-val",style:{color:"var(--color-primary)"},children:["(",N.length," High)"]})]}),l.jsx("span",{className:"kpi-lbl",children:"Active Reminders"})]})]})]}),l.jsxs("div",{className:"chart-alerts-layout",children:[l.jsxs("div",{className:"glass-card chart-card",children:[l.jsx("h3",{className:"section-title",children:"Rent Roll vs. Repair Costs"}),l.jsx("p",{className:"section-p",children:"Consolidated cashflow comparison across the current portfolio (Last 6 Months)."}),l.jsx("div",{className:"svg-chart-container",children:l.jsxs("svg",{viewBox:"0 0 500 200",className:"dashboard-svg-chart",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"rent-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.15"}),l.jsx("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0.0"})]}),l.jsxs("linearGradient",{id:"exp-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"var(--color-primary)",stopOpacity:"0.2"}),l.jsx("stop",{offset:"100%",stopColor:"var(--color-primary)",stopOpacity:"0.0"})]})]}),l.jsx("line",{x1:"30",y1:"20",x2:"480",y2:"20",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"70",x2:"480",y2:"70",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"120",x2:"480",y2:"120",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"170",x2:"480",y2:"170",stroke:"rgba(255,255,255,0.08)",strokeWidth:"1"}),l.jsx("text",{x:"5",y:"25",fill:"var(--text-muted)",fontSize:"8",children:"$6.0K"}),l.jsx("text",{x:"5",y:"75",fill:"var(--text-muted)",fontSize:"8",children:"$4.0K"}),l.jsx("text",{x:"5",y:"125",fill:"var(--text-muted)",fontSize:"8",children:"$2.0K"}),l.jsx("text",{x:"5",y:"175",fill:"var(--text-muted)",fontSize:"8",children:"$0"}),j.months.map((g,C)=>l.jsx("text",{x:30+C*90,y:"190",textAnchor:"middle",fill:"var(--text-muted)",fontSize:"9",fontWeight:"600",children:g},g)),l.jsx("polygon",{points:`30,170 ${d} 480,170`,fill:"url(#rent-grad)"}),l.jsx("polyline",{fill:"none",stroke:"#ffffff",strokeWidth:"3.5",strokeLinecap:"round",points:d}),l.jsx("polygon",{points:`30,170 ${p} 480,170`,fill:"url(#exp-grad)"}),l.jsx("polyline",{fill:"none",stroke:"var(--color-primary)",strokeWidth:"3.5",strokeLinecap:"round",points:p}),l.jsx("circle",{cx:30+5*90,cy:170-j.rent[5]/I*150,r:"5",fill:"#ffffff",stroke:"#000",strokeWidth:"2"}),l.jsx("circle",{cx:30+5*90,cy:170-j.expense[5]/I*150,r:"5",fill:"var(--color-primary)",stroke:"#000",strokeWidth:"2"})]})}),l.jsxs("div",{className:"chart-legend",children:[l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"#ffffff"}}),l.jsxs("span",{children:["Rent Roll ($",u.toLocaleString(),"/mo)"]})]}),l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"var(--color-primary)"}}),l.jsxs("span",{children:["Maintenance Expenses ($",j.expense[5],"/mo)"]})]})]})]}),l.jsxs("div",{className:"glass-card alerts-card",children:[l.jsx("h3",{className:"section-title",children:"Operational Hub"}),l.jsx("p",{className:"section-p",children:"Actions requiring immediate attention."}),l.jsxs("div",{className:"alerts-stack",style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:[b.map(g=>l.jsxs("div",{className:"alert-item alert-job glass-card",onClick:()=>s("crowdsource"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-warning",children:"Bid Response Pending"}),l.jsx("span",{className:"pulse-indicator"})]}),l.jsx("h4",{className:"alert-item-title",children:g.title}),l.jsx("p",{className:"alert-item-desc",children:"Quotations are formulating on this maintenance ticket. Select a vendor."})]},g.id)),N.slice(0,2).map(g=>l.jsxs("div",{className:"alert-item alert-task glass-card",onClick:()=>s("reminders"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-danger",children:"High Priority Task"}),l.jsxs("span",{className:"alert-date",children:["📅 ",new Date(g.date).toLocaleDateString()]})]}),l.jsx("h4",{className:"alert-item-title",children:g.title}),l.jsxs("p",{className:"alert-item-desc",children:["Associated Property: ",g.propertyName]})]},g.id)),b.length===0&&N.length===0&&l.jsxs("div",{className:"all-clear-state",children:[l.jsx("div",{className:"all-clear-icon",children:"✓"}),l.jsx("h4",{children:"All systems operating normally"}),l.jsx("p",{children:"No critical leasing deadlines or bidding alerts require processing today."})]})]})]})]}),l.jsxs("div",{className:"quick-actions-bar glass-card",style:{marginTop:"2rem"},children:[l.jsx("h4",{style:{marginBottom:"0.75rem"},children:"Quick Landlord Utilities"}),l.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>s("properties"),children:"+ Register New Property"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>s("crowdsource"),children:"🔧 Request Contractor Bid"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>s("reminders"),children:"📅 Schedule Compliance Check"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>s("landing"),children:"📊 Check Pricing ROI"})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          cursor: pointer;
          background: var(--bg-card);
        }

        .kpi-card:hover {
          transform: translateY(-4px);
        }

        .kpi-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .kpi-info {
          display: flex;
          flex-direction: column;
        }

        .kpi-val {
          font-size: 1.65rem;
          font-weight: 850;
          color: #fff;
          line-height: 1.1;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .kpi-sub-val {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .kpi-lbl {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
          font-weight: 600;
        }

        .chart-alerts-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }

        .chart-card {
          display: flex;
          flex-direction: column;
        }

        .svg-chart-container {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1rem;
          margin: 1rem 0;
          flex: 1;
        }

        .dashboard-svg-chart {
          width: 100%;
          height: 100%;
          display: block;
        }

        .chart-legend {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          font-size: 0.825rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .legend-item .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* Alerts Stack */
        .alerts-card {
          background: var(--bg-card);
        }

        .alert-item {
          padding: 1rem;
          background: rgba(0,0,0,0.2);
          cursor: pointer;
          border-left: 3px solid transparent;
        }

        .alert-item:hover {
          transform: translateY(-2px);
          border-color: var(--color-primary);
        }

        .alert-job {
          border-left-color: var(--color-warning);
        }

        .alert-task {
          border-left-color: var(--color-danger);
        }

        .alert-item-title {
          font-size: 0.95rem;
          font-weight: 750;
          color: #fff;
          margin-top: 0.35rem;
        }

        .alert-item-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
          line-height: 1.4;
        }

        .alert-date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .all-clear-state {
          text-align: center;
          padding: 3rem 1.5rem;
        }

        .all-clear-icon {
          width: 44px;
          height: 44px;
          background: var(--color-success-light);
          color: var(--color-success);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-weight: bold;
          font-size: 1.25rem;
        }

        .all-clear-state h4 {
          margin-bottom: 0.25rem;
        }

        .all-clear-state p {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .chart-alerts-layout {
            grid-template-columns: 1fr;
          }
        }
      `}})]})}function Cp({properties:e,onAddProperty:t,onUpdateProperty:n,onDeleteProperty:r}){var no,ro;const[s,a]=E.useState("portfolio"),[i,c]=E.useState(""),[u,m]=E.useState([]),[y,x]=E.useState(null),[h,N]=E.useState(!1),[b,j]=E.useState(null),[I,f]=E.useState(""),[d,p]=E.useState("Single Family"),[g,C]=E.useState(""),[R,L]=E.useState(""),[v,D]=E.useState(""),[O,P]=E.useState(""),[k,_]=E.useState(""),[A,U]=E.useState("Occupied"),[ie,Fe]=E.useState(32e4),[z,M]=E.useState(25),[$,W]=E.useState(7),[K,Ue]=E.useState(30),[Ne,Ze]=E.useState(6e3),[we,Ve]=E.useState(2e4),[Kt,Jt]=E.useState(9e3),[ms,Er]=E.useState(3),[Xt,Zt]=E.useState(1200),[fs,zr]=E.useState(3),[qt,en]=E.useState(0),[ps,Rr]=E.useState(3),[tn,nn]=E.useState(2e3),[hs,Lr]=E.useState(3),[gs,Tr]=E.useState(500),[vs,_r]=E.useState(3),[Mr,Fr]=E.useState(5),[xs,Ir]=E.useState(0),[ys,Or]=E.useState(3),[js,$r]=E.useState(5),[Fd,Ns]=E.useState(5),[ws,Dr]=E.useState(8.5),[ks,Ar]=E.useState(9),[Ss,Br]=E.useState(8.8),[bs,Hr]=E.useState(32),[Cs,Ur]=E.useState("Low"),[Ps,Vr]=E.useState("Clay loam, stable"),[Es,Wr]=E.useState("Westfield Valley Fair, Santana Row"),[zs,Qr]=E.useState("Alum Rock Park, Sierra Vista Open Space"),[Rs,Yr]=E.useState(37.3382),[Ls,Gr]=E.useState(-121.8863),rn=()=>{f(""),p("Single Family"),C(""),L(""),D(""),P(""),_(""),U("Occupied"),Fe(32e4),M(25),W(7),Ue(30),Ze(6e3),Ve(2e4),Jt(9e3),Er(3),Zt(1200),zr(3),en(0),Rr(3),nn(2e3),Lr(3),Tr(500),_r(3),Fr(5),Ir(0),Or(3),$r(5),Ns(5),Dr(8.5),Ar(9),Br(8.8),Hr(32),Ur("Low"),Vr("Clay loam, stable"),Wr("Westfield Valley Fair, Santana Row"),Qr("Alum Rock Park, Sierra Vista Open Space"),Yr(37.3382),Gr(-121.8863),j(null)},Id=o=>{j(o),f(o.address),p(o.type),C(o.rent),L(o.tenantName==="Vacant"?"":o.tenantName),D(o.tenantEmail==="-"?"":o.tenantEmail),P(o.leaseStart||""),_(o.leaseEnd||""),U(o.status),Fe(o.purchasePrice??32e4),M(o.downPaymentPercent??25),W(o.interestRate??7),Ue(o.loanTermYears??30),Ze(o.otherPurchaseCosts??6e3),Ve(o.repairCost??2e4),Jt(o.annualPropertyTax??9e3),Er(o.taxIncreasePercent??3),Zt(o.annualInsurance??1200),zr(o.insuranceIncreasePercent??3),en(o.monthlyHOA??0),Rr(o.hoaIncreasePercent??3),nn(o.annualMaintenance??2e3),Lr(o.maintenanceIncreasePercent??3),Tr(o.otherExpenses??500),_r(o.otherExpensesIncreasePercent??3),Fr(o.vacancyRatePercent??5),Ir(o.managementFeePercent??0),Or(o.appreciationRatePercent??3),$r(o.holdingPeriodYears??5),Ns(o.sellingCostPercent??5),Dr(o.schoolElementary??8.5),Ar(o.schoolMiddle??9),Br(o.schoolHigh??8.8),Hr(o.airQualityIndex??32),Ur(o.fireRisk??"Low"),Vr(o.soilType??"Clay loam, stable"),Wr(o.mallsNearby??"Westfield Valley Fair, Santana Row"),Qr(o.forestPreserves??"Alum Rock Park, Sierra Vista Open Space"),Yr(o.latitude??37.3382),Gr(o.longitude??-121.8863)},Ts=()=>({address:I,type:d,rent:parseFloat(g)||0,tenantName:R||"Vacant",tenantEmail:v||"-",leaseStart:O||"",leaseEnd:k||"",status:R?A:"Vacant",purchasePrice:parseFloat(ie)||0,downPaymentPercent:parseFloat(z)||0,interestRate:parseFloat($)||0,loanTermYears:parseInt(K)||0,otherPurchaseCosts:parseFloat(Ne)||0,repairCost:parseFloat(we)||0,annualPropertyTax:parseFloat(Kt)||0,taxIncreasePercent:parseFloat(ms)||0,annualInsurance:parseFloat(Xt)||0,insuranceIncreasePercent:parseFloat(fs)||0,monthlyHOA:parseFloat(qt)||0,hoaIncreasePercent:parseFloat(ps)||0,annualMaintenance:parseFloat(tn)||0,maintenanceIncreasePercent:parseFloat(hs)||0,otherExpenses:parseFloat(gs)||0,otherExpensesIncreasePercent:parseFloat(vs)||0,vacancyRatePercent:parseFloat(Mr)||0,managementFeePercent:parseFloat(xs)||0,appreciationRatePercent:parseFloat(ys)||0,holdingPeriodYears:parseInt(js)||0,sellingCostPercent:parseFloat(Fd)||0,schoolElementary:parseFloat(ws)||0,schoolMiddle:parseFloat(ks)||0,schoolHigh:parseFloat(Ss)||0,airQualityIndex:parseInt(bs)||0,fireRisk:Cs||"Low",soilType:Ps||"Unknown",mallsNearby:Es||"None",forestPreserves:zs||"None",latitude:parseFloat(Rs)||0,longitude:parseFloat(Ls)||0}),Od=async o=>{o.preventDefault(),!(!I||!g)&&(await t(Ts()),N(!1),rn())},$d=async o=>{o.preventDefault(),!(!I||!g)&&(await n(b.id,Ts()),rn())},Dd=o=>{confirm("Are you sure you want to remove this property? All associated tenant tracking will be cleared.")&&r(o)},ln=o=>{const w=o.purchasePrice||32e4,F=w*((o.downPaymentPercent??25)/100),le=w-F,Ie=(o.interestRate??7)/100/12,Ee=(o.loanTermYears??30)*12;let sn=0;Ie>0&&Ee>0?sn=le*(Ie*Math.pow(1+Ie,Ee))/(Math.pow(1+Ie,Ee)-1):Ee>0&&(sn=le/Ee);const _s=F+(o.otherPurchaseCosts??6e3)+(o.repairCost??2e4),lo=o.rent||0,Ms=lo*12,Fs=Ms*((o.vacancyRatePercent??5)/100),so=(Ms-Fs)*((o.managementFeePercent??0)/100),ao=(o.annualPropertyTax??9e3)+(o.annualInsurance??1200)+(o.monthlyHOA??0)*12+(o.annualMaintenance??2e3)+(o.otherExpenses??500)+Fs+so,Is=Math.max(0,Ms-ao),io=sn*12,oo=Is-io,Ud=w>0?Is/w*100:0,Vd=_s>0?oo/_s*100:0,Wd=o.holdingPeriodYears??5,co=[];let Kr=w,an=lo*12,Os=o.annualPropertyTax??9e3,$s=o.annualInsurance??1200,Ds=(o.monthlyHOA??0)*12,As=o.annualMaintenance??2e3,Bs=o.otherExpenses??500;for(let On=1;On<=Wd;On++){Kr=Kr*(1+(o.appreciationRatePercent??3)/100),On>1&&(an=an*(1+(o.crentincrease??3)/100),Os=Os*(1+(o.taxIncreasePercent??3)/100),$s=$s*(1+(o.insuranceIncreasePercent??3)/100),Ds=Ds*(1+(o.hoaIncreasePercent??3)/100),As=As*(1+(o.maintenanceIncreasePercent??3)/100),Bs=Bs*(1+(o.otherExpensesIncreasePercent??3)/100));const uo=an*((o.vacancyRatePercent??5)/100),Qd=(an-uo)*((o.managementFeePercent??0)/100),mo=Os+$s+Ds+As+Bs+uo+Qd,Yd=Math.max(0,an-mo)-io;let $n=0;const Jr=On*12;Ie>0&&Ee>0&&Jr<Ee?$n=le*(Math.pow(1+Ie,Ee)-Math.pow(1+Ie,Jr))/(Math.pow(1+Ie,Ee)-1):Jr>=Ee?$n=0:$n=le-le*(Jr/Ee);const Gd=Math.max(0,Kr-$n);co.push({year:On,value:Math.round(Kr),income:Math.round(an),expenses:Math.round(mo),cashFlow:Math.round(Yd),equity:Math.round(Gd),loanBalance:Math.round($n)})}return{downPayment:F,loanAmount:le,monthlyMortgage:sn,initialCash:_s,vacancyLoss:Fs,managementCost:so,annualExpenses:ao,noi:Is,cashFlow:oo,capRate:Ud,cashOnCash:Vd,projections:co}},Ad=(o,w)=>{if(!o||!w)return 0;const F=new Date(o).getTime(),le=new Date(w).getTime(),Ie=Date.now();if(Ie<F)return 0;if(Ie>le)return 100;const Ee=le-F,sn=Ie-F;return Math.round(sn/Ee*100)},Bd=o=>{if(u.includes(o))m(u.filter(w=>w!==o));else{if(u.length>=3){alert("You can compare a maximum of 3 properties side-by-side.");return}m([...u,o])}},to=o=>{const w=e.find(F=>F.id===parseInt(o));w&&(c(o),Fe(w.purchasePrice??32e4),M(w.downPaymentPercent??25),W(w.interestRate??7),Ue(w.loanTermYears??30),Ze(w.otherPurchaseCosts??6e3),Ve(w.repairCost??2e4),Jt(w.annualPropertyTax??9e3),Er(w.taxIncreasePercent??3),Zt(w.annualInsurance??1200),zr(w.insuranceIncreasePercent??3),en(w.monthlyHOA??0),Rr(w.hoaIncreasePercent??3),nn(w.annualMaintenance??2e3),Lr(w.maintenanceIncreasePercent??3),Tr(w.otherExpenses??500),_r(w.otherExpensesIncreasePercent??3),Fr(w.vacancyRatePercent??5),Ir(w.managementFeePercent??0),Or(w.appreciationRatePercent??3),$r(w.holdingPeriodYears??5),Ns(w.sellingCostPercent??5))},qe=()=>{var w;const o={purchasePrice:ie,downPaymentPercent:z,interestRate:$,loanTermYears:K,otherPurchaseCosts:Ne,repairCost:we,annualPropertyTax:Kt,taxIncreasePercent:ms,annualInsurance:Xt,insuranceIncreasePercent:fs,monthlyHOA:qt,hoaIncreasePercent:ps,annualMaintenance:tn,maintenanceIncreasePercent:hs,otherExpenses:gs,otherExpensesIncreasePercent:vs,vacancyRatePercent:Mr,managementFeePercent:xs,appreciationRatePercent:ys,holdingPeriodYears:js,rent:((w=e.find(F=>F.id===parseInt(i)))==null?void 0:w.rent)||2e3};return ln(o)},Hd=()=>{window.print()};return l.jsxs("div",{className:"properties-view animate-fade-in",children:[l.jsxs("div",{className:"view-header no-print",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Zillow Rentals & Financial Analyzer"}),l.jsx("p",{className:"view-description",children:"Analyze property values, view neighborhood environments, calculate yields, and generate financial reports."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>N(!0),children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add Property"]})]}),l.jsxs("div",{className:"sub-tabs-container no-print",children:[l.jsx("button",{className:`sub-tab-btn ${s==="portfolio"?"active":""}`,onClick:()=>a("portfolio"),children:"📂 Portfolio List"}),l.jsx("button",{className:`sub-tab-btn ${s==="roi"?"active":""}`,onClick:()=>{a("roi"),e.length>0&&!i&&to(e[0].id)},children:"📊 ROI Calculator"}),l.jsxs("button",{className:`sub-tab-btn ${s==="compare"?"active":""}`,onClick:()=>a("compare"),children:["⚖️ Compare Sheet (",u.length,"/3)"]})]}),s==="portfolio"&&l.jsx(l.Fragment,{children:e.length===0?l.jsxs("div",{className:"empty-properties-state glass-card no-print",children:[l.jsx("div",{className:"empty-icon",children:"🏠"}),l.jsx("h3",{children:"No properties added yet"}),l.jsx("p",{children:"Register your first property to view Zillow maps, nearby schools, environmental data, and compute cash flow yields."}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>N(!0),children:"Add Property Now"})]}):l.jsx("div",{className:"grid-3 no-print",children:e.map(o=>{const w=y===o.id;Ad(o.leaseStart,o.leaseEnd);const F=ln(o),le=o.status==="Occupied"?"badge-success":o.status==="Maintenance"?"badge-warning":"badge-danger";return l.jsxs("div",{className:"property-card glass-card",children:[l.jsxs("div",{className:"prop-card-header",children:[l.jsx("span",{className:"property-type-tag",children:o.type}),l.jsx("span",{className:`badge ${le}`,children:o.status})]}),l.jsx("h3",{className:"property-address",children:o.address}),l.jsxs("div",{className:"rent-ticker",children:[l.jsxs("span",{className:"rent-amount",children:["$",o.rent.toLocaleString()]}),l.jsx("span",{className:"rent-period",children:"/ month"})]}),l.jsxs("div",{className:"small-financial-yields",children:[l.jsxs("div",{className:"yield-mini-badge",children:[l.jsx("span",{className:"yield-lbl",children:"Cap Rate"}),l.jsxs("span",{className:"yield-val text-primary",children:[F.capRate.toFixed(2),"%"]})]}),l.jsxs("div",{className:"yield-mini-badge",children:[l.jsx("span",{className:"yield-lbl",children:"Cash-on-Cash"}),l.jsxs("span",{className:"yield-val text-warning",children:[F.cashOnCash.toFixed(2),"%"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("div",{className:"tenant-details",children:l.jsxs("div",{className:"details-row",children:[l.jsx("span",{className:"detail-lbl",children:"Tenant:"}),l.jsx("span",{className:"detail-val",children:o.tenantName})]})}),w&&l.jsxs("div",{className:"expanded-zillow-details animate-fade-in",children:[l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"expanded-section-title",children:"🎓 GreatSchools™ Rating"}),l.jsxs("div",{className:"schools-rating-box",children:[l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Elementary School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolElementary??8)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolElementary??8).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Middle School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolMiddle??8)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolMiddle??8).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"High School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolHigh??8)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolHigh??8.5).toFixed(1),"/10"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"expanded-section-title",children:"🌱 Environment & Geography"}),l.jsxs("div",{className:"environ-info-grid",children:[l.jsxs("div",{className:"environ-card",children:[l.jsx("span",{className:"env-title",children:"Air Quality Index"}),l.jsxs("span",{className:"env-val",children:[o.airQualityIndex??32," AQI (Good)"]})]}),l.jsxs("div",{className:"environ-card",children:[l.jsx("span",{className:"env-title",children:"Wildfire Risk"}),l.jsx("span",{className:"env-val font-semibold text-warning",children:o.fireRisk??"Low"})]}),l.jsxs("div",{className:"environ-card",children:[l.jsx("span",{className:"env-title",children:"Soil Framework"}),l.jsx("span",{className:"env-val",children:o.soilType??"Clay loam, stable"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"expanded-section-title",children:"🛍️ Nearby Amenities"}),l.jsxs("div",{className:"amenities-box",children:[l.jsxs("div",{className:"amenity-row",children:[l.jsx("span",{className:"amenity-lbl",children:"Forest Preserves:"}),l.jsx("span",{className:"amenity-val",children:o.forestPreserves??"None"})]}),l.jsxs("div",{className:"amenity-row",children:[l.jsx("span",{className:"amenity-lbl",children:"Shopping Malls:"}),l.jsx("span",{className:"amenity-val",children:o.mallsNearby??"None"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"expanded-section-title",children:"📍 Zillow Interactive Map Coordinates"}),l.jsxs("div",{className:"mock-map-box",children:[l.jsx("div",{className:"mock-map-marker",children:"📍"}),l.jsxs("div",{className:"mock-map-details",children:[l.jsx("strong",{children:"Lat/Long:"})," ",o.latitude??"37.33",", ",o.longitude??"-121.88",l.jsx("br",{}),l.jsx("span",{className:"text-muted",children:"Interactive Map Overlay (OpenStreetMap/Leaflet Layer Loaded)"})]})]})]}),l.jsxs("div",{className:"card-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",style:{flex:1.5},onClick:()=>x(w?null:o.id),children:w?"Hide Zillow Info":"Zillow & environment"}),l.jsx("button",{className:"btn btn-secondary btn-sm",style:{flex:1},onClick:()=>Id(o),children:"Edit"}),l.jsx("button",{className:`btn btn-sm ${u.includes(o.id)?"btn-primary":"btn-secondary"}`,style:{padding:"0.5rem"},onClick:()=>Bd(o.id),title:"Add to comparison sheet",children:"⚖️"}),l.jsx("button",{className:"btn btn-danger btn-sm",style:{padding:"0.5rem"},onClick:()=>Dd(o.id),children:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"3 6 5 6 21 6"}),l.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]},o.id)})})}),s==="roi"&&l.jsx("div",{className:"roi-calculator-container",children:e.length===0?l.jsxs("div",{className:"empty-properties-state glass-card no-print",children:[l.jsx("div",{className:"empty-icon",children:"📊"}),l.jsx("h3",{children:"Please add a property first"}),l.jsx("p",{children:"You need to have at least one property registered in your portfolio to compute ROI cash flow models."})]}):l.jsxs("div",{className:"calculator-layout-grid",children:[l.jsxs("div",{className:"calculator-inputs-column glass-card no-print",children:[l.jsx("h3",{className:"section-title",children:"Calculator Inputs"}),l.jsxs("div",{className:"form-group",style:{marginBottom:"1.5rem"},children:[l.jsx("label",{className:"form-label font-bold",children:"Select Portfolio Property"}),l.jsx("select",{value:i,onChange:o=>to(o.target.value),className:"form-select",children:e.map(o=>l.jsx("option",{value:o.id,children:o.address},o.id))})]}),l.jsx("div",{className:"prop-divider"}),l.jsxs("div",{className:"inputs-section",children:[l.jsx("h4",{className:"inputs-group-title",children:"💰 Loan & Purchase"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:ie,onChange:o=>Fe(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:z,onChange:o=>M(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:$,onChange:o=>W(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Loan Term (Years)"}),l.jsx("input",{type:"number",value:K,onChange:o=>Ue(parseInt(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Other Purchase Costs ($)"}),l.jsx("input",{type:"number",value:Ne,onChange:o=>Ze(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Repair Costs ($)"}),l.jsx("input",{type:"number",value:we,onChange:o=>Ve(parseFloat(o.target.value)||0),className:"form-input"})]})]})]}),l.jsxs("div",{className:"inputs-section",style:{marginTop:"1.5rem"},children:[l.jsx("h4",{className:"inputs-group-title",children:"📈 Income, Fees & Appreciation"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Appreciation Rate (%/yr)"}),l.jsx("input",{type:"number",step:"0.1",value:ys,onChange:o=>Or(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Vacancy Rate (%)"}),l.jsx("input",{type:"number",value:Mr,onChange:o=>Fr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Management Fee (%)"}),l.jsx("input",{type:"number",value:xs,onChange:o=>Ir(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Holding Period (Years)"}),l.jsx("input",{type:"number",value:js,onChange:o=>$r(parseInt(o.target.value)||0),className:"form-input"})]})]})]}),l.jsxs("div",{className:"inputs-section",style:{marginTop:"1.5rem"},children:[l.jsx("h4",{className:"inputs-group-title",children:"🛠️ Recurring Expenses & Growth Rates"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Tax ($/yr)"}),l.jsx("input",{type:"number",value:Kt,onChange:o=>Jt(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tax Increase (%/yr)"}),l.jsx("input",{type:"number",value:ms,onChange:o=>Er(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"HOI / Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Xt,onChange:o=>Zt(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"HOI Increase (%/yr)"}),l.jsx("input",{type:"number",value:fs,onChange:o=>zr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly HOA ($)"}),l.jsx("input",{type:"number",value:qt,onChange:o=>en(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"HOA Increase (%/yr)"}),l.jsx("input",{type:"number",value:ps,onChange:o=>Rr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Maintenance ($/yr)"}),l.jsx("input",{type:"number",value:tn,onChange:o=>nn(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Maint. Increase (%/yr)"}),l.jsx("input",{type:"number",value:hs,onChange:o=>Lr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Other Expenses ($/yr)"}),l.jsx("input",{type:"number",value:gs,onChange:o=>Tr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Other Increase (%/yr)"}),l.jsx("input",{type:"number",value:vs,onChange:o=>_r(parseFloat(o.target.value)||0),className:"form-input"})]})]})]}),l.jsx("button",{type:"button",className:"btn btn-primary w-full",style:{marginTop:"1.5rem"},onClick:()=>{const o=e.find(w=>w.id===parseInt(i));o&&(n(o.id,Ts()),alert("Property financials saved successfully!"))},children:"💾 Save Inputs to Property"})]}),l.jsxs("div",{className:"calculator-outputs-column glass-card print-sheet",children:[l.jsxs("div",{className:"sheet-print-header",children:[l.jsx("h2",{children:"RealPal Financial Property Sheet"}),l.jsx("p",{className:"address-lbl",children:(no=e.find(o=>o.id===parseInt(i)))==null?void 0:no.address}),l.jsxs("p",{className:"date-stamp",children:["Generated: ",new Date().toLocaleDateString()," | ROI model values"]})]}),l.jsx("div",{className:"prop-divider print-only"}),l.jsxs("div",{className:"grid-3 yields-summary-cards",children:[l.jsxs("div",{className:"yield-card glass-card",children:[l.jsx("span",{className:"card-lbl",children:"Cap Rate"}),l.jsxs("span",{className:"card-val text-primary",children:[qe().capRate.toFixed(2),"%"]})]}),l.jsxs("div",{className:"yield-card glass-card",children:[l.jsx("span",{className:"card-lbl",children:"Cash-on-Cash"}),l.jsxs("span",{className:"card-val text-warning",children:[qe().cashOnCash.toFixed(2),"%"]})]}),l.jsxs("div",{className:"yield-card glass-card",children:[l.jsx("span",{className:"card-lbl",children:"Net Operating Income"}),l.jsxs("span",{className:"card-val text-success",children:["$",Math.round(qe().noi).toLocaleString(),"/yr"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsxs("div",{className:"grid-2 financial-details-grid",children:[l.jsxs("div",{className:"calc-sub-box",children:[l.jsx("h4",{children:"📥 Initial Cash Investment Breakdown"}),l.jsx("table",{className:"financials-compact-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsxs("td",{children:["Down Payment (",z,"%)"]}),l.jsxs("td",{className:"text-right font-bold",children:["$",Math.round(qe().downPayment).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Purchase Price"}),l.jsxs("td",{className:"text-right font-bold",children:["$",ie.toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:["Loan Amount (",100-z,"%)"]}),l.jsxs("td",{className:"text-right",children:["$",Math.round(qe().loanAmount).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Other Closing Costs"}),l.jsxs("td",{className:"text-right",children:["$",Ne.toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Initial Repair Budget"}),l.jsxs("td",{className:"text-right",children:["$",we.toLocaleString()]})]}),l.jsxs("tr",{className:"border-t font-semibold",children:[l.jsx("td",{children:"Total Cash Invested"}),l.jsxs("td",{className:"text-right text-success",children:["$",Math.round(qe().initialCash).toLocaleString()]})]})]})})]}),l.jsxs("div",{className:"calc-sub-box",children:[l.jsx("h4",{children:"📤 Cash Flow & Expenses (Year 1)"}),l.jsx("table",{className:"financials-compact-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Gross Rent (Monthly)"}),l.jsxs("td",{className:"text-right font-bold",children:["$",(((ro=e.find(o=>o.id===parseInt(i)))==null?void 0:ro.rent)||0).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:["Vacancy Allowance (",Mr,"%)"]}),l.jsxs("td",{className:"text-right text-danger",children:["-$",Math.round(qe().vacancyLoss/12).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Mortgage Payment (Monthly)"}),l.jsxs("td",{className:"text-right text-danger",children:["-$",Math.round(qe().monthlyMortgage).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Taxes & HOI (Monthly)"}),l.jsxs("td",{className:"text-right text-danger",children:["-$",Math.round((Kt+Xt)/12).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"HOA & Maintenance (Monthly)"}),l.jsxs("td",{className:"text-right text-danger",children:["-$",Math.round(qt+tn/12).toLocaleString()]})]}),l.jsxs("tr",{className:"border-t font-semibold",children:[l.jsx("td",{children:"Net Monthly Cash Flow"}),l.jsxs("td",{className:"text-right text-warning",children:["$",Math.round(qe().cashFlow/12).toLocaleString(),"/mo"]})]})]})})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"section-subtitle",children:"📈 Multi-Year Value & Cash Flow Projections"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"projections-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Year"}),l.jsx("th",{children:"Property Value"}),l.jsx("th",{children:"Rental Income"}),l.jsx("th",{children:"Expenses"}),l.jsx("th",{children:"Cash Flow"}),l.jsx("th",{children:"Loan Balance"}),l.jsx("th",{children:"Equity"})]})}),l.jsx("tbody",{children:qe().projections.map(o=>l.jsxs("tr",{children:[l.jsxs("td",{children:["Year ",o.year]}),l.jsxs("td",{children:["$",o.value.toLocaleString()]}),l.jsxs("td",{children:["$",o.income.toLocaleString()]}),l.jsxs("td",{children:["$",o.expenses.toLocaleString()]}),l.jsxs("td",{className:o.cashFlow>=0?"text-success":"text-danger",children:["$",o.cashFlow.toLocaleString()]}),l.jsxs("td",{children:["$",o.loanBalance.toLocaleString()]}),l.jsxs("td",{className:"font-bold text-success",children:["$",o.equity.toLocaleString()]})]},o.year))})]})}),l.jsx("div",{style:{marginTop:"1.5rem",display:"flex",justifyContent:"flex-end"},className:"no-print",children:l.jsx("button",{onClick:Hd,className:"btn btn-secondary btn-sm",children:"🖨️ Export PDF Property Sheet"})})]})]})}),s==="compare"&&l.jsx("div",{className:"property-comparison-container no-print",children:u.length===0?l.jsxs("div",{className:"empty-properties-state glass-card",children:[l.jsx("div",{className:"empty-icon",children:"⚖️"}),l.jsx("h3",{children:"No properties selected for comparison"}),l.jsxs("p",{children:["Go back to the ",l.jsx("strong",{children:"Portfolio List"})," tab and check the scale buttons (⚖️) on up to 3 cards to generate a comparison sheet."]})]}):l.jsxs("div",{className:"comparison-table-wrapper glass-card",children:[l.jsx("h3",{className:"section-title",style:{marginBottom:"1.5rem"},children:"⚖️ Property Comparison Sheet"}),l.jsxs("table",{className:"compare-sheet-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Feature Metric"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsx("th",{className:"text-center font-bold text-gradient",children:w==null?void 0:w.address},o)})]})}),l.jsxs("tbody",{children:[l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:u.length+1,children:"🏡 Basic Details"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Property Type"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsx("td",{className:"text-center",children:w==null?void 0:w.type},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Status"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsx("td",{className:"text-center",children:w==null?void 0:w.status},o)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:u.length+1,children:"🎓 GreatSchools™ Ratings"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Elementary School"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsxs("td",{className:"text-center font-bold text-success",children:[((w==null?void 0:w.schoolElementary)??8).toFixed(1),"/10"]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Middle School"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsxs("td",{className:"text-center font-bold text-success",children:[((w==null?void 0:w.schoolMiddle)??8).toFixed(1),"/10"]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"High School"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsxs("td",{className:"text-center font-bold text-success",children:[((w==null?void 0:w.schoolHigh)??8.5).toFixed(1),"/10"]},o)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:u.length+1,children:"🌱 Location Hazards & Environment"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Air Quality Index"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsxs("td",{className:"text-center",children:[(w==null?void 0:w.airQualityIndex)??32," AQI (Good)"]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Wildfire Risk"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsx("td",{className:"text-center text-warning font-semibold",children:(w==null?void 0:w.fireRisk)??"Low"},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Soil Context"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsx("td",{className:"text-center",children:(w==null?void 0:w.soilType)??"Clay loam, stable"},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Malls Nearby"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsx("td",{className:"text-center font-normal",children:(w==null?void 0:w.mallsNearby)??"None"},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Forest Preserves"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsx("td",{className:"text-center font-normal",children:(w==null?void 0:w.forestPreserves)??"None"},o)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:u.length+1,children:"💰 ROI & Cash Yields (Year 1)"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Purchase Price"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsxs("td",{className:"text-center font-bold",children:["$",((w==null?void 0:w.purchasePrice)??32e4).toLocaleString()]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Monthly Rent"}),u.map(o=>{const w=e.find(F=>F.id===o);return l.jsxs("td",{className:"text-center font-bold",children:["$",((w==null?void 0:w.rent)??0).toLocaleString()]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Cap Rate"}),u.map(o=>{const w=e.find(le=>le.id===o),F=ln(w||{});return l.jsxs("td",{className:"text-center text-primary font-bold",children:[F.capRate.toFixed(2),"%"]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Cash-on-Cash Return"}),u.map(o=>{const w=e.find(le=>le.id===o),F=ln(w||{});return l.jsxs("td",{className:"text-center text-warning font-bold",children:[F.cashOnCash.toFixed(2),"%"]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"NOI"}),u.map(o=>{const w=e.find(le=>le.id===o),F=ln(w||{});return l.jsxs("td",{className:"text-center text-success",children:["$",Math.round(F.noi).toLocaleString(),"/yr"]},o)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"metric-lbl",children:"Monthly Cash Flow"}),u.map(o=>{const w=e.find(le=>le.id===o),F=ln(w||{});return l.jsxs("td",{className:"text-center text-success",children:["$",Math.round(F.cashFlow/12).toLocaleString(),"/mo"]},o)})]})]})]}),l.jsx("div",{style:{marginTop:"1rem",display:"flex",gap:"0.75rem",justifyContent:"flex-end"},children:l.jsx("button",{onClick:()=>m([]),className:"btn btn-secondary btn-sm",children:"Clear Selection"})})]})}),h&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>{N(!1),rn()},children:"×"}),l.jsx("h3",{className:"modal-title",children:"Register Property"}),l.jsx("p",{className:"modal-subtitle",children:"Register property parameters, Zillow locations, and initial ROI variables."}),l.jsxs("form",{onSubmit:Od,style:{marginTop:"1.25rem"},className:"modal-scroll-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Street Address *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. 742 Evergreen Terrace, Springfield",value:I,onChange:o=>f(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Type"}),l.jsxs("select",{value:d,onChange:o=>p(o.target.value),className:"form-select",children:[l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"}),l.jsx("option",{value:"Townhouse",children:"Townhouse"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly Rent ($) *"}),l.jsx("input",{type:"number",required:!0,min:"0",placeholder:"e.g. 3100",value:g,onChange:o=>C(o.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Full Name (Optional)"}),l.jsx("input",{type:"text",placeholder:"Leave empty if vacant",value:R,onChange:o=>L(o.target.value),className:"form-input"})]}),R&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Email"}),l.jsx("input",{type:"email",placeholder:"e.g. tenant@domain.com",value:v,onChange:o=>D(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease Start Date"}),l.jsx("input",{type:"date",value:O,onChange:o=>P(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease End Date"}),l.jsx("input",{type:"date",value:k,onChange:o=>_(o.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Occupancy Status"}),l.jsxs("select",{value:A,onChange:o=>U(o.target.value),className:"form-select",children:[l.jsx("option",{value:"Occupied",children:"Occupied"}),l.jsx("option",{value:"Maintenance",children:"Maintenance Required"})]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"📊 Acquisition & ROI Parameters"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:ie,onChange:o=>Fe(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:z,onChange:o=>M(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:$,onChange:o=>W(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Loan Term (Years)"}),l.jsx("input",{type:"number",value:K,onChange:o=>Ue(parseInt(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Other Closings ($)"}),l.jsx("input",{type:"number",value:Ne,onChange:o=>Ze(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Repair Costs ($)"}),l.jsx("input",{type:"number",value:we,onChange:o=>Ve(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Taxes ($/yr)"}),l.jsx("input",{type:"number",value:Kt,onChange:o=>Jt(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Xt,onChange:o=>Zt(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly HOA ($)"}),l.jsx("input",{type:"number",value:qt,onChange:o=>en(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Maintenance ($)"}),l.jsx("input",{type:"number",value:tn,onChange:o=>nn(parseFloat(o.target.value)||0),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"🎓 Schools & Environments"}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Elem. School (1-10)"}),l.jsx("input",{type:"number",step:"0.1",min:"1",max:"10",value:ws,onChange:o=>Dr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Middle School (1-10)"}),l.jsx("input",{type:"number",step:"0.1",min:"1",max:"10",value:ks,onChange:o=>Ar(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"High School (1-10)"}),l.jsx("input",{type:"number",step:"0.1",min:"1",max:"10",value:Ss,onChange:o=>Br(parseFloat(o.target.value)||0),className:"form-input"})]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Air Quality Index (AQI)"}),l.jsx("input",{type:"number",value:bs,onChange:o=>Hr(parseInt(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Wildfire Risk"}),l.jsxs("select",{value:Cs,onChange:o=>Ur(o.target.value),className:"form-select",children:[l.jsx("option",{value:"Very Low",children:"Very Low"}),l.jsx("option",{value:"Low",children:"Low"}),l.jsx("option",{value:"Medium",children:"Medium"}),l.jsx("option",{value:"High",children:"High"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Soil Framework"}),l.jsx("input",{type:"text",value:Ps,onChange:o=>Vr(o.target.value),className:"form-input",placeholder:"e.g. Clay loam, stable"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nearby Malls"}),l.jsx("input",{type:"text",value:Es,onChange:o=>Wr(o.target.value),className:"form-input",placeholder:"e.g. Westfield, Third Street"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nearby Forest Preserves"}),l.jsx("input",{type:"text",value:zs,onChange:o=>Qr(o.target.value),className:"form-input",placeholder:"e.g. Alum Rock Park"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Latitude"}),l.jsx("input",{type:"number",step:"0.0001",value:Rs,onChange:o=>Yr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Longitude"}),l.jsx("input",{type:"number",step:"0.0001",value:Ls,onChange:o=>Gr(parseFloat(o.target.value)||0),className:"form-input"})]})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>{N(!1),rn()},children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Register Property"})]})]})]})}),b&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:rn,children:"×"}),l.jsx("h3",{className:"modal-title",children:"Edit Property Details"}),l.jsx("p",{className:"modal-subtitle",children:"Modify parameters, ROI data, and Zillow environmental variables."}),l.jsxs("form",{onSubmit:$d,style:{marginTop:"1.25rem"},className:"modal-scroll-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Street Address *"}),l.jsx("input",{type:"text",required:!0,value:I,onChange:o=>f(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Type"}),l.jsxs("select",{value:d,onChange:o=>p(o.target.value),className:"form-select",children:[l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"}),l.jsx("option",{value:"Townhouse",children:"Townhouse"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly Rent ($) *"}),l.jsx("input",{type:"number",required:!0,min:"0",value:g,onChange:o=>C(o.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Full Name"}),l.jsx("input",{type:"text",placeholder:"Vacant",value:R,onChange:o=>L(o.target.value),className:"form-input"})]}),R&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Email"}),l.jsx("input",{type:"email",placeholder:"tenant@domain.com",value:v,onChange:o=>D(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease Start Date"}),l.jsx("input",{type:"date",value:O,onChange:o=>P(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease End Date"}),l.jsx("input",{type:"date",value:k,onChange:o=>_(o.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Occupancy Status"}),l.jsxs("select",{value:A,onChange:o=>U(o.target.value),className:"form-select",children:[l.jsx("option",{value:"Occupied",children:"Occupied"}),l.jsx("option",{value:"Maintenance",children:"Maintenance Required"})]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"📊 Acquisition & ROI Parameters"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:ie,onChange:o=>Fe(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:z,onChange:o=>M(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:$,onChange:o=>W(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Loan Term (Years)"}),l.jsx("input",{type:"number",value:K,onChange:o=>Ue(parseInt(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Other Closings ($)"}),l.jsx("input",{type:"number",value:Ne,onChange:o=>Ze(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Repair Costs ($)"}),l.jsx("input",{type:"number",value:we,onChange:o=>Ve(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Taxes ($/yr)"}),l.jsx("input",{type:"number",value:Kt,onChange:o=>Jt(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Xt,onChange:o=>Zt(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly HOA ($)"}),l.jsx("input",{type:"number",value:qt,onChange:o=>en(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Maintenance ($)"}),l.jsx("input",{type:"number",value:tn,onChange:o=>nn(parseFloat(o.target.value)||0),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"🎓 Schools & Environments"}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Elem. School (1-10)"}),l.jsx("input",{type:"number",step:"0.1",min:"1",max:"10",value:ws,onChange:o=>Dr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Middle School (1-10)"}),l.jsx("input",{type:"number",step:"0.1",min:"1",max:"10",value:ks,onChange:o=>Ar(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"High School (1-10)"}),l.jsx("input",{type:"number",step:"0.1",min:"1",max:"10",value:Ss,onChange:o=>Br(parseFloat(o.target.value)||0),className:"form-input"})]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Air Quality Index (AQI)"}),l.jsx("input",{type:"number",value:bs,onChange:o=>Hr(parseInt(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Wildfire Risk"}),l.jsxs("select",{value:Cs,onChange:o=>Ur(o.target.value),className:"form-select",children:[l.jsx("option",{value:"Very Low",children:"Very Low"}),l.jsx("option",{value:"Low",children:"Low"}),l.jsx("option",{value:"Medium",children:"Medium"}),l.jsx("option",{value:"High",children:"High"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Soil Framework"}),l.jsx("input",{type:"text",value:Ps,onChange:o=>Vr(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nearby Malls"}),l.jsx("input",{type:"text",value:Es,onChange:o=>Wr(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nearby Forest Preserves"}),l.jsx("input",{type:"text",value:zs,onChange:o=>Qr(o.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Latitude"}),l.jsx("input",{type:"number",step:"0.0001",value:Rs,onChange:o=>Yr(parseFloat(o.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Longitude"}),l.jsx("input",{type:"number",step:"0.0001",value:Ls,onChange:o=>Gr(parseFloat(o.target.value)||0),className:"form-input"})]})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:rn,children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Save Changes"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .sub-tabs-container {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .sub-tab-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.6rem 1.2rem;
          font-size: 0.9rem;
          font-weight: 650;
          cursor: pointer;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .sub-tab-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.04);
        }

        .sub-tab-btn.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .small-financial-yields {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .yield-mini-badge {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.35rem;
          border-radius: var(--radius-sm);
        }

        .yield-mini-badge .yield-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
        }

        .yield-mini-badge .yield-val {
          font-size: 0.95rem;
          font-weight: 800;
        }

        .expanded-zillow-details {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .expanded-section-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .schools-rating-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .school-rating-bar {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          gap: 0.5rem;
        }

        .school-lbl {
          flex: 1.5;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .rating-track-wrapper {
          flex: 2;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .rating-track-fill {
          height: 100%;
          background: linear-gradient(90deg, #ecc94b 0%, #48bb78 100%);
          border-radius: var(--radius-full);
        }

        .rating-num {
          flex: 0.8;
          text-align: right;
          font-weight: 750;
          color: #48bb78;
        }

        .environ-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .environ-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .env-title {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
          font-weight: 600;
        }

        .env-val {
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
        }

        .amenities-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .amenity-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
        }

        .amenity-lbl {
          color: var(--text-muted);
          font-weight: 600;
        }

        .amenity-val {
          color: var(--text-primary);
          font-weight: 600;
          max-width: 60%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mock-map-box {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mock-map-marker {
          font-size: 1.5rem;
        }

        .mock-map-details {
          font-size: 0.75rem;
          line-height: 1.4;
          color: var(--text-secondary);
        }

        .modal-scroll-form {
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .modal-section-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #fff;
          margin: 1.25rem 0 0.75rem 0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* ROI Calculator Styles */
        .calculator-layout-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 1.5rem;
          align-items: start;
        }

        .calculator-inputs-column {
          background: var(--bg-card);
          padding: 1.5rem;
        }

        .calculator-outputs-column {
          background: var(--bg-card);
          padding: 1.75rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
        }

        .inputs-group-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--color-primary);
          text-transform: uppercase;
          margin-bottom: 0.85rem;
          letter-spacing: 0.04em;
        }

        .yields-summary-cards {
          margin: 1.25rem 0;
        }

        .yield-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
        }

        .yield-card .card-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .yield-card .card-val {
          font-size: 1.45rem;
          font-weight: 850;
        }

        .calc-sub-box h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .financials-compact-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.82rem;
        }

        .financials-compact-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
        }

        .financials-compact-table tr.border-t td {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 0.6rem;
          color: #fff;
        }

        .projections-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
          margin-top: 0.75rem;
        }

        .projections-table th, .projections-table td {
          padding: 0.6rem 0.5rem;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .projections-table th {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          font-weight: 700;
        }

        .projections-table td {
          color: var(--text-primary);
        }

        .compare-sheet-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .compare-sheet-table th, .compare-sheet-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .compare-sheet-table th {
          background: rgba(0, 0, 0, 0.2);
          color: #fff;
        }

        .compare-sheet-table td {
          color: var(--text-primary);
        }

        .compare-sheet-table tr.section-row td {
          background: rgba(255, 255, 255, 0.03);
          font-weight: 850;
          color: #fff;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        .compare-sheet-table .metric-lbl {
          font-weight: 750;
          color: var(--text-muted);
          width: 25%;
        }

        /* Printable Sheet Styling (Print Media Override) */
        .sheet-print-header {
          display: none;
        }

        @media print {
          body * {
            visibility: hidden !important;
          }
          .print-sheet, .print-sheet * {
            visibility: visible !important;
          }
          .print-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            color: #000 !important;
            background: #fff !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .sheet-print-header {
            display: block !important;
            margin-bottom: 1.5rem;
            color: #000 !important;
            border-bottom: 2px solid #000;
            padding-bottom: 0.5rem;
          }
          .sheet-print-header h2 {
            font-size: 20pt;
            font-weight: bold;
            margin: 0;
          }
          .sheet-print-header .address-lbl {
            font-size: 14pt;
            font-weight: 600;
            margin: 4px 0 0 0;
          }
          .sheet-print-header .date-stamp {
            font-size: 9pt;
            color: #555;
            margin: 4px 0 0 0;
          }
          .no-print {
            display: none !important;
          }
          .yield-card {
            background: #f7fafc !important;
            border: 1px solid #cbd5e0 !important;
            color: #000 !important;
          }
          .yield-card .card-val {
            color: #000 !important;
          }
          .projections-table th {
            background: #edf2f7 !important;
            color: #000 !important;
            border-bottom: 2px solid #cbd5e0 !important;
          }
          .projections-table td {
            color: #000 !important;
            border-bottom: 1px solid #e2e8f0 !important;
          }
          .financials-compact-table td {
            color: #333 !important;
            border-bottom: 1px solid #edf2f7 !important;
          }
          .financials-compact-table tr.border-t td {
            border-top: 2px solid #000 !important;
            color: #000 !important;
          }
          .text-success {
            color: #2f855a !important;
          }
          .text-warning {
            color: #c05621 !important;
          }
          .text-danger {
            color: #9b2c2c !important;
          }
        }
      `}})]})}function Pp({properties:e,jobs:t,onAddJob:n,bids:r,onAcceptBid:s,groupDeals:a,onToggleGroupDeal:i}){const[c,u]=E.useState(!1),[m,y]=E.useState(null),[x,h]=E.useState(""),[N,b]=E.useState(""),[j,I]=E.useState("Plumbing"),[f,d]=E.useState(""),[p,g]=E.useState(""),C=async v=>{if(v.preventDefault(),!x||!N||!p)return;const D=e.find(k=>k.id.toString()===N.toString()),O=D?D.address:"Unknown Property",P={title:x,propertyId:N,propertyName:O,category:j,description:f,budget:parseFloat(p)};await n(P),u(!1),h(""),b(""),I("Plumbing"),d(""),g("")},R=async(v,D)=>{await s(v,D),y(null)},L=v=>{i(v)};return l.jsxs("div",{className:"crowdsource-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Crowdsourced Services"}),l.jsx("p",{className:"view-description",children:"Post repair tickets to secure bids or join collective pools in your ZIP code for volume discounts."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>{e.length===0?alert("Please register a property in the 'Rental Properties' tab first before listing maintenance jobs."):u(!0)},children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Post Repair Ticket"]})]}),l.jsxs("div",{className:"marketplace-layout",children:[l.jsxs("div",{className:"tickets-column",children:[l.jsx("h3",{className:"column-title",children:"Active Repair Tickets"}),l.jsx("p",{className:"column-p",children:"Submit issues to trigger auto-competitions among verified local providers."}),t.length===0?l.jsxs("div",{className:"empty-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔧"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No maintenance tickets"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Your active service queries and bid entries will be detailed here."})]}):l.jsx("div",{className:"tickets-list",children:t.map(v=>{var P,k;const D=r[v.id]||[],O=v.status==="bidding"?"badge-primary":v.status==="active"?"badge-success":"badge-info";return l.jsxs("div",{className:"ticket-card glass-card",children:[l.jsxs("div",{className:"ticket-header",children:[l.jsx("span",{className:`badge ${O}`,children:v.status==="bidding"?"Gathering Bids":v.status==="active"?"Service Scheduled":"Completed"}),l.jsxs("span",{className:"ticket-date",children:["Posted ",v.datePosted]})]}),l.jsx("h4",{className:"ticket-title",children:v.title}),l.jsxs("div",{className:"ticket-meta",children:[l.jsxs("span",{children:["📍 ",v.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["🏷️ ",v.category]})]}),l.jsx("p",{className:"ticket-desc",children:v.description}),l.jsxs("div",{className:"ticket-footer",children:[l.jsxs("div",{className:"ticket-budget",children:[l.jsx("span",{className:"lbl",children:"Target Budget:"}),l.jsxs("span",{className:"val",children:["$",v.budget]})]}),v.status==="bidding"?l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(v),children:["View Bids (",D.length,")",D.length>0&&l.jsx("span",{className:"bid-alert-dot"})]}):l.jsxs("div",{className:"hired-badge",children:[l.jsxs("span",{children:["Hired: ",(P=v.acceptedBid)==null?void 0:P.providerName," ($",(k=v.acceptedBid)==null?void 0:k.price,")"]}),v.savings>0&&l.jsxs("span",{className:"savings-tag",children:["Saved $",v.savings,"!"]})]})]})]},v.id)})})]}),l.jsxs("div",{className:"pools-column",children:[l.jsx("h3",{className:"column-title",children:"Neighborhood Bulk Pools"}),l.jsx("p",{className:"column-p",children:"Pool properties with nearby landlords in the same ZIP code to negotiate bulk pricing from vendors."}),l.jsx("div",{className:"pools-list",children:a.map(v=>l.jsxs("div",{className:`pool-card glass-card ${v.unlocked===1?"unlocked-card":""}`,children:[l.jsxs("div",{className:"pool-header",children:[l.jsxs("span",{className:"pool-zip",children:["ZIP: ",v.zipCode]}),l.jsx("span",{className:`badge ${v.unlocked===1?"badge-success":"badge-warning"}`,children:v.unlocked===1?"💰 Discount Unlocked!":`${v.targetCount-v.currentCount} Landlords Needed`})]}),l.jsx("h4",{className:"pool-service-title",children:v.serviceType}),l.jsx("p",{className:"pool-desc",children:v.description}),l.jsxs("div",{className:"pool-stats",children:[l.jsxs("div",{className:"progress-labels",children:[l.jsxs("span",{children:["Joined: ",v.currentCount," / ",v.targetCount," Landlords"]}),l.jsxs("span",{children:[Math.round(v.currentCount/v.targetCount*100),"%"]})]}),l.jsx("div",{className:"progress-bar-track",children:l.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(100,v.currentCount/v.targetCount*100)}%`,backgroundColor:v.unlocked===1?"var(--color-success)":"var(--color-primary)"}})})]}),l.jsxs("div",{className:"pool-pricing-grid",children:[l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Bulk Rate"}),l.jsxs("span",{className:"val",children:["$",v.bulkPrice]})]}),l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Est. Savings"}),l.jsxs("span",{className:"val text-success",children:["-",v.discountPercent,"%"]})]})]}),l.jsx("button",{className:`btn ${v.joined===1?"btn-danger":"btn-primary"} btn-sm w-100`,onClick:()=>L(v.id),children:v.joined===1?"Leave Group Pool":"Join Collective Pool"})]},v.id))})]})]}),c&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>u(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Post Maintenance Ticket"}),l.jsx("p",{className:"modal-subtitle",children:"Post repair requirements. Our local network will bid within minutes."}),l.jsxs("form",{onSubmit:C,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Issue Title *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Broken water heater, Gutter maintenance",value:x,onChange:v=>h(v.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Select Property *"}),l.jsxs("select",{required:!0,value:N,onChange:v=>b(v.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose property --"}),e.map(v=>l.jsx("option",{value:v.id,children:v.address},v.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Service Category"}),l.jsxs("select",{value:j,onChange:v=>I(v.target.value),className:"form-select",children:[l.jsx("option",{value:"Plumbing",children:"Plumbing"}),l.jsx("option",{value:"Electrical",children:"Electrical"}),l.jsx("option",{value:"HVAC",children:"HVAC"}),l.jsx("option",{value:"Roofing",children:"Roofing"}),l.jsx("option",{value:"Landscaping",children:"Landscaping"}),l.jsx("option",{value:"Other",children:"General Handyman"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Max Budget ($) *"}),l.jsx("input",{type:"number",required:!0,min:"1",placeholder:"e.g. 350",value:p,onChange:v=>g(v.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Problem Details / Scope of Work"}),l.jsx("textarea",{placeholder:"Provide plumbing sizes, brand models, pictures or access timelines to help providers bid accurately.",value:f,onChange:v=>d(v.target.value),className:"form-textarea"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>u(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Post to Marketplace"})]})]})]})}),m&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",style:{maxWidth:"600px"},children:[l.jsx("button",{className:"modal-close",onClick:()=>y(null),children:"×"}),l.jsxs("h3",{className:"modal-title",children:["Bidding Room: ",m.title]}),l.jsx("p",{className:"modal-subtitle",children:"Review quotes from service providers. Simulating real-time local updates."}),l.jsx("div",{className:"bids-list",style:{marginTop:"1.5rem",display:"flex",flexDirection:"column",gap:"1rem"},children:(r[m.id]||[]).length===0?l.jsxs("div",{className:"simulating-spinner",children:[l.jsx("div",{className:"spinner"}),l.jsxs("p",{children:["Searching for providers and requesting quotes... ",l.jsx("br",{}),l.jsx("span",{children:"Bids usually arrive in 5-10 seconds."})]})]}):(r[m.id]||[]).map(v=>{const D=Math.round((m.budget-v.price)/m.budget*100);return l.jsxs("div",{className:"bid-item glass-card",style:{padding:"1rem",background:"rgba(0,0,0,0.2)"},children:[l.jsxs("div",{className:"bid-item-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsxs("h4",{style:{color:"#fff",fontSize:"1rem"},children:[v.providerName,v.verified===1&&l.jsx("span",{className:"verified-check",title:"RealPal Verified License",children:" ✓"})]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginTop:"0.2rem"},children:[l.jsxs("span",{style:{color:"var(--color-warning)",fontSize:"0.85rem"},children:["★ ",v.rating]}),l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:["• ETA: ",v.eta]})]})]}),l.jsxs("div",{style:{textAlign:"right"},children:[l.jsxs("div",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#fff"},children:["$",v.price]}),D>0?l.jsxs("span",{style:{color:"var(--color-success)",fontSize:"0.75rem",fontWeight:"700"},children:["Saves ",D,"%"]}):l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Budget Quote"})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:l.jsx("button",{className:"btn btn-success btn-sm",onClick:()=>R(m.id,v),children:"Hire & Authorize Lockbox"})})]},v.id)})}),(r[m.id]||[]).length<3&&(r[m.id]||[]).length>0&&l.jsx("p",{className:"bidding-tip",children:"💡 Keep this window open! More competitive service bids are currently formulating..."})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .marketplace-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2rem;
        }

        .column-title {
          font-size: 1.25rem;
          font-weight: 750;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .column-p {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .tickets-list, .pools-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ticket-card {
          background: var(--bg-card);
        }

        .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .ticket-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .ticket-title {
          font-size: 1.1rem;
          font-weight: 750;
          margin-bottom: 0.25rem;
        }

        .ticket-meta {
          display: flex;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
          font-weight: 600;
        }

        .ticket-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .ticket-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        .ticket-budget .lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          display: block;
        }

        .ticket-budget .val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
        }

        .hired-badge {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-success);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.15rem;
        }

        .savings-tag {
          font-size: 0.75rem;
          background-color: var(--color-success-light);
          padding: 0.1rem 0.5rem;
          border-radius: var(--radius-full);
        }

        .bid-alert-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background-color: var(--color-danger);
          border-radius: 50%;
          margin-left: 5px;
          animation: pulse-glow 1.5s infinite;
        }

        /* Collective Pools Card */
        .pool-card {
          border-left: 4px solid var(--color-primary);
        }

        .unlocked-card {
          border-color: var(--color-success);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .pool-zip {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
        }

        .pool-service-title {
          font-size: 1.1rem;
          font-weight: 750;
          margin: 0.5rem 0 0.25rem;
        }

        .pool-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .pool-stats {
          margin-bottom: 1rem;
        }

        .pool-pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          background: rgba(0,0,0,0.15);
          padding: 0.75rem;
          border-radius: var(--radius-sm);
        }

        .pricing-col {
          text-align: center;
        }

        .pricing-col .lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
          display: block;
        }

        .pricing-col .val {
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }

        .w-100 {
          width: 100%;
        }

        /* Bid list styles inside modal */
        .verified-check {
          color: var(--color-info);
          font-weight: bold;
        }

        .simulating-spinner {
          text-align: center;
          padding: 2.5rem 0;
        }

        .spinner {
          border: 3px solid rgba(255,255,255,0.05);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border-left-color: var(--color-primary);
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1rem;
        }

        .simulating-spinner p {
          font-size: 0.9rem;
          color: #fff;
          font-weight: 600;
          line-height: 1.4;
        }

        .simulating-spinner p span {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .bidding-tip {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: center;
          margin-top: 1rem;
        }

        @media (max-width: 1024px) {
          .marketplace-layout {
            grid-template-columns: 1fr;
          }
        }
      `}})]})}function Ep({properties:e,reminders:t,onAddReminder:n,onToggleReminder:r,onDeleteReminder:s}){const[a,i]=E.useState(!1),[c,u]=E.useState("All"),[m,y]=E.useState(""),[x,h]=E.useState(""),[N,b]=E.useState("Medium"),[j,I]=E.useState("Maintenance"),[f,d]=E.useState("General"),p=async P=>{if(P.preventDefault(),!m||!x)return;const k=e.find(U=>U.id.toString()===f.toString()),_=k?k.address:"General Admin";await n({title:m,date:x,priority:N,category:j,propertyId:f,propertyName:_}),i(!1),y(""),h(""),b("Medium"),I("Maintenance"),d("General")},g=P=>{r(P)},C=P=>{s(P)},L=[...t.filter(P=>c==="All"?!0:P.category===c)].sort((P,k)=>P.completed!==k.completed?P.completed?1:-1:new Date(P.date)-new Date(k.date)),v=t.filter(P=>P.completed===0||P.completed===!1).length,D=t.filter(P=>(P.completed===0||P.completed===!1)&&P.priority==="High").length,O=P=>{switch(P){case"Rent":return"badge-success";case"Maintenance":return"badge-primary";case"Lease":return"badge-info";case"Tax":return"badge-warning";case"Compliance":return"badge-danger";default:return"badge-secondary"}};return l.jsxs("div",{className:"reminders-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Reminders & Tasks"}),l.jsx("p",{className:"view-description",children:"Set and follow up on critical items, including lease endpoints, tax milestones, and certifications."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>i(!0),children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"New Reminder"]})]}),v>0&&l.jsx("div",{className:"reminders-alert-banner glass-card",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("span",{className:"pulse-indicator"}),l.jsxs("div",{children:[l.jsxs("h4",{style:{fontSize:"0.95rem"},children:["You have ",v," outstanding landlord tasks."]}),l.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.8rem",marginTop:"0.1rem"},children:D>0?`Urgent attention required: ${D} high-priority tasks remain incomplete.`:"All high-priority items are currently up-to-date."})]})]})}),l.jsx("div",{className:"filters-row",children:l.jsx("div",{className:"category-tabs",children:["All","Rent","Maintenance","Lease","Tax","Compliance"].map(P=>l.jsx("button",{className:`filter-tab ${c===P?"active":""}`,onClick:()=>u(P),children:P},P))})}),l.jsx("div",{className:"reminders-list-container",children:L.length===0?l.jsxs("div",{className:"empty-reminders-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔔"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No reminders found"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Change your filter settings or record a new reminder for future inspection schedules."})]}):l.jsx("div",{className:"reminders-stack",children:L.map(P=>{const k=(P.completed===0||P.completed===!1)&&new Date(P.date)<new Date,_=P.completed===1||P.completed===!0;return l.jsxs("div",{className:`reminder-row glass-card ${_?"completed-row":""} ${k?"overdue-row":""}`,children:[l.jsxs("div",{className:"checkbox-col",children:[l.jsx("input",{type:"checkbox",checked:_,onChange:()=>g(P.id),className:"task-checkbox",id:`rem-${P.id}`}),l.jsx("label",{htmlFor:`rem-${P.id}`,className:"checkbox-visual",children:_&&"✓"})]}),l.jsxs("div",{className:"details-col",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"},children:[l.jsx("span",{className:`badge ${O(P.category)}`,children:P.category}),l.jsxs("span",{className:`priority-indicator prio-${P.priority.toLowerCase()}`,children:[P.priority," Priority"]}),k&&l.jsx("span",{className:"badge badge-danger",children:"OVERDUE"})]}),l.jsx("h4",{className:"reminder-title",children:P.title}),l.jsxs("div",{className:"reminder-meta",children:[l.jsxs("span",{children:["📍 ",P.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{className:k?"text-danger font-bold":"",children:["📅 Due: ",new Date(P.date).toLocaleDateString()]})]})]}),l.jsx("div",{className:"actions-col",children:l.jsx("button",{className:"btn btn-secondary btn-sm delete-task-btn",onClick:()=>C(P.id),children:"🗑️"})})]},P.id)})})}),a&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>i(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Create Task Reminder"}),l.jsx("p",{className:"modal-subtitle",children:"Schedule a new operational follow-up for your properties."}),l.jsxs("form",{onSubmit:p,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Task Description *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Inspect fire alarm, File schedule E taxes",value:m,onChange:P=>y(P.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Associate with Property"}),l.jsxs("select",{value:f,onChange:P=>d(P.target.value),className:"form-select",children:[l.jsx("option",{value:"General",children:"General / Portfolio Administration"}),e.map(P=>l.jsx("option",{value:P.id,children:P.address},P.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Category"}),l.jsxs("select",{value:j,onChange:P=>I(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Rent",children:"Rent Collection"}),l.jsx("option",{value:"Maintenance",children:"Maintenance / Repairs"}),l.jsx("option",{value:"Lease",children:"Lease Renewal"}),l.jsx("option",{value:"Tax",children:"Accounting & Taxes"}),l.jsx("option",{value:"Compliance",children:"Legal & Compliance"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Priority Level"}),l.jsxs("select",{value:N,onChange:P=>b(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Low",children:"Low"}),l.jsx("option",{value:"Medium",children:"Medium"}),l.jsx("option",{value:"High",children:"High"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Due Date *"}),l.jsx("input",{type:"date",required:!0,value:x,onChange:P=>h(P.target.value),className:"form-input"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>i(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Set Reminder"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .reminders-alert-banner {
          background: linear-gradient(135deg, rgba(229, 62, 62, 0.08) 0%, rgba(18, 24, 38, 0.6) 100%);
          border-color: rgba(229, 62, 62, 0.25);
          padding: 1rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .filters-row {
          margin-bottom: 1.5rem;
        }

        .category-tabs {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .filter-tab {
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .filter-tab:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .filter-tab.active {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }

        .reminders-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .reminder-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.2rem 1.5rem;
          background: var(--bg-card);
          transition: all var(--transition-fast);
        }

        .reminder-row:hover {
          transform: translateX(4px);
        }

        .completed-row {
          opacity: 0.55;
          border-left: 3px solid rgba(255, 255, 255, 0.2);
        }

        .completed-row .reminder-title {
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .overdue-row {
          border-left: 3px solid var(--color-danger);
          background: linear-gradient(90deg, rgba(229, 62, 62, 0.03) 0%, var(--bg-card) 100%);
        }

        .checkbox-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .task-checkbox {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkbox-visual {
          width: 22px;
          height: 22px;
          border: 2px solid var(--border-color);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--color-success);
          font-weight: bold;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
          background: rgba(0,0,0,0.1);
        }

        .task-checkbox:checked + .checkbox-visual {
          border-color: var(--color-success);
          background: var(--color-success-light);
        }

        .details-col {
          flex: 1;
        }

        .priority-indicator {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .prio-high { color: var(--color-danger); }
        .prio-medium { color: var(--color-warning); }
        .prio-low { color: var(--color-info); }

        .reminder-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0.35rem 0 0.15rem;
        }

        .reminder-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .text-danger {
          color: var(--color-danger) !important;
        }

        .font-bold {
          font-weight: 700;
        }

        .delete-task-btn {
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .reminder-row:hover .delete-task-btn {
          opacity: 1;
        }

        .empty-reminders-state {
          text-align: center;
          padding: 3.5rem;
        }

        @media (max-width: 768px) {
          .reminder-row {
            padding: 1rem;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .delete-task-btn {
            opacity: 1;
          }
        }
      `}})]})}function zp({feedback:e,onAddFeedback:t}){const[n,r]=E.useState(""),[s,a]=E.useState(5),[i,c]=E.useState(""),[u,m]=E.useState(!1),y=["John Herman","Rohit Parthi","Harsha Pilli","Krishna Kanchancharla","Lakshminarayana P","Chandu V","Ranjit","Gopi","Niel","Sujan","Venkata Vedam","Bhaskar","Ashok Lamkshman","Raju","Hanumanth","Praveen"],x=async j=>{if(j.preventDefault(),!n||!i)return;const I={name:n,rating:parseInt(s),comment:i};await t(I),c(""),r(""),a(5),m(!0),setTimeout(()=>m(!1),3e3)},h=e.length,N=h>0?(e.reduce((j,I)=>j+I.rating,0)/h).toFixed(1):0,b=j=>"★".repeat(j)+"☆".repeat(5-j);return l.jsxs("div",{className:"feedback-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Concept Tester Panel"}),l.jsx("p",{className:"view-description",children:"Gathering structured feedback from target users to evaluate the RealPal MVP prototype."})]})}),l.jsxs("div",{className:"feedback-layout grid-2",children:[l.jsxs("div",{className:"glass-card submit-card",children:[l.jsx("h3",{className:"section-title",children:"Submit Tester Evaluation"}),l.jsx("p",{className:"section-p",children:"If you are on the tester team, select your name, rate your experience, and leave your honest feature reviews."}),u&&l.jsx("div",{className:"success-banner animate-slide-up",style:{backgroundColor:"var(--color-success-light)",border:"1px solid rgba(56,161,105,0.2)",padding:"0.85rem",borderRadius:"var(--radius-sm)",marginBottom:"1.25rem",color:"var(--color-success)",fontSize:"0.88rem",fontWeight:600},children:"✓ Review submitted! Thank you for helping shape the future of RealPal."}),l.jsxs("form",{onSubmit:x,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tester Identity *"}),l.jsxs("select",{required:!0,value:n,onChange:j=>r(j.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose your name --"}),y.map(j=>l.jsx("option",{value:j,children:j},j))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Concept Rating"}),l.jsx("div",{className:"rating-select-row",children:[1,2,3,4,5].map(j=>l.jsx("button",{type:"button",className:`star-select-btn ${s>=j?"filled":""}`,onClick:()=>a(j),children:"★"},j))})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Feedback Notes / Suggestions *"}),l.jsx("textarea",{required:!0,placeholder:"Share your thoughts on the business models, bidding simulators, or what features you would like added to manage your properties...",value:i,onChange:j=>c(j.target.value),className:"form-textarea"})]}),l.jsx("button",{type:"submit",className:"btn btn-primary w-100",style:{marginTop:"0.5rem"},children:"Submit Test Feedback"})]})]}),l.jsxs("div",{className:"reviews-column flex-column-center",children:[l.jsx("div",{className:"feedback-stats-header glass-card",children:l.jsxs("div",{className:"stat-row",children:[l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:N}),l.jsx("span",{className:"lbl",children:"Average Rating"})]}),l.jsx("div",{className:"stat-divider"}),l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:h}),l.jsx("span",{className:"lbl",children:"Total Reviews"})]})]})}),l.jsxs("div",{className:"reviews-scroll-feed",children:[l.jsx("h3",{className:"section-title",style:{fontSize:"1.15rem",marginBottom:"1rem",color:"#fff"},children:"Testimonial & Feedback Stream"}),e.length===0?l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"No feedback submitted yet. Be the first to review!"}):l.jsx("div",{className:"reviews-feed-stack",children:e.map(j=>l.jsxs("div",{className:"review-feed-card glass-card",children:[l.jsxs("div",{className:"review-feed-header",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"reviewer-name",children:j.name}),l.jsxs("span",{className:"reviewer-meta",children:[j.simulated===1?"Prepopulated Test":"User Tester"," • ",j.date]})]}),l.jsx("span",{className:"stars-string",children:b(j.rating)})]}),l.jsxs("p",{className:"reviewer-comment",children:['"',j.comment,'"']})]},j.id))})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .feedback-layout {
          align-items: stretch;
        }

        .rating-select-row {
          display: flex;
          gap: 0.5rem;
        }

        .star-select-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 1.85rem;
          cursor: pointer;
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .star-select-btn:hover {
          transform: scale(1.15);
        }

        .star-select-btn.filled {
          color: var(--color-warning);
        }

        .feedback-stats-header {
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .stat-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .stat-chunk {
          text-align: center;
        }

        .stat-chunk .val {
          font-size: 2.2rem;
          font-weight: 850;
          color: #fff;
          display: block;
          line-height: 1.1;
        }

        .stat-chunk .lbl {
          font-size: 0.825rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background-color: var(--border-color);
        }

        .reviews-scroll-feed {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .reviews-feed-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-height: 420px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .review-feed-card {
          padding: 1rem 1.25rem;
          background: rgba(0, 0, 0, 0.15);
          border-left: 3px solid var(--color-primary);
        }

        .review-feed-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .reviewer-name {
          font-size: 0.95rem;
          font-weight: 750;
          color: #fff;
        }

        .reviewer-meta {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
          display: block;
        }

        .stars-string {
          color: var(--color-warning);
          letter-spacing: 1px;
          font-size: 0.85rem;
        }

        .reviewer-comment {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          font-style: italic;
        }
      `}})]})}const te="http://192.168.1.103:5000";function Rp(){const[e,t]=E.useState("landing"),[n,r]=E.useState("premium"),[s,a]=E.useState([]),[i,c]=E.useState([]),[u,m]=E.useState([]),[y,x]=E.useState({}),[h,N]=E.useState([]),[b,j]=E.useState([]);E.useEffect(()=>{fetch(`${te}/api/subscription`).then(k=>k.json()).then(k=>r(k.subscription)).catch(k=>console.error("Error fetching subscription:",k)),fetch(`${te}/api/properties`).then(k=>k.json()).then(k=>a(k)).catch(k=>console.error("Error fetching properties:",k)),fetch(`${te}/api/reminders`).then(k=>k.json()).then(k=>c(k)).catch(k=>console.error("Error fetching reminders:",k)),fetch(`${te}/api/jobs`).then(k=>k.json()).then(async k=>{m(k);const _={};for(const A of k)if(A.status==="bidding")try{const ie=await(await fetch(`${te}/api/jobs/${A.id}/bids`)).json();_[A.id]=ie}catch(U){console.error("Error fetching bids for job:",A.id,U)}x(_)}).catch(k=>console.error("Error fetching jobs:",k)),fetch(`${te}/api/group-deals`).then(k=>k.json()).then(k=>N(k)).catch(k=>console.error("Error fetching group deals:",k)),fetch(`${te}/api/feedback`).then(k=>k.json()).then(k=>j(k)).catch(k=>console.error("Error fetching feedback:",k))},[]),E.useEffect(()=>{const k=u.filter(A=>A.status==="bidding");if(k.length===0)return;const _=setInterval(()=>{k.forEach(A=>{fetch(`${te}/api/jobs/${A.id}/bids`).then(U=>U.json()).then(U=>{x(ie=>({...ie,[A.id]:U}))}).catch(U=>console.error("Error polling bids:",U))})},2e3);return()=>clearInterval(_)},[u]);const I=async k=>{try{(await(await fetch(`${te}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscription:k})})).json()).success&&r(k)}catch(_){console.error("Error saving subscription:",_)}},f=async k=>{try{const A=await(await fetch(`${te}/api/properties`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();a([A,...s])}catch(_){console.error("Error creating property:",_)}},d=async(k,_)=>{try{const U=await(await fetch(`${te}/api/properties/${k}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)})).json();a(s.map(z=>z.id===k?U:z));const Fe=await(await fetch(`${te}/api/reminders`)).json();c(Fe)}catch(A){console.error("Error saving property changes:",A)}},p=async k=>{try{await fetch(`${te}/api/properties/${k}`,{method:"DELETE"}),a(s.filter(U=>U.id!==k));const A=await(await fetch(`${te}/api/reminders`)).json();c(A)}catch(_){console.error("Error deleting property:",_)}},g=async k=>{try{const A=await(await fetch(`${te}/api/reminders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();c([A,...i])}catch(_){console.error("Error creating task:",_)}},C=async k=>{try{const A=await(await fetch(`${te}/api/reminders/${k}`,{method:"PUT"})).json();c(i.map(U=>U.id===k?A:U))}catch(_){console.error("Error toggling task completion:",_)}},R=async k=>{try{await fetch(`${te}/api/reminders/${k}`,{method:"DELETE"}),c(i.filter(_=>_.id!==k))}catch(_){console.error("Error removing task:",_)}},L=async k=>{try{const A=await(await fetch(`${te}/api/jobs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();m([A,...u]),x(U=>({...U,[A.id]:[]}))}catch(_){console.error("Error posting maintenance ticket:",_)}},v=async(k,_)=>{try{const U=await(await fetch(`${te}/api/jobs/${k}/accept-bid`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bid:_})})).json();m(u.map(ie=>ie.id===k?U:ie))}catch(A){console.error("Error hiring contractor:",A)}},D=async k=>{try{const A=await(await fetch(`${te}/api/group-deals/${k}/toggle`,{method:"POST"})).json();N(h.map(U=>U.id===k?A:U))}catch(_){console.error("Error toggling collective pool:",_)}},O=async k=>{try{const A=await(await fetch(`${te}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();j([A,...b])}catch(_){console.error("Error posting feedback reviews:",_)}},P=()=>{switch(e){case"landing":return l.jsx(wc,{subscription:n,setSubscription:I,setActiveTab:t});case"dashboard":return l.jsx(bp,{properties:s,reminders:i,jobs:u,groupDeals:h,setActiveTab:t});case"properties":return l.jsx(Cp,{properties:s,onAddProperty:f,onUpdateProperty:d,onDeleteProperty:p});case"crowdsource":return l.jsx(Pp,{properties:s,jobs:u,onAddJob:L,bids:y,onAcceptBid:v,groupDeals:h,onToggleGroupDeal:D});case"reminders":return l.jsx(Ep,{properties:s,reminders:i,onAddReminder:g,onToggleReminder:C,onDeleteReminder:R});case"feedback":return l.jsx(zp,{feedback:b,onAddFeedback:O});default:return l.jsx(wc,{subscription:n,setSubscription:I,setActiveTab:t})}};return l.jsxs("div",{className:"app-container",children:[l.jsx(Sp,{activeTab:e,setActiveTab:t,subscription:n}),l.jsx("main",{className:"main-content",children:P()})]})}pa.createRoot(document.getElementById("root")).render(l.jsx(dm.StrictMode,{children:l.jsx(Rp,{})}));
