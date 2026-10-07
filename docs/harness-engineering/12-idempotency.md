# 12｜Idempotency：重放同一个动作不能造成第二次伤害

Agent 系统最危险的一类问题，不是 Action 失败。

而是：

> Action 其实成功了，但系统以为失败，于是又执行一次。

付款、发消息、创建资源都可能遇到。

## 不要先追求“Exactly Once”

分布式系统里，很难只靠客户端保证一个外部副作用“恰好执行一次”。网络超时、进程崩溃和重放都会打破这种幻想。

更实际的目标是：**允许请求被重放，但同一个业务 operation 不产生第二次效果。** 这就是为什么 idempotency key、operation journal 和 reconcile 如此重要。

## 什么是 Idempotent Action

同一个操作重复执行，最终状态仍然一样。

例如：

~~~text
set_user_status(user, "active")
~~~

通常比：

~~~text
increment_credit(user, 100)
~~~

更容易做到幂等。

## 常见实现

### Idempotency Key

每个业务动作带唯一 key。

服务端识别重复请求。

### Read-before-write

写之前先检查目标状态。

### Compare-and-set

只有状态满足前置条件时才更新。

### Operation Journal

记录某个动作是否已经提交。

## Agent Harness 为什么特别需要

Agent 天然有：

- Retry；
- Resume；
- Replan；
- Tool Timeout。

这些机制都可能导致 Action 被重新触发。

没有 Idempotency，Recovery 本身可能制造事故。

## 地图坐标

Idempotency 位于 **Recovery + Persistence + Action Safety**。

它让“可以重试、可以恢复”不会自动变成“可能重复副作用”。对于无法天然幂等的动作，则至少需要唯一 operation id、结果查询和补偿路径。
