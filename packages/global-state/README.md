
# GLOBAL STATE
### 什么是Global state？
Global state是micro-react的一部分，用来共享state，方便微应用之间相互调用，目前Global state仅仅是设计用来存取状态，具体state的设计还是只和相关App相关。

### API
> State: mobx-state-tree#model()

> getState(name: string): State;

> registerState(name: string, state: State): State;

> getAllStates(): States;

### TODO
1. registerState注册重名管理
2. getState获取失败处理

