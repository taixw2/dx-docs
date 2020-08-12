---
title: 插件
sidebarDepth: 3
---

## 创建插件

插件就是一个函数，函数中能够通过 context 将操作加到对应的钩子上, 从而在特定时机被调用

```javascript
// example: 集成 immer
import produce from "immer";

export default function(context: any): void {
  context.hooks("reducer", produce);
}
```

## Hooks

钩子能够让您在不同的阶段处理一些逻辑

### beforeReducer

- 参数: object

  - state: 开始执行 reducer 前的 state
  - action: 执行本次 reducer 的 action
  - model: 当前 reducer 所在的 model

#### 使用：

```javascript
export default function(dx: any): void {
  dx.hooks("beforeReducer", function(context) {
    // context: { state, action, model }
  });
}
```

<hr />

### reducer

- 参数: function
  - reducer: 获取到定义时的 reducer

#### 使用：

```javascript
export default function(context: any): void {
  context.hooks("reducer", function(reducer) {
    return (state, action) => {
      return reducer(state, action);
    };
  });
}
```

<hr />

### afterReducer

- 参数: object

  - state: 开始执行 reducer 前的 state
  - action: 执行本次 reducer 的 action
  - model: 当前 reducer 所在的 model

#### 使用：

```javascript
export default function(context: any): void {
  context.hooks("afterReducer", function(reducer) {
    // context: { state, action, model }
  });
}
```

<hr />

### beforeEffect

- 参数: object

  - abort: 修改这 abort 为 true, 能够中断 effect 执行
  - action: 执行本次 reducer 的 action
  - model: 当前 reducer 所在的 model
  - getState: 获取 state
  - dispatch: 调用 dispatch
  - meta: 当前 effect 的一些信息
    - name: 方法名
    - helperType: saga 的 helper
    - actionType:

#### 使用：

```javascript
export default function(context: any): void {
  context.hooks("beforeEffect", function(context) {
    // 在判断是否有权调用这个 action 的情况非常有用
    context.abort = true;
  });
}
```

<hr />

### effect

- 参数: object

  - context
    - action: 执行本次 reducer 的 action
    - model: 当前 reducer 所在的 model
    - getState: 获取 state
    - dispatch: 调用 dispatch
    - meta: 当前 effect 的一些信息
      - name: 方法名
      - helperType: saga 的 helper
      - actionType:
  - ref
    - next 让 effect 执行到下一个 yield
    - abort 中断这个 effect
    - throw 让 effect 抛出异常
    - isDone ref 是否已经结束

#### 使用：

```javascript
export default function(context: any): void {
  // Effect 钩子必须是一个 Generator 函数
  context.hooks("effect", function*(context, ref) {
    // 必须使用 yield
    yield* ref.next();

    while (ref.isDone()) {
      yield* ref.next();
    }
  });
}
```

<hr />

### afterEffect

- 参数: object

  - action: 执行本次 reducer 的 action
  - model: 当前 reducer 所在的 model
  - getState: 获取 state
  - dispatch: 调用 dispatch
  - meta: 当前 effect 的一些信息
    - name: 方法名
    - helperType: saga 的 helper
    - actionType:

#### 使用：

```javascript
export default function(context: any): void {
  context.hooks("afterEffect", function(context) {
    // 在判断是否有权调用这个 action 的情况非常有用
    context.abort = true;
  });
}
```
