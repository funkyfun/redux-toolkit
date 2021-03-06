---
id: usage-guide
title: 使用指南
sidebar_label: 使用指南
hide_title: true
---

# 使用指南

Redux 核心库是高度可定制的，这能让开发者自己来决定怎么处理很多事情，比如：store 的初始化，状态包含什么内容，怎么来组织 reducers。

在某些场景，这很棒，它给你更多的灵活性。但是，灵活性并不是所有场景都需要。有时，我们只是想以最简单的方式上手，有一些开箱即用的默认选项。再者，或许你正在写一个大型应用，发现你正在编写一些类似的代码，而你想减少必须手工编写的代码量。

就像[快速上手](../introduction/getting-started.md)页面里说的那样，React Toolkit 的目的是简化一些常用的 Redux 使用场景。它并不打算成为一个解决所有使用 Redux 场景的完整的解决方案，但是它应该能让 Redux 相关代码变得更简单，或者在一些场景避免手写代码。

Redux Toolkit 暴露少量的好用的函数，添加了一些常用的 Redux 相关依赖库。这使得你可以决定在现有应用或者全新项目中如何使用它。

让我们来看看 Redux Toolkit 帮助你优化你的 Redux 相关代码的一些方式。

## 配置 Store

所有 Redux 应用都需要先配置和创建一个 Redux store。这通常包含以下步骤：

