# 01｜为什么能跑的 Agent 还远远不够

本地 Demo 最容易给人一种错觉。

你写了一个 Tool Loop，模型会查资料、改文件、跑测试，看起来已经像一个完整 Agent。

直到它第一次真正出错。

## Demo 里的隐含假设

很多最小 Agent 默认：

- Tool 永远成功；
- 文件不会冲突；
- 网络不会超时；
- 模型会自己停；
- Context 不会爆；
- 进程不会中断；
- 权限永远正确；
- 一次错误不会造成不可逆副作用。

现实系统里，这些假设几乎都会被打破。

## Harness 做的是“运行时治理”

模型负责判断。

Agent Loop 负责行动。

Harness 负责让这套行动发生在一个有规则的环境里。

例如：

~~~text
Model wants: delete_file("/prod/config")
        ↓
Permission Check
        ↓
Sandbox / Scope Check
        ↓
Approval?
        ↓
Execute
        ↓
Audit Log
        ↓
State Update
~~~

真正的生产系统不能只有中间那一步 Execute。

## Harness 不等于框架

某个 SDK 可以提供 Harness 能力，但 Harness 是更底层的设计问题。

即使全部自己写，也仍然要处理权限、超时、重试、状态、恢复和审计。

## 地图坐标

这一章只建立一个边界：

**Agent 决定做什么；Harness 决定它怎样被允许、执行、限制、记录和恢复。**
