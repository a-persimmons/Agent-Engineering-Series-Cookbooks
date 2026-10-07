# 17｜Context 与 Harness Eval：不要只看答案层

前两册已经说明：

- Context 可能缺、噪声多、冲突、过期；
- Harness 可能越权、超时、恢复失败、重复副作用。

这些都应该被单独评。

## Context Eval

可以测试：

- Need 是否识别正确；
- Retrieval 是否找到关键证据；
- 无关信息是否过多；
- 新旧事实冲突时是否选对；
- Compaction 后关键状态是否保留。

## Harness Eval

可以故意制造：

- 越权路径；
- Tool Timeout；
- 进程 Crash；
- Retry；
- Resume；
- Approval Deny；
- Budget Exhaustion；
- 重复副作用。

目标不是看“Agent 还能不能勉强完成”。

而是：

> 坏情况下，系统会不会按设计失败？

## Failure Injection 很有价值

一个 Harness 从没经历过 Crash，不代表它支持恢复。

一个 Permission 系统从没被主动越权测试，不代表它安全。

可靠性要通过故障演练证明。

## 地图坐标

Evaluation 不只是输出层 Judge。

它应该覆盖 Prompt、Context、Agent、Harness 每一层可以独立失败的机制。
