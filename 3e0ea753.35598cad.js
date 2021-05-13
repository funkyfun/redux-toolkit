/*! For license information please see 3e0ea753.35598cad.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{102:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},103:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},104:function(e,t,r){"use strict";e.exports=r(105)},105:function(e,t,r){"use strict";var n=r(106),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,f=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||j}function v(){}function x(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=x.prototype=new v;w.constructor=x,n(w,g.prototype),w.isPureReactComponent=!0;var N={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:N.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,_=[];function P(e,t,r,n){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function I(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return r(n,e,""===t?"."+A(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+A(o=e[l],l);c+=I(o,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=h&&e[h]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=I(o=o.value,u=t+A(o,l++),r,n);else if("object"===o)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function z(e,t,r){return null==e?0:I(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(T,"$&/")+"/"),z(e,D,t=P(t,a,n,o)),R(t)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(y(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;z(e,$,t=P(null,null,t,r)),R(t)},count:function(e){return z(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(y(143));return e}},t.Component=g,t.Fragment=c,t.Profiler=u,t.PureComponent=x,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var o=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=N.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)C.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"},106:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,l=i(e),u=1;u<arguments.length;u++){for(var s in r=Object(arguments[u]))o.call(r,s)&&(l[s]=r[s]);if(n){c=n(r);for(var p=0;p<c.length;p++)a.call(r,c[p])&&(l[c[p]]=r[c[p]])}}return l}},107:function(e,t,r){"use strict";var n=r(0),o=r(108);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},109:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},110:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(107),i=r(102),c=r(56),l=r.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,f=Object(a.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,y=Object(n.useState)(c),j=y[0],O=y[1],g=n.Children.toArray(e.children);if(null!=d){var v=m[d];null!=v&&v!==j&&p.some((function(e){return e.value===v}))&&O(v)}var x=function(e){O(e),null!=d&&h(d,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},b)},p.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case s:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},r)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(104),r(103)),i=r(109),c=r(110),l={id:"other-exports",title:"Other Exports",sidebar_label:"Other Exports",hide_title:!0},u={unversionedId:"api/other-exports",id:"api/other-exports",isDocsHomePage:!1,title:"Other Exports",description:"Other Exports",source:"@site/../docs/api/otherExports.mdx",slug:"/api/other-exports",permalink:"/api/other-exports",version:"current",sidebar_label:"Other Exports",sidebar:"docs",previous:{title:"Matching Utilities",permalink:"/api/matching-utilities"}},s=[{value:"<code>nanoid</code>",id:"nanoid",children:[]},{value:"<code>miniSerializeError</code>",id:"miniserializeerror",children:[]},{value:"Exports from Other Libraries",id:"exports-from-other-libraries",children:[{value:"<code>createNextState</code>",id:"createnextstate",children:[]},{value:"<code>current</code>",id:"current",children:[]},{value:"<code>original</code>",id:"original",children:[]},{value:"<code>isDraft</code>",id:"isdraft",children:[]},{value:"<code>combineReducers</code>",id:"combinereducers",children:[]},{value:"<code>compose</code>",id:"compose",children:[]},{value:"<code>bindActionCreators</code>",id:"bindactioncreators",children:[]},{value:"<code>createStore</code>",id:"createstore",children:[]},{value:"<code>applyMiddleware</code>",id:"applymiddleware",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"other-exports"},"Other Exports"),Object(a.b)("p",null,"Redux Toolkit exports some of its internal utilities, and re-exports additional functions from other dependencies as well."),Object(a.b)("h3",{id:"nanoid"},Object(a.b)("inlineCode",{parentName:"h3"},"nanoid")),Object(a.b)("p",null,"An inlined copy of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ai/nanoid"},Object(a.b)("inlineCode",{parentName:"a"},"nanoid/nonsecure")),". Generates a non-cryptographically-secure random ID string. ",Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," uses this by default for request IDs. May also be useful for other cases as well."),Object(a.b)(c.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { nanoid } from '@reduxjs/toolkit'\n\nconsole.log(nanoid())\n// 'dgPXxUz_6fWIQBD8XmiSy'\n"))),Object(a.b)(i.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { nanoid } from '@reduxjs/toolkit'\n\nconsole.log(nanoid())\n// 'dgPXxUz_6fWIQBD8XmiSy'\n")))),Object(a.b)("h3",{id:"miniserializeerror"},Object(a.b)("inlineCode",{parentName:"h3"},"miniSerializeError")),Object(a.b)("p",null,"A re-worked, inlined copy of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/sindresorhus/serialize-error"},Object(a.b)("inlineCode",{parentName:"a"},"serialize-error")),". Serializes an error into a plain object. ",Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," uses this by default for rejected cases. May also be useful other other cases as well.  "),Object(a.b)("p",null,"Returns a plain object with optional ",Object(a.b)("inlineCode",{parentName:"p"},"name"),", ",Object(a.b)("inlineCode",{parentName:"p"},"message"),", ",Object(a.b)("inlineCode",{parentName:"p"},"stack")," and ",Object(a.b)("inlineCode",{parentName:"p"},"code")," properties."),Object(a.b)(c.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { miniSerializeError } from \'@reduxjs/toolkit\'\n\nconst serializedError = miniSerializeError(\n  new Error(\'Something has gone wrong\')\n)\nconsole.log(serializedError.name)\n// "Error"\nconsole.log(serializedError.message)\n// "Something has gone wrong"\nconsole.log(serializedError.stack)\n// "Error: Something has gone wrong\u21b5    at <anonymous>:24:34"\n'))),Object(a.b)(i.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import { miniSerializeError } from \'@reduxjs/toolkit\'\n\nconst serializedError = miniSerializeError(\n  new Error(\'Something has gone wrong\')\n)\nconsole.log(serializedError.name)\n// "Error"\nconsole.log(serializedError.message)\n// "Something has gone wrong"\nconsole.log(serializedError.stack)\n// "Error: Something has gone wrong\u21b5    at <anonymous>:24:34"\n')))),Object(a.b)("h2",{id:"exports-from-other-libraries"},"Exports from Other Libraries"),Object(a.b)("h3",{id:"createnextstate"},Object(a.b)("inlineCode",{parentName:"h3"},"createNextState")),Object(a.b)("p",null,"The default immutable update function from the ",Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},Object(a.b)("inlineCode",{parentName:"a"},"immer")," library"),", re-exported here as ",Object(a.b)("inlineCode",{parentName:"p"},"createNextState")," (also commonly referred to as ",Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/produce"},Object(a.b)("inlineCode",{parentName:"a"},"produce")),")"),Object(a.b)("h3",{id:"current"},Object(a.b)("inlineCode",{parentName:"h3"},"current")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/current"},"The ",Object(a.b)("inlineCode",{parentName:"a"},"current")," function")," from the ",Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},Object(a.b)("inlineCode",{parentName:"a"},"immer")," library"),", which takes a snapshot of the current state of a draft and finalizes it (but without freezing). Current is a great utility to print the current state during debugging, and the output of ",Object(a.b)("inlineCode",{parentName:"p"},"current")," can also be safely leaked outside the producer."),Object(a.b)("h3",{id:"original"},Object(a.b)("inlineCode",{parentName:"h3"},"original")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/original"},"The ",Object(a.b)("inlineCode",{parentName:"a"},"original")," function")," from the ",Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},Object(a.b)("inlineCode",{parentName:"a"},"immer")," library"),", which returns the original object. This is particularly useful for referential equality check in reducers."),Object(a.b)(c.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { createReducer, createAction, current } from '@reduxjs/toolkit'\n\ninterface Todo {\n  //...\n}\nconst addTodo = createAction<Todo>('addTodo')\n\nconst initialState = [] as Todo[]\n\nconst todosReducer = createReducer(initialState, (builder) => {\n  builder.addCase(addTodo, (state, action) => {\n    state.push(action.payload)\n    console.log(current(state))\n  })\n})\n"))),Object(a.b)(i.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { createReducer, createAction, current } from '@reduxjs/toolkit'\nconst addTodo = createAction('addTodo')\n\nconst initialState = []\n\nconst todosReducer = createReducer(initialState, (builder) => {\n  builder.addCase(addTodo, (state, action) => {\n    state.push(action.payload)\n    console.log(current(state))\n  })\n})\n")))),Object(a.b)("h3",{id:"isdraft"},Object(a.b)("inlineCode",{parentName:"h3"},"isDraft")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/original"},"The ",Object(a.b)("inlineCode",{parentName:"a"},"isDraft")," function")," from the ",Object(a.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},Object(a.b)("inlineCode",{parentName:"a"},"immer")," library"),', which checks to see if a given value is a Proxy-wrapped "draft" state.'),Object(a.b)("h3",{id:"combinereducers"},Object(a.b)("inlineCode",{parentName:"h3"},"combineReducers")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",{parentName:"p",href:"https://redux.js.org/api/combinereducers"},Object(a.b)("inlineCode",{parentName:"a"},"combineReducers")),", re-exported for convenience. While ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore")," calls this internally, you may wish to call it yourself to compose multiple levels of slice reducers."),Object(a.b)("h3",{id:"compose"},Object(a.b)("inlineCode",{parentName:"h3"},"compose")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",{parentName:"p",href:"https://redux.js.org/api/compose"},Object(a.b)("inlineCode",{parentName:"a"},"compose")),". It composes functions from right to left.\nThis is a functional programming utility. You might want to use it to apply several store custom enhancers/ functions in a row."),Object(a.b)("h3",{id:"bindactioncreators"},Object(a.b)("inlineCode",{parentName:"h3"},"bindActionCreators")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",{parentName:"p",href:"https://redux.js.org/api/bindactioncreators"},Object(a.b)("inlineCode",{parentName:"a"},"bindActionCreators")),". It wraps action creators with ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch()")," so that they dispatch immediately when called."),Object(a.b)("h3",{id:"createstore"},Object(a.b)("inlineCode",{parentName:"h3"},"createStore")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",{parentName:"p",href:"https://redux.js.org/api/createstore"},Object(a.b)("inlineCode",{parentName:"a"},"createStore")),". You should not need to use this directly."),Object(a.b)("h3",{id:"applymiddleware"},Object(a.b)("inlineCode",{parentName:"h3"},"applyMiddleware")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",{parentName:"p",href:"https://redux.js.org/api/applymiddleware"},Object(a.b)("inlineCode",{parentName:"a"},"applyMiddleware")),". You should not need to use this directly."))}d.isMDXComponent=!0}}]);