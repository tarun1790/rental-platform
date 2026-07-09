(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function af(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},Ll={},dc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mn=Symbol.for("react.element"),of=Symbol.for("react.portal"),cf=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),pf=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),gf=Symbol.for("react.memo"),vf=Symbol.for("react.lazy"),qa=Symbol.iterator;function xf(e){return e===null||typeof e!="object"?null:(e=qa&&e[qa]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pc=Object.assign,mc={};function kr(e,t,r){this.props=e,this.context=t,this.refs=mc,this.updater=r||fc}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hc(){}hc.prototype=kr.prototype;function ks(e,t,r){this.props=e,this.context=t,this.refs=mc,this.updater=r||fc}var Ns=ks.prototype=new hc;Ns.constructor=ks;pc(Ns,kr.prototype);Ns.isPureReactComponent=!0;var eo=Array.isArray,gc=Object.prototype.hasOwnProperty,Ss={current:null},vc={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,r){var n,i={},s=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)gc.call(t,n)&&!vc.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var o=Array(c),d=0;d<c;d++)o[d]=arguments[d+2];i.children=o}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)i[n]===void 0&&(i[n]=c[n]);return{$$typeof:mn,type:e,key:s,ref:a,props:i,_owner:Ss.current}}function yf(e,t){return{$$typeof:mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===mn}function wf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var to=/\/+/g;function ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wf(""+e.key):t.toString(36)}function Kn(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mn:case of:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+ni(a,0):n,eo(i)?(r="",e!=null&&(r=e.replace(to,"$&/")+"/"),Kn(i,t,r,"",function(d){return d})):i!=null&&(bs(i)&&(i=yf(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(to,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",eo(e))for(var c=0;c<e.length;c++){s=e[c];var o=n+ni(s,c);a+=Kn(s,t,r,o,i)}else if(o=xf(e),typeof o=="function")for(e=o.call(e),c=0;!(s=e.next()).done;)s=s.value,o=n+ni(s,c++),a+=Kn(s,t,r,o,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Tn(e,t,r){if(e==null)return e;var n=[],i=0;return Kn(e,n,"","",function(s){return t.call(r,s,i++)}),n}function jf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Gn={transition:null},kf={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Gn,ReactCurrentOwner:Ss};function yc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Tn,forEach:function(e,t,r){Tn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Tn(e,function(){t++}),t},toArray:function(e){return Tn(e,function(t){return t})||[]},only:function(e){if(!bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=kr;A.Fragment=cf;A.Profiler=df;A.PureComponent=ks;A.StrictMode=uf;A.Suspense=hf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf;A.act=yc;A.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=pc({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ss.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(o in t)gc.call(t,o)&&!vc.hasOwnProperty(o)&&(n[o]=t[o]===void 0&&c!==void 0?c[o]:t[o])}var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){c=Array(o);for(var d=0;d<o;d++)c[d]=arguments[d+2];n.children=c}return{$$typeof:mn,type:e.type,key:i,ref:s,props:n,_owner:a}};A.createContext=function(e){return e={$$typeof:pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ff,_context:e},e.Consumer=e};A.createElement=xc;A.createFactory=function(e){var t=xc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:mf,render:e}};A.isValidElement=bs;A.lazy=function(e){return{$$typeof:vf,_payload:{_status:-1,_result:e},_init:jf}};A.memo=function(e,t){return{$$typeof:gf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Gn.transition;Gn.transition={};try{e()}finally{Gn.transition=t}};A.unstable_act=yc;A.useCallback=function(e,t){return xe.current.useCallback(e,t)};A.useContext=function(e){return xe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};A.useEffect=function(e,t){return xe.current.useEffect(e,t)};A.useId=function(){return xe.current.useId()};A.useImperativeHandle=function(e,t,r){return xe.current.useImperativeHandle(e,t,r)};A.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return xe.current.useMemo(e,t)};A.useReducer=function(e,t,r){return xe.current.useReducer(e,t,r)};A.useRef=function(e){return xe.current.useRef(e)};A.useState=function(e){return xe.current.useState(e)};A.useSyncExternalStore=function(e,t,r){return xe.current.useSyncExternalStore(e,t,r)};A.useTransition=function(){return xe.current.useTransition()};A.version="18.3.1";dc.exports=A;var S=dc.exports;const Nf=af(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=S,bf=Symbol.for("react.element"),Cf=Symbol.for("react.fragment"),Pf=Object.prototype.hasOwnProperty,Ef=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zf={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,t,r){var n,i={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Pf.call(t,n)&&!zf.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:bf,type:e,key:s,ref:a,props:i,_owner:Ef.current}}Ll.Fragment=Cf;Ll.jsx=wc;Ll.jsxs=wc;uc.exports=Ll;var l=uc.exports,zi={},jc={exports:{}},ze={},kc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var $=z.length;z.push(F);e:for(;0<$;){var K=$-1>>>1,ee=z[K];if(0<i(ee,F))z[K]=F,z[$]=ee,$=K;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var F=z[0],$=z.pop();if($!==F){z[0]=$;e:for(var K=0,ee=z.length,Mt=ee>>>1;K<Mt;){var qe=2*(K+1)-1,br=z[qe],Oe=qe+1,et=z[Oe];if(0>i(br,$))Oe<ee&&0>i(et,br)?(z[K]=et,z[Oe]=$,K=Oe):(z[K]=br,z[qe]=$,K=qe);else if(Oe<ee&&0>i(et,$))z[K]=et,z[Oe]=$,K=Oe;else break e}}return F}function i(z,F){var $=z.sortIndex-F.sortIndex;return $!==0?$:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var o=[],d=[],y=1,v=null,h=3,j=!1,b=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var F=r(d);F!==null;){if(F.callback===null)n(d);else if(F.startTime<=z)n(d),F.sortIndex=F.expirationTime,t(o,F);else break;F=r(d)}}function g(z){if(w=!1,m(z),!b)if(r(o)!==null)b=!0,de(C);else{var F=r(d);F!==null&&ft(g,F.startTime-z)}}function C(z,F){b=!1,w&&(w=!1,p(x),x=-1),j=!0;var $=h;try{for(m(F),v=r(o);v!==null&&(!(v.expirationTime>F)||z&&!P());){var K=v.callback;if(typeof K=="function"){v.callback=null,h=v.priorityLevel;var ee=K(v.expirationTime<=F);F=e.unstable_now(),typeof ee=="function"?v.callback=ee:v===r(o)&&n(o),m(F)}else n(o);v=r(o)}if(v!==null)var Mt=!0;else{var qe=r(d);qe!==null&&ft(g,qe.startTime-F),Mt=!1}return Mt}finally{v=null,h=$,j=!1}}var L=!1,E=null,x=-1,O=5,I=-1;function P(){return!(e.unstable_now()-I<O)}function N(){if(E!==null){var z=e.unstable_now();I=z;var F=!0;try{F=E(!0,z)}finally{F?_():(L=!1,E=null)}}else L=!1}var _;if(typeof u=="function")_=function(){u(N)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,B=D.port2;D.port1.onmessage=N,_=function(){B.postMessage(null)}}else _=function(){M(N,0)};function de(z){E=z,L||(L=!0,_())}function ft(z,F){x=M(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){b||j||(b=!0,de(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(o)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var $=h;h=F;try{return z()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=h;h=z;try{return F()}finally{h=$}},e.unstable_scheduleCallback=function(z,F,$){var K=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?K+$:K):$=K,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,z={id:y++,callback:F,priorityLevel:z,startTime:$,expirationTime:ee,sortIndex:-1},$>K?(z.sortIndex=$,t(d,z),r(o)===null&&z===r(d)&&(w?(p(x),x=-1):w=!0,ft(g,$-K))):(z.sortIndex=ee,t(o,z),b||j||(b=!0,de(C))),z},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(z){var F=h;return function(){var $=h;h=F;try{return z.apply(this,arguments)}finally{h=$}}}})(Nc);kc.exports=Nc;var Lf=kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=S,Ee=Lf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sc=new Set,Xr={};function Yt(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Sc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=Object.prototype.hasOwnProperty,Rf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ro={},no={};function _f(e){return Li.call(no,e)?!0:Li.call(ro,e)?!1:Rf.test(e)?no[e]=!0:(ro[e]=!0,!1)}function Mf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,t,r,n){if(t===null||typeof t>"u"||Mf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,r,n,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cs=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cs,Ps);ue[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cs,Ps);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cs,Ps);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,t,r,n){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(If(t,r,i,n)&&(r=null),n||i===null?_f(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var dt=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rn=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),zs=Symbol.for("react.strict_mode"),Ti=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Ls=Symbol.for("react.forward_ref"),Ri=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Pc=Symbol.for("react.offscreen"),lo=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=lo&&e[lo]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,li;function $r(e){if(li===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);li=t&&t[1]||""}return`
`+li+e}var ii=!1;function si(e,t){if(!e||ii)return"";ii=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=n.stack.split(`
`),a=i.length-1,c=s.length-1;1<=a&&0<=c&&i[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==s[c]){var o=`
`+i[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=c);break}}}finally{ii=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?$r(e):""}function Ff(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=si(e.type,!1),e;case 11:return e=si(e.type.render,!1),e;case 1:return e=si(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Jt:return"Portal";case Ti:return"Profiler";case zs:return"StrictMode";case Ri:return"Suspense";case _i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cc:return(e.displayName||"Context")+".Consumer";case bc:return(e._context.displayName||"Context")+".Provider";case Ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return t=e.displayName||null,t!==null?t:Mi(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return Mi(e(t))}catch{}}return null}function $f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(t);case 8:return t===zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Of(e){var t=Ec(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _n(e){e._valueTracker||(e._valueTracker=Of(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ec(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function io(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=zt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lc(e,t){t=t.checked,t!=null&&Es(e,"checked",t,!1)}function Fi(e,t){Lc(e,t);var r=zt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$i(e,t.type,r):t.hasOwnProperty("defaultValue")&&$i(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function so(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function $i(e,t,r){(t!=="number"||sl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Or=Array.isArray;function cr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ao(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(k(92));if(Or(r)){if(1<r.length)throw Error(k(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zt(r)}}function Tc(e,t){var r=zt(t.value),n=zt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function oo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mn,_c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Df=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){Df.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Mc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function Ic(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Mc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Af=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,t){if(t){if(Af[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,ur=null,dr=null;function co(e){if(e=vn(e)){if(typeof Hi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Il(t),Hi(e.stateNode,e.type,t))}}function Fc(e){ur?dr?dr.push(e):dr=[e]:ur=e}function $c(){if(ur){var e=ur,t=dr;if(dr=ur=null,co(e),t)for(e=0;e<t.length;e++)co(t[e])}}function Oc(e,t){return e(t)}function Dc(){}var ai=!1;function Ac(e,t,r){if(ai)return e(t,r);ai=!0;try{return Oc(e,t,r)}finally{ai=!1,(ur!==null||dr!==null)&&(Dc(),$c())}}function Zr(e,t){var r=e.stateNode;if(r===null)return null;var n=Il(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(k(231,t,typeof r));return r}var Vi=!1;if(at)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Vi=!1}function Uf(e,t,r,n,i,s,a,c,o){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(y){this.onError(y)}}var Br=!1,al=null,ol=!1,Wi=null,Bf={onError:function(e){Br=!0,al=e}};function Hf(e,t,r,n,i,s,a,c,o){Br=!1,al=null,Uf.apply(Bf,arguments)}function Vf(e,t,r,n,i,s,a,c,o){if(Hf.apply(this,arguments),Br){if(Br){var d=al;Br=!1,al=null}else throw Error(k(198));ol||(ol=!0,Wi=d)}}function Kt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uo(e){if(Kt(e)!==e)throw Error(k(188))}function Wf(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return uo(i),e;if(s===n)return uo(i),t;s=s.sibling}throw Error(k(188))}if(r.return!==n.return)r=i,n=s;else{for(var a=!1,c=i.child;c;){if(c===r){a=!0,r=i,n=s;break}if(c===n){a=!0,n=i,r=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===r){a=!0,r=s,n=i;break}if(c===n){a=!0,n=s,r=i;break}c=c.sibling}if(!a)throw Error(k(189))}}if(r.alternate!==n)throw Error(k(190))}if(r.tag!==3)throw Error(k(188));return r.stateNode.current===r?e:t}function Bc(e){return e=Wf(e),e!==null?Hc(e):null}function Hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hc(e);if(t!==null)return t;e=e.sibling}return null}var Vc=Ee.unstable_scheduleCallback,fo=Ee.unstable_cancelCallback,Qf=Ee.unstable_shouldYield,Yf=Ee.unstable_requestPaint,re=Ee.unstable_now,Kf=Ee.unstable_getCurrentPriorityLevel,_s=Ee.unstable_ImmediatePriority,Wc=Ee.unstable_UserBlockingPriority,cl=Ee.unstable_NormalPriority,Gf=Ee.unstable_LowPriority,Qc=Ee.unstable_IdlePriority,Tl=null,Je=null;function Xf(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:qf,Jf=Math.log,Zf=Math.LN2;function qf(e){return e>>>=0,e===0?32:31-(Jf(e)/Zf|0)|0}var In=64,Fn=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,a=r&268435455;if(a!==0){var c=a&~i;c!==0?n=Dr(c):(s&=a,s!==0&&(n=Dr(s)))}else a=r&~i,a!==0?n=Dr(a):s!==0&&(n=Dr(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-We(t),i=1<<r,n|=e[r],t&=~i;return n}function ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-We(s),c=1<<a,o=i[a];o===-1?(!(c&r)||c&n)&&(i[a]=ep(c,t)):o<=t&&(e.expiredLanes|=c),s&=~c}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=In;return In<<=1,!(In&4194240)&&(In=64),e}function oi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function hn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=r}function rp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-We(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function Ms(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-We(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var H=0;function Kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gc,Is,Xc,Jc,Zc,Yi=!1,$n=[],jt=null,kt=null,Nt=null,qr=new Map,en=new Map,vt=[],np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function po(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":en.delete(t.pointerId)}}function Tr(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=vn(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lp(e,t,r,n,i){switch(t){case"focusin":return jt=Tr(jt,e,t,r,n,i),!0;case"dragenter":return kt=Tr(kt,e,t,r,n,i),!0;case"mouseover":return Nt=Tr(Nt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return qr.set(s,Tr(qr.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,en.set(s,Tr(en.get(s)||null,e,t,r,n,i)),!0}return!1}function qc(e){var t=$t(e.target);if(t!==null){var r=Kt(t);if(r!==null){if(t=r.tag,t===13){if(t=Uc(r),t!==null){e.blockedOn=t,Zc(e.priority,function(){Xc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Bi=n,r.target.dispatchEvent(n),Bi=null}else return t=vn(r),t!==null&&Is(t),e.blockedOn=r,!1;t.shift()}return!0}function mo(e,t,r){Xn(e)&&r.delete(t)}function ip(){Yi=!1,jt!==null&&Xn(jt)&&(jt=null),kt!==null&&Xn(kt)&&(kt=null),Nt!==null&&Xn(Nt)&&(Nt=null),qr.forEach(mo),en.forEach(mo)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Yi||(Yi=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,ip)))}function tn(e){function t(i){return Rr(i,e)}if(0<$n.length){Rr($n[0],e);for(var r=1;r<$n.length;r++){var n=$n[r];n.blockedOn===e&&(n.blockedOn=null)}}for(jt!==null&&Rr(jt,e),kt!==null&&Rr(kt,e),Nt!==null&&Rr(Nt,e),qr.forEach(t),en.forEach(t),r=0;r<vt.length;r++)n=vt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<vt.length&&(r=vt[0],r.blockedOn===null);)qc(r),r.blockedOn===null&&vt.shift()}var fr=dt.ReactCurrentBatchConfig,dl=!0;function sp(e,t,r,n){var i=H,s=fr.transition;fr.transition=null;try{H=1,Fs(e,t,r,n)}finally{H=i,fr.transition=s}}function ap(e,t,r,n){var i=H,s=fr.transition;fr.transition=null;try{H=4,Fs(e,t,r,n)}finally{H=i,fr.transition=s}}function Fs(e,t,r,n){if(dl){var i=Ki(e,t,r,n);if(i===null)xi(e,t,n,fl,r),po(e,n);else if(lp(i,e,t,r,n))n.stopPropagation();else if(po(e,n),t&4&&-1<np.indexOf(e)){for(;i!==null;){var s=vn(i);if(s!==null&&Gc(s),s=Ki(e,t,r,n),s===null&&xi(e,t,n,fl,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else xi(e,t,n,null,r)}}var fl=null;function Ki(e,t,r,n){if(fl=null,e=Rs(n),e=$t(e),e!==null)if(t=Kt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Uc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fl=e,null}function eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kf()){case _s:return 1;case Wc:return 4;case cl:case Gf:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var yt=null,$s=null,Jn=null;function tu(){if(Jn)return Jn;var e,t=$s,r=t.length,n,i="value"in yt?yt.value:yt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[s-n];n++);return Jn=i.slice(e,1<n?1-n:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function ho(){return!1}function Le(e){function t(r,n,i,s,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?On:ho,this.isPropagationStopped=ho,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Le(Nr),gn=Z({},Nr,{view:0,detail:0}),op=Le(gn),ci,ui,_r,Rl=Z({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(ci=e.screenX-_r.screenX,ui=e.screenY-_r.screenY):ui=ci=0,_r=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:ui}}),go=Le(Rl),cp=Z({},Rl,{dataTransfer:0}),up=Le(cp),dp=Z({},gn,{relatedTarget:0}),di=Le(dp),fp=Z({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=Le(fp),mp=Z({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Le(mp),gp=Z({},Nr,{data:0}),vo=Le(gp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function Ds(){return wp}var jp=Z({},gn,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=Le(jp),Np=Z({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Le(Np),Sp=Z({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),bp=Le(Sp),Cp=Z({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=Le(Cp),Ep=Z({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=Le(Ep),Lp=[9,13,27,32],As=at&&"CompositionEvent"in window,Hr=null;at&&"documentMode"in document&&(Hr=document.documentMode);var Tp=at&&"TextEvent"in window&&!Hr,ru=at&&(!As||Hr&&8<Hr&&11>=Hr),yo=" ",wo=!1;function nu(e,t){switch(e){case"keyup":return Lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Rp(e,t){switch(e){case"compositionend":return lu(t);case"keypress":return t.which!==32?null:(wo=!0,yo);case"textInput":return e=t.data,e===yo&&wo?null:e;default:return null}}function _p(e,t){if(qt)return e==="compositionend"||!As&&nu(e,t)?(e=tu(),Jn=$s=yt=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ru&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function iu(e,t,r,n){Fc(n),t=pl(t,"onChange"),0<t.length&&(r=new Os("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Vr=null,rn=null;function Ip(e){gu(e,0)}function _l(e){var t=rr(e);if(zc(t))return e}function Fp(e,t){if(e==="change")return t}var su=!1;if(at){var fi;if(at){var pi="oninput"in document;if(!pi){var ko=document.createElement("div");ko.setAttribute("oninput","return;"),pi=typeof ko.oninput=="function"}fi=pi}else fi=!1;su=fi&&(!document.documentMode||9<document.documentMode)}function No(){Vr&&(Vr.detachEvent("onpropertychange",au),rn=Vr=null)}function au(e){if(e.propertyName==="value"&&_l(rn)){var t=[];iu(t,rn,e,Rs(e)),Ac(Ip,t)}}function $p(e,t,r){e==="focusin"?(No(),Vr=t,rn=r,Vr.attachEvent("onpropertychange",au)):e==="focusout"&&No()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(rn)}function Dp(e,t){if(e==="click")return _l(t)}function Ap(e,t){if(e==="input"||e==="change")return _l(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Up;function nn(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Li.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function So(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bo(e,t){var r=So(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=So(r)}}function ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cu(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=sl(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bp(e){var t=cu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ou(r.ownerDocument.documentElement,r)){if(n!==null&&Us(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=bo(r,s);var a=bo(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hp=at&&"documentMode"in document&&11>=document.documentMode,er=null,Gi=null,Wr=null,Xi=!1;function Co(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xi||er==null||er!==sl(n)||(n=er,"selectionStart"in n&&Us(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wr&&nn(Wr,n)||(Wr=n,n=pl(Gi,"onSelect"),0<n.length&&(t=new Os("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=er)))}function Dn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var tr={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionend:Dn("Transition","TransitionEnd")},mi={},uu={};at&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ml(e){if(mi[e])return mi[e];if(!tr[e])return e;var t=tr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in uu)return mi[e]=t[r];return e}var du=Ml("animationend"),fu=Ml("animationiteration"),pu=Ml("animationstart"),mu=Ml("transitionend"),hu=new Map,Po="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){hu.set(e,t),Yt(t,[e])}for(var hi=0;hi<Po.length;hi++){var gi=Po[hi],Vp=gi.toLowerCase(),Wp=gi[0].toUpperCase()+gi.slice(1);Tt(Vp,"on"+Wp)}Tt(du,"onAnimationEnd");Tt(fu,"onAnimationIteration");Tt(pu,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(mu,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Eo(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Vf(n,t,void 0,e),e.currentTarget=null}function gu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var a=n.length-1;0<=a;a--){var c=n[a],o=c.instance,d=c.currentTarget;if(c=c.listener,o!==s&&i.isPropagationStopped())break e;Eo(i,c,d),s=o}else for(a=0;a<n.length;a++){if(c=n[a],o=c.instance,d=c.currentTarget,c=c.listener,o!==s&&i.isPropagationStopped())break e;Eo(i,c,d),s=o}}}if(ol)throw e=Wi,ol=!1,Wi=null,e}function Q(e,t){var r=t[ts];r===void 0&&(r=t[ts]=new Set);var n=e+"__bubble";r.has(n)||(vu(t,e,2,!1),r.add(n))}function vi(e,t,r){var n=0;t&&(n|=4),vu(r,e,n,t)}var An="_reactListening"+Math.random().toString(36).slice(2);function ln(e){if(!e[An]){e[An]=!0,Sc.forEach(function(r){r!=="selectionchange"&&(Qp.has(r)||vi(r,!1,e),vi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[An]||(t[An]=!0,vi("selectionchange",!1,t))}}function vu(e,t,r,n){switch(eu(t)){case 1:var i=sp;break;case 4:i=ap;break;default:i=Fs}r=i.bind(null,t,r,e),i=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function xi(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;a=a.return}for(;c!==null;){if(a=$t(c),a===null)return;if(o=a.tag,o===5||o===6){n=s=a;continue e}c=c.parentNode}}n=n.return}Ac(function(){var d=s,y=Rs(r),v=[];e:{var h=hu.get(e);if(h!==void 0){var j=Os,b=e;switch(e){case"keypress":if(Zn(r)===0)break e;case"keydown":case"keyup":j=kp;break;case"focusin":b="focus",j=di;break;case"focusout":b="blur",j=di;break;case"beforeblur":case"afterblur":j=di;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=bp;break;case du:case fu:case pu:j=pp;break;case mu:j=Pp;break;case"scroll":j=op;break;case"wheel":j=zp;break;case"copy":case"cut":case"paste":j=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=xo}var w=(t&4)!==0,M=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var u=d,m;u!==null;){m=u;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,p!==null&&(g=Zr(u,p),g!=null&&w.push(sn(u,g,m)))),M)break;u=u.return}0<w.length&&(h=new j(h,b,null,r,y),v.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",h&&r!==Bi&&(b=r.relatedTarget||r.fromElement)&&($t(b)||b[ot]))break e;if((j||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,j?(b=r.relatedTarget||r.toElement,j=d,b=b?$t(b):null,b!==null&&(M=Kt(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(j=null,b=d),j!==b)){if(w=go,g="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=xo,g="onPointerLeave",p="onPointerEnter",u="pointer"),M=j==null?h:rr(j),m=b==null?h:rr(b),h=new w(g,u+"leave",j,r,y),h.target=M,h.relatedTarget=m,g=null,$t(y)===d&&(w=new w(p,u+"enter",b,r,y),w.target=m,w.relatedTarget=M,g=w),M=g,j&&b)t:{for(w=j,p=b,u=0,m=w;m;m=Xt(m))u++;for(m=0,g=p;g;g=Xt(g))m++;for(;0<u-m;)w=Xt(w),u--;for(;0<m-u;)p=Xt(p),m--;for(;u--;){if(w===p||p!==null&&w===p.alternate)break t;w=Xt(w),p=Xt(p)}w=null}else w=null;j!==null&&zo(v,h,j,w,!1),b!==null&&M!==null&&zo(v,M,b,w,!0)}}e:{if(h=d?rr(d):window,j=h.nodeName&&h.nodeName.toLowerCase(),j==="select"||j==="input"&&h.type==="file")var C=Fp;else if(jo(h))if(su)C=Ap;else{C=Op;var L=$p}else(j=h.nodeName)&&j.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Dp);if(C&&(C=C(e,d))){iu(v,C,r,y);break e}L&&L(e,h,d),e==="focusout"&&(L=h._wrapperState)&&L.controlled&&h.type==="number"&&$i(h,"number",h.value)}switch(L=d?rr(d):window,e){case"focusin":(jo(L)||L.contentEditable==="true")&&(er=L,Gi=d,Wr=null);break;case"focusout":Wr=Gi=er=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Co(v,r,y);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":Co(v,r,y)}var E;if(As)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else qt?nu(e,r)&&(x="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(x="onCompositionStart");x&&(ru&&r.locale!=="ko"&&(qt||x!=="onCompositionStart"?x==="onCompositionEnd"&&qt&&(E=tu()):(yt=y,$s="value"in yt?yt.value:yt.textContent,qt=!0)),L=pl(d,x),0<L.length&&(x=new vo(x,e,null,r,y),v.push({event:x,listeners:L}),E?x.data=E:(E=lu(r),E!==null&&(x.data=E)))),(E=Tp?Rp(e,r):_p(e,r))&&(d=pl(d,"onBeforeInput"),0<d.length&&(y=new vo("onBeforeInput","beforeinput",null,r,y),v.push({event:y,listeners:d}),y.data=E))}gu(v,t)})}function sn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function pl(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zr(e,r),s!=null&&n.unshift(sn(e,s,i)),s=Zr(e,t),s!=null&&n.push(sn(e,s,i))),e=e.return}return n}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zo(e,t,r,n,i){for(var s=t._reactName,a=[];r!==null&&r!==n;){var c=r,o=c.alternate,d=c.stateNode;if(o!==null&&o===n)break;c.tag===5&&d!==null&&(c=d,i?(o=Zr(r,s),o!=null&&a.unshift(sn(r,o,c))):i||(o=Zr(r,s),o!=null&&a.push(sn(r,o,c)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Yp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function Lo(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Kp,"")}function Un(e,t,r){if(t=Lo(t),Lo(e)!==t&&r)throw Error(k(425))}function ml(){}var Ji=null,Zi=null;function qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,To=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof To<"u"?function(e){return To.resolve(null).then(e).catch(Jp)}:es;function Jp(e){setTimeout(function(){throw e})}function yi(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),tn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);tn(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ro(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Sr,an="__reactProps$"+Sr,ot="__reactContainer$"+Sr,ts="__reactEvents$"+Sr,Zp="__reactListeners$"+Sr,qp="__reactHandles$"+Sr;function $t(e){var t=e[Xe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ot]||r[Xe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ro(e);e!==null;){if(r=e[Xe])return r;e=Ro(e)}return t}e=r,r=e.parentNode}return null}function vn(e){return e=e[Xe]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Il(e){return e[an]||null}var rs=[],nr=-1;function Rt(e){return{current:e}}function Y(e){0>nr||(e.current=rs[nr],rs[nr]=null,nr--)}function W(e,t){nr++,rs[nr]=e.current,e.current=t}var Lt={},he=Rt(Lt),ke=Rt(!1),Bt=Lt;function gr(e,t){var r=e.type.contextTypes;if(!r)return Lt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function hl(){Y(ke),Y(he)}function _o(e,t,r){if(he.current!==Lt)throw Error(k(168));W(he,t),W(ke,r)}function xu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(k(108,$f(e)||"Unknown",i));return Z({},r,n)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Bt=he.current,W(he,e),W(ke,ke.current),!0}function Mo(e,t,r){var n=e.stateNode;if(!n)throw Error(k(169));r?(e=xu(e,t,Bt),n.__reactInternalMemoizedMergedChildContext=e,Y(ke),Y(he),W(he,e)):Y(ke),W(ke,r)}var nt=null,Fl=!1,wi=!1;function yu(e){nt===null?nt=[e]:nt.push(e)}function em(e){Fl=!0,yu(e)}function _t(){if(!wi&&nt!==null){wi=!0;var e=0,t=H;try{var r=nt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}nt=null,Fl=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),Vc(_s,_t),i}finally{H=t,wi=!1}}return null}var lr=[],ir=0,vl=null,xl=0,Re=[],_e=0,Ht=null,lt=1,it="";function It(e,t){lr[ir++]=xl,lr[ir++]=vl,vl=e,xl=t}function wu(e,t,r){Re[_e++]=lt,Re[_e++]=it,Re[_e++]=Ht,Ht=e;var n=lt;e=it;var i=32-We(n)-1;n&=~(1<<i),r+=1;var s=32-We(t)+i;if(30<s){var a=i-i%5;s=(n&(1<<a)-1).toString(32),n>>=a,i-=a,lt=1<<32-We(t)+i|r<<i|n,it=s+e}else lt=1<<s|r<<i|n,it=e}function Bs(e){e.return!==null&&(It(e,1),wu(e,1,0))}function Hs(e){for(;e===vl;)vl=lr[--ir],lr[ir]=null,xl=lr[--ir],lr[ir]=null;for(;e===Ht;)Ht=Re[--_e],Re[_e]=null,it=Re[--_e],Re[_e]=null,lt=Re[--_e],Re[_e]=null}var Pe=null,Ce=null,G=!1,Ve=null;function ju(e,t){var r=Me(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Io(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Ce=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ht!==null?{id:lt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Me(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pe=e,Ce=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(G){var t=Ce;if(t){var r=t;if(!Io(e,t)){if(ns(e))throw Error(k(418));t=St(r.nextSibling);var n=Pe;t&&Io(e,t)?ju(n,r):(e.flags=e.flags&-4097|2,G=!1,Pe=e)}}else{if(ns(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Pe=e}}}function Fo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Bn(e){if(e!==Pe)return!1;if(!G)return Fo(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qi(e.type,e.memoizedProps)),t&&(t=Ce)){if(ns(e))throw ku(),Error(k(418));for(;t;)ju(e,t),t=St(t.nextSibling)}if(Fo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ce=St(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Pe?St(e.stateNode.nextSibling):null;return!0}function ku(){for(var e=Ce;e;)e=St(e.nextSibling)}function vr(){Ce=Pe=null,G=!1}function Vs(e){Ve===null?Ve=[e]:Ve.push(e)}var tm=dt.ReactCurrentBatchConfig;function Mr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(k(309));var n=r.stateNode}if(!n)throw Error(k(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var c=i.refs;a===null?delete c[s]:c[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!r._owner)throw Error(k(290,e))}return e}function Hn(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $o(e){var t=e._init;return t(e._payload)}function Nu(e){function t(p,u){if(e){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function r(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function n(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=Et(p,u),p.index=0,p.sibling=null,p}function s(p,u,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=2,u):m):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function c(p,u,m,g){return u===null||u.tag!==6?(u=Pi(m,p.mode,g),u.return=p,u):(u=i(u,m),u.return=p,u)}function o(p,u,m,g){var C=m.type;return C===Zt?y(p,u,m.props.children,g,m.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&$o(C)===u.type)?(g=i(u,m.props),g.ref=Mr(p,u,m),g.return=p,g):(g=il(m.type,m.key,m.props,null,p.mode,g),g.ref=Mr(p,u,m),g.return=p,g)}function d(p,u,m,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Ei(m,p.mode,g),u.return=p,u):(u=i(u,m.children||[]),u.return=p,u)}function y(p,u,m,g,C){return u===null||u.tag!==7?(u=Ut(m,p.mode,g,C),u.return=p,u):(u=i(u,m),u.return=p,u)}function v(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Pi(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Rn:return m=il(u.type,u.key,u.props,null,p.mode,m),m.ref=Mr(p,null,u),m.return=p,m;case Jt:return u=Ei(u,p.mode,m),u.return=p,u;case ht:var g=u._init;return v(p,g(u._payload),m)}if(Or(u)||zr(u))return u=Ut(u,p.mode,m,null),u.return=p,u;Hn(p,u)}return null}function h(p,u,m,g){var C=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:c(p,u,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Rn:return m.key===C?o(p,u,m,g):null;case Jt:return m.key===C?d(p,u,m,g):null;case ht:return C=m._init,h(p,u,C(m._payload),g)}if(Or(m)||zr(m))return C!==null?null:y(p,u,m,g,null);Hn(p,m)}return null}function j(p,u,m,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(m)||null,c(u,p,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Rn:return p=p.get(g.key===null?m:g.key)||null,o(u,p,g,C);case Jt:return p=p.get(g.key===null?m:g.key)||null,d(u,p,g,C);case ht:var L=g._init;return j(p,u,m,L(g._payload),C)}if(Or(g)||zr(g))return p=p.get(m)||null,y(u,p,g,C,null);Hn(u,g)}return null}function b(p,u,m,g){for(var C=null,L=null,E=u,x=u=0,O=null;E!==null&&x<m.length;x++){E.index>x?(O=E,E=null):O=E.sibling;var I=h(p,E,m[x],g);if(I===null){E===null&&(E=O);break}e&&E&&I.alternate===null&&t(p,E),u=s(I,u,x),L===null?C=I:L.sibling=I,L=I,E=O}if(x===m.length)return r(p,E),G&&It(p,x),C;if(E===null){for(;x<m.length;x++)E=v(p,m[x],g),E!==null&&(u=s(E,u,x),L===null?C=E:L.sibling=E,L=E);return G&&It(p,x),C}for(E=n(p,E);x<m.length;x++)O=j(E,p,x,m[x],g),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?x:O.key),u=s(O,u,x),L===null?C=O:L.sibling=O,L=O);return e&&E.forEach(function(P){return t(p,P)}),G&&It(p,x),C}function w(p,u,m,g){var C=zr(m);if(typeof C!="function")throw Error(k(150));if(m=C.call(m),m==null)throw Error(k(151));for(var L=C=null,E=u,x=u=0,O=null,I=m.next();E!==null&&!I.done;x++,I=m.next()){E.index>x?(O=E,E=null):O=E.sibling;var P=h(p,E,I.value,g);if(P===null){E===null&&(E=O);break}e&&E&&P.alternate===null&&t(p,E),u=s(P,u,x),L===null?C=P:L.sibling=P,L=P,E=O}if(I.done)return r(p,E),G&&It(p,x),C;if(E===null){for(;!I.done;x++,I=m.next())I=v(p,I.value,g),I!==null&&(u=s(I,u,x),L===null?C=I:L.sibling=I,L=I);return G&&It(p,x),C}for(E=n(p,E);!I.done;x++,I=m.next())I=j(E,p,x,I.value,g),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?x:I.key),u=s(I,u,x),L===null?C=I:L.sibling=I,L=I);return e&&E.forEach(function(N){return t(p,N)}),G&&It(p,x),C}function M(p,u,m,g){if(typeof m=="object"&&m!==null&&m.type===Zt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Rn:e:{for(var C=m.key,L=u;L!==null;){if(L.key===C){if(C=m.type,C===Zt){if(L.tag===7){r(p,L.sibling),u=i(L,m.props.children),u.return=p,p=u;break e}}else if(L.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&$o(C)===L.type){r(p,L.sibling),u=i(L,m.props),u.ref=Mr(p,L,m),u.return=p,p=u;break e}r(p,L);break}else t(p,L);L=L.sibling}m.type===Zt?(u=Ut(m.props.children,p.mode,g,m.key),u.return=p,p=u):(g=il(m.type,m.key,m.props,null,p.mode,g),g.ref=Mr(p,u,m),g.return=p,p=g)}return a(p);case Jt:e:{for(L=m.key;u!==null;){if(u.key===L)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){r(p,u.sibling),u=i(u,m.children||[]),u.return=p,p=u;break e}else{r(p,u);break}else t(p,u);u=u.sibling}u=Ei(m,p.mode,g),u.return=p,p=u}return a(p);case ht:return L=m._init,M(p,u,L(m._payload),g)}if(Or(m))return b(p,u,m,g);if(zr(m))return w(p,u,m,g);Hn(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(r(p,u.sibling),u=i(u,m),u.return=p,p=u):(r(p,u),u=Pi(m,p.mode,g),u.return=p,p=u),a(p)):r(p,u)}return M}var xr=Nu(!0),Su=Nu(!1),yl=Rt(null),wl=null,sr=null,Ws=null;function Qs(){Ws=sr=wl=null}function Ys(e){var t=yl.current;Y(yl),e._currentValue=t}function is(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){wl=e,Ws=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Ws!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(wl===null)throw Error(k(308));sr=e,wl.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Ot=null;function Ks(e){Ot===null?Ot=[e]:Ot.push(e)}function bu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Ks(t)):(r.next=i.next,i.next=r),t.interleaved=r,ct(e,n)}function ct(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gt=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,U&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,ct(e,r)}return i=n.interleaved,i===null?(t.next=t,Ks(n)):(t.next=i.next,i.next=t),n.interleaved=t,ct(e,r)}function qn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ms(e,r)}}function Oo(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function jl(e,t,r,n){var i=e.updateQueue;gt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var o=c,d=o.next;o.next=null,a===null?s=d:a.next=d,a=o;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==a&&(c===null?y.firstBaseUpdate=d:c.next=d,y.lastBaseUpdate=o))}if(s!==null){var v=i.baseState;a=0,y=d=o=null,c=s;do{var h=c.lane,j=c.eventTime;if((n&h)===h){y!==null&&(y=y.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,w=c;switch(h=t,j=r,w.tag){case 1:if(b=w.payload,typeof b=="function"){v=b.call(j,v,h);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,h=typeof b=="function"?b.call(j,v,h):b,h==null)break e;v=Z({},v,h);break e;case 2:gt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[c]:h.push(c))}else j={eventTime:j,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(d=y=j,o=v):y=y.next=j,a|=h;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;h=c,c=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(o=v),i.baseState=o,i.firstBaseUpdate=d,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=v}}function Do(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(k(191,i));i.call(n)}}}var xn={},Ze=Rt(xn),on=Rt(xn),cn=Rt(xn);function Dt(e){if(e===xn)throw Error(k(174));return e}function Xs(e,t){switch(W(cn,t),W(on,e),W(Ze,xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}Y(Ze),W(Ze,t)}function yr(){Y(Ze),Y(on),Y(cn)}function Pu(e){Dt(cn.current);var t=Dt(Ze.current),r=Di(t,e.type);t!==r&&(W(on,e),W(Ze,r))}function Js(e){on.current===e&&(Y(Ze),Y(on))}var X=Rt(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function Zs(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var el=dt.ReactCurrentDispatcher,ki=dt.ReactCurrentBatchConfig,Vt=0,J=null,le=null,se=null,Nl=!1,Qr=!1,un=0,rm=0;function fe(){throw Error(k(321))}function qs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ye(e[r],t[r]))return!1;return!0}function ea(e,t,r,n,i,s){if(Vt=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,el.current=e===null||e.memoizedState===null?sm:am,e=r(n,i),Qr){s=0;do{if(Qr=!1,un=0,25<=s)throw Error(k(301));s+=1,se=le=null,t.updateQueue=null,el.current=om,e=r(n,i)}while(Qr)}if(el.current=Sl,t=le!==null&&le.next!==null,Vt=0,se=le=J=null,Nl=!1,t)throw Error(k(300));return e}function ta(){var e=un!==0;return un=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function $e(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=se===null?J.memoizedState:se.next;if(t!==null)se=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function dn(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=$e(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var n=le,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var c=a=null,o=null,d=s;do{var y=d.lane;if((Vt&y)===y)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var v={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(c=o=v,a=n):o=o.next=v,J.lanes|=y,Wt|=y}d=d.next}while(d!==null&&d!==s);o===null?a=n:o.next=c,Ye(n,t.memoizedState)||(je=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=o,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,Wt|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Si(e){var t=$e(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Ye(s,t.memoizedState)||(je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Eu(){}function zu(e,t){var r=J,n=$e(),i=t(),s=!Ye(n.memoizedState,i);if(s&&(n.memoizedState=i,je=!0),n=n.queue,ra(Ru.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(r.flags|=2048,fn(9,Tu.bind(null,r,n,i,t),void 0,null),ae===null)throw Error(k(349));Vt&30||Lu(r,t,i)}return i}function Lu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Tu(e,t,r,n){t.value=r,t.getSnapshot=n,_u(t)&&Mu(e)}function Ru(e,t,r){return r(function(){_u(t)&&Mu(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ye(e,r)}catch{return!0}}function Mu(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function Ao(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t.queue=e,e=e.dispatch=im.bind(null,J,e),[t.memoizedState,e]}function fn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Iu(){return $e().memoizedState}function tl(e,t,r,n){var i=Ge();J.flags|=e,i.memoizedState=fn(1|t,r,void 0,n===void 0?null:n)}function $l(e,t,r,n){var i=$e();n=n===void 0?null:n;var s=void 0;if(le!==null){var a=le.memoizedState;if(s=a.destroy,n!==null&&qs(n,a.deps)){i.memoizedState=fn(t,r,s,n);return}}J.flags|=e,i.memoizedState=fn(1|t,r,s,n)}function Uo(e,t){return tl(8390656,8,e,t)}function ra(e,t){return $l(2048,8,e,t)}function Fu(e,t){return $l(4,2,e,t)}function $u(e,t){return $l(4,4,e,t)}function Ou(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Du(e,t,r){return r=r!=null?r.concat([e]):null,$l(4,4,Ou.bind(null,t,e),r)}function na(){}function Au(e,t){var r=$e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&qs(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Uu(e,t){var r=$e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&qs(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Bu(e,t,r){return Vt&21?(Ye(r,t)||(r=Yc(),J.lanes|=r,Wt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=r)}function nm(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=ki.transition;ki.transition={};try{e(!1),t()}finally{H=r,ki.transition=n}}function Hu(){return $e().memoizedState}function lm(e,t,r){var n=Pt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Vu(e))Wu(t,r);else if(r=bu(e,t,r,n),r!==null){var i=ve();Qe(r,e,n,i),Qu(r,t,n)}}function im(e,t,r){var n=Pt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Wu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,c=s(a,r);if(i.hasEagerState=!0,i.eagerState=c,Ye(c,a)){var o=t.interleaved;o===null?(i.next=i,Ks(t)):(i.next=o.next,o.next=i),t.interleaved=i;return}}catch{}finally{}r=bu(e,t,i,n),r!==null&&(i=ve(),Qe(r,e,n,i),Qu(r,t,n))}}function Vu(e){var t=e.alternate;return e===J||t!==null&&t===J}function Wu(e,t){Qr=Nl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Qu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ms(e,r)}}var Sl={readContext:Fe,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},sm={readContext:Fe,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Uo,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,tl(4194308,4,Ou.bind(null,t,e),r)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var r=Ge();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ge();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=lm.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Ao,useDebugValue:na,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=nm.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=J,i=Ge();if(G){if(r===void 0)throw Error(k(407));r=r()}else{if(r=t(),ae===null)throw Error(k(349));Vt&30||Lu(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Uo(Ru.bind(null,n,s,e),[e]),n.flags|=2048,fn(9,Tu.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Ge(),t=ae.identifierPrefix;if(G){var r=it,n=lt;r=(n&~(1<<32-We(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=un++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=rm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},am={readContext:Fe,useCallback:Au,useContext:Fe,useEffect:ra,useImperativeHandle:Du,useInsertionEffect:Fu,useLayoutEffect:$u,useMemo:Uu,useReducer:Ni,useRef:Iu,useState:function(){return Ni(dn)},useDebugValue:na,useDeferredValue:function(e){var t=$e();return Bu(t,le.memoizedState,e)},useTransition:function(){var e=Ni(dn)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1},om={readContext:Fe,useCallback:Au,useContext:Fe,useEffect:ra,useImperativeHandle:Du,useInsertionEffect:Fu,useLayoutEffect:$u,useMemo:Uu,useReducer:Si,useRef:Iu,useState:function(){return Si(dn)},useDebugValue:na,useDeferredValue:function(e){var t=$e();return le===null?t.memoizedState=e:Bu(t,le.memoizedState,e)},useTransition:function(){var e=Si(dn)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ss(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ol={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ve(),i=Pt(e),s=st(n,i);s.payload=t,r!=null&&(s.callback=r),t=bt(e,s,i),t!==null&&(Qe(t,e,i,n),qn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ve(),i=Pt(e),s=st(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=bt(e,s,i),t!==null&&(Qe(t,e,i,n),qn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ve(),n=Pt(e),i=st(r,n);i.tag=2,t!=null&&(i.callback=t),t=bt(e,i,n),t!==null&&(Qe(t,e,n,r),qn(t,e,n))}};function Bo(e,t,r,n,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,a):t.prototype&&t.prototype.isPureReactComponent?!nn(r,n)||!nn(i,s):!0}function Yu(e,t,r){var n=!1,i=Lt,s=t.contextType;return typeof s=="object"&&s!==null?s=Fe(s):(i=Ne(t)?Bt:he.current,n=t.contextTypes,s=(n=n!=null)?gr(e,i):Lt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ol,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ho(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function as(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Gs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Fe(s):(s=Ne(t)?Bt:he.current,i.context=gr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ss(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ol.enqueueReplaceState(i,i.state,null),jl(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var r="",n=t;do r+=Ff(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function bi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function os(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,r){r=st(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Cl||(Cl=!0,xs=n),os(e,t)},r}function Gu(e,t,r){r=st(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){os(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){os(e,t),typeof n!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Vo(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new cm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Nm.bind(null,e,t,r),t.then(e,e))}function Wo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qo(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=st(-1,1),t.tag=2,bt(r,t,1))),r.lanes|=1),e)}var um=dt.ReactCurrentOwner,je=!1;function ge(e,t,r,n){t.child=e===null?Su(t,null,r,n):xr(t,e.child,r,n)}function Yo(e,t,r,n,i){r=r.render;var s=t.ref;return pr(t,i),n=ea(e,t,r,n,s,i),r=ta(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(G&&r&&Bs(t),t.flags|=1,ge(e,t,n,i),t.child)}function Ko(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!da(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Xu(e,t,s,n,i)):(e=il(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:nn,r(a,n)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Et(s,n),e.ref=t.ref,e.return=t,t.child=e}function Xu(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(nn(s,n)&&e.ref===t.ref)if(je=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,ut(e,t,i)}return cs(e,t,r,n,i)}function Ju(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(or,be),be|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(or,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,W(or,be),be|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,W(or,be),be|=n;return ge(e,t,i,r),t.child}function Zu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,r,n,i){var s=Ne(r)?Bt:he.current;return s=gr(t,s),pr(t,i),r=ea(e,t,r,n,s,i),n=ta(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(G&&n&&Bs(t),t.flags|=1,ge(e,t,r,i),t.child)}function Go(e,t,r,n,i){if(Ne(r)){var s=!0;gl(t)}else s=!1;if(pr(t,i),t.stateNode===null)rl(e,t),Yu(t,r,n),as(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var o=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=Fe(d):(d=Ne(r)?Bt:he.current,d=gr(t,d));var y=r.getDerivedStateFromProps,v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||o!==d)&&Ho(t,a,n,d),gt=!1;var h=t.memoizedState;a.state=h,jl(t,n,a,i),o=t.memoizedState,c!==n||h!==o||ke.current||gt?(typeof y=="function"&&(ss(t,r,y,n),o=t.memoizedState),(c=gt||Bo(t,r,c,n,h,o,d))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=o),a.props=n,a.state=o,a.context=d,n=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Cu(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Be(t.type,c),a.props=d,v=t.pendingProps,h=a.context,o=r.contextType,typeof o=="object"&&o!==null?o=Fe(o):(o=Ne(r)?Bt:he.current,o=gr(t,o));var j=r.getDerivedStateFromProps;(y=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==v||h!==o)&&Ho(t,a,n,o),gt=!1,h=t.memoizedState,a.state=h,jl(t,n,a,i);var b=t.memoizedState;c!==v||h!==b||ke.current||gt?(typeof j=="function"&&(ss(t,r,j,n),b=t.memoizedState),(d=gt||Bo(t,r,d,n,h,b,o)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,b,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,b,o)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),a.props=n,a.state=b,a.context=o,n=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return us(e,t,r,n,s,i)}function us(e,t,r,n,i,s){Zu(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Mo(t,r,!1),ut(e,t,s);n=t.stateNode,um.current=t;var c=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=xr(t,e.child,null,s),t.child=xr(t,null,c,s)):ge(e,t,c,s),t.memoizedState=n.state,i&&Mo(t,r,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?_o(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_o(e,t.context,!1),Xs(e,t.containerInfo)}function Xo(e,t,r,n,i){return vr(),Vs(i),t.flags|=256,ge(e,t,r,n),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,r){var n=t.pendingProps,i=X.current,s=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(X,i&1),e===null)return ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,s?(n=t.mode,s=t.child,a={mode:"hidden",children:a},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ul(a,n,0,null),e=Ut(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=fs(r),t.memoizedState=ds,e):la(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return dm(e,t,a,n,c,i,r);if(s){s=n.fallback,a=t.mode,i=e.child,c=i.sibling;var o={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=o,t.deletions=null):(n=Et(i,o),n.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Et(c,s):(s=Ut(s,a,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,a=e.child.memoizedState,a=a===null?fs(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~r,t.memoizedState=ds,n}return s=e.child,e=s.sibling,n=Et(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function la(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vn(e,t,r,n){return n!==null&&Vs(n),xr(t,e.child,null,r),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dm(e,t,r,n,i,s,a){if(r)return t.flags&256?(t.flags&=-257,n=bi(Error(k(422))),Vn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=Ul({mode:"visible",children:n.children},i,0,null),s=Ut(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&xr(t,e.child,null,a),t.child.memoizedState=fs(a),t.memoizedState=ds,s);if(!(t.mode&1))return Vn(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var c=n.dgst;return n=c,s=Error(k(419)),n=bi(s,n,void 0),Vn(e,t,a,n)}if(c=(a&e.childLanes)!==0,je||c){if(n=ae,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ct(e,i),Qe(n,e,i,-1))}return ua(),n=bi(Error(k(421))),Vn(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ce=St(i.nextSibling),Pe=t,G=!0,Ve=null,e!==null&&(Re[_e++]=lt,Re[_e++]=it,Re[_e++]=Ht,lt=e.id,it=e.overflow,Ht=t),t=la(t,n.children),t.flags|=4096,t)}function Jo(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),is(e.return,t,r)}function Ci(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function td(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(ge(e,t,n.children,r),n=X.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jo(e,r,t);else if(e.tag===19)Jo(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(W(X,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&kl(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ci(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&kl(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ci(t,!0,r,null,s);break;case"together":Ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,r=Et(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Et(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function fm(e,t,r){switch(t.tag){case 3:qu(t),vr();break;case 5:Pu(t);break;case 1:Ne(t.type)&&gl(t);break;case 4:Xs(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;W(yl,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):r&t.child.childLanes?ed(e,t,r):(W(X,X.current&1),e=ut(e,t,r),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return td(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),n)break;return null;case 22:case 23:return t.lanes=0,Ju(e,t,r)}return ut(e,t,r)}var rd,ps,nd,ld;rd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ps=function(){};nd=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Dt(Ze.current);var s=null;switch(r){case"input":i=Ii(e,i),n=Ii(e,n),s=[];break;case"select":i=Z({},i,{value:void 0}),n=Z({},n,{value:void 0}),s=[];break;case"textarea":i=Oi(e,i),n=Oi(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ml)}Ai(r,n);var a;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(a in c)c.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xr.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in n){var o=n[d];if(c=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&o!==c&&(o!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in o)o.hasOwnProperty(a)&&c[a]!==o[a]&&(r||(r={}),r[a]=o[a])}else r||(s||(s=[]),s.push(d,r)),r=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(s=s||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&Q("scroll",e),s||c===o||(s=[])):(s=s||[]).push(d,o))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};ld=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ir(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function pm(e,t,r){var n=t.pendingProps;switch(Hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ne(t.type)&&hl(),pe(t),null;case 3:return n=t.stateNode,yr(),Y(ke),Y(he),Zs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(js(Ve),Ve=null))),ps(e,t),pe(t),null;case 5:Js(t);var i=Dt(cn.current);if(r=t.type,e!==null&&t.stateNode!=null)nd(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=Dt(Ze.current),Bn(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Xe]=t,n[an]=s,e=(t.mode&1)!==0,r){case"dialog":Q("cancel",n),Q("close",n);break;case"iframe":case"object":case"embed":Q("load",n);break;case"video":case"audio":for(i=0;i<Ar.length;i++)Q(Ar[i],n);break;case"source":Q("error",n);break;case"img":case"image":case"link":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"input":io(n,s),Q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Q("invalid",n);break;case"textarea":ao(n,s),Q("invalid",n)}Ai(r,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?n.textContent!==c&&(s.suppressHydrationWarning!==!0&&Un(n.textContent,c,e),i=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Un(n.textContent,c,e),i=["children",""+c]):Xr.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&Q("scroll",n)}switch(r){case"input":_n(n),so(n,s,!0);break;case"textarea":_n(n),oo(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=ml)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Xe]=t,e[an]=n,rd(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ui(r,n),r){case"dialog":Q("cancel",e),Q("close",e),i=n;break;case"iframe":case"object":case"embed":Q("load",e),i=n;break;case"video":case"audio":for(i=0;i<Ar.length;i++)Q(Ar[i],e);i=n;break;case"source":Q("error",e),i=n;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=n;break;case"details":Q("toggle",e),i=n;break;case"input":io(e,n),i=Ii(e,n),Q("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Z({},n,{value:void 0}),Q("invalid",e);break;case"textarea":ao(e,n),i=Oi(e,n),Q("invalid",e);break;default:i=n}Ai(r,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var o=c[s];s==="style"?Ic(e,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&_c(e,o)):s==="children"?typeof o=="string"?(r!=="textarea"||o!=="")&&Jr(e,o):typeof o=="number"&&Jr(e,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xr.hasOwnProperty(s)?o!=null&&s==="onScroll"&&Q("scroll",e):o!=null&&Es(e,s,o,a))}switch(r){case"input":_n(e),so(e,n,!1);break;case"textarea":_n(e),oo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+zt(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?cr(e,!!n.multiple,s,!1):n.defaultValue!=null&&cr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ml)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)ld(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(k(166));if(r=Dt(cn.current),Dt(Ze.current),Bn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Xe]=t,(s=n.nodeValue!==r)&&(e=Pe,e!==null))switch(e.tag){case 3:Un(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Un(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Xe]=t,t.stateNode=n}return pe(t),null;case 13:if(Y(X),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ce!==null&&t.mode&1&&!(t.flags&128))ku(),vr(),t.flags|=98560,s=!1;else if(s=Bn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Xe]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),s=!1}else Ve!==null&&(js(Ve),Ve=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ie===0&&(ie=3):ua())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return yr(),ps(e,t),e===null&&ln(t.stateNode.containerInfo),pe(t),null;case 10:return Ys(t.type._context),pe(t),null;case 17:return Ne(t.type)&&hl(),pe(t),null;case 19:if(Y(X),s=t.memoizedState,s===null)return pe(t),null;if(n=(t.flags&128)!==0,a=s.rendering,a===null)if(n)Ir(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=kl(e),a!==null){for(t.flags|=128,Ir(s,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}s.tail!==null&&re()>jr&&(t.flags|=128,n=!0,Ir(s,!1),t.lanes=4194304)}else{if(!n)if(e=kl(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ir(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!G)return pe(t),null}else 2*re()-s.renderingStartTime>jr&&r!==1073741824&&(t.flags|=128,n=!0,Ir(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(r=s.last,r!==null?r.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=re(),t.sibling=null,r=X.current,W(X,n?r&1|2:r&1),t):(pe(t),null);case 22:case 23:return ca(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?be&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function mm(e,t){switch(Hs(t),t.tag){case 1:return Ne(t.type)&&hl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),Y(ke),Y(he),Zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Js(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return yr(),null;case 10:return Ys(t.type._context),null;case 22:case 23:return ca(),null;case 24:return null;default:return null}}var Wn=!1,me=!1,hm=typeof WeakSet=="function"?WeakSet:Set,T=null;function ar(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){q(e,t,n)}else r.current=null}function ms(e,t,r){try{r()}catch(n){q(e,t,n)}}var Zo=!1;function gm(e,t){if(Ji=dl,e=cu(),Us(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,c=-1,o=-1,d=0,y=0,v=e,h=null;t:for(;;){for(var j;v!==r||i!==0&&v.nodeType!==3||(c=a+i),v!==s||n!==0&&v.nodeType!==3||(o=a+n),v.nodeType===3&&(a+=v.nodeValue.length),(j=v.firstChild)!==null;)h=v,v=j;for(;;){if(v===e)break t;if(h===r&&++d===i&&(c=a),h===s&&++y===n&&(o=a),(j=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=j}r=c===-1||o===-1?null:{start:c,end:o}}else r=null}r=r||{start:0,end:0}}else r=null;for(Zi={focusedElem:e,selectionRange:r},dl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,M=b.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Be(t.type,w),M);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){q(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=Zo,Zo=!1,b}function Yr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ms(t,r,s)}i=i.next}while(i!==n)}}function Dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function hs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function id(e){var t=e.alternate;t!==null&&(e.alternate=null,id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[an],delete t[ts],delete t[Zp],delete t[qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sd(e){return e.tag===5||e.tag===3||e.tag===4}function qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ml));else if(n!==4&&(e=e.child,e!==null))for(gs(e,t,r),e=e.sibling;e!==null;)gs(e,t,r),e=e.sibling}function vs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(vs(e,t,r),e=e.sibling;e!==null;)vs(e,t,r),e=e.sibling}var oe=null,He=!1;function mt(e,t,r){for(r=r.child;r!==null;)ad(e,t,r),r=r.sibling}function ad(e,t,r){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Tl,r)}catch{}switch(r.tag){case 5:me||ar(r,t);case 6:var n=oe,i=He;oe=null,mt(e,t,r),oe=n,He=i,oe!==null&&(He?(e=oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):oe.removeChild(r.stateNode));break;case 18:oe!==null&&(He?(e=oe,r=r.stateNode,e.nodeType===8?yi(e.parentNode,r):e.nodeType===1&&yi(e,r),tn(e)):yi(oe,r.stateNode));break;case 4:n=oe,i=He,oe=r.stateNode.containerInfo,He=!0,mt(e,t,r),oe=n,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ms(r,t,a),i=i.next}while(i!==n)}mt(e,t,r);break;case 1:if(!me&&(ar(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){q(r,t,c)}mt(e,t,r);break;case 21:mt(e,t,r);break;case 22:r.mode&1?(me=(n=me)||r.memoizedState!==null,mt(e,t,r),me=n):mt(e,t,r);break;default:mt(e,t,r)}}function ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new hm),t.forEach(function(n){var i=bm.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ue(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:oe=c.stateNode,He=!1;break e;case 3:oe=c.stateNode.containerInfo,He=!0;break e;case 4:oe=c.stateNode.containerInfo,He=!0;break e}c=c.return}if(oe===null)throw Error(k(160));ad(s,a,i),oe=null,He=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(d){q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ke(e),n&4){try{Yr(3,e,e.return),Dl(3,e)}catch(w){q(e,e.return,w)}try{Yr(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Ue(t,e),Ke(e),n&512&&r!==null&&ar(r,r.return);break;case 5:if(Ue(t,e),Ke(e),n&512&&r!==null&&ar(r,r.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(w){q(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=r!==null?r.memoizedProps:s,c=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Lc(i,s),Ui(c,a);var d=Ui(c,s);for(a=0;a<o.length;a+=2){var y=o[a],v=o[a+1];y==="style"?Ic(i,v):y==="dangerouslySetInnerHTML"?_c(i,v):y==="children"?Jr(i,v):Es(i,y,v,d)}switch(c){case"input":Fi(i,s);break;case"textarea":Tc(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?cr(i,!!s.multiple,j,!1):h!==!!s.multiple&&(s.defaultValue!=null?cr(i,!!s.multiple,s.defaultValue,!0):cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[an]=s}catch(w){q(e,e.return,w)}}break;case 6:if(Ue(t,e),Ke(e),n&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){q(e,e.return,w)}}break;case 3:if(Ue(t,e),Ke(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Ue(t,e),Ke(e);break;case 13:Ue(t,e),Ke(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(aa=re())),n&4&&ec(e);break;case 22:if(y=r!==null&&r.memoizedState!==null,e.mode&1?(me=(d=me)||y,Ue(t,e),me=d):Ue(t,e),Ke(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(v=T=y;T!==null;){switch(h=T,j=h.child,h.tag){case 0:case 11:case 14:case 15:Yr(4,h,h.return);break;case 1:ar(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){q(n,r,w)}}break;case 5:ar(h,h.return);break;case 22:if(h.memoizedState!==null){rc(v);continue}}j!==null?(j.return=h,T=j):rc(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=v.stateNode,o=v.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=Mc("display",a))}catch(w){q(e,e.return,w)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(w){q(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ue(t,e),Ke(e),n&4&&ec(e);break;case 21:break;default:Ue(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(sd(r)){var n=r;break e}r=r.return}throw Error(k(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Jr(i,""),n.flags&=-33);var s=qo(e);vs(e,s,i);break;case 3:case 4:var a=n.stateNode.containerInfo,c=qo(e);gs(e,c,a);break;default:throw Error(k(161))}}catch(o){q(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,r){T=e,cd(e)}function cd(e,t,r){for(var n=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Wn;if(!a){var c=i.alternate,o=c!==null&&c.memoizedState!==null||me;c=Wn;var d=me;if(Wn=a,(me=o)&&!d)for(T=i;T!==null;)a=T,o=a.child,a.tag===22&&a.memoizedState!==null?nc(i):o!==null?(o.return=a,T=o):nc(i);for(;s!==null;)T=s,cd(s),s=s.sibling;T=i,Wn=c,me=d}tc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):tc(e)}}function tc(e){for(;T!==null;){var t=T;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Dl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!me)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Be(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Do(t,s,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Do(t,a,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src&&(r.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&tn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&hs(t)}catch(h){q(t,t.return,h)}}if(t===e){T=null;break}if(r=t.sibling,r!==null){r.return=t.return,T=r;break}T=t.return}}function rc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var r=t.sibling;if(r!==null){r.return=t.return,T=r;break}T=t.return}}function nc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Dl(4,t)}catch(o){q(t,r,o)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(o){q(t,i,o)}}var s=t.return;try{hs(t)}catch(o){q(t,s,o)}break;case 5:var a=t.return;try{hs(t)}catch(o){q(t,a,o)}}}catch(o){q(t,t.return,o)}if(t===e){T=null;break}var c=t.sibling;if(c!==null){c.return=t.return,T=c;break}T=t.return}}var xm=Math.ceil,bl=dt.ReactCurrentDispatcher,ia=dt.ReactCurrentOwner,Ie=dt.ReactCurrentBatchConfig,U=0,ae=null,ne=null,ce=0,be=0,or=Rt(0),ie=0,pn=null,Wt=0,Al=0,sa=0,Kr=null,we=null,aa=0,jr=1/0,rt=null,Cl=!1,xs=null,Ct=null,Qn=!1,wt=null,Pl=0,Gr=0,ys=null,nl=-1,ll=0;function ve(){return U&6?re():nl!==-1?nl:nl=re()}function Pt(e){return e.mode&1?U&2&&ce!==0?ce&-ce:tm.transition!==null?(ll===0&&(ll=Yc()),ll):(e=H,e!==0||(e=window.event,e=e===void 0?16:eu(e.type)),e):1}function Qe(e,t,r,n){if(50<Gr)throw Gr=0,ys=null,Error(k(185));hn(e,r,n),(!(U&2)||e!==ae)&&(e===ae&&(!(U&2)&&(Al|=r),ie===4&&xt(e,ce)),Se(e,n),r===1&&U===0&&!(t.mode&1)&&(jr=re()+500,Fl&&_t()))}function Se(e,t){var r=e.callbackNode;tp(e,t);var n=ul(e,e===ae?ce:0);if(n===0)r!==null&&fo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&fo(r),t===1)e.tag===0?em(lc.bind(null,e)):yu(lc.bind(null,e)),Xp(function(){!(U&6)&&_t()}),r=null;else{switch(Kc(n)){case 1:r=_s;break;case 4:r=Wc;break;case 16:r=cl;break;case 536870912:r=Qc;break;default:r=cl}r=vd(r,ud.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ud(e,t){if(nl=-1,ll=0,U&6)throw Error(k(327));var r=e.callbackNode;if(mr()&&e.callbackNode!==r)return null;var n=ul(e,e===ae?ce:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=El(e,n);else{t=n;var i=U;U|=2;var s=fd();(ae!==e||ce!==t)&&(rt=null,jr=re()+500,At(e,t));do try{jm();break}catch(c){dd(e,c)}while(!0);Qs(),bl.current=s,U=i,ne!==null?t=0:(ae=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=Qi(e),i!==0&&(n=i,t=ws(e,i))),t===1)throw r=pn,At(e,0),xt(e,n),Se(e,re()),r;if(t===6)xt(e,n);else{if(i=e.current.alternate,!(n&30)&&!ym(i)&&(t=El(e,n),t===2&&(s=Qi(e),s!==0&&(n=s,t=ws(e,s))),t===1))throw r=pn,At(e,0),xt(e,n),Se(e,re()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(k(345));case 2:Ft(e,we,rt);break;case 3:if(xt(e,n),(n&130023424)===n&&(t=aa+500-re(),10<t)){if(ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=es(Ft.bind(null,e,we,rt),t);break}Ft(e,we,rt);break;case 4:if(xt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-We(n);s=1<<a,a=t[a],a>i&&(i=a),n&=~s}if(n=i,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*xm(n/1960))-n,10<n){e.timeoutHandle=es(Ft.bind(null,e,we,rt),n);break}Ft(e,we,rt);break;case 5:Ft(e,we,rt);break;default:throw Error(k(329))}}}return Se(e,re()),e.callbackNode===r?ud.bind(null,e):null}function ws(e,t){var r=Kr;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=El(e,t),e!==2&&(t=we,we=r,t!==null&&js(t)),e}function js(e){we===null?we=e:we.push.apply(we,e)}function ym(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!Ye(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~sa,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-We(t),n=1<<r;e[r]=-1,t&=~n}}function lc(e){if(U&6)throw Error(k(327));mr();var t=ul(e,0);if(!(t&1))return Se(e,re()),null;var r=El(e,t);if(e.tag!==0&&r===2){var n=Qi(e);n!==0&&(t=n,r=ws(e,n))}if(r===1)throw r=pn,At(e,0),xt(e,t),Se(e,re()),r;if(r===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,we,rt),Se(e,re()),null}function oa(e,t){var r=U;U|=1;try{return e(t)}finally{U=r,U===0&&(jr=re()+500,Fl&&_t())}}function Qt(e){wt!==null&&wt.tag===0&&!(U&6)&&mr();var t=U;U|=1;var r=Ie.transition,n=H;try{if(Ie.transition=null,H=1,e)return e()}finally{H=n,Ie.transition=r,U=t,!(U&6)&&_t()}}function ca(){be=or.current,Y(or)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Gp(r)),ne!==null)for(r=ne.return;r!==null;){var n=r;switch(Hs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&hl();break;case 3:yr(),Y(ke),Y(he),Zs();break;case 5:Js(n);break;case 4:yr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Ys(n.type._context);break;case 22:case 23:ca()}r=r.return}if(ae=e,ne=e=Et(e.current,null),ce=be=t,ie=0,pn=null,sa=Al=Wt=0,we=Kr=null,Ot!==null){for(t=0;t<Ot.length;t++)if(r=Ot[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var a=s.next;s.next=i,n.next=a}r.pending=n}Ot=null}return e}function dd(e,t){do{var r=ne;try{if(Qs(),el.current=Sl,Nl){for(var n=J.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Nl=!1}if(Vt=0,se=le=J=null,Qr=!1,un=0,ia.current=null,r===null||r.return===null){ie=1,pn=t,ne=null;break}e:{var s=e,a=r.return,c=r,o=t;if(t=ce,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,y=c,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var j=Wo(a);if(j!==null){j.flags&=-257,Qo(j,a,c,s,t),j.mode&1&&Vo(s,d,t),t=j,o=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(o),t.updateQueue=w}else b.add(o);break e}else{if(!(t&1)){Vo(s,d,t),ua();break e}o=Error(k(426))}}else if(G&&c.mode&1){var M=Wo(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Qo(M,a,c,s,t),Vs(wr(o,c));break e}}s=o=wr(o,c),ie!==4&&(ie=2),Kr===null?Kr=[s]:Kr.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Ku(s,o,t);Oo(s,p);break e;case 1:c=o;var u=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ct===null||!Ct.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=Gu(s,c,t);Oo(s,g);break e}}s=s.return}while(s!==null)}md(r)}catch(C){t=C,ne===r&&r!==null&&(ne=r=r.return);continue}break}while(!0)}function fd(){var e=bl.current;return bl.current=Sl,e===null?Sl:e}function ua(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Wt&268435455)&&!(Al&268435455)||xt(ae,ce)}function El(e,t){var r=U;U|=2;var n=fd();(ae!==e||ce!==t)&&(rt=null,At(e,t));do try{wm();break}catch(i){dd(e,i)}while(!0);if(Qs(),U=r,bl.current=n,ne!==null)throw Error(k(261));return ae=null,ce=0,ie}function wm(){for(;ne!==null;)pd(ne)}function jm(){for(;ne!==null&&!Qf();)pd(ne)}function pd(e){var t=gd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?md(e):ne=t,ia.current=null}function md(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=mm(r,t),r!==null){r.flags&=32767,ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(r=pm(r,t,be),r!==null){ne=r;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function Ft(e,t,r){var n=H,i=Ie.transition;try{Ie.transition=null,H=1,km(e,t,r,n)}finally{Ie.transition=i,H=n}return null}function km(e,t,r,n){do mr();while(wt!==null);if(U&6)throw Error(k(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(rp(e,s),e===ae&&(ne=ae=null,ce=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Qn||(Qn=!0,vd(cl,function(){return mr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Ie.transition,Ie.transition=null;var a=H;H=1;var c=U;U|=4,ia.current=null,gm(e,r),od(r,e),Bp(Zi),dl=!!Ji,Zi=Ji=null,e.current=r,vm(r),Yf(),U=c,H=a,Ie.transition=s}else e.current=r;if(Qn&&(Qn=!1,wt=e,Pl=i),s=e.pendingLanes,s===0&&(Ct=null),Xf(r.stateNode),Se(e,re()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=xs,xs=null,e;return Pl&1&&e.tag!==0&&mr(),s=e.pendingLanes,s&1?e===ys?Gr++:(Gr=0,ys=e):Gr=0,_t(),null}function mr(){if(wt!==null){var e=Kc(Pl),t=Ie.transition,r=H;try{if(Ie.transition=null,H=16>e?16:e,wt===null)var n=!1;else{if(e=wt,wt=null,Pl=0,U&6)throw Error(k(331));var i=U;for(U|=4,T=e.current;T!==null;){var s=T,a=s.child;if(T.flags&16){var c=s.deletions;if(c!==null){for(var o=0;o<c.length;o++){var d=c[o];for(T=d;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Yr(8,y,s)}var v=y.child;if(v!==null)v.return=y,T=v;else for(;T!==null;){y=T;var h=y.sibling,j=y.return;if(id(y),y===d){T=null;break}if(h!==null){h.return=j,T=h;break}T=j}}}var b=s.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,T=a;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var u=e.current;for(T=u;T!==null;){a=T;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,T=m;else e:for(a=u;T!==null;){if(c=T,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Dl(9,c)}}catch(C){q(c,c.return,C)}if(c===a){T=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,T=g;break e}T=c.return}}if(U=i,_t(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Tl,e)}catch{}n=!0}return n}finally{H=r,Ie.transition=t}}return!1}function ic(e,t,r){t=wr(r,t),t=Ku(e,t,1),e=bt(e,t,1),t=ve(),e!==null&&(hn(e,1,t),Se(e,t))}function q(e,t,r){if(e.tag===3)ic(e,e,r);else for(;t!==null;){if(t.tag===3){ic(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ct===null||!Ct.has(n))){e=wr(r,e),e=Gu(t,e,1),t=bt(t,e,1),e=ve(),t!==null&&(hn(t,1,e),Se(t,e));break}}t=t.return}}function Nm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&r,ae===e&&(ce&r)===r&&(ie===4||ie===3&&(ce&130023424)===ce&&500>re()-aa?At(e,0):sa|=r),Se(e,t)}function hd(e,t){t===0&&(e.mode&1?(t=Fn,Fn<<=1,!(Fn&130023424)&&(Fn=4194304)):t=1);var r=ve();e=ct(e,t),e!==null&&(hn(e,t,r),Se(e,r))}function Sm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),hd(e,r)}function bm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(k(314))}n!==null&&n.delete(t),hd(e,r)}var gd;gd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)je=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return je=!1,fm(e,t,r);je=!!(e.flags&131072)}else je=!1,G&&t.flags&1048576&&wu(t,xl,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;rl(e,t),e=t.pendingProps;var i=gr(t,he.current);pr(t,r),i=ea(null,t,n,e,i,r);var s=ta();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(n)?(s=!0,gl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gs(t),i.updater=Ol,t.stateNode=i,i._reactInternals=t,as(t,n,e,r),t=us(null,t,n,!0,s,r)):(t.tag=0,G&&s&&Bs(t),ge(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Pm(n),e=Be(n,e),i){case 0:t=cs(null,t,n,e,r);break e;case 1:t=Go(null,t,n,e,r);break e;case 11:t=Yo(null,t,n,e,r);break e;case 14:t=Ko(null,t,n,Be(n.type,e),r);break e}throw Error(k(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Be(n,i),cs(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Be(n,i),Go(e,t,n,i,r);case 3:e:{if(qu(t),e===null)throw Error(k(387));n=t.pendingProps,s=t.memoizedState,i=s.element,Cu(e,t),jl(t,n,null,r);var a=t.memoizedState;if(n=a.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=wr(Error(k(423)),t),t=Xo(e,t,n,r,i);break e}else if(n!==i){i=wr(Error(k(424)),t),t=Xo(e,t,n,r,i);break e}else for(Ce=St(t.stateNode.containerInfo.firstChild),Pe=t,G=!0,Ve=null,r=Su(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(vr(),n===i){t=ut(e,t,r);break e}ge(e,t,n,r)}t=t.child}return t;case 5:return Pu(t),e===null&&ls(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,qi(n,i)?a=null:s!==null&&qi(n,s)&&(t.flags|=32),Zu(e,t),ge(e,t,a,r),t.child;case 6:return e===null&&ls(t),null;case 13:return ed(e,t,r);case 4:return Xs(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=xr(t,null,n,r):ge(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Be(n,i),Yo(e,t,n,i,r);case 7:return ge(e,t,t.pendingProps,r),t.child;case 8:return ge(e,t,t.pendingProps.children,r),t.child;case 12:return ge(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,W(yl,n._currentValue),n._currentValue=a,s!==null)if(Ye(s.value,a)){if(s.children===i.children&&!ke.current){t=ut(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var o=c.firstContext;o!==null;){if(o.context===n){if(s.tag===1){o=st(-1,r&-r),o.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?o.next=o:(o.next=y.next,y.next=o),d.pending=o}}s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),is(s.return,r,t),c.lanes|=r;break}o=o.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(k(341));a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),is(a,r,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ge(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,pr(t,r),i=Fe(i),n=n(i),t.flags|=1,ge(e,t,n,r),t.child;case 14:return n=t.type,i=Be(n,t.pendingProps),i=Be(n.type,i),Ko(e,t,n,i,r);case 15:return Xu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Be(n,i),rl(e,t),t.tag=1,Ne(n)?(e=!0,gl(t)):e=!1,pr(t,r),Yu(t,n,i),as(t,n,i,r),us(null,t,n,!0,e,r);case 19:return td(e,t,r);case 22:return Ju(e,t,r)}throw Error(k(156,t.tag))};function vd(e,t){return Vc(e,t)}function Cm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,r,n){return new Cm(e,t,r,n)}function da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pm(e){if(typeof e=="function")return da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ls)return 11;if(e===Ts)return 14}return 2}function Et(e,t){var r=e.alternate;return r===null?(r=Me(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function il(e,t,r,n,i,s){var a=2;if(n=e,typeof e=="function")da(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return Ut(r.children,i,s,t);case zs:a=8,i|=8;break;case Ti:return e=Me(12,r,t,i|2),e.elementType=Ti,e.lanes=s,e;case Ri:return e=Me(13,r,t,i),e.elementType=Ri,e.lanes=s,e;case _i:return e=Me(19,r,t,i),e.elementType=_i,e.lanes=s,e;case Pc:return Ul(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bc:a=10;break e;case Cc:a=9;break e;case Ls:a=11;break e;case Ts:a=14;break e;case ht:a=16,n=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Me(a,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Ut(e,t,r,n){return e=Me(7,e,n,t),e.lanes=r,e}function Ul(e,t,r,n){return e=Me(22,e,n,t),e.elementType=Pc,e.lanes=r,e.stateNode={isHidden:!1},e}function Pi(e,t,r){return e=Me(6,e,null,t),e.lanes=r,e}function Ei(e,t,r){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Em(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fa(e,t,r,n,i,s,a,c,o){return e=new Em(e,t,r,c,o),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Me(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(s),e}function zm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function xd(e){if(!e)return Lt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var r=e.type;if(Ne(r))return xu(e,r,t)}return t}function yd(e,t,r,n,i,s,a,c,o){return e=fa(r,n,!0,e,i,s,a,c,o),e.context=xd(null),r=e.current,n=ve(),i=Pt(r),s=st(n,i),s.callback=t??null,bt(r,s,i),e.current.lanes=i,hn(e,i,n),Se(e,n),e}function Bl(e,t,r,n){var i=t.current,s=ve(),a=Pt(i);return r=xd(r),t.context===null?t.context=r:t.pendingContext=r,t=st(s,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=bt(i,t,a),e!==null&&(Qe(e,i,a,s),qn(e,i,a)),a}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function pa(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function Lm(){return null}var wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}Hl.prototype.render=ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Bl(e,t,null,null)};Hl.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Bl(null,e,null,null)}),t[ot]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<vt.length&&t!==0&&t<vt[r].priority;r++);vt.splice(r,0,e),r===0&&qc(e)}};function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function Tm(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var d=zl(a);s.call(d)}}var a=yd(t,n,e,0,null,!1,!1,"",ac);return e._reactRootContainer=a,e[ot]=a.current,ln(e.nodeType===8?e.parentNode:e),Qt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var c=n;n=function(){var d=zl(o);c.call(d)}}var o=fa(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=o,e[ot]=o.current,ln(e.nodeType===8?e.parentNode:e),Qt(function(){Bl(t,o,r,n)}),o}function Wl(e,t,r,n,i){var s=r._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var c=i;i=function(){var o=zl(a);c.call(o)}}Bl(t,a,e,i)}else a=Tm(r,t,e,i,n);return zl(a)}Gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(Ms(t,r|1),Se(t,re()),!(U&6)&&(jr=re()+500,_t()))}break;case 13:Qt(function(){var n=ct(e,1);if(n!==null){var i=ve();Qe(n,e,1,i)}}),pa(e,1)}};Is=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var r=ve();Qe(t,e,134217728,r)}pa(e,134217728)}};Xc=function(e){if(e.tag===13){var t=Pt(e),r=ct(e,t);if(r!==null){var n=ve();Qe(r,e,t,n)}pa(e,t)}};Jc=function(){return H};Zc=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};Hi=function(e,t,r){switch(t){case"input":if(Fi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Il(n);if(!i)throw Error(k(90));zc(n),Fi(n,i)}}}break;case"textarea":Tc(e,r);break;case"select":t=r.value,t!=null&&cr(e,!!r.multiple,t,!1)}};Oc=oa;Dc=Qt;var Rm={usingClientEntryPoint:!1,Events:[vn,rr,Il,Fc,$c,oa]},Fr={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bc(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yn.isDisabled&&Yn.supportsFiber)try{Tl=Yn.inject(_m),Je=Yn}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm;ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ha(t))throw Error(k(200));return zm(e,t,null,r)};ze.createRoot=function(e,t){if(!ha(e))throw Error(k(299));var r=!1,n="",i=wd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fa(e,1,!1,null,null,r,!1,n,i),e[ot]=t.current,ln(e.nodeType===8?e.parentNode:e),new ma(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Bc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Qt(e)};ze.hydrate=function(e,t,r){if(!Vl(t))throw Error(k(200));return Wl(null,e,t,!0,r)};ze.hydrateRoot=function(e,t,r){if(!ha(e))throw Error(k(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",a=wd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=yd(t,null,e,1,r??null,i,!1,s,a),e[ot]=t.current,ln(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Hl(t)};ze.render=function(e,t,r){if(!Vl(t))throw Error(k(200));return Wl(null,e,t,!1,r)};ze.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(k(40));return e._reactRootContainer?(Qt(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};ze.unstable_batchedUpdates=oa;ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Vl(r))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Wl(e,t,r,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),jc.exports=ze;var Mm=jc.exports,oc=Mm;zi.createRoot=oc.createRoot,zi.hydrateRoot=oc.hydrateRoot;function Im({activeTab:e,setActiveTab:t,subscription:r}){const n=()=>{switch(r){case"basic":return l.jsx("span",{className:"badge badge-primary",children:"Basic Plan"});case"premium":return l.jsx("span",{className:"badge badge-warning",children:"Premium Member"});case"savings":return l.jsx("span",{className:"badge badge-info",children:"Savings-Share"});default:return l.jsx("span",{className:"badge badge-danger",children:"Unsubscribed"})}},i=[{id:"landing",label:"Home & Concept",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"dashboard",label:"Dashboard",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"7",height:"9"}),l.jsx("rect",{x:"14",y:"3",width:"7",height:"5"}),l.jsx("rect",{x:"14",y:"12",width:"7",height:"9"}),l.jsx("rect",{x:"3",y:"16",width:"7",height:"5"})]})},{id:"properties",label:"Rental Properties",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})},{id:"crowdsource",label:"Crowdsource Hub",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"reminders",label:"Reminders & Tasks",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})},{id:"feedback",label:"Tester Panel",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}];return l.jsxs("aside",{className:"sidebar-container",children:[l.jsxs("div",{className:"sidebar-brand",children:[l.jsx("div",{className:"brand-logo",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"url(#logo-grad)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"logo-grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#81c784"}),l.jsx("stop",{offset:"100%",stopColor:"#2e7d32"})]})}),l.jsx("path",{d:"M3 21h18M3 10l9-7 9 7v11H3V10z"}),l.jsx("path",{d:"M9 21v-8h6v8"})]})}),l.jsxs("div",{children:[l.jsx("h2",{style:{color:"var(--primary-green)"},children:"RealPal"}),l.jsx("span",{className:"brand-tagline",children:"Trusted Companion"})]})]}),l.jsxs("div",{className:"sidebar-vision",children:[l.jsx("div",{className:"vision-title",children:"VISION & MISSION"}),l.jsx("p",{className:"vision-text",children:"To build better communities across the world one at a time by providing a platform for landlords, tenants, and service providers."})]}),l.jsx("nav",{className:"sidebar-nav",children:i.map(s=>l.jsxs("button",{className:`nav-item ${e===s.id?"active":""}`,onClick:()=>t(s.id),children:[l.jsx("span",{className:"nav-icon",children:s.icon}),l.jsx("span",{className:"nav-label",children:s.label}),s.id==="reminders"&&l.jsx("span",{className:"nav-badge pulse-indicator"})]},s.id))}),l.jsx("div",{className:"sidebar-footer",children:l.jsxs("div",{className:"user-profile",children:[l.jsx("div",{className:"avatar",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),l.jsxs("div",{className:"user-info",children:[l.jsx("div",{className:"user-name",children:"Alex Miller"}),l.jsx("div",{className:"user-role",children:"Independent Landlord"}),l.jsx("div",{className:"sub-status",children:n()})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          background: rgba(46, 125, 50, 0.08);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(46, 125, 50, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-brand h2 {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--primary-green) !important;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          display: block;
          margin-top: -2px;
        }

        .sidebar-vision {
          background: rgba(46, 125, 50, 0.02);
          border: 1px solid rgba(46, 125, 50, 0.05);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 2rem;
        }

        .vision-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--primary-green);
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
          color: var(--primary-green);
          background: rgba(46, 125, 50, 0.04);
        }

        .nav-item.active {
          color: var(--primary-green);
          background: var(--color-primary-light);
          border-left: 3px solid var(--primary-green);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          opacity: 0.8;
        }

        .nav-item.active .nav-icon {
          color: var(--primary-green);
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
          background: rgba(46, 125, 50, 0.1);
          color: var(--primary-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(46, 125, 50, 0.2);
        }

        .user-info {
          flex: 1;
          min-width: 0;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
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
      `}})]})}function cc({subscription:e,setSubscription:t,setActiveTab:r}){const[n,i]=S.useState(3),[s,a]=S.useState(0),c=h=>{t(h),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{r("dashboard")},400)},o=()=>{var h;(h=document.getElementById("concept-detail-section"))==null||h.scrollIntoView({behavior:"smooth"})},d=[{title:"Repairs & Maintenance Costs",desc:"An average of $2,000 to $3,000 is spent per unit annually on maintenance. RealPal helps reduce this by 10-15% through competitive bidding and group service pools.",icon:"🔧"},{title:"Compliance & Laws",desc:"Local, state, and federal leasing regulations change constantly. RealPal tracks statutory inspections, certifications, and compliance deadlines automatically.",icon:"📜"},{title:"Tenant Turnover & Rent Loss",desc:"Finding and vetting tenants leads to vacant periods that eat into passive income. Keep tenants longer by resolving maintenance issues fast and maintaining transparent comms.",icon:"🔑"},{title:"Stress of Property Management",desc:"Balancing property emergencies with personal life leads to burnout. RealPal centralizes communications, tasks, reminders, and invoices in one secure workspace.",icon:"🧠"},{title:"Accounting & Taxes",desc:"Tracking deductible expenses, vendor invoices, rent deposits, and writing off depreciation is complex. Keep records neat and ready for tax seasons.",icon:"📊"}],y=n*2500,v=n*325;return l.jsxs("div",{className:"landing-container animate-fade-in",style:{padding:0,margin:"-2.5rem -2.5rem 0"},children:[l.jsxs("section",{className:"typewriter-hero-container",children:[l.jsxs("div",{className:"typewriter-wrapper",children:[l.jsx("h1",{className:"typewriter-bold-title",children:"REAL PAL"}),l.jsx("p",{className:"typewriter-bold-subtitle",children:"A trusted companion for Landlords, Tenants & Service Providers."})]}),l.jsxs("button",{className:"scroll-down-btn",onClick:o,"aria-label":"Scroll Down",children:[l.jsx("span",{className:"scroll-arrow",children:"▼"}),l.jsx("span",{className:"scroll-text",children:"Scroll Down for Details"})]})]}),l.jsxs("section",{id:"concept-detail-section",className:"concept-detail-section",style:{padding:"2.5rem"},children:[l.jsxs("div",{className:"hero-showcase glass-card",style:{marginTop:"1rem"},children:[l.jsxs("div",{className:"hero-text-content",children:[l.jsx("span",{className:"badge badge-primary",children:"Platform Concept"}),l.jsx("h2",{className:"hero-title",style:{fontSize:"2rem"},children:"Better communities, one rental at a time."}),l.jsxs("p",{className:"hero-p",children:["Independent landlords represent ",l.jsx("strong",{children:"10 million investors"})," managing over ",l.jsx("strong",{children:"23 million rental units"})," in the US. RealPal bridges the gap between Landlords, Tenants, and Service Providers to streamline property management and reduce the $46 billion annual maintenance burden."]}),l.jsxs("div",{className:"hero-buttons",children:[l.jsx("button",{className:"btn btn-primary",onClick:()=>c("premium"),children:"Activate Trial Demo"}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>{const h=document.getElementById("savings-calculator");h==null||h.scrollIntoView({behavior:"smooth"})},children:"Calculate ROI Savings"})]})]}),l.jsxs("div",{className:"hero-image-pane",children:[l.jsxs("div",{className:"concept-stat-box",children:[l.jsx("div",{className:"stat-num text-gradient",children:"$46B"}),l.jsx("div",{className:"stat-lbl",children:"US Annual Maintenance Spend"})]}),l.jsxs("div",{className:"concept-stat-box accent-box",children:[l.jsx("div",{className:"stat-num savings-gradient",children:"10-15%"}),l.jsx("div",{className:"stat-lbl",children:"Target Expense Savings"})]})]})]}),l.jsxs("div",{id:"savings-calculator",className:"savings-calc-section grid-2",children:[l.jsxs("div",{className:"glass-card flex-column-center",children:[l.jsx("h3",{className:"section-title",children:"Interactive savings calculator"}),l.jsx("p",{className:"section-p",children:"See how much you can expect to save in repairs, administration, and vacant turnovers using RealPal's smart crowdsourcing and preventive tracking tools."}),l.jsxs("div",{className:"calc-slider-wrapper",children:[l.jsxs("label",{className:"form-label",style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"Number of Rental Units:"}),l.jsxs("span",{className:"slider-val",children:[n," ",n===1?"Unit":"Units"]})]}),l.jsx("input",{type:"range",min:"1",max:"50",value:n,onChange:h=>i(parseInt(h.target.value)),className:"calc-slider"})]}),l.jsxs("div",{className:"savings-grid",children:[l.jsxs("div",{className:"savings-item",children:[l.jsx("span",{className:"savings-lbl",children:"Estimated Annual Spend"}),l.jsxs("span",{className:"savings-val",children:["$",y.toLocaleString()]})]}),l.jsxs("div",{className:"savings-item highlight-savings",children:[l.jsx("span",{className:"savings-lbl",children:"RealPal Saved (13%)"}),l.jsxs("span",{className:"savings-val",children:["$",v.toLocaleString()]})]})]}),l.jsx("div",{className:"savings-foot-note",children:"*Based on industry averages of $2,000–$3,000 spent per property unit on repairs, plumbing, electrical, and landscaping annually."})]}),l.jsxs("div",{className:"glass-card",children:[l.jsx("h3",{className:"section-title",children:"Major Landlord Hassles Addressed"}),l.jsx("p",{className:"section-p",children:"Click on the challenges below to see how RealPal's specific feature set helps mitigate them."}),l.jsx("div",{className:"problem-list",children:d.map((h,j)=>l.jsxs("div",{className:`problem-item ${s===j?"expanded":""}`,onClick:()=>a(j),children:[l.jsxs("div",{className:"problem-header",children:[l.jsx("span",{className:"prob-icon",children:h.icon}),l.jsx("span",{className:"prob-title",children:h.title}),l.jsx("span",{className:"prob-arrow",children:s===j?"▲":"▼"})]}),s===j&&l.jsx("div",{className:"problem-body animate-slide-up",children:l.jsx("p",{children:h.desc})})]},j))})]})]}),l.jsxs("div",{className:"business-models-section",children:[l.jsx("h3",{className:"section-title",style:{textAlign:"center",marginBottom:"0.5rem"},children:"Flexible Business Models"}),l.jsx("p",{className:"section-p",style:{textAlign:"center",marginBottom:"2.5rem",maxWidth:"600px",margin:"0 auto 2.5rem"},children:"We evaluate multiple revenue avenues to align incentive with landlord savings and ease of adoption. Choose a mock model below to experience the platform."}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:`pricing-card glass-card ${e==="basic"?"active-plan":""}`,children:[e==="basic"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Basic Flat Fee"}),l.jsxs("div",{className:"plan-price",children:["$19",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"For small landlords starting their automation journey."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Manage up to 5 properties"}),l.jsx("li",{children:"✓ Core compliance reminders"}),l.jsx("li",{children:"✓ Basic digital lease storage"}),l.jsx("li",{children:"✓ Crowdsource service listings"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="basic"?"btn-success":""}`,onClick:()=>c("basic"),children:e==="basic"?"Selected Plan":"Select Flat Subscription"})]}),l.jsxs("div",{className:`pricing-card glass-card premium-card ${e==="premium"?"active-plan":""}`,children:[e==="premium"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-badge",children:"Most Popular"}),l.jsx("div",{className:"plan-name",children:"Premium Hub"}),l.jsxs("div",{className:"plan-price",children:["$39",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"Full dashboard and integrated service provider bidding network."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Interactive maintenance bidding"}),l.jsx("li",{children:"✓ Auto-reminders & calendar sync"}),l.jsx("li",{children:"✓ Group saving zip pool access"}),l.jsx("li",{children:"✓ Live tenant ticket portal"})]}),l.jsx("button",{className:"btn btn-primary",onClick:()=>c("premium"),children:e==="premium"?"Active Member":"Upgrade to Premium"})]}),l.jsxs("div",{className:`pricing-card glass-card ${e==="savings"?"active-plan":""}`,children:[e==="savings"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Share of Savings"}),l.jsxs("div",{className:"plan-price",children:["10%",l.jsx("span",{children:"of savings"})]}),l.jsx("div",{className:"plan-desc",children:"Zero subscription fees. Pay only a percentage of verified repair savings."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Full provider bidding simulator"}),l.jsx("li",{children:"✓ RealPal bulk service pricing"}),l.jsx("li",{children:"✓ Pay only when we save you money"}),l.jsx("li",{children:"✓ Quarterly savings report"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="savings"?"btn-success":""}`,onClick:()=>c("savings"),children:e==="savings"?"Selected Plan":"Select Pay-on-Savings"})]})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .scroll-down-btn {
          position: absolute;
          bottom: 2rem;
          background: none;
          border: none;
          color: var(--text-primary);
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
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
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
          background: rgba(46, 125, 50, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .concept-stat-box.accent-box {
          border-color: var(--primary-green);
          background: rgba(46, 125, 50, 0.04);
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
          background: #f7fafc;
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .slider-val {
          color: var(--primary-green);
          font-weight: 700;
          font-size: 1.05rem;
        }

        .calc-slider {
          width: 100%;
          -webkit-appearance: none;
          height: 6px;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.08);
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
          background: #f7fafc;
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
          color: var(--text-primary);
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
          background: #f7fafc;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .problem-item:hover {
          background: rgba(0, 0, 0, 0.02);
        }

        .problem-item.expanded {
          border-color: var(--primary-green);
          background: rgba(46, 125, 50, 0.02);
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
          color: var(--text-primary);
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
          border-left: 2px solid var(--primary-green);
        }

        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 2.25rem 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
        }

        .pricing-card.premium-card {
          background: linear-gradient(180deg, rgba(46, 125, 50, 0.04) 0%, var(--bg-secondary) 100%);
          border-color: var(--primary-green);
          box-shadow: 0 10px 30px -10px rgba(46, 125, 50, 0.1);
        }

        .active-plan {
          border-color: var(--color-warning);
          box-shadow: 0 0 15px rgba(236, 201, 75, 0.15);
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
          background-color: var(--primary-green);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .plan-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .plan-price {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-primary);
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
      `}})]})}function Fm({properties:e,reminders:t,jobs:r,groupDeals:n,setActiveTab:i}){const s=e.length,a=e.filter(g=>g.status==="Occupied").length,c=s>0?Math.round(a/s*100):0,o=e.reduce((g,C)=>g+(C.status==="Occupied"?C.rent:0),0),d=r.filter(g=>g.status==="active"&&g.savings).reduce((g,C)=>g+C.savings,0),y=n.filter(g=>g.joined&&g.unlocked).reduce((g,C)=>g+C.bulkPrice*(C.discountPercent/100),0),v=d+y,h=t.filter(g=>!g.completed),j=h.filter(g=>g.priority==="High"),b=r.filter(g=>g.status==="bidding"),w={months:["Jan","Feb","Mar","Apr","May","Jun"],rent:[3200,3200,4800,4800,5400,o||5400],expense:[850,400,1200,300,1600,b.length*150+200]},M=6e3,p=g=>g.map((C,L)=>{const E=30+L*90,x=170-C/M*150;return`${E},${x}`}).join(" "),u=p(w.rent),m=p(w.expense);return l.jsxs("div",{className:"dashboard-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Dashboard Overview"}),l.jsx("p",{className:"view-description",children:"Real-time financials, property occupancies, and operational actions."})]})}),l.jsxs("div",{className:"grid-4",style:{marginBottom:"2rem"},children:[l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-primary-light)",color:"var(--color-primary)"},children:"🏠"}),l.jsxs("div",{className:"kpi-info",children:[l.jsx("span",{className:"kpi-val",children:s}),l.jsx("span",{className:"kpi-lbl",children:"Properties"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-info-light)",color:"var(--color-info)"},children:"👥"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[c,"%"]}),l.jsx("span",{className:"kpi-lbl",children:"Occupancy Rate"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("crowdsource"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-warning-light)",color:"var(--color-warning)"},children:"🪙"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",style:{color:"var(--color-warning)"},children:["$",v.toLocaleString()]}),l.jsx("span",{className:"kpi-lbl",children:"Saved on Repairs"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("reminders"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"rgba(46, 125, 50, 0.08)",color:"var(--primary-green)"},children:"🔔"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[h.length,j.length>0&&l.jsxs("span",{className:"kpi-sub-val",style:{color:"var(--color-primary)"},children:["(",j.length," High)"]})]}),l.jsx("span",{className:"kpi-lbl",children:"Active Reminders"})]})]})]}),l.jsxs("div",{className:"chart-alerts-layout",children:[l.jsxs("div",{className:"glass-card chart-card",children:[l.jsx("h3",{className:"section-title",children:"Rent Roll vs. Repair Costs"}),l.jsx("p",{className:"section-p",children:"Consolidated cashflow comparison across the current portfolio (Last 6 Months)."}),l.jsx("div",{className:"svg-chart-container",children:l.jsxs("svg",{viewBox:"0 0 500 200",className:"dashboard-svg-chart",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"rent-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.15"}),l.jsx("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0.0"})]}),l.jsxs("linearGradient",{id:"exp-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"var(--color-primary)",stopOpacity:"0.2"}),l.jsx("stop",{offset:"100%",stopColor:"var(--color-primary)",stopOpacity:"0.0"})]})]}),l.jsx("line",{x1:"30",y1:"20",x2:"480",y2:"20",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"70",x2:"480",y2:"70",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"120",x2:"480",y2:"120",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"170",x2:"480",y2:"170",stroke:"rgba(255,255,255,0.08)",strokeWidth:"1"}),l.jsx("text",{x:"5",y:"25",fill:"var(--text-muted)",fontSize:"8",children:"$6.0K"}),l.jsx("text",{x:"5",y:"75",fill:"var(--text-muted)",fontSize:"8",children:"$4.0K"}),l.jsx("text",{x:"5",y:"125",fill:"var(--text-muted)",fontSize:"8",children:"$2.0K"}),l.jsx("text",{x:"5",y:"175",fill:"var(--text-muted)",fontSize:"8",children:"$0"}),w.months.map((g,C)=>l.jsx("text",{x:30+C*90,y:"190",textAnchor:"middle",fill:"var(--text-muted)",fontSize:"9",fontWeight:"600",children:g},g)),l.jsx("polygon",{points:`30,170 ${u} 480,170`,fill:"url(#rent-grad)"}),l.jsx("polyline",{fill:"none",stroke:"#ffffff",strokeWidth:"3.5",strokeLinecap:"round",points:u}),l.jsx("polygon",{points:`30,170 ${m} 480,170`,fill:"url(#exp-grad)"}),l.jsx("polyline",{fill:"none",stroke:"var(--color-primary)",strokeWidth:"3.5",strokeLinecap:"round",points:m}),l.jsx("circle",{cx:30+5*90,cy:170-w.rent[5]/M*150,r:"5",fill:"#ffffff",stroke:"#000",strokeWidth:"2"}),l.jsx("circle",{cx:30+5*90,cy:170-w.expense[5]/M*150,r:"5",fill:"var(--color-primary)",stroke:"#000",strokeWidth:"2"})]})}),l.jsxs("div",{className:"chart-legend",children:[l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"#ffffff"}}),l.jsxs("span",{children:["Rent Roll ($",o.toLocaleString(),"/mo)"]})]}),l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"var(--color-primary)"}}),l.jsxs("span",{children:["Maintenance Expenses ($",w.expense[5],"/mo)"]})]})]})]}),l.jsxs("div",{className:"glass-card alerts-card",children:[l.jsx("h3",{className:"section-title",children:"Operational Hub"}),l.jsx("p",{className:"section-p",children:"Actions requiring immediate attention."}),l.jsxs("div",{className:"alerts-stack",style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:[b.map(g=>l.jsxs("div",{className:"alert-item alert-job glass-card",onClick:()=>i("crowdsource"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-warning",children:"Bid Response Pending"}),l.jsx("span",{className:"pulse-indicator"})]}),l.jsx("h4",{className:"alert-item-title",children:g.title}),l.jsx("p",{className:"alert-item-desc",children:"Quotations are formulating on this maintenance ticket. Select a vendor."})]},g.id)),j.slice(0,2).map(g=>l.jsxs("div",{className:"alert-item alert-task glass-card",onClick:()=>i("reminders"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-danger",children:"High Priority Task"}),l.jsxs("span",{className:"alert-date",children:["📅 ",new Date(g.date).toLocaleDateString()]})]}),l.jsx("h4",{className:"alert-item-title",children:g.title}),l.jsxs("p",{className:"alert-item-desc",children:["Associated Property: ",g.propertyName]})]},g.id)),b.length===0&&j.length===0&&l.jsxs("div",{className:"all-clear-state",children:[l.jsx("div",{className:"all-clear-icon",children:"✓"}),l.jsx("h4",{children:"All systems operating normally"}),l.jsx("p",{children:"No critical leasing deadlines or bidding alerts require processing today."})]})]})]})]}),l.jsxs("div",{className:"quick-actions-bar glass-card",style:{marginTop:"2rem"},children:[l.jsx("h4",{style:{marginBottom:"0.75rem"},children:"Quick Landlord Utilities"}),l.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("properties"),children:"+ Register New Property"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("crowdsource"),children:"🔧 Request Contractor Bid"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("reminders"),children:"📅 Schedule Compliance Check"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("landing"),children:"📊 Check Pricing ROI"})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          color: var(--text-primary);
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
          background: #f7fafc;
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
          background: #f7fafc;
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
          color: var(--text-primary);
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
      `}})]})}function $m({properties:e,onAddProperty:t,onUpdateProperty:r,onDeleteProperty:n}){const[i,s]=S.useState("portfolio"),[a,c]=S.useState([]),[o,d]=S.useState(null),[y,v]=S.useState(!1),[h,j]=S.useState(null),[b,w]=S.useState([]),[M,p]=S.useState(""),[u,m]=S.useState("Any"),[g,C]=S.useState("Any"),[L,E]=S.useState(!1),[x,O]=S.useState(null),[I,P]=S.useState(""),[N,_]=S.useState("Single Family"),[D,B]=S.useState(""),[de,ft]=S.useState(""),[z,F]=S.useState(""),[$,K]=S.useState(""),[ee,Mt]=S.useState(""),[qe,br]=S.useState("Occupied"),[Oe,et]=S.useState(32e4),[Ql,yn]=S.useState(25),[Yl,wn]=S.useState(7),[kd,ga]=S.useState(30),[Nd,va]=S.useState(6e3),[Sd,xa]=S.useState(2e4),[jn,kn]=S.useState(9e3),[bd,ya]=S.useState(3),[Nn,Sn]=S.useState(1200),[Cd,wa]=S.useState(3),[Pd,ja]=S.useState(0),[Ed,ka]=S.useState(3),[bn,Cn]=S.useState(2e3),[zd,Na]=S.useState(3),[Ld,Sa]=S.useState(500),[Td,ba]=S.useState(3),[Rd,Ca]=S.useState(5),[_d,Pa]=S.useState(0),[Md,Ea]=S.useState(3),[Id,za]=S.useState(5),[Fd,La]=S.useState(5),[$d,Od]=S.useState(8.5),[Dd,Ad]=S.useState(9),[Ud,Bd]=S.useState(8.8),[Hd,Vd]=S.useState(32),[Wd,Qd]=S.useState("Low"),[Yd,Kd]=S.useState("Sandy clay, stable"),[Gd,Xd]=S.useState("Water Tower Place"),[Jd,Zd]=S.useState("Lincoln Park"),[Ta,Ra]=S.useState(41.9082),[_a,Ma]=S.useState(-87.6322),[Ia,Fa]=S.useState("Chicago"),[$a,Oa]=S.useState(1),[Da,Aa]=S.useState(""),[Ua,Ba]=S.useState("Passed"),Pn=()=>{P(""),_("Single Family"),B(""),ft(""),F(""),K(""),Mt(""),br("Occupied"),et(32e4),yn(25),wn(7),ga(30),va(6e3),xa(2e4),kn(9e3),ya(3),Sn(1200),wa(3),ja(0),ka(3),Cn(2e3),Na(3),Sa(500),ba(3),Ca(5),Pa(0),Ea(3),za(5),La(5),Od(8.5),Ad(9),Bd(8.8),Vd(32),Qd("Low"),Kd("Sandy clay, stable"),Xd("Water Tower Place"),Zd("Lincoln Park"),Ra(41.9082),Ma(-87.6322),Fa("Chicago"),Oa(1),Aa(""),Ba("Passed"),O(null)},Ha=()=>({address:I,type:N,rent:parseFloat(D)||0,tenantName:de||"Vacant",tenantEmail:z||"-",leaseStart:$||"",leaseEnd:ee||"",status:de?qe:"Vacant",purchasePrice:parseFloat(Oe)||0,downPaymentPercent:parseFloat(Ql)||0,interestRate:parseFloat(Yl)||0,loanTermYears:parseInt(kd)||0,otherPurchaseCosts:parseFloat(Nd)||0,repairCost:parseFloat(Sd)||0,annualPropertyTax:parseFloat(jn)||0,taxIncreasePercent:parseFloat(bd)||0,annualInsurance:parseFloat(Nn)||0,insuranceIncreasePercent:parseFloat(Cd)||0,monthlyHOA:parseFloat(Pd)||0,hoaIncreasePercent:parseFloat(Ed)||0,annualMaintenance:parseFloat(bn)||0,maintenanceIncreasePercent:parseFloat(zd)||0,otherExpenses:parseFloat(Ld)||0,otherExpensesIncreasePercent:parseFloat(Td)||0,vacancyRatePercent:parseFloat(Rd)||0,managementFeePercent:parseFloat(_d)||0,appreciationRatePercent:parseFloat(Md)||0,holdingPeriodYears:parseInt(Id)||0,sellingCostPercent:parseFloat(Fd)||0,schoolElementary:parseFloat($d)||0,schoolMiddle:parseFloat(Dd)||0,schoolHigh:parseFloat(Ud)||0,airQualityIndex:parseInt(Hd)||0,fireRisk:Wd||"Low",soilType:Yd||"Unknown",mallsNearby:Gd||"None",forestPreserves:Jd||"None",latitude:parseFloat(Ta)||0,longitude:parseFloat(_a)||0,market:Ia||"Chicago",units:parseInt($a)||1,valueAddPotential:Da||"",dealStatus:Ua||"Passed"}),qd=async f=>{f.preventDefault(),!(!I||!D)&&(x?await r(x.id,Ha()):await t(Ha()),E(!1),Pn())},Cr=f=>{const R=f.purchasePrice||32e4,V=R*((f.downPaymentPercent??25)/100),Te=R-V,De=(f.interestRate??7)/100/12,Ae=(f.loanTermYears??30)*12;let En=0;De>0&&Ae>0?En=Te*(De*Math.pow(1+De,Ae))/(Math.pow(1+De,Ae)-1):Ae>0&&(En=Te/Ae);const Kl=V+(f.otherPurchaseCosts??6e3)+(f.repairCost??2e4),Wa=f.rent||0,Gl=Wa*12,Xl=Gl*((f.vacancyRatePercent??5)/100),Qa=(Gl-Xl)*((f.managementFeePercent??0)/100),Ya=(f.annualPropertyTax??9e3)+(f.annualInsurance??1200)+(f.monthlyHOA??0)*12+(f.annualMaintenance??2e3)+(f.otherExpenses??500)+Xl+Qa,Jl=Math.max(0,Gl-Ya),Ka=En*12,Ga=Jl-Ka,ef=R>0?Jl/R*100:0,tf=Kl>0?Ga/Kl*100:0,rf=f.holdingPeriodYears??5,Xa=[];let zn=R,Gt=Wa*12,Zl=f.annualPropertyTax??9e3,ql=f.annualInsurance??1200,ei=(f.monthlyHOA??0)*12,ti=f.annualMaintenance??2e3,ri=f.otherExpenses??500;for(let Pr=1;Pr<=rf;Pr++){zn=zn*(1+(f.appreciationRatePercent??3)/100),Pr>1&&(Gt=Gt*(1+3/100),Zl=Zl*(1+(f.taxIncreasePercent??3)/100),ql=ql*(1+(f.insuranceIncreasePercent??3)/100),ei=ei*(1+(f.hoaIncreasePercent??3)/100),ti=ti*(1+(f.maintenanceIncreasePercent??3)/100),ri=ri*(1+(f.otherExpensesIncreasePercent??3)/100));const Ja=Gt*((f.vacancyRatePercent??5)/100),nf=(Gt-Ja)*((f.managementFeePercent??0)/100),Za=Zl+ql+ei+ti+ri+Ja+nf,lf=Math.max(0,Gt-Za)-Ka;let Er=0;const Ln=Pr*12;De>0&&Ae>0&&Ln<Ae?Er=Te*(Math.pow(1+De,Ae)-Math.pow(1+De,Ln))/(Math.pow(1+De,Ae)-1):Ln>=Ae?Er=0:Er=Te-Te*(Ln/Ae);const sf=Math.max(0,zn-Er);Xa.push({year:Pr,value:Math.round(zn),income:Math.round(Gt),expenses:Math.round(Za),cashFlow:Math.round(lf),equity:Math.round(sf),loanBalance:Math.round(Er)})}return{downPayment:V,loanAmount:Te,monthlyMortgage:En,initialCash:Kl,vacancyLoss:Xl,managementCost:Qa,annualExpenses:Ya,noi:Jl,cashFlow:Ga,capRate:ef,cashOnCash:tf,projections:Xa}},tt=e.filter(f=>!(M&&!f.address.toLowerCase().includes(M.toLowerCase())&&!(f.market&&f.market.toLowerCase().includes(M.toLowerCase()))||u!=="Any"&&f.rent>parseInt(u)));S.useEffect(()=>{tt.length>0&&!o&&d(tt[0])},[tt,o]),S.useEffect(()=>{if(window.L&&!h&&i==="portfolio"){const f=window.L.map("map-viewport").setView([41.8781,-87.6298],11);window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(f),j(f)}},[i,h]),S.useEffect(()=>{if(h&&window.L){b.forEach(R=>R.remove());const f=[];tt.forEach(R=>{if(R.latitude&&R.longitude){const V=R.purchasePrice?`$${Math.round(R.purchasePrice/1e3)}K`:`$${Math.round(R.rent/100)/10}K`,Te=window.L.divIcon({className:"custom-map-pin-badge",html:`<div class="map-pin-inner">${V}</div>`,iconSize:[52,26]}),De=window.L.marker([R.latitude,R.longitude],{icon:Te}).addTo(h).bindPopup(`<strong>${R.address}</strong><br/>Rent: $${R.rent.toLocaleString()}/mo`);De.on("click",()=>{d(R),Va(R),v(!0)}),f.push(De)}}),w(f)}},[h,tt]),S.useEffect(()=>{h&&o&&o.latitude&&o.longitude&&h.setView([o.latitude,o.longitude],13)},[o,h]);const Va=f=>{et(f.purchasePrice??32e4),yn(f.downPaymentPercent??25),wn(f.interestRate??7),ga(f.loanTermYears??30),va(f.otherPurchaseCosts??6e3),xa(f.repairCost??2e4),kn(f.annualPropertyTax??9e3),ya(f.taxIncreasePercent??3),Sn(f.annualInsurance??1200),wa(f.insuranceIncreasePercent??3),ja(f.monthlyHOA??0),ka(f.hoaIncreasePercent??3),Cn(f.annualMaintenance??2e3),Na(f.maintenanceIncreasePercent??3),Sa(f.otherExpenses??500),ba(f.otherExpensesIncreasePercent??3),Ca(f.vacancyRatePercent??5),Pa(f.managementFeePercent??0),Ea(f.appreciationRatePercent??3),za(f.holdingPeriodYears??5),La(f.sellingCostPercent??5)},pt=o?Cr(o):null;return l.jsxs("div",{className:"realpal-dashboard-container animate-fade-in",children:[l.jsxs("aside",{className:"left-icon-sidebar no-print",children:[l.jsx("div",{className:"sidebar-logo",children:"RP"}),l.jsxs("div",{className:"sidebar-icons-list",children:[l.jsxs("button",{className:`sidebar-icon-btn ${i==="portfolio"?"active":""}`,onClick:()=>{s("portfolio"),v(!1)},title:"Search Maps & Listings",children:["🔍",l.jsx("span",{className:"lbl",children:"Search"})]}),l.jsxs("button",{className:`sidebar-icon-btn ${i==="spreadsheet"?"active":""}`,onClick:()=>{s("spreadsheet"),v(!1)},title:"Spreadsheet Underwriting Sheet",children:["📄",l.jsx("span",{className:"lbl",children:"Sheet"})]}),l.jsxs("button",{className:`sidebar-icon-btn ${i==="compare"?"active":""}`,onClick:()=>{s("compare"),v(!1)},title:"Comparison Matrix",children:["⚖️",l.jsx("span",{className:"lbl",children:"Compare"})]}),l.jsxs("button",{className:"sidebar-icon-btn",onClick:()=>{Pn(),E(!0)},title:"Post Rental Listing",children:["⚙️",l.jsx("span",{className:"lbl",children:"List"})]})]})]}),l.jsxs("div",{className:"main-viewport-content",children:[l.jsxs("header",{className:"top-search-filter-bar no-print",children:[l.jsxs("div",{className:"search-bar-input-box",children:[l.jsx("input",{type:"text",placeholder:"Chicago, IL",value:M,onChange:f=>p(f.target.value),className:"top-search-address-field"}),M&&l.jsx("button",{className:"clear-search-btn",onClick:()=>p(""),children:"×"}),l.jsx("button",{className:"search-trigger-btn",children:"🔍"})]}),l.jsxs("div",{className:"top-dropdown-filters",children:[l.jsxs("select",{value:u,onChange:f=>m(f.target.value),className:"top-dropdown-select",children:[l.jsx("option",{value:"Any",children:"Any Price"}),l.jsx("option",{value:"1500",children:"Max $1,500/mo"}),l.jsx("option",{value:"2500",children:"Max $2,500/mo"}),l.jsx("option",{value:"3500",children:"Max $3,500/mo"}),l.jsx("option",{value:"5000",children:"Max $5,000/mo"})]}),l.jsxs("select",{value:g,onChange:f=>C(f.target.value),className:"top-dropdown-select",children:[l.jsx("option",{value:"Any",children:"Home Type"}),l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"})]}),l.jsx("button",{className:"btn-filter-more",children:"Filters ⚙️"})]}),l.jsx("button",{className:"btn-save-search-green",children:"Save Search"})]}),i==="portfolio"&&l.jsxs("div",{className:"dashboard-split-screen",children:[l.jsx("div",{className:"split-left-map-viewport no-print",children:l.jsx("div",{id:"map-viewport"})}),l.jsx("div",{className:"split-right-listings-grid-pane",children:y?l.jsxs("div",{className:"sliding-detail-drawer print-sheet",children:[l.jsxs("div",{className:"drawer-nav-header no-print",children:[l.jsx("button",{className:"btn-close-drawer",onClick:()=>v(!1),children:"← Back to listings"}),l.jsx("button",{className:"btn-print-pdf-green",onClick:()=>window.print(),children:"🖨️ Export PDF Property Sheet"})]}),l.jsxs("div",{className:"print-header print-only",children:[l.jsx("h2",{children:"RealPal Property Underwriting Log"}),l.jsx("h3",{children:o.address}),l.jsxs("p",{children:["Market: ",o.market," | Units: ",o.units," | Status: ",o.dealStatus]}),l.jsxs("p",{children:["Generated Date: ",new Date().toLocaleDateString()]})]}),l.jsxs("div",{className:"drawer-body-scrollable",children:[l.jsxs("div",{className:"drawer-hero-block",children:[l.jsx("span",{className:"badge-guarantee",children:"🛡️ RealPal Certified Sheet"}),l.jsx("h2",{children:o.address}),l.jsxs("p",{children:[o.units," Units • ",o.market]})]}),l.jsxs("div",{className:"yields-grid-row",children:[l.jsxs("div",{className:"yield-mini-card",children:[l.jsx("span",{className:"lbl",children:"Rent/mo"}),l.jsxs("span",{className:"val",children:["$",o.rent.toLocaleString()]})]}),l.jsxs("div",{className:"yield-mini-card",children:[l.jsx("span",{className:"lbl",children:"Cap Rate"}),l.jsxs("span",{className:"val text-green",children:[pt.capRate.toFixed(2),"%"]})]}),l.jsxs("div",{className:"yield-mini-card",children:[l.jsx("span",{className:"lbl",children:"Cash-on-Cash"}),l.jsxs("span",{className:`val ${pt.cashOnCash>=0?"text-green":"text-red"}`,children:[pt.cashOnCash.toFixed(2),"%"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsxs("div",{className:"underwriting-notes-panel",children:[l.jsx("h4",{children:"💡 Underwriting & Value-Add Details"}),l.jsx("p",{children:o.valueAddPotential||"No value-add potential registered for this listing."}),l.jsxs("div",{className:"status-badge-lbl",children:["Status: ",l.jsx("strong",{children:o.dealStatus})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"📊 ROI Parameters & Variable Calculator"}),l.jsxs("div",{className:"inline-calculator-block",children:[l.jsxs("div",{className:"inputs-strip no-print",children:[l.jsxs("div",{className:"form-grid-3",children:[l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:Oe,onChange:f=>{et(parseFloat(f.target.value)||0),r(o.id,{...o,purchasePrice:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:Ql,onChange:f=>{yn(parseFloat(f.target.value)||0),r(o.id,{...o,downPaymentPercent:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:Yl,onChange:f=>{wn(parseFloat(f.target.value)||0),r(o.id,{...o,interestRate:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Property Tax ($/yr)"}),l.jsx("input",{type:"number",value:jn,onChange:f=>{kn(parseFloat(f.target.value)||0),r(o.id,{...o,annualPropertyTax:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"HOI / Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Nn,onChange:f=>{Sn(parseFloat(f.target.value)||0),r(o.id,{...o,annualInsurance:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Maintenance ($/yr)"}),l.jsx("input",{type:"number",value:bn,onChange:f=>{Cn(parseFloat(f.target.value)||0),r(o.id,{...o,annualMaintenance:parseFloat(f.target.value)||0})}})]})]}),l.jsx("p",{className:"auto-save-warning",children:"⚡ Changes save to listing immediately"})]}),l.jsx("div",{className:"outputs-table-box",children:l.jsx("table",{className:"compact-roi-yield-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Initial Capital Invested"}),l.jsxs("td",{className:"text-right font-bold",children:["$",Math.round(pt.initialCash).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Monthly Mortgage (P&I)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round(pt.monthlyMortgage).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Taxes & HOI (Monthly)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round((jn+Nn)/12).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Maintenance & Vacancy (Monthly)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round((bn+pt.vacancyLoss)/12).toLocaleString()]})]}),l.jsxs("tr",{className:"border-t font-bold",children:[l.jsx("td",{children:"Net Cash Flow"}),l.jsxs("td",{className:"text-right text-green",children:["$",Math.round(pt.cashFlow).toLocaleString(),"/yr"]})]})]})})})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"📈 Growth Log & Projections"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"projections-log-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Year"}),l.jsx("th",{children:"Property Value"}),l.jsx("th",{children:"Rental Income"}),l.jsx("th",{children:"Expenses"}),l.jsx("th",{children:"Cash Flow"}),l.jsx("th",{children:"Equity"})]})}),l.jsx("tbody",{children:pt.projections.map(f=>l.jsxs("tr",{children:[l.jsxs("td",{children:["Year ",f.year]}),l.jsxs("td",{children:["$",f.value.toLocaleString()]}),l.jsxs("td",{children:["$",f.income.toLocaleString()]}),l.jsxs("td",{children:["$",f.expenses.toLocaleString()]}),l.jsxs("td",{className:f.cashFlow>=0?"text-green":"text-red",children:["$",f.cashFlow.toLocaleString()]}),l.jsxs("td",{className:"text-green font-bold",children:["$",f.equity.toLocaleString()]})]},f.year))})]})}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"🎓 GreatSchools™ Nearby Ratings"}),l.jsxs("div",{className:"schools-bars-group",children:[l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Elementary School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolElementary??8.5)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolElementary??8.5).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Middle School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolMiddle??9)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolMiddle??9).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"High School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolHigh??8.8)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolHigh??8.8).toFixed(1),"/10"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"🌱 Environment & Safety Indicators"}),l.jsx("table",{className:"env-summary-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Air Quality Index (AQI)"}),l.jsx("td",{children:l.jsxs("strong",{children:[o.airQualityIndex??32," AQI (Good)"]})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Wildfire Risk"}),l.jsx("td",{className:"text-orange font-bold",children:o.fireRisk??"Low"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Soil Framework"}),l.jsx("td",{children:o.soilType??"Sandy clay, stable"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Forest Preserves Nearby"}),l.jsx("td",{children:o.forestPreserves??"None"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Shopping Malls Nearby"}),l.jsx("td",{children:o.mallsNearby??"None"})]})]})}),l.jsx("div",{className:"sheet-actions no-print",style:{marginTop:"1.5rem",display:"flex",justifyContent:"flex-end"},children:l.jsx("button",{className:"btn-print-pdf-green",onClick:()=>window.print(),children:"🖨️ Export PDF Property Sheet"})})]})]}):l.jsxs("div",{className:"listings-grid-scroller no-print",children:[l.jsxs("div",{className:"listings-scroller-header",children:[l.jsx("h3",{children:"Chicago, IL Real Estate & Homes For Rent"}),l.jsxs("span",{children:[tt.length," results • Sort: ",l.jsx("strong",{children:"Homes for You"})]})]}),tt.length===0?l.jsxs("div",{className:"empty-grid-state",children:[l.jsx("span",{className:"large-emoji-display",children:"🏠"}),l.jsx("h4",{children:"No listings match your search"}),l.jsx("p",{children:"Try clearing your queries or check different price parameters."})]}):l.jsx("div",{className:"listings-two-col-grid",children:tt.map(f=>{const R=Cr(f);return l.jsxs("div",{className:"listing-grid-card",onClick:()=>{d(f),Va(f),v(!0)},children:[l.jsxs("div",{className:"card-media-gallery",children:[l.jsx("span",{className:"card-top-left-badge",children:"Spacious layout"}),l.jsx("span",{className:"card-favorite-heart",children:"❤️"}),l.jsxs("div",{className:"card-dots-carousel",children:[l.jsx("span",{className:"dot active"}),l.jsx("span",{className:"dot"}),l.jsx("span",{className:"dot"}),l.jsx("span",{className:"dot"})]})]}),l.jsxs("div",{className:"card-description-box",children:[l.jsx("div",{className:"price-line",children:l.jsxs("h3",{children:["$",f.rent.toLocaleString(),"/mo"]})}),l.jsxs("div",{className:"details-line",children:[l.jsxs("strong",{children:[f.units," Units"]})," • ",l.jsx("strong",{children:f.type})," • ",l.jsx("strong",{children:"1,450 sqft"})," • Active"]}),l.jsx("div",{className:"address-line",children:f.address}),l.jsxs("div",{className:"agency-line",children:["RealPal Underwritten Listing • ",f.dealStatus]}),l.jsxs("div",{className:"underwriting-badge-row",children:[l.jsxs("span",{className:"badge cap",children:["Cap Rate: ",R.capRate.toFixed(1),"%"]}),l.jsxs("span",{className:"badge coc",children:["CoC: ",R.cashOnCash.toFixed(1),"%"]})]})]})]},f.id)})})]})})]}),i==="spreadsheet"&&l.jsx("div",{className:"spreadsheet-view-container no-print",children:l.jsxs("div",{className:"spreadsheet-card-container",children:[l.jsx("h2",{className:"spreadsheet-title",children:"📋 Real Estate Investment Underwriting log"}),l.jsx("p",{className:"spreadsheet-subtitle",children:"Chicago Area Portfolios Underwriting Log"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"spreadsheet-underwriting-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Address"}),l.jsx("th",{children:"Market"}),l.jsx("th",{className:"text-center",children:"Units"}),l.jsx("th",{className:"text-right",children:"Ask Price ($)"}),l.jsx("th",{className:"text-right",children:"Gross Income ($/yr)"}),l.jsx("th",{className:"text-right",children:"Total Expenses ($/yr)"}),l.jsx("th",{className:"text-right",children:"NOI ($/yr)"}),l.jsx("th",{className:"text-center",children:"Adj Cap Rate"}),l.jsx("th",{className:"text-right",children:"Cash Flow ($/yr)"}),l.jsx("th",{className:"text-center",children:"CoC Return"}),l.jsx("th",{children:"Value-Add Potential"}),l.jsx("th",{children:"Status"})]})}),l.jsx("tbody",{children:tt.map(f=>{const R=Cr(f),V=f.dealStatus&&f.dealStatus.toLowerCase().includes("passed");return l.jsxs("tr",{children:[l.jsx("td",{className:"font-semibold",children:f.address}),l.jsx("td",{children:f.market||"Chicago"}),l.jsx("td",{className:"text-center text-blue font-semibold",children:f.units||1}),l.jsxs("td",{className:"text-right text-blue font-semibold",children:["$",(f.purchasePrice??32e4).toLocaleString()]}),l.jsxs("td",{className:"text-right",children:["$",Math.round(f.rent*12).toLocaleString()]}),l.jsxs("td",{className:"text-right",children:["$",Math.round(R.annualExpenses).toLocaleString()]}),l.jsxs("td",{className:"text-right font-semibold",children:["$",Math.round(R.noi).toLocaleString()]}),l.jsxs("td",{className:"text-center text-blue font-semibold",children:[R.capRate.toFixed(1),"%"]}),l.jsxs("td",{className:`text-right font-semibold ${R.cashFlow>=0?"":"text-red"}`,children:[R.cashFlow>=0?"":"(","$",Math.abs(Math.round(R.cashFlow)).toLocaleString(),"$",R.cashFlow>=0?"":")"]}),l.jsxs("td",{className:`text-center font-semibold ${R.cashOnCash>=0?"":"text-red"}`,children:[R.cashOnCash.toFixed(1),"%"]}),l.jsx("td",{className:"value-add-text-cell",children:f.valueAddPotential||"Stabilized property."}),l.jsx("td",{className:"status-cell",children:l.jsx("span",{className:`status-badge-lbl ${V?"passed":"pursue"}`,children:f.dealStatus||"Passed"})})]},f.id)})})]})}),l.jsx("div",{style:{marginTop:"1.5rem",display:"flex",justifyContent:"flex-end"},children:l.jsx("button",{className:"btn-print-pdf-green",onClick:()=>window.print(),children:"🖨️ Print Underwriting Log"})})]})}),i==="compare"&&l.jsx("div",{className:"spreadsheet-view-container no-print",children:a.length===0?l.jsxs("div",{className:"empty-grid-state",children:[l.jsx("span",{className:"large-emoji-display",children:"⚖️"}),l.jsx("h4",{children:"No properties selected for comparison"}),l.jsx("p",{children:"Go back to the Search Listings view and select the balance icon (⚖️) on up to 3 listings to compare them."})]}):l.jsxs("div",{className:"spreadsheet-card-container",children:[l.jsx("h2",{className:"spreadsheet-title",children:"⚖️ Side-by-Side Underwriting Comparison"}),l.jsxs("table",{className:"comparison-underwriting-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Feature Metric"}),a.map(f=>{const R=e.find(V=>V.id===f);return l.jsx("th",{className:"text-center",children:R==null?void 0:R.address},f)})]})}),l.jsxs("tbody",{children:[l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:a.length+1,children:"🏡 Basic Parameters"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Type"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center",children:(R=e.find(V=>V.id===f))==null?void 0:R.type},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Market"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center",children:(R=e.find(V=>V.id===f))==null?void 0:R.market},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Units"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center",children:(R=e.find(V=>V.id===f))==null?void 0:R.units},f)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:a.length+1,children:"💰 Underwriting Yields"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Monthly Rent"}),a.map(f=>{var R;return l.jsxs("td",{className:"text-center font-bold",children:["$",(R=e.find(V=>V.id===f))==null?void 0:R.rent.toLocaleString()]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Ask Price"}),a.map(f=>{var R;return l.jsxs("td",{className:"text-center font-bold",children:["$",(((R=e.find(V=>V.id===f))==null?void 0:R.purchasePrice)??32e4).toLocaleString()]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Adjusted Cap Rate"}),a.map(f=>{const R=e.find(Te=>Te.id===f),V=Cr(R);return l.jsxs("td",{className:"text-center font-bold text-green",children:[V.capRate.toFixed(2),"%"]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"CoC Return"}),a.map(f=>{const R=e.find(Te=>Te.id===f),V=Cr(R);return l.jsxs("td",{className:`text-center font-bold ${V.cashOnCash>=0?"text-green":"text-red"}`,children:[V.cashOnCash.toFixed(2),"%"]},f)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:a.length+1,children:"🌱 Location Hazard Profile"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Air Quality Index"}),a.map(f=>{var R;return l.jsxs("td",{className:"text-center",children:[((R=e.find(V=>V.id===f))==null?void 0:R.airQualityIndex)??32," AQI"]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Wildfire Risk"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center text-orange font-bold",children:((R=e.find(V=>V.id===f))==null?void 0:R.fireRisk)??"Low"},f)})]})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:l.jsx("button",{onClick:()=>c([]),className:"btn-print-pdf-green",children:"Clear Selections"})})]})})]}),L&&l.jsx("div",{className:"modal-overlay no-print",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>{E(!1),Pn()},children:"×"}),l.jsx("h3",{className:"modal-title",children:x?"Edit Underwriting Listing":"Post Underwriting Listing"}),l.jsx("p",{className:"modal-subtitle",children:"Fill in details to build cash flow sheet and map pins in Chicago."}),l.jsxs("form",{onSubmit:qd,style:{marginTop:"1.25rem"},className:"modal-scroll-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Street Address *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. 1422 N La Salle Dr, Chicago, IL 60610",value:I,onChange:f=>P(f.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Market *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Uptown, Chicago",value:Ia,onChange:f=>Fa(f.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Units *"}),l.jsx("input",{type:"number",required:!0,min:"1",value:$a,onChange:f=>Oa(parseInt(f.target.value)||1),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly Rent ($) *"}),l.jsx("input",{type:"number",required:!0,min:"0",placeholder:"e.g. 3100",value:D,onChange:f=>B(f.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Type"}),l.jsxs("select",{value:N,onChange:f=>_(f.target.value),className:"form-select",children:[l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"}),l.jsx("option",{value:"Townhouse",children:"Townhouse"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Deal Status"}),l.jsxs("select",{value:Ua,onChange:f=>Ba(f.target.value),className:"form-select",children:[l.jsx("option",{value:"Passed",children:"Passed"}),l.jsx("option",{value:"Passed at ask",children:"Passed at ask"}),l.jsx("option",{value:"PURSUE - request T12",children:"PURSUE - request T12"}),l.jsx("option",{value:"Pending - backup offer?",children:"Pending - backup offer?"}),l.jsx("option",{value:"Pull rent roll",children:"Pull rent roll"}),l.jsx("option",{value:"Verify listing",children:"Verify listing"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Value-Add Potential Description"}),l.jsx("textarea",{value:Da,onChange:f=>Aa(f.target.value),className:"form-input",style:{height:"70px",resize:"vertical"},placeholder:"Notes on rent reposition, cosmetic renovation, heat bill-back..."})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Full Name (Optional)"}),l.jsx("input",{type:"text",placeholder:"Vacant",value:de,onChange:f=>ft(f.target.value),className:"form-input"})]}),de&&l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease Start"}),l.jsx("input",{type:"date",value:$,onChange:f=>K(f.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease End"}),l.jsx("input",{type:"date",value:ee,onChange:f=>Mt(f.target.value),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"📊 Acquisition & ROI Parameters"}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:Oe,onChange:f=>et(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:Ql,onChange:f=>yn(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:Yl,onChange:f=>wn(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Taxes ($/yr)"}),l.jsx("input",{type:"number",value:jn,onChange:f=>kn(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Nn,onChange:f=>Sn(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Maintenance ($/yr)"}),l.jsx("input",{type:"number",value:bn,onChange:f=>Cn(parseFloat(f.target.value)||0),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"📍 Map Coordinates (Chicago Area)"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Latitude"}),l.jsx("input",{type:"number",step:"0.0001",value:Ta,onChange:f=>Ra(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Longitude"}),l.jsx("input",{type:"number",step:"0.0001",value:_a,onChange:f=>Ma(parseFloat(f.target.value)||0),className:"form-input"})]})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>{E(!1),Pn()},children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Publish Listing"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        :root {
          --primary-green: #2e7d32;
          --primary-hover: #1b5e20;
          --light-green-bg: #f1f8e9;
          --white: #ffffff;
          --border-color: #cbd5e0;
          --text-dark: #2d3748;
          --text-muted: #718096;
        }

        .realpal-dashboard-container {
          display: flex;
          background-color: #f4f7f6;
          color: var(--text-dark);
          min-height: 100vh;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          overflow: hidden;
        }

        /* 1. Vertical Sidebar */
        .left-icon-sidebar {
          width: 75px;
          background: var(--white);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 0;
          flex-shrink: 0;
        }

        .sidebar-logo {
          color: var(--primary-green);
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: -0.05em;
          margin-bottom: 2rem;
        }

        .sidebar-icons-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
          align-items: center;
        }

        .sidebar-icon-btn {
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          cursor: pointer;
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          transition: all 0.15s;
        }

        .sidebar-icon-btn:hover, .sidebar-icon-btn.active {
          color: var(--primary-green);
          background: var(--light-green-bg);
        }

        .sidebar-icon-btn .lbl {
          font-size: 0.65rem;
          font-weight: 750;
        }

        /* Viewport content next to sidebar */
        .main-viewport-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }

        /* 2. Top Navigation Bar */
        .top-search-filter-bar {
          display: flex;
          align-items: center;
          background: var(--white);
          border-bottom: 1px solid var(--border-color);
          padding: 0.8rem 2rem;
          gap: 1.5rem;
          height: 65px;
          flex-shrink: 0;
        }

        .search-bar-input-box {
          position: relative;
          display: flex;
          align-items: center;
          width: 320px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--white);
        }

        .top-search-address-field {
          width: 100%;
          border: none;
          padding: 0.55rem 1rem;
          font-size: 0.88rem;
          outline: none;
          color: var(--text-dark);
          font-weight: 600;
        }

        .clear-search-btn {
          background: transparent;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          color: var(--text-muted);
          padding: 0 0.5rem;
        }

        .search-trigger-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0 0.75rem;
          color: var(--text-muted);
        }

        .top-dropdown-filters {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .top-dropdown-select {
          border: 1px solid var(--border-color);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-md);
          outline: none;
          font-size: 0.85rem;
          background: var(--white);
          font-weight: 600;
          color: var(--text-dark);
        }

        .btn-filter-more {
          background: var(--white);
          border: 1px solid var(--border-color);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          color: var(--text-dark);
        }

        .btn-filter-more:hover {
          background: #f7fafc;
        }

        .btn-save-search-green {
          background: var(--primary-green);
          color: var(--white);
          border: none;
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 750;
          cursor: pointer;
          font-size: 0.9rem;
          margin-left: auto;
          transition: background 0.15s;
        }

        .btn-save-search-green:hover {
          background: var(--primary-hover);
        }

        /* 3. Split Screen Layout */
        .dashboard-split-screen {
          display: flex;
          flex: 1;
          height: calc(100vh - 65px);
          overflow: hidden;
        }

        .split-left-map-viewport {
          width: 50%;
          height: 100%;
          background: #e5e9f0;
          border-right: 1px solid var(--border-color);
        }

        .split-right-listings-grid-pane {
          width: 50%;
          height: 100%;
          position: relative;
          background: var(--white);
          overflow: hidden;
        }

        /* Scroller for listings grid */
        .listings-grid-scroller {
          height: 100%;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .listings-scroller-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.25rem;
          gap: 0.25rem;
        }

        .listings-scroller-header h3 {
          font-size: 1.25rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .listings-scroller-header span {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .listings-two-col-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        /* Listing Grid Card (Matching screenshot style) */
        .listing-grid-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--white);
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
        }

        .listing-grid-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-green);
        }

        .card-media-gallery {
          height: 150px;
          background: linear-gradient(135deg, var(--primary-green) 0%, #a5d6a7 100%);
          position: relative;
        }

        .card-top-left-badge {
          position: absolute;
          left: 0.75rem;
          top: 0.75rem;
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-dark);
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .card-favorite-heart {
          position: absolute;
          right: 0.75rem;
          top: 0.75rem;
          font-size: 1.1rem;
          cursor: pointer;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
        }

        /* Dots indicator overlay on image bottom */
        .card-dots-carousel {
          position: absolute;
          bottom: 0.6rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.25rem;
        }

        .card-dots-carousel .dot {
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }

        .card-dots-carousel .dot.active {
          background: var(--white);
          width: 6px;
          height: 6px;
        }

        .card-description-box {
          padding: 1rem;
        }

        .price-line h3 {
          font-size: 1.45rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .details-line {
          font-size: 0.82rem;
          color: var(--text-dark);
          font-weight: 600;
          margin-top: 0.25rem;
        }

        .address-line {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 650;
          margin-top: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .agency-line {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
        }

        .underwriting-badge-row {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.6rem;
        }

        .underwriting-badge-row .badge {
          font-size: 0.68rem;
          font-weight: 750;
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
        }

        .underwriting-badge-row .badge.cap {
          background: rgba(46, 125, 50, 0.08);
          color: var(--primary-green);
        }

        .underwriting-badge-row .badge.coc {
          background: rgba(221, 107, 32, 0.08);
          color: #dd6b20;
        }

        /* 4. Sliding Detail Drawer (Slides from the right) */
        .sliding-detail-drawer {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: var(--white);
          z-index: 10;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.25s ease-out;
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          background: var(--white);
        }

        .btn-close-drawer {
          background: transparent;
          border: none;
          color: var(--primary-green);
          font-size: 0.95rem;
          font-weight: 750;
          cursor: pointer;
        }

        .btn-print-pdf-green {
          background: var(--white);
          border: 1px solid var(--primary-green);
          color: var(--primary-green);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 750;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.15s;
        }

        .btn-print-pdf-green:hover {
          background: var(--light-green-bg);
        }

        .drawer-body-scrollable {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .drawer-hero-block h2 {
          font-size: 1.4rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .drawer-hero-block p {
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: 0.2rem;
        }

        .badge-guarantee {
          display: inline-block;
          font-size: 0.65rem;
          background: var(--light-green-bg);
          color: var(--primary-green);
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .yields-grid-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .yield-mini-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--light-green-bg);
          border: 1px solid rgba(46, 125, 50, 0.15);
          padding: 0.6rem;
          border-radius: var(--radius-md);
        }

        .yield-mini-card .lbl {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 750;
          text-transform: uppercase;
        }

        .yield-mini-card .val {
          font-size: 1.15rem;
          font-weight: 850;
          margin-top: 0.15rem;
        }

        .yield-mini-card .val.text-green {
          color: var(--primary-green);
        }

        .yield-mini-card .val.text-red {
          color: #e53e3e;
        }

        .underwriting-notes-panel {
          background: #f7fafc;
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .underwriting-notes-panel h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-dark);
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .underwriting-notes-panel p {
          font-size: 0.82rem;
          line-height: 1.4;
          color: var(--text-muted);
        }

        .prop-divider {
          height: 1px;
          background: var(--border-color);
          margin: 1.5rem 0;
        }

        .section-title {
          font-size: 0.88rem;
          font-weight: 850;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.75rem;
        }

        .inline-calculator-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .inputs-strip {
          background: #f7fafc;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .form-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .form-field-box {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .form-field-box label {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 750;
        }

        .form-field-box input {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.3rem 0.5rem;
          font-size: 0.82rem;
          outline: none;
          color: var(--text-dark);
        }

        .form-field-box input:focus {
          border-color: var(--primary-green);
        }

        .auto-save-warning {
          text-align: center;
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 0.55rem;
          font-weight: 600;
        }

        .compact-roi-yield-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .compact-roi-yield-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--text-muted);
        }

        .compact-roi-yield-table tr.border-t td {
          border-top: 2px solid var(--text-dark);
          color: var(--text-dark);
          padding-top: 0.6rem;
        }

        .projections-log-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
        }

        .projections-log-table th, .projections-log-table td {
          padding: 0.5rem;
          border-bottom: 1px solid #edf2f7;
          text-align: left;
        }

        .projections-log-table th {
          background: #f7fafc;
          font-weight: 700;
          color: var(--text-muted);
        }

        .schools-bars-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .school-rating-bar {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          gap: 0.5rem;
        }

        .school-lbl {
          flex: 1.5;
          color: var(--text-muted);
          font-weight: 600;
        }

        .rating-track-wrapper {
          flex: 2;
          height: 6px;
          background: rgba(0,0,0,0.06);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .rating-track-fill {
          height: 100%;
          background: linear-gradient(90deg, #ecc94b 0%, var(--primary-green) 100%);
          border-radius: var(--radius-full);
        }

        .rating-num {
          flex: 0.8;
          text-align: right;
          font-weight: 750;
          color: var(--primary-green);
        }

        .env-summary-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .env-summary-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--text-muted);
        }

        .env-summary-table td:last-child {
          text-align: right;
          color: var(--text-dark);
        }

        /* Divicon circular pin on map (Hoffman Estates IL screenshot style) */
        .custom-map-pin-badge {
          background: var(--primary-green);
          color: var(--white);
          border: 2px solid var(--white);
          border-radius: 12px;
          font-size: 0.72rem;
          font-weight: 850;
          text-align: center;
          line-height: 22px;
          box-shadow: var(--shadow-sm);
        }

        /* 5. Spreadsheet View tab (uploaded image) */
        .spreadsheet-view-container {
          padding: 2rem;
          overflow-y: auto;
          flex: 1;
        }

        .spreadsheet-card-container {
          background: var(--white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
        }

        .spreadsheet-title {
          font-size: 1.45rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .spreadsheet-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 0.2rem;
          margin-bottom: 1.5rem;
        }

        .spreadsheet-underwriting-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
        }

        .spreadsheet-underwriting-table th, .spreadsheet-underwriting-table td {
          padding: 0.75rem 0.5rem;
          border-bottom: 1px solid var(--border-color);
          text-align: left;
        }

        .spreadsheet-underwriting-table th {
          background: #edf2f7;
          color: var(--text-dark);
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .spreadsheet-underwriting-table tr:hover {
          background: #f7fafc;
        }

        .value-add-text-cell {
          font-size: 0.75rem;
          line-height: 1.4;
          color: var(--text-muted);
          max-width: 260px;
        }

        .status-badge-lbl {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
        }

        .status-badge-lbl.passed {
          background: #edf2f7;
          color: var(--text-dark);
        }

        .status-badge-lbl.pursue {
          background: #feebc8;
          color: #c05621;
        }

        /* Comparison table */
        .comparison-underwriting-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .comparison-underwriting-table th, .comparison-underwriting-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .comparison-underwriting-table th {
          background: #edf2f7;
          font-weight: bold;
        }

        .comparison-underwriting-table tr.section-row td {
          background: var(--light-green-bg);
          font-weight: 850;
          color: var(--primary-green);
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .comparison-underwriting-table .lbl {
          font-weight: 700;
          color: var(--text-muted);
        }

        /* Utility classes */
        .text-green { color: var(--primary-green) !important; }
        .text-red { color: #e53e3e !important; }
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .font-semibold { font-weight: 650; }
        .font-bold { font-weight: 750; }
        .table-responsive { overflow-x: auto; }

        .empty-grid-state {
          text-align: center;
          padding: 5rem 2rem;
        }

        .large-emoji-display {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        /* Print Override */
        .print-header { display: none; }

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
            background: #fff !important;
            color: #000 !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .print-header {
            display: block !important;
            border-bottom: 2px solid #000;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
          }
          .no-print {
            display: none !important;
          }
        }
      `}})]})}function Om({properties:e,jobs:t,onAddJob:r,bids:n,onAcceptBid:i,groupDeals:s,onToggleGroupDeal:a}){const[c,o]=S.useState(!1),[d,y]=S.useState(null),[v,h]=S.useState(""),[j,b]=S.useState(""),[w,M]=S.useState("Plumbing"),[p,u]=S.useState(""),[m,g]=S.useState(""),C=async x=>{if(x.preventDefault(),!v||!j||!m)return;const O=e.find(N=>N.id.toString()===j.toString()),I=O?O.address:"Unknown Property",P={title:v,propertyId:j,propertyName:I,category:w,description:p,budget:parseFloat(m)};await r(P),o(!1),h(""),b(""),M("Plumbing"),u(""),g("")},L=async(x,O)=>{await i(x,O),y(null)},E=x=>{a(x)};return l.jsxs("div",{className:"crowdsource-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Crowdsourced Services"}),l.jsx("p",{className:"view-description",children:"Post repair tickets to secure bids or join collective pools in your ZIP code for volume discounts."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>{e.length===0?alert("Please register a property in the 'Rental Properties' tab first before listing maintenance jobs."):o(!0)},children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Post Repair Ticket"]})]}),l.jsxs("div",{className:"marketplace-layout",children:[l.jsxs("div",{className:"tickets-column",children:[l.jsx("h3",{className:"column-title",children:"Active Repair Tickets"}),l.jsx("p",{className:"column-p",children:"Submit issues to trigger auto-competitions among verified local providers."}),t.length===0?l.jsxs("div",{className:"empty-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔧"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No maintenance tickets"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Your active service queries and bid entries will be detailed here."})]}):l.jsx("div",{className:"tickets-list",children:t.map(x=>{var P,N;const O=n[x.id]||[],I=x.status==="bidding"?"badge-primary":x.status==="active"?"badge-success":"badge-info";return l.jsxs("div",{className:"ticket-card glass-card",children:[l.jsxs("div",{className:"ticket-header",children:[l.jsx("span",{className:`badge ${I}`,children:x.status==="bidding"?"Gathering Bids":x.status==="active"?"Service Scheduled":"Completed"}),l.jsxs("span",{className:"ticket-date",children:["Posted ",x.datePosted]})]}),l.jsx("h4",{className:"ticket-title",children:x.title}),l.jsxs("div",{className:"ticket-meta",children:[l.jsxs("span",{children:["📍 ",x.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["🏷️ ",x.category]})]}),l.jsx("p",{className:"ticket-desc",children:x.description}),l.jsxs("div",{className:"ticket-footer",children:[l.jsxs("div",{className:"ticket-budget",children:[l.jsx("span",{className:"lbl",children:"Target Budget:"}),l.jsxs("span",{className:"val",children:["$",x.budget]})]}),x.status==="bidding"?l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(x),children:["View Bids (",O.length,")",O.length>0&&l.jsx("span",{className:"bid-alert-dot"})]}):l.jsxs("div",{className:"hired-badge",children:[l.jsxs("span",{children:["Hired: ",(P=x.acceptedBid)==null?void 0:P.providerName," ($",(N=x.acceptedBid)==null?void 0:N.price,")"]}),x.savings>0&&l.jsxs("span",{className:"savings-tag",children:["Saved $",x.savings,"!"]})]})]})]},x.id)})})]}),l.jsxs("div",{className:"pools-column",children:[l.jsx("h3",{className:"column-title",children:"Neighborhood Bulk Pools"}),l.jsx("p",{className:"column-p",children:"Pool properties with nearby landlords in the same ZIP code to negotiate bulk pricing from vendors."}),l.jsx("div",{className:"pools-list",children:s.map(x=>l.jsxs("div",{className:`pool-card glass-card ${x.unlocked===1?"unlocked-card":""}`,children:[l.jsxs("div",{className:"pool-header",children:[l.jsxs("span",{className:"pool-zip",children:["ZIP: ",x.zipCode]}),l.jsx("span",{className:`badge ${x.unlocked===1?"badge-success":"badge-warning"}`,children:x.unlocked===1?"💰 Discount Unlocked!":`${x.targetCount-x.currentCount} Landlords Needed`})]}),l.jsx("h4",{className:"pool-service-title",children:x.serviceType}),l.jsx("p",{className:"pool-desc",children:x.description}),l.jsxs("div",{className:"pool-stats",children:[l.jsxs("div",{className:"progress-labels",children:[l.jsxs("span",{children:["Joined: ",x.currentCount," / ",x.targetCount," Landlords"]}),l.jsxs("span",{children:[Math.round(x.currentCount/x.targetCount*100),"%"]})]}),l.jsx("div",{className:"progress-bar-track",children:l.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(100,x.currentCount/x.targetCount*100)}%`,backgroundColor:x.unlocked===1?"var(--color-success)":"var(--color-primary)"}})})]}),l.jsxs("div",{className:"pool-pricing-grid",children:[l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Bulk Rate"}),l.jsxs("span",{className:"val",children:["$",x.bulkPrice]})]}),l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Est. Savings"}),l.jsxs("span",{className:"val text-success",children:["-",x.discountPercent,"%"]})]})]}),l.jsx("button",{className:`btn ${x.joined===1?"btn-danger":"btn-primary"} btn-sm w-100`,onClick:()=>E(x.id),children:x.joined===1?"Leave Group Pool":"Join Collective Pool"})]},x.id))})]})]}),c&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>o(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Post Maintenance Ticket"}),l.jsx("p",{className:"modal-subtitle",children:"Post repair requirements. Our local network will bid within minutes."}),l.jsxs("form",{onSubmit:C,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Issue Title *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Broken water heater, Gutter maintenance",value:v,onChange:x=>h(x.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Select Property *"}),l.jsxs("select",{required:!0,value:j,onChange:x=>b(x.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose property --"}),e.map(x=>l.jsx("option",{value:x.id,children:x.address},x.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Service Category"}),l.jsxs("select",{value:w,onChange:x=>M(x.target.value),className:"form-select",children:[l.jsx("option",{value:"Plumbing",children:"Plumbing"}),l.jsx("option",{value:"Electrical",children:"Electrical"}),l.jsx("option",{value:"HVAC",children:"HVAC"}),l.jsx("option",{value:"Roofing",children:"Roofing"}),l.jsx("option",{value:"Landscaping",children:"Landscaping"}),l.jsx("option",{value:"Other",children:"General Handyman"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Max Budget ($) *"}),l.jsx("input",{type:"number",required:!0,min:"1",placeholder:"e.g. 350",value:m,onChange:x=>g(x.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Problem Details / Scope of Work"}),l.jsx("textarea",{placeholder:"Provide plumbing sizes, brand models, pictures or access timelines to help providers bid accurately.",value:p,onChange:x=>u(x.target.value),className:"form-textarea"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>o(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Post to Marketplace"})]})]})]})}),d&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",style:{maxWidth:"600px"},children:[l.jsx("button",{className:"modal-close",onClick:()=>y(null),children:"×"}),l.jsxs("h3",{className:"modal-title",children:["Bidding Room: ",d.title]}),l.jsx("p",{className:"modal-subtitle",children:"Review quotes from service providers. Simulating real-time local updates."}),l.jsx("div",{className:"bids-list",style:{marginTop:"1.5rem",display:"flex",flexDirection:"column",gap:"1rem"},children:(n[d.id]||[]).length===0?l.jsxs("div",{className:"simulating-spinner",children:[l.jsx("div",{className:"spinner"}),l.jsxs("p",{children:["Searching for providers and requesting quotes... ",l.jsx("br",{}),l.jsx("span",{children:"Bids usually arrive in 5-10 seconds."})]})]}):(n[d.id]||[]).map(x=>{const O=Math.round((d.budget-x.price)/d.budget*100);return l.jsxs("div",{className:"bid-item glass-card",style:{padding:"1rem",background:"rgba(0,0,0,0.2)"},children:[l.jsxs("div",{className:"bid-item-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsxs("h4",{style:{color:"#fff",fontSize:"1rem"},children:[x.providerName,x.verified===1&&l.jsx("span",{className:"verified-check",title:"RealPal Verified License",children:" ✓"})]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginTop:"0.2rem"},children:[l.jsxs("span",{style:{color:"var(--color-warning)",fontSize:"0.85rem"},children:["★ ",x.rating]}),l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:["• ETA: ",x.eta]})]})]}),l.jsxs("div",{style:{textAlign:"right"},children:[l.jsxs("div",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#fff"},children:["$",x.price]}),O>0?l.jsxs("span",{style:{color:"var(--color-success)",fontSize:"0.75rem",fontWeight:"700"},children:["Saves ",O,"%"]}):l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Budget Quote"})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:l.jsx("button",{className:"btn btn-success btn-sm",onClick:()=>L(d.id,x),children:"Hire & Authorize Lockbox"})})]},x.id)})}),(n[d.id]||[]).length<3&&(n[d.id]||[]).length>0&&l.jsx("p",{className:"bidding-tip",children:"💡 Keep this window open! More competitive service bids are currently formulating..."})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Dm({properties:e,reminders:t,onAddReminder:r,onToggleReminder:n,onDeleteReminder:i}){const[s,a]=S.useState(!1),[c,o]=S.useState("All"),[d,y]=S.useState(""),[v,h]=S.useState(""),[j,b]=S.useState("Medium"),[w,M]=S.useState("Maintenance"),[p,u]=S.useState("General"),m=async P=>{if(P.preventDefault(),!d||!v)return;const N=e.find(B=>B.id.toString()===p.toString()),_=N?N.address:"General Admin";await r({title:d,date:v,priority:j,category:w,propertyId:p,propertyName:_}),a(!1),y(""),h(""),b("Medium"),M("Maintenance"),u("General")},g=P=>{n(P)},C=P=>{i(P)},E=[...t.filter(P=>c==="All"?!0:P.category===c)].sort((P,N)=>P.completed!==N.completed?P.completed?1:-1:new Date(P.date)-new Date(N.date)),x=t.filter(P=>P.completed===0||P.completed===!1).length,O=t.filter(P=>(P.completed===0||P.completed===!1)&&P.priority==="High").length,I=P=>{switch(P){case"Rent":return"badge-success";case"Maintenance":return"badge-primary";case"Lease":return"badge-info";case"Tax":return"badge-warning";case"Compliance":return"badge-danger";default:return"badge-secondary"}};return l.jsxs("div",{className:"reminders-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Reminders & Tasks"}),l.jsx("p",{className:"view-description",children:"Set and follow up on critical items, including lease endpoints, tax milestones, and certifications."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"New Reminder"]})]}),x>0&&l.jsx("div",{className:"reminders-alert-banner glass-card",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("span",{className:"pulse-indicator"}),l.jsxs("div",{children:[l.jsxs("h4",{style:{fontSize:"0.95rem"},children:["You have ",x," outstanding landlord tasks."]}),l.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.8rem",marginTop:"0.1rem"},children:O>0?`Urgent attention required: ${O} high-priority tasks remain incomplete.`:"All high-priority items are currently up-to-date."})]})]})}),l.jsx("div",{className:"filters-row",children:l.jsx("div",{className:"category-tabs",children:["All","Rent","Maintenance","Lease","Tax","Compliance"].map(P=>l.jsx("button",{className:`filter-tab ${c===P?"active":""}`,onClick:()=>o(P),children:P},P))})}),l.jsx("div",{className:"reminders-list-container",children:E.length===0?l.jsxs("div",{className:"empty-reminders-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔔"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No reminders found"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Change your filter settings or record a new reminder for future inspection schedules."})]}):l.jsx("div",{className:"reminders-stack",children:E.map(P=>{const N=(P.completed===0||P.completed===!1)&&new Date(P.date)<new Date,_=P.completed===1||P.completed===!0;return l.jsxs("div",{className:`reminder-row glass-card ${_?"completed-row":""} ${N?"overdue-row":""}`,children:[l.jsxs("div",{className:"checkbox-col",children:[l.jsx("input",{type:"checkbox",checked:_,onChange:()=>g(P.id),className:"task-checkbox",id:`rem-${P.id}`}),l.jsx("label",{htmlFor:`rem-${P.id}`,className:"checkbox-visual",children:_&&"✓"})]}),l.jsxs("div",{className:"details-col",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"},children:[l.jsx("span",{className:`badge ${I(P.category)}`,children:P.category}),l.jsxs("span",{className:`priority-indicator prio-${P.priority.toLowerCase()}`,children:[P.priority," Priority"]}),N&&l.jsx("span",{className:"badge badge-danger",children:"OVERDUE"})]}),l.jsx("h4",{className:"reminder-title",children:P.title}),l.jsxs("div",{className:"reminder-meta",children:[l.jsxs("span",{children:["📍 ",P.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{className:N?"text-danger font-bold":"",children:["📅 Due: ",new Date(P.date).toLocaleDateString()]})]})]}),l.jsx("div",{className:"actions-col",children:l.jsx("button",{className:"btn btn-secondary btn-sm delete-task-btn",onClick:()=>C(P.id),children:"🗑️"})})]},P.id)})})}),s&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>a(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Create Task Reminder"}),l.jsx("p",{className:"modal-subtitle",children:"Schedule a new operational follow-up for your properties."}),l.jsxs("form",{onSubmit:m,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Task Description *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Inspect fire alarm, File schedule E taxes",value:d,onChange:P=>y(P.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Associate with Property"}),l.jsxs("select",{value:p,onChange:P=>u(P.target.value),className:"form-select",children:[l.jsx("option",{value:"General",children:"General / Portfolio Administration"}),e.map(P=>l.jsx("option",{value:P.id,children:P.address},P.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Category"}),l.jsxs("select",{value:w,onChange:P=>M(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Rent",children:"Rent Collection"}),l.jsx("option",{value:"Maintenance",children:"Maintenance / Repairs"}),l.jsx("option",{value:"Lease",children:"Lease Renewal"}),l.jsx("option",{value:"Tax",children:"Accounting & Taxes"}),l.jsx("option",{value:"Compliance",children:"Legal & Compliance"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Priority Level"}),l.jsxs("select",{value:j,onChange:P=>b(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Low",children:"Low"}),l.jsx("option",{value:"Medium",children:"Medium"}),l.jsx("option",{value:"High",children:"High"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Due Date *"}),l.jsx("input",{type:"date",required:!0,value:v,onChange:P=>h(P.target.value),className:"form-input"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>a(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Set Reminder"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Am({feedback:e,onAddFeedback:t}){const[r,n]=S.useState(""),[i,s]=S.useState(5),[a,c]=S.useState(""),[o,d]=S.useState(!1),y=["John Herman","Rohit Parthi","Harsha Pilli","Krishna Kanchancharla","Lakshminarayana P","Chandu V","Ranjit","Gopi","Niel","Sujan","Venkata Vedam","Bhaskar","Ashok Lamkshman","Raju","Hanumanth","Praveen"],v=async w=>{if(w.preventDefault(),!r||!a)return;const M={name:r,rating:parseInt(i),comment:a};await t(M),c(""),n(""),s(5),d(!0),setTimeout(()=>d(!1),3e3)},h=e.length,j=h>0?(e.reduce((w,M)=>w+M.rating,0)/h).toFixed(1):0,b=w=>"★".repeat(w)+"☆".repeat(5-w);return l.jsxs("div",{className:"feedback-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Concept Tester Panel"}),l.jsx("p",{className:"view-description",children:"Gathering structured feedback from target users to evaluate the RealPal MVP prototype."})]})}),l.jsxs("div",{className:"feedback-layout grid-2",children:[l.jsxs("div",{className:"glass-card submit-card",children:[l.jsx("h3",{className:"section-title",children:"Submit Tester Evaluation"}),l.jsx("p",{className:"section-p",children:"If you are on the tester team, select your name, rate your experience, and leave your honest feature reviews."}),o&&l.jsx("div",{className:"success-banner animate-slide-up",style:{backgroundColor:"var(--color-success-light)",border:"1px solid rgba(56,161,105,0.2)",padding:"0.85rem",borderRadius:"var(--radius-sm)",marginBottom:"1.25rem",color:"var(--color-success)",fontSize:"0.88rem",fontWeight:600},children:"✓ Review submitted! Thank you for helping shape the future of RealPal."}),l.jsxs("form",{onSubmit:v,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tester Identity *"}),l.jsxs("select",{required:!0,value:r,onChange:w=>n(w.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose your name --"}),y.map(w=>l.jsx("option",{value:w,children:w},w))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Concept Rating"}),l.jsx("div",{className:"rating-select-row",children:[1,2,3,4,5].map(w=>l.jsx("button",{type:"button",className:`star-select-btn ${i>=w?"filled":""}`,onClick:()=>s(w),children:"★"},w))})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Feedback Notes / Suggestions *"}),l.jsx("textarea",{required:!0,placeholder:"Share your thoughts on the business models, bidding simulators, or what features you would like added to manage your properties...",value:a,onChange:w=>c(w.target.value),className:"form-textarea"})]}),l.jsx("button",{type:"submit",className:"btn btn-primary w-100",style:{marginTop:"0.5rem"},children:"Submit Test Feedback"})]})]}),l.jsxs("div",{className:"reviews-column flex-column-center",children:[l.jsx("div",{className:"feedback-stats-header glass-card",children:l.jsxs("div",{className:"stat-row",children:[l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:j}),l.jsx("span",{className:"lbl",children:"Average Rating"})]}),l.jsx("div",{className:"stat-divider"}),l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:h}),l.jsx("span",{className:"lbl",children:"Total Reviews"})]})]})}),l.jsxs("div",{className:"reviews-scroll-feed",children:[l.jsx("h3",{className:"section-title",style:{fontSize:"1.15rem",marginBottom:"1rem",color:"#fff"},children:"Testimonial & Feedback Stream"}),e.length===0?l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"No feedback submitted yet. Be the first to review!"}):l.jsx("div",{className:"reviews-feed-stack",children:e.map(w=>l.jsxs("div",{className:"review-feed-card glass-card",children:[l.jsxs("div",{className:"review-feed-header",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"reviewer-name",children:w.name}),l.jsxs("span",{className:"reviewer-meta",children:[w.simulated===1?"Prepopulated Test":"User Tester"," • ",w.date]})]}),l.jsx("span",{className:"stars-string",children:b(w.rating)})]}),l.jsxs("p",{className:"reviewer-comment",children:['"',w.comment,'"']})]},w.id))})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const te="http://192.168.1.103:5000";function Um(){const[e,t]=S.useState("landing"),[r,n]=S.useState("premium"),[i,s]=S.useState([]),[a,c]=S.useState([]),[o,d]=S.useState([]),[y,v]=S.useState({}),[h,j]=S.useState([]),[b,w]=S.useState([]);S.useEffect(()=>{fetch(`${te}/api/subscription`).then(N=>N.json()).then(N=>n(N.subscription)).catch(N=>console.error("Error fetching subscription:",N)),fetch(`${te}/api/properties`).then(N=>N.json()).then(N=>s(N)).catch(N=>console.error("Error fetching properties:",N)),fetch(`${te}/api/reminders`).then(N=>N.json()).then(N=>c(N)).catch(N=>console.error("Error fetching reminders:",N)),fetch(`${te}/api/jobs`).then(N=>N.json()).then(async N=>{d(N);const _={};for(const D of N)if(D.status==="bidding")try{const de=await(await fetch(`${te}/api/jobs/${D.id}/bids`)).json();_[D.id]=de}catch(B){console.error("Error fetching bids for job:",D.id,B)}v(_)}).catch(N=>console.error("Error fetching jobs:",N)),fetch(`${te}/api/group-deals`).then(N=>N.json()).then(N=>j(N)).catch(N=>console.error("Error fetching group deals:",N)),fetch(`${te}/api/feedback`).then(N=>N.json()).then(N=>w(N)).catch(N=>console.error("Error fetching feedback:",N))},[]),S.useEffect(()=>{const N=o.filter(D=>D.status==="bidding");if(N.length===0)return;const _=setInterval(()=>{N.forEach(D=>{fetch(`${te}/api/jobs/${D.id}/bids`).then(B=>B.json()).then(B=>{v(de=>({...de,[D.id]:B}))}).catch(B=>console.error("Error polling bids:",B))})},2e3);return()=>clearInterval(_)},[o]);const M=async N=>{try{(await(await fetch(`${te}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscription:N})})).json()).success&&n(N)}catch(_){console.error("Error saving subscription:",_)}},p=async N=>{try{const D=await(await fetch(`${te}/api/properties`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();s([D,...i])}catch(_){console.error("Error creating property:",_)}},u=async(N,_)=>{try{const B=await(await fetch(`${te}/api/properties/${N}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)})).json();s(i.map(z=>z.id===N?B:z));const ft=await(await fetch(`${te}/api/reminders`)).json();c(ft)}catch(D){console.error("Error saving property changes:",D)}},m=async N=>{try{await fetch(`${te}/api/properties/${N}`,{method:"DELETE"}),s(i.filter(B=>B.id!==N));const D=await(await fetch(`${te}/api/reminders`)).json();c(D)}catch(_){console.error("Error deleting property:",_)}},g=async N=>{try{const D=await(await fetch(`${te}/api/reminders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();c([D,...a])}catch(_){console.error("Error creating task:",_)}},C=async N=>{try{const D=await(await fetch(`${te}/api/reminders/${N}`,{method:"PUT"})).json();c(a.map(B=>B.id===N?D:B))}catch(_){console.error("Error toggling task completion:",_)}},L=async N=>{try{await fetch(`${te}/api/reminders/${N}`,{method:"DELETE"}),c(a.filter(_=>_.id!==N))}catch(_){console.error("Error removing task:",_)}},E=async N=>{try{const D=await(await fetch(`${te}/api/jobs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();d([D,...o]),v(B=>({...B,[D.id]:[]}))}catch(_){console.error("Error posting maintenance ticket:",_)}},x=async(N,_)=>{try{const B=await(await fetch(`${te}/api/jobs/${N}/accept-bid`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bid:_})})).json();d(o.map(de=>de.id===N?B:de))}catch(D){console.error("Error hiring contractor:",D)}},O=async N=>{try{const D=await(await fetch(`${te}/api/group-deals/${N}/toggle`,{method:"POST"})).json();j(h.map(B=>B.id===N?D:B))}catch(_){console.error("Error toggling collective pool:",_)}},I=async N=>{try{const D=await(await fetch(`${te}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();w([D,...b])}catch(_){console.error("Error posting feedback reviews:",_)}},P=()=>{switch(e){case"landing":return l.jsx(cc,{subscription:r,setSubscription:M,setActiveTab:t});case"dashboard":return l.jsx(Fm,{properties:i,reminders:a,jobs:o,groupDeals:h,setActiveTab:t});case"properties":return l.jsx($m,{properties:i,onAddProperty:p,onUpdateProperty:u,onDeleteProperty:m});case"crowdsource":return l.jsx(Om,{properties:i,jobs:o,onAddJob:E,bids:y,onAcceptBid:x,groupDeals:h,onToggleGroupDeal:O});case"reminders":return l.jsx(Dm,{properties:i,reminders:a,onAddReminder:g,onToggleReminder:C,onDeleteReminder:L});case"feedback":return l.jsx(Am,{feedback:b,onAddFeedback:I});default:return l.jsx(cc,{subscription:r,setSubscription:M,setActiveTab:t})}};return l.jsxs("div",{className:"app-container",children:[l.jsx(Im,{activeTab:e,setActiveTab:t,subscription:r}),l.jsx("main",{className:"main-content",children:P()})]})}zi.createRoot(document.getElementById("root")).render(l.jsx(Nf.StrictMode,{children:l.jsx(Um,{})}));
