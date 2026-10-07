# 08｜Retry：只解决“值得再试一次”的失败

Retry 很容易被写成：

~~~text
失败 → 再试三次
~~~

这不是恢复策略，只是把同一个动作重复几遍。

Retry 真正适合的是一类很窄的问题：

> **动作本身仍然正确，只是这一次执行条件暂时不好。**


![Timeout、Retry 与 Reconcile](/diagrams/harness/retry-reconcile.svg)

## 什么时候适合 Retry

例如：

- 网络瞬时失败；
- 429 限流；
- 服务短暂不可用；
- 短时锁冲突。

这类错误通常不会改变 Action 本身。

可以：

~~~text
Transient Failure
↓
Backoff
↓
Retry
~~~

## 什么时候不该 Retry

### Invalid Input

参数错了。

应该 Repair。

### Permission

权限不够。

应该 Approval、换路径或停止。

### Business Failure

库存不足、状态不允许。

重试不会改变业务事实。

### Side Effect Unknown

请求超时，但不知道外部动作是否已经成功。

必须先对账。

## Retry 本身也要有预算

至少控制：

- max attempts；
- total retry time；
- backoff；
- jitter；
- total cost。

否则“临时失败”也可能拖死整个任务。

当同一个外部依赖持续失败时，还要考虑 **circuit breaker / fail-fast**：与其让几十个 Agent 同时重试一个已经不可用的服务，不如暂时熔断，把失败尽快反馈给上层。

## 这一章只解决 Retry

更大的问题：

> Retry 不合适时，系统要 Repair、Replan、Rollback、Pause 还是 Abort？

留到第 13 章 Recovery。

## 地图坐标

Retry 是 **Recovery** 中的一种具体策略。它解决执行条件暂时不佳，不解决错误动作、错误计划和未知副作用。

它的适用范围应该很窄，而不是默认错误处理。
