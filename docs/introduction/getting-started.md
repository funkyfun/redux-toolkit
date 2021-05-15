---
id: getting-started
title: 新手入门
sidebar_label: 新手入门
hide_title: true
---

# Redux Toolkit 新手入门

## 目的

**Redux Toolkit** 致力于成为编写 [Redux](https://redux.js.org) 逻辑的标准方式。它最初是为了帮助解决有关 Redux 的三个常见问题而创建的：

- "React 配置真是太复杂啦！"
- "为了在一些场景让 Redux 好用，我需要引入大量的依赖包"
- "Redux 太多样板代码啦！"

我们不能解决所有应用场景，但是受到 [`create-react-app`](https://github.com/facebook/create-react-app) 和 [`apollo-boost`](https://dev-blog.apollodata.com/zero-config-graphql-state-management-27b1f1b3c2c3) 的启发，我们可以尝试提供一些工具来抽象初始化过程和兜住大部分常见的应用场景，同时帮助用户简化他们的应用代码。

**这些工具应该能让所有 Redux 用户受益**. 不管你是刚引入 Redux 来构建你的应用的新手用户，还是想要精简你原来 Redux 应用代码的老手。**Redux Toolkit** 可以帮助你写出更好的 Redux 代码。

## 安装

### 使用 Create React App

创建新的 React + Redux-Toolkit 应用，推荐的方式是使用[Create React App](https://github.com/facebook/create-react-app) 的官方模板 [official Redux+JS template](https://github.com/reduxjs/cra-template-redux), 可以将 React components 和 React Redux 充分整合。

```sh
npx create-react-app my-app --template redux
```

同样，这个模板 [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) 也很不错:

```sh
npx create-react-app my-app --template redux-typescript
```

### 现有应用接入

Redux Toolkit 已经发布到 npm，可以使用 npm 安装:

```bash
# NPM
npm install @reduxjs/toolkit
```

or

```bash
# Yarn
yarn add @reduxjs/toolkit
```

包内包含一个 UMD 模块，模块定义了一个 `window.RTK` 的全局变量.
UMD 模块可以直接使用浏览器的 [`<script>` 标签](https://unpkg.com/@reduxjs/toolkit/dist/redux-toolkit.umd.js)引入.

```html
<script src="https://unpkg.com/@reduxjs/toolkit/dist/redux-toolkit.umd.js"></script>
```

## What's Included

Redux Toolkit 包含如下 APIs:

- [`configureStore()`](../api/configureStore.mdx): `createStore` 的包装，提供简化的配置和默认选项，可以自动组合reducers, 添加你想要额外添加的 Redux 中间件，默认包含  `redux-thunk`, 默认使用 Redux DevTools Extension。
- [`createReducer()`](../api/createReducer.mdx): 它让你可以使用以不同 action type 命名的函数的方式来组织你的reducer分支逻辑，而不是使用 switch 语句. 另外，会自动使用 [`immer`](https://github.com/immerjs/immer)，所以你可以使用 mutative 方式完成 immutable updates，就像 `state.todos[3].completed = true`.
- [`createAction()`](../api/createAction.mdx): 为给定的 action type 字符串生成一个 action creator 函数。函数本身定义了 `toString()`，因此它可以用来代替 type 常量。
- [`createSlice()`](../api/createSlice.mdx): 给它一个 reducer 函数集合对象, 一个切片 (slice) 的名称, 和一个初始化 state 对象, 它会自动生成一个包含对应的 action creators 和 action types 的 reducer 切片。
- [`createAsyncThunk`](../api/createAsyncThunk.mdx): 接收一个 action type 字符串和一个返回 promise 的函数，生成一个可以根据之前 promise 的 `pending/fulfilled/rejected` 状态对应的 action types 的 thunk 函数。
- [`createEntityAdapter`](../api/createEntityAdapter.mdx): 生成一个可重用的 reducers 和 selectors 的集合，来规范化管理 store 中的数据。
- [`createSelector`](../api/createSelector.mdx) 来自 [Reselect](https://github.com/reduxjs/reselect) , 为了方便使用，在这里重新导出。

## 求助和讨论

**[Reactiflux Discord community](http://www.reactiflux.com)** 的 **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** 是官方渠道来解答任何关于学习和使用 Redux 的问题。Reactiflux 是一个适合提问和学习的好地方，快来加入我们吧!

你也可以在 [Stack Overflow](https://stackoverflow.com) 上提问，使用 **[#redux tag](https://stackoverflow.com/questions/tagged/redux)**.