- 导入或者创建一个根级 reducer 函数
- 设置中间件，比如至少包含一个处理异步逻辑的中间件
- 设置 [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- 可能需要根据生产环境还是开发环境处理一些不同的逻辑

### 通常的 Store Setup

下面例子来自于 Redux 文档 [Configuring Your Store](https://redux.js.org/recipes/configuring-your-store) ，展示了典型的 store 设置创建流程:

```js
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
```
这个例子可读性还不错，但是流程通常并不是很直接了当。

- Redux 的 `createStore` 函数的参数按顺序是：`(rootReducer, preloadedState, enhancer)`。有些时候并不是那么容易记住它们的顺序。
- 设置中间件和 enhancers 的过程可能让人感到困惑，尤其加上一堆配置参数时。
- Redux DevTools Extension 的文档原本建议使用 [一些硬编码来检查全局命名空间从而确定扩展是不是已经安装]。很多人直接拷贝这段代码片段，让初始化的代码可读性更差了。

### 使用 `configureStore` 简化 Store Setup

`configureStore` 通过以下手段来解决之前那些问题:

- 接收一个带有“具名”参数的选项对象，以便增强可读性
- 允许你提供一个包含你想添加的 middleware 和 enhancers 的数组，内部会自动调用 `applyMiddleware` 和 `compose`
- 默认自动开启 Redux DevTools Extension

另外，`configureStore` 默认包含一些有各自作用的中间件：

- [`redux-thunk`](https://github.com/reduxjs/redux-thunk) 是最常用的中间件之一，它一般用作处理组件外的异步或同步逻辑。
- 在开发阶段，会帮忙检查一些常见的状态错误的中间件。比如，直接突变状态值或者使用不可序列化的状态值。

这意味着设置 store 的代码变得更简短并且更容易阅读，而且可以获得一些开箱即用的良好的默认行为。

使用它的最简单的方法是将root reducer 函数做为 reducer 的选项参数传递：

```js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store
```

同样，你可以传递一个包含多个 ["slice reducers"](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic) 对象，`configureStore` 会帮你调用 [`combineReducers`](https://redux.js.org/api/combinereducers) ：

```js
import { configureStore } from '@reduxjs/toolkit'
// highlight-start
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
})
// highlight-end

export default store
```

注意，这里只对一个层级的 reducers 有效。如果你有嵌套的 reducers，你需要自己调用 `combineReducers` 来合并子项。
如果需要自定义 store 设置，你可以传递额外的选项参数。这大致是使用 Redux Toolkit 的热重载的例子：

```js
import { configureStore } from '@reduxjs/toolkit'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
```

如果你提供了 `middleware` 参数，`configureStore` 将只使用你列出的中间件。如果你需要使用一些自定中间件同时使用默认的中间件，你可以调用 [`getDefaultMiddleware`](../api/getDefaultMiddleware.mdx) 合并你的中间件列表。

## 编写 Reducers

[Reducers](https://redux.js.org/basics/reducers) 是 Redux 的重要概念. 一个典型的 Reducer 函数需要：

- 根据不同的 action `type` 做出不同的处理逻辑
- 通过 immutable 的方式更新 state，先复制一份需要更新的状态的拷贝，然后只修改拷贝而不是直接修改原状态对象。

你可以在 reducer 中[使用任何你想使用的条件语句](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/#switch-statements)，最常用的是 `switch` 语句，因为这是处理单个字段的多种可能值的最直接的办式。不过，很多人不喜欢 switch 语句，Redux 文档已经展示了[一种基于不同函数来映射不同 action type 的处理逻辑](https://redux.js.org/recipes/reducing-boilerplate#generating-reducers)的例子，但是，用户需要自行去封装这个逻辑。

另外一个普遍的编写 reducers 的痛点是 state 的更新需要通过 immutable 的方式。JavaScript 是一个 mutable 类型的语言，[想要手动通过 immutable 的方式去更新子级数据是困难的](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns)，并且容易出错。

### 使用 `createReducer` 简化 Reducers

自从将 Reducer 分成不同 action type 映射处理函数的方式开始流行，Redux Toolkit 内置了一个 `createReducer` 函数，功能类似上面 Redux 文档中[例子](https://redux.js.org/recipes/reducing-boilerplate#generating-reducers)展示的功能。但是，我们的 `createReducer` 使用了一些“魔法”让它更好用。它内部使用了 [Immer](https://github.com/mweststrate/immer)，能让你使用 mutable 的代码来更新数据，但实际上内部数据是以 immutable 的方式更新。这使得直接在 reducer 中直接使用 mutable 的代码来更新数据。

通常，每个使用 `switch` 语句的 Redux reducer 都能迁移到直接使用 `createReducer`。每个 `case` 分支对应传入 `createReducer` 参数对象中的一个 key。Immutable 更新的逻辑，例如，对象展开、数组拷贝，可以直接操作数据对象更新。它可以保持数据的 immutable 更新并返回更新后的克隆对象。

这里有一些如何使用 `createReducer` 的例子。我们先按之前的方式来写一个典型的 "todo list" 的 reducer，使用 switch 语句和 immutable 的更新方式:

```js
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return state.concat(action.payload)
    }
    case 'TOGGLE_TODO': {
      const { index } = action.payload
      return state.map((todo, i) => {
        if (i !== index) return todo

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'REMOVE_TODO': {
      return state.filter((todo, i) => i !== action.payload.index)
    }
    default:
      return state
  }
}
```

注意，我们特意调用了 `state.concat()` 来克隆一个 todo 数组新增新的 todo 实例，在 toggle 的分支，我们同样使用了 `state.map()` 来返回一个新的数组拷贝，同时，使用了对象展开符来更新需要更新的 todo 实例。

使用 `createReducer`, 我们可以大大简化上面的例子:

```js
const todosReducer = createReducer([], (builder) => {
  builder
    .addCase('ADD_TODO', (state, action) => {
      // "mutate" the array by calling push()
      state.push(action.payload)
    })
    .addCase('TOGGLE_TODO', (state, action) => {
      const todo = state[action.payload.index]
      // "mutate" the object by overwriting a field
      todo.completed = !todo.completed
    })
    .addCase('REMOVE_TODO', (state, action) => {
      // Can still return an immutably-updated value if we want to
      return state.filter((todo, i) => i !== action.payload.index)
    })
})
```

在我们试图更新一个深层次嵌套的数据的时候，"mutate" 更新的方式就显得格外有用了。下面是一段复杂又让人痛苦的代码:

```js
case "UPDATE_VALUE":
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
```

能被简化成这样:

```js
updateValue(state, action) {
    const {someId, someValue} = action.payload;
    state.first.second[someId].fourth = someValue;
}
```

Much better!

### 使用 `createReducer` 的注意事项

虽然 Redux Toolkit `createReducer` 很好用, 但请牢记:

- "mutative" 代码只在 `createReducer` 内部生效。
- Immer won't let you mix "mutating" the draft state and also returning a new state value

详见 [`createReducer` API 文档](../api/createReducer.mdx)。

## 编写 Action Creators

Redux 鼓励你[编写 "action creator" 函数](https://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/) 来封装 action 对象的创建过程. 尽管这没有强制要求，但是 Redux 标准使用方式之一。

大部分 action creators 非常简单。他们将传入的参数包装成一个包含 `type` 字段和这个传入的参数的 action 对象。根据 [Flux 标准的 Action](https://github.com/redux-utilities/flux-standard-action)，传入参数参数通常被命名为 `payload` 字段。一个典型的 action creator 大致像这样：

```js
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: { text },
  }
}
```

### 通过 `createAction` 定义 Action Creators

手写 action creators 可能会很繁琐. Redux Toolkit 提供了一个 `createAction` 函数, 通过传入的 action type 来简化 action creator 的创建过程，并将参数转换为 `payload` 字段。

```js
const addTodo = createAction('ADD_TODO')
addTodo({ text: 'Buy milk' })
// {type : "ADD_TODO", payload : {text : "Buy milk"}})
```

`createAction` 还接收一个 "prepare callback" 参数, 允许你自定义 `payload` 字段并可选地添加一个 `meta` 字段。详见[`createAction` API 文档](../api/createAction.mdx#using-prepare-callbacks-to-customize-action-contents) .

### 使用 Action Creators 充当 Action Types

Redux reducers 需要找到对应的 action types 来确定怎么更新状态的逻辑。通常，这是通过分别定义 action type 字符串和 action creator 函数来实现的。Redux Toolkit `createAction` 使用了一些技巧来使这变得更简单。

首先, `createAction` 重写了生成的 action creators 的 `toString()` 。 **这意味着 action creator 本身可以在一些场景中充当 "action type"**, 比如提供给 `builder.addCase` 或 `createReducer` 的键.

再者, action type 也被定义成 action creator 的 `type` 字段。

```js
const actionCreator = createAction('SOME_ACTION_TYPE')

console.log(actionCreator.toString())
// "SOME_ACTION_TYPE"

console.log(actionCreator.type)
// "SOME_ACTION_TYPE"

const reducer = createReducer({}, (builder) => {
  // actionCreator.toString() will automatically be called here
  // also, if you use TypeScript, the action type will be correctly inferred
  builder.addCase(actionCreator, (state, action) => {})

  // Or, you can reference the .type field:
  // if using TypeScript, the action type cannot be inferred that way
  builder.addCase(actionCreator.type, (state, action) => {})
})
```
这意味着你不需要单独定义一个 action type 变量，或者使用一个变量名和值重复的 action type 定义，例如 `const SOME_ACTION_TYPE = "SOME_ACTION_TYPE"`。

不幸的是，在 switch 语句中 case 分支的判断不会做隐式 string 类型转换，如果你想在 switch 语句中使用 action creators，你需要调用一下 `actionCreator.toString()`：

```js
const actionCreator = createAction('SOME_ACTION_TYPE')

const reducer = (state = {}, action) => {
  switch (action.type) {
    // ERROR: this won't work correctly!
    case actionCreator: {
      break
    }
    // CORRECT: this will work as expected
    case actionCreator.toString(): {
      break
    }
    // CORRECT: this will also work right
    case actionCreator.type: {
      break
    }
  }
}
```
如果你配合使用 TypeScript，编译器也不会接收隐式的 `toString()` 转换，比如，把action creator 作为 object 的 key 的时候，你需要做一下类型强转 (`actionCreator as string`)，或者直接使用 `.type`。

## 创建 State 切片

Redux state 通常被组织成 “切片（slices）”，通过 传递给 `combineReducers` 的 reducers 定义:

```js
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
})
```

上面例子中，`users` 和 `posts` 都会被视为 “切片”，他们：

- 包含自己的状态，并有初始值
- 定义了状态如何变更
- 定义了 actions 对应的状态变更

通常的实现是将切片的 reducer 函数定义在一个单独的文件，action creators 定义在另一个文件。由于两个函数都需要引用相同的 action types，所以通常会把 action types 又放到一个文件中去定义然后分别导入。

```js
// postsConstants.js
const CREATE_POST = 'CREATE_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'

// postsActions.js
import { CREATE_POST, UPDATE_POST, DELETE_POST } from './postConstants'

export function addPost(id, title) {
  return {
    type: CREATE_POST,
    payload: { id, title },
  }
}

// postsReducer.js
import { CREATE_POST, UPDATE_POST, DELETE_POST } from './postConstants'

const initialState = []

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST: {
      // omit implementation
    }
    default:
      return state
  }
}
```

这里唯一真正有必要的部分是 reducer 本身。考虑其他部分：

- We could have written the action types as inline strings in both places
- The action creators are good, but they're not _required_ to use Redux - a component could skip supplying a `mapDispatch` argument to `connect`, and just call `this.props.dispatch({type : "CREATE_POST", payload : {id : 123, title : "Hello World"}})` itself
- The only reason we're even writing multiple files is because it's common to separate code by what it does

The ["ducks" file structure](https://github.com/erikras/ducks-modular-redux) proposes putting all of your Redux-related logic for a given slice into a single file, like this:

```js
// postsDuck.js
const CREATE_POST = 'CREATE_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'

export function addPost(id, title) {
  return {
    type: CREATE_POST,
    payload: { id, title },
  }
}

const initialState = []

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST: {
      // Omit actual code
      break
    }
    default:
      return state
  }
}
```

That simplifies things because we don't need to have multiple files, and we can remove the redundant imports of the action type constants. But, we still have to write the action types and the action creators by hand.

### Defining Functions in Objects

In modern JavaScript, there are several legal ways to define both keys and functions in an object (and this isn't specific to Redux), and you can mix and match different key definitions and function definitions. For example, these are all legal ways to define a function inside an object:

```js
const keyName = "ADD_TODO4";

const reducerObject = {
	// Explicit quotes for the key name, arrow function for the reducer
	"ADD_TODO1" : (state, action) => { }

	// Bare key with no quotes, function keyword
	ADD_TODO2 : function(state, action){  }

	// Object literal function shorthand
	ADD_TODO3(state, action) { }

	// Computed property
	[keyName] : (state, action) => { }
}
```

Using the ["object literal function shorthand"](https://www.sitepoint.com/es6-enhanced-object-literals/) is probably the shortest code, but feel free to use whichever of those approaches you want.

### Simplifying Slices with `createSlice`

To simplify this process, Redux Toolkit includes a `createSlice` function that will auto-generate the action types and action creators for you, based on the names of the reducer functions you provide.

Here's how that posts example would look with `createSlice`:

```js
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
})

console.log(postsSlice)
/*
{
    name: 'posts',
    actions : {
        createPost,
        updatePost,
        deletePost,
    },
    reducer
}
*/

const { createPost } = postsSlice.actions

console.log(createPost({ id: 123, title: 'Hello World' }))
// {type : "posts/createPost", payload : {id : 123, title : "Hello World"}}
```

`createSlice` looked at all of the functions that were defined in the `reducers` field, and for every "case reducer" function provided, generates an action creator that uses the name of the reducer as the action type itself. So, the `createPost` reducer became an action type of `"posts/createPost"`, and the `createPost()` action creator will return an action with that type.

### Exporting and Using Slices

Most of the time, you'll want to define a slice, and export its action creators and reducers. The recommended way to do this is using ES6 destructuring and export syntax:

```js
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer
```

You could also just export the slice object itself directly if you prefer.

Slices defined this way are very similar in concept to the ["Redux Ducks" pattern](https://github.com/erikras/ducks-modular-redux) for defining and exporting action creators and reducers. However, there are a couple potential downsides to be aware of when importing and exporting slices.

First, **Redux action types are not meant to be exclusive to a single slice**. Conceptually, each slice reducer "owns" its own piece of the Redux state, but it should be able to listen to any action type and update its state appropriately. For example, many different slices might want to respond to a "user logged out" action by clearing data or resetting back to initial state values. Keep that in mind as you design your state shape and create your slices.

Second, **JS modules can have "circular reference" problems if two modules try to import each other**. This can result in imports being undefined, which will likely break the code that needs that import. Specifically in the case of "ducks" or slices, this can occur if slices defined in two different files both want to respond to actions defined in the other file.

This CodeSandbox example demonstrates the problem:

<iframe src="https://codesandbox.io/embed/rw7ppj4z0m/?runonclick=1" style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

If you encounter this, you may need to restructure your code in a way that avoids the circular references. This will usually require extracting shared code to a separate common file that both modules can import and use. In this case, you might define some common action types in a separate file using `createAction`, import those action creators into each slice file, and handle them using the `extraReducers` argument.

The article [How to fix circular dependency issues in JS](https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de) has additional info and examples that can help with this issue.

## Asynchronous Logic and Data Fetching

### Using Middleware to Enable Async Logic

By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

But, what if you want to have async logic interact with the store by dispatching or checking the current store state? That's where [Redux middleware](https://redux.js.org/advanced/middleware) come in. They extend the store, and allow you to:

- Execute extra logic when any action is dispatched (such as logging the action and state)
- Pause, modify, delay, replace, or halt dispatched actions
- Write extra code that has access to `dispatch` and `getState`
- Teach `dispatch` how to accept other values besides plain action objects, such as functions and promises, by intercepting them and dispatching real action objects instead

[The most common reason to use middleware is to allow different kinds of async logic to interact with the store](https://redux.js.org/faq/actions#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior). This allows you to write code that can dispatch actions and check the store state, while keeping that logic separate from your UI.

There are many kinds of async middleware for Redux, and each lets you write your logic using different syntax. The most common async middleware are:

- [`redux-thunk`](https://github.com/reduxjs/redux-thunk), which lets you write plain functions that may contain async logic directly
- [`redux-saga`](https://github.com/redux-saga/redux-saga), which uses generator functions that return descriptions of behavior so they can be executed by the middleware
- [`redux-observable`](https://github.com/redux-observable/redux-observable/), which uses the RxJS observable library to create chains of functions that process actions

[Each of these libraries has different use cases and tradeoffs](https://redux.js.org/faq/actions#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else).

**We recommend [using the Redux Thunk middleware as the standard approach](https://github.com/reduxjs/redux-thunk)**, as it is sufficient for most typical use cases (such as basic AJAX data fetching). In addition, use of the `async/await` syntax in thunks makes them easier to read.

**The Redux Toolkit `configureStore` function [automatically sets up the thunk middleware by default](../api/getDefaultMiddleware.mdx)**, so you can immediately start writing thunks as part of your application code.

### Defining Async Logic in Slices

Redux Toolkit does not currently provide any special APIs or syntax for writing thunk functions. In particular, **they cannot be defined as part of a `createSlice()` call**. You have to write them separate from the reducer logic, exactly the same as with plain Redux code.

Thunks typically dispatch plain actions, such as `dispatch(dataLoaded(response.data))`.

Many Redux apps have structured their code using a "folder-by-type" approach. In that structure, thunk action creators are usually defined in an "actions" file, alongside the plain action creators.

Because we don't have separate "actions" files, **it makes sense to write these thunks directly in our "slice" files**. That way, they have access to the plain action creators from the slice, and it's easy to find where the thunk function lives.

A typical slice file that includes thunks would look like this:

```js
// First, define the reducer and action creators via `createSlice`
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    users: [],
  },
  reducers: {
    usersLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    usersReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.users = action.payload
      }
    },
  },
})

// Destructure and export the plain action creators
export const { usersLoading, usersReceived } = usersSlice.actions

// Define a thunk that dispatches those action creators
const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading())
  const response = await usersAPI.fetchAll()
  dispatch(usersReceived(response.data))
}
```

### Redux Data Fetching Patterns

Data fetching logic for Redux typically follows a predictable pattern:

- A "start" action is dispatched before the request to indicate that the request is in progress. This may be used to track loading state, to allow skipping duplicate requests, or show loading indicators in the UI.
- The async request is made
- Depending on the request result, the async logic dispatches either a "success" action containing the result data, or a "failure" action containing error details. The reducer logic clears the loading state in both cases, and either processes the result data from the success case, or stores the error value for potential display.

These steps are not required, but are [recommended in the Redux tutorials as a suggested pattern](https://redux.js.org/advanced/async-actions).

A typical implementation might look like:

```js
const getRepoDetailsStarted = () => ({
  type: "repoDetails/fetchStarted"
})
const getRepoDetailsSuccess = (repoDetails) => {
  type: "repoDetails/fetchSucceeded",
  payload: repoDetails
}
const getRepoDetailsFailed = (error) => {
  type: "repoDetails/fetchFailed",
  error
}
const fetchIssuesCount = (org, repo) => async dispatch => {
  dispatch(getRepoDetailsStarted())
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
  }
}
```

However, writing code using this approach is tedious. Each separate type of request needs repeated similar implementation:

- Unique action types need to be defined for the three different cases
- Each of those action types usually has a corresponding action creator function
- A thunk has to be written that dispatches the correct actions in the right sequence

`createAsyncThunk` abstracts this pattern by generating the action types and action creators and generating a thunk that dispatches those actions.

### Async Requests with `createAsyncThunk`

As a developer, you are probably most concerned with the actual logic needed to make an API request, what action type names show up in the Redux action history log, and how your reducers should process the fetched data. The repetitive details of defining the multiple action types and dispatching the actions in the right sequence aren't what matters.

`createAsyncThunk` simplifies this process - you only need to provide a string for the action type prefix and a payload creator callback that does the actual async logic and returns a promise with the result. In return, `createAsyncThunk` will give you a thunk that will take care of dispatching the right actions based on the promise you return, and action types that you can handle in your reducers:

```js {5-11,22-25,30}
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    },
  },
})

// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123))
```

The thunk action creator accepts a single argument, which will be passed as the first argument to your payload creator callback.

The payload creator will also receive a `thunkAPI` object containing the parameters that are normally passed to a standard Redux thunk function, as well as an auto-generated unique random request ID string and an [`AbortController.signal` object](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal):

```ts
interface ThunkAPI {
  dispatch: Function
  getState: Function
  extra?: any
  requestId: string
  signal: AbortSignal
}
```

You can use any of these as needed inside the payload callback to determine what the final result should be.

## Managing Normalized Data

Most applications typically deal with data that is deeply nested or relational. The goal of normalizing data is to efficiently organize the data in your state. This is typically done by storing collections as objects with the key of an `id`, while storing a sorted array of those `ids`. For a more in-depth explanation and further examples, there is a great reference in the [Redux docs page on "Normalizing State Shape"](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape).

### Normalizing by hand

Normalizing data doesn't require any special libraries. Here's a basic example of how you might normalize the response from a `fetchAll` API request that returns data in the shape of `{ users: [{id: 1, first_name: 'normalized', last_name: 'person'}] }`, using some hand-written logic:

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userAPI from './userAPI'

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  const response = await userAPI.fetchAll()
  return response.data
})

export const slice = createSlice({
  name: 'users',
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // reduce the collection by the id property into a shape of { 1: { ...user }}
      const byId = action.payload.users.reduce((byId, user) => {
        byId[user.id] = user
        return byId
      }, {})
      state.entities = byId
      state.ids = Object.keys(byId)
    })
  },
})
```

Although we're capable of writing this code, it does become repetitive, especially if you're handling multiple types of data. In addition, this example only handles loading entries into the state, not updating them.

### Normalizing with `normalizr`

[`normalizr`](https://github.com/paularmstrong/normalizr) is a popular existing library for normalizing data. You can use it on its own without Redux, but it is very commonly used with Redux. The typical usage is to format collections from an API response and then process them in your reducers.

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'

import userAPI from './userAPI'

const userEntity = new schema.Entity('users')

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  const response = await userAPI.fetchAll()
  // Normalize the data before passing it to our reducer
  const normalized = normalize(response.data, [userEntity])
  return normalized.entities
})

export const slice = createSlice({
  name: 'users',
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities = action.payload.users
      state.ids = Object.keys(action.payload.users)
    })
  },
})
```

As with the hand-written version, this doesn't handle adding additional entries into the state, or updating them later - it's just loading in everything that was received.

### Normalizing with `createEntityAdapter`

Redux Toolkit's `createEntityAdapter` API provides a standardized way to store your data in a slice by taking a collection and putting it into the shape of `{ ids: [], entities: {} }`. Along with this predefined state shape, it generates a set of reducer functions and selectors that know how to work with the data.

```js
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import userAPI from './userAPI'

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  const response = await userAPI.fetchAll()
  // In this case, `response.data` would be:
  // [{id: 1, first_name: 'Example', last_name: 'User'}]
  return response.data
})

export const updateUser = createAsyncThunk('users/updateOne', async (arg) => {
  const response = await userAPI.updateUser(arg)
  // In this case, `response.data` would be:
  // { id: 1, first_name: 'Example', last_name: 'UpdatedLastName'}
  return response.data
})

export const usersAdapter = createEntityAdapter()

// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
// If you want to track 'loading' or other keys, you would initialize them here:
// `getInitialState({ loading: false, activeRequestId: null })`
const initialState = usersAdapter.getInitialState()

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeUser: usersAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, usersAdapter.upsertMany)
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      const { id, ...changes } = payload
      usersAdapter.updateOne(state, { id, changes })
    })
  },
})

const reducer = slice.reducer
export default reducer

export const { removeUser } = slice.actions
```

You can [view the full code of this example usage on CodeSandbox](https://codesandbox.io/s/rtk-entities-basic-example-1xubt)

### Using `createEntityAdapter` with Normalization Libraries

If you're already using `normalizr` or another normalization library, you could consider using it along with `createEntityAdapter`. To expand on the examples above, here is a demonstration of how we could use `normalizr` to format a payload, then leverage the utilities `createEntityAdapter` provides.

By default, the `setAll`, `addMany`, and `upsertMany` CRUD methods expect an array of entities. However, they also allow you to pass in an object that is in the shape of `{ 1: { id: 1, ... }}` as an alternative, which makes it easier to insert pre-normalized data.

```js
// features/articles/articlesSlice.js
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit'
import fakeAPI from '../../services/fakeAPI'
import { normalize, schema } from 'normalizr'

// Define normalizr entity schemas
export const userEntity = new schema.Entity('users')
export const commentEntity = new schema.Entity('comments', {
  commenter: userEntity,
})
export const articleEntity = new schema.Entity('articles', {
  author: userEntity,
  comments: [commentEntity],
})

const articlesAdapter = createEntityAdapter()

export const fetchArticle = createAsyncThunk(
  'articles/fetchArticle',
  async (id) => {
    const data = await fakeAPI.articles.show(id)
    // Normalize the data so reducers can load a predictable payload, like:
    // `action.payload = { users: {}, articles: {}, comments: {} }`
    const normalized = normalize(data, articleEntity)
    return normalized.entities
  }
)

export const slice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchArticle.fulfilled]: (state, action) => {
      // Handle the fetch result by inserting the articles here
      articlesAdapter.upsertMany(state, action.payload.articles)
    },
  },
})

const reducer = slice.reducer
export default reducer

// features/users/usersSlice.js

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { fetchArticle } from '../articles/articlesSlice'

const usersAdapter = createEntityAdapter()

export const slice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      // And handle the same fetch result by inserting the users here
      usersAdapter.upsertMany(state, action.payload.users)
    })
  },
})

const reducer = slice.reducer
export default reducer

// features/comments/commentsSlice.js

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { fetchArticle } from '../articles/articlesSlice'

const commentsAdapter = createEntityAdapter()

export const slice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchArticle.fulfilled]: (state, action) => {
      // Same for the comments
      commentsAdapter.upsertMany(state, action.payload.comments)
    },
  },
})

const reducer = slice.reducer
export default reducer
```

You can [view the full code of this example `normalizr` usage on CodeSandbox](https://codesandbox.io/s/rtk-entities-basic-example-with-normalizr-bm3ie)

### Using selectors with `createEntityAdapter`

The entity adapter providers a selector factory that generates the most common selectors for you. Taking the examples above, we can add selectors to our `usersSlice` like this:

```js
// Rename the exports for readability in component usage
export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state) => state.users)
```

You could then use these selectors in a component like this:

```js
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTotalUsers, selectAllUsers } from './usersSlice'

import styles from './UsersList.module.css'

export function UsersList() {
  const count = useSelector(selectTotalUsers)
  const users = useSelector(selectAllUsers)

  return (
    <div>
      <div className={styles.row}>
        There are <span className={styles.value}>{count}</span> users.{' '}
        {count === 0 && `Why don't you fetch some more?`}
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <div>{`${user.first_name} ${user.last_name}`}</div>
        </div>
      ))}
    </div>
  )
}
```

### Specifying Alternate ID Fields

By default, `createEntityAdapter` assumes that your data has unique IDs in an `entity.id` field. If your data set stores its ID in a different field, you can pass in a `selectId` argument that returns the appropriate field.

```js
// In this instance, our user data always has a primary key of `idx`
const userData = {
  users: [
    { idx: 1, first_name: 'Test' },
    { idx: 2, first_name: 'Two' },
  ],
}

// Since our primary key is `idx` and not `id`,
// pass in an ID selector to return that field instead
export const usersAdapter = createEntityAdapter({
  selectId: (user) => user.idx,
})
```

### Sorting Entities

`createEntityAdapter` provides a `sortComparer` argument that you can leverage to sort the collection of `ids` in state. This can be very useful for when you want to guarantee a sort order and your data doesn't come presorted.

```js
// In this instance, our user data always has a primary key of `idx`
const userData = {
  users: [
    { id: 1, first_name: 'Test' },
    { id: 2, first_name: 'Banana' },
  ],
}

// Sort by `first_name`. `state.ids` would be ordered as
// `ids: [ 2, 1 ]`, since 'B' comes before 'T'.
// When using the provided `selectAll` selector, the result would be sorted:
// [{ id: 2, first_name: 'Banana' }, { id: 1, first_name: 'Test' }]
export const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.first_name.localeCompare(b.first_name),
})
```

## Working with Non-Serializable Data

One of the core usage principles for Redux is that [you should not put non-serializable values in state or actions](https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions).

However, like most rules, there are exceptions. There may be occasions when you have to deal with actions that need to accept non-serializable data. This should be done very rarely and only if necessary, and these non-serializable payloads shouldn't ever make it into your application state through a reducer.

The [serializability dev check middleware](../api/serializabilityMiddleware.mdx) will automatically warn anytime it detects non-serializable values in your actions or state. We encourage you to leave this middleware active to help avoid accidentally making mistakes. However, if you _do_ need to turnoff those warnings, you can customize the middleware by configuring it to ignore specific action types, or fields in actions and state:

```js
configureStore({
  //...
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['your/action/type'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: ['items.dates'],
    },
  }),
})
```

### Use with Redux-Persist

If using Redux-Persist, you should specifically ignore all the action types it dispatches:

```jsx
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
```

See [Redux Toolkit #121: How to use this with Redux-Persist?](https://github.com/reduxjs/redux-toolkit/issues/121) and [Redux-Persist #988: non-serializable value error](https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978) for further discussion.

### Use with React-Redux-Firebase

RRF includes timestamp values in most actions and state as of 3.x, but there are PRs that may improve that behavior as of 4.x.

A possible configuration to work with that behavior could look like:

```ts
import { configureStore } from '@reduxjs/toolkit'
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from 'react-redux-firebase'
import { constants as rfConstants } from 'redux-firestore'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          // just ignore every redux-firebase and react-redux-firebase action type
          ...Object.keys(rfConstants.actionTypes).map(
            (type) => `${rfConstants.actionsPrefix}/${type}`
          ),
          ...Object.keys(rrfActionTypes).map(
            (type) => `@@reactReduxFirebase/${type}`
          ),
        ],
        ignoredPaths: ['firebase', 'firestore'],
      },
      thunk: {
        extraArgument: {
          getFirebase,
        },
      },
    }),
})

export default store
```
