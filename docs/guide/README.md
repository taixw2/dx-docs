---
title: 指南
sidebarDepth: 2
---

## 介绍

### 为什么会有 Dxjs

如果您在声明一个 model 的时候，更喜欢以类的方式来组织，那么就可以选择 [Dxjs](https://github.com/taixw2/dxjs/)  
当然这和 redux 的函数式编程理念有所冲突，但是依然不妨碍尝试这种方式来管理状态，或许能够解决某个痛点或提升一些效率。

### Dxjs 能做什么

[Dxjs](https://github.com/taixw2/dxjs/) 使用类的方式来组织代码， 以及支持插件机制，能够在不同的阶段读取到数据流的状态，如 `beforeReducer`, `reducer`, `afterReducer`, `beforeEffect`, `effect`, `afterEffect`

## 安装

### 安装

```sh
npm install @dxjs/core @dxjs/common
# 或者
yarn add @dxjs/core @dxjs/shared
```
