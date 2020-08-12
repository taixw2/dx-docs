---
home: true
heroImage: https://hudson-bucket.oss-cn-shenzhen.aliyuncs.com/localhomeqy/huhulogo/Logo1.png
heroText: 
actionText: Get Started →
actionLink: /guide/
features:
  - title: 基于类的方式组织 Model
    details: 🤡👺
  - title: 插件机制
    details: 🥰👏
  - title: 无冲突的 ActionType
    details:  🐛🦾
  - title: 易使用
    details:  🛠🔧
  - title: 功能齐全
    details:  🔍📕
footer: MIT Licensed | Copyright © 2018-present Mro
---

## 开始使用

> src/index.ts

```javascript
import React from 'react';
import { Dx } from '@dxjs/core';
import App from './app';
import './user.model.ts';

const DxApp = Dx.create();
ReactDOM.render(
  <DxApp>
    <App />
  </DxApp>,
  document.getElementById('root'),
);
```

> src/user.model.ts

```javascript
import { DxMoel, Dx } from '@dxjs/core';
import { Reducer, Effect } from '@dxjs/common';
import { Take, Takelatest } from '@dxjs/saga';
import services from '../services';

export interface IUserModelState {
  id: string;
  nickname: string;
}

@Dx.collect()
export default class UserModel extends DxModel<IUserModelState> {
  state = {
    id: '',
    nickname: '',
  };

  @Reducer()
  updateNickname(payload: string) {
    this.state.nickname = payload;
  }

  @Effect("name", Takelatest)
  *getUserInfo(payload: string) {
    const userInfo = yield this.$call(services.getUserInfo);
    UserModel.updateNickname(userInfo.nickname)
  }
}
```

> src/app.ts

```javascript
import React from 'react';
import { Dx } from '@dxjs/core';
import UserModel from './user.model.ts';

const mapStateToProps = state => {
  return {
    id: state.UserModel.id,
  };
};

@connect(mapStateToProps)
export default class App extends React.Component {
  componentDidMount() {
    // 返回 action, 不 dispatch
    UserModel.updateNickname('username')
  }
}
```

#### 更多 demo
[https://github.com/taixw2/dxjs/tree/master/examples](https://github.com/taixw2/dxjs/tree/master/examples)
