# 19｜Error Recovery：工具失败以后怎么办

真实 Agent 不可能假设每个 Action 都成功。

网络会超时，API 会限流，参数会错，文件会被别人修改，浏览器页面会变化。

错误恢复必须进入 Loop。

但这里要先划清边界：本章讨论的是 **Agent 如何根据失败选择下一步策略**；Harness 章节会处理重试上限、幂等、超时、状态对账等必须由运行时保证的机制。

## 先区分错误类型

### Transient

临时网络失败、限流、服务繁忙。

可能适合重试。

### Invalid Input

参数错误、Schema 不合法。

应该修参数，而不是原样重试。

### Permission

没有权限。

需要审批、换路径或停止。

### Business Failure

动作执行了，但业务条件不满足。

例如库存不足。

### Unknown

无法判断。

应该保留证据并升级，而不是无限重试。

## Retry 必须有条件

“失败就重试三次”只是最粗的策略。

更好的结构：

~~~text
Failure
↓
Classify
↓
Retry / Repair / Replan / Ask Human / Stop
~~~

## Agent 不应该猜“副作用到底发生没有”

如果一个写操作超时，Agent 往往只能看到“没有收到结果”。这并不等于动作失败。

正确做法通常是先通过状态查询或 operation id **对账（reconcile）**，再决定继续、补偿还是停止。把“不知道”误当成“失败”，是重复副作用的常见来源。

## 写操作要考虑 Idempotency

如果支付请求超时，你不知道服务端是否已经成功扣款。

这时直接重试可能造成重复付款。

所以高风险 Action 必须考虑：

- idempotency key；
- 状态查询；
- 补偿动作；
- 可回滚性。

## 错误本身要进入 Observation

模型需要知道：

- 哪里失败；
- 错误是什么；
- 已经重试几次；
- 哪些方案已经试过。

否则 Loop 会不断重复同一种失败。

## Agent Recovery 与 Harness Recovery

Agent 可以决定：换参数、换工具、重新规划、请求人类帮助。

Harness 则负责保证：重试有上限、写操作可安全重放、超时可取消、Resume 不会重复副作用。

前者偏策略，后者偏运行保证。

## 地图坐标

Error Recovery 横跨 **Observation → Feedback → Decision → Action**。

它是从 Demo 走向真实 Agent 的分界线之一。
