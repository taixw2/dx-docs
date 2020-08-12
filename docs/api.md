---
title: API
sidebar: auto
sidebarDepth: 3
---

# @dxjs/core

## DxFactor

对于需要多个 Dx/redux 实例的应用来说非常有用，
- 参数
  - `无`
- 用法
```javascript
const Dx = DxFactory()
```

## Dx.cerate

Dx 的基础方法，`Dx.create` 返回一个 `ReactCompoent`
- 参数
  - `{DxModelContstructor[] | { [key: string]: DxModelContstructor }} models`
  - `{Middleware[]} middlewares` redux 的 middlewares
  - `{EffectMiddleware[]} sagaMiddlewares` saga 的 middlewares
  - `{Enhancer<ReducerEnhancer>[][]} reducerEnhancer` reducer 增强器
  - `{Enhancer<SentinelInterface>[]} sentinels` 哨兵
  - `{Enhancer<DisguiserStatic>[]} disguisers` 伪装者
  - `{Enhancer<GuardInterface>[]} guards` 守卫
- 用法
```javascript
Dx.create({
  models: [],
  middlewares: [],
  sagaMiddlewares: [],
  reducerEnhancer: [],
  sentinels: [],
  disguisers: [],
  guards: []
})
```

## Dx.createStore

与 `Dx.create` 参数一样，唯一的区别是 `Dx.createStore` 返回 redux 的 store

## DxModel

所有  model 的父类，封装了所有 saga 的 effect

- 用法
```javascript
class UserModel extends DxModel {
  state = {}
}
```

# @dxjs/common

## Effect

effect 装饰器

- 用法
```javascript
class UserModel extends DxModel {
  @Effect()
  @Effect(TakeEvery)
  @Effect("actionType", TakeEvery)
  @Effect(Throttle, 350)
  @Effect("actionType", Throttle, 350)
  *getUserInfo() {}
}
```


## Reducer

reducer 装饰器

- 用法
```javascript
class UserModel extends DxModel {
  @Reducer()
  @Reducer("actionType")
  updateUserInfo() {}
}
```

## Label

标记

- 用法
```javascript
class UserModel extends DxModel {
  @Label("a", "b", "c")
  updateUserInfo() {}
}
```

## TakeEvery

effect helper

- 用法
```javascript
class UserModel extends DxModel {
  @Effect(TakeEvery)
  updateUserInfo() {}
}
```

## TakeLeading

effect helper

- 用法
```javascript
class UserModel extends DxModel {
  @Effect(TakeLeading)
  updateUserInfo() {}
}
```

## TakeLatest

effect helper

- 用法
```javascript
class UserModel extends DxModel {
  @Effect(TakeLatest)
  updateUserInfo() {}
}
```

## Throttle

effect helper

- 用法
```javascript
class UserModel extends DxModel {
  @Effect(Throttle)
  updateUserInfo() {}
}
```


