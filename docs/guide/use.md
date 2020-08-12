---
title: 使用
sidebarDepth: 3
---

尝试 Dxjs 最简单的方式就是写一个 [Hello World 例子](https://github.com/taixw2/dxjs/tree/master/examples/)

## 基础用法

### Dx.create

要让 `React-Redux` 工作，需要在跟节点上添加一个 `Provider` 组件, [Dxjs](https://github.com/taixw2/dxjs/) 封装了这个组件，尽可能让你少接触更多的状态管理库。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Dx } from "@dxjs/core";
import App from "./src";

const DxApp = Dx.create();
ReactDOM.render(
  <DxApp>
    <App />
  </DxApp>,
  document.getElementById("root")
);
```

`Dx.create` 返回一个包含 `Provider` 的组件, 也可以直接使用 `Dx.createStore` 直接返回 `redux` 的 `store`

### DxModel

`DxModel` 封装了所有的 `react-saga` 的方法，在 model 中通过 this 访问

```typescript
import { Dx, DxModel } from "@dxjs/core";
import { Reducer, TakeEvery } from "@dxjs/common";

@Dx.collect()
export class UserModel extends DxModel {
  state = {
    count: 0,
  };

  @Reducer()
  update(payload) {
    this.state.count = 0;
    return { ...this.state };
  }

  @Effect(TakeEvery)
  *updateEffect(payload) {
    yield this.put(UserModel.update(payload, false));
  }
}
```

1. state 始终会保持最新的状态，通过 `this.state` 状态进行修改并不会直接影响高类中的状态，按照 `react-redux` 的惯例，需要返回一个新的 state 状态才会改变, 所以为了保持一致，每次在访问 `this.state` 之前， `this.state` 的值都会更新成当前 redux 中的 state
2. 通过装饰器标识 reducer 与 effect
3. action 被挂载类的静态方法上: `UserModel.update` 能够触发 `update reducer`
