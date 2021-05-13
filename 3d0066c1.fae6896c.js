/*! For license information please see 3d0066c1.fae6896c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{102:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,b=f["".concat(o,".").concat(d)]||f[d]||p[d]||i;return n?a.a.createElement(b,l(l({ref:t},c),{},{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},104:function(e,t,n){"use strict";e.exports=n(105)},105:function(e,t,n){"use strict";var r=n(106),a="function"==typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,r(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)x.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:i,type:e,key:o,ref:l,props:a,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var z=/\/+/g,I=[];function M(e,t,n,r){if(I.length){var a=I.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function N(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return n(r,e,""===t?"."+A(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=t+A(a=e[u],u);l+=N(a,c,n,r)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=m&&e[m]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)l+=N(a=a.value,c=t+A(a,u++),n,r);else if("object"===a)throw n=""+e,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function T(e,t,n){return null==e?0:N(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?R(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(z,"$&/")+"/")+n)),r.push(e))}function R(e,t,n,r,a){var i="";null!=n&&(i=(""+n).replace(z,"$&/")+"/"),T(e,$,t=M(t,i,r,a)),_(t)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(v(321));return e}var F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return R(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,D,t=M(null,null,t,n)),_(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return R(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(v(143));return e}},t.Component=O,t.Fragment=l,t.Profiler=c,t.PureComponent=w,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var a=r({},e.props),o=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)x.call(t,s)&&!P.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:i,type:e.type,key:o,ref:l,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"},106:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,u=o(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))a.call(n,s)&&(u[s]=n[s]);if(r){l=r(n);for(var f=0;f<l.length;f++)i.call(n,l[f])&&(u[l[f]]=n[l[f]])}}return u}},107:function(e,t,n){"use strict";var r=n(0),a=n(108);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},109:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},110:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(107),o=n(102),l=n(56),u=n.n(l),c=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,f=e.values,p=e.groupId,d=e.className,b=Object(i.a)(),y=b.tabGroupChoices,m=b.setTabGroupChoices,v=Object(r.useState)(l),h=v[0],g=v[1],O=r.Children.toArray(e.children);if(null!=p){var j=y[p];null!=j&&j!==h&&f.some((function(e){return e.value===j}))&&g(j)}var w=function(e){g(e),null!=p&&m(p,e)},S=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(S,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(104),n(103)),o=n(109),l=n(110),u={id:"serializabilityMiddleware",title:"Serializability Middleware",sidebar_label:"Serializability Middleware",hide_title:!0},c={unversionedId:"api/serializabilityMiddleware",id:"api/serializabilityMiddleware",isDocsHomePage:!1,title:"Serializability Middleware",description:"Serializability Middleware",source:"@site/../docs/api/serializabilityMiddleware.mdx",slug:"/api/serializabilityMiddleware",permalink:"/api/serializabilityMiddleware",version:"current",sidebar_label:"Serializability Middleware",sidebar:"docs",previous:{title:"Immutability Middleware",permalink:"/api/immutabilityMiddleware"},next:{title:"createReducer",permalink:"/api/createReducer"}},s=[{value:"Options",id:"options",children:[]},{value:"Exports",id:"exports",children:[{value:"<code>createSerializableStateInvariantMiddleware</code>",id:"createserializablestateinvariantmiddleware",children:[]},{value:"<code>isPlain</code>",id:"isplain",children:[]}]}],f={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"serializability-middleware"},"Serializability Middleware"),Object(i.b)("p",null,"A custom middleware that detects if any non-serializable values have been included in state or dispatched actions, modeled after ",Object(i.b)("inlineCode",{parentName:"p"},"redux-immutable-state-invariant"),". Any detected non-serializable values will be logged to the console."),Object(i.b)("p",null,"This middleware is added to the store by default by ",Object(i.b)("a",{parentName:"p",href:"/api/configureStore"},Object(i.b)("inlineCode",{parentName:"a"},"configureStore"))," and ",Object(i.b)("a",{parentName:"p",href:"/api/getDefaultMiddleware"},Object(i.b)("inlineCode",{parentName:"a"},"getDefaultMiddleware")),"."),Object(i.b)("p",null,"You can customize the behavior of this middleware by passing any of the supported options as the ",Object(i.b)("inlineCode",{parentName:"p"},"serializableCheck")," value for ",Object(i.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware"),"."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"interface SerializableStateInvariantMiddlewareOptions {\n  /**\n   * The function to check if a value is considered serializable. This\n   * function is applied recursively to every value contained in the\n   * state. Defaults to `isPlain()`.\n   */\n  isSerializable?: (value: any) => boolean\n  /**\n   * The function that will be used to retrieve entries from each\n   * value.  If unspecified, `Object.entries` will be used. Defaults\n   * to `undefined`.\n   */\n  getEntries?: (value: any) => [string, any][]\n\n  /**\n   * An array of action types to ignore when checking for serializability.\n   * Defaults to []\n   */\n  ignoredActions?: string[]\n\n  /**\n   * An array of dot-separated path strings to ignore when checking\n   * for serializability, Defaults to ['meta.arg']\n   */\n  ignoredActionPaths?: string[]\n\n  /**\n   * An array of dot-separated path strings to ignore when checking\n   * for serializability, Defaults to []\n   */\n  ignoredPaths?: string[]\n  /**\n   * Execution time warning threshold. If the middleware takes longer\n   * than `warnAfter` ms, a warning will be displayed in the console.\n   * Defaults to 32ms.\n   */\n  warnAfter?: number\n\n  /**\n   * Opt out of checking state, but continue checking actions\n   */\n  ignoreState?: boolean\n}\n")),Object(i.b)("h2",{id:"exports"},"Exports"),Object(i.b)("h3",{id:"createserializablestateinvariantmiddleware"},Object(i.b)("inlineCode",{parentName:"h3"},"createSerializableStateInvariantMiddleware")),Object(i.b)("p",null,"Creates an instance of the serializability check middleware, with the given options."),Object(i.b)("p",null,"You will most likely not need to call this yourself, as ",Object(i.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," already does so."),Object(i.b)("p",null,"Example:"),Object(i.b)(l.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { Iterable } from 'immutable'\nimport {\n  configureStore,\n  createSerializableStateInvariantMiddleware,\n  isPlain,\n} from '@reduxjs/toolkit'\nimport reducer from './reducer'\n\n// Augment middleware to consider Immutable.JS iterables serializable\nconst isSerializable = (value: any) =>\n  Iterable.isIterable(value) || isPlain(value)\n\nconst getEntries = (value: any) =>\n  Iterable.isIterable(value) ? value.entries() : Object.entries(value)\n\nconst serializableMiddleware = createSerializableStateInvariantMiddleware({\n  isSerializable,\n  getEntries,\n})\n\nconst store = configureStore({\n  reducer,\n  middleware: [serializableMiddleware],\n})\n"))),Object(i.b)(o.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Iterable } from 'immutable'\nimport {\n  configureStore,\n  createSerializableStateInvariantMiddleware,\n  isPlain,\n} from '@reduxjs/toolkit'\nimport reducer from './reducer'\n\n// Augment middleware to consider Immutable.JS iterables serializable\nconst isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)\n\nconst getEntries = (value) =>\n  Iterable.isIterable(value) ? value.entries() : Object.entries(value)\n\nconst serializableMiddleware = createSerializableStateInvariantMiddleware({\n  isSerializable,\n  getEntries,\n})\n\nconst store = configureStore({\n  reducer,\n  middleware: [serializableMiddleware],\n})\n")))),Object(i.b)("h3",{id:"isplain"},Object(i.b)("inlineCode",{parentName:"h3"},"isPlain")),Object(i.b)("p",null,'Checks whether the given value is considered a "plain value" or not.'),Object(i.b)("p",null,"Currently implemented as:"),Object(i.b)(l.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import isPlainObject from './isPlainObject'\n\nexport function isPlain(val: any) {\n  return (\n    typeof val === 'undefined' ||\n    val === null ||\n    typeof val === 'string' ||\n    typeof val === 'boolean' ||\n    typeof val === 'number' ||\n    Array.isArray(val) ||\n    isPlainObject(val)\n  )\n}\n"))),Object(i.b)(o.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import isPlainObject from './isPlainObject'\n\nexport function isPlain(val) {\n  return (\n    typeof val === 'undefined' ||\n    val === null ||\n    typeof val === 'string' ||\n    typeof val === 'boolean' ||\n    typeof val === 'number' ||\n    Array.isArray(val) ||\n    isPlainObject(val)\n  )\n}\n")))),Object(i.b)("p",null,"This will accept all standard JS objects, arrays, and primitives, but return false for ",Object(i.b)("inlineCode",{parentName:"p"},"Date"),"s, ",Object(i.b)("inlineCode",{parentName:"p"},"Map"),"s, and other similar class instances."))}p.isMDXComponent=!0}}]);