(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hc={exports:{}},Tl={},gc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.element"),ef=Symbol.for("react.portal"),tf=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),sf=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),cf=Symbol.for("react.memo"),uf=Symbol.for("react.lazy"),lo=Symbol.iterator;function df(e){return e===null||typeof e!="object"?null:(e=lo&&e[lo]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xc=Object.assign,yc={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||vc}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=Sn.prototype;function Ws(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||vc}var Qs=Ws.prototype=new wc;Qs.constructor=Ws;xc(Qs,Sn.prototype);Qs.isPureReactComponent=!0;var io=Array.isArray,jc=Object.prototype.hasOwnProperty,Ys={current:null},kc={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)jc.call(t,r)&&!kc.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var c=Array(o),f=0;f<o;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:yr,type:e,key:s,ref:a,props:i,_owner:Ys.current}}function ff(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ks(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function pf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var so=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pf(""+e.key):t.toString(36)}function Gr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yr:case ef:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bi(a,0):r,io(i)?(n="",e!=null&&(n=e.replace(so,"$&/")+"/"),Gr(i,t,n,"",function(f){return f})):i!=null&&(Ks(i)&&(i=ff(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(so,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",io(e))for(var o=0;o<e.length;o++){s=e[o];var c=r+bi(s,o);a+=Gr(s,t,n,c,i)}else if(c=df(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=r+bi(s,o++),a+=Gr(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _r(e,t,n){if(e==null)return e;var r=[],i=0;return Gr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function mf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Jr={transition:null},hf={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Jr,ReactCurrentOwner:Ys};function Sc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:_r,forEach:function(e,t,n){_r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _r(e,function(){t++}),t},toArray:function(e){return _r(e,function(t){return t})||[]},only:function(e){if(!Ks(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Sn;A.Fragment=tf;A.Profiler=rf;A.PureComponent=Ws;A.StrictMode=nf;A.Suspense=of;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hf;A.act=Sc;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xc({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ys.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)jc.call(t,c)&&!kc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){o=Array(c);for(var f=0;f<c;f++)o[f]=arguments[f+2];r.children=o}return{$$typeof:yr,type:e.type,key:i,ref:s,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lf,_context:e},e.Consumer=e};A.createElement=Nc;A.createFactory=function(e){var t=Nc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:af,render:e}};A.isValidElement=Ks;A.lazy=function(e){return{$$typeof:uf,_payload:{_status:-1,_result:e},_init:mf}};A.memo=function(e,t){return{$$typeof:cf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Jr.transition;Jr.transition={};try{e()}finally{Jr.transition=t}};A.unstable_act=Sc;A.useCallback=function(e,t){return xe.current.useCallback(e,t)};A.useContext=function(e){return xe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};A.useEffect=function(e,t){return xe.current.useEffect(e,t)};A.useId=function(){return xe.current.useId()};A.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return xe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};A.useRef=function(e){return xe.current.useRef(e)};A.useState=function(e){return xe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return xe.current.useTransition()};A.version="18.3.1";gc.exports=A;var b=gc.exports;const gf=qd(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=b,xf=Symbol.for("react.element"),yf=Symbol.for("react.fragment"),wf=Object.prototype.hasOwnProperty,jf=vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kf={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)wf.call(t,r)&&!kf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xf,type:e,key:s,ref:a,props:i,_owner:jf.current}}Tl.Fragment=yf;Tl.jsx=Cc;Tl.jsxs=Cc;hc.exports=Tl;var l=hc.exports,Zi={},bc={exports:{}},Re={},Pc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,I){var D=z.length;z.push(I);e:for(;0<D;){var Q=D-1>>>1,ne=z[Q];if(0<i(ne,I))z[Q]=I,z[D]=ne,D=Q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var I=z[0],D=z.pop();if(D!==I){z[0]=D;e:for(var Q=0,ne=z.length,Lt=ne>>>1;Q<Lt;){var De=2*(Q+1)-1,tt=z[De],$e=De+1,Ke=z[$e];if(0>i(tt,D))$e<ne&&0>i(Ke,tt)?(z[Q]=Ke,z[$e]=D,Q=$e):(z[Q]=tt,z[De]=D,Q=De);else if($e<ne&&0>i(Ke,D))z[Q]=Ke,z[$e]=D,Q=$e;else break e}}return I}function i(z,I){var D=z.sortIndex-I.sortIndex;return D!==0?D:z.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var c=[],f=[],h=1,y=null,g=3,j=!1,S=!1,w=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var I=n(f);I!==null;){if(I.callback===null)r(f);else if(I.startTime<=z)r(f),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(f)}}function v(z){if(w=!1,m(z),!S)if(n(c)!==null)S=!0,we(C);else{var I=n(f);I!==null&&et(v,I.startTime-z)}}function C(z,I){S=!1,w&&(w=!1,p(x),x=-1),j=!0;var D=g;try{for(m(I),y=n(c);y!==null&&(!(y.expirationTime>I)||z&&!P());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,g=y.priorityLevel;var ne=Q(y.expirationTime<=I);I=e.unstable_now(),typeof ne=="function"?y.callback=ne:y===n(c)&&r(c),m(I)}else r(c);y=n(c)}if(y!==null)var Lt=!0;else{var De=n(f);De!==null&&et(v,De.startTime-I),Lt=!1}return Lt}finally{y=null,g=D,j=!1}}var R=!1,E=null,x=-1,O=5,M=-1;function P(){return!(e.unstable_now()-M<O)}function k(){if(E!==null){var z=e.unstable_now();M=z;var I=!0;try{I=E(!0,z)}finally{I?_():(R=!1,E=null)}}else R=!1}var _;if(typeof d=="function")_=function(){d(k)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,U=$.port2;$.port1.onmessage=k,_=function(){U.postMessage(null)}}else _=function(){F(k,0)};function we(z){E=z,R||(R=!0,_())}function et(z,I){x=F(function(){z(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){S||j||(S=!0,we(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var D=g;g=I;try{return z()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=g;g=z;try{return I()}finally{g=D}},e.unstable_scheduleCallback=function(z,I,D){var Q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Q+D:Q):D=Q,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=D+ne,z={id:h++,callback:I,priorityLevel:z,startTime:D,expirationTime:ne,sortIndex:-1},D>Q?(z.sortIndex=D,t(f,z),n(c)===null&&z===n(f)&&(w?(p(x),x=-1):w=!0,et(v,D-Q))):(z.sortIndex=ne,t(c,z),S||j||(S=!0,we(C))),z},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(z){var I=g;return function(){var D=g;g=I;try{return z.apply(this,arguments)}finally{g=D}}}})(zc);Pc.exports=zc;var Nf=Pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=b,Ee=Nf;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ec=new Set,nr={};function Yt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(nr[e]=t,e=0;e<t.length;e++)Ec.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=Object.prototype.hasOwnProperty,Cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ao={},oo={};function bf(e){return qi.call(oo,e)?!0:qi.call(ao,e)?!1:Cf.test(e)?oo[e]=!0:(ao[e]=!0,!1)}function Pf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zf(e,t,n,r){if(t===null||typeof t>"u"||Pf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gs,Js);ue[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gs,Js);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gs,Js);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zf(t,n,i,r)&&(n=null),r||i===null?bf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Zs=Symbol.for("react.strict_mode"),es=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),ts=Symbol.for("react.suspense"),ns=Symbol.for("react.suspense_list"),ea=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),_c=Symbol.for("react.offscreen"),co=Symbol.iterator;function Fn(e){return e===null||typeof e!="object"?null:(e=co&&e[co]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Pi;function Un(e){if(Pi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pi=t&&t[1]||""}return`
`+Pi+e}var zi=!1;function Ei(e,t){if(!e||zi)return"";zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=o);break}}}finally{zi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Ef(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Ei(e.type,!1),e;case 11:return e=Ei(e.type.render,!1),e;case 1:return e=Ei(e.type,!0),e;default:return""}}function rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Zt:return"Portal";case es:return"Profiler";case Zs:return"StrictMode";case ts:return"Suspense";case ns:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ea:return t=e.displayName||null,t!==null?t:rs(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return rs(e(t))}catch{}}return null}function Rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rs(t);case 8:return t===Zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tf(e){var t=Lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mr(e){e._valueTracker||(e._valueTracker=Tf(e))}function Mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fc(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function is(e,t){Fc(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ss(e,t.type,n):t.hasOwnProperty("defaultValue")&&ss(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ss(e,t,n){(t!=="number"||al(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function as(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function po(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Vn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Ic(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Oc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,Dc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_f=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){_f.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function $c(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function Ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$c(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lf=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cs(e,t){if(t){if(Lf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ds=null;function ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,fn=null,pn=null;function ho(e){if(e=kr(e)){if(typeof fs!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Il(t),fs(e.stateNode,e.type,t))}}function Bc(e){fn?pn?pn.push(e):pn=[e]:fn=e}function Hc(){if(fn){var e=fn,t=pn;if(pn=fn=null,ho(e),t)for(e=0;e<t.length;e++)ho(t[e])}}function Uc(e,t){return e(t)}function Vc(){}var Ri=!1;function Wc(e,t,n){if(Ri)return e(t,n);Ri=!0;try{return Uc(e,t,n)}finally{Ri=!1,(fn!==null||pn!==null)&&(Vc(),Hc())}}function lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ps=!1;if(at)try{var In={};Object.defineProperty(In,"passive",{get:function(){ps=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{ps=!1}function Mf(e,t,n,r,i,s,a,o,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(h){this.onError(h)}}var Kn=!1,ol=null,cl=!1,ms=null,Ff={onError:function(e){Kn=!0,ol=e}};function If(e,t,n,r,i,s,a,o,c){Kn=!1,ol=null,Mf.apply(Ff,arguments)}function Of(e,t,n,r,i,s,a,o,c){if(If.apply(this,arguments),Kn){if(Kn){var f=ol;Kn=!1,ol=null}else throw Error(N(198));cl||(cl=!0,ms=f)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function go(e){if(Kt(e)!==e)throw Error(N(188))}function Df(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return go(i),e;if(s===r)return go(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Yc(e){return e=Df(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=Ee.unstable_scheduleCallback,vo=Ee.unstable_cancelCallback,$f=Ee.unstable_shouldYield,Af=Ee.unstable_requestPaint,te=Ee.unstable_now,Bf=Ee.unstable_getCurrentPriorityLevel,na=Ee.unstable_ImmediatePriority,Jc=Ee.unstable_UserBlockingPriority,ul=Ee.unstable_NormalPriority,Hf=Ee.unstable_LowPriority,Xc=Ee.unstable_IdlePriority,_l=null,Ze=null;function Uf(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(_l,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Qf,Vf=Math.log,Wf=Math.LN2;function Qf(e){return e>>>=0,e===0?32:31-(Vf(e)/Wf|0)|0}var Ir=64,Or=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Wn(o):(s&=a,s!==0&&(r=Wn(s)))}else a=n&~i,a!==0?r=Wn(a):s!==0&&(r=Wn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),i=1<<n,r|=e[n],t&=~i;return r}function Yf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-We(s),o=1<<a,c=i[a];c===-1?(!(o&n)||o&r)&&(i[a]=Yf(o,t)):c<=t&&(e.expiredLanes|=o),s&=~o}}function hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zc(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Gf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-We(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eu,la,tu,nu,ru,gs=!1,Dr=[],wt=null,jt=null,kt=null,ir=new Map,sr=new Map,gt=[],Jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xo(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function On(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=kr(t),t!==null&&la(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xf(e,t,n,r,i){switch(t){case"focusin":return wt=On(wt,e,t,n,r,i),!0;case"dragenter":return jt=On(jt,e,t,n,r,i),!0;case"mouseover":return kt=On(kt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ir.set(s,On(ir.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sr.set(s,On(sr.get(s)||null,e,t,n,r,i)),!0}return!1}function lu(e){var t=Ot(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Qc(n),t!==null){e.blockedOn=t,ru(e.priority,function(){tu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ds=r,n.target.dispatchEvent(r),ds=null}else return t=kr(n),t!==null&&la(t),e.blockedOn=n,!1;t.shift()}return!0}function yo(e,t,n){Xr(e)&&n.delete(t)}function Zf(){gs=!1,wt!==null&&Xr(wt)&&(wt=null),jt!==null&&Xr(jt)&&(jt=null),kt!==null&&Xr(kt)&&(kt=null),ir.forEach(yo),sr.forEach(yo)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,gs||(gs=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Zf)))}function ar(e){function t(i){return Dn(i,e)}if(0<Dr.length){Dn(Dr[0],e);for(var n=1;n<Dr.length;n++){var r=Dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Dn(wt,e),jt!==null&&Dn(jt,e),kt!==null&&Dn(kt,e),ir.forEach(t),sr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)lu(n),n.blockedOn===null&&gt.shift()}var mn=dt.ReactCurrentBatchConfig,fl=!0;function qf(e,t,n,r){var i=V,s=mn.transition;mn.transition=null;try{V=1,ia(e,t,n,r)}finally{V=i,mn.transition=s}}function ep(e,t,n,r){var i=V,s=mn.transition;mn.transition=null;try{V=4,ia(e,t,n,r)}finally{V=i,mn.transition=s}}function ia(e,t,n,r){if(fl){var i=vs(e,t,n,r);if(i===null)Bi(e,t,r,pl,n),xo(e,r);else if(Xf(i,e,t,n,r))r.stopPropagation();else if(xo(e,r),t&4&&-1<Jf.indexOf(e)){for(;i!==null;){var s=kr(i);if(s!==null&&eu(s),s=vs(e,t,n,r),s===null&&Bi(e,t,r,pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var pl=null;function vs(e,t,n,r){if(pl=null,e=ta(r),e=Ot(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bf()){case na:return 1;case Jc:return 4;case ul:case Hf:return 16;case Xc:return 536870912;default:return 16}default:return 16}}var xt=null,sa=null,Zr=null;function su(){if(Zr)return Zr;var e,t=sa,n=t.length,r,i="value"in xt?xt.value:xt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Zr=i.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function wo(){return!1}function Te(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$r:wo,this.isPropagationStopped=wo,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Te(Cn),jr=Z({},Cn,{view:0,detail:0}),tp=Te(jr),_i,Li,$n,Ll=Z({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(_i=e.screenX-$n.screenX,Li=e.screenY-$n.screenY):Li=_i=0,$n=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),jo=Te(Ll),np=Z({},Ll,{dataTransfer:0}),rp=Te(np),lp=Z({},jr,{relatedTarget:0}),Mi=Te(lp),ip=Z({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),sp=Te(ip),ap=Z({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),op=Te(ap),cp=Z({},Cn,{data:0}),ko=Te(cp),up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fp[e])?!!t[e]:!1}function oa(){return pp}var mp=Z({},jr,{key:function(e){if(e.key){var t=up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=Te(mp),gp=Z({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),No=Te(gp),vp=Z({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),xp=Te(vp),yp=Z({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=Te(yp),jp=Z({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kp=Te(jp),Np=[9,13,27,32],ca=at&&"CompositionEvent"in window,Gn=null;at&&"documentMode"in document&&(Gn=document.documentMode);var Sp=at&&"TextEvent"in window&&!Gn,au=at&&(!ca||Gn&&8<Gn&&11>=Gn),So=" ",Co=!1;function ou(e,t){switch(e){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function Cp(e,t){switch(e){case"compositionend":return cu(t);case"keypress":return t.which!==32?null:(Co=!0,So);case"textInput":return e=t.data,e===So&&Co?null:e;default:return null}}function bp(e,t){if(en)return e==="compositionend"||!ca&&ou(e,t)?(e=su(),Zr=sa=xt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return au&&t.locale!=="ko"?null:t.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pp[e.type]:t==="textarea"}function uu(e,t,n,r){Bc(r),t=ml(t,"onChange"),0<t.length&&(n=new aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,or=null;function zp(e){ju(e,0)}function Ml(e){var t=rn(e);if(Mc(t))return e}function Ep(e,t){if(e==="change")return t}var du=!1;if(at){var Fi;if(at){var Ii="oninput"in document;if(!Ii){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),Ii=typeof Po.oninput=="function"}Fi=Ii}else Fi=!1;du=Fi&&(!document.documentMode||9<document.documentMode)}function zo(){Jn&&(Jn.detachEvent("onpropertychange",fu),or=Jn=null)}function fu(e){if(e.propertyName==="value"&&Ml(or)){var t=[];uu(t,or,e,ta(e)),Wc(zp,t)}}function Rp(e,t,n){e==="focusin"?(zo(),Jn=t,or=n,Jn.attachEvent("onpropertychange",fu)):e==="focusout"&&zo()}function Tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(or)}function _p(e,t){if(e==="click")return Ml(t)}function Lp(e,t){if(e==="input"||e==="change")return Ml(t)}function Mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Mp;function cr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qi.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ro(e,t){var n=Eo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eo(n)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mu(){for(var e=window,t=al();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=al(e.document)}return t}function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fp(e){var t=mu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pu(n.ownerDocument.documentElement,n)){if(r!==null&&ua(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ro(n,s);var a=Ro(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ip=at&&"documentMode"in document&&11>=document.documentMode,tn=null,xs=null,Xn=null,ys=!1;function To(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||tn==null||tn!==al(r)||(r=tn,"selectionStart"in r&&ua(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&cr(Xn,r)||(Xn=r,r=ml(xs,"onSelect"),0<r.length&&(t=new aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Oi={},hu={};at&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Fl(e){if(Oi[e])return Oi[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hu)return Oi[e]=t[n];return e}var gu=Fl("animationend"),vu=Fl("animationiteration"),xu=Fl("animationstart"),yu=Fl("transitionend"),wu=new Map,_o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){wu.set(e,t),Yt(t,[e])}for(var Di=0;Di<_o.length;Di++){var $i=_o[Di],Op=$i.toLowerCase(),Dp=$i[0].toUpperCase()+$i.slice(1);Rt(Op,"on"+Dp)}Rt(gu,"onAnimationEnd");Rt(vu,"onAnimationIteration");Rt(xu,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(yu,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$p=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));function Lo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Of(r,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],c=o.instance,f=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;Lo(i,o,f),s=c}else for(a=0;a<r.length;a++){if(o=r[a],c=o.instance,f=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;Lo(i,o,f),s=c}}}if(cl)throw e=ms,cl=!1,ms=null,e}function Y(e,t){var n=t[Ss];n===void 0&&(n=t[Ss]=new Set);var r=e+"__bubble";n.has(r)||(ku(t,e,2,!1),n.add(r))}function Ai(e,t,n){var r=0;t&&(r|=4),ku(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Br]){e[Br]=!0,Ec.forEach(function(n){n!=="selectionchange"&&($p.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,Ai("selectionchange",!1,t))}}function ku(e,t,n,r){switch(iu(t)){case 1:var i=qf;break;case 4:i=ep;break;default:i=ia}n=i.bind(null,t,n,e),i=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Ot(o),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}o=o.parentNode}}r=r.return}Wc(function(){var f=s,h=ta(n),y=[];e:{var g=wu.get(e);if(g!==void 0){var j=aa,S=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":j=hp;break;case"focusin":S="focus",j=Mi;break;case"focusout":S="blur",j=Mi;break;case"beforeblur":case"afterblur":j=Mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=xp;break;case gu:case vu:case xu:j=sp;break;case yu:j=wp;break;case"scroll":j=tp;break;case"wheel":j=kp;break;case"copy":case"cut":case"paste":j=op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=No}var w=(t&4)!==0,F=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=f,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=lr(d,p),v!=null&&w.push(dr(d,v,m)))),F)break;d=d.return}0<w.length&&(g=new j(g,S,null,n,h),y.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",g&&n!==ds&&(S=n.relatedTarget||n.fromElement)&&(Ot(S)||S[ot]))break e;if((j||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,j?(S=n.relatedTarget||n.toElement,j=f,S=S?Ot(S):null,S!==null&&(F=Kt(S),S!==F||S.tag!==5&&S.tag!==6)&&(S=null)):(j=null,S=f),j!==S)){if(w=jo,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=No,v="onPointerLeave",p="onPointerEnter",d="pointer"),F=j==null?g:rn(j),m=S==null?g:rn(S),g=new w(v,d+"leave",j,n,h),g.target=F,g.relatedTarget=m,v=null,Ot(h)===f&&(w=new w(p,d+"enter",S,n,h),w.target=m,w.relatedTarget=F,v=w),F=v,j&&S)t:{for(w=j,p=S,d=0,m=w;m;m=Xt(m))d++;for(m=0,v=p;v;v=Xt(v))m++;for(;0<d-m;)w=Xt(w),d--;for(;0<m-d;)p=Xt(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Xt(w),p=Xt(p)}w=null}else w=null;j!==null&&Mo(y,g,j,w,!1),S!==null&&F!==null&&Mo(y,F,S,w,!0)}}e:{if(g=f?rn(f):window,j=g.nodeName&&g.nodeName.toLowerCase(),j==="select"||j==="input"&&g.type==="file")var C=Ep;else if(bo(g))if(du)C=Lp;else{C=Tp;var R=Rp}else(j=g.nodeName)&&j.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=_p);if(C&&(C=C(e,f))){uu(y,C,n,h);break e}R&&R(e,g,f),e==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&ss(g,"number",g.value)}switch(R=f?rn(f):window,e){case"focusin":(bo(R)||R.contentEditable==="true")&&(tn=R,xs=f,Xn=null);break;case"focusout":Xn=xs=tn=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,To(y,n,h);break;case"selectionchange":if(Ip)break;case"keydown":case"keyup":To(y,n,h)}var E;if(ca)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else en?ou(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(au&&n.locale!=="ko"&&(en||x!=="onCompositionStart"?x==="onCompositionEnd"&&en&&(E=su()):(xt=h,sa="value"in xt?xt.value:xt.textContent,en=!0)),R=ml(f,x),0<R.length&&(x=new ko(x,e,null,n,h),y.push({event:x,listeners:R}),E?x.data=E:(E=cu(n),E!==null&&(x.data=E)))),(E=Sp?Cp(e,n):bp(e,n))&&(f=ml(f,"onBeforeInput"),0<f.length&&(h=new ko("onBeforeInput","beforeinput",null,n,h),y.push({event:h,listeners:f}),h.data=E))}ju(y,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ml(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lr(e,n),s!=null&&r.unshift(dr(e,s,i)),s=lr(e,t),s!=null&&r.push(dr(e,s,i))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mo(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,c=o.alternate,f=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&f!==null&&(o=f,i?(c=lr(n,s),c!=null&&a.unshift(dr(n,c,o))):i||(c=lr(n,s),c!=null&&a.push(dr(n,c,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ap=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function Fo(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Bp,"")}function Hr(e,t,n){if(t=Fo(t),Fo(e)!==t&&n)throw Error(N(425))}function hl(){}var ws=null,js=null;function ks(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,Hp=typeof clearTimeout=="function"?clearTimeout:void 0,Io=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof Io<"u"?function(e){return Io.resolve(null).then(e).catch(Vp)}:Ns;function Vp(e){setTimeout(function(){throw e})}function Hi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ar(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+bn,fr="__reactProps$"+bn,ot="__reactContainer$"+bn,Ss="__reactEvents$"+bn,Wp="__reactListeners$"+bn,Qp="__reactHandles$"+bn;function Ot(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oo(e);e!==null;){if(n=e[Xe])return n;e=Oo(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[Xe]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Il(e){return e[fr]||null}var Cs=[],ln=-1;function Tt(e){return{current:e}}function K(e){0>ln||(e.current=Cs[ln],Cs[ln]=null,ln--)}function W(e,t){ln++,Cs[ln]=e.current,e.current=t}var Et={},he=Tt(Et),Ne=Tt(!1),Ht=Et;function xn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function gl(){K(Ne),K(he)}function Do(e,t,n){if(he.current!==Et)throw Error(N(168));W(he,t),W(Ne,n)}function Nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Rf(e)||"Unknown",i));return Z({},n,r)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Ht=he.current,W(he,e),W(Ne,Ne.current),!0}function $o(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Nu(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,K(Ne),K(he),W(he,e)):K(Ne),W(Ne,n)}var rt=null,Ol=!1,Ui=!1;function Su(e){rt===null?rt=[e]:rt.push(e)}function Yp(e){Ol=!0,Su(e)}function _t(){if(!Ui&&rt!==null){Ui=!0;var e=0,t=V;try{var n=rt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Ol=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),Gc(na,_t),i}finally{V=t,Ui=!1}}return null}var sn=[],an=0,xl=null,yl=0,_e=[],Le=0,Ut=null,lt=1,it="";function Ft(e,t){sn[an++]=yl,sn[an++]=xl,xl=e,yl=t}function Cu(e,t,n){_e[Le++]=lt,_e[Le++]=it,_e[Le++]=Ut,Ut=e;var r=lt;e=it;var i=32-We(r)-1;r&=~(1<<i),n+=1;var s=32-We(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,lt=1<<32-We(t)+i|n<<i|r,it=s+e}else lt=1<<s|n<<i|r,it=e}function da(e){e.return!==null&&(Ft(e,1),Cu(e,1,0))}function fa(e){for(;e===xl;)xl=sn[--an],sn[an]=null,yl=sn[--an],sn[an]=null;for(;e===Ut;)Ut=_e[--Le],_e[Le]=null,it=_e[--Le],_e[Le]=null,lt=_e[--Le],_e[Le]=null}var ze=null,Pe=null,G=!1,Ve=null;function bu(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ao(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Pe=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:lt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Pe=null,!0):!1;default:return!1}}function bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(G){var t=Pe;if(t){var n=t;if(!Ao(e,t)){if(bs(e))throw Error(N(418));t=Nt(n.nextSibling);var r=ze;t&&Ao(e,t)?bu(r,n):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(bs(e))throw Error(N(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function Bo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ur(e){if(e!==ze)return!1;if(!G)return Bo(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ks(e.type,e.memoizedProps)),t&&(t=Pe)){if(bs(e))throw Pu(),Error(N(418));for(;t;)bu(e,t),t=Nt(t.nextSibling)}if(Bo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=ze?Nt(e.stateNode.nextSibling):null;return!0}function Pu(){for(var e=Pe;e;)e=Nt(e.nextSibling)}function yn(){Pe=ze=null,G=!1}function pa(e){Ve===null?Ve=[e]:Ve.push(e)}var Kp=dt.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ho(e){var t=e._init;return t(e._payload)}function zu(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Pt(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,d,m,v){return d===null||d.tag!==6?(d=Ji(m,p.mode,v),d.return=p,d):(d=i(d,m),d.return=p,d)}function c(p,d,m,v){var C=m.type;return C===qt?h(p,d,m.props.children,v,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&Ho(C)===d.type)?(v=i(d,m.props),v.ref=An(p,d,m),v.return=p,v):(v=sl(m.type,m.key,m.props,null,p.mode,v),v.ref=An(p,d,m),v.return=p,v)}function f(p,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Xi(m,p.mode,v),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,v,C){return d===null||d.tag!==7?(d=Bt(m,p.mode,v,C),d.return=p,d):(d=i(d,m),d.return=p,d)}function y(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ji(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Lr:return m=sl(d.type,d.key,d.props,null,p.mode,m),m.ref=An(p,null,d),m.return=p,m;case Zt:return d=Xi(d,p.mode,m),d.return=p,d;case mt:var v=d._init;return y(p,v(d._payload),m)}if(Vn(d)||Fn(d))return d=Bt(d,p.mode,m,null),d.return=p,d;Vr(p,d)}return null}function g(p,d,m,v){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:o(p,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Lr:return m.key===C?c(p,d,m,v):null;case Zt:return m.key===C?f(p,d,m,v):null;case mt:return C=m._init,g(p,d,C(m._payload),v)}if(Vn(m)||Fn(m))return C!==null?null:h(p,d,m,v,null);Vr(p,m)}return null}function j(p,d,m,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,o(d,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lr:return p=p.get(v.key===null?m:v.key)||null,c(d,p,v,C);case Zt:return p=p.get(v.key===null?m:v.key)||null,f(d,p,v,C);case mt:var R=v._init;return j(p,d,m,R(v._payload),C)}if(Vn(v)||Fn(v))return p=p.get(m)||null,h(d,p,v,C,null);Vr(d,v)}return null}function S(p,d,m,v){for(var C=null,R=null,E=d,x=d=0,O=null;E!==null&&x<m.length;x++){E.index>x?(O=E,E=null):O=E.sibling;var M=g(p,E,m[x],v);if(M===null){E===null&&(E=O);break}e&&E&&M.alternate===null&&t(p,E),d=s(M,d,x),R===null?C=M:R.sibling=M,R=M,E=O}if(x===m.length)return n(p,E),G&&Ft(p,x),C;if(E===null){for(;x<m.length;x++)E=y(p,m[x],v),E!==null&&(d=s(E,d,x),R===null?C=E:R.sibling=E,R=E);return G&&Ft(p,x),C}for(E=r(p,E);x<m.length;x++)O=j(E,p,x,m[x],v),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?x:O.key),d=s(O,d,x),R===null?C=O:R.sibling=O,R=O);return e&&E.forEach(function(P){return t(p,P)}),G&&Ft(p,x),C}function w(p,d,m,v){var C=Fn(m);if(typeof C!="function")throw Error(N(150));if(m=C.call(m),m==null)throw Error(N(151));for(var R=C=null,E=d,x=d=0,O=null,M=m.next();E!==null&&!M.done;x++,M=m.next()){E.index>x?(O=E,E=null):O=E.sibling;var P=g(p,E,M.value,v);if(P===null){E===null&&(E=O);break}e&&E&&P.alternate===null&&t(p,E),d=s(P,d,x),R===null?C=P:R.sibling=P,R=P,E=O}if(M.done)return n(p,E),G&&Ft(p,x),C;if(E===null){for(;!M.done;x++,M=m.next())M=y(p,M.value,v),M!==null&&(d=s(M,d,x),R===null?C=M:R.sibling=M,R=M);return G&&Ft(p,x),C}for(E=r(p,E);!M.done;x++,M=m.next())M=j(E,p,x,M.value,v),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?x:M.key),d=s(M,d,x),R===null?C=M:R.sibling=M,R=M);return e&&E.forEach(function(k){return t(p,k)}),G&&Ft(p,x),C}function F(p,d,m,v){if(typeof m=="object"&&m!==null&&m.type===qt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Lr:e:{for(var C=m.key,R=d;R!==null;){if(R.key===C){if(C=m.type,C===qt){if(R.tag===7){n(p,R.sibling),d=i(R,m.props.children),d.return=p,p=d;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&Ho(C)===R.type){n(p,R.sibling),d=i(R,m.props),d.ref=An(p,R,m),d.return=p,p=d;break e}n(p,R);break}else t(p,R);R=R.sibling}m.type===qt?(d=Bt(m.props.children,p.mode,v,m.key),d.return=p,p=d):(v=sl(m.type,m.key,m.props,null,p.mode,v),v.ref=An(p,d,m),v.return=p,p=v)}return a(p);case Zt:e:{for(R=m.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Xi(m,p.mode,v),d.return=p,p=d}return a(p);case mt:return R=m._init,F(p,d,R(m._payload),v)}if(Vn(m))return S(p,d,m,v);if(Fn(m))return w(p,d,m,v);Vr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Ji(m,p.mode,v),d.return=p,p=d),a(p)):n(p,d)}return F}var wn=zu(!0),Eu=zu(!1),wl=Tt(null),jl=null,on=null,ma=null;function ha(){ma=on=jl=null}function ga(e){var t=wl.current;K(wl),e._currentValue=t}function zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){jl=e,ma=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(ma!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(jl===null)throw Error(N(308));on=e,jl.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Dt=null;function va(e){Dt===null?Dt=[e]:Dt.push(e)}function Ru(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,va(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,va(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ra(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var i=e.updateQueue;ht=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,f=c.next;c.next=null,a===null?s=f:a.next=f,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=f:o.next=f,h.lastBaseUpdate=c))}if(s!==null){var y=i.baseState;a=0,h=f=c=null,o=s;do{var g=o.lane,j=o.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var S=e,w=o;switch(g=t,j=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){y=S.call(j,y,g);break e}y=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,g=typeof S=="function"?S.call(j,y,g):S,g==null)break e;y=Z({},y,g);break e;case 2:ht=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[o]:g.push(o))}else j={eventTime:j,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(f=h=j,c=y):h=h.next=j,a|=g;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(c=y),i.baseState=c,i.firstBaseUpdate=f,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=y}}function Vo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Nr={},qe=Tt(Nr),pr=Tt(Nr),mr=Tt(Nr);function $t(e){if(e===Nr)throw Error(N(174));return e}function ya(e,t){switch(W(mr,t),W(pr,e),W(qe,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=os(t,e)}K(qe),W(qe,t)}function jn(){K(qe),K(pr),K(mr)}function _u(e){$t(mr.current);var t=$t(qe.current),n=os(t,e.type);t!==n&&(W(pr,e),W(qe,n))}function wa(e){pr.current===e&&(K(qe),K(pr))}var J=Tt(0);function Nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vi=[];function ja(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var tl=dt.ReactCurrentDispatcher,Wi=dt.ReactCurrentBatchConfig,Vt=0,X=null,le=null,se=null,Sl=!1,Zn=!1,hr=0,Gp=0;function fe(){throw Error(N(321))}function ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Na(e,t,n,r,i,s){if(Vt=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.current=e===null||e.memoizedState===null?qp:em,e=n(r,i),Zn){s=0;do{if(Zn=!1,hr=0,25<=s)throw Error(N(301));s+=1,se=le=null,t.updateQueue=null,tl.current=tm,e=n(r,i)}while(Zn)}if(tl.current=Cl,t=le!==null&&le.next!==null,Vt=0,se=le=X=null,Sl=!1,t)throw Error(N(300));return e}function Sa(){var e=hr!==0;return hr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?X.memoizedState=se=e:se=se.next=e,se}function Oe(){if(le===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=se===null?X.memoizedState:se.next;if(t!==null)se=t,le=e;else{if(e===null)throw Error(N(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},se===null?X.memoizedState=se=e:se=se.next=e}return se}function gr(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=Oe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,c=null,f=s;do{var h=f.lane;if((Vt&h)===h)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(o=c=y,a=r):c=c.next=y,X.lanes|=h,Wt|=h}f=f.next}while(f!==null&&f!==s);c===null?a=r:c.next=o,Ye(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,Wt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yi(e){var t=Oe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Ye(s,t.memoizedState)||(ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Lu(){}function Mu(e,t){var n=X,r=Oe(),i=t(),s=!Ye(r.memoizedState,i);if(s&&(r.memoizedState=i,ke=!0),r=r.queue,Ca(Ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,vr(9,Iu.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(N(349));Vt&30||Fu(n,t,i)}return i}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Iu(e,t,n,r){t.value=n,t.getSnapshot=r,Du(t)&&$u(e)}function Ou(e,t,n){return n(function(){Du(t)&&$u(e)})}function Du(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function $u(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function Wo(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zp.bind(null,X,e),[t.memoizedState,e]}function vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Au(){return Oe().memoizedState}function nl(e,t,n,r){var i=Je();X.flags|=e,i.memoizedState=vr(1|t,n,void 0,r===void 0?null:r)}function Dl(e,t,n,r){var i=Oe();r=r===void 0?null:r;var s=void 0;if(le!==null){var a=le.memoizedState;if(s=a.destroy,r!==null&&ka(r,a.deps)){i.memoizedState=vr(t,n,s,r);return}}X.flags|=e,i.memoizedState=vr(1|t,n,s,r)}function Qo(e,t){return nl(8390656,8,e,t)}function Ca(e,t){return Dl(2048,8,e,t)}function Bu(e,t){return Dl(4,2,e,t)}function Hu(e,t){return Dl(4,4,e,t)}function Uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vu(e,t,n){return n=n!=null?n.concat([e]):null,Dl(4,4,Uu.bind(null,t,e),n)}function ba(){}function Wu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yu(e,t,n){return Vt&21?(Ye(n,t)||(n=Zc(),X.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function Jp(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Wi.transition;Wi.transition={};try{e(!1),t()}finally{V=n,Wi.transition=r}}function Ku(){return Oe().memoizedState}function Xp(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gu(e))Ju(t,n);else if(n=Ru(e,t,n,r),n!==null){var i=ve();Qe(n,e,r,i),Xu(n,t,r)}}function Zp(e,t,n){var r=bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Ju(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,Ye(o,a)){var c=t.interleaved;c===null?(i.next=i,va(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Ru(e,t,i,r),n!==null&&(i=ve(),Qe(n,e,r,i),Xu(n,t,r))}}function Gu(e){var t=e.alternate;return e===X||t!==null&&t===X}function Ju(e,t){Zn=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ra(e,n)}}var Cl={readContext:Ie,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},qp={readContext:Ie,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Qo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,nl(4194308,4,Uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Wo,useDebugValue:ba,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Wo(!1),t=e[0];return e=Jp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=Je();if(G){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ae===null)throw Error(N(349));Vt&30||Fu(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Qo(Ou.bind(null,r,s,e),[e]),r.flags|=2048,vr(9,Iu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Je(),t=ae.identifierPrefix;if(G){var n=it,r=lt;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},em={readContext:Ie,useCallback:Wu,useContext:Ie,useEffect:Ca,useImperativeHandle:Vu,useInsertionEffect:Bu,useLayoutEffect:Hu,useMemo:Qu,useReducer:Qi,useRef:Au,useState:function(){return Qi(gr)},useDebugValue:ba,useDeferredValue:function(e){var t=Oe();return Yu(t,le.memoizedState,e)},useTransition:function(){var e=Qi(gr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Lu,useSyncExternalStore:Mu,useId:Ku,unstable_isNewReconciler:!1},tm={readContext:Ie,useCallback:Wu,useContext:Ie,useEffect:Ca,useImperativeHandle:Vu,useInsertionEffect:Bu,useLayoutEffect:Hu,useMemo:Qu,useReducer:Yi,useRef:Au,useState:function(){return Yi(gr)},useDebugValue:ba,useDeferredValue:function(e){var t=Oe();return le===null?t.memoizedState=e:Yu(t,le.memoizedState,e)},useTransition:function(){var e=Yi(gr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Lu,useSyncExternalStore:Mu,useId:Ku,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=bt(e),s=st(r,i);s.payload=t,n!=null&&(s.callback=n),t=St(e,s,i),t!==null&&(Qe(t,e,i,r),el(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=bt(e),s=st(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=St(e,s,i),t!==null&&(Qe(t,e,i,r),el(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=bt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=St(e,i,r),t!==null&&(Qe(t,e,r,n),el(t,e,r))}};function Yo(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!cr(n,r)||!cr(i,s):!0}function Zu(e,t,n){var r=!1,i=Et,s=t.contextType;return typeof s=="object"&&s!==null?s=Ie(s):(i=Se(t)?Ht:he.current,r=t.contextTypes,s=(r=r!=null)?xn(e,i):Et),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ko(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xa(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ie(s):(s=Se(t)?Ht:he.current,i.context=xn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Es(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$l.enqueueReplaceState(i,i.state,null),kl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=Ef(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nm=typeof WeakMap=="function"?WeakMap:Map;function qu(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pl||(Pl=!0,Bs=r),Ts(e,t)},n}function ed(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ts(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ts(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Go(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gm.bind(null,e,t,n),t.then(e,e))}function Jo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xo(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var rm=dt.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?Eu(t,null,n,r):wn(t,e.child,n,r)}function Zo(e,t,n,r,i){n=n.render;var s=t.ref;return hn(t,i),r=Na(e,t,n,r,s,i),n=Sa(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(G&&n&&da(t),t.flags|=1,ge(e,t,r,i),t.child)}function qo(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ma(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,td(e,t,s,r,i)):(e=sl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(a,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Pt(s,r),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(cr(s,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,ut(e,t,i)}return _s(e,t,n,r,i)}function nd(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(un,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(un,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,W(un,be),be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,W(un,be),be|=r;return ge(e,t,i,n),t.child}function rd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _s(e,t,n,r,i){var s=Se(n)?Ht:he.current;return s=xn(t,s),hn(t,i),n=Na(e,t,n,r,s,i),r=Sa(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(G&&r&&da(t),t.flags|=1,ge(e,t,n,i),t.child)}function ec(e,t,n,r,i){if(Se(n)){var s=!0;vl(t)}else s=!1;if(hn(t,i),t.stateNode===null)rl(e,t),Zu(t,n,r),Rs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var c=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ie(f):(f=Se(n)?Ht:he.current,f=xn(t,f));var h=n.getDerivedStateFromProps,y=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||c!==f)&&Ko(t,a,r,f),ht=!1;var g=t.memoizedState;a.state=g,kl(t,r,a,i),c=t.memoizedState,o!==r||g!==c||Ne.current||ht?(typeof h=="function"&&(Es(t,n,h,r),c=t.memoizedState),(o=ht||Yo(t,n,o,r,g,c,f))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=f,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tu(e,t),o=t.memoizedProps,f=t.type===t.elementType?o:He(t.type,o),a.props=f,y=t.pendingProps,g=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ie(c):(c=Se(n)?Ht:he.current,c=xn(t,c));var j=n.getDerivedStateFromProps;(h=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==y||g!==c)&&Ko(t,a,r,c),ht=!1,g=t.memoizedState,a.state=g,kl(t,r,a,i);var S=t.memoizedState;o!==y||g!==S||Ne.current||ht?(typeof j=="function"&&(Es(t,n,j,r),S=t.memoizedState),(f=ht||Yo(t,n,f,r,g,S,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=c,r=f):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ls(e,t,n,r,s,i)}function Ls(e,t,n,r,i,s){rd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&$o(t,n,!1),ut(e,t,s);r=t.stateNode,rm.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=wn(t,e.child,null,s),t.child=wn(t,null,o,s)):ge(e,t,o,s),t.memoizedState=r.state,i&&$o(t,n,!0),t.child}function ld(e){var t=e.stateNode;t.pendingContext?Do(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Do(e,t.context,!1),ya(e,t.containerInfo)}function tc(e,t,n,r,i){return yn(),pa(i),t.flags|=256,ge(e,t,n,r),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,n){var r=t.pendingProps,i=J.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(J,i&1),e===null)return Ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Hl(a,r,0,null),e=Bt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Fs(n),t.memoizedState=Ms,e):Pa(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return lm(e,t,a,r,o,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Pt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Pt(o,s):(s=Bt(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Fs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Ms,r}return s=e.child,e=s.sibling,r=Pt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pa(e,t){return t=Hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&pa(r),wn(t,e.child,null,n),e=Pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lm(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(N(422))),Wr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Hl({mode:"visible",children:r.children},i,0,null),s=Bt(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&wn(t,e.child,null,a),t.child.memoizedState=Fs(a),t.memoizedState=Ms,s);if(!(t.mode&1))return Wr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(N(419)),r=Ki(s,r,void 0),Wr(e,t,a,r)}if(o=(a&e.childLanes)!==0,ke||o){if(r=ae,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ct(e,i),Qe(r,e,i,-1))}return La(),r=Ki(Error(N(421))),Wr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Pe=Nt(i.nextSibling),ze=t,G=!0,Ve=null,e!==null&&(_e[Le++]=lt,_e[Le++]=it,_e[Le++]=Ut,lt=e.id,it=e.overflow,Ut=t),t=Pa(t,r.children),t.flags|=4096,t)}function nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zs(e.return,t,n)}function Gi(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sd(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ge(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,n,t);else if(e.tag===19)nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gi(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Nl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gi(t,!0,n,null,s);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function im(e,t,n){switch(t.tag){case 3:ld(t),yn();break;case 5:_u(t);break;case 1:Se(t.type)&&vl(t);break;case 4:ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?id(e,t,n):(W(J,J.current&1),e=ut(e,t,n),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,n)}return ut(e,t,n)}var ad,Is,od,cd;ad=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Is=function(){};od=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$t(qe.current);var s=null;switch(n){case"input":i=ls(e,i),r=ls(e,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=as(e,i),r=as(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hl)}cs(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var o=i[f];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(nr.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var c=r[f];if(o=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&c!==o&&(c!=null||o!=null))if(f==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(nr.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&Y("scroll",e),s||o===c||(s=[])):(s=s||[]).push(f,c))}n&&(s=s||[]).push("style",n);var f=s;(t.updateQueue=f)&&(t.flags|=4)}};cd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sm(e,t,n){var r=t.pendingProps;switch(fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Se(t.type)&&gl(),pe(t),null;case 3:return r=t.stateNode,jn(),K(Ne),K(he),ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Vs(Ve),Ve=null))),Is(e,t),pe(t),null;case 5:wa(t);var i=$t(mr.current);if(n=t.type,e!==null&&t.stateNode!=null)od(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return pe(t),null}if(e=$t(qe.current),Ur(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Xe]=t,r[fr]=s,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Qn.length;i++)Y(Qn[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":uo(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":po(r,s),Y("invalid",r)}cs(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&Hr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Hr(r.textContent,o,e),i=["children",""+o]):nr.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":Mr(r),fo(r,s,!0);break;case"textarea":Mr(r),mo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xe]=t,e[fr]=r,ad(e,t,!1,!1),t.stateNode=e;e:{switch(a=us(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qn.length;i++)Y(Qn[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":uo(e,r),i=ls(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),Y("invalid",e);break;case"textarea":po(e,r),i=as(e,r),Y("invalid",e);break;default:i=r}cs(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Ac(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Dc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&rr(e,c):typeof c=="number"&&rr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(nr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Y("scroll",e):c!=null&&Xs(e,s,c,a))}switch(n){case"input":Mr(e),fo(e,r,!1);break;case"textarea":Mr(e),mo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?dn(e,!!r.multiple,s,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)cd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=$t(mr.current),$t(qe.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return pe(t),null;case 13:if(K(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Pe!==null&&t.mode&1&&!(t.flags&128))Pu(),yn(),t.flags|=98560,s=!1;else if(s=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Xe]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),s=!1}else Ve!==null&&(Vs(Ve),Ve=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ie===0&&(ie=3):La())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return jn(),Is(e,t),e===null&&ur(t.stateNode.containerInfo),pe(t),null;case 10:return ga(t.type._context),pe(t),null;case 17:return Se(t.type)&&gl(),pe(t),null;case 19:if(K(J),s=t.memoizedState,s===null)return pe(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Bn(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Nl(e),a!==null){for(t.flags|=128,Bn(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(J,J.current&1|2),t.child}e=e.sibling}s.tail!==null&&te()>Nn&&(t.flags|=128,r=!0,Bn(s,!1),t.lanes=4194304)}else{if(!r)if(e=Nl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!G)return pe(t),null}else 2*te()-s.renderingStartTime>Nn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=te(),t.sibling=null,n=J.current,W(J,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return _a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function am(e,t){switch(fa(t),t.tag){case 1:return Se(t.type)&&gl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),K(Ne),K(he),ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wa(t),null;case 13:if(K(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(J),null;case 4:return jn(),null;case 10:return ga(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var Qr=!1,me=!1,om=typeof WeakSet=="function"?WeakSet:Set,T=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Os(e,t,n){try{n()}catch(r){q(e,t,r)}}var rc=!1;function cm(e,t){if(ws=fl,e=mu(),ua(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,f=0,h=0,y=e,g=null;t:for(;;){for(var j;y!==n||i!==0&&y.nodeType!==3||(o=a+i),y!==s||r!==0&&y.nodeType!==3||(c=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(j=y.firstChild)!==null;)g=y,y=j;for(;;){if(y===e)break t;if(g===n&&++f===i&&(o=a),g===s&&++h===r&&(c=a),(j=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=j}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(js={focusedElem:e,selectionRange:n},fl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,F=S.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:He(t.type,w),F);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return S=rc,rc=!1,S}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Os(t,n,s)}i=i.next}while(i!==r)}}function Al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ds(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[fr],delete t[Ss],delete t[Wp],delete t[Qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hl));else if(r!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}function As(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}var oe=null,Ue=!1;function pt(e,t,n){for(n=n.child;n!==null;)fd(e,t,n),n=n.sibling}function fd(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:me||cn(n,t);case 6:var r=oe,i=Ue;oe=null,pt(e,t,n),oe=r,Ue=i,oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),ar(e)):Hi(oe,n.stateNode));break;case 4:r=oe,i=Ue,oe=n.stateNode.containerInfo,Ue=!0,pt(e,t,n),oe=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Os(n,t,a),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!me&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){q(n,t,o)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,pt(e,t,n),me=r):pt(e,t,n);break;default:pt(e,t,n)}}function ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new om),t.forEach(function(r){var i=xm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:oe=o.stateNode,Ue=!1;break e;case 3:oe=o.stateNode.containerInfo,Ue=!0;break e;case 4:oe=o.stateNode.containerInfo,Ue=!0;break e}o=o.return}if(oe===null)throw Error(N(160));fd(s,a,i),oe=null,Ue=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(f){q(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pd(t,e),t=t.sibling}function pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ge(e),r&4){try{qn(3,e,e.return),Al(3,e)}catch(w){q(e,e.return,w)}try{qn(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Be(t,e),Ge(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Be(t,e),Ge(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var i=e.stateNode;try{rr(i,"")}catch(w){q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Fc(i,s),us(o,a);var f=us(o,s);for(a=0;a<c.length;a+=2){var h=c[a],y=c[a+1];h==="style"?Ac(i,y):h==="dangerouslySetInnerHTML"?Dc(i,y):h==="children"?rr(i,y):Xs(i,h,y,f)}switch(o){case"input":is(i,s);break;case"textarea":Ic(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?dn(i,!!s.multiple,j,!1):g!==!!s.multiple&&(s.defaultValue!=null?dn(i,!!s.multiple,s.defaultValue,!0):dn(i,!!s.multiple,s.multiple?[]:"",!1))}i[fr]=s}catch(w){q(e,e.return,w)}}break;case 6:if(Be(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){q(e,e.return,w)}}break;case 3:if(Be(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Be(t,e),Ge(e);break;case 13:Be(t,e),Ge(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ra=te())),r&4&&ic(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(f=me)||h,Be(t,e),me=f):Be(t,e),Ge(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(y=T=h;T!==null;){switch(g=T,j=g.child,g.tag){case 0:case 11:case 14:case 15:qn(4,g,g.return);break;case 1:cn(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:cn(g,g.return);break;case 22:if(g.memoizedState!==null){ac(y);continue}}j!==null?(j.return=g,T=j):ac(y)}h=h.sibling}e:for(h=null,y=e;;){if(y.tag===5){if(h===null){h=y;try{i=y.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=y.stateNode,c=y.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=$c("display",a))}catch(w){q(e,e.return,w)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(w){q(e,e.return,w)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Be(t,e),Ge(e),r&4&&ic(e);break;case 21:break;default:Be(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dd(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rr(i,""),r.flags&=-33);var s=lc(e);As(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=lc(e);$s(e,o,a);break;default:throw Error(N(161))}}catch(c){q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function um(e,t,n){T=e,md(e)}function md(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Qr;if(!a){var o=i.alternate,c=o!==null&&o.memoizedState!==null||me;o=Qr;var f=me;if(Qr=a,(me=c)&&!f)for(T=i;T!==null;)a=T,c=a.child,a.tag===22&&a.memoizedState!==null?oc(i):c!==null?(c.return=a,T=c):oc(i);for(;s!==null;)T=s,md(s),s=s.sibling;T=i,Qr=o,me=f}sc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):sc(e)}}function sc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Vo(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vo(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&ar(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}me||t.flags&512&&Ds(t)}catch(g){q(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ac(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function oc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Al(4,t)}catch(c){q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){q(t,i,c)}}var s=t.return;try{Ds(t)}catch(c){q(t,s,c)}break;case 5:var a=t.return;try{Ds(t)}catch(c){q(t,a,c)}}}catch(c){q(t,t.return,c)}if(t===e){T=null;break}var o=t.sibling;if(o!==null){o.return=t.return,T=o;break}T=t.return}}var dm=Math.ceil,bl=dt.ReactCurrentDispatcher,za=dt.ReactCurrentOwner,Fe=dt.ReactCurrentBatchConfig,B=0,ae=null,re=null,ce=0,be=0,un=Tt(0),ie=0,xr=null,Wt=0,Bl=0,Ea=0,er=null,je=null,Ra=0,Nn=1/0,nt=null,Pl=!1,Bs=null,Ct=null,Yr=!1,yt=null,zl=0,tr=0,Hs=null,ll=-1,il=0;function ve(){return B&6?te():ll!==-1?ll:ll=te()}function bt(e){return e.mode&1?B&2&&ce!==0?ce&-ce:Kp.transition!==null?(il===0&&(il=Zc()),il):(e=V,e!==0||(e=window.event,e=e===void 0?16:iu(e.type)),e):1}function Qe(e,t,n,r){if(50<tr)throw tr=0,Hs=null,Error(N(185));wr(e,n,r),(!(B&2)||e!==ae)&&(e===ae&&(!(B&2)&&(Bl|=n),ie===4&&vt(e,ce)),Ce(e,r),n===1&&B===0&&!(t.mode&1)&&(Nn=te()+500,Ol&&_t()))}function Ce(e,t){var n=e.callbackNode;Kf(e,t);var r=dl(e,e===ae?ce:0);if(r===0)n!==null&&vo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vo(n),t===1)e.tag===0?Yp(cc.bind(null,e)):Su(cc.bind(null,e)),Up(function(){!(B&6)&&_t()}),n=null;else{switch(qc(r)){case 1:n=na;break;case 4:n=Jc;break;case 16:n=ul;break;case 536870912:n=Xc;break;default:n=ul}n=kd(n,hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hd(e,t){if(ll=-1,il=0,B&6)throw Error(N(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=dl(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=B;B|=2;var s=vd();(ae!==e||ce!==t)&&(nt=null,Nn=te()+500,At(e,t));do try{mm();break}catch(o){gd(e,o)}while(!0);ha(),bl.current=s,B=i,re!==null?t=0:(ae=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=hs(e),i!==0&&(r=i,t=Us(e,i))),t===1)throw n=xr,At(e,0),vt(e,r),Ce(e,te()),n;if(t===6)vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fm(i)&&(t=El(e,r),t===2&&(s=hs(e),s!==0&&(r=s,t=Us(e,s))),t===1))throw n=xr,At(e,0),vt(e,r),Ce(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:It(e,je,nt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Ra+500-te(),10<t)){if(dl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ns(It.bind(null,e,je,nt),t);break}It(e,je,nt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-We(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dm(r/1960))-r,10<r){e.timeoutHandle=Ns(It.bind(null,e,je,nt),r);break}It(e,je,nt);break;case 5:It(e,je,nt);break;default:throw Error(N(329))}}}return Ce(e,te()),e.callbackNode===n?hd.bind(null,e):null}function Us(e,t){var n=er;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=El(e,t),e!==2&&(t=je,je=n,t!==null&&Vs(t)),e}function Vs(e){je===null?je=e:je.push.apply(je,e)}function fm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ye(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ea,t&=~Bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(B&6)throw Error(N(327));gn();var t=dl(e,0);if(!(t&1))return Ce(e,te()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=hs(e);r!==0&&(t=r,n=Us(e,r))}if(n===1)throw n=xr,At(e,0),vt(e,t),Ce(e,te()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,je,nt),Ce(e,te()),null}function Ta(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Nn=te()+500,Ol&&_t())}}function Qt(e){yt!==null&&yt.tag===0&&!(B&6)&&gn();var t=B;B|=1;var n=Fe.transition,r=V;try{if(Fe.transition=null,V=1,e)return e()}finally{V=r,Fe.transition=n,B=t,!(B&6)&&_t()}}function _a(){be=un.current,K(un)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hp(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gl();break;case 3:jn(),K(Ne),K(he),ja();break;case 5:wa(r);break;case 4:jn();break;case 13:K(J);break;case 19:K(J);break;case 10:ga(r.type._context);break;case 22:case 23:_a()}n=n.return}if(ae=e,re=e=Pt(e.current,null),ce=be=t,ie=0,xr=null,Ea=Bl=Wt=0,je=er=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Dt=null}return e}function gd(e,t){do{var n=re;try{if(ha(),tl.current=Cl,Sl){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(Vt=0,se=le=X=null,Zn=!1,hr=0,za.current=null,n===null||n.return===null){ie=1,xr=t,re=null;break}e:{var s=e,a=n.return,o=n,c=t;if(t=ce,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,h=o,y=h.tag;if(!(h.mode&1)&&(y===0||y===11||y===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var j=Jo(a);if(j!==null){j.flags&=-257,Xo(j,a,o,s,t),j.mode&1&&Go(s,f,t),t=j,c=f;var S=t.updateQueue;if(S===null){var w=new Set;w.add(c),t.updateQueue=w}else S.add(c);break e}else{if(!(t&1)){Go(s,f,t),La();break e}c=Error(N(426))}}else if(G&&o.mode&1){var F=Jo(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Xo(F,a,o,s,t),pa(kn(c,o));break e}}s=c=kn(c,o),ie!==4&&(ie=2),er===null?er=[s]:er.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=qu(s,c,t);Uo(s,p);break e;case 1:o=c;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ct===null||!Ct.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=ed(s,o,t);Uo(s,v);break e}}s=s.return}while(s!==null)}yd(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function vd(){var e=bl.current;return bl.current=Cl,e===null?Cl:e}function La(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Wt&268435455)&&!(Bl&268435455)||vt(ae,ce)}function El(e,t){var n=B;B|=2;var r=vd();(ae!==e||ce!==t)&&(nt=null,At(e,t));do try{pm();break}catch(i){gd(e,i)}while(!0);if(ha(),B=n,bl.current=r,re!==null)throw Error(N(261));return ae=null,ce=0,ie}function pm(){for(;re!==null;)xd(re)}function mm(){for(;re!==null&&!$f();)xd(re)}function xd(e){var t=jd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?yd(e):re=t,za.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=am(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(n=sm(n,t,be),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ie===0&&(ie=5)}function It(e,t,n){var r=V,i=Fe.transition;try{Fe.transition=null,V=1,hm(e,t,n,r)}finally{Fe.transition=i,V=r}return null}function hm(e,t,n,r){do gn();while(yt!==null);if(B&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gf(e,s),e===ae&&(re=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yr||(Yr=!0,kd(ul,function(){return gn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fe.transition,Fe.transition=null;var a=V;V=1;var o=B;B|=4,za.current=null,cm(e,n),pd(n,e),Fp(js),fl=!!ws,js=ws=null,e.current=n,um(n),Af(),B=o,V=a,Fe.transition=s}else e.current=n;if(Yr&&(Yr=!1,yt=e,zl=i),s=e.pendingLanes,s===0&&(Ct=null),Uf(n.stateNode),Ce(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pl)throw Pl=!1,e=Bs,Bs=null,e;return zl&1&&e.tag!==0&&gn(),s=e.pendingLanes,s&1?e===Hs?tr++:(tr=0,Hs=e):tr=0,_t(),null}function gn(){if(yt!==null){var e=qc(zl),t=Fe.transition,n=V;try{if(Fe.transition=null,V=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,zl=0,B&6)throw Error(N(331));var i=B;for(B|=4,T=e.current;T!==null;){var s=T,a=s.child;if(T.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var f=o[c];for(T=f;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:qn(8,h,s)}var y=h.child;if(y!==null)y.return=h,T=y;else for(;T!==null;){h=T;var g=h.sibling,j=h.return;if(ud(h),h===f){T=null;break}if(g!==null){g.return=j,T=g;break}T=j}}}var S=s.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var F=w.sibling;w.sibling=null,w=F}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,T=a;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var d=e.current;for(T=d;T!==null;){a=T;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,T=m;else e:for(a=d;T!==null;){if(o=T,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Al(9,o)}}catch(C){q(o,o.return,C)}if(o===a){T=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,T=v;break e}T=o.return}}if(B=i,_t(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(_l,e)}catch{}r=!0}return r}finally{V=n,Fe.transition=t}}return!1}function uc(e,t,n){t=kn(n,t),t=qu(e,t,1),e=St(e,t,1),t=ve(),e!==null&&(wr(e,1,t),Ce(e,t))}function q(e,t,n){if(e.tag===3)uc(e,e,n);else for(;t!==null;){if(t.tag===3){uc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=kn(n,e),e=ed(t,e,1),t=St(t,e,1),e=ve(),t!==null&&(wr(t,1,e),Ce(t,e));break}}t=t.return}}function gm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>te()-Ra?At(e,0):Ea|=n),Ce(e,t)}function wd(e,t){t===0&&(e.mode&1?(t=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):t=1);var n=ve();e=ct(e,t),e!==null&&(wr(e,t,n),Ce(e,n))}function vm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function xm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),wd(e,n)}var jd;jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,im(e,t,n);ke=!!(e.flags&131072)}else ke=!1,G&&t.flags&1048576&&Cu(t,yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=xn(t,he.current);hn(t,n),i=Na(null,t,r,e,i,n);var s=Sa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(s=!0,vl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xa(t),i.updater=$l,t.stateNode=i,i._reactInternals=t,Rs(t,r,e,n),t=Ls(null,t,r,!0,s,n)):(t.tag=0,G&&s&&da(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=wm(r),e=He(r,e),i){case 0:t=_s(null,t,r,e,n);break e;case 1:t=ec(null,t,r,e,n);break e;case 11:t=Zo(null,t,r,e,n);break e;case 14:t=qo(null,t,r,He(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),_s(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ec(e,t,r,i,n);case 3:e:{if(ld(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Tu(e,t),kl(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=kn(Error(N(423)),t),t=tc(e,t,r,n,i);break e}else if(r!==i){i=kn(Error(N(424)),t),t=tc(e,t,r,n,i);break e}else for(Pe=Nt(t.stateNode.containerInfo.firstChild),ze=t,G=!0,Ve=null,n=Eu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===i){t=ut(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return _u(t),e===null&&Ps(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,ks(r,i)?a=null:s!==null&&ks(r,s)&&(t.flags|=32),rd(e,t),ge(e,t,a,n),t.child;case 6:return e===null&&Ps(t),null;case 13:return id(e,t,n);case 4:return ya(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Zo(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,W(wl,r._currentValue),r._currentValue=a,s!==null)if(Ye(s.value,a)){if(s.children===i.children&&!Ne.current){t=ut(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=st(-1,n&-n),c.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?c.next=c:(c.next=h.next,h.next=c),f.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),zs(s.return,n,t),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(N(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zs(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hn(t,n),i=Ie(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),qo(e,t,r,i,n);case 15:return td(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),rl(e,t),t.tag=1,Se(r)?(e=!0,vl(t)):e=!1,hn(t,n),Zu(t,r,i),Rs(t,r,i,n),Ls(null,t,r,!0,e,n);case 19:return sd(e,t,n);case 22:return nd(e,t,n)}throw Error(N(156,t.tag))};function kd(e,t){return Gc(e,t)}function ym(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new ym(e,t,n,r)}function Ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wm(e){if(typeof e=="function")return Ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===ea)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function sl(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Ma(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qt:return Bt(n.children,i,s,t);case Zs:a=8,i|=8;break;case es:return e=Me(12,n,t,i|2),e.elementType=es,e.lanes=s,e;case ts:return e=Me(13,n,t,i),e.elementType=ts,e.lanes=s,e;case ns:return e=Me(19,n,t,i),e.elementType=ns,e.lanes=s,e;case _c:return Hl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:a=10;break e;case Tc:a=9;break e;case qs:a=11;break e;case ea:a=14;break e;case mt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Me(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Bt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Hl(e,t,n,r){return e=Me(22,e,r,t),e.elementType=_c,e.lanes=n,e.stateNode={isHidden:!1},e}function Ji(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Xi(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fa(e,t,n,r,i,s,a,o,c){return e=new jm(e,t,n,o,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Me(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(s),e}function km(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nd(e){if(!e)return Et;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Se(n))return Nu(e,n,t)}return t}function Sd(e,t,n,r,i,s,a,o,c){return e=Fa(n,r,!0,e,i,s,a,o,c),e.context=Nd(null),n=e.current,r=ve(),i=bt(n),s=st(r,i),s.callback=t??null,St(n,s,i),e.current.lanes=i,wr(e,i,r),Ce(e,r),e}function Ul(e,t,n,r){var i=t.current,s=ve(),a=bt(i);return n=Nd(n),t.context===null?t.context=n:t.pendingContext=n,t=st(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(i,t,a),e!==null&&(Qe(e,i,a,s),el(e,i,a)),a}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ia(e,t){dc(e,t),(e=e.alternate)&&dc(e,t)}function Nm(){return null}var Cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oa(e){this._internalRoot=e}Vl.prototype.render=Oa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ul(e,t,null,null)};Vl.prototype.unmount=Oa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Ul(null,e,null,null)}),t[ot]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=nu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&lu(e)}};function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function Sm(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=Rl(a);s.call(f)}}var a=Sd(t,r,e,0,null,!1,!1,"",fc);return e._reactRootContainer=a,e[ot]=a.current,ur(e.nodeType===8?e.parentNode:e),Qt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var f=Rl(c);o.call(f)}}var c=Fa(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=c,e[ot]=c.current,ur(e.nodeType===8?e.parentNode:e),Qt(function(){Ul(t,c,n,r)}),c}function Ql(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var c=Rl(a);o.call(c)}}Ul(t,a,e,i)}else a=Sm(n,t,e,i,r);return Rl(a)}eu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(ra(t,n|1),Ce(t,te()),!(B&6)&&(Nn=te()+500,_t()))}break;case 13:Qt(function(){var r=ct(e,1);if(r!==null){var i=ve();Qe(r,e,1,i)}}),Ia(e,1)}};la=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ve();Qe(t,e,134217728,n)}Ia(e,134217728)}};tu=function(e){if(e.tag===13){var t=bt(e),n=ct(e,t);if(n!==null){var r=ve();Qe(n,e,t,r)}Ia(e,t)}};nu=function(){return V};ru=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};fs=function(e,t,n){switch(t){case"input":if(is(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Il(r);if(!i)throw Error(N(90));Mc(r),is(r,i)}}}break;case"textarea":Ic(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};Uc=Ta;Vc=Qt;var Cm={usingClientEntryPoint:!1,Events:[kr,rn,Il,Bc,Hc,Ta]},Hn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bm={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{_l=Kr.inject(bm),Ze=Kr}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Da(t))throw Error(N(200));return km(e,t,null,n)};Re.createRoot=function(e,t){if(!Da(e))throw Error(N(299));var n=!1,r="",i=Cd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fa(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,ur(e.nodeType===8?e.parentNode:e),new Oa(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Qt(e)};Re.hydrate=function(e,t,n){if(!Wl(t))throw Error(N(200));return Ql(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Da(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Cd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Sd(t,null,e,1,n??null,i,!1,s,a),e[ot]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vl(t)};Re.render=function(e,t,n){if(!Wl(t))throw Error(N(200));return Ql(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(N(40));return e._reactRootContainer?(Qt(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Re.unstable_batchedUpdates=Ta;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ql(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bd)}catch(e){console.error(e)}}bd(),bc.exports=Re;var Pm=bc.exports,pc=Pm;Zi.createRoot=pc.createRoot,Zi.hydrateRoot=pc.hydrateRoot;function zm({activeTab:e,setActiveTab:t,subscription:n}){const r=()=>{switch(n){case"basic":return l.jsx("span",{className:"badge badge-primary",children:"Basic Plan"});case"premium":return l.jsx("span",{className:"badge badge-warning",children:"Premium Member"});case"savings":return l.jsx("span",{className:"badge badge-info",children:"Savings-Share"});default:return l.jsx("span",{className:"badge badge-danger",children:"Unsubscribed"})}},i=[{id:"landing",label:"Home & Concept",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"dashboard",label:"Dashboard",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"7",height:"9"}),l.jsx("rect",{x:"14",y:"3",width:"7",height:"5"}),l.jsx("rect",{x:"14",y:"12",width:"7",height:"9"}),l.jsx("rect",{x:"3",y:"16",width:"7",height:"5"})]})},{id:"properties",label:"Rental Properties",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})},{id:"crowdsource",label:"Crowdsource Hub",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),l.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"reminders",label:"Reminders & Tasks",icon:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})},{id:"feedback",label:"Tester Panel",icon:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}];return l.jsxs("aside",{className:"sidebar-container",children:[l.jsxs("div",{className:"sidebar-brand",children:[l.jsx("div",{className:"brand-logo",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"url(#logo-grad)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"logo-grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ecc94b"}),l.jsx("stop",{offset:"100%",stopColor:"#e53e3e"})]})}),l.jsx("path",{d:"M3 21h18M3 10l9-7 9 7v11H3V10z"}),l.jsx("path",{d:"M9 21v-8h6v8"})]})}),l.jsxs("div",{children:[l.jsx("h2",{children:"RealPal"}),l.jsx("span",{className:"brand-tagline",children:"Trusted Companion"})]})]}),l.jsxs("div",{className:"sidebar-vision",children:[l.jsx("div",{className:"vision-title",children:"VISION & MISSION"}),l.jsx("p",{className:"vision-text",children:"To build better communities across the world one at a time by providing a platform for landlords, tenants, and service providers."})]}),l.jsx("nav",{className:"sidebar-nav",children:i.map(s=>l.jsxs("button",{className:`nav-item ${e===s.id?"active":""}`,onClick:()=>t(s.id),children:[l.jsx("span",{className:"nav-icon",children:s.icon}),l.jsx("span",{className:"nav-label",children:s.label}),s.id==="reminders"&&l.jsx("span",{className:"nav-badge pulse-indicator"})]},s.id))}),l.jsx("div",{className:"sidebar-footer",children:l.jsxs("div",{className:"user-profile",children:[l.jsx("div",{className:"avatar",children:l.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),l.jsxs("div",{className:"user-info",children:[l.jsx("div",{className:"user-name",children:"Alex Miller"}),l.jsx("div",{className:"user-role",children:"Independent Landlord"}),l.jsx("div",{className:"sub-status",children:r()})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function mc({subscription:e,setSubscription:t,setActiveTab:n}){const[r,i]=b.useState(3),[s,a]=b.useState(0),o=g=>{t(g),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{n("dashboard")},400)},c=()=>{var g;(g=document.getElementById("concept-detail-section"))==null||g.scrollIntoView({behavior:"smooth"})},f=[{title:"Repairs & Maintenance Costs",desc:"An average of $2,000 to $3,000 is spent per unit annually on maintenance. RealPal helps reduce this by 10-15% through competitive bidding and group service pools.",icon:"🔧"},{title:"Compliance & Laws",desc:"Local, state, and federal leasing regulations change constantly. RealPal tracks statutory inspections, certifications, and compliance deadlines automatically.",icon:"📜"},{title:"Tenant Turnover & Rent Loss",desc:"Finding and vetting tenants leads to vacant periods that eat into passive income. Keep tenants longer by resolving maintenance issues fast and maintaining transparent comms.",icon:"🔑"},{title:"Stress of Property Management",desc:"Balancing property emergencies with personal life leads to burnout. RealPal centralizes communications, tasks, reminders, and invoices in one secure workspace.",icon:"🧠"},{title:"Accounting & Taxes",desc:"Tracking deductible expenses, vendor invoices, rent deposits, and writing off depreciation is complex. Keep records neat and ready for tax seasons.",icon:"📊"}],h=r*2500,y=r*325;return l.jsxs("div",{className:"landing-container animate-fade-in",style:{padding:0,margin:"-2.5rem -2.5rem 0"},children:[l.jsxs("section",{className:"typewriter-hero-container",children:[l.jsxs("div",{className:"typewriter-wrapper",children:[l.jsx("h1",{className:"typewriter-bold-title",children:"REAL PAL"}),l.jsx("p",{className:"typewriter-bold-subtitle",children:"A trusted companion for Landlords, Tenants & Service Providers."})]}),l.jsxs("button",{className:"scroll-down-btn",onClick:c,"aria-label":"Scroll Down",children:[l.jsx("span",{className:"scroll-arrow",children:"▼"}),l.jsx("span",{className:"scroll-text",children:"Scroll Down for Details"})]})]}),l.jsxs("section",{id:"concept-detail-section",className:"concept-detail-section",style:{padding:"2.5rem"},children:[l.jsxs("div",{className:"hero-showcase glass-card",style:{marginTop:"1rem"},children:[l.jsxs("div",{className:"hero-text-content",children:[l.jsx("span",{className:"badge badge-primary",children:"Platform Concept"}),l.jsx("h2",{className:"hero-title",style:{fontSize:"2rem"},children:"Better communities, one rental at a time."}),l.jsxs("p",{className:"hero-p",children:["Independent landlords represent ",l.jsx("strong",{children:"10 million investors"})," managing over ",l.jsx("strong",{children:"23 million rental units"})," in the US. RealPal bridges the gap between Landlords, Tenants, and Service Providers to streamline property management and reduce the $46 billion annual maintenance burden."]}),l.jsxs("div",{className:"hero-buttons",children:[l.jsx("button",{className:"btn btn-primary",onClick:()=>o("premium"),children:"Activate Trial Demo"}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>{const g=document.getElementById("savings-calculator");g==null||g.scrollIntoView({behavior:"smooth"})},children:"Calculate ROI Savings"})]})]}),l.jsxs("div",{className:"hero-image-pane",children:[l.jsxs("div",{className:"concept-stat-box",children:[l.jsx("div",{className:"stat-num text-gradient",children:"$46B"}),l.jsx("div",{className:"stat-lbl",children:"US Annual Maintenance Spend"})]}),l.jsxs("div",{className:"concept-stat-box accent-box",children:[l.jsx("div",{className:"stat-num savings-gradient",children:"10-15%"}),l.jsx("div",{className:"stat-lbl",children:"Target Expense Savings"})]})]})]}),l.jsxs("div",{id:"savings-calculator",className:"savings-calc-section grid-2",children:[l.jsxs("div",{className:"glass-card flex-column-center",children:[l.jsx("h3",{className:"section-title",children:"Interactive savings calculator"}),l.jsx("p",{className:"section-p",children:"See how much you can expect to save in repairs, administration, and vacant turnovers using RealPal's smart crowdsourcing and preventive tracking tools."}),l.jsxs("div",{className:"calc-slider-wrapper",children:[l.jsxs("label",{className:"form-label",style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"Number of Rental Units:"}),l.jsxs("span",{className:"slider-val",children:[r," ",r===1?"Unit":"Units"]})]}),l.jsx("input",{type:"range",min:"1",max:"50",value:r,onChange:g=>i(parseInt(g.target.value)),className:"calc-slider"})]}),l.jsxs("div",{className:"savings-grid",children:[l.jsxs("div",{className:"savings-item",children:[l.jsx("span",{className:"savings-lbl",children:"Estimated Annual Spend"}),l.jsxs("span",{className:"savings-val",children:["$",h.toLocaleString()]})]}),l.jsxs("div",{className:"savings-item highlight-savings",children:[l.jsx("span",{className:"savings-lbl",children:"RealPal Saved (13%)"}),l.jsxs("span",{className:"savings-val",children:["$",y.toLocaleString()]})]})]}),l.jsx("div",{className:"savings-foot-note",children:"*Based on industry averages of $2,000–$3,000 spent per property unit on repairs, plumbing, electrical, and landscaping annually."})]}),l.jsxs("div",{className:"glass-card",children:[l.jsx("h3",{className:"section-title",children:"Major Landlord Hassles Addressed"}),l.jsx("p",{className:"section-p",children:"Click on the challenges below to see how RealPal's specific feature set helps mitigate them."}),l.jsx("div",{className:"problem-list",children:f.map((g,j)=>l.jsxs("div",{className:`problem-item ${s===j?"expanded":""}`,onClick:()=>a(j),children:[l.jsxs("div",{className:"problem-header",children:[l.jsx("span",{className:"prob-icon",children:g.icon}),l.jsx("span",{className:"prob-title",children:g.title}),l.jsx("span",{className:"prob-arrow",children:s===j?"▲":"▼"})]}),s===j&&l.jsx("div",{className:"problem-body animate-slide-up",children:l.jsx("p",{children:g.desc})})]},j))})]})]}),l.jsxs("div",{className:"business-models-section",children:[l.jsx("h3",{className:"section-title",style:{textAlign:"center",marginBottom:"0.5rem"},children:"Flexible Business Models"}),l.jsx("p",{className:"section-p",style:{textAlign:"center",marginBottom:"2.5rem",maxWidth:"600px",margin:"0 auto 2.5rem"},children:"We evaluate multiple revenue avenues to align incentive with landlord savings and ease of adoption. Choose a mock model below to experience the platform."}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:`pricing-card glass-card ${e==="basic"?"active-plan":""}`,children:[e==="basic"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Basic Flat Fee"}),l.jsxs("div",{className:"plan-price",children:["$19",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"For small landlords starting their automation journey."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Manage up to 5 properties"}),l.jsx("li",{children:"✓ Core compliance reminders"}),l.jsx("li",{children:"✓ Basic digital lease storage"}),l.jsx("li",{children:"✓ Crowdsource service listings"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="basic"?"btn-success":""}`,onClick:()=>o("basic"),children:e==="basic"?"Selected Plan":"Select Flat Subscription"})]}),l.jsxs("div",{className:`pricing-card glass-card premium-card ${e==="premium"?"active-plan":""}`,children:[e==="premium"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-badge",children:"Most Popular"}),l.jsx("div",{className:"plan-name",children:"Premium Hub"}),l.jsxs("div",{className:"plan-price",children:["$39",l.jsx("span",{children:"/mo"})]}),l.jsx("div",{className:"plan-desc",children:"Full dashboard and integrated service provider bidding network."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Interactive maintenance bidding"}),l.jsx("li",{children:"✓ Auto-reminders & calendar sync"}),l.jsx("li",{children:"✓ Group saving zip pool access"}),l.jsx("li",{children:"✓ Live tenant ticket portal"})]}),l.jsx("button",{className:"btn btn-primary",onClick:()=>o("premium"),children:e==="premium"?"Active Member":"Upgrade to Premium"})]}),l.jsxs("div",{className:`pricing-card glass-card ${e==="savings"?"active-plan":""}`,children:[e==="savings"&&l.jsx("div",{className:"active-tag",children:"Active Subscription"}),l.jsx("div",{className:"plan-name",children:"Share of Savings"}),l.jsxs("div",{className:"plan-price",children:["10%",l.jsx("span",{children:"of savings"})]}),l.jsx("div",{className:"plan-desc",children:"Zero subscription fees. Pay only a percentage of verified repair savings."}),l.jsxs("ul",{className:"plan-features",children:[l.jsx("li",{children:"✓ Unlimited properties & units"}),l.jsx("li",{children:"✓ Full provider bidding simulator"}),l.jsx("li",{children:"✓ RealPal bulk service pricing"}),l.jsx("li",{children:"✓ Pay only when we save you money"}),l.jsx("li",{children:"✓ Quarterly savings report"})]}),l.jsx("button",{className:`btn btn-secondary ${e==="savings"?"btn-success":""}`,onClick:()=>o("savings"),children:e==="savings"?"Selected Plan":"Select Pay-on-Savings"})]})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Em({properties:e,reminders:t,jobs:n,groupDeals:r,setActiveTab:i}){const s=e.length,a=e.filter(v=>v.status==="Occupied").length,o=s>0?Math.round(a/s*100):0,c=e.reduce((v,C)=>v+(C.status==="Occupied"?C.rent:0),0),f=n.filter(v=>v.status==="active"&&v.savings).reduce((v,C)=>v+C.savings,0),h=r.filter(v=>v.joined&&v.unlocked).reduce((v,C)=>v+C.bulkPrice*(C.discountPercent/100),0),y=f+h,g=t.filter(v=>!v.completed),j=g.filter(v=>v.priority==="High"),S=n.filter(v=>v.status==="bidding"),w={months:["Jan","Feb","Mar","Apr","May","Jun"],rent:[3200,3200,4800,4800,5400,c||5400],expense:[850,400,1200,300,1600,S.length*150+200]},F=6e3,p=v=>v.map((C,R)=>{const E=30+R*90,x=170-C/F*150;return`${E},${x}`}).join(" "),d=p(w.rent),m=p(w.expense);return l.jsxs("div",{className:"dashboard-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Dashboard Overview"}),l.jsx("p",{className:"view-description",children:"Real-time financials, property occupancies, and operational actions."})]})}),l.jsxs("div",{className:"grid-4",style:{marginBottom:"2rem"},children:[l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-primary-light)",color:"var(--color-primary)"},children:"🏠"}),l.jsxs("div",{className:"kpi-info",children:[l.jsx("span",{className:"kpi-val",children:s}),l.jsx("span",{className:"kpi-lbl",children:"Properties"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("properties"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-info-light)",color:"var(--color-info)"},children:"👥"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[o,"%"]}),l.jsx("span",{className:"kpi-lbl",children:"Occupancy Rate"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("crowdsource"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"var(--color-warning-light)",color:"var(--color-warning)"},children:"🪙"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",style:{color:"var(--color-warning)"},children:["$",y.toLocaleString()]}),l.jsx("span",{className:"kpi-lbl",children:"Saved on Repairs"})]})]}),l.jsxs("div",{className:"glass-card kpi-card",onClick:()=>i("reminders"),children:[l.jsx("div",{className:"kpi-icon-wrapper",style:{background:"rgba(255,255,255,0.05)",color:"#fff"},children:"🔔"}),l.jsxs("div",{className:"kpi-info",children:[l.jsxs("span",{className:"kpi-val",children:[g.length,j.length>0&&l.jsxs("span",{className:"kpi-sub-val",style:{color:"var(--color-primary)"},children:["(",j.length," High)"]})]}),l.jsx("span",{className:"kpi-lbl",children:"Active Reminders"})]})]})]}),l.jsxs("div",{className:"chart-alerts-layout",children:[l.jsxs("div",{className:"glass-card chart-card",children:[l.jsx("h3",{className:"section-title",children:"Rent Roll vs. Repair Costs"}),l.jsx("p",{className:"section-p",children:"Consolidated cashflow comparison across the current portfolio (Last 6 Months)."}),l.jsx("div",{className:"svg-chart-container",children:l.jsxs("svg",{viewBox:"0 0 500 200",className:"dashboard-svg-chart",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"rent-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.15"}),l.jsx("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0.0"})]}),l.jsxs("linearGradient",{id:"exp-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"var(--color-primary)",stopOpacity:"0.2"}),l.jsx("stop",{offset:"100%",stopColor:"var(--color-primary)",stopOpacity:"0.0"})]})]}),l.jsx("line",{x1:"30",y1:"20",x2:"480",y2:"20",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"70",x2:"480",y2:"70",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"120",x2:"480",y2:"120",stroke:"rgba(255,255,255,0.03)",strokeWidth:"1"}),l.jsx("line",{x1:"30",y1:"170",x2:"480",y2:"170",stroke:"rgba(255,255,255,0.08)",strokeWidth:"1"}),l.jsx("text",{x:"5",y:"25",fill:"var(--text-muted)",fontSize:"8",children:"$6.0K"}),l.jsx("text",{x:"5",y:"75",fill:"var(--text-muted)",fontSize:"8",children:"$4.0K"}),l.jsx("text",{x:"5",y:"125",fill:"var(--text-muted)",fontSize:"8",children:"$2.0K"}),l.jsx("text",{x:"5",y:"175",fill:"var(--text-muted)",fontSize:"8",children:"$0"}),w.months.map((v,C)=>l.jsx("text",{x:30+C*90,y:"190",textAnchor:"middle",fill:"var(--text-muted)",fontSize:"9",fontWeight:"600",children:v},v)),l.jsx("polygon",{points:`30,170 ${d} 480,170`,fill:"url(#rent-grad)"}),l.jsx("polyline",{fill:"none",stroke:"#ffffff",strokeWidth:"3.5",strokeLinecap:"round",points:d}),l.jsx("polygon",{points:`30,170 ${m} 480,170`,fill:"url(#exp-grad)"}),l.jsx("polyline",{fill:"none",stroke:"var(--color-primary)",strokeWidth:"3.5",strokeLinecap:"round",points:m}),l.jsx("circle",{cx:30+5*90,cy:170-w.rent[5]/F*150,r:"5",fill:"#ffffff",stroke:"#000",strokeWidth:"2"}),l.jsx("circle",{cx:30+5*90,cy:170-w.expense[5]/F*150,r:"5",fill:"var(--color-primary)",stroke:"#000",strokeWidth:"2"})]})}),l.jsxs("div",{className:"chart-legend",children:[l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"#ffffff"}}),l.jsxs("span",{children:["Rent Roll ($",c.toLocaleString(),"/mo)"]})]}),l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"dot",style:{backgroundColor:"var(--color-primary)"}}),l.jsxs("span",{children:["Maintenance Expenses ($",w.expense[5],"/mo)"]})]})]})]}),l.jsxs("div",{className:"glass-card alerts-card",children:[l.jsx("h3",{className:"section-title",children:"Operational Hub"}),l.jsx("p",{className:"section-p",children:"Actions requiring immediate attention."}),l.jsxs("div",{className:"alerts-stack",style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:[S.map(v=>l.jsxs("div",{className:"alert-item alert-job glass-card",onClick:()=>i("crowdsource"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-warning",children:"Bid Response Pending"}),l.jsx("span",{className:"pulse-indicator"})]}),l.jsx("h4",{className:"alert-item-title",children:v.title}),l.jsx("p",{className:"alert-item-desc",children:"Quotations are formulating on this maintenance ticket. Select a vendor."})]},v.id)),j.slice(0,2).map(v=>l.jsxs("div",{className:"alert-item alert-task glass-card",onClick:()=>i("reminders"),children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{className:"badge badge-danger",children:"High Priority Task"}),l.jsxs("span",{className:"alert-date",children:["📅 ",new Date(v.date).toLocaleDateString()]})]}),l.jsx("h4",{className:"alert-item-title",children:v.title}),l.jsxs("p",{className:"alert-item-desc",children:["Associated Property: ",v.propertyName]})]},v.id)),S.length===0&&j.length===0&&l.jsxs("div",{className:"all-clear-state",children:[l.jsx("div",{className:"all-clear-icon",children:"✓"}),l.jsx("h4",{children:"All systems operating normally"}),l.jsx("p",{children:"No critical leasing deadlines or bidding alerts require processing today."})]})]})]})]}),l.jsxs("div",{className:"quick-actions-bar glass-card",style:{marginTop:"2rem"},children:[l.jsx("h4",{style:{marginBottom:"0.75rem"},children:"Quick Landlord Utilities"}),l.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("properties"),children:"+ Register New Property"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("crowdsource"),children:"🔧 Request Contractor Bid"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("reminders"),children:"📅 Schedule Compliance Check"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>i("landing"),children:"📊 Check Pricing ROI"})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Rm({properties:e,onAddProperty:t,onUpdateProperty:n,onDeleteProperty:r}){const[i,s]=b.useState("portfolio"),[a,o]=b.useState(null),[c,f]=b.useState([]),[h,y]=b.useState(null),[g,j]=b.useState(""),[S,w]=b.useState("Any"),[F,p]=b.useState("Any"),[d,m]=b.useState("Any"),[v,C]=b.useState(!1),[R,E]=b.useState(null),[x,O]=b.useState(""),[M,P]=b.useState("Single Family"),[k,_]=b.useState(""),[$,U]=b.useState(""),[we,et]=b.useState(""),[z,I]=b.useState(""),[D,Q]=b.useState(""),[ne,Lt]=b.useState("Occupied"),[De,tt]=b.useState(32e4),[$e,Ke]=b.useState(25),[Yl,Pn]=b.useState(7),[Kl,zn]=b.useState(30),[Pd,Gl]=b.useState(6e3),[zd,Jl]=b.useState(2e4),[Sr,En]=b.useState(9e3),[Ed,Xl]=b.useState(3),[Cr,Rn]=b.useState(1200),[Rd,Zl]=b.useState(3),[Td,ql]=b.useState(0),[_d,ei]=b.useState(3),[br,Tn]=b.useState(2e3),[Ld,ti]=b.useState(3),[Md,ni]=b.useState(500),[Fd,ri]=b.useState(3),[Id,li]=b.useState(5),[Od,ii]=b.useState(0),[si,_n]=b.useState(3),[Dd,ai]=b.useState(5),[$d,oi]=b.useState(5),[$a,ci]=b.useState(8.5),[Aa,ui]=b.useState(9),[Ba,di]=b.useState(8.8),[Ha,fi]=b.useState(32),[Ua,pi]=b.useState("Low"),[Va,mi]=b.useState("Clay loam, stable"),[Wa,hi]=b.useState("Westfield Valley Fair, Santana Row"),[Qa,gi]=b.useState("Alum Rock Park, Sierra Vista Open Space"),[Ad,Ya]=b.useState(37.3382),[Bd,Ka]=b.useState(-121.8863),Pr=()=>{O(""),P("Single Family"),_(""),U(""),et(""),I(""),Q(""),Lt("Occupied"),tt(32e4),Ke(25),Pn(7),zn(30),Gl(6e3),Jl(2e4),En(9e3),Xl(3),Rn(1200),Zl(3),ql(0),ei(3),Tn(2e3),ti(3),ni(500),ri(3),li(5),ii(0),_n(3),ai(5),oi(5),ci(8.5),ui(9),di(8.8),fi(32),pi("Low"),mi("Clay loam, stable"),hi("Westfield Valley Fair, Santana Row"),gi("Alum Rock Park, Sierra Vista Open Space"),Ya(37.3382),Ka(-121.8863),E(null)},Hd=(u,L)=>{L.stopPropagation(),E(u),O(u.address),P(u.type),_(u.rent),U(u.tenantName==="Vacant"?"":u.tenantName),et(u.tenantEmail==="-"?"":u.tenantEmail),I(u.leaseStart||""),Q(u.leaseEnd||""),Lt(u.status),tt(u.purchasePrice??32e4),Ke(u.downPaymentPercent??25),Pn(u.interestRate??7),zn(u.loanTermYears??30),Gl(u.otherPurchaseCosts??6e3),Jl(u.repairCost??2e4),En(u.annualPropertyTax??9e3),Xl(u.taxIncreasePercent??3),Rn(u.annualInsurance??1200),Zl(u.insuranceIncreasePercent??3),ql(u.monthlyHOA??0),ei(u.hoaIncreasePercent??3),Tn(u.annualMaintenance??2e3),ti(u.maintenanceIncreasePercent??3),ni(u.otherExpenses??500),ri(u.otherExpensesIncreasePercent??3),li(u.vacancyRatePercent??5),ii(u.managementFeePercent??0),_n(u.appreciationRatePercent??3),ai(u.holdingPeriodYears??5),oi(u.sellingCostPercent??5),ci(u.schoolElementary??8.5),ui(u.schoolMiddle??9),di(u.schoolHigh??8.8),fi(u.airQualityIndex??32),pi(u.fireRisk??"Low"),mi(u.soilType??"Clay loam, stable"),hi(u.mallsNearby??"Westfield Valley Fair, Santana Row"),gi(u.forestPreserves??"Alum Rock Park, Sierra Vista Open Space"),Ya(u.latitude??37.3382),Ka(u.longitude??-121.8863),C(!0)},Ga=()=>({address:x,type:M,rent:parseFloat(k)||0,tenantName:$||"Vacant",tenantEmail:we||"-",leaseStart:z||"",leaseEnd:D||"",status:$?ne:"Vacant",purchasePrice:parseFloat(De)||0,downPaymentPercent:parseFloat($e)||0,interestRate:parseFloat(Yl)||0,loanTermYears:parseInt(Kl)||0,otherPurchaseCosts:parseFloat(Pd)||0,repairCost:parseFloat(zd)||0,annualPropertyTax:parseFloat(Sr)||0,taxIncreasePercent:parseFloat(Ed)||0,annualInsurance:parseFloat(Cr)||0,insuranceIncreasePercent:parseFloat(Rd)||0,monthlyHOA:parseFloat(Td)||0,hoaIncreasePercent:parseFloat(_d)||0,annualMaintenance:parseFloat(br)||0,maintenanceIncreasePercent:parseFloat(Ld)||0,otherExpenses:parseFloat(Md)||0,otherExpensesIncreasePercent:parseFloat(Fd)||0,vacancyRatePercent:parseFloat(Id)||0,managementFeePercent:parseFloat(Od)||0,appreciationRatePercent:parseFloat(si)||0,holdingPeriodYears:parseInt(Dd)||0,sellingCostPercent:parseFloat($d)||0,schoolElementary:parseFloat($a)||0,schoolMiddle:parseFloat(Aa)||0,schoolHigh:parseFloat(Ba)||0,airQualityIndex:parseInt(Ha)||0,fireRisk:Ua||"Low",soilType:Va||"Unknown",mallsNearby:Wa||"None",forestPreserves:Qa||"None",latitude:parseFloat(Ad)||0,longitude:parseFloat(Bd)||0}),Ud=async u=>{u.preventDefault(),!(!x||!k)&&(R?await n(R.id,Ga()):await t(Ga()),C(!1),Pr())},Vd=(u,L)=>{L.stopPropagation(),confirm("Are you sure you want to remove this property? All associated tenant tracking will be cleared.")&&(r(u),(h==null?void 0:h.id)===u&&y(null))},zr=u=>{const L=u.purchasePrice||32e4,H=L*((u.downPaymentPercent??25)/100),de=L-H,ft=(u.interestRate??7)/100/12,Ae=(u.loanTermYears??30)*12;let Er=0;ft>0&&Ae>0?Er=de*(ft*Math.pow(1+ft,Ae))/(Math.pow(1+ft,Ae)-1):Ae>0&&(Er=de/Ae);const vi=H+(u.otherPurchaseCosts??6e3)+(u.repairCost??2e4),Ja=u.rent||0,xi=Ja*12,yi=xi*((u.vacancyRatePercent??5)/100),Xa=(xi-yi)*((u.managementFeePercent??0)/100),Za=(u.annualPropertyTax??9e3)+(u.annualInsurance??1200)+(u.monthlyHOA??0)*12+(u.annualMaintenance??2e3)+(u.otherExpenses??500)+yi+Xa,wi=Math.max(0,xi-Za),qa=Er*12,eo=wi-qa,Yd=L>0?wi/L*100:0,Kd=vi>0?eo/vi*100:0,Gd=u.holdingPeriodYears??5,to=[];let Rr=L,Jt=Ja*12,ji=u.annualPropertyTax??9e3,ki=u.annualInsurance??1200,Ni=(u.monthlyHOA??0)*12,Si=u.annualMaintenance??2e3,Ci=u.otherExpenses??500;for(let Ln=1;Ln<=Gd;Ln++){Rr=Rr*(1+(u.appreciationRatePercent??3)/100),Ln>1&&(Jt=Jt*(1+3/100),ji=ji*(1+(u.taxIncreasePercent??3)/100),ki=ki*(1+(u.insuranceIncreasePercent??3)/100),Ni=Ni*(1+(u.hoaIncreasePercent??3)/100),Si=Si*(1+(u.maintenanceIncreasePercent??3)/100),Ci=Ci*(1+(u.otherExpensesIncreasePercent??3)/100));const no=Jt*((u.vacancyRatePercent??5)/100),Jd=(Jt-no)*((u.managementFeePercent??0)/100),ro=ji+ki+Ni+Si+Ci+no+Jd,Xd=Math.max(0,Jt-ro)-qa;let Mn=0;const Tr=Ln*12;ft>0&&Ae>0&&Tr<Ae?Mn=de*(Math.pow(1+ft,Ae)-Math.pow(1+ft,Tr))/(Math.pow(1+ft,Ae)-1):Tr>=Ae?Mn=0:Mn=de-de*(Tr/Ae);const Zd=Math.max(0,Rr-Mn);to.push({year:Ln,value:Math.round(Rr),income:Math.round(Jt),expenses:Math.round(ro),cashFlow:Math.round(Xd),equity:Math.round(Zd),loanBalance:Math.round(Mn)})}return{downPayment:H,loanAmount:de,monthlyMortgage:Er,initialCash:vi,vacancyLoss:yi,managementCost:Xa,annualExpenses:Za,noi:wi,cashFlow:eo,capRate:Yd,cashOnCash:Kd,projections:to}},Gt=e.filter(u=>!(g&&!u.address.toLowerCase().includes(g.toLowerCase())||S!=="Any"&&u.rent>parseInt(S)||F!=="Any"&&u.type!==F));b.useEffect(()=>{Gt.length>0&&!h&&y(Gt[0])},[Gt,h]);const Wd=(u,L)=>{if(L.stopPropagation(),c.includes(u))f(c.filter(H=>H!==u));else{if(c.length>=3){alert("You can compare a maximum of 3 properties side-by-side.");return}f([...c,u])}},Qd=u=>{tt(u.purchasePrice??32e4),Ke(u.downPaymentPercent??25),Pn(u.interestRate??7),zn(u.loanTermYears??30),Gl(u.otherPurchaseCosts??6e3),Jl(u.repairCost??2e4),En(u.annualPropertyTax??9e3),Xl(u.taxIncreasePercent??3),Rn(u.annualInsurance??1200),Zl(u.insuranceIncreasePercent??3),ql(u.monthlyHOA??0),ei(u.hoaIncreasePercent??3),Tn(u.annualMaintenance??2e3),ti(u.maintenanceIncreasePercent??3),ni(u.otherExpenses??500),ri(u.otherExpensesIncreasePercent??3),li(u.vacancyRatePercent??5),ii(u.managementFeePercent??0),_n(u.appreciationRatePercent??3),ai(u.holdingPeriodYears??5),oi(u.sellingCostPercent??5)},Mt=h?zr(h):null;return l.jsxs("div",{className:"zillow-platform-container animate-fade-in",children:[l.jsxs("header",{className:"zillow-nav-header no-print",children:[l.jsxs("div",{className:"nav-left",children:[l.jsx("div",{className:"zillow-brand-logo",children:"RealPal"}),l.jsx("span",{className:"rent-portal-tag",children:"Rentals"})]}),l.jsxs("nav",{className:"nav-links",children:[l.jsx("a",{href:"#",className:"active",children:"Buy"}),l.jsx("a",{href:"#",children:"Rent"}),l.jsx("a",{href:"#",children:"Sell"}),l.jsx("a",{href:"#",children:"Home Loans"}),l.jsx("a",{href:"#",children:"Agent Finder"}),l.jsx("span",{className:"divider"}),l.jsx("a",{href:"#",onClick:()=>{s("portfolio")},children:"🔍 Map Search"}),l.jsxs("a",{href:"#",onClick:()=>{s("compare")},children:["⚖️ Comparison Matrix (",c.length,")"]})]}),l.jsx("div",{className:"nav-right",children:l.jsx("button",{className:"btn-zillow-primary",onClick:()=>{Pr(),C(!0)},children:"➕ Post Rental Listing"})})]}),i==="portfolio"&&l.jsxs("div",{className:"zillow-filter-bar no-print",children:[l.jsxs("div",{className:"search-input-wrapper",children:[l.jsx("input",{type:"text",placeholder:"Address, neighborhood, ZIP...",value:g,onChange:u=>j(u.target.value),className:"zillow-search-input"}),l.jsx("span",{className:"search-icon",children:"🔍"})]}),l.jsxs("div",{className:"filter-dropdown-group",children:[l.jsxs("div",{className:"filter-select-wrapper",children:[l.jsx("label",{children:"Max Rent"}),l.jsxs("select",{value:S,onChange:u=>w(u.target.value),className:"zillow-select",children:[l.jsx("option",{value:"Any",children:"Any Price"}),l.jsx("option",{value:"1500",children:"$1,500/mo"}),l.jsx("option",{value:"2500",children:"$2,500/mo"}),l.jsx("option",{value:"3500",children:"$3,500/mo"}),l.jsx("option",{value:"5000",children:"$5,000/mo"})]})]}),l.jsxs("div",{className:"filter-select-wrapper",children:[l.jsx("label",{children:"Home Type"}),l.jsxs("select",{value:F,onChange:u=>p(u.target.value),className:"zillow-select",children:[l.jsx("option",{value:"Any",children:"All Types"}),l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"})]})]})]}),l.jsxs("div",{className:"listing-count-tag",children:[Gt.length," Homes matching search"]})]}),i==="portfolio"&&l.jsxs("div",{className:"zillow-split-container",children:[l.jsxs("div",{className:"zillow-left-listings-panel no-print",children:[l.jsxs("div",{className:"listings-header",children:[l.jsx("h2",{children:"Rental Listings"}),l.jsxs("div",{className:"sort-by",children:["Sort: ",l.jsx("strong",{children:"Newest"})]})]}),Gt.length===0?l.jsxs("div",{className:"zillow-empty-state",children:[l.jsx("span",{className:"house-emoji",children:"🏠"}),l.jsx("h3",{children:"No rental listings found"}),l.jsx("p",{children:"Adjust your filters or add a new rental property to get started."}),l.jsx("button",{className:"btn-zillow-outline",onClick:()=>C(!0),children:"Add Property"})]}):l.jsx("div",{className:"zillow-listings-grid",children:Gt.map(u=>{const L=(h==null?void 0:h.id)===u.id,H=zr(u);return l.jsxs("div",{className:`zillow-listing-card ${L?"selected":""}`,onClick:()=>{y(u),Qd(u)},children:[l.jsxs("div",{className:"card-image-box",children:[l.jsx("div",{className:"listing-type-badge",children:u.type}),l.jsx("div",{className:"occupancy-badge",children:u.status}),l.jsx("div",{className:"card-image-placeholder",children:"🏠 RealPal Verified"}),l.jsx("button",{className:`compare-bubble-btn ${c.includes(u.id)?"active":""}`,onClick:de=>Wd(u.id,de),title:"Compare property",children:"⚖️"})]}),l.jsxs("div",{className:"card-info-box",children:[l.jsx("div",{className:"price-row",children:l.jsxs("span",{className:"price",children:["$",u.rent.toLocaleString(),l.jsx("span",{className:"mo",children:"/mo"})]})}),l.jsxs("div",{className:"details-row",children:[l.jsx("strong",{children:u.type==="Single Family"?"3 bds":"2 bds"})," • ",l.jsx("strong",{children:"2 ba"})," • ",l.jsx("strong",{children:"1,450 sqft"})]}),l.jsx("div",{className:"address",children:u.address}),l.jsxs("div",{className:"zillow-mini-yields",children:[l.jsxs("span",{className:"yield-pill cap",children:["Cap Rate: ",H.capRate.toFixed(2),"%"]}),l.jsxs("span",{className:"yield-pill coc",children:["CoC: ",H.cashOnCash.toFixed(2),"%"]})]}),l.jsxs("div",{className:"environmental-strip",children:[l.jsxs("span",{className:"env-pill aqi",children:["🍃 AQI ",u.airQualityIndex??32]}),l.jsxs("span",{className:"env-pill fire",children:["🔥 ",u.fireRisk??"Low"," Fire"]}),l.jsxs("span",{className:"env-pill school",children:["🎓 School ",(u.schoolMiddle??8.5).toFixed(1)]})]}),l.jsxs("div",{className:"card-actions-strip",children:[l.jsx("button",{className:"action-btn edit-btn",onClick:de=>Hd(u,de),children:"Edit"}),l.jsx("button",{className:"action-btn delete-btn",onClick:de=>Vd(u.id,de),children:"Delete"})]})]})]},u.id)})})]}),l.jsx("div",{className:"zillow-right-detail-panel",children:h?l.jsxs("div",{className:"zillow-listing-details-sheet print-sheet",children:[l.jsx("div",{className:"sheet-image-gallery no-print",children:l.jsxs("div",{className:"main-gallery-pic",children:[l.jsx("span",{className:"realpal-guarantee-shield",children:"🛡️ RealPal Guaranteed Rental Data"}),l.jsx("span",{className:"prop-addr-overlay",children:h.address})]})}),l.jsxs("div",{className:"sheet-header-print print-only",children:[l.jsx("h1",{children:"RealPal Property ROI & Environmental Sheet"}),l.jsx("p",{className:"address",children:h.address}),l.jsxs("p",{className:"date",children:["Generated: ",new Date().toLocaleDateString()]})]}),l.jsxs("div",{className:"sheet-body-content",children:[l.jsxs("div",{className:"core-details-header",children:[l.jsxs("div",{className:"price-rent-block",children:[l.jsxs("h2",{children:["$",h.rent.toLocaleString(),"/mo"]}),l.jsxs("p",{children:[h.type," • Active Tenant: ",h.tenantName]})]}),l.jsxs("div",{className:"yields-header-block no-print",children:[l.jsxs("div",{className:"yield-header-metric",children:[l.jsx("span",{className:"lbl",children:"Cap Rate"}),l.jsxs("span",{className:"val",children:[Mt.capRate.toFixed(2),"%"]})]}),l.jsxs("div",{className:"yield-header-metric",children:[l.jsx("span",{className:"lbl",children:"Cash-on-Cash"}),l.jsxs("span",{className:"val text-orange",children:[Mt.cashOnCash.toFixed(2),"%"]})]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"📊 Acquisition & ROI Parameters"}),l.jsxs("div",{className:"calculator-two-col-grid",children:[l.jsxs("div",{className:"calculator-inline-inputs no-print",children:[l.jsxs("div",{className:"form-grid-2",children:[l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:De,onChange:u=>{tt(parseFloat(u.target.value)||0),n(h.id,{...h,purchasePrice:parseFloat(u.target.value)||0})}})]}),l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:$e,onChange:u=>{Ke(parseFloat(u.target.value)||0),n(h.id,{...h,downPaymentPercent:parseFloat(u.target.value)||0})}})]}),l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:Yl,onChange:u=>{Pn(parseFloat(u.target.value)||0),n(h.id,{...h,interestRate:parseFloat(u.target.value)||0})}})]}),l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Loan Term (Yrs)"}),l.jsx("input",{type:"number",value:Kl,onChange:u=>{zn(parseInt(u.target.value)||0),n(h.id,{...h,loanTermYears:parseInt(u.target.value)||0})}})]}),l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Taxes ($/yr)"}),l.jsx("input",{type:"number",value:Sr,onChange:u=>{En(parseFloat(u.target.value)||0),n(h.id,{...h,annualPropertyTax:parseFloat(u.target.value)||0})}})]}),l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Insurance ($/yr)"}),l.jsx("input",{type:"number",value:Cr,onChange:u=>{Rn(parseFloat(u.target.value)||0),n(h.id,{...h,annualInsurance:parseFloat(u.target.value)||0})}})]}),l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Maintenance ($/yr)"}),l.jsx("input",{type:"number",value:br,onChange:u=>{Tn(parseFloat(u.target.value)||0),n(h.id,{...h,annualMaintenance:parseFloat(u.target.value)||0})}})]}),l.jsxs("div",{className:"inline-form-group",children:[l.jsx("label",{children:"Appreciation (%/yr)"}),l.jsx("input",{type:"number",value:si,onChange:u=>{_n(parseFloat(u.target.value)||0),n(h.id,{...h,appreciationRatePercent:parseFloat(u.target.value)||0})}})]})]}),l.jsx("p",{className:"auto-save-tag",children:"⚡ Inputs save to listing automatically"})]}),l.jsx("div",{className:"calculator-yields-table",children:l.jsx("table",{className:"compact-yields-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Initial Cash Invested"}),l.jsxs("td",{className:"text-right font-bold",children:["$",Math.round(Mt.initialCash).toLocaleString()]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Monthly Mortgage (P&I)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round(Mt.monthlyMortgage).toLocaleString(),"/mo"]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Taxes & HOI (Monthly)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round((Sr+Cr)/12).toLocaleString(),"/mo"]})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Maintenance & Vacancy (Monthly)"}),l.jsxs("td",{className:"text-right text-red",children:["-$",Math.round((br+Mt.vacancyLoss)/12).toLocaleString(),"/mo"]})]}),l.jsxs("tr",{className:"border-top",children:[l.jsx("td",{children:"Net Monthly Cash Flow"}),l.jsxs("td",{className:"text-right text-green font-bold",children:["$",Math.round(Mt.cashFlow/12).toLocaleString(),"/mo"]})]})]})})})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"📈 Multi-Year Growth Logs"}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"projections-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Year"}),l.jsx("th",{children:"Property Value"}),l.jsx("th",{children:"Annual Rent"}),l.jsx("th",{children:"Expenses"}),l.jsx("th",{children:"Cash Flow"}),l.jsx("th",{children:"Equity"})]})}),l.jsx("tbody",{children:Mt.projections.map(u=>l.jsxs("tr",{children:[l.jsxs("td",{children:["Year ",u.year]}),l.jsxs("td",{children:["$",u.value.toLocaleString()]}),l.jsxs("td",{children:["$",u.income.toLocaleString()]}),l.jsxs("td",{children:["$",u.expenses.toLocaleString()]}),l.jsxs("td",{className:u.cashFlow>=0?"text-green":"text-red",children:["$",u.cashFlow.toLocaleString()]}),l.jsxs("td",{className:"text-green font-bold",children:["$",u.equity.toLocaleString()]})]},u.year))})]})}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"🎓 GreatSchools™ Nearby Ratings"}),l.jsxs("div",{className:"schools-rating-grid",children:[l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Elementary School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(h.schoolElementary??8.5)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(h.schoolElementary??8.5).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"Middle School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(h.schoolMiddle??9)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(h.schoolMiddle??9).toFixed(1),"/10"]})]}),l.jsxs("div",{className:"school-rating-bar",children:[l.jsx("span",{className:"school-lbl",children:"High School"}),l.jsx("div",{className:"rating-track-wrapper",children:l.jsx("div",{className:"rating-track-fill",style:{width:`${(h.schoolHigh??8.8)*10}%`}})}),l.jsxs("span",{className:"rating-num",children:[(h.schoolHigh??8.8).toFixed(1),"/10"]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h3",{className:"section-title",children:"🌱 Environment & Location Safety"}),l.jsx("table",{className:"environmental-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Air Quality Index (AQI)"}),l.jsx("td",{children:l.jsxs("strong",{children:[h.airQualityIndex??32," AQI (Good)"]})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Wildfire Hazard Level"}),l.jsx("td",{className:"text-orange font-bold",children:h.fireRisk??"Low"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Soil Architecture"}),l.jsx("td",{children:h.soilType??"Clay loam, stable"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Forest Preserves Nearby"}),l.jsx("td",{children:h.forestPreserves??"None"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Shopping Malls Nearby"}),l.jsx("td",{children:h.mallsNearby??"None"})]})]})}),l.jsx("div",{className:"drawer-action-strip no-print",children:l.jsx("button",{className:"btn-zillow-outline",onClick:()=>window.print(),children:"🖨️ Export PDF Property Sheet"})})]})]}):l.jsxs("div",{className:"no-detail-selected no-print",children:[l.jsx("span",{className:"search-logo-large",children:"🔍"}),l.jsx("h3",{children:"Select a listing to view ROI sheets & environment reports"})]})})]}),i==="compare"&&l.jsx("div",{className:"zillow-compare-container no-print",children:c.length===0?l.jsxs("div",{className:"zillow-empty-state",children:[l.jsx("span",{className:"house-emoji",children:"⚖️"}),l.jsx("h3",{children:"No properties selected for comparison"}),l.jsx("p",{children:"Go back to the Search Listings view and click the scales button (⚖️) on up to 3 listings to compare them."})]}):l.jsxs("div",{className:"zillow-compare-sheet glass-card",children:[l.jsx("h2",{className:"section-title",children:"⚖️ Side-by-Side Property Comparison Matrix"}),l.jsxs("table",{className:"zillow-compare-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Feature Metric"}),c.map(u=>{const L=e.find(H=>H.id===u);return l.jsx("th",{className:"text-center",children:L==null?void 0:L.address},u)})]})}),l.jsxs("tbody",{children:[l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:c.length+1,children:"🏡 Listing Details"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Type"}),c.map(u=>{var L;return l.jsx("td",{className:"text-center",children:(L=e.find(H=>H.id===u))==null?void 0:L.type},u)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Occupancy Status"}),c.map(u=>{var L;return l.jsx("td",{className:"text-center",children:(L=e.find(H=>H.id===u))==null?void 0:L.status},u)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:c.length+1,children:"💰 ROI & Income Details"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Monthly Rent"}),c.map(u=>{var L;return l.jsxs("td",{className:"text-center font-bold",children:["$",(L=e.find(H=>H.id===u))==null?void 0:L.rent.toLocaleString()]},u)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Purchase Price"}),c.map(u=>{var L;return l.jsxs("td",{className:"text-center font-bold",children:["$",(((L=e.find(H=>H.id===u))==null?void 0:L.purchasePrice)??32e4).toLocaleString()]},u)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Cap Rate"}),c.map(u=>{const L=e.find(de=>de.id===u),H=zr(L);return l.jsxs("td",{className:"text-center font-bold text-blue",children:[H.capRate.toFixed(2),"%"]},u)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Cash-on-Cash Return"}),c.map(u=>{const L=e.find(de=>de.id===u),H=zr(L);return l.jsxs("td",{className:"text-center font-bold text-orange",children:[H.cashOnCash.toFixed(2),"%"]},u)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:c.length+1,children:"🎓 Schools ratings"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Middle School"}),c.map(u=>{var L;return l.jsxs("td",{className:"text-center font-bold text-green",children:[(((L=e.find(H=>H.id===u))==null?void 0:L.schoolMiddle)??8.5).toFixed(1),"/10"]},u)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"High School"}),c.map(u=>{var L;return l.jsxs("td",{className:"text-center font-bold text-green",children:[(((L=e.find(H=>H.id===u))==null?void 0:L.schoolHigh)??8.5).toFixed(1),"/10"]},u)})]}),l.jsx("tr",{className:"section-row",children:l.jsx("td",{colSpan:c.length+1,children:"🌱 Location Hazards"})}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Air Quality Index"}),c.map(u=>{var L;return l.jsxs("td",{className:"text-center",children:[((L=e.find(H=>H.id===u))==null?void 0:L.airQualityIndex)??32," AQI"]},u)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Wildfire Risk"}),c.map(u=>{var L;return l.jsx("td",{className:"text-center text-orange font-bold",children:((L=e.find(H=>H.id===u))==null?void 0:L.fireRisk)??"Low"},u)})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"lbl",children:"Malls Nearby"}),c.map(u=>{var L;return l.jsx("td",{className:"text-center font-normal",children:(L=e.find(H=>H.id===u))==null?void 0:L.mallsNearby},u)})]})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1.25rem"},children:l.jsx("button",{onClick:()=>f([]),className:"btn-zillow-outline",children:"Clear Selections"})})]})}),v&&l.jsx("div",{className:"modal-overlay no-print",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>{C(!1),Pr()},children:"×"}),l.jsx("h3",{className:"modal-title",children:R?"Edit Rental Listing":"Post New Rental Listing"}),l.jsx("p",{className:"modal-subtitle",children:"Configure listing address, pricing, Zillow variables, and mortgage ROI parameters."}),l.jsxs("form",{onSubmit:Ud,style:{marginTop:"1.25rem"},className:"modal-scroll-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Street Address *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. 742 Evergreen Terrace, Springfield",value:x,onChange:u=>O(u.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Property Type"}),l.jsxs("select",{value:M,onChange:u=>P(u.target.value),className:"form-select",children:[l.jsx("option",{value:"Single Family",children:"Single Family"}),l.jsx("option",{value:"Multi Family",children:"Multi Family"}),l.jsx("option",{value:"Condo",children:"Condo"}),l.jsx("option",{value:"Apartment",children:"Apartment"}),l.jsx("option",{value:"Townhouse",children:"Townhouse"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Monthly Rent ($) *"}),l.jsx("input",{type:"number",required:!0,min:"0",placeholder:"e.g. 3100",value:k,onChange:u=>_(u.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Full Name (Optional)"}),l.jsx("input",{type:"text",placeholder:"Vacant",value:$,onChange:u=>U(u.target.value),className:"form-input"})]}),$&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tenant Email"}),l.jsx("input",{type:"email",placeholder:"e.g. tenant@domain.com",value:we,onChange:u=>et(u.target.value),className:"form-input"})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease Start"}),l.jsx("input",{type:"date",value:z,onChange:u=>I(u.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Lease End"}),l.jsx("input",{type:"date",value:D,onChange:u=>Q(u.target.value),className:"form-input"})]})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"📊 Acquisition & ROI Parameters"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Purchase Price ($)"}),l.jsx("input",{type:"number",value:De,onChange:u=>tt(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Down Payment (%)"}),l.jsx("input",{type:"number",value:$e,onChange:u=>Ke(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Interest Rate (%)"}),l.jsx("input",{type:"number",step:"0.01",value:Yl,onChange:u=>Pn(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Loan Term (Years)"}),l.jsx("input",{type:"number",value:Kl,onChange:u=>zn(parseInt(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Property Tax ($)"}),l.jsx("input",{type:"number",value:Sr,onChange:u=>En(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Insurance ($)"}),l.jsx("input",{type:"number",value:Cr,onChange:u=>Rn(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Annual Maintenance ($)"}),l.jsx("input",{type:"number",value:br,onChange:u=>Tn(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Appreciation Rate (%)"}),l.jsx("input",{type:"number",value:si,onChange:u=>_n(parseFloat(u.target.value)||0),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"🎓 GreatSchools™ Nearby Ratings"}),l.jsxs("div",{className:"grid-3",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Elem. (1-10)"}),l.jsx("input",{type:"number",step:"0.1",value:$a,onChange:u=>ci(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Middle (1-10)"}),l.jsx("input",{type:"number",step:"0.1",value:Aa,onChange:u=>ui(parseFloat(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"High (1-10)"}),l.jsx("input",{type:"number",step:"0.1",value:Ba,onChange:u=>di(parseFloat(u.target.value)||0),className:"form-input"})]})]}),l.jsx("div",{className:"prop-divider"}),l.jsx("h4",{className:"modal-section-title",children:"🌱 Environment & Location Details"}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Air Quality Index"}),l.jsx("input",{type:"number",value:Ha,onChange:u=>fi(parseInt(u.target.value)||0),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Wildfire Risk"}),l.jsxs("select",{value:Ua,onChange:u=>pi(u.target.value),className:"form-select",children:[l.jsx("option",{value:"Very Low",children:"Very Low"}),l.jsx("option",{value:"Low",children:"Low"}),l.jsx("option",{value:"Medium",children:"Medium"}),l.jsx("option",{value:"High",children:"High"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Soil Framework"}),l.jsx("input",{type:"text",value:Va,onChange:u=>mi(u.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nearby Malls"}),l.jsx("input",{type:"text",value:Wa,onChange:u=>hi(u.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nearby Forest Preserves"}),l.jsx("input",{type:"text",value:Qa,onChange:u=>gi(u.target.value),className:"form-input"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>{C(!1),Pr()},children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Publish Listing"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
        :root {
          --zillow-blue: #006aff;
          --zillow-bg: #f6f6fa;
          --zillow-border: #e4e4e7;
          --zillow-text: #2a2a3e;
          --zillow-text-secondary: #59596e;
        }

        .zillow-platform-container {
          background-color: var(--zillow-bg);
          color: var(--zillow-text);
          min-height: 100vh;
          font-family: 'Open Sans', 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
        }

        /* Zillow Brand Navigation */
        .zillow-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          border-bottom: 1px solid var(--zillow-border);
          padding: 0.8rem 2rem;
          height: 60px;
        }

        .zillow-brand-logo {
          color: var(--zillow-blue);
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .rent-portal-tag {
          font-size: 0.72rem;
          background: rgba(0, 106, 255, 0.08);
          color: var(--zillow-blue);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          margin-left: 0.5rem;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-links a {
          color: var(--zillow-text);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.15s;
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--zillow-blue);
        }

        .nav-links .divider {
          width: 1px;
          height: 20px;
          background: var(--zillow-border);
        }

        .btn-zillow-primary {
          background: var(--zillow-blue);
          color: #fff;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s;
        }

        .btn-zillow-primary:hover {
          background: #0056cc;
        }

        /* Filter Bar */
        .zillow-filter-bar {
          display: flex;
          align-items: center;
          background: #fff;
          border-bottom: 1px solid var(--zillow-border);
          padding: 0.75rem 2rem;
          gap: 1.5rem;
        }

        .search-input-wrapper {
          position: relative;
          width: 320px;
        }

        .zillow-search-input {
          width: 100%;
          border: 1px solid var(--zillow-border);
          padding: 0.55rem 1rem 0.55rem 2.2rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          outline: none;
          color: var(--zillow-text);
        }

        .search-icon {
          position: absolute;
          left: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--zillow-text-secondary);
        }

        .filter-dropdown-group {
          display: flex;
          gap: 1rem;
        }

        .filter-select-wrapper {
          display: flex;
          flex-direction: column;
          font-size: 0.72rem;
          color: var(--zillow-text-secondary);
          font-weight: 700;
        }

        .zillow-select {
          border: 1px solid var(--zillow-border);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-md);
          outline: none;
          font-size: 0.85rem;
          background: #fff;
          font-weight: 600;
          color: var(--zillow-text);
          margin-top: 2px;
        }

        .listing-count-tag {
          margin-left: auto;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--zillow-text-secondary);
        }

        /* Split Screen Container */
        .zillow-split-container {
          display: flex;
          flex: 1;
          height: calc(100vh - 110px);
          overflow: hidden;
        }

        .zillow-left-listings-panel {
          width: 55%;
          overflow-y: auto;
          padding: 1.5rem;
          border-right: 1px solid var(--zillow-border);
          background: #fff;
        }

        .listings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .listings-header h2 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--zillow-text);
        }

        .zillow-listings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .zillow-listing-card {
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #fff;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
        }

        .zillow-listing-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--zillow-blue);
        }

        .zillow-listing-card.selected {
          border-color: var(--zillow-blue);
          box-shadow: 0 0 0 2px rgba(0, 106, 255, 0.15);
        }

        .card-image-box {
          height: 140px;
          background: linear-gradient(135deg, #006aff 0%, #a5b4fc 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-image-placeholder {
          color: #fff;
          font-weight: 750;
          font-size: 0.95rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }

        .listing-type-badge {
          position: absolute;
          left: 0.75rem;
          top: 0.75rem;
          background: rgba(0,0,0,0.65);
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .occupancy-badge {
          position: absolute;
          right: 0.75rem;
          top: 0.75rem;
          background: #38a169;
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.65rem;
          font-weight: 700;
        }

        .compare-bubble-btn {
          position: absolute;
          right: 0.75rem;
          bottom: 0.75rem;
          background: #fff;
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-full);
          padding: 0.35rem;
          cursor: pointer;
          font-size: 0.75rem;
          transition: all 0.15s;
        }

        .compare-bubble-btn:hover {
          transform: scale(1.1);
        }

        .compare-bubble-btn.active {
          background: var(--zillow-blue);
          color: #fff;
          border-color: var(--zillow-blue);
        }

        .card-info-box {
          padding: 1rem;
        }

        .price-row .price {
          font-size: 1.45rem;
          font-weight: 850;
          color: var(--zillow-text);
        }

        .price-row .mo {
          font-size: 0.85rem;
          color: var(--zillow-text-secondary);
          font-weight: 600;
        }

        .details-row {
          font-size: 0.85rem;
          color: var(--zillow-text-secondary);
          margin-top: 0.25rem;
        }

        .address {
          font-size: 0.9rem;
          color: var(--zillow-text);
          margin-top: 0.35rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .zillow-mini-yields {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.6rem;
        }

        .yield-pill {
          font-size: 0.68rem;
          font-weight: 750;
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
        }

        .yield-pill.cap {
          background: rgba(0, 106, 255, 0.08);
          color: var(--zillow-blue);
        }

        .yield-pill.coc {
          background: rgba(221, 107, 32, 0.08);
          color: #dd6b20;
        }

        .environmental-strip {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.6rem;
        }

        .env-pill {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.15rem 0.35rem;
          border-radius: var(--radius-sm);
          background: #f7fafc;
          border: 1px solid #edf2f7;
          color: var(--zillow-text-secondary);
        }

        .card-actions-strip {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.85rem;
          border-top: 1px solid #f4f4f5;
          padding-top: 0.6rem;
        }

        .action-btn {
          flex: 1;
          background: transparent;
          border: 1px solid var(--zillow-border);
          padding: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: var(--radius-sm);
          cursor: pointer;
          color: var(--zillow-text-secondary);
          transition: all 0.15s;
        }

        .action-btn:hover {
          color: var(--zillow-text);
          background: #f7fafc;
        }

        .delete-btn:hover {
          border-color: #fc8181;
          color: #e53e3e;
          background: #fff5f5;
        }

        /* Right Panel: Detail Panel */
        .zillow-right-detail-panel {
          width: 45%;
          background: #fff;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .zillow-listing-details-sheet {
          display: flex;
          flex-direction: column;
        }

        .sheet-image-gallery {
          height: 220px;
          background: linear-gradient(135deg, #1a202c 0%, #4a5568 100%);
          position: relative;
        }

        .main-gallery-pic {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%);
        }

        .realpal-guarantee-shield {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255,255,255,0.95);
          color: var(--zillow-text);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .prop-addr-overlay {
          color: #fff;
          font-size: 1.45rem;
          font-weight: 850;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .sheet-body-content {
          padding: 1.5rem;
        }

        .core-details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price-rent-block h2 {
          font-size: 1.85rem;
          font-weight: 850;
          color: var(--zillow-text);
        }

        .price-rent-block p {
          color: var(--zillow-text-secondary);
          font-size: 0.88rem;
          margin-top: 0.2rem;
        }

        .yields-header-block {
          display: flex;
          gap: 1rem;
        }

        .yield-header-metric {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .yield-header-metric .lbl {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--zillow-text-secondary);
          text-transform: uppercase;
        }

        .yield-header-metric .val {
          font-size: 1.35rem;
          font-weight: 850;
          color: var(--zillow-blue);
        }

        .yield-header-metric .val.text-orange {
          color: #dd6b20;
        }

        .prop-divider {
          height: 1px;
          background: var(--zillow-border);
          margin: 1.25rem 0;
        }

        .calculator-two-col-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 1.5rem;
          align-items: start;
        }

        .calculator-inline-inputs {
          background: #f7fafc;
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .inline-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .inline-form-group label {
          font-size: 0.68rem;
          color: var(--zillow-text-secondary);
          font-weight: 750;
        }

        .inline-form-group input {
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-sm);
          padding: 0.3rem 0.5rem;
          font-size: 0.82rem;
          outline: none;
          color: var(--zillow-text);
        }

        .inline-form-group input:focus {
          border-color: var(--zillow-blue);
        }

        .auto-save-tag {
          font-size: 0.68rem;
          color: #718096;
          font-weight: 650;
          margin-top: 0.75rem;
          text-align: center;
        }

        .compact-yields-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .compact-yields-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--zillow-text-secondary);
        }

        .compact-yields-table tr.border-top td {
          border-top: 2px solid var(--zillow-text);
          color: var(--zillow-text);
          padding-top: 0.6rem;
        }

        .schools-rating-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .environmental-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .environmental-table td {
          padding: 0.5rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--zillow-text-secondary);
        }

        .environmental-table td:last-child {
          color: var(--zillow-text);
          text-align: right;
        }

        .drawer-action-strip {
          margin-top: 1.5rem;
          display: flex;
          justify-content: flex-end;
        }

        .no-detail-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }

        .search-logo-large {
          font-size: 3.5rem;
          color: #cbd5e0;
          margin-bottom: 1rem;
        }

        .no-detail-selected h3 {
          margin-bottom: 0.5rem;
        }

        .no-detail-selected p {
          color: var(--zillow-text-secondary);
        }

        /* Zillow Compare Styles */
        .zillow-compare-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .zillow-compare-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          margin-top: 1rem;
          background: #fff;
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-md);
        }

        .zillow-compare-table th, .zillow-compare-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--zillow-border);
        }

        .zillow-compare-table th {
          background: #f7fafc;
          font-weight: bold;
        }

        .zillow-compare-table tr.section-row td {
          background: #edf2f7;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
        }

        .btn-zillow-outline {
          background: transparent;
          border: 1px solid var(--zillow-blue);
          color: var(--zillow-blue);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background 0.15s;
        }

        .btn-zillow-outline:hover {
          background: rgba(0, 106, 255, 0.04);
        }

        .zillow-empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }

        .house-emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        /* Print Media Override */
        .sheet-header-print {
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
            background: #fff !important;
            color: #000 !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
          }
          .sheet-header-print {
            display: block !important;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #000;
            padding-bottom: 0.5rem;
          }
          .sheet-header-print h1 {
            font-size: 20pt;
            font-weight: bold;
            margin: 0;
          }
          .sheet-header-print .address {
            font-size: 14pt;
            margin: 4px 0;
          }
          .sheet-header-print .date {
            font-size: 9pt;
            color: #555;
          }
          .no-print {
            display: none !important;
          }
        }
      `}})]})}function Tm({properties:e,jobs:t,onAddJob:n,bids:r,onAcceptBid:i,groupDeals:s,onToggleGroupDeal:a}){const[o,c]=b.useState(!1),[f,h]=b.useState(null),[y,g]=b.useState(""),[j,S]=b.useState(""),[w,F]=b.useState("Plumbing"),[p,d]=b.useState(""),[m,v]=b.useState(""),C=async x=>{if(x.preventDefault(),!y||!j||!m)return;const O=e.find(k=>k.id.toString()===j.toString()),M=O?O.address:"Unknown Property",P={title:y,propertyId:j,propertyName:M,category:w,description:p,budget:parseFloat(m)};await n(P),c(!1),g(""),S(""),F("Plumbing"),d(""),v("")},R=async(x,O)=>{await i(x,O),h(null)},E=x=>{a(x)};return l.jsxs("div",{className:"crowdsource-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Crowdsourced Services"}),l.jsx("p",{className:"view-description",children:"Post repair tickets to secure bids or join collective pools in your ZIP code for volume discounts."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>{e.length===0?alert("Please register a property in the 'Rental Properties' tab first before listing maintenance jobs."):c(!0)},children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Post Repair Ticket"]})]}),l.jsxs("div",{className:"marketplace-layout",children:[l.jsxs("div",{className:"tickets-column",children:[l.jsx("h3",{className:"column-title",children:"Active Repair Tickets"}),l.jsx("p",{className:"column-p",children:"Submit issues to trigger auto-competitions among verified local providers."}),t.length===0?l.jsxs("div",{className:"empty-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔧"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No maintenance tickets"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Your active service queries and bid entries will be detailed here."})]}):l.jsx("div",{className:"tickets-list",children:t.map(x=>{var P,k;const O=r[x.id]||[],M=x.status==="bidding"?"badge-primary":x.status==="active"?"badge-success":"badge-info";return l.jsxs("div",{className:"ticket-card glass-card",children:[l.jsxs("div",{className:"ticket-header",children:[l.jsx("span",{className:`badge ${M}`,children:x.status==="bidding"?"Gathering Bids":x.status==="active"?"Service Scheduled":"Completed"}),l.jsxs("span",{className:"ticket-date",children:["Posted ",x.datePosted]})]}),l.jsx("h4",{className:"ticket-title",children:x.title}),l.jsxs("div",{className:"ticket-meta",children:[l.jsxs("span",{children:["📍 ",x.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["🏷️ ",x.category]})]}),l.jsx("p",{className:"ticket-desc",children:x.description}),l.jsxs("div",{className:"ticket-footer",children:[l.jsxs("div",{className:"ticket-budget",children:[l.jsx("span",{className:"lbl",children:"Target Budget:"}),l.jsxs("span",{className:"val",children:["$",x.budget]})]}),x.status==="bidding"?l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h(x),children:["View Bids (",O.length,")",O.length>0&&l.jsx("span",{className:"bid-alert-dot"})]}):l.jsxs("div",{className:"hired-badge",children:[l.jsxs("span",{children:["Hired: ",(P=x.acceptedBid)==null?void 0:P.providerName," ($",(k=x.acceptedBid)==null?void 0:k.price,")"]}),x.savings>0&&l.jsxs("span",{className:"savings-tag",children:["Saved $",x.savings,"!"]})]})]})]},x.id)})})]}),l.jsxs("div",{className:"pools-column",children:[l.jsx("h3",{className:"column-title",children:"Neighborhood Bulk Pools"}),l.jsx("p",{className:"column-p",children:"Pool properties with nearby landlords in the same ZIP code to negotiate bulk pricing from vendors."}),l.jsx("div",{className:"pools-list",children:s.map(x=>l.jsxs("div",{className:`pool-card glass-card ${x.unlocked===1?"unlocked-card":""}`,children:[l.jsxs("div",{className:"pool-header",children:[l.jsxs("span",{className:"pool-zip",children:["ZIP: ",x.zipCode]}),l.jsx("span",{className:`badge ${x.unlocked===1?"badge-success":"badge-warning"}`,children:x.unlocked===1?"💰 Discount Unlocked!":`${x.targetCount-x.currentCount} Landlords Needed`})]}),l.jsx("h4",{className:"pool-service-title",children:x.serviceType}),l.jsx("p",{className:"pool-desc",children:x.description}),l.jsxs("div",{className:"pool-stats",children:[l.jsxs("div",{className:"progress-labels",children:[l.jsxs("span",{children:["Joined: ",x.currentCount," / ",x.targetCount," Landlords"]}),l.jsxs("span",{children:[Math.round(x.currentCount/x.targetCount*100),"%"]})]}),l.jsx("div",{className:"progress-bar-track",children:l.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(100,x.currentCount/x.targetCount*100)}%`,backgroundColor:x.unlocked===1?"var(--color-success)":"var(--color-primary)"}})})]}),l.jsxs("div",{className:"pool-pricing-grid",children:[l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Bulk Rate"}),l.jsxs("span",{className:"val",children:["$",x.bulkPrice]})]}),l.jsxs("div",{className:"pricing-col",children:[l.jsx("span",{className:"lbl",children:"Est. Savings"}),l.jsxs("span",{className:"val text-success",children:["-",x.discountPercent,"%"]})]})]}),l.jsx("button",{className:`btn ${x.joined===1?"btn-danger":"btn-primary"} btn-sm w-100`,onClick:()=>E(x.id),children:x.joined===1?"Leave Group Pool":"Join Collective Pool"})]},x.id))})]})]}),o&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>c(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Post Maintenance Ticket"}),l.jsx("p",{className:"modal-subtitle",children:"Post repair requirements. Our local network will bid within minutes."}),l.jsxs("form",{onSubmit:C,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Issue Title *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Broken water heater, Gutter maintenance",value:y,onChange:x=>g(x.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Select Property *"}),l.jsxs("select",{required:!0,value:j,onChange:x=>S(x.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose property --"}),e.map(x=>l.jsx("option",{value:x.id,children:x.address},x.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Service Category"}),l.jsxs("select",{value:w,onChange:x=>F(x.target.value),className:"form-select",children:[l.jsx("option",{value:"Plumbing",children:"Plumbing"}),l.jsx("option",{value:"Electrical",children:"Electrical"}),l.jsx("option",{value:"HVAC",children:"HVAC"}),l.jsx("option",{value:"Roofing",children:"Roofing"}),l.jsx("option",{value:"Landscaping",children:"Landscaping"}),l.jsx("option",{value:"Other",children:"General Handyman"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Max Budget ($) *"}),l.jsx("input",{type:"number",required:!0,min:"1",placeholder:"e.g. 350",value:m,onChange:x=>v(x.target.value),className:"form-input"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Problem Details / Scope of Work"}),l.jsx("textarea",{placeholder:"Provide plumbing sizes, brand models, pictures or access timelines to help providers bid accurately.",value:p,onChange:x=>d(x.target.value),className:"form-textarea"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>c(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Post to Marketplace"})]})]})]})}),f&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",style:{maxWidth:"600px"},children:[l.jsx("button",{className:"modal-close",onClick:()=>h(null),children:"×"}),l.jsxs("h3",{className:"modal-title",children:["Bidding Room: ",f.title]}),l.jsx("p",{className:"modal-subtitle",children:"Review quotes from service providers. Simulating real-time local updates."}),l.jsx("div",{className:"bids-list",style:{marginTop:"1.5rem",display:"flex",flexDirection:"column",gap:"1rem"},children:(r[f.id]||[]).length===0?l.jsxs("div",{className:"simulating-spinner",children:[l.jsx("div",{className:"spinner"}),l.jsxs("p",{children:["Searching for providers and requesting quotes... ",l.jsx("br",{}),l.jsx("span",{children:"Bids usually arrive in 5-10 seconds."})]})]}):(r[f.id]||[]).map(x=>{const O=Math.round((f.budget-x.price)/f.budget*100);return l.jsxs("div",{className:"bid-item glass-card",style:{padding:"1rem",background:"rgba(0,0,0,0.2)"},children:[l.jsxs("div",{className:"bid-item-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsxs("h4",{style:{color:"#fff",fontSize:"1rem"},children:[x.providerName,x.verified===1&&l.jsx("span",{className:"verified-check",title:"RealPal Verified License",children:" ✓"})]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginTop:"0.2rem"},children:[l.jsxs("span",{style:{color:"var(--color-warning)",fontSize:"0.85rem"},children:["★ ",x.rating]}),l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:["• ETA: ",x.eta]})]})]}),l.jsxs("div",{style:{textAlign:"right"},children:[l.jsxs("div",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#fff"},children:["$",x.price]}),O>0?l.jsxs("span",{style:{color:"var(--color-success)",fontSize:"0.75rem",fontWeight:"700"},children:["Saves ",O,"%"]}):l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:"Budget Quote"})]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:l.jsx("button",{className:"btn btn-success btn-sm",onClick:()=>R(f.id,x),children:"Hire & Authorize Lockbox"})})]},x.id)})}),(r[f.id]||[]).length<3&&(r[f.id]||[]).length>0&&l.jsx("p",{className:"bidding-tip",children:"💡 Keep this window open! More competitive service bids are currently formulating..."})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function _m({properties:e,reminders:t,onAddReminder:n,onToggleReminder:r,onDeleteReminder:i}){const[s,a]=b.useState(!1),[o,c]=b.useState("All"),[f,h]=b.useState(""),[y,g]=b.useState(""),[j,S]=b.useState("Medium"),[w,F]=b.useState("Maintenance"),[p,d]=b.useState("General"),m=async P=>{if(P.preventDefault(),!f||!y)return;const k=e.find(U=>U.id.toString()===p.toString()),_=k?k.address:"General Admin";await n({title:f,date:y,priority:j,category:w,propertyId:p,propertyName:_}),a(!1),h(""),g(""),S("Medium"),F("Maintenance"),d("General")},v=P=>{r(P)},C=P=>{i(P)},E=[...t.filter(P=>o==="All"?!0:P.category===o)].sort((P,k)=>P.completed!==k.completed?P.completed?1:-1:new Date(P.date)-new Date(k.date)),x=t.filter(P=>P.completed===0||P.completed===!1).length,O=t.filter(P=>(P.completed===0||P.completed===!1)&&P.priority==="High").length,M=P=>{switch(P){case"Rent":return"badge-success";case"Maintenance":return"badge-primary";case"Lease":return"badge-info";case"Tax":return"badge-warning";case"Compliance":return"badge-danger";default:return"badge-secondary"}};return l.jsxs("div",{className:"reminders-view animate-fade-in",children:[l.jsxs("div",{className:"view-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Reminders & Tasks"}),l.jsx("p",{className:"view-description",children:"Set and follow up on critical items, including lease endpoints, tax milestones, and certifications."})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"New Reminder"]})]}),x>0&&l.jsx("div",{className:"reminders-alert-banner glass-card",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("span",{className:"pulse-indicator"}),l.jsxs("div",{children:[l.jsxs("h4",{style:{fontSize:"0.95rem"},children:["You have ",x," outstanding landlord tasks."]}),l.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.8rem",marginTop:"0.1rem"},children:O>0?`Urgent attention required: ${O} high-priority tasks remain incomplete.`:"All high-priority items are currently up-to-date."})]})]})}),l.jsx("div",{className:"filters-row",children:l.jsx("div",{className:"category-tabs",children:["All","Rent","Maintenance","Lease","Tax","Compliance"].map(P=>l.jsx("button",{className:`filter-tab ${o===P?"active":""}`,onClick:()=>c(P),children:P},P))})}),l.jsx("div",{className:"reminders-list-container",children:E.length===0?l.jsxs("div",{className:"empty-reminders-state glass-card",children:[l.jsx("span",{style:{fontSize:"2.5rem"},children:"🔔"}),l.jsx("h4",{style:{marginTop:"0.5rem"},children:"No reminders found"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"Change your filter settings or record a new reminder for future inspection schedules."})]}):l.jsx("div",{className:"reminders-stack",children:E.map(P=>{const k=(P.completed===0||P.completed===!1)&&new Date(P.date)<new Date,_=P.completed===1||P.completed===!0;return l.jsxs("div",{className:`reminder-row glass-card ${_?"completed-row":""} ${k?"overdue-row":""}`,children:[l.jsxs("div",{className:"checkbox-col",children:[l.jsx("input",{type:"checkbox",checked:_,onChange:()=>v(P.id),className:"task-checkbox",id:`rem-${P.id}`}),l.jsx("label",{htmlFor:`rem-${P.id}`,className:"checkbox-visual",children:_&&"✓"})]}),l.jsxs("div",{className:"details-col",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"},children:[l.jsx("span",{className:`badge ${M(P.category)}`,children:P.category}),l.jsxs("span",{className:`priority-indicator prio-${P.priority.toLowerCase()}`,children:[P.priority," Priority"]}),k&&l.jsx("span",{className:"badge badge-danger",children:"OVERDUE"})]}),l.jsx("h4",{className:"reminder-title",children:P.title}),l.jsxs("div",{className:"reminder-meta",children:[l.jsxs("span",{children:["📍 ",P.propertyName]}),l.jsx("span",{children:"•"}),l.jsxs("span",{className:k?"text-danger font-bold":"",children:["📅 Due: ",new Date(P.date).toLocaleDateString()]})]})]}),l.jsx("div",{className:"actions-col",children:l.jsx("button",{className:"btn btn-secondary btn-sm delete-task-btn",onClick:()=>C(P.id),children:"🗑️"})})]},P.id)})})}),s&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-content",children:[l.jsx("button",{className:"modal-close",onClick:()=>a(!1),children:"×"}),l.jsx("h3",{className:"modal-title",children:"Create Task Reminder"}),l.jsx("p",{className:"modal-subtitle",children:"Schedule a new operational follow-up for your properties."}),l.jsxs("form",{onSubmit:m,style:{marginTop:"1.25rem"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Task Description *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Inspect fire alarm, File schedule E taxes",value:f,onChange:P=>h(P.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Associate with Property"}),l.jsxs("select",{value:p,onChange:P=>d(P.target.value),className:"form-select",children:[l.jsx("option",{value:"General",children:"General / Portfolio Administration"}),e.map(P=>l.jsx("option",{value:P.id,children:P.address},P.id))]})]}),l.jsxs("div",{className:"grid-2",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Category"}),l.jsxs("select",{value:w,onChange:P=>F(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Rent",children:"Rent Collection"}),l.jsx("option",{value:"Maintenance",children:"Maintenance / Repairs"}),l.jsx("option",{value:"Lease",children:"Lease Renewal"}),l.jsx("option",{value:"Tax",children:"Accounting & Taxes"}),l.jsx("option",{value:"Compliance",children:"Legal & Compliance"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Priority Level"}),l.jsxs("select",{value:j,onChange:P=>S(P.target.value),className:"form-select",children:[l.jsx("option",{value:"Low",children:"Low"}),l.jsx("option",{value:"Medium",children:"Medium"}),l.jsx("option",{value:"High",children:"High"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Due Date *"}),l.jsx("input",{type:"date",required:!0,value:y,onChange:P=>g(P.target.value),className:"form-input"})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>a(!1),children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1.5},children:"Set Reminder"})]})]})]})}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Lm({feedback:e,onAddFeedback:t}){const[n,r]=b.useState(""),[i,s]=b.useState(5),[a,o]=b.useState(""),[c,f]=b.useState(!1),h=["John Herman","Rohit Parthi","Harsha Pilli","Krishna Kanchancharla","Lakshminarayana P","Chandu V","Ranjit","Gopi","Niel","Sujan","Venkata Vedam","Bhaskar","Ashok Lamkshman","Raju","Hanumanth","Praveen"],y=async w=>{if(w.preventDefault(),!n||!a)return;const F={name:n,rating:parseInt(i),comment:a};await t(F),o(""),r(""),s(5),f(!0),setTimeout(()=>f(!1),3e3)},g=e.length,j=g>0?(e.reduce((w,F)=>w+F.rating,0)/g).toFixed(1):0,S=w=>"★".repeat(w)+"☆".repeat(5-w);return l.jsxs("div",{className:"feedback-view animate-fade-in",children:[l.jsx("div",{className:"view-header",children:l.jsxs("div",{children:[l.jsx("h1",{className:"view-title text-gradient",children:"Concept Tester Panel"}),l.jsx("p",{className:"view-description",children:"Gathering structured feedback from target users to evaluate the RealPal MVP prototype."})]})}),l.jsxs("div",{className:"feedback-layout grid-2",children:[l.jsxs("div",{className:"glass-card submit-card",children:[l.jsx("h3",{className:"section-title",children:"Submit Tester Evaluation"}),l.jsx("p",{className:"section-p",children:"If you are on the tester team, select your name, rate your experience, and leave your honest feature reviews."}),c&&l.jsx("div",{className:"success-banner animate-slide-up",style:{backgroundColor:"var(--color-success-light)",border:"1px solid rgba(56,161,105,0.2)",padding:"0.85rem",borderRadius:"var(--radius-sm)",marginBottom:"1.25rem",color:"var(--color-success)",fontSize:"0.88rem",fontWeight:600},children:"✓ Review submitted! Thank you for helping shape the future of RealPal."}),l.jsxs("form",{onSubmit:y,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tester Identity *"}),l.jsxs("select",{required:!0,value:n,onChange:w=>r(w.target.value),className:"form-select",children:[l.jsx("option",{value:"",children:"-- Choose your name --"}),h.map(w=>l.jsx("option",{value:w,children:w},w))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Concept Rating"}),l.jsx("div",{className:"rating-select-row",children:[1,2,3,4,5].map(w=>l.jsx("button",{type:"button",className:`star-select-btn ${i>=w?"filled":""}`,onClick:()=>s(w),children:"★"},w))})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Feedback Notes / Suggestions *"}),l.jsx("textarea",{required:!0,placeholder:"Share your thoughts on the business models, bidding simulators, or what features you would like added to manage your properties...",value:a,onChange:w=>o(w.target.value),className:"form-textarea"})]}),l.jsx("button",{type:"submit",className:"btn btn-primary w-100",style:{marginTop:"0.5rem"},children:"Submit Test Feedback"})]})]}),l.jsxs("div",{className:"reviews-column flex-column-center",children:[l.jsx("div",{className:"feedback-stats-header glass-card",children:l.jsxs("div",{className:"stat-row",children:[l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:j}),l.jsx("span",{className:"lbl",children:"Average Rating"})]}),l.jsx("div",{className:"stat-divider"}),l.jsxs("div",{className:"stat-chunk",children:[l.jsx("span",{className:"val",children:g}),l.jsx("span",{className:"lbl",children:"Total Reviews"})]})]})}),l.jsxs("div",{className:"reviews-scroll-feed",children:[l.jsx("h3",{className:"section-title",style:{fontSize:"1.15rem",marginBottom:"1rem",color:"#fff"},children:"Testimonial & Feedback Stream"}),e.length===0?l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:"No feedback submitted yet. Be the first to review!"}):l.jsx("div",{className:"reviews-feed-stack",children:e.map(w=>l.jsxs("div",{className:"review-feed-card glass-card",children:[l.jsxs("div",{className:"review-feed-header",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"reviewer-name",children:w.name}),l.jsxs("span",{className:"reviewer-meta",children:[w.simulated===1?"Prepopulated Test":"User Tester"," • ",w.date]})]}),l.jsx("span",{className:"stars-string",children:S(w.rating)})]}),l.jsxs("p",{className:"reviewer-comment",children:['"',w.comment,'"']})]},w.id))})]})]})]}),l.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const ee="http://192.168.1.103:5000";function Mm(){const[e,t]=b.useState("landing"),[n,r]=b.useState("premium"),[i,s]=b.useState([]),[a,o]=b.useState([]),[c,f]=b.useState([]),[h,y]=b.useState({}),[g,j]=b.useState([]),[S,w]=b.useState([]);b.useEffect(()=>{fetch(`${ee}/api/subscription`).then(k=>k.json()).then(k=>r(k.subscription)).catch(k=>console.error("Error fetching subscription:",k)),fetch(`${ee}/api/properties`).then(k=>k.json()).then(k=>s(k)).catch(k=>console.error("Error fetching properties:",k)),fetch(`${ee}/api/reminders`).then(k=>k.json()).then(k=>o(k)).catch(k=>console.error("Error fetching reminders:",k)),fetch(`${ee}/api/jobs`).then(k=>k.json()).then(async k=>{f(k);const _={};for(const $ of k)if($.status==="bidding")try{const we=await(await fetch(`${ee}/api/jobs/${$.id}/bids`)).json();_[$.id]=we}catch(U){console.error("Error fetching bids for job:",$.id,U)}y(_)}).catch(k=>console.error("Error fetching jobs:",k)),fetch(`${ee}/api/group-deals`).then(k=>k.json()).then(k=>j(k)).catch(k=>console.error("Error fetching group deals:",k)),fetch(`${ee}/api/feedback`).then(k=>k.json()).then(k=>w(k)).catch(k=>console.error("Error fetching feedback:",k))},[]),b.useEffect(()=>{const k=c.filter($=>$.status==="bidding");if(k.length===0)return;const _=setInterval(()=>{k.forEach($=>{fetch(`${ee}/api/jobs/${$.id}/bids`).then(U=>U.json()).then(U=>{y(we=>({...we,[$.id]:U}))}).catch(U=>console.error("Error polling bids:",U))})},2e3);return()=>clearInterval(_)},[c]);const F=async k=>{try{(await(await fetch(`${ee}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscription:k})})).json()).success&&r(k)}catch(_){console.error("Error saving subscription:",_)}},p=async k=>{try{const $=await(await fetch(`${ee}/api/properties`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();s([$,...i])}catch(_){console.error("Error creating property:",_)}},d=async(k,_)=>{try{const U=await(await fetch(`${ee}/api/properties/${k}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)})).json();s(i.map(z=>z.id===k?U:z));const et=await(await fetch(`${ee}/api/reminders`)).json();o(et)}catch($){console.error("Error saving property changes:",$)}},m=async k=>{try{await fetch(`${ee}/api/properties/${k}`,{method:"DELETE"}),s(i.filter(U=>U.id!==k));const $=await(await fetch(`${ee}/api/reminders`)).json();o($)}catch(_){console.error("Error deleting property:",_)}},v=async k=>{try{const $=await(await fetch(`${ee}/api/reminders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();o([$,...a])}catch(_){console.error("Error creating task:",_)}},C=async k=>{try{const $=await(await fetch(`${ee}/api/reminders/${k}`,{method:"PUT"})).json();o(a.map(U=>U.id===k?$:U))}catch(_){console.error("Error toggling task completion:",_)}},R=async k=>{try{await fetch(`${ee}/api/reminders/${k}`,{method:"DELETE"}),o(a.filter(_=>_.id!==k))}catch(_){console.error("Error removing task:",_)}},E=async k=>{try{const $=await(await fetch(`${ee}/api/jobs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();f([$,...c]),y(U=>({...U,[$.id]:[]}))}catch(_){console.error("Error posting maintenance ticket:",_)}},x=async(k,_)=>{try{const U=await(await fetch(`${ee}/api/jobs/${k}/accept-bid`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bid:_})})).json();f(c.map(we=>we.id===k?U:we))}catch($){console.error("Error hiring contractor:",$)}},O=async k=>{try{const $=await(await fetch(`${ee}/api/group-deals/${k}/toggle`,{method:"POST"})).json();j(g.map(U=>U.id===k?$:U))}catch(_){console.error("Error toggling collective pool:",_)}},M=async k=>{try{const $=await(await fetch(`${ee}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json();w([$,...S])}catch(_){console.error("Error posting feedback reviews:",_)}},P=()=>{switch(e){case"landing":return l.jsx(mc,{subscription:n,setSubscription:F,setActiveTab:t});case"dashboard":return l.jsx(Em,{properties:i,reminders:a,jobs:c,groupDeals:g,setActiveTab:t});case"properties":return l.jsx(Rm,{properties:i,onAddProperty:p,onUpdateProperty:d,onDeleteProperty:m});case"crowdsource":return l.jsx(Tm,{properties:i,jobs:c,onAddJob:E,bids:h,onAcceptBid:x,groupDeals:g,onToggleGroupDeal:O});case"reminders":return l.jsx(_m,{properties:i,reminders:a,onAddReminder:v,onToggleReminder:C,onDeleteReminder:R});case"feedback":return l.jsx(Lm,{feedback:S,onAddFeedback:M});default:return l.jsx(mc,{subscription:n,setSubscription:F,setActiveTab:t})}};return l.jsxs("div",{className:"app-container",children:[l.jsx(zm,{activeTab:e,setActiveTab:t,subscription:n}),l.jsx("main",{className:"main-content",children:P()})]})}Zi.createRoot(document.getElementById("root")).render(l.jsx(gf.StrictMode,{children:l.jsx(Mm,{})}));
