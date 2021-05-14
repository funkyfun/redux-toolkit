---
id: tutorials-overview
slug: overview
title: Tutorials Overview
sidebar_label: Tutorials Overview
hide_title: true
---

# 指引概览

**Redux 官网：https://redux.js.org 包含了基本的 Redux 教程**, 包含怎么同时使用 Redux Toolkit 和 React-Redux。

:::tip
为了避免和 Redux 文档介绍重复的内容，我们专注完善 Redux 文档，而不是在 Redux Toolkit 中再去扩展它。
:::

参考这些链接来学习高效地使用 Redux Toolkit。

## Redux Toolkit 快速上手

[**Redux Toolkit 快速上手**](./quick-start.md) 简要的说明了怎么在 React 应用中使用 Redux Toolkit。

**如果你只是想快速跑起一个基本的例子，请阅读 Redux Toolkit 快速上手。**

同时 [**TypeScript 快速上手**](./typescript.md) 简要的说明了怎么使用 TypeScript + Redux Toolkit + React-Redux。

## Redux 概要: 一个真实项目的例子

[**Redux 概要**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) 介绍了怎么正确使用 Redux，同时使用 Redux Toolkit 作为编写 Redux 逻辑的标准方法。

它展示了怎么构建一个真实项目的应用，同时介绍了 Redux 的理念。

**如果你之前没有使用过 Redux，并且想知道怎么有效使用它，从这篇 Redux 概要文档开始入手吧。**

## Redux Fundamentals: Redux from the Ground Up

The [**Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-1-overview) teaches "how Redux works, from the bottom up", by showing how to write Redux code by hand and why standard usage patterns exist. It then shows how Redux Toolkit simplifies those Redux usage patterns.

Since Redux Toolkit is an abstraction layer that wraps around the Redux core, it's helpful to know what RTK's APIs are actually doing for you under the hood. **If you want to understand how Redux really works and why RTK is the recommended approach, read the Redux Fundamentals tutorial.**

## Using Redux Toolkit

The RTK [**Usage Guide** docs page](../usage/usage-guide.md) explains the standard usage patterns for each of RTK's APIs. The [API Reference](../api/configureStore.mdx) section describes each API function and has additional usage examples.

The [Redux Essentials tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) also shows how to use each of the APIs while building an application.

## Migrating Vanilla Redux to Redux Toolkit

If you already know Redux and just want to know how to migrate an existing application to use Redux Toolkit, the [**"Modern Redux with Redux Toolkit" page in the Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux) shows how RTK's APIs simplify Redux usage patterns and how to handle that migration.

## Using Redux Toolkit with TypeScript

The RTK docs page on [**Usage with TypeScript**](../usage/usage-with-typescript.md) shows the basic pattern for setting up Redux Toolkit with TypeScript and React, and documents specific TS patterns for each of the RTK APIs.

In addition, the [Redux + TS template for Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) comes with RTK already configured to use those TS patterns, and serves as a good example of how this should work.

## Legacy Redux Toolkit Tutorials

We previously had a set of "Basic/Intermediate/Advanced" tutorials directly in the Redux Toolkit docs. They were helpful, but we've removed them in favor of pointing to the "Essentials" and "Fundamentals" tutorials in the Redux core docs.

If you'd like to browse the the old tutorials, you can see the content files in our repo's history:

[Redux Toolkit repo: legacy "Basic/Intermediate/Advanced" tutorial files](https://github.com/reduxjs/redux-toolkit/tree/e85eb17b39/docs/tutorials)
