# 14｜Observability：为了理解系统发生了什么

Observability 首先服务于调试和运营。

问题是：

> 这一次任务为什么走成了现在这样？


![Observability 与 Audit 的职责差异](/diagrams/harness/observability-audit.svg)

## 一条有用的 Agent Trace

通常需要：

- Task / Run ID；
- Model；
- Context 版本；
- Decision；
- Tool；
- 参数；
- Permission / Validation 结果；
- Observation；
- State Diff；
- Retry；
- Cost；
- Duration；
- Stop Reason。

它要能把一次任务串起来。

## Trace 与普通组件日志的区别

传统日志可能分散在：

- API；
- Tool；
- Worker；
- Database。

Agent Trace 更强调一条行为链：

~~~text
Goal
→ Decision
→ Tool
→ Result
→ State Change
→ Next Decision
~~~

因此统一关联 ID 很重要。

## Observability 不等于“什么都记录”

完整保存每个 Prompt、文件和 Tool Result 可能带来新的隐私和安全问题。

要设计：

- redact；
- sampling；
- retention；
- sensitive fields；
- access control。

## 这一章关注“看懂运行”

下一章 Audit 会处理另一个问题：

> 哪些高风险行为必须留下可追责、不可轻易篡改的记录？

二者目标不同。

## 地图坐标

Observability 让 Harness 的运行过程可理解。

它是 Debug、Eval 和 Recovery 的基础数据层。
