# 11｜Persistence：保存状态只是第一步，恢复才是真正的考验

把 State 写进数据库并不等于任务可恢复。

真正的 Resume 需要回答：

> 系统重新启动后，怎样知道该从哪一步继续，而且不会把已经执行过的副作用再做一次？

## Persistence 的几类对象

### Task State

当前目标、计划、步骤、阻塞。

### Conversation / Context State

需要继续携带的上下文。

### Artifacts

文件、报告、代码变更、检索结果。

### Execution Metadata

Tool Calls、状态、时间、版本、预算。

## Resume 最大的风险：重复执行

假设 Agent：

1. 成功发送邮件；
2. 还没写 Checkpoint 就崩溃。

恢复后如果只看到“当前步骤 = send_email”，它可能再发一次。

这就是 Persistence 必须和 Idempotency 一起设计的原因。

## 恢复前先 Reconcile

Restart 时可以先检查：

- 上一步 Action 是否已经生效；
- 外部资源当前状态；
- Checkpoint 是否完整；
- Context 是否已经过期；
- 任务是否仍然有效。

Resume 不是机械从行号继续。

它是一次状态对账。

## 地图坐标

Persistence 让 State 跨进程、跨时间存在。

Recovery 决定重新进入 Loop 前怎样校准这个 State。
