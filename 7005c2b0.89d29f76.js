/*! For license information please see 7005c2b0.89d29f76.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},104:function(e,t,n){"use strict";e.exports=n(105)},105:function(e,t,n){"use strict";var r=n(106),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,f=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var x=w.prototype=new g;x.constructor=w,r(x,v.prototype),x.isPureReactComponent=!0;var N={current:null},R=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:N.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,T=[];function E(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function _(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return n(r,e,""===t?"."+D(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+D(a=e[u],u);c+=_(a,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=_(a=a.value,l=t+D(a,u++),n,r);else if("object"===a)throw n=""+e,Error(j(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function I(e,t,n){return null==e?0:_(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(P,"$&/")+"/"),I(e,F,t=E(t,o,r,a)),A(t)}var q={current:null};function U(){var e=q.current;if(null===e)throw Error(j(321));return e}var z={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,$,t=E(null,null,t,n)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(j(143));return e}},t.Component=v,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=N.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)R.call(t,s)&&!C.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:f,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},106:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,u=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))a.call(n,s)&&(u[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)o.call(n,c[p])&&(u[c[p]]=n[c[p]])}}return u}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(104),n(103)),i={id:"quick-start",title:"\u5feb\u901f\u4e0a\u624b",sidebar_label:"\u5feb\u901f\u4e0a\u624b",hide_title:!0},c={unversionedId:"tutorials/quick-start",id:"tutorials/quick-start",isDocsHomePage:!1,title:"\u5feb\u901f\u4e0a\u624b",description:"Redux Toolkit \u5feb\u901f\u4e0a\u624b",source:"@site/../docs/tutorials/quick-start.md",slug:"/tutorials/quick-start",permalink:"/tutorials/quick-start",version:"current",sidebar_label:"\u5feb\u901f\u4e0a\u624b",sidebar:"docs",previous:{title:"Tutorials Overview",permalink:"/tutorials/overview"},next:{title:"TypeScript Quick Start",permalink:"/tutorials/typescript"}},u=[{value:"Introduction",id:"introduction",children:[{value:"How to Read This Tutorial",id:"how-to-read-this-tutorial",children:[]}]},{value:"Usage Summary",id:"usage-summary",children:[{value:"Install Redux Toolkit and React-Redux",id:"install-redux-toolkit-and-react-redux",children:[]},{value:"Create a Redux Store",id:"create-a-redux-store",children:[]},{value:"Provide the Redux Store to React",id:"provide-the-redux-store-to-react",children:[]},{value:"Create a Redux State Slice",id:"create-a-redux-state-slice",children:[]},{value:"Add Slice Reducers to the Store",id:"add-slice-reducers-to-the-store",children:[]},{value:"Use Redux State and Actions in React Components",id:"use-redux-state-and-actions-in-react-components",children:[]}]},{value:"What You&#39;ve Learned",id:"what-youve-learned",children:[{value:"Full Counter App Example",id:"full-counter-app-example",children:[]}]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"redux-toolkit-\u5feb\u901f\u4e0a\u624b"},"Redux Toolkit \u5feb\u901f\u4e0a\u624b"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What You'll Learn")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"How to set up and use Redux Toolkit with React-Redux")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Familiarity with ",Object(o.b)("a",{parentName:"li",href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/"},"ES6 syntax and features")),Object(o.b)("li",{parentName:"ul"},"Knowledge of React terminology: ",Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX"),", ",Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"State"),", ",Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/components-and-props.html"},"Function Components, Props"),", and ",Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")),Object(o.b)("li",{parentName:"ul"},"Understanding of ",Object(o.b)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux terms and concepts"))))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Welcome to the Redux Toolkit Quick Start tutorial! ",Object(o.b)("strong",{parentName:"p"},"This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly"),"."),Object(o.b)("h3",{id:"how-to-read-this-tutorial"},"How to Read This Tutorial"),Object(o.b)("p",null,"This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, ",Object(o.b)("a",{parentName:"p",href:"/tutorials/overview"},'see the tutorials linked in the "Tutorials Overview" page'),"."),Object(o.b)("p",null,"For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on ",Object(o.b)("a",{parentName:"p",href:"https://create-react-app.dev/docs/folder-structure"},"a typical Create-React-App folder structure")," where all the application code is in a ",Object(o.b)("inlineCode",{parentName:"p"},"src"),", but the patterns can be adapted to whatever project or folder setup you're using."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux"},"Redux+JS template for Create-React-App")," comes with this same project setup already configured."),Object(o.b)("h2",{id:"usage-summary"},"Usage Summary"),Object(o.b)("h3",{id:"install-redux-toolkit-and-react-redux"},"Install Redux Toolkit and React-Redux"),Object(o.b)("p",null,"Add the Redux Toolkit and React-Redux packages to your project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install @reduxjs/toolkit react-redux\n")),Object(o.b)("h3",{id:"create-a-redux-store"},"Create a Redux Store"),Object(o.b)("p",null,"Create a file named ",Object(o.b)("inlineCode",{parentName:"p"},"src/app/store.js"),". Import the ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore")," API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n\nexport default configureStore({\n  reducer: {},\n})\n")),Object(o.b)("p",null,"This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing."),Object(o.b)("h3",{id:"provide-the-redux-store-to-react"},"Provide the Redux Store to React"),Object(o.b)("p",null,"Once the store is created, we can make it available to our React components by putting a React-Redux ",Object(o.b)("inlineCode",{parentName:"p"},"<Provider>")," around our application in ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.js"),". Import the Redux store we just created, put a ",Object(o.b)("inlineCode",{parentName:"p"},"<Provider>")," around your ",Object(o.b)("inlineCode",{parentName:"p"},"<App>"),", and pass the store as a prop:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport './index.css'\nimport App from './App'\n// highlight-start\nimport store from './app/store'\nimport { Provider } from 'react-redux'\n// highlight-end\n\nReactDOM.render(\n  // highlight-next-line\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),Object(o.b)("h3",{id:"create-a-redux-state-slice"},"Create a Redux State Slice"),Object(o.b)("p",null,"Add a new file named ",Object(o.b)("inlineCode",{parentName:"p"},"src/features/counter/counterSlice.js"),". In that file, import the ",Object(o.b)("inlineCode",{parentName:"p"},"createSlice")," API from Redux Toolkit."),Object(o.b)("p",null,"Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice."),Object(o.b)("p",null,"Redux requires that ",Object(o.b)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#immutability"},"we write all state updates immutably, by making copies of data and updating the copies"),". However, Redux Toolkit's ",Object(o.b)("inlineCode",{parentName:"p"},"createSlice")," and ",Object(o.b)("inlineCode",{parentName:"p"},"createReducer")," APIs use ",Object(o.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer")," inside to allow us to ",Object(o.b)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer"},'write "mutating" update logic that becomes correct immutable updates'),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="features/counter/counterSlice.js"',title:'"features/counter/counterSlice.js"'},"import { createSlice } from '@reduxjs/toolkit'\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0,\n  },\n  reducers: {\n    increment: (state) => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    incrementByAmount: (state, action) => {\n      state.value += action.payload\n    },\n  },\n})\n\n// Action creators are generated for each case reducer function\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\nexport default counterSlice.reducer\n")),Object(o.b)("h3",{id:"add-slice-reducers-to-the-store"},"Add Slice Reducers to the Store"),Object(o.b)("p",null,"Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the ",Object(o.b)("inlineCode",{parentName:"p"},"reducers")," parameter, we tell the store to use this slice reducer function to handle all updates to that state."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n// highlight-next-line\nimport counterReducer from '../features/counter/counterSlice'\n\nexport default configureStore({\n  reducer: {\n    // highlight-next-line\n    counter: counterReducer,\n  },\n})\n")),Object(o.b)("h3",{id:"use-redux-state-and-actions-in-react-components"},"Use Redux State and Actions in React Components"),Object(o.b)("p",null,"Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with ",Object(o.b)("inlineCode",{parentName:"p"},"useSelector"),", and dispatch actions using ",Object(o.b)("inlineCode",{parentName:"p"},"useDispatch"),". Create a ",Object(o.b)("inlineCode",{parentName:"p"},"src/features/counter/Counter.js")," file with a ",Object(o.b)("inlineCode",{parentName:"p"},"<Counter>")," component inside, then import that component into ",Object(o.b)("inlineCode",{parentName:"p"},"App.js")," and render it inside of ",Object(o.b)("inlineCode",{parentName:"p"},"<App>"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="features/counter/Counter.js"',title:'"features/counter/Counter.js"'},"import React from 'react'\nimport { useSelector, useDispatch } from 'react-redux'\nimport { decrement, increment } from './counterSlice'\n\nexport function Counter() {\n  const count = useSelector((state) => state.counter.value)\n  const dispatch = useDispatch()\n\n  return (\n    <div>\n      <div>\n        <button\n          aria-label=\"Increment value\"\n          onClick={() => dispatch(increment())}\n        >\n          Increment\n        </button>\n        <span>{count}</span>\n        <button\n          aria-label=\"Decrement value\"\n          onClick={() => dispatch(decrement())}\n        >\n          Decrement\n        </button>\n      </div>\n    </div>\n  )\n}\n")),Object(o.b)("p",null,'Now, any time you click the "Increment" and "Decrement buttons:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The corresponding Redux action will be dispatched to the store"),Object(o.b)("li",{parentName:"ul"},"The counter slice reducer will see the actions and update its state"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"<Counter>")," component will see the new state value from the store and re-render itself with the new data")),Object(o.b)("h2",{id:"what-youve-learned"},"What You've Learned"),Object(o.b)("p",null,"That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Summary")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Create a Redux store with ",Object(o.b)("inlineCode",{parentName:"strong"},"configureStore")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"configureStore")," accepts a ",Object(o.b)("inlineCode",{parentName:"li"},"reducer")," function as a named argument"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"configureStore")," automatically sets up the store with good default settings"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Provide the Redux store to the React application components"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Put a React-Redux ",Object(o.b)("inlineCode",{parentName:"li"},"<Provider>")," component around your ",Object(o.b)("inlineCode",{parentName:"li"},"<App />")),Object(o.b)("li",{parentName:"ul"},"Pass the Redux store as ",Object(o.b)("inlineCode",{parentName:"li"},"<Provider store={store}>")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},'Create a Redux "slice" reducer with ',Object(o.b)("inlineCode",{parentName:"strong"},"createSlice")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Call ",Object(o.b)("inlineCode",{parentName:"li"},"createSlice")," with a string name, an initial state, and named reducer functions"),Object(o.b)("li",{parentName:"ul"},'Reducer functions may "mutate" the state using Immer'),Object(o.b)("li",{parentName:"ul"},"Export the generated slice reducer and action creators"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Use the React-Redux ",Object(o.b)("inlineCode",{parentName:"strong"},"useSelector/useDispatch")," hooks in React components"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Read data from the store with the ",Object(o.b)("inlineCode",{parentName:"li"},"useSelector")," hook"),Object(o.b)("li",{parentName:"ul"},"Get the ",Object(o.b)("inlineCode",{parentName:"li"},"dispatch")," function with the ",Object(o.b)("inlineCode",{parentName:"li"},"useDispatch")," hook, and dispatch actions as needed")))))),Object(o.b)("h3",{id:"full-counter-app-example"},"Full Counter App Example"),Object(o.b)("p",null,"The counter example app shown here is also the"),Object(o.b)("p",null,"Here's the complete counter application as a running CodeSandbox:"),Object(o.b)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1",title:"redux-essentials-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"We recommend going through ",Object(o.b)("a",{parentName:"p",href:"https://redux.js.org/tutorials/index"},Object(o.b)("strong",{parentName:"a"},'the "Redux Essentials" and "Redux Fundamentals" tutorials in the Redux core docs')),", which will give you a complete understanding of how Redux works, what Redux Toolkit does, and how to use it correctly."))}s.isMDXComponent=!0}}]);