(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function af(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},Ll={},dc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),of=Symbol.for("react.portal"),cf=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),pf=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),gf=Symbol.for("react.memo"),vf=Symbol.for("react.lazy"),qa=Symbol.iterator;function xf(e){return e===null||typeof e!="object"?null:(e=qa&&e[qa]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pc=Object.assign,mc={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=mc,this.updater=n||fc}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hc(){}hc.prototype=Nn.prototype;function ks(e,t,n){this.props=e,this.context=t,this.refs=mc,this.updater=n||fc}var Ns=ks.prototype=new hc;Ns.constructor=ks;pc(Ns,Nn.prototype);Ns.isPureReactComponent=!0;var eo=Array.isArray,gc=Object.prototype.hasOwnProperty,Ss={current:null},vc={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)gc.call(t,r)&&!vc.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var o=Array(c),d=0;d<c;d++)o[d]=arguments[d+2];i.children=o}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:mr,type:e,key:s,ref:a,props:i,_owner:Ss.current}}function yf(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function wf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var to=/\/+/g;function ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wf(""+e.key):t.toString(36)}function Kr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mr:case of:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ri(a,0):r,eo(i)?(n="",e!=null&&(n=e.replace(to,"$&/")+"/"),Kr(i,t,n,"",function(d){return d})):i!=null&&(bs(i)&&(i=yf(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(to,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",eo(e))for(var c=0;c<e.length;c++){s=e[c];var o=r+ri(s,c);a+=Kr(s,t,n,o,i)}else if(o=xf(e),typeof o=="function")for(e=o.call(e),c=0;!(s=e.next()).done;)s=s.value,o=r+ri(s,c++),a+=Kr(s,t,n,o,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Tr(e,t,n){if(e==null)return e;var r=[],i=0;return Kr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function jf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Gr={transition:null},kf={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Gr,ReactCurrentOwner:Ss};function yc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Nn;A.Fragment=cf;A.Profiler=df;A.PureComponent=ks;A.StrictMode=uf;A.Suspense=hf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf;A.act=yc;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pc({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ss.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(o in t)gc.call(t,o)&&!vc.hasOwnProperty(o)&&(r[o]=t[o]===void 0&&c!==void 0?c[o]:t[o])}var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){c=Array(o);for(var d=0;d<o;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:mr,type:e.type,key:i,ref:s,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ff,_context:e},e.Consumer=e};A.createElement=xc;A.createFactory=function(e){var t=xc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:mf,render:e}};A.isValidElement=bs;A.lazy=function(e){return{$$typeof:vf,_payload:{_status:-1,_result:e},_init:jf}};A.memo=function(e,t){return{$$typeof:gf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Gr.transition;Gr.transition={};try{e()}finally{Gr.transition=t}};A.unstable_act=yc;A.useCallback=function(e,t){return xe.current.useCallback(e,t)};A.useContext=function(e){return xe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};A.useEffect=function(e,t){return xe.current.useEffect(e,t)};A.useId=function(){return xe.current.useId()};A.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return xe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};A.useRef=function(e){return xe.current.useRef(e)};A.useState=function(e){return xe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return xe.current.useTransition()};A.version="18.3.1";dc.exports=A;var S=dc.exports;const Nf=af(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=S,bf=Symbol.for("react.element"),Cf=Symbol.for("react.fragment"),Pf=Object.prototype.hasOwnProperty,Ef=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zf={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Pf.call(t,r)&&!zf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bf,type:e,key:s,ref:a,props:i,_owner:Ef.current}}Ll.Fragment=Cf;Ll.jsx=wc;Ll.jsxs=wc;uc.exports=Ll;var l=uc.exports,zi={},jc={exports:{}},ze={},kc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var $=z.length;z.push(F);e:for(;0<$;){var K=$-1>>>1,ee=z[K];if(0<i(ee,F))z[K]=F,z[$]=ee,$=K;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var F=z[0],$=z.pop();if($!==F){z[0]=$;e:for(var K=0,ee=z.length,Mt=ee>>>1;K<Mt;){var qe=2*(K+1)-1,Cn=z[qe],Oe=qe+1,et=z[Oe];if(0>i(Cn,$))Oe<ee&&0>i(et,Cn)?(z[K]=et,z[Oe]=$,K=Oe):(z[K]=Cn,z[qe]=$,K=qe);else if(Oe<ee&&0>i(et,$))z[K]=et,z[Oe]=$,K=Oe;else break e}}return F}function i(z,F){var $=z.sortIndex-F.sortIndex;return $!==0?$:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var o=[],d=[],y=1,v=null,h=3,j=!1,b=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var F=n(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=z)r(d),F.sortIndex=F.expirationTime,t(o,F);else break;F=n(d)}}function g(z){if(w=!1,m(z),!b)if(n(o)!==null)b=!0,de(C);else{var F=n(d);F!==null&&ft(g,F.startTime-z)}}function C(z,F){b=!1,w&&(w=!1,p(x),x=-1),j=!0;var $=h;try{for(m(F),v=n(o);v!==null&&(!(v.expirationTime>F)||z&&!P());){var K=v.callback;if(typeof K=="function"){v.callback=null,h=v.priorityLevel;var ee=K(v.expirationTime<=F);F=e.unstable_now(),typeof ee=="function"?v.callback=ee:v===n(o)&&r(o),m(F)}else r(o);v=n(o)}if(v!==null)var Mt=!0;else{var qe=n(d);qe!==null&&ft(g,qe.startTime-F),Mt=!1}return Mt}finally{v=null,h=$,j=!1}}var L=!1,E=null,x=-1,O=5,I=-1;function P(){return!(e.unstable_now()-I<O)}function N(){if(E!==null){var z=e.unstable_now();I=z;var F=!0;try{F=E(!0,z)}finally{F?_():(L=!1,E=null)}}else L=!1}var _;if(typeof u=="function")_=function(){u(N)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,B=D.port2;D.port1.onmessage=N,_=function(){B.postMessage(null)}}else _=function(){M(N,0)};function de(z){E=z,L||(L=!0,_())}function ft(z,F){x=M(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){b||j||(b=!0,de(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var $=h;h=F;try{return z()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=h;h=z;try{return F()}finally{h=$}},e.unstable_scheduleCallback=function(z,F,$){var K=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?K+$:K):$=K,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,z={id:y++,callback:F,priorityLevel:z,startTime:$,expirationTime:ee,sortIndex:-1},$>K?(z.sortIndex=$,t(d,z),n(o)===null&&z===n(d)&&(w?(p(x),x=-1):w=!0,ft(g,$-K))):(z.sortIndex=ee,t(o,z),b||j||(b=!0,de(C))),z},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(z){var F=h;return function(){var $=h;h=F;try{return z.apply(this,arguments)}finally{h=$}}}})(Nc);kc.exports=Nc;var Lf=kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=S,Ee=Lf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sc=new Set,Jn={};function Yt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)Sc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=Object.prototype.hasOwnProperty,Rf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,no={},ro={};function _f(e){return Li.call(ro,e)?!0:Li.call(no,e)?!1:Rf.test(e)?ro[e]=!0:(no[e]=!0,!1)}function Mf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,t,n,r){if(t===null||typeof t>"u"||Mf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cs=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cs,Ps);ue[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cs,Ps);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cs,Ps);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(If(t,n,i,r)&&(n=null),r||i===null?_f(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),zs=Symbol.for("react.strict_mode"),Ti=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Ls=Symbol.for("react.forward_ref"),Ri=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Pc=Symbol.for("react.offscreen"),lo=Symbol.iterator;function Ln(e){return e===null||typeof e!="object"?null:(e=lo&&e[lo]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,li;function On(e){if(li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);li=t&&t[1]||""}return`
`+li+e}var ii=!1;function si(e,t){if(!e||ii)return"";ii=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,c=s.length-1;1<=a&&0<=c&&i[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==s[c]){var o=`
`+i[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=c);break}}}finally{ii=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function Ff(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=si(e.type,!1),e;case 11:return e=si(e.type.render,!1),e;case 1:return e=si(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Jt:return"Portal";case Ti:return"Profiler";case zs:return"StrictMode";case Ri:return"Suspense";case _i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cc:return(e.displayName||"Context")+".Consumer";case bc:return(e._context.displayName||"Context")+".Provider";case Ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return t=e.displayName||null,t!==null?t:Mi(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return Mi(e(t))}catch{}}return null}function $f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(t);case 8:return t===zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Of(e){var t=Ec(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=Of(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ec(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function io(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lc(e,t){t=t.checked,t!=null&&Es(e,"checked",t,!1)}function Fi(e,t){Lc(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$i(e,t.type,n):t.hasOwnProperty("defaultValue")&&$i(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function so(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $i(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ao(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Dn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Tc(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function oo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,_c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Df=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Df.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Mc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Ic(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Af=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,t){if(t){if(Af[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,dn=null,fn=null;function co(e){if(e=vr(e)){if(typeof Hi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Il(t),Hi(e.stateNode,e.type,t))}}function Fc(e){dn?fn?fn.push(e):fn=[e]:dn=e}function $c(){if(dn){var e=dn,t=fn;if(fn=dn=null,co(e),t)for(e=0;e<t.length;e++)co(t[e])}}function Oc(e,t){return e(t)}function Dc(){}var ai=!1;function Ac(e,t,n){if(ai)return e(t,n);ai=!0;try{return Oc(e,t,n)}finally{ai=!1,(dn!==null||fn!==null)&&(Dc(),$c())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Vi=!1;if(at)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Vi=!1}function Uf(e,t,n,r,i,s,a,c,o){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Hn=!1,al=null,ol=!1,Wi=null,Bf={onError:function(e){Hn=!0,al=e}};function Hf(e,t,n,r,i,s,a,c,o){Hn=!1,al=null,Uf.apply(Bf,arguments)}function Vf(e,t,n,r,i,s,a,c,o){if(Hf.apply(this,arguments),Hn){if(Hn){var d=al;Hn=!1,al=null}else throw Error(k(198));ol||(ol=!0,Wi=d)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uo(e){if(Kt(e)!==e)throw Error(k(188))}function Wf(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return uo(i),e;if(s===r)return uo(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=s;break}if(c===r){a=!0,r=i,n=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===n){a=!0,n=s,r=i;break}if(c===r){a=!0,r=s,n=i;break}c=c.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Bc(e){return e=Wf(e),e!==null?Hc(e):null}function Hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hc(e);if(t!==null)return t;e=e.sibling}return null}var Vc=Ee.unstable_scheduleCallback,fo=Ee.unstable_cancelCallback,Qf=Ee.unstable_shouldYield,Yf=Ee.unstable_requestPaint,ne=Ee.unstable_now,Kf=Ee.unstable_getCurrentPriorityLevel,_s=Ee.unstable_ImmediatePriority,Wc=Ee.unstable_UserBlockingPriority,cl=Ee.unstable_NormalPriority,Gf=Ee.unstable_LowPriority,Qc=Ee.unstable_IdlePriority,Tl=null,Je=null;function Xf(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:qf,Jf=Math.log,Zf=Math.LN2;function qf(e){return e>>>=0,e===0?32:31-(Jf(e)/Zf|0)|0}var Ir=64,Fr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=An(c):(s&=a,s!==0&&(r=An(s)))}else a=n&~i,a!==0?r=An(a):s!==0&&(r=An(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),i=1<<n,r|=e[n],t&=~i;return r}function ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-We(s),c=1<<a,o=i[a];o===-1?(!(c&n)||c&r)&&(i[a]=ep(c,t)):o<=t&&(e.expiredLanes|=c),s&=~c}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function oi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function np(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-We(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ms(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gc,Is,Xc,Jc,Zc,Yi=!1,$r=[],jt=null,kt=null,Nt=null,er=new Map,tr=new Map,vt=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function po(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function Rn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=vr(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lp(e,t,n,r,i){switch(t){case"focusin":return jt=Rn(jt,e,t,n,r,i),!0;case"dragenter":return kt=Rn(kt,e,t,n,r,i),!0;case"mouseover":return Nt=Rn(Nt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return er.set(s,Rn(er.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,tr.set(s,Rn(tr.get(s)||null,e,t,n,r,i)),!0}return!1}function qc(e){var t=$t(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Uc(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Xc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bi=r,n.target.dispatchEvent(r),Bi=null}else return t=vr(n),t!==null&&Is(t),e.blockedOn=n,!1;t.shift()}return!0}function mo(e,t,n){Xr(e)&&n.delete(t)}function ip(){Yi=!1,jt!==null&&Xr(jt)&&(jt=null),kt!==null&&Xr(kt)&&(kt=null),Nt!==null&&Xr(Nt)&&(Nt=null),er.forEach(mo),tr.forEach(mo)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,Yi||(Yi=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,ip)))}function nr(e){function t(i){return _n(i,e)}if(0<$r.length){_n($r[0],e);for(var n=1;n<$r.length;n++){var r=$r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&_n(jt,e),kt!==null&&_n(kt,e),Nt!==null&&_n(Nt,e),er.forEach(t),tr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)qc(n),n.blockedOn===null&&vt.shift()}var pn=dt.ReactCurrentBatchConfig,dl=!0;function sp(e,t,n,r){var i=H,s=pn.transition;pn.transition=null;try{H=1,Fs(e,t,n,r)}finally{H=i,pn.transition=s}}function ap(e,t,n,r){var i=H,s=pn.transition;pn.transition=null;try{H=4,Fs(e,t,n,r)}finally{H=i,pn.transition=s}}function Fs(e,t,n,r){if(dl){var i=Ki(e,t,n,r);if(i===null)xi(e,t,r,fl,n),po(e,r);else if(lp(i,e,t,n,r))r.stopPropagation();else if(po(e,r),t&4&&-1<rp.indexOf(e)){for(;i!==null;){var s=vr(i);if(s!==null&&Gc(s),s=Ki(e,t,n,r),s===null&&xi(e,t,r,fl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xi(e,t,r,null,n)}}var fl=null;function Ki(e,t,n,r){if(fl=null,e=Rs(r),e=$t(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fl=e,null}function eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kf()){case _s:return 1;case Wc:return 4;case cl:case Gf:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var yt=null,$s=null,Jr=null;function tu(){if(Jr)return Jr;var e,t=$s,n=t.length,r,i="value"in yt?yt.value:yt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Jr=i.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function ho(){return!1}function Le(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Or:ho,this.isPropagationStopped=ho,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Le(Sn),gr=Z({},Sn,{view:0,detail:0}),op=Le(gr),ci,ui,Mn,Rl=Z({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(ci=e.screenX-Mn.screenX,ui=e.screenY-Mn.screenY):ui=ci=0,Mn=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:ui}}),go=Le(Rl),cp=Z({},Rl,{dataTransfer:0}),up=Le(cp),dp=Z({},gr,{relatedTarget:0}),di=Le(dp),fp=Z({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=Le(fp),mp=Z({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Le(mp),gp=Z({},Sn,{data:0}),vo=Le(gp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function Ds(){return wp}var jp=Z({},gr,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=Le(jp),Np=Z({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Le(Np),Sp=Z({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),bp=Le(Sp),Cp=Z({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=Le(Cp),Ep=Z({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=Le(Ep),Lp=[9,13,27,32],As=at&&"CompositionEvent"in window,Vn=null;at&&"documentMode"in document&&(Vn=document.documentMode);var Tp=at&&"TextEvent"in window&&!Vn,nu=at&&(!As||Vn&&8<Vn&&11>=Vn),yo=" ",wo=!1;function ru(e,t){switch(e){case"keyup":return Lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Rp(e,t){switch(e){case"compositionend":return lu(t);case"keypress":return t.which!==32?null:(wo=!0,yo);case"textInput":return e=t.data,e===yo&&wo?null:e;default:return null}}function _p(e,t){if(qt)return e==="compositionend"||!As&&ru(e,t)?(e=tu(),Jr=$s=yt=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nu&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function iu(e,t,n,r){Fc(r),t=pl(t,"onChange"),0<t.length&&(n=new Os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,rr=null;function Ip(e){gu(e,0)}function _l(e){var t=nn(e);if(zc(t))return e}function Fp(e,t){if(e==="change")return t}var su=!1;if(at){var fi;if(at){var pi="oninput"in document;if(!pi){var ko=document.createElement("div");ko.setAttribute("oninput","return;"),pi=typeof ko.oninput=="function"}fi=pi}else fi=!1;su=fi&&(!document.documentMode||9<document.documentMode)}function No(){Wn&&(Wn.detachEvent("onpropertychange",au),rr=Wn=null)}function au(e){if(e.propertyName==="value"&&_l(rr)){var t=[];iu(t,rr,e,Rs(e)),Ac(Ip,t)}}function $p(e,t,n){e==="focusin"?(No(),Wn=t,rr=n,Wn.attachEvent("onpropertychange",au)):e==="focusout"&&No()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(rr)}function Dp(e,t){if(e==="click")return _l(t)}function Ap(e,t){if(e==="input"||e==="change")return _l(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Up;function lr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Li.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function So(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bo(e,t){var n=So(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=So(n)}}function ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cu(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bp(e){var t=cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ou(n.ownerDocument.documentElement,n)){if(r!==null&&Us(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=bo(n,s);var a=bo(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hp=at&&"documentMode"in document&&11>=document.documentMode,en=null,Gi=null,Qn=null,Xi=!1;function Co(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xi||en==null||en!==sl(r)||(r=en,"selectionStart"in r&&Us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&lr(Qn,r)||(Qn=r,r=pl(Gi,"onSelect"),0<r.length&&(t=new Os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},mi={},uu={};at&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ml(e){if(mi[e])return mi[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uu)return mi[e]=t[n];return e}var du=Ml("animationend"),fu=Ml("animationiteration"),pu=Ml("animationstart"),mu=Ml("transitionend"),hu=new Map,Po="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){hu.set(e,t),Yt(t,[e])}for(var hi=0;hi<Po.length;hi++){var gi=Po[hi],Vp=gi.toLowerCase(),Wp=gi[0].toUpperCase()+gi.slice(1);Tt(Vp,"on"+Wp)}Tt(du,"onAnimationEnd");Tt(fu,"onAnimationIteration");Tt(pu,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(mu,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));function Eo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vf(r,t,void 0,e),e.currentTarget=null}function gu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],o=c.instance,d=c.currentTarget;if(c=c.listener,o!==s&&i.isPropagationStopped())break e;Eo(i,c,d),s=o}else for(a=0;a<r.length;a++){if(c=r[a],o=c.instance,d=c.currentTarget,c=c.listener,o!==s&&i.isPropagationStopped())break e;Eo(i,c,d),s=o}}}if(ol)throw e=Wi,ol=!1,Wi=null,e}function Q(e,t){var n=t[ts];n===void 0&&(n=t[ts]=new Set);var r=e+"__bubble";n.has(r)||(vu(t,e,2,!1),n.add(r))}function vi(e,t,n){var r=0;t&&(r|=4),vu(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Ar]){e[Ar]=!0,Sc.forEach(function(n){n!=="selectionchange"&&(Qp.has(n)||vi(n,!1,e),vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,vi("selectionchange",!1,t))}}function vu(e,t,n,r){switch(eu(t)){case 1:var i=sp;break;case 4:i=ap;break;default:i=Fs}n=i.bind(null,t,n,e),i=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xi(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;a=a.return}for(;c!==null;){if(a=$t(c),a===null)return;if(o=a.tag,o===5||o===6){r=s=a;continue e}c=c.parentNode}}r=r.return}Ac(function(){var d=s,y=Rs(n),v=[];e:{var h=hu.get(e);if(h!==void 0){var j=Os,b=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":j=kp;break;case"focusin":b="focus",j=di;break;case"focusout":b="blur",j=di;break;case"beforeblur":case"afterblur":j=di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=bp;break;case du:case fu:case pu:j=pp;break;case mu:j=Pp;break;case"scroll":j=op;break;case"wheel":j=zp;break;case"copy":case"cut":case"paste":j=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=xo}var w=(t&4)!==0,M=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var u=d,m;u!==null;){m=u;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,p!==null&&(g=qn(u,p),g!=null&&w.push(sr(u,g,m)))),M)break;u=u.return}0<w.length&&(h=new j(h,b,null,n,y),v.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",h&&n!==Bi&&(b=n.relatedTarget||n.fromElement)&&($t(b)||b[ot]))break e;if((j||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,j?(b=n.relatedTarget||n.toElement,j=d,b=b?$t(b):null,b!==null&&(M=Kt(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(j=null,b=d),j!==b)){if(w=go,g="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=xo,g="onPointerLeave",p="onPointerEnter",u="pointer"),M=j==null?h:nn(j),m=b==null?h:nn(b),h=new w(g,u+"leave",j,n,y),h.target=M,h.relatedTarget=m,g=null,$t(y)===d&&(w=new w(p,u+"enter",b,n,y),w.target=m,w.relatedTarget=M,g=w),M=g,j&&b)t:{for(w=j,p=b,u=0,m=w;m;m=Xt(m))u++;for(m=0,g=p;g;g=Xt(g))m++;for(;0<u-m;)w=Xt(w),u--;for(;0<m-u;)p=Xt(p),m--;for(;u--;){if(w===p||p!==null&&w===p.alternate)break t;w=Xt(w),p=Xt(p)}w=null}else w=null;j!==null&&zo(v,h,j,w,!1),b!==null&&M!==null&&zo(v,M,b,w,!0)}}e:{if(h=d?nn(d):window,j=h.nodeName&&h.nodeName.toLowerCase(),j==="select"||j==="input"&&h.type==="file")var C=Fp;else if(jo(h))if(su)C=Ap;else{C=Op;var L=$p}else(j=h.nodeName)&&j.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Dp);if(C&&(C=C(e,d))){iu(v,C,n,y);break e}L&&L(e,h,d),e==="focusout"&&(L=h._wrapperState)&&L.controlled&&h.type==="number"&&$i(h,"number",h.value)}switch(L=d?nn(d):window,e){case"focusin":(jo(L)||L.contentEditable==="true")&&(en=L,Gi=d,Qn=null);break;case"focusout":Qn=Gi=en=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Co(v,n,y);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":Co(v,n,y)}var E;if(As)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else qt?ru(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(nu&&n.locale!=="ko"&&(qt||x!=="onCompositionStart"?x==="onCompositionEnd"&&qt&&(E=tu()):(yt=y,$s="value"in yt?yt.value:yt.textContent,qt=!0)),L=pl(d,x),0<L.length&&(x=new vo(x,e,null,n,y),v.push({event:x,listeners:L}),E?x.data=E:(E=lu(n),E!==null&&(x.data=E)))),(E=Tp?Rp(e,n):_p(e,n))&&(d=pl(d,"onBeforeInput"),0<d.length&&(y=new vo("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:d}),y.data=E))}gu(v,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qn(e,n),s!=null&&r.unshift(sr(e,s,i)),s=qn(e,t),s!=null&&r.push(sr(e,s,i))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zo(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var c=n,o=c.alternate,d=c.stateNode;if(o!==null&&o===r)break;c.tag===5&&d!==null&&(c=d,i?(o=qn(n,s),o!=null&&a.unshift(sr(n,o,c))):i||(o=qn(n,s),o!=null&&a.push(sr(n,o,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Yp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function Lo(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Kp,"")}function Ur(e,t,n){if(t=Lo(t),Lo(e)!==t&&n)throw Error(k(425))}function ml(){}var Ji=null,Zi=null;function qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,To=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof To<"u"?function(e){return To.resolve(null).then(e).catch(Jp)}:es;function Jp(e){setTimeout(function(){throw e})}function yi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);nr(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ro(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+bn,ar="__reactProps$"+bn,ot="__reactContainer$"+bn,ts="__reactEvents$"+bn,Zp="__reactListeners$"+bn,qp="__reactHandles$"+bn;function $t(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ro(e);e!==null;){if(n=e[Xe])return n;e=Ro(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Xe]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Il(e){return e[ar]||null}var ns=[],rn=-1;function Rt(e){return{current:e}}function Y(e){0>rn||(e.current=ns[rn],ns[rn]=null,rn--)}function W(e,t){rn++,ns[rn]=e.current,e.current=t}var Lt={},he=Rt(Lt),ke=Rt(!1),Bt=Lt;function vn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function hl(){Y(ke),Y(he)}function _o(e,t,n){if(he.current!==Lt)throw Error(k(168));W(he,t),W(ke,n)}function xu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,$f(e)||"Unknown",i));return Z({},n,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Bt=he.current,W(he,e),W(ke,ke.current),!0}function Mo(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=xu(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,Y(ke),Y(he),W(he,e)):Y(ke),W(ke,n)}var rt=null,Fl=!1,wi=!1;function yu(e){rt===null?rt=[e]:rt.push(e)}function em(e){Fl=!0,yu(e)}function _t(){if(!wi&&rt!==null){wi=!0;var e=0,t=H;try{var n=rt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Fl=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),Vc(_s,_t),i}finally{H=t,wi=!1}}return null}var ln=[],sn=0,vl=null,xl=0,Re=[],_e=0,Ht=null,lt=1,it="";function It(e,t){ln[sn++]=xl,ln[sn++]=vl,vl=e,xl=t}function wu(e,t,n){Re[_e++]=lt,Re[_e++]=it,Re[_e++]=Ht,Ht=e;var r=lt;e=it;var i=32-We(r)-1;r&=~(1<<i),n+=1;var s=32-We(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,lt=1<<32-We(t)+i|n<<i|r,it=s+e}else lt=1<<s|n<<i|r,it=e}function Bs(e){e.return!==null&&(It(e,1),wu(e,1,0))}function Hs(e){for(;e===vl;)vl=ln[--sn],ln[sn]=null,xl=ln[--sn],ln[sn]=null;for(;e===Ht;)Ht=Re[--_e],Re[_e]=null,it=Re[--_e],Re[_e]=null,lt=Re[--_e],Re[_e]=null}var Pe=null,Ce=null,G=!1,Ve=null;function ju(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Io(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Ce=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:lt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Ce=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(G){var t=Ce;if(t){var n=t;if(!Io(e,t)){if(rs(e))throw Error(k(418));t=St(n.nextSibling);var r=Pe;t&&Io(e,t)?ju(r,n):(e.flags=e.flags&-4097|2,G=!1,Pe=e)}}else{if(rs(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Pe=e}}}function Fo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Br(e){if(e!==Pe)return!1;if(!G)return Fo(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qi(e.type,e.memoizedProps)),t&&(t=Ce)){if(rs(e))throw ku(),Error(k(418));for(;t;)ju(e,t),t=St(t.nextSibling)}if(Fo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Pe?St(e.stateNode.nextSibling):null;return!0}function ku(){for(var e=Ce;e;)e=St(e.nextSibling)}function xn(){Ce=Pe=null,G=!1}function Vs(e){Ve===null?Ve=[e]:Ve.push(e)}var tm=dt.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var c=i.refs;a===null?delete c[s]:c[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Hr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $o(e){var t=e._init;return t(e._payload)}function Nu(e){function t(p,u){if(e){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=Et(p,u),p.index=0,p.sibling=null,p}function s(p,u,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=2,u):m):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function c(p,u,m,g){return u===null||u.tag!==6?(u=Pi(m,p.mode,g),u.return=p,u):(u=i(u,m),u.return=p,u)}function o(p,u,m,g){var C=m.type;return C===Zt?y(p,u,m.props.children,g,m.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&$o(C)===u.type)?(g=i(u,m.props),g.ref=In(p,u,m),g.return=p,g):(g=il(m.type,m.key,m.props,null,p.mode,g),g.ref=In(p,u,m),g.return=p,g)}function d(p,u,m,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Ei(m,p.mode,g),u.return=p,u):(u=i(u,m.children||[]),u.return=p,u)}function y(p,u,m,g,C){return u===null||u.tag!==7?(u=Ut(m,p.mode,g,C),u.return=p,u):(u=i(u,m),u.return=p,u)}function v(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Pi(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Rr:return m=il(u.type,u.key,u.props,null,p.mode,m),m.ref=In(p,null,u),m.return=p,m;case Jt:return u=Ei(u,p.mode,m),u.return=p,u;case ht:var g=u._init;return v(p,g(u._payload),m)}if(Dn(u)||Ln(u))return u=Ut(u,p.mode,m,null),u.return=p,u;Hr(p,u)}return null}function h(p,u,m,g){var C=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:c(p,u,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Rr:return m.key===C?o(p,u,m,g):null;case Jt:return m.key===C?d(p,u,m,g):null;case ht:return C=m._init,h(p,u,C(m._payload),g)}if(Dn(m)||Ln(m))return C!==null?null:y(p,u,m,g,null);Hr(p,m)}return null}function j(p,u,m,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(m)||null,c(u,p,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Rr:return p=p.get(g.key===null?m:g.key)||null,o(u,p,g,C);case Jt:return p=p.get(g.key===null?m:g.key)||null,d(u,p,g,C);case ht:var L=g._init;return j(p,u,m,L(g._payload),C)}if(Dn(g)||Ln(g))return p=p.get(m)||null,y(u,p,g,C,null);Hr(u,g)}return null}function b(p,u,m,g){for(var C=null,L=null,E=u,x=u=0,O=null;E!==null&&x<m.length;x++){E.index>x?(O=E,E=null):O=E.sibling;var I=h(p,E,m[x],g);if(I===null){E===null&&(E=O);break}e&&E&&I.alternate===null&&t(p,E),u=s(I,u,x),L===null?C=I:L.sibling=I,L=I,E=O}if(x===m.length)return n(p,E),G&&It(p,x),C;if(E===null){for(;x<m.length;x++)E=v(p,m[x],g),E!==null&&(u=s(E,u,x),L===null?C=E:L.sibling=E,L=E);return G&&It(p,x),C}for(E=r(p,E);x<m.length;x++)O=j(E,p,x,m[x],g),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?x:O.key),u=s(O,u,x),L===null?C=O:L.sibling=O,L=O);return e&&E.forEach(function(P){return t(p,P)}),G&&It(p,x),C}function w(p,u,m,g){var C=Ln(m);if(typeof C!="function")throw Error(k(150));if(m=C.call(m),m==null)throw Error(k(151));for(var L=C=null,E=u,x=u=0,O=null,I=m.next();E!==null&&!I.done;x++,I=m.next()){E.index>x?(O=E,E=null):O=E.sibling;var P=h(p,E,I.value,g);if(P===null){E===null&&(E=O);break}e&&E&&P.alternate===null&&t(p,E),u=s(P,u,x),L===null?C=P:L.sibling=P,L=P,E=O}if(I.done)return n(p,E),G&&It(p,x),C;if(E===null){for(;!I.done;x++,I=m.next())I=v(p,I.value,g),I!==null&&(u=s(I,u,x),L===null?C=I:L.sibling=I,L=I);return G&&It(p,x),C}for(E=r(p,E);!I.done;x++,I=m.next())I=j(E,p,x,I.value,g),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?x:I.key),u=s(I,u,x),L===null?C=I:L.sibling=I,L=I);return e&&E.forEach(function(N){return t(p,N)}),G&&It(p,x),C}function M(p,u,m,g){if(typeof m=="object"&&m!==null&&m.type===Zt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Rr:e:{for(var C=m.key,L=u;L!==null;){if(L.key===C){if(C=m.type,C===Zt){if(L.tag===7){n(p,L.sibling),u=i(L,m.props.children),u.return=p,p=u;break e}}else if(L.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&$o(C)===L.type){n(p,L.sibling),u=i(L,m.props),u.ref=In(p,L,m),u.return=p,p=u;break e}n(p,L);break}else t(p,L);L=L.sibling}m.type===Zt?(u=Ut(m.props.children,p.mode,g,m.key),u.return=p,p=u):(g=il(m.type,m.key,m.props,null,p.mode,g),g.ref=In(p,u,m),g.return=p,p=g)}return a(p);case Jt:e:{for(L=m.key;u!==null;){if(u.key===L)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(p,u.sibling),u=i(u,m.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Ei(m,p.mode,g),u.return=p,p=u}return a(p);case ht:return L=m._init,M(p,u,L(m._payload),g)}if(Dn(m))return b(p,u,m,g);if(Ln(m))return w(p,u,m,g);Hr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,m),u.return=p,p=u):(n(p,u),u=Pi(m,p.mode,g),u.return=p,p=u),a(p)):n(p,u)}return M}var yn=Nu(!0),Su=Nu(!1),yl=Rt(null),wl=null,an=null,Ws=null;function Qs(){Ws=an=wl=null}function Ys(e){var t=yl.current;Y(yl),e._currentValue=t}function is(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mn(e,t){wl=e,Ws=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Ws!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(wl===null)throw Error(k(308));an=e,wl.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Ot=null;function Ks(e){Ot===null?Ot=[e]:Ot.push(e)}function bu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ks(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Ks(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ms(e,n)}}function Oo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,r){var i=e.updateQueue;gt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var o=c,d=o.next;o.next=null,a===null?s=d:a.next=d,a=o;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==a&&(c===null?y.firstBaseUpdate=d:c.next=d,y.lastBaseUpdate=o))}if(s!==null){var v=i.baseState;a=0,y=d=o=null,c=s;do{var h=c.lane,j=c.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,w=c;switch(h=t,j=n,w.tag){case 1:if(b=w.payload,typeof b=="function"){v=b.call(j,v,h);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,h=typeof b=="function"?b.call(j,v,h):b,h==null)break e;v=Z({},v,h);break e;case 2:gt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[c]:h.push(c))}else j={eventTime:j,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(d=y=j,o=v):y=y.next=j,a|=h;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;h=c,c=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(o=v),i.baseState=o,i.firstBaseUpdate=d,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=v}}function Do(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var xr={},Ze=Rt(xr),or=Rt(xr),cr=Rt(xr);function Dt(e){if(e===xr)throw Error(k(174));return e}function Xs(e,t){switch(W(cr,t),W(or,e),W(Ze,xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}Y(Ze),W(Ze,t)}function wn(){Y(Ze),Y(or),Y(cr)}function Pu(e){Dt(cr.current);var t=Dt(Ze.current),n=Di(t,e.type);t!==n&&(W(or,e),W(Ze,n))}function Js(e){or.current===e&&(Y(Ze),Y(or))}var X=Rt(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function Zs(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var el=dt.ReactCurrentDispatcher,ki=dt.ReactCurrentBatchConfig,Vt=0,J=null,le=null,se=null,Nl=!1,Yn=!1,ur=0,nm=0;function fe(){throw Error(k(321))}function qs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function ea(e,t,n,r,i,s){if(Vt=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,el.current=e===null||e.memoizedState===null?sm:am,e=n(r,i),Yn){s=0;do{if(Yn=!1,ur=0,25<=s)throw Error(k(301));s+=1,se=le=null,t.updateQueue=null,el.current=om,e=n(r,i)}while(Yn)}if(el.current=Sl,t=le!==null&&le.next!==null,Vt=0,se=le=J=null,Nl=!1,t)throw Error(k(300));return e}function ta(){var e=ur!==0;return ur=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function $e(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=se===null?J.memoizedState:se.next;if(t!==null)se=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function dr(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=$e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=a=null,o=null,d=s;do{var y=d.lane;if((Vt&y)===y)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(c=o=v,a=r):o=o.next=v,J.lanes|=y,Wt|=y}d=d.next}while(d!==null&&d!==s);o===null?a=r:o.next=c,Ye(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=o,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,Wt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=$e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Ye(s,t.memoizedState)||(je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Eu(){}function zu(e,t){var n=J,r=$e(),i=t(),s=!Ye(r.memoizedState,i);if(s&&(r.memoizedState=i,je=!0),r=r.queue,na(Ru.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,fr(9,Tu.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));Vt&30||Lu(n,t,i)}return i}function Lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tu(e,t,n,r){t.value=n,t.getSnapshot=r,_u(t)&&Mu(e)}function Ru(e,t,n){return n(function(){_u(t)&&Mu(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function Mu(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function Ao(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=im.bind(null,J,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Iu(){return $e().memoizedState}function tl(e,t,n,r){var i=Ge();J.flags|=e,i.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function $l(e,t,n,r){var i=$e();r=r===void 0?null:r;var s=void 0;if(le!==null){var a=le.memoizedState;if(s=a.destroy,r!==null&&qs(r,a.deps)){i.memoizedState=fr(t,n,s,r);return}}J.flags|=e,i.memoizedState=fr(1|t,n,s,r)}function Uo(e,t){return tl(8390656,8,e,t)}function na(e,t){return $l(2048,8,e,t)}function Fu(e,t){return $l(4,2,e,t)}function $u(e,t){return $l(4,4,e,t)}function Ou(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Du(e,t,n){return n=n!=null?n.concat([e]):null,$l(4,4,Ou.bind(null,t,e),n)}function ra(){}function Au(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uu(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bu(e,t,n){return Vt&21?(Ye(n,t)||(n=Yc(),J.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function rm(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=ki.transition;ki.transition={};try{e(!1),t()}finally{H=n,ki.transition=r}}function Hu(){return $e().memoizedState}function lm(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vu(e))Wu(t,n);else if(n=bu(e,t,n,r),n!==null){var i=ve();Qe(n,e,r,i),Qu(n,t,r)}}function im(e,t,n){var r=Pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Wu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,c=s(a,n);if(i.hasEagerState=!0,i.eagerState=c,Ye(c,a)){var o=t.interleaved;o===null?(i.next=i,Ks(t)):(i.next=o.next,o.next=i),t.interleaved=i;return}}catch{}finally{}n=bu(e,t,i,r),n!==null&&(i=ve(),Qe(n,e,r,i),Qu(n,t,r))}}function Vu(e){var t=e.alternate;return e===J||t!==null&&t===J}function Wu(e,t){Yn=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ms(e,n)}}var Sl={readContext:Fe,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},sm={readContext:Fe,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Uo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,tl(4194308,4,Ou.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lm.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Ao,useDebugValue:ra,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=rm.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=Ge();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));Vt&30||Lu(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Uo(Ru.bind(null,r,s,e),[e]),r.flags|=2048,fr(9,Tu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ae.identifierPrefix;if(G){var n=it,r=lt;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},am={readContext:Fe,useCallback:Au,useContext:Fe,useEffect:na,useImperativeHandle:Du,useInsertionEffect:Fu,useLayoutEffect:$u,useMemo:Uu,useReducer:Ni,useRef:Iu,useState:function(){return Ni(dr)},useDebugValue:ra,useDeferredValue:function(e){var t=$e();return Bu(t,le.memoizedState,e)},useTransition:function(){var e=Ni(dr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1},om={readContext:Fe,useCallback:Au,useContext:Fe,useEffect:na,useImperativeHandle:Du,useInsertionEffect:Fu,useLayoutEffect:$u,useMemo:Uu,useReducer:Si,useRef:Iu,useState:function(){return Si(dr)},useDebugValue:ra,useDeferredValue:function(e){var t=$e();return le===null?t.memoizedState=e:Bu(t,le.memoizedState,e)},useTransition:function(){var e=Si(dr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ol={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Pt(e),s=st(r,i);s.payload=t,n!=null&&(s.callback=n),t=bt(e,s,i),t!==null&&(Qe(t,e,i,r),qr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Pt(e),s=st(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=bt(e,s,i),t!==null&&(Qe(t,e,i,r),qr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Pt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=bt(e,i,r),t!==null&&(Qe(t,e,r,n),qr(t,e,r))}};function Bo(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(i,s):!0}function Yu(e,t,n){var r=!1,i=Lt,s=t.contextType;return typeof s=="object"&&s!==null?s=Fe(s):(i=Ne(t)?Bt:he.current,r=t.contextTypes,s=(r=r!=null)?vn(e,i):Lt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ho(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function as(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Gs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Fe(s):(s=Ne(t)?Bt:he.current,i.context=vn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ss(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ol.enqueueReplaceState(i,i.state,null),jl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=Ff(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function bi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,xs=r),os(e,t)},n}function Gu(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){os(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){os(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Vo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nm.bind(null,e,t,n),t.then(e,e))}function Wo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qo(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var um=dt.ReactCurrentOwner,je=!1;function ge(e,t,n,r){t.child=e===null?Su(t,null,n,r):yn(t,e.child,n,r)}function Yo(e,t,n,r,i){n=n.render;var s=t.ref;return mn(t,i),r=ea(e,t,n,r,s,i),n=ta(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(G&&n&&Bs(t),t.flags|=1,ge(e,t,r,i),t.child)}function Ko(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!da(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Xu(e,t,s,r,i)):(e=il(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(a,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Et(s,r),e.ref=t.ref,e.return=t,t.child=e}function Xu(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(lr(s,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,ut(e,t,i)}return cs(e,t,n,r,i)}function Ju(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(cn,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(cn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,W(cn,be),be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,W(cn,be),be|=r;return ge(e,t,i,n),t.child}function Zu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,n,r,i){var s=Ne(n)?Bt:he.current;return s=vn(t,s),mn(t,i),n=ea(e,t,n,r,s,i),r=ta(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(G&&r&&Bs(t),t.flags|=1,ge(e,t,n,i),t.child)}function Go(e,t,n,r,i){if(Ne(n)){var s=!0;gl(t)}else s=!1;if(mn(t,i),t.stateNode===null)nl(e,t),Yu(t,n,r),as(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var o=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Fe(d):(d=Ne(n)?Bt:he.current,d=vn(t,d));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||o!==d)&&Ho(t,a,r,d),gt=!1;var h=t.memoizedState;a.state=h,jl(t,r,a,i),o=t.memoizedState,c!==r||h!==o||ke.current||gt?(typeof y=="function"&&(ss(t,n,y,r),o=t.memoizedState),(c=gt||Bo(t,n,c,r,h,o,d))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=o),a.props=r,a.state=o,a.context=d,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cu(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Be(t.type,c),a.props=d,v=t.pendingProps,h=a.context,o=n.contextType,typeof o=="object"&&o!==null?o=Fe(o):(o=Ne(n)?Bt:he.current,o=vn(t,o));var j=n.getDerivedStateFromProps;(y=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==v||h!==o)&&Ho(t,a,r,o),gt=!1,h=t.memoizedState,a.state=h,jl(t,r,a,i);var b=t.memoizedState;c!==v||h!==b||ke.current||gt?(typeof j=="function"&&(ss(t,n,j,r),b=t.memoizedState),(d=gt||Bo(t,n,d,r,h,b,o)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,o)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=o,r=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return us(e,t,n,r,s,i)}function us(e,t,n,r,i,s){Zu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Mo(t,n,!1),ut(e,t,s);r=t.stateNode,um.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,s),t.child=yn(t,null,c,s)):ge(e,t,c,s),t.memoizedState=r.state,i&&Mo(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?_o(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_o(e,t.context,!1),Xs(e,t.containerInfo)}function Xo(e,t,n,r,i){return xn(),Vs(i),t.flags|=256,ge(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,n){var r=t.pendingProps,i=X.current,s=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(X,i&1),e===null)return ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ul(a,r,0,null),e=Ut(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=fs(n),t.memoizedState=ds,e):la(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return dm(e,t,a,r,c,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,c=i.sibling;var o={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=o,t.deletions=null):(r=Et(i,o),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Et(c,s):(s=Ut(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?fs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=ds,r}return s=e.child,e=s.sibling,r=Et(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function la(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vr(e,t,n,r){return r!==null&&Vs(r),yn(t,e.child,null,n),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dm(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=bi(Error(k(422))),Vr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ul({mode:"visible",children:r.children},i,0,null),s=Ut(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&yn(t,e.child,null,a),t.child.memoizedState=fs(a),t.memoizedState=ds,s);if(!(t.mode&1))return Vr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(k(419)),r=bi(s,r,void 0),Vr(e,t,a,r)}if(c=(a&e.childLanes)!==0,je||c){if(r=ae,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ct(e,i),Qe(r,e,i,-1))}return ua(),r=bi(Error(k(421))),Vr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ce=St(i.nextSibling),Pe=t,G=!0,Ve=null,e!==null&&(Re[_e++]=lt,Re[_e++]=it,Re[_e++]=Ht,lt=e.id,it=e.overflow,Ht=t),t=la(t,r.children),t.flags|=4096,t)}function Jo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),is(e.return,t,n)}function Ci(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function td(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ge(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jo(e,n,t);else if(e.tag===19)Jo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ci(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&kl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ci(t,!0,n,null,s);break;case"together":Ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fm(e,t,n){switch(t.tag){case 3:qu(t),xn();break;case 5:Pu(t);break;case 1:Ne(t.type)&&gl(t);break;case 4:Xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?ed(e,t,n):(W(X,X.current&1),e=ut(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return td(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Ju(e,t,n)}return ut(e,t,n)}var nd,ps,rd,ld;nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ps=function(){};rd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dt(Ze.current);var s=null;switch(n){case"input":i=Ii(e,i),r=Ii(e,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=Oi(e,i),r=Oi(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ml)}Ai(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var o=r[d];if(c=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&o!==c&&(o!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in o)o.hasOwnProperty(a)&&c[a]!==o[a]&&(n||(n={}),n[a]=o[a])}else n||(s||(s=[]),s.push(d,n)),n=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(s=s||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&Q("scroll",e),s||c===o||(s=[])):(s=s||[]).push(d,o))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pm(e,t,n){var r=t.pendingProps;switch(Hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ne(t.type)&&hl(),pe(t),null;case 3:return r=t.stateNode,wn(),Y(ke),Y(he),Zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(js(Ve),Ve=null))),ps(e,t),pe(t),null;case 5:Js(t);var i=Dt(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)rd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=Dt(Ze.current),Br(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Xe]=t,r[ar]=s,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Un.length;i++)Q(Un[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":io(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":ao(r,s),Q("invalid",r)}Ai(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&Ur(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Ur(r.textContent,c,e),i=["children",""+c]):Jn.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":_r(r),so(r,s,!0);break;case"textarea":_r(r),oo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ml)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xe]=t,e[ar]=r,nd(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ui(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Un.length;i++)Q(Un[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":io(e,r),i=Ii(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ao(e,r),i=Oi(e,r),Q("invalid",e);break;default:i=r}Ai(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var o=c[s];s==="style"?Ic(e,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&_c(e,o)):s==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&Zn(e,o):typeof o=="number"&&Zn(e,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jn.hasOwnProperty(s)?o!=null&&s==="onScroll"&&Q("scroll",e):o!=null&&Es(e,s,o,a))}switch(n){case"input":_r(e),so(e,r,!1);break;case"textarea":_r(e),oo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?un(e,!!r.multiple,s,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Dt(cr.current),Dt(Ze.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(s=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Ur(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ur(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return pe(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ce!==null&&t.mode&1&&!(t.flags&128))ku(),xn(),t.flags|=98560,s=!1;else if(s=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Xe]=t}else xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),s=!1}else Ve!==null&&(js(Ve),Ve=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ie===0&&(ie=3):ua())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return wn(),ps(e,t),e===null&&ir(t.stateNode.containerInfo),pe(t),null;case 10:return Ys(t.type._context),pe(t),null;case 17:return Ne(t.type)&&hl(),pe(t),null;case 19:if(Y(X),s=t.memoizedState,s===null)return pe(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Fn(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=kl(e),a!==null){for(t.flags|=128,Fn(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}s.tail!==null&&ne()>kn&&(t.flags|=128,r=!0,Fn(s,!1),t.lanes=4194304)}else{if(!r)if(e=kl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!G)return pe(t),null}else 2*ne()-s.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ne(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return ca(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function mm(e,t){switch(Hs(t),t.tag){case 1:return Ne(t.type)&&hl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),Y(ke),Y(he),Zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Js(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return wn(),null;case 10:return Ys(t.type._context),null;case 22:case 23:return ca(),null;case 24:return null;default:return null}}var Wr=!1,me=!1,hm=typeof WeakSet=="function"?WeakSet:Set,T=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ms(e,t,n){try{n()}catch(r){q(e,t,r)}}var Zo=!1;function gm(e,t){if(Ji=dl,e=cu(),Us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,c=-1,o=-1,d=0,y=0,v=e,h=null;t:for(;;){for(var j;v!==n||i!==0&&v.nodeType!==3||(c=a+i),v!==s||r!==0&&v.nodeType!==3||(o=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(j=v.firstChild)!==null;)h=v,v=j;for(;;){if(v===e)break t;if(h===n&&++d===i&&(c=a),h===s&&++y===r&&(o=a),(j=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=j}n=c===-1||o===-1?null:{start:c,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},dl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,M=b.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Be(t.type,w),M);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){q(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=Zo,Zo=!1,b}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ms(t,n,s)}i=i.next}while(i!==r)}}function Dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function id(e){var t=e.alternate;t!==null&&(e.alternate=null,id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[ar],delete t[ts],delete t[Zp],delete t[qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sd(e){return e.tag===5||e.tag===3||e.tag===4}function qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ml));else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}var oe=null,He=!1;function mt(e,t,n){for(n=n.child;n!==null;)ad(e,t,n),n=n.sibling}function ad(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:me||on(n,t);case 6:var r=oe,i=He;oe=null,mt(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?yi(e.parentNode,n):e.nodeType===1&&yi(e,n),nr(e)):yi(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,mt(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ms(n,t,a),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!me&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){q(n,t,c)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,mt(e,t,n),me=r):mt(e,t,n);break;default:mt(e,t,n)}}function ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hm),t.forEach(function(r){var i=bm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:oe=c.stateNode,He=!1;break e;case 3:oe=c.stateNode.containerInfo,He=!0;break e;case 4:oe=c.stateNode.containerInfo,He=!0;break e}c=c.return}if(oe===null)throw Error(k(160));ad(s,a,i),oe=null,He=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(d){q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ke(e),r&4){try{Kn(3,e,e.return),Dl(3,e)}catch(w){q(e,e.return,w)}try{Kn(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Ue(t,e),Ke(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Ue(t,e),Ke(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var i=e.stateNode;try{Zn(i,"")}catch(w){q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,c=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Lc(i,s),Ui(c,a);var d=Ui(c,s);for(a=0;a<o.length;a+=2){var y=o[a],v=o[a+1];y==="style"?Ic(i,v):y==="dangerouslySetInnerHTML"?_c(i,v):y==="children"?Zn(i,v):Es(i,y,v,d)}switch(c){case"input":Fi(i,s);break;case"textarea":Tc(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?un(i,!!s.multiple,j,!1):h!==!!s.multiple&&(s.defaultValue!=null?un(i,!!s.multiple,s.defaultValue,!0):un(i,!!s.multiple,s.multiple?[]:"",!1))}i[ar]=s}catch(w){q(e,e.return,w)}}break;case 6:if(Ue(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){q(e,e.return,w)}}break;case 3:if(Ue(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Ue(t,e),Ke(e);break;case 13:Ue(t,e),Ke(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(aa=ne())),r&4&&ec(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(me=(d=me)||y,Ue(t,e),me=d):Ue(t,e),Ke(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(v=T=y;T!==null;){switch(h=T,j=h.child,h.tag){case 0:case 11:case 14:case 15:Kn(4,h,h.return);break;case 1:on(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:on(h,h.return);break;case 22:if(h.memoizedState!==null){nc(v);continue}}j!==null?(j.return=h,T=j):nc(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=v.stateNode,o=v.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=Mc("display",a))}catch(w){q(e,e.return,w)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(w){q(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ue(t,e),Ke(e),r&4&&ec(e);break;case 21:break;default:Ue(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zn(i,""),r.flags&=-33);var s=qo(e);vs(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=qo(e);gs(e,c,a);break;default:throw Error(k(161))}}catch(o){q(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,n){T=e,cd(e)}function cd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Wr;if(!a){var c=i.alternate,o=c!==null&&c.memoizedState!==null||me;c=Wr;var d=me;if(Wr=a,(me=o)&&!d)for(T=i;T!==null;)a=T,o=a.child,a.tag===22&&a.memoizedState!==null?rc(i):o!==null?(o.return=a,T=o):rc(i);for(;s!==null;)T=s,cd(s),s=s.sibling;T=i,Wr=c,me=d}tc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):tc(e)}}function tc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Do(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Do(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&nr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&hs(t)}catch(h){q(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function nc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function rc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Dl(4,t)}catch(o){q(t,n,o)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(o){q(t,i,o)}}var s=t.return;try{hs(t)}catch(o){q(t,s,o)}break;case 5:var a=t.return;try{hs(t)}catch(o){q(t,a,o)}}}catch(o){q(t,t.return,o)}if(t===e){T=null;break}var c=t.sibling;if(c!==null){c.return=t.return,T=c;break}T=t.return}}var xm=Math.ceil,bl=dt.ReactCurrentDispatcher,ia=dt.ReactCurrentOwner,Ie=dt.ReactCurrentBatchConfig,U=0,ae=null,re=null,ce=0,be=0,cn=Rt(0),ie=0,pr=null,Wt=0,Al=0,sa=0,Gn=null,we=null,aa=0,kn=1/0,nt=null,Cl=!1,xs=null,Ct=null,Qr=!1,wt=null,Pl=0,Xn=0,ys=null,rl=-1,ll=0;function ve(){return U&6?ne():rl!==-1?rl:rl=ne()}function Pt(e){return e.mode&1?U&2&&ce!==0?ce&-ce:tm.transition!==null?(ll===0&&(ll=Yc()),ll):(e=H,e!==0||(e=window.event,e=e===void 0?16:eu(e.type)),e):1}function Qe(e,t,n,r){if(50<Xn)throw Xn=0,ys=null,Error(k(185));hr(e,n,r),(!(U&2)||e!==ae)&&(e===ae&&(!(U&2)&&(Al|=n),ie===4&&xt(e,ce)),Se(e,r),n===1&&U===0&&!(t.mode&1)&&(kn=ne()+500,Fl&&_t()))}function Se(e,t){var n=e.callbackNode;tp(e,t);var r=ul(e,e===ae?ce:0);if(r===0)n!==null&&fo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fo(n),t===1)e.tag===0?em(lc.bind(null,e)):yu(lc.bind(null,e)),Xp(function(){!(U&6)&&_t()}),n=null;else{switch(Kc(r)){case 1:n=_s;break;case 4:n=Wc;break;case 16:n=cl;break;case 536870912:n=Qc;break;default:n=cl}n=vd(n,ud.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ud(e,t){if(rl=-1,ll=0,U&6)throw Error(k(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=ul(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=U;U|=2;var s=fd();(ae!==e||ce!==t)&&(nt=null,kn=ne()+500,At(e,t));do try{jm();break}catch(c){dd(e,c)}while(!0);Qs(),bl.current=s,U=i,re!==null?t=0:(ae=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=Qi(e),i!==0&&(r=i,t=ws(e,i))),t===1)throw n=pr,At(e,0),xt(e,r),Se(e,ne()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ym(i)&&(t=El(e,r),t===2&&(s=Qi(e),s!==0&&(r=s,t=ws(e,s))),t===1))throw n=pr,At(e,0),xt(e,r),Se(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ft(e,we,nt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=aa+500-ne(),10<t)){if(ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=es(Ft.bind(null,e,we,nt),t);break}Ft(e,we,nt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-We(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xm(r/1960))-r,10<r){e.timeoutHandle=es(Ft.bind(null,e,we,nt),r);break}Ft(e,we,nt);break;case 5:Ft(e,we,nt);break;default:throw Error(k(329))}}}return Se(e,ne()),e.callbackNode===n?ud.bind(null,e):null}function ws(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=El(e,t),e!==2&&(t=we,we=n,t!==null&&js(t)),e}function js(e){we===null?we=e:we.push.apply(we,e)}function ym(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ye(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~sa,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(U&6)throw Error(k(327));hn();var t=ul(e,0);if(!(t&1))return Se(e,ne()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=ws(e,r))}if(n===1)throw n=pr,At(e,0),xt(e,t),Se(e,ne()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,we,nt),Se(e,ne()),null}function oa(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(kn=ne()+500,Fl&&_t())}}function Qt(e){wt!==null&&wt.tag===0&&!(U&6)&&hn();var t=U;U|=1;var n=Ie.transition,r=H;try{if(Ie.transition=null,H=1,e)return e()}finally{H=r,Ie.transition=n,U=t,!(U&6)&&_t()}}function ca(){be=cn.current,Y(cn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gp(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Hs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:wn(),Y(ke),Y(he),Zs();break;case 5:Js(r);break;case 4:wn();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Ys(r.type._context);break;case 22:case 23:ca()}n=n.return}if(ae=e,re=e=Et(e.current,null),ce=be=t,ie=0,pr=null,sa=Al=Wt=0,we=Gn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Ot=null}return e}function dd(e,t){do{var n=re;try{if(Qs(),el.current=Sl,Nl){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(Vt=0,se=le=J=null,Yn=!1,ur=0,ia.current=null,n===null||n.return===null){ie=1,pr=t,re=null;break}e:{var s=e,a=n.return,c=n,o=t;if(t=ce,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,y=c,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var j=Wo(a);if(j!==null){j.flags&=-257,Qo(j,a,c,s,t),j.mode&1&&Vo(s,d,t),t=j,o=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(o),t.updateQueue=w}else b.add(o);break e}else{if(!(t&1)){Vo(s,d,t),ua();break e}o=Error(k(426))}}else if(G&&c.mode&1){var M=Wo(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Qo(M,a,c,s,t),Vs(jn(o,c));break e}}s=o=jn(o,c),ie!==4&&(ie=2),Gn===null?Gn=[s]:Gn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Ku(s,o,t);Oo(s,p);break e;case 1:c=o;var u=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ct===null||!Ct.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=Gu(s,c,t);Oo(s,g);break e}}s=s.return}while(s!==null)}md(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function fd(){var e=bl.current;return bl.current=Sl,e===null?Sl:e}function ua(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Wt&268435455)&&!(Al&268435455)||xt(ae,ce)}function El(e,t){var n=U;U|=2;var r=fd();(ae!==e||ce!==t)&&(nt=null,At(e,t));do try{wm();break}catch(i){dd(e,i)}while(!0);if(Qs(),U=n,bl.current=r,re!==null)throw Error(k(261));return ae=null,ce=0,ie}function wm(){for(;re!==null;)pd(re)}function jm(){for(;re!==null&&!Qf();)pd(re)}function pd(e){var t=gd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?md(e):re=t,ia.current=null}function md(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mm(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(n=pm(n,t,be),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ie===0&&(ie=5)}function Ft(e,t,n){var r=H,i=Ie.transition;try{Ie.transition=null,H=1,km(e,t,n,r)}finally{Ie.transition=i,H=r}return null}function km(e,t,n,r){do hn();while(wt!==null);if(U&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(np(e,s),e===ae&&(re=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qr||(Qr=!0,vd(cl,function(){return hn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ie.transition,Ie.transition=null;var a=H;H=1;var c=U;U|=4,ia.current=null,gm(e,n),od(n,e),Bp(Zi),dl=!!Ji,Zi=Ji=null,e.current=n,vm(n),Yf(),U=c,H=a,Ie.transition=s}else e.current=n;if(Qr&&(Qr=!1,wt=e,Pl=i),s=e.pendingLanes,s===0&&(Ct=null),Xf(n.stateNode),Se(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=xs,xs=null,e;return Pl&1&&e.tag!==0&&hn(),s=e.pendingLanes,s&1?e===ys?Xn++:(Xn=0,ys=e):Xn=0,_t(),null}function hn(){if(wt!==null){var e=Kc(Pl),t=Ie.transition,n=H;try{if(Ie.transition=null,H=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,Pl=0,U&6)throw Error(k(331));var i=U;for(U|=4,T=e.current;T!==null;){var s=T,a=s.child;if(T.flags&16){var c=s.deletions;if(c!==null){for(var o=0;o<c.length;o++){var d=c[o];for(T=d;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Kn(8,y,s)}var v=y.child;if(v!==null)v.return=y,T=v;else for(;T!==null;){y=T;var h=y.sibling,j=y.return;if(id(y),y===d){T=null;break}if(h!==null){h.return=j,T=h;break}T=j}}}var b=s.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,T=a;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var u=e.current;for(T=u;T!==null;){a=T;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,T=m;else e:for(a=u;T!==null;){if(c=T,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Dl(9,c)}}catch(C){q(c,c.return,C)}if(c===a){T=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,T=g;break e}T=c.return}}if(U=i,_t(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Tl,e)}catch{}r=!0}return r}finally{H=n,Ie.transition=t}}return!1}function ic(e,t,n){t=jn(n,t),t=Ku(e,t,1),e=bt(e,t,1),t=ve(),e!==null&&(hr(e,1,t),Se(e,t))}function q(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=jn(n,e),e=Gu(t,e,1),t=bt(t,e,1),e=ve(),t!==null&&(hr(t,1,e),Se(t,e));break}}t=t.return}}function Nm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>ne()-aa?At(e,0):sa|=n),Se(e,t)}function hd(e,t){t===0&&(e.mode&1?(t=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):t=1);var n=ve();e=ct(e,t),e!==null&&(hr(e,t,n),Se(e,n))}function Sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hd(e,n)}function bm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),hd(e,n)}var gd;gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,fm(e,t,n);je=!!(e.flags&131072)}else je=!1,G&&t.flags&1048576&&wu(t,xl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nl(e,t),e=t.pendingProps;var i=vn(t,he.current);mn(t,n),i=ea(null,t,r,e,i,n);var s=ta();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,gl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gs(t),i.updater=Ol,t.stateNode=i,i._reactInternals=t,as(t,r,e,n),t=us(null,t,r,!0,s,n)):(t.tag=0,G&&s&&Bs(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pm(r),e=Be(r,e),i){case 0:t=cs(null,t,r,e,n);break e;case 1:t=Go(null,t,r,e,n);break e;case 11:t=Yo(null,t,r,e,n);break e;case 14:t=Ko(null,t,r,Be(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),cs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Go(e,t,r,i,n);case 3:e:{if(qu(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Cu(e,t),jl(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=jn(Error(k(423)),t),t=Xo(e,t,r,n,i);break e}else if(r!==i){i=jn(Error(k(424)),t),t=Xo(e,t,r,n,i);break e}else for(Ce=St(t.stateNode.containerInfo.firstChild),Pe=t,G=!0,Ve=null,n=Su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),r===i){t=ut(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Pu(t),e===null&&ls(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,qi(r,i)?a=null:s!==null&&qi(r,s)&&(t.flags|=32),Zu(e,t),ge(e,t,a,n),t.child;case 6:return e===null&&ls(t),null;case 13:return ed(e,t,n);case 4:return Xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Yo(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,W(yl,r._currentValue),r._currentValue=a,s!==null)if(Ye(s.value,a)){if(s.children===i.children&&!ke.current){t=ut(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var o=c.firstContext;o!==null;){if(o.context===r){if(s.tag===1){o=st(-1,n&-n),o.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?o.next=o:(o.next=y.next,y.next=o),d.pending=o}}s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),is(s.return,n,t),c.lanes|=n;break}o=o.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(k(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),is(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mn(t,n),i=Fe(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),Ko(e,t,r,i,n);case 15:return Xu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),nl(e,t),t.tag=1,Ne(r)?(e=!0,gl(t)):e=!1,mn(t,n),Yu(t,r,i),as(t,r,i,n),us(null,t,r,!0,e,n);case 19:return td(e,t,n);case 22:return Ju(e,t,n)}throw Error(k(156,t.tag))};function vd(e,t){return Vc(e,t)}function Cm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Cm(e,t,n,r)}function da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pm(e){if(typeof e=="function")return da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ls)return 11;if(e===Ts)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")da(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return Ut(n.children,i,s,t);case zs:a=8,i|=8;break;case Ti:return e=Me(12,n,t,i|2),e.elementType=Ti,e.lanes=s,e;case Ri:return e=Me(13,n,t,i),e.elementType=Ri,e.lanes=s,e;case _i:return e=Me(19,n,t,i),e.elementType=_i,e.lanes=s,e;case Pc:return Ul(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bc:a=10;break e;case Cc:a=9;break e;case Ls:a=11;break e;case Ts:a=14;break e;case ht:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Me(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ut(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Pc,e.lanes=n,e.stateNode={isHidden:!1},e}function Pi(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Ei(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Em(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fa(e,t,n,r,i,s,a,c,o){return e=new Em(e,t,n,c,o),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Me(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(s),e}function zm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xd(e){if(!e)return Lt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ne(n))return xu(e,n,t)}return t}function yd(e,t,n,r,i,s,a,c,o){return e=fa(n,r,!0,e,i,s,a,c,o),e.context=xd(null),n=e.current,r=ve(),i=Pt(n),s=st(r,i),s.callback=t??null,bt(n,s,i),e.current.lanes=i,hr(e,i,r),Se(e,r),e}function Bl(e,t,n,r){var i=t.current,s=ve(),a=Pt(i);return n=xd(n),t.context===null?t.context=n:t.pendingContext=n,t=st(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(i,t,a),e!==null&&(Qe(e,i,a,s),qr(e,i,a)),a}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pa(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function Lm(){return null}var wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}Hl.prototype.render=ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Bl(e,t,null,null)};Hl.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Bl(null,e,null,null)}),t[ot]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&qc(e)}};function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function Tm(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=zl(a);s.call(d)}}var a=yd(t,r,e,0,null,!1,!1,"",ac);return e._reactRootContainer=a,e[ot]=a.current,ir(e.nodeType===8?e.parentNode:e),Qt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var d=zl(o);c.call(d)}}var o=fa(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=o,e[ot]=o.current,ir(e.nodeType===8?e.parentNode:e),Qt(function(){Bl(t,o,n,r)}),o}function Wl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var c=i;i=function(){var o=zl(a);c.call(o)}}Bl(t,a,e,i)}else a=Tm(n,t,e,i,r);return zl(a)}Gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(Ms(t,n|1),Se(t,ne()),!(U&6)&&(kn=ne()+500,_t()))}break;case 13:Qt(function(){var r=ct(e,1);if(r!==null){var i=ve();Qe(r,e,1,i)}}),pa(e,1)}};Is=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ve();Qe(t,e,134217728,n)}pa(e,134217728)}};Xc=function(e){if(e.tag===13){var t=Pt(e),n=ct(e,t);if(n!==null){var r=ve();Qe(n,e,t,r)}pa(e,t)}};Jc=function(){return H};Zc=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Hi=function(e,t,n){switch(t){case"input":if(Fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Il(r);if(!i)throw Error(k(90));zc(r),Fi(r,i)}}}break;case"textarea":Tc(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Oc=oa;Dc=Qt;var Rm={usingClientEntryPoint:!1,Events:[vr,nn,Il,Fc,$c,oa]},$n={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bc(e),e===null?null:e.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Tl=Yr.inject(_m),Je=Yr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ha(t))throw Error(k(200));return zm(e,t,null,n)};ze.createRoot=function(e,t){if(!ha(e))throw Error(k(299));var n=!1,r="",i=wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fa(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,ir(e.nodeType===8?e.parentNode:e),new ma(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Bc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Qt(e)};ze.hydrate=function(e,t,n){if(!Vl(t))throw Error(k(200));return Wl(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ha(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=wd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=yd(t,null,e,1,n??null,i,!1,s,a),e[ot]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Hl(t)};ze.render=function(e,t,n){if(!Vl(t))throw Error(k(200));return Wl(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(k(40));return e._reactRootContainer?(Qt(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};ze.unstable_batchedUpdates=oa;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Wl(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),jc.exports=ze;var Mm=jc.exports,oc=Mm;zi.createRoot=oc.createRoot,zi.hydrateRoot=oc.hydrateRoot;function Im({activeTab:e,setActiveTab:t,subscription:n}){const r=()=>{switch(n){case"basic":return l.jsx("span",{className:"badge badge-primary",children:"Basic Plan"});case"premium":return l.jsx("span",{className:"badge badge-warning",children:"Premium Member"});case"savings":return l.jsx("span",{className:"badge badge-info",children:"Savings-Share"});default:return l.jsx("span",{className:"badge badge-danger",children:"Unsubscribed"})}},i=[{id:"landing",label:"Home & Concept",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"dashboard",label:"Dashboard",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"7",height:"9"}),l.jsx("rect",{x:"14",y:"3",width:"7",height:"5"}),l.jsx("rect",{x:"14",y:"12",width:"7",height:"9"}),l.jsx("rect",{x:"3",y:"16",width:"7",height:"5"})]})},{id:"properties",label:"Rental Properties",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})},{id:"crowdsource",label:"Crowdsource Hub",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"reminders",label:"Reminders & Tasks",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})},{id:"feedback",label:"Tester Panel",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}];return l.jsxs("aside",{className:"sidebar-container",children:[l.jsxs("div",{className:"sidebar-brand",children:[l.jsx("div",{className:"brand-logo",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"url(#logo-grad)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"logo-grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ecc94b"}),l.jsx("stop",{offset:"100%",stopColor:"#e53e3e"})]})}),l.jsx("path",{d:"M3 21h18M3 10l9-7 9 7v11H3V10z"}),l.jsx("path",{d:"M9 21v-8h6v8"})]})}),l.jsxs("div",{children:[l.jsx("h2",{children:"RealPal"}),l.jsx("span",{className:"brand-tagline",children:"Trusted Companion"})]})]}),l.jsxs("div",{className:"sidebar-vision",children:[l.jsx("div",{className:"vision-title",children:"VISION & MISSION"}),l.jsx("p",{className:"vision-text",children:"To build better communities across the world one at a time by providing a platform for landlords, tenants, and service providers."})]}),l.jsx("nav",{className:"sidebar-nav",children:i.map(s=>l.jsxs("button",{className:`nav-item ${e===s.id?"active":""}`,onClick:()=>t(s.id),children:[l.jsx("span",{className:"nav-icon",children:s.icon}),l.jsx("span",{className:"nav-label",children:s.label}),s.id==="reminders"&&l.jsx("span",{className:"nav-badge pulse-indicator"})]},s.id))}),l.jsx("div",{className:"sidebar-footer",children:l.jsxs("div",{className:"user-profile",children:[l.jsx("div",{className:"avatar",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),l.jsxs("div",{className:"user-info",children:[l.jsx("div",{className:"user-name",children:"Alex Miller"}),l.jsx("div",{className:"user-role",children:"Independent Landlord"}),l.jsx("div",{className:"sub-status",children:r()})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function cc({subscription:e,setSubscription:t,setActiveTab:n}){const[r,i]=S.useState(3),[s,a]=S.useState(0),c=h=>{t(h),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{n("dashboard")},400)},o=()=>{var h;(h=document.getElementById("concept-detail-section"))==null||h.scrollIntoView({behavior:"smooth"})},d=[{title:"Repairs & Maintenance Costs",desc:"An average of $2,000 to $3,000 is spent per unit annually on maintenance. RealPal helps reduce this by 10-15% through competitive bidding and group service pools.",icon:"🔧"},{title:"Compliance & Laws",desc:"Local, state, and federal leasing regulations change constantly. RealPal tracks statutory inspections, certifications, and compliance deadlines automatically.",icon:"📜"},{title:"Tenant Turnover & Rent Loss",desc:"Finding and vetting tenants leads to vacant periods that eat into passive income. Keep tenants longer by resolving maintenance issues fast and maintaining transparent comms.",icon:"🔑"},{title:"Stress of Property Management",desc:"Balancing property emergencies with personal life leads to burnout. RealPal centralizes communications, tasks, reminders, and invoices in one secure workspace.",icon:"🧠"},{title:"Accounting & Taxes",desc:"Tracking deductible expenses, vendor invoices, rent deposits, and writing off depreciation is complex. Keep records neat and ready for tax seasons.",icon:"📊"}],y=r*2500,v=r*325;return l.jsxs("div",{className:"landing-container animate-fade-in",style:{padding:0,margin:"-2.5rem -2.5rem 0"},children:[l.jsxs("section",{className:"typewriter-hero-container",children:[l.jsxs("div",{className:"typewriter-wrapper",children:[l.jsx("h1",{className:"typewriter-bold-title",children:"REAL PAL"}),l.jsx("p",{className:"typewriter-bold-subtitle",children:"A trusted companion for Landlords, Tenants & Service Providers."})]}),l.jsxs("button",{className:"scroll-down-btn",onClick:o,"aria-label":"Scroll Down",children:[l.jsx("span",{className:"scroll-arrow",children:"▼"}),l.jsx("span",{className:"scroll-text",children:"Scroll Down for Details"})]})]}),l.jsxs("section",{id:"concept-detail-section",className:"concept-detail-section",style:{padding:"2.5rem"},children:[l.jsxs("div",{className:"hero-showcase glass-card",style:{marginTop:"1rem"},children:[l.jsxs("div",{className:"hero-text-content",children:[l.jsx("span",{className:"badge badge-primary",children:"Platform Concept"}),l.jsx("h2",{className:"hero-title",style:{fontSize:"2rem"},children:"Better communities, one rental at a time."}),l.jsxs("p",{className:"hero-p",children:["Independent landlords represent ",l.jsx("strong",{children:"10 million investors"})," managing over ",l.jsx("strong",{children:"23 million rental units"})," in the US. RealPal bridges the gap between Landlords, Tenants, and Service Providers to streamline property management and reduce the $46 billion annual maintenance burden."]}),l.jsxs("div",{className:"hero-buttons",children:[l.jsx("button",{className:"btn btn-primary",onClick:()=>c("premium"),children:"Activate Trial Demo"}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>{const h=document.getElementById("savings-calculator");h==null||h.scrollIntoView({behavior:"smooth"})},children:"Calculate ROI Savings"})]})]}),l.jsxs("div",{className:"hero-image-pane",children:[l.jsxs("div",{className:"concept-stat-box",children:[l.jsx("div",{className:"stat-num text-gradient",children:"$46B"}),l.jsx("div",{className:"stat-lbl",children:"US Annual Maintenance Spend"})]}),l.jsxs("div",{className:"concept-stat-box accent-box",children:[l.jsx("div",{className:"stat-num savings-gradient",children:"10-15%"}),l.jsx("div",{className:"stat-lbl",children:"Target Expense Savings"})]})]})]}),l.jsxs("div",{id:"savings-calculator",className:"savings-calc-section grid-2",children:[l.jsxs("div",{className:"glass-card flex-column-center",children:[l.jsx("h3",{className:"section-title",children:"Interactive savings calculator"}),l.jsx("p",{className:"section-p",children:"See how much you can expect to save in repairs, administration, and vacant turnovers using RealPal's smart crowdsourcing and preventive tracking tools."}),l.jsxs("div",{className:"calc-slider-wrapper",children:[l.jsxs("label",{className:"form-label",style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"Number of Rental Units:"}),l.jsxs("span",{className:"slider-val",children:[r," ",r===1?"Unit":"Units"]})]}),l.jsx("input",{type:"range",min:"1",max:"50",value:r,onChange:h=>i(parseInt(h.target.value)),className:"calc-slider"})]}),l.jsxs("div",{className:"savings-grid",children:[l.jsxs("div",{className:"savings-item",children:[l.jsx("span",{className:"savings-lbl",children:"Estimated Annual Spend"}),l.jsxs("span",{className:"savings-val",children:["$",y.toLocaleString()]})]}),l.jsxs("div",{className:"savings-item highlight-savings",children:[l.jsx("span",{className:"savings-lbl",children:"RealPal Saved (13%)"}),l.jsxs("span",{className:"savings-val",children:["$",v.toLocaleString()]})]})]}),l.jsx("div",{className:"savings-foot-note",children:"*Based on industry averages of $2,000–$3,000 spent per property unit on repairs, plumbing, electrical, and landscaping annually."})]}),l.jsxs("div",{className:"glass-card",children:[l.jsx("h3",{className:"section-title",children:"Major Landlord Hassles Addressed"}),l.jsx("p",{className:"section-p",children:"Click on the challenges below to see how RealPal's specific feature set helps mitigate them."}),l.jsx("div",{className:"problem-list",children:d.map((h,j)=>l.jsxs("div",{className:`problem-item ${s===j?"expanded":""}`,onClick:()=>a(j),children:[l.jsxs("div",{className:"problem-header",children:[l.jsx("span",{className:"prob-icon",children:h.icon}),l.jsx("span",{className:"prob-title",children:h.title}),l.jsx("span",{className:"prob-arrow",children:s===j?"▲":"▼"})]}),s===j&&l.jsx("div",{className:"problem-body animate-slide-up",children:l.jsx("p",{children:h.desc})})]},j))})]})]}),l.jsxs("div",{className:"business-models-section",children:[l.jsx("h3",{className:"section-title",style:{textAlign:"center",marginBottom:"0.5rem"},children:"Flexible Business Models"}),l.jsx("p",{className:"section-p",style:{textAlign:"center",marginBottom:"2.5rem",maxWidth:"600px",margin:"0 auto 2.5rem"},children:"We evaluate multiple revenue avenues to align incentive with landlord savings and ease of adoption. Choose a mock model below to experience the platform."}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:`pricing-card glass-card ${e==="basic"?"active-plan":""}`,children:[e==="basic"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Basic Flat Fee"}),l.jsxs("div",{className:"plan-price",children:["$19",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"For small landlords starting their automation journey."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Manage up to 5 properties"}),l.jsx("li",{children:"✓ Core compliance reminders"}),l.jsx("li",{children:"✓ Basic digital lease storage"}),l.jsx("li",{children:"✓ Crowdsource service listings"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="basic"?"btn-success":""}`,onClick:()=>c("basic"),children:e==="basic"?"Selected Plan":"Select Flat Subscription"})]}),l.jsxs("div",{className:`pricing-card glass-card premium-card ${e==="premium"?"active-plan":""}`,children:[e==="premium"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-badge",children:"Most Popular"}),l.jsx("div",{className:"plan-name",children:"Premium Hub"}),l.jsxs("div",{className:"plan-price",children:["$39",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"Full dashboard and integrated service provider bidding network."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Interactive maintenance bidding"}),l.jsx("li",{children:"✓ Auto-reminders & calendar sync"}),l.jsx("li",{children:"✓ Group saving zip pool access"}),l.jsx("li",{children:"✓ Live tenant ticket portal"})]}),l.jsx("button",{className:"btn btn-primary",onClick:()=>c("premium"),children:e==="premium"?"Active Member":"Upgrade to Premium"})]}),l.jsxs("div",{className:`pricing-card glass-card ${e==="savings"?"active-plan":""}`,children:[e==="savings"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Share of Savings"}),l.jsxs("div",{className:"plan-price",children:["10%",l.jsx("span",{children:"of savings"})]}),l.jsx("div",{className:"plan-desc",children:"Zero subscription fees. Pay only a percentage of verified repair savings."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Full provider bidding simulator"}),l.jsx("li",{children:"✓ RealPal bulk service pricing"}),l.jsx("li",{children:"✓ Pay only when we save you money"}),l.jsx("li",{children:"✓ Quarterly savings report"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="savings"?"btn-success":""}`,onClick:()=>c("savings"),children:e==="savings"?"Selected Plan":"Select Pay-on-Savings"})]})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Fm({properties:e,reminders:t,jobs:n,groupDeals:r,setActiveTab:i}){const s=e.length,a=e.filter(g=>g.status==="Occupied").length,c=s>0?Math.round(a/s*100):0,o=e.reduce((g,C)=>g+(C.status==="Occupied"?C.rent:0),0),d=n.filter(g=>g.status==="active"&&g.savings).reduce((g,C)=>g+C.savings,0),y=r.filter(g=>g.joined&&g.unlocked).reduce((g,C)=>g+C.bulkPrice*(C.discountPercent/100),0),v=d+y,h=t.filter(g=>!g.completed),j=h.filter(g=>g.priority==="High"),b=n.filter(g=>g.status==="bidding"),w={months:["Jan","Feb","Mar","Apr","May","Jun"],rent:[3200,3200,4800,4800,5400,o||5400],expense:[850,400,1200,300,1600,b.length*150+200]},M=6e3,p=g=>g.map((C,L)=>{const E=30+L*90,x=170-C/M*150;return`${E},${x}`}).join(" "),u=p(w.rent),m=p(w.expense);return l.jsxs("div",{className:"dashboard-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Dashboard Overview"}),l.jsx("p",{className:"view-description",children:"Real-time financials, property occupancies, and operational actions."})]})}),l.jsxs("div",{className:"grid-4",style:{marginBottom:"2rem"},children:[l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-primary-light)",color:"var(--color-primary)"},children:"🏠"}),l.jsxs("div",{className:"kpi-info",children:[l.jsx("span",{className:"kpi-val",children:s}),l.jsx("span",{className:"kpi-lbl",children:"Properties"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-info-light)",color:"var(--color-info)"},children:"👥"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[c,"%"]}),l.jsx("span",{className:"kpi-lbl",children:"Occupancy Rate"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("crowdsource"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-warning-light)",color:"var(--color-warning)"},children:"🪙"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",style:{color:"var(--color-warning)"},children:["$",v.toLocaleString()]}),l.jsx("span",{className:"kpi-lbl",children:"Saved on Repairs"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("reminders"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"rgba(255,255,255,0.05)",color:"#fff"},children:"🔔"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[h.length,j.length>0&&l.jsxs("span",{className:"kpi-sub-val",style:{color:"var(--color-primary)"},children:["(",j.length," High)"]})]}),l.jsx("span",{className:"kpi-lbl",children:"Active Reminders"})]})]})]}),l.jsxs("div",{className:"chart-alerts-layout",children:[l.jsxs("div",{className:"glass-card chart-card",children:[l.jsx("h3",{className:"section-title",children:"Rent Roll vs. Repair Costs"}),l.jsx("p",{className:"section-p",children:"Consolidated cashflow comparison across the current portfolio (Last 6 Months)."}),l.jsx("div",{className:"svg-chart-container",children:l.jsxs("svg",{viewBox:"0 0 500 200",className:"dashboard-svg-chart",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"rent-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.15"}),l.jsx("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0.0"})]}),l.jsxs("linearGradient",{id:"exp-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"var(--color-primary)",stopOpacity:"0.2"}),l.jsx("stop",{offset:"100%",stopColor:"var(--color-primary)",stopOpacity:"0.0"})]})]}),l.jsx("line",{x1:"30",y1:"20",x2:"480",y2:"20",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"70",x2:"480",y2:"70",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"120",x2:"480",y2:"120",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"170",x2:"480",y2:"170",stroke:"rgba(255,255,255,0.08)",strokeWidth:"1"}),l.jsx("text",{x:"5",y:"25",fill:"var(--text-muted)",fontSize:"8",children:"$6.0K"}),l.jsx("text",{x:"5",y:"75",fill:"var(--text-muted)",fontSize:"8",children:"$4.0K"}),l.jsx("text",{x:"5",y:"125",fill:"var(--text-muted)",fontSize:"8",children:"$2.0K"}),l.jsx("text",{x:"5",y:"175",fill:"var(--text-muted)",fontSize:"8",children:"$0"}),w.months.map((g,C)=>l.jsx("text",{x:30+C*90,y:"190",textAnchor:"middle",fill:"var(--text-muted)",fontSize:"9",fontWeight:"600",children:g},g)),l.jsx("polygon",{points:`30,170 ${u} 480,170`,fill:"url(#rent-grad)"}),l.jsx("polyline",{fill:"none",stroke:"#ffffff",strokeWidth:"3.5",strokeLinecap:"round",points:u}),l.jsx("polygon",{points:`30,170 ${m} 480,170`,fill:"url(#exp-grad)"}),l.jsx("polyline",{fill:"none",stroke:"var(--color-primary)",strokeWidth:"3.5",strokeLinecap:"round",points:m}),l.jsx("circle",{cx:30+5*90,cy:170-w.rent[5]/M*150,r:"5",fill:"#ffffff",stroke:"#000",strokeWidth:"2"}),l.jsx("circle",{cx:30+5*90,cy:170-w.expense[5]/M*150,r:"5",fill:"var(--color-primary)",stroke:"#000",strokeWidth:"2"})]})}),l.jsxs("div",{className:"chart-legend",children:[l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"#ffffff"}}),l.jsxs("span",{children:["Rent Roll ($",o.toLocaleString(),"/mo)"]})]}),l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"var(--color-primary)"}}),l.jsxs("span",{children:["Maintenance Expenses ($",w.expense[5],"/mo)"]})]})]})]}),l.jsxs("div",{className:"glass-card alerts-card",children:[l.jsx("h3",{className:"section-title",children:"Operational Hub"}),l.jsx("p",{className:"section-p",children:"Actions requiring immediate attention."}),l.jsxs("div",{className:"alerts-stack",style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:[b.map(g=>l.jsxs("div",{className:"alert-item alert-job glass-card",onClick:()=>i("crowdsource"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-warning",children:"Bid Response Pending"}),l.jsx("span",{className:"pulse-indicator"})]}),l.jsx("h4",{className:"alert-item-title",children:g.title}),l.jsx("p",{className:"alert-item-desc",children:"Quotations are formulating on this maintenance ticket. Select a vendor."})]},g.id)),j.slice(0,2).map(g=>l.jsxs("div",{className:"alert-item alert-task glass-card",onClick:()=>i("reminders"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-danger",children:"High Priority Task"}),l.jsxs("span",{className:"alert-date",children:["📅 ",new Date(g.date).toLocaleDateString()]})]}),l.jsx("h4",{className:"alert-item-title",children:g.title}),l.jsxs("p",{className:"alert-item-desc",children:["Associated Property: ",g.propertyName]})]},g.id)),b.length===0&&j.length===0&&l.jsxs("div",{className:"all-clear-state",children:[l.jsx("div",{className:"all-clear-icon",children:"✓"}),l.jsx("h4",{children:"All systems operating normally"}),l.jsx("p",{children:"No critical leasing deadlines or bidding alerts require processing today."})]})]})]})]}),l.jsxs("div",{className:"quick-actions-bar glass-card",style:{marginTop:"2rem"},children:[l.jsx("h4",{style:{marginBottom:"0.75rem"},children:"Quick Landlord Utilities"}),l.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("properties"),children:"+ Register New Property"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("crowdsource"),children:"🔧 Request Contractor Bid"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("reminders"),children:"📅 Schedule Compliance Check"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("landing"),children:"📊 Check Pricing ROI"})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function $m({properties:e,onAddProperty:t,onUpdateProperty:n,onDeleteProperty:r}){const[i,s]=S.useState("portfolio"),[a,c]=S.useState([]),[o,d]=S.useState(null),[y,v]=S.useState(!1),[h,j]=S.useState(null),[b,w]=S.useState([]),[M,p]=S.useState(""),[u,m]=S.useState("Any"),[g,C]=S.useState("Any"),[L,E]=S.useState(!1),[x,O]=S.useState(null),[I,P]=S.useState(""),[N,_]=S.useState("Single Family"),[D,B]=S.useState(""),[de,ft]=S.useState(""),[z,F]=S.useState(""),[$,K]=S.useState(""),[ee,Mt]=S.useState(""),[qe,Cn]=S.useState("Occupied"),[Oe,et]=S.useState(32e4),[Ql,yr]=S.useState(25),[Yl,wr]=S.useState(7),[kd,ga]=S.useState(30),[Nd,va]=S.useState(6e3),[Sd,xa]=S.useState(2e4),[jr,kr]=S.useState(9e3),[bd,ya]=S.useState(3),[Nr,Sr]=S.useState(1200),[Cd,wa]=S.useState(3),[Pd,ja]=S.useState(0),[Ed,ka]=S.useState(3),[br,Cr]=S.useState(2e3),[zd,Na]=S.useState(3),[Ld,Sa]=S.useState(500),[Td,ba]=S.useState(3),[Rd,Ca]=S.useState(5),[_d,Pa]=S.useState(0),[Md,Ea]=S.useState(3),[Id,za]=S.useState(5),[Fd,La]=S.useState(5),[$d,Od]=S.useState(8.5),[Dd,Ad]=S.useState(9),[Ud,Bd]=S.useState(8.8),[Hd,Vd]=S.useState(32),[Wd,Qd]=S.useState("Low"),[Yd,Kd]=S.useState("Sandy clay, stable"),[Gd,Xd]=S.useState("Water Tower Place"),[Jd,Zd]=S.useState("Lincoln Park"),[Ta,Ra]=S.useState(41.9082),[_a,Ma]=S.useState(-87.6322),[Ia,Fa]=S.useState("Chicago"),[$a,Oa]=S.useState(1),[Da,Aa]=S.useState(""),[Ua,Ba]=S.useState("Passed"),Pr=()=>{P(""),_("Single Family"),B(""),ft(""),F(""),K(""),Mt(""),Cn("Occupied"),et(32e4),yr(25),wr(7),ga(30),va(6e3),xa(2e4),kr(9e3),ya(3),Sr(1200),wa(3),ja(0),ka(3),Cr(2e3),Na(3),Sa(500),ba(3),Ca(5),Pa(0),Ea(3),za(5),La(5),Od(8.5),Ad(9),Bd(8.8),Vd(32),Qd("Low"),Kd("Sandy clay, stable"),Xd("Water Tower Place"),Zd("Lincoln Park"),Ra(41.9082),Ma(-87.6322),Fa("Chicago"),Oa(1),Aa(""),Ba("Passed"),O(null)},Ha=()=>({address:I,type:N,rent:parseFloat(D)||0,tenantName:de||"Vacant",tenantEmail:z||"-",leaseStart:$||"",leaseEnd:ee||"",status:de?qe:"Vacant",purchasePrice:parseFloat(Oe)||0,downPaymentPercent:parseFloat(Ql)||0,interestRate:parseFloat(Yl)||0,loanTermYears:parseInt(kd)||0,otherPurchaseCosts:parseFloat(Nd)||0,repairCost:parseFloat(Sd)||0,annualPropertyTax:parseFloat(jr)||0,taxIncreasePercent:parseFloat(bd)||0,annualInsurance:parseFloat(Nr)||0,insuranceIncreasePercent:parseFloat(Cd)||0,monthlyHOA:parseFloat(Pd)||0,hoaIncreasePercent:parseFloat(Ed)||0,annualMaintenance:parseFloat(br)||0,maintenanceIncreasePercent:parseFloat(zd)||0,otherExpenses:parseFloat(Ld)||0,otherExpensesIncreasePercent:parseFloat(Td)||0,vacancyRatePercent:parseFloat(Rd)||0,managementFeePercent:parseFloat(_d)||0,appreciationRatePercent:parseFloat(Md)||0,holdingPeriodYears:parseInt(Id)||0,sellingCostPercent:parseFloat(Fd)||0,schoolElementary:parseFloat($d)||0,schoolMiddle:parseFloat(Dd)||0,schoolHigh:parseFloat(Ud)||0,airQualityIndex:parseInt(Hd)||0,fireRisk:Wd||"Low",soilType:Yd||"Unknown",mallsNearby:Gd||"None",forestPreserves:Jd||"None",latitude:parseFloat(Ta)||0,longitude:parseFloat(_a)||0,market:Ia||"Chicago",units:parseInt($a)||1,valueAddPotential:Da||"",dealStatus:Ua||"Passed"}),qd=async f=>{f.preventDefault(),!(!I||!D)&&(x?await n(x.id,Ha()):await t(Ha()),E(!1),Pr())},Pn=f=>{const R=f.purchasePrice||32e4,V=R*((f.downPaymentPercent??25)/100),Te=R-V,De=(f.interestRate??7)/100/12,Ae=(f.loanTermYears??30)*12;let Er=0;De>0&&Ae>0?Er=Te*(De*Math.pow(1+De,Ae))/(Math.pow(1+De,Ae)-1):Ae>0&&(Er=Te/Ae);const Kl=V+(f.otherPurchaseCosts??6e3)+(f.repairCost??2e4),Wa=f.rent||0,Gl=Wa*12,Xl=Gl*((f.vacancyRatePercent??5)/100),Qa=(Gl-Xl)*((f.managementFeePercent??0)/100),Ya=(f.annualPropertyTax??9e3)+(f.annualInsurance??1200)+(f.monthlyHOA??0)*12+(f.annualMaintenance??2e3)+(f.otherExpenses??500)+Xl+Qa,Jl=Math.max(0,Gl-Ya),Ka=Er*12,Ga=Jl-Ka,ef=R>0?Jl/R*100:0,tf=Kl>0?Ga/Kl*100:0,nf=f.holdingPeriodYears??5,Xa=[];let zr=R,Gt=Wa*12,Zl=f.annualPropertyTax??9e3,ql=f.annualInsurance??1200,ei=(f.monthlyHOA??0)*12,ti=f.annualMaintenance??2e3,ni=f.otherExpenses??500;for(let En=1;En<=nf;En++){zr=zr*(1+(f.appreciationRatePercent??3)/100),En>1&&(Gt=Gt*(1+3/100),Zl=Zl*(1+(f.taxIncreasePercent??3)/100),ql=ql*(1+(f.insuranceIncreasePercent??3)/100),ei=ei*(1+(f.hoaIncreasePercent??3)/100),ti=ti*(1+(f.maintenanceIncreasePercent??3)/100),ni=ni*(1+(f.otherExpensesIncreasePercent??3)/100));const Ja=Gt*((f.vacancyRatePercent??5)/100),rf=(Gt-Ja)*((f.managementFeePercent??0)/100),Za=Zl+ql+ei+ti+ni+Ja+rf,lf=Math.max(0,Gt-Za)-Ka;let zn=0;const Lr=En*12;De>0&&Ae>0&&Lr<Ae?zn=Te*(Math.pow(1+De,Ae)-Math.pow(1+De,Lr))/(Math.pow(1+De,Ae)-1):Lr>=Ae?zn=0:zn=Te-Te*(Lr/Ae);const sf=Math.max(0,zr-zn);Xa.push({year:En,value:Math.round(zr),income:Math.round(Gt),expenses:Math.round(Za),cashFlow:Math.round(lf),equity:Math.round(sf),loanBalance:Math.round(zn)})}return{downPayment:V,loanAmount:Te,monthlyMortgage:Er,initialCash:Kl,vacancyLoss:Xl,managementCost:Qa,annualExpenses:Ya,noi:Jl,cashFlow:Ga,capRate:ef,cashOnCash:tf,projections:Xa}},tt=e.filter(f=>!(M&&!f.address.toLowerCase().includes(M.toLowerCase())&&!(f.market&&f.market.toLowerCase().includes(M.toLowerCase()))||u!=="Any"&&f.rent>parseInt(u)));S.useEffect(()=>{tt.length>0&&!o&&d(tt[0])},[tt,o]),S.useEffect(()=>{if(window.L&&!h&&i==="portfolio"){const f=window.L.map("map-viewport").setView([41.8781,-87.6298],11);window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(f),j(f)}},[i,h]),S.useEffect(()=>{if(h&&window.L){b.forEach(R=>R.remove());const f=[];tt.forEach(R=>{if(R.latitude&&R.longitude){const V=R.purchasePrice?`$${Math.round(R.purchasePrice/1e3)}K`:`$${Math.round(R.rent/100)/10}K`,Te=window.L.divIcon({className:"custom-map-pin-badge",html:`<div class="map-pin-inner">${V}</div>`,iconSize:[52,26]}),De=window.L.marker([R.latitude,R.longitude],{icon:Te}).addTo(h).bindPopup(`<strong>${R.address}</strong><br/>Rent: $${R.rent.toLocaleString()}/mo`);De.on("click",()=>{d(R),Va(R),v(!0)}),f.push(De)}}),w(f)}},[h,tt]),S.useEffect(()=>{h&&o&&o.latitude&&o.longitude&&h.setView([o.latitude,o.longitude],13)},[o,h]);const Va=f=>{et(f.purchasePrice??32e4),yr(f.downPaymentPercent??25),wr(f.interestRate??7),ga(f.loanTermYears??30),va(f.otherPurchaseCosts??6e3),xa(f.repairCost??2e4),kr(f.annualPropertyTax??9e3),ya(f.taxIncreasePercent??3),Sr(f.annualInsurance??1200),wa(f.insuranceIncreasePercent??3),ja(f.monthlyHOA??0),ka(f.hoaIncreasePercent??3),Cr(f.annualMaintenance??2e3),Na(f.maintenanceIncreasePercent??3),Sa(f.otherExpenses??500),ba(f.otherExpensesIncreasePercent??3),Ca(f.vacancyRatePercent??5),Pa(f.managementFeePercent??0),Ea(f.appreciationRatePercent??3),za(f.holdingPeriodYears??5),La(f.sellingCostPercent??5)},pt=o?Pn(o):null;return l.jsxs("div",{className:"realpal-dashboard-container animate-fade-in",children:[l.jsxs("aside",{className:"left-icon-sidebar no-print",children:[l.jsx("div",{className:"sidebar-logo",children:"RP"}),l.jsxs("div",{className:"sidebar-icons-list",children:[l.jsxs("button",{className:`sidebar-icon-btn ${i==="portfolio"?"active":""}`,onClick:()=>{s("portfolio"),v(!1)},title:"Search Maps & Listings",children:["🔍",l.jsx("span",{className:"lbl",children:"Search"})]}),l.jsxs("button",{className:`sidebar-icon-btn ${i==="spreadsheet"?"active":""}`,onClick:()=>{s("spreadsheet"),v(!1)},title:"Spreadsheet Underwriting Sheet",children:["📄",l.jsx("span",{className:"lbl",children:"Sheet"})]}),l.jsxs("button",{className:`sidebar-icon-btn ${i==="compare"?"active":""}`,onClick:()=>{s("compare"),v(!1)},title:"Comparison Matrix",children:["⚖️",l.jsx("span",{className:"lbl",children:"Compare"})]}),l.jsxs("button",{className:"sidebar-icon-btn",onClick:()=>{Pr(),E(!0)},title:"Post Rental Listing",children:["⚙️",l.jsx("span",{className:"lbl",children:"List"})]})]})]}),l.jsxs("div",{className:"main-viewport-content",children:[l.jsxs("header",{className:"top-search-filter-bar no-print",children:[l.jsxs("div",{className:"search-bar-input-box",children:[l.jsx("input",{type:"text",placeholder:"Chicago, IL",value:M,onChange:f=>p(f.target.value),className:"top-search-address-field"}),M&&l.jsx("button",{className:"clear-search-btn",onClick:()=>p(""),children:"×"}),l.jsx("button",{className:"search-trigger-btn",children:"🔍"})]}),l.jsxs("div",{className:"top-dropdown-filters",children:[l.jsxs("select",{value:u,onChange:f=>m(f.target.value),className:"top-dropdown-select",children:[l.jsx("option",{value:"Any",children:"Any Price"}),l.jsx("option",{value:"1500",children:"Max $1,500/mo"}),l.jsx("option",{value:"2500",children:"Max $2,500/mo"}),l.jsx("option",{value:"3500",children:"Max $3,500/mo"}),l.jsx("option",{value:"5000",children:"Max $5,000/mo"})]}),l.jsxs("select",{value:g,onChange:f=>C(f.target.value),className:"top-dropdown-select",children:[l.jsx("option",{value:"Any",children:"Home Type"}),l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"})]}),l.jsx("button",{className:"btn-filter-more",children:"Filters ⚙️"})]}),l.jsx("button",{className:"btn-save-search-green",children:"Save Search"})]}),i==="portfolio"&&l.jsxs("div",{className:"dashboard-split-screen",children:[l.jsx("div",{className:"split-left-map-viewport no-print",children:l.jsx("div",{id:"map-viewport"})}),l.jsx("div",{className:"split-right-listings-grid-pane",children:y?l.jsxs("div",{className:"sliding-detail-drawer print-sheet",children:[l.jsxs("div",{className:"drawer-nav-header no-print",children:[l.jsx("button",{className:"btn-close-drawer",onClick:()=>v(!1),children:"← Back to listings"}),l.jsx("button",{className:"btn-print-pdf-green",onClick:()=>window.print(),children:"🖨️ Export PDF Property Sheet"})]}),l.jsxs("div",{className:"print-header print-only",children:[l.jsx("h2",{children:"RealPal Property Underwriting Log"}),l.jsx("h3",{children:o.address}),l.jsxs("p",{children:["Market: ",o.market," | Units: ",o.units," | Status: ",o.dealStatus]}),l.jsxs("p",{children:["Generated Date: ",new Date().toLocaleDateString()]})]}),l.jsxs("div",{className:"drawer-body-scrollable",children:[l.jsxs("div",{className:"drawer-hero-block",children:[l.jsx("span",{className:"badge-guarantee",children:"🛡️ RealPal Certified Sheet"}),l.jsx("h2",{children:o.address}),l.jsxs("p",{children:[o.units," Units • ",o.market]})]}),l.jsxs("div",{className:"yields-grid-row",children:[l.jsxs("div",{className:"yield-mini-card",children:[l.jsx("span",{className:"lbl",children:"Rent/mo"}),l.jsxs("span",{className:"val",children:["$",o.rent.toLocaleString()]})]}),l.jsxs("div",{className:"yield-mini-card",children:[l.jsx("span",{className:"lbl",children:"Cap Rate"}),l.jsxs("span",{className:"val text-green",children:[pt.capRate.toFixed(2),"%"]})]}),l.jsxs("div",{className:"yield-mini-card",children:[l.jsx("span",{className:"lbl",children:"Cash-on-Cash"}),l.jsxs("span",{className:`val ${pt.cashOnCash>=0?"text-green":"text-red"}`,children:[pt.cashOnCash.toFixed(2),"%"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsxs("div",{className:"underwriting-notes-panel",children:[l.jsx("h4",{children:"💡 Underwriting & Value-Add Details"}),l.jsx("p",{children:o.valueAddPotential||"No value-add potential registered for this listing."}),l.jsxs("div",{className:"status-badge-lbl",children:["Status: ",l.jsx("strong",{children:o.dealStatus})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"📊 ROI Parameters & Variable Calculator"}),l.jsxs("div",{className:"inline-calculator-block",children:[l.jsxs("div",{className:"inputs-strip no-print",children:[l.jsxs("div",{className:"form-grid-3",children:[l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:Oe,onChange:f=>{et(parseFloat(f.target.value)||0),n(o.id,{...o,purchasePrice:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:Ql,onChange:f=>{yr(parseFloat(f.target.value)||0),n(o.id,{...o,downPaymentPercent:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:Yl,onChange:f=>{wr(parseFloat(f.target.value)||0),n(o.id,{...o,interestRate:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Property Tax ($/yr)"}),l.jsx("input",{type:"number",value:jr,onChange:f=>{kr(parseFloat(f.target.value)||0),n(o.id,{...o,annualPropertyTax:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"HOI / Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Nr,onChange:f=>{Sr(parseFloat(f.target.value)||0),n(o.id,{...o,annualInsurance:parseFloat(f.target.value)||0})}})]}),l.jsxs("div",{className:"form-field-box",children:[l.jsx("label",{children:"Maintenance ($/yr)"}),l.jsx("input",{type:"number",value:br,onChange:f=>{Cr(parseFloat(f.target.value)||0),n(o.id,{...o,annualMaintenance:parseFloat(f.target.value)||0})}})]})]}),l.jsx("p",{className:"auto-save-warning",children:"⚡ Changes save to listing immediately"})]}),l.jsx("div",{className:"outputs-table-box",children:l.jsx("table",{className:"compact-roi-yield-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Initial Capital Invested"}),l.jsxs("td",{className:"text-right font-bold",children:["$",Math.round(pt.initialCash).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Monthly Mortgage (P&I)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round(pt.monthlyMortgage).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Taxes & HOI (Monthly)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round((jr+Nr)/12).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Maintenance & Vacancy (Monthly)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round((br+pt.vacancyLoss)/12).toLocaleString()]})]}),l.jsxs("tr",{className:"border-t font-bold",children:[l.jsx("td",{children:"Net Cash Flow"}),l.jsxs("td",{className:"text-right text-green",children:["$",Math.round(pt.cashFlow).toLocaleString(),"/yr"]})]})]})})})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"📈 Growth Log & Projections"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"projections-log-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Year"}),l.jsx("th",{children:"Property Value"}),l.jsx("th",{children:"Rental Income"}),l.jsx("th",{children:"Expenses"}),l.jsx("th",{children:"Cash Flow"}),l.jsx("th",{children:"Equity"})]})}),l.jsx("tbody",{children:pt.projections.map(f=>l.jsxs("tr",{children:[l.jsxs("td",{children:["Year ",f.year]}),l.jsxs("td",{children:["$",f.value.toLocaleString()]}),l.jsxs("td",{children:["$",f.income.toLocaleString()]}),l.jsxs("td",{children:["$",f.expenses.toLocaleString()]}),l.jsxs("td",{className:f.cashFlow>=0?"text-green":"text-red",children:["$",f.cashFlow.toLocaleString()]}),l.jsxs("td",{className:"text-green font-bold",children:["$",f.equity.toLocaleString()]})]},f.year))})]})}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"🎓 GreatSchools™ Nearby Ratings"}),l.jsxs("div",{className:"schools-bars-group",children:[l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Elementary School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolElementary??8.5)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolElementary??8.5).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Middle School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolMiddle??9)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolMiddle??9).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"High School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(o.schoolHigh??8.8)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(o.schoolHigh??8.8).toFixed(1),"/10"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"🌱 Environment & Safety Indicators"}),l.jsx("table",{className:"env-summary-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Air Quality Index (AQI)"}),l.jsx("td",{children:l.jsxs("strong",{children:[o.airQualityIndex??32," AQI (Good)"]})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Wildfire Risk"}),l.jsx("td",{className:"text-orange font-bold",children:o.fireRisk??"Low"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Soil Framework"}),l.jsx("td",{children:o.soilType??"Sandy clay, stable"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Forest Preserves Nearby"}),l.jsx("td",{children:o.forestPreserves??"None"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Shopping Malls Nearby"}),l.jsx("td",{children:o.mallsNearby??"None"})]})]})}),l.jsx("div",{className:"sheet-actions no-print",style:{marginTop:"1.5rem",display:"flex",justifyContent:"flex-end"},children:l.jsx("button",{className:"btn-print-pdf-green",onClick:()=>window.print(),children:"🖨️ Export PDF Property Sheet"})})]})]}):l.jsxs("div",{className:"listings-grid-scroller no-print",children:[l.jsxs("div",{className:"listings-scroller-header",children:[l.jsx("h3",{children:"Chicago, IL Real Estate & Homes For Rent"}),l.jsxs("span",{children:[tt.length," results • Sort: ",l.jsx("strong",{children:"Homes for You"})]})]}),tt.length===0?l.jsxs("div",{className:"empty-grid-state",children:[l.jsx("span",{className:"large-emoji-display",children:"🏠"}),l.jsx("h4",{children:"No listings match your search"}),l.jsx("p",{children:"Try clearing your queries or check different price parameters."})]}):l.jsx("div",{className:"listings-two-col-grid",children:tt.map(f=>{const R=Pn(f);return l.jsxs("div",{className:"listing-grid-card",onClick:()=>{d(f),Va(f),v(!0)},children:[l.jsxs("div",{className:"card-media-gallery",children:[l.jsx("span",{className:"card-top-left-badge",children:"Spacious layout"}),l.jsx("span",{className:"card-favorite-heart",children:"❤️"}),l.jsxs("div",{className:"card-dots-carousel",children:[l.jsx("span",{className:"dot active"}),l.jsx("span",{className:"dot"}),l.jsx("span",{className:"dot"}),l.jsx("span",{className:"dot"})]})]}),l.jsxs("div",{className:"card-description-box",children:[l.jsx("div",{className:"price-line",children:l.jsxs("h3",{children:["$",f.rent.toLocaleString(),"/mo"]})}),l.jsxs("div",{className:"details-line",children:[l.jsxs("strong",{children:[f.units," Units"]})," • ",l.jsx("strong",{children:f.type})," • ",l.jsx("strong",{children:"1,450 sqft"})," • Active"]}),l.jsx("div",{className:"address-line",children:f.address}),l.jsxs("div",{className:"agency-line",children:["RealPal Underwritten Listing • ",f.dealStatus]}),l.jsxs("div",{className:"underwriting-badge-row",children:[l.jsxs("span",{className:"badge cap",children:["Cap Rate: ",R.capRate.toFixed(1),"%"]}),l.jsxs("span",{className:"badge coc",children:["CoC: ",R.cashOnCash.toFixed(1),"%"]})]})]})]},f.id)})})]})})]}),i==="spreadsheet"&&l.jsx("div",{className:"spreadsheet-view-container no-print",children:l.jsxs("div",{className:"spreadsheet-card-container",children:[l.jsx("h2",{className:"spreadsheet-title",children:"📋 Real Estate Investment Underwriting log"}),l.jsx("p",{className:"spreadsheet-subtitle",children:"Chicago Area Portfolios Underwriting Log"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"spreadsheet-underwriting-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Address"}),l.jsx("th",{children:"Market"}),l.jsx("th",{className:"text-center",children:"Units"}),l.jsx("th",{className:"text-right",children:"Ask Price ($)"}),l.jsx("th",{className:"text-right",children:"Gross Income ($/yr)"}),l.jsx("th",{className:"text-right",children:"Total Expenses ($/yr)"}),l.jsx("th",{className:"text-right",children:"NOI ($/yr)"}),l.jsx("th",{className:"text-center",children:"Adj Cap Rate"}),l.jsx("th",{className:"text-right",children:"Cash Flow ($/yr)"}),l.jsx("th",{className:"text-center",children:"CoC Return"}),l.jsx("th",{children:"Value-Add Potential"}),l.jsx("th",{children:"Status"})]})}),l.jsx("tbody",{children:tt.map(f=>{const R=Pn(f),V=f.dealStatus&&f.dealStatus.toLowerCase().includes("passed");return l.jsxs("tr",{children:[l.jsx("td",{className:"font-semibold",children:f.address}),l.jsx("td",{children:f.market||"Chicago"}),l.jsx("td",{className:"text-center text-blue font-semibold",children:f.units||1}),l.jsxs("td",{className:"text-right text-blue font-semibold",children:["$",(f.purchasePrice??32e4).toLocaleString()]}),l.jsxs("td",{className:"text-right",children:["$",Math.round(f.rent*12).toLocaleString()]}),l.jsxs("td",{className:"text-right",children:["$",Math.round(R.annualExpenses).toLocaleString()]}),l.jsxs("td",{className:"text-right font-semibold",children:["$",Math.round(R.noi).toLocaleString()]}),l.jsxs("td",{className:"text-center text-blue font-semibold",children:[R.capRate.toFixed(1),"%"]}),l.jsxs("td",{className:`text-right font-semibold ${R.cashFlow>=0?"":"text-red"}`,children:[R.cashFlow>=0?"":"(","$",Math.abs(Math.round(R.cashFlow)).toLocaleString(),"$",R.cashFlow>=0?"":")"]}),l.jsxs("td",{className:`text-center font-semibold ${R.cashOnCash>=0?"":"text-red"}`,children:[R.cashOnCash.toFixed(1),"%"]}),l.jsx("td",{className:"value-add-text-cell",children:f.valueAddPotential||"Stabilized property."}),l.jsx("td",{className:"status-cell",children:l.jsx("span",{className:`status-badge-lbl ${V?"passed":"pursue"}`,children:f.dealStatus||"Passed"})})]},f.id)})})]})}),l.jsx("div",{style:{marginTop:"1.5rem",display:"flex",justifyContent:"flex-end"},children:l.jsx("button",{className:"btn-print-pdf-green",onClick:()=>window.print(),children:"🖨️ Print Underwriting Log"})})]})}),i==="compare"&&l.jsx("div",{className:"spreadsheet-view-container no-print",children:a.length===0?l.jsxs("div",{className:"empty-grid-state",children:[l.jsx("span",{className:"large-emoji-display",children:"⚖️"}),l.jsx("h4",{children:"No properties selected for comparison"}),l.jsx("p",{children:"Go back to the Search Listings view and select the balance icon (⚖️) on up to 3 listings to compare them."})]}):l.jsxs("div",{className:"spreadsheet-card-container",children:[l.jsx("h2",{className:"spreadsheet-title",children:"⚖️ Side-by-Side Underwriting Comparison"}),l.jsxs("table",{className:"comparison-underwriting-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Feature Metric"}),a.map(f=>{const R=e.find(V=>V.id===f);return l.jsx("th",{className:"text-center",children:R==null?void 0:R.address},f)})]})}),l.jsxs("tbody",{children:[l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:a.length+1,children:"🏡 Basic Parameters"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Type"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center",children:(R=e.find(V=>V.id===f))==null?void 0:R.type},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Market"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center",children:(R=e.find(V=>V.id===f))==null?void 0:R.market},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Units"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center",children:(R=e.find(V=>V.id===f))==null?void 0:R.units},f)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:a.length+1,children:"💰 Underwriting Yields"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Monthly Rent"}),a.map(f=>{var R;return l.jsxs("td",{className:"text-center font-bold",children:["$",(R=e.find(V=>V.id===f))==null?void 0:R.rent.toLocaleString()]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Ask Price"}),a.map(f=>{var R;return l.jsxs("td",{className:"text-center font-bold",children:["$",(((R=e.find(V=>V.id===f))==null?void 0:R.purchasePrice)??32e4).toLocaleString()]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Adjusted Cap Rate"}),a.map(f=>{const R=e.find(Te=>Te.id===f),V=Pn(R);return l.jsxs("td",{className:"text-center font-bold text-green",children:[V.capRate.toFixed(2),"%"]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"CoC Return"}),a.map(f=>{const R=e.find(Te=>Te.id===f),V=Pn(R);return l.jsxs("td",{className:`text-center font-bold ${V.cashOnCash>=0?"text-green":"text-red"}`,children:[V.cashOnCash.toFixed(2),"%"]},f)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:a.length+1,children:"🌱 Location Hazard Profile"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Air Quality Index"}),a.map(f=>{var R;return l.jsxs("td",{className:"text-center",children:[((R=e.find(V=>V.id===f))==null?void 0:R.airQualityIndex)??32," AQI"]},f)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Wildfire Risk"}),a.map(f=>{var R;return l.jsx("td",{className:"text-center text-orange font-bold",children:((R=e.find(V=>V.id===f))==null?void 0:R.fireRisk)??"Low"},f)})]})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:l.jsx("button",{onClick:()=>c([]),className:"btn-print-pdf-green",children:"Clear Selections"})})]})})]}),L&&l.jsx("div",{className:"modal-overlay no-print",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>{E(!1),Pr()},children:"×"}),l.jsx("h3",{className:"modal-title",children:x?"Edit Underwriting Listing":"Post Underwriting Listing"}),l.jsx("p",{className:"modal-subtitle",children:"Fill in details to build cash flow sheet and map pins in Chicago."}),l.jsxs("form",{onSubmit:qd,style:{marginTop:"1.25rem"},className:"modal-scroll-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Street Address *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. 1422 N La Salle Dr, Chicago, IL 60610",value:I,onChange:f=>P(f.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Market *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Uptown, Chicago",value:Ia,onChange:f=>Fa(f.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Units *"}),l.jsx("input",{type:"number",required:!0,min:"1",value:$a,onChange:f=>Oa(parseInt(f.target.value)||1),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly Rent ($) *"}),l.jsx("input",{type:"number",required:!0,min:"0",placeholder:"e.g. 3100",value:D,onChange:f=>B(f.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Type"}),l.jsxs("select",{value:N,onChange:f=>_(f.target.value),className:"form-select",children:[l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"}),l.jsx("option",{value:"Townhouse",children:"Townhouse"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Deal Status"}),l.jsxs("select",{value:Ua,onChange:f=>Ba(f.target.value),className:"form-select",children:[l.jsx("option",{value:"Passed",children:"Passed"}),l.jsx("option",{value:"Passed at ask",children:"Passed at ask"}),l.jsx("option",{value:"PURSUE - request T12",children:"PURSUE - request T12"}),l.jsx("option",{value:"Pending - backup offer?",children:"Pending - backup offer?"}),l.jsx("option",{value:"Pull rent roll",children:"Pull rent roll"}),l.jsx("option",{value:"Verify listing",children:"Verify listing"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Value-Add Potential Description"}),l.jsx("textarea",{value:Da,onChange:f=>Aa(f.target.value),className:"form-input",style:{height:"70px",resize:"vertical"},placeholder:"Notes on rent reposition, cosmetic renovation, heat bill-back..."})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Full Name (Optional)"}),l.jsx("input",{type:"text",placeholder:"Vacant",value:de,onChange:f=>ft(f.target.value),className:"form-input"})]}),de&&l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease Start"}),l.jsx("input",{type:"date",value:$,onChange:f=>K(f.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease End"}),l.jsx("input",{type:"date",value:ee,onChange:f=>Mt(f.target.value),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"📊 Acquisition & ROI Parameters"}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:Oe,onChange:f=>et(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:Ql,onChange:f=>yr(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:Yl,onChange:f=>wr(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Taxes ($/yr)"}),l.jsx("input",{type:"number",value:jr,onChange:f=>kr(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Nr,onChange:f=>Sr(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Maintenance ($/yr)"}),l.jsx("input",{type:"number",value:br,onChange:f=>Cr(parseFloat(f.target.value)||0),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"📍 Map Coordinates (Chicago Area)"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Latitude"}),l.jsx("input",{type:"number",step:"0.0001",value:Ta,onChange:f=>Ra(parseFloat(f.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Longitude"}),l.jsx("input",{type:"number",step:"0.0001",value:_a,onChange:f=>Ma(parseFloat(f.target.value)||0),className:"form-input"})]})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>{E(!1),Pr()},children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Publish Listing"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Om({properties:e,jobs:t,onAddJob:n,bids:r,onAcceptBid:i,groupDeals:s,onToggleGroupDeal:a}){const[c,o]=S.useState(!1),[d,y]=S.useState(null),[v,h]=S.useState(""),[j,b]=S.useState(""),[w,M]=S.useState("Plumbing"),[p,u]=S.useState(""),[m,g]=S.useState(""),C=async x=>{if(x.preventDefault(),!v||!j||!m)return;const O=e.find(N=>N.id.toString()===j.toString()),I=O?O.address:"Unknown Property",P={title:v,propertyId:j,propertyName:I,category:w,description:p,budget:parseFloat(m)};await n(P),o(!1),h(""),b(""),M("Plumbing"),u(""),g("")},L=async(x,O)=>{await i(x,O),y(null)},E=x=>{a(x)};return l.jsxs("div",{className:"crowdsource-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Crowdsourced Services"}),l.jsx("p",{className:"view-description",children:"Post repair tickets to secure bids or join collective pools in your ZIP code for volume discounts."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>{e.length===0?alert("Please register a property in the 'Rental Properties' tab first before listing maintenance jobs."):o(!0)},children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Post Repair Ticket"]})]}),l.jsxs("div",{className:"marketplace-layout",children:[l.jsxs("div",{className:"tickets-column",children:[l.jsx("h3",{className:"column-title",children:"Active Repair Tickets"}),l.jsx("p",{className:"column-p",children:"Submit issues to trigger auto-competitions among verified local providers."}),t.length===0?l.jsxs("div",{className:"empty-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔧"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No maintenance tickets"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Your active service queries and bid entries will be detailed here."})]}):l.jsx("div",{className:"tickets-list",children:t.map(x=>{var P,N;const O=r[x.id]||[],I=x.status==="bidding"?"badge-primary":x.status==="active"?"badge-success":"badge-info";return l.jsxs("div",{className:"ticket-card glass-card",children:[l.jsxs("div",{className:"ticket-header",children:[l.jsx("span",{className:`badge ${I}`,children:x.status==="bidding"?"Gathering Bids":x.status==="active"?"Service Scheduled":"Completed"}),l.jsxs("span",{className:"ticket-date",children:["Posted ",x.datePosted]})]}),l.jsx("h4",{className:"ticket-title",children:x.title}),l.jsxs("div",{className:"ticket-meta",children:[l.jsxs("span",{children:["📍 ",x.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["🏷️ ",x.category]})]}),l.jsx("p",{className:"ticket-desc",children:x.description}),l.jsxs("div",{className:"ticket-footer",children:[l.jsxs("div",{className:"ticket-budget",children:[l.jsx("span",{className:"lbl",children:"Target Budget:"}),l.jsxs("span",{className:"val",children:["$",x.budget]})]}),x.status==="bidding"?l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(x),children:["View Bids (",O.length,")",O.length>0&&l.jsx("span",{className:"bid-alert-dot"})]}):l.jsxs("div",{className:"hired-badge",children:[l.jsxs("span",{children:["Hired: ",(P=x.acceptedBid)==null?void 0:P.providerName," ($",(N=x.acceptedBid)==null?void 0:N.price,")"]}),x.savings>0&&l.jsxs("span",{className:"savings-tag",children:["Saved $",x.savings,"!"]})]})]})]},x.id)})})]}),l.jsxs("div",{className:"pools-column",children:[l.jsx("h3",{className:"column-title",children:"Neighborhood Bulk Pools"}),l.jsx("p",{className:"column-p",children:"Pool properties with nearby landlords in the same ZIP code to negotiate bulk pricing from vendors."}),l.jsx("div",{className:"pools-list",children:s.map(x=>l.jsxs("div",{className:`pool-card glass-card ${x.unlocked===1?"unlocked-card":""}`,children:[l.jsxs("div",{className:"pool-header",children:[l.jsxs("span",{className:"pool-zip",children:["ZIP: ",x.zipCode]}),l.jsx("span",{className:`badge ${x.unlocked===1?"badge-success":"badge-warning"}`,children:x.unlocked===1?"💰 Discount Unlocked!":`${x.targetCount-x.currentCount} Landlords Needed`})]}),l.jsx("h4",{className:"pool-service-title",children:x.serviceType}),l.jsx("p",{className:"pool-desc",children:x.description}),l.jsxs("div",{className:"pool-stats",children:[l.jsxs("div",{className:"progress-labels",children:[l.jsxs("span",{children:["Joined: ",x.currentCount," / ",x.targetCount," Landlords"]}),l.jsxs("span",{children:[Math.round(x.currentCount/x.targetCount*100),"%"]})]}),l.jsx("div",{className:"progress-bar-track",children:l.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(100,x.currentCount/x.targetCount*100)}%`,backgroundColor:x.unlocked===1?"var(--color-success)":"var(--color-primary)"}})})]}),l.jsxs("div",{className:"pool-pricing-grid",children:[l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Bulk Rate"}),l.jsxs("span",{className:"val",children:["$",x.bulkPrice]})]}),l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Est. Savings"}),l.jsxs("span",{className:"val text-success",children:["-",x.discountPercent,"%"]})]})]}),l.jsx("button",{className:`btn ${x.joined===1?"btn-danger":"btn-primary"} btn-sm w-100`,onClick:()=>E(x.id),children:x.joined===1?"Leave Group Pool":"Join Collective Pool"})]},x.id))})]})]}),c&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>o(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Post Maintenance Ticket"}),l.jsx("p",{className:"modal-subtitle",children:"Post repair requirements. Our local network will bid within minutes."}),l.jsxs("form",{onSubmit:C,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Issue Title *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Broken water heater, Gutter maintenance",value:v,onChange:x=>h(x.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Select Property *"}),l.jsxs("select",{required:!0,value:j,onChange:x=>b(x.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose property --"}),e.map(x=>l.jsx("option",{value:x.id,children:x.address},x.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Service Category"}),l.jsxs("select",{value:w,onChange:x=>M(x.target.value),className:"form-select",children:[l.jsx("option",{value:"Plumbing",children:"Plumbing"}),l.jsx("option",{value:"Electrical",children:"Electrical"}),l.jsx("option",{value:"HVAC",children:"HVAC"}),l.jsx("option",{value:"Roofing",children:"Roofing"}),l.jsx("option",{value:"Landscaping",children:"Landscaping"}),l.jsx("option",{value:"Other",children:"General Handyman"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Max Budget ($) *"}),l.jsx("input",{type:"number",required:!0,min:"1",placeholder:"e.g. 350",value:m,onChange:x=>g(x.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Problem Details / Scope of Work"}),l.jsx("textarea",{placeholder:"Provide plumbing sizes, brand models, pictures or access timelines to help providers bid accurately.",value:p,onChange:x=>u(x.target.value),className:"form-textarea"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>o(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Post to Marketplace"})]})]})]})}),d&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",style:{maxWidth:"600px"},children:[l.jsx("button",{className:"modal-close",onClick:()=>y(null),children:"×"}),l.jsxs("h3",{className:"modal-title",children:["Bidding Room: ",d.title]}),l.jsx("p",{className:"modal-subtitle",children:"Review quotes from service providers. Simulating real-time local updates."}),l.jsx("div",{className:"bids-list",style:{marginTop:"1.5rem",display:"flex",flexDirection:"column",gap:"1rem"},children:(r[d.id]||[]).length===0?l.jsxs("div",{className:"simulating-spinner",children:[l.jsx("div",{className:"spinner"}),l.jsxs("p",{children:["Searching for providers and requesting quotes... ",l.jsx("br",{}),l.jsx("span",{children:"Bids usually arrive in 5-10 seconds."})]})]}):(r[d.id]||[]).map(x=>{const O=Math.round((d.budget-x.price)/d.budget*100);return l.jsxs("div",{className:"bid-item glass-card",style:{padding:"1rem",background:"rgba(0,0,0,0.2)"},children:[l.jsxs("div",{className:"bid-item-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsxs("h4",{style:{color:"#fff",fontSize:"1rem"},children:[x.providerName,x.verified===1&&l.jsx("span",{className:"verified-check",title:"RealPal Verified License",children:" ✓"})]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginTop:"0.2rem"},children:[l.jsxs("span",{style:{color:"var(--color-warning)",fontSize:"0.85rem"},children:["★ ",x.rating]}),l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:["• ETA: ",x.eta]})]})]}),l.jsxs("div",{style:{textAlign:"right"},children:[l.jsxs("div",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#fff"},children:["$",x.price]}),O>0?l.jsxs("span",{style:{color:"var(--color-success)",fontSize:"0.75rem",fontWeight:"700"},children:["Saves ",O,"%"]}):l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Budget Quote"})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:l.jsx("button",{className:"btn btn-success btn-sm",onClick:()=>L(d.id,x),children:"Hire & Authorize Lockbox"})})]},x.id)})}),(r[d.id]||[]).length<3&&(r[d.id]||[]).length>0&&l.jsx("p",{className:"bidding-tip",children:"💡 Keep this window open! More competitive service bids are currently formulating..."})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Dm({properties:e,reminders:t,onAddReminder:n,onToggleReminder:r,onDeleteReminder:i}){const[s,a]=S.useState(!1),[c,o]=S.useState("All"),[d,y]=S.useState(""),[v,h]=S.useState(""),[j,b]=S.useState("Medium"),[w,M]=S.useState("Maintenance"),[p,u]=S.useState("General"),m=async P=>{if(P.preventDefault(),!d||!v)return;const N=e.find(B=>B.id.toString()===p.toString()),_=N?N.address:"General Admin";await n({title:d,date:v,priority:j,category:w,propertyId:p,propertyName:_}),a(!1),y(""),h(""),b("Medium"),M("Maintenance"),u("General")},g=P=>{r(P)},C=P=>{i(P)},E=[...t.filter(P=>c==="All"?!0:P.category===c)].sort((P,N)=>P.completed!==N.completed?P.completed?1:-1:new Date(P.date)-new Date(N.date)),x=t.filter(P=>P.completed===0||P.completed===!1).length,O=t.filter(P=>(P.completed===0||P.completed===!1)&&P.priority==="High").length,I=P=>{switch(P){case"Rent":return"badge-success";case"Maintenance":return"badge-primary";case"Lease":return"badge-info";case"Tax":return"badge-warning";case"Compliance":return"badge-danger";default:return"badge-secondary"}};return l.jsxs("div",{className:"reminders-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Reminders & Tasks"}),l.jsx("p",{className:"view-description",children:"Set and follow up on critical items, including lease endpoints, tax milestones, and certifications."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"New Reminder"]})]}),x>0&&l.jsx("div",{className:"reminders-alert-banner glass-card",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("span",{className:"pulse-indicator"}),l.jsxs("div",{children:[l.jsxs("h4",{style:{fontSize:"0.95rem"},children:["You have ",x," outstanding landlord tasks."]}),l.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.8rem",marginTop:"0.1rem"},children:O>0?`Urgent attention required: ${O} high-priority tasks remain incomplete.`:"All high-priority items are currently up-to-date."})]})]})}),l.jsx("div",{className:"filters-row",children:l.jsx("div",{className:"category-tabs",children:["All","Rent","Maintenance","Lease","Tax","Compliance"].map(P=>l.jsx("button",{className:`filter-tab ${c===P?"active":""}`,onClick:()=>o(P),children:P},P))})}),l.jsx("div",{className:"reminders-list-container",children:E.length===0?l.jsxs("div",{className:"empty-reminders-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔔"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No reminders found"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Change your filter settings or record a new reminder for future inspection schedules."})]}):l.jsx("div",{className:"reminders-stack",children:E.map(P=>{const N=(P.completed===0||P.completed===!1)&&new Date(P.date)<new Date,_=P.completed===1||P.completed===!0;return l.jsxs("div",{className:`reminder-row glass-card ${_?"completed-row":""} ${N?"overdue-row":""}`,children:[l.jsxs("div",{className:"checkbox-col",children:[l.jsx("input",{type:"checkbox",checked:_,onChange:()=>g(P.id),className:"task-checkbox",id:`rem-${P.id}`}),l.jsx("label",{htmlFor:`rem-${P.id}`,className:"checkbox-visual",children:_&&"✓"})]}),l.jsxs("div",{className:"details-col",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"},children:[l.jsx("span",{className:`badge ${I(P.category)}`,children:P.category}),l.jsxs("span",{className:`priority-indicator prio-${P.priority.toLowerCase()}`,children:[P.priority," Priority"]}),N&&l.jsx("span",{className:"badge badge-danger",children:"OVERDUE"})]}),l.jsx("h4",{className:"reminder-title",children:P.title}),l.jsxs("div",{className:"reminder-meta",children:[l.jsxs("span",{children:["📍 ",P.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{className:N?"text-danger font-bold":"",children:["📅 Due: ",new Date(P.date).toLocaleDateString()]})]})]}),l.jsx("div",{className:"actions-col",children:l.jsx("button",{className:"btn btn-secondary btn-sm delete-task-btn",onClick:()=>C(P.id),children:"🗑️"})})]},P.id)})})}),s&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>a(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Create Task Reminder"}),l.jsx("p",{className:"modal-subtitle",children:"Schedule a new operational follow-up for your properties."}),l.jsxs("form",{onSubmit:m,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Task Description *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Inspect fire alarm, File schedule E taxes",value:d,onChange:P=>y(P.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Associate with Property"}),l.jsxs("select",{value:p,onChange:P=>u(P.target.value),className:"form-select",children:[l.jsx("option",{value:"General",children:"General / Portfolio Administration"}),e.map(P=>l.jsx("option",{value:P.id,children:P.address},P.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Category"}),l.jsxs("select",{value:w,onChange:P=>M(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Rent",children:"Rent Collection"}),l.jsx("option",{value:"Maintenance",children:"Maintenance / Repairs"}),l.jsx("option",{value:"Lease",children:"Lease Renewal"}),l.jsx("option",{value:"Tax",children:"Accounting & Taxes"}),l.jsx("option",{value:"Compliance",children:"Legal & Compliance"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Priority Level"}),l.jsxs("select",{value:j,onChange:P=>b(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Low",children:"Low"}),l.jsx("option",{value:"Medium",children:"Medium"}),l.jsx("option",{value:"High",children:"High"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Due Date *"}),l.jsx("input",{type:"date",required:!0,value:v,onChange:P=>h(P.target.value),className:"form-input"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>a(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Set Reminder"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Am({feedback:e,onAddFeedback:t}){const[n,r]=S.useState(""),[i,s]=S.useState(5),[a,c]=S.useState(""),[o,d]=S.useState(!1),y=["John Herman","Rohit Parthi","Harsha Pilli","Krishna Kanchancharla","Lakshminarayana P","Chandu V","Ranjit","Gopi","Niel","Sujan","Venkata Vedam","Bhaskar","Ashok Lamkshman","Raju","Hanumanth","Praveen"],v=async w=>{if(w.preventDefault(),!n||!a)return;const M={name:n,rating:parseInt(i),comment:a};await t(M),c(""),r(""),s(5),d(!0),setTimeout(()=>d(!1),3e3)},h=e.length,j=h>0?(e.reduce((w,M)=>w+M.rating,0)/h).toFixed(1):0,b=w=>"★".repeat(w)+"☆".repeat(5-w);return l.jsxs("div",{className:"feedback-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Concept Tester Panel"}),l.jsx("p",{className:"view-description",children:"Gathering structured feedback from target users to evaluate the RealPal MVP prototype."})]})}),l.jsxs("div",{className:"feedback-layout grid-2",children:[l.jsxs("div",{className:"glass-card submit-card",children:[l.jsx("h3",{className:"section-title",children:"Submit Tester Evaluation"}),l.jsx("p",{className:"section-p",children:"If you are on the tester team, select your name, rate your experience, and leave your honest feature reviews."}),o&&l.jsx("div",{className:"success-banner animate-slide-up",style:{backgroundColor:"var(--color-success-light)",border:"1px solid rgba(56,161,105,0.2)",padding:"0.85rem",borderRadius:"var(--radius-sm)",marginBottom:"1.25rem",color:"var(--color-success)",fontSize:"0.88rem",fontWeight:600},children:"✓ Review submitted! Thank you for helping shape the future of RealPal."}),l.jsxs("form",{onSubmit:v,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tester Identity *"}),l.jsxs("select",{required:!0,value:n,onChange:w=>r(w.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose your name --"}),y.map(w=>l.jsx("option",{value:w,children:w},w))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Concept Rating"}),l.jsx("div",{className:"rating-select-row",children:[1,2,3,4,5].map(w=>l.jsx("button",{type:"button",className:`star-select-btn ${i>=w?"filled":""}`,onClick:()=>s(w),children:"★"},w))})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Feedback Notes / Suggestions *"}),l.jsx("textarea",{required:!0,placeholder:"Share your thoughts on the business models, bidding simulators, or what features you would like added to manage your properties...",value:a,onChange:w=>c(w.target.value),className:"form-textarea"})]}),l.jsx("button",{type:"submit",className:"btn btn-primary w-100",style:{marginTop:"0.5rem"},children:"Submit Test Feedback"})]})]}),l.jsxs("div",{className:"reviews-column flex-column-center",children:[l.jsx("div",{className:"feedback-stats-header glass-card",children:l.jsxs("div",{className:"stat-row",children:[l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:j}),l.jsx("span",{className:"lbl",children:"Average Rating"})]}),l.jsx("div",{className:"stat-divider"}),l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:h}),l.jsx("span",{className:"lbl",children:"Total Reviews"})]})]})}),l.jsxs("div",{className:"reviews-scroll-feed",children:[l.jsx("h3",{className:"section-title",style:{fontSize:"1.15rem",marginBottom:"1rem",color:"#fff"},children:"Testimonial & Feedback Stream"}),e.length===0?l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"No feedback submitted yet. Be the first to review!"}):l.jsx("div",{className:"reviews-feed-stack",children:e.map(w=>l.jsxs("div",{className:"review-feed-card glass-card",children:[l.jsxs("div",{className:"review-feed-header",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"reviewer-name",children:w.name}),l.jsxs("span",{className:"reviewer-meta",children:[w.simulated===1?"Prepopulated Test":"User Tester"," • ",w.date]})]}),l.jsx("span",{className:"stars-string",children:b(w.rating)})]}),l.jsxs("p",{className:"reviewer-comment",children:['"',w.comment,'"']})]},w.id))})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const te="http://192.168.1.103:5000";function Um(){const[e,t]=S.useState("landing"),[n,r]=S.useState("premium"),[i,s]=S.useState([]),[a,c]=S.useState([]),[o,d]=S.useState([]),[y,v]=S.useState({}),[h,j]=S.useState([]),[b,w]=S.useState([]);S.useEffect(()=>{fetch(`${te}/api/subscription`).then(N=>N.json()).then(N=>r(N.subscription)).catch(N=>console.error("Error fetching subscription:",N)),fetch(`${te}/api/properties`).then(N=>N.json()).then(N=>s(N)).catch(N=>console.error("Error fetching properties:",N)),fetch(`${te}/api/reminders`).then(N=>N.json()).then(N=>c(N)).catch(N=>console.error("Error fetching reminders:",N)),fetch(`${te}/api/jobs`).then(N=>N.json()).then(async N=>{d(N);const _={};for(const D of N)if(D.status==="bidding")try{const de=await(await fetch(`${te}/api/jobs/${D.id}/bids`)).json();_[D.id]=de}catch(B){console.error("Error fetching bids for job:",D.id,B)}v(_)}).catch(N=>console.error("Error fetching jobs:",N)),fetch(`${te}/api/group-deals`).then(N=>N.json()).then(N=>j(N)).catch(N=>console.error("Error fetching group deals:",N)),fetch(`${te}/api/feedback`).then(N=>N.json()).then(N=>w(N)).catch(N=>console.error("Error fetching feedback:",N))},[]),S.useEffect(()=>{const N=o.filter(D=>D.status==="bidding");if(N.length===0)return;const _=setInterval(()=>{N.forEach(D=>{fetch(`${te}/api/jobs/${D.id}/bids`).then(B=>B.json()).then(B=>{v(de=>({...de,[D.id]:B}))}).catch(B=>console.error("Error polling bids:",B))})},2e3);return()=>clearInterval(_)},[o]);const M=async N=>{try{(await(await fetch(`${te}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscription:N})})).json()).success&&r(N)}catch(_){console.error("Error saving subscription:",_)}},p=async N=>{try{const D=await(await fetch(`${te}/api/properties`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();s([D,...i])}catch(_){console.error("Error creating property:",_)}},u=async(N,_)=>{try{const B=await(await fetch(`${te}/api/properties/${N}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)})).json();s(i.map(z=>z.id===N?B:z));const ft=await(await fetch(`${te}/api/reminders`)).json();c(ft)}catch(D){console.error("Error saving property changes:",D)}},m=async N=>{try{await fetch(`${te}/api/properties/${N}`,{method:"DELETE"}),s(i.filter(B=>B.id!==N));const D=await(await fetch(`${te}/api/reminders`)).json();c(D)}catch(_){console.error("Error deleting property:",_)}},g=async N=>{try{const D=await(await fetch(`${te}/api/reminders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();c([D,...a])}catch(_){console.error("Error creating task:",_)}},C=async N=>{try{const D=await(await fetch(`${te}/api/reminders/${N}`,{method:"PUT"})).json();c(a.map(B=>B.id===N?D:B))}catch(_){console.error("Error toggling task completion:",_)}},L=async N=>{try{await fetch(`${te}/api/reminders/${N}`,{method:"DELETE"}),c(a.filter(_=>_.id!==N))}catch(_){console.error("Error removing task:",_)}},E=async N=>{try{const D=await(await fetch(`${te}/api/jobs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();d([D,...o]),v(B=>({...B,[D.id]:[]}))}catch(_){console.error("Error posting maintenance ticket:",_)}},x=async(N,_)=>{try{const B=await(await fetch(`${te}/api/jobs/${N}/accept-bid`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bid:_})})).json();d(o.map(de=>de.id===N?B:de))}catch(D){console.error("Error hiring contractor:",D)}},O=async N=>{try{const D=await(await fetch(`${te}/api/group-deals/${N}/toggle`,{method:"POST"})).json();j(h.map(B=>B.id===N?D:B))}catch(_){console.error("Error toggling collective pool:",_)}},I=async N=>{try{const D=await(await fetch(`${te}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();w([D,...b])}catch(_){console.error("Error posting feedback reviews:",_)}},P=()=>{switch(e){case"landing":return l.jsx(cc,{subscription:n,setSubscription:M,setActiveTab:t});case"dashboard":return l.jsx(Fm,{properties:i,reminders:a,jobs:o,groupDeals:h,setActiveTab:t});case"properties":return l.jsx($m,{properties:i,onAddProperty:p,onUpdateProperty:u,onDeleteProperty:m});case"crowdsource":return l.jsx(Om,{properties:i,jobs:o,onAddJob:E,bids:y,onAcceptBid:x,groupDeals:h,onToggleGroupDeal:O});case"reminders":return l.jsx(Dm,{properties:i,reminders:a,onAddReminder:g,onToggleReminder:C,onDeleteReminder:L});case"feedback":return l.jsx(Am,{feedback:b,onAddFeedback:I});default:return l.jsx(cc,{subscription:n,setSubscription:M,setActiveTab:t})}};return l.jsxs("div",{className:"app-container",children:[l.jsx(Im,{activeTab:e,setActiveTab:t,subscription:n}),l.jsx("main",{className:"main-content",children:P()})]})}zi.createRoot(document.getElementById("root")).render(l.jsx(Nf.StrictMode,{children:l.jsx(Um,{})}));
