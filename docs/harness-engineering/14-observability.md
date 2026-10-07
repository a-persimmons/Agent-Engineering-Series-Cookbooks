# 14｜Observability：出问题时，你能不能回答“它到底做了什么”

Agent 系统最糟糕的事故描述之一：

> 不知道为什么，它自己就这么做了。

如果生产系统只能保存最终回答，这几乎必然发生。

## Harness 至少要记录一条执行 Trace

每一步：

- Run / Task ID；
- Agent / Model；
- Context 版本；
- Decision；
- Tool；
- 参数；
- Validation；
- Permission；
- Observation；
- State 变化；
- Retry；
- Cost；
- Duration；
- Stop Reason。

## Trace 和普通日志不完全一样

普通日志经常围绕程序组件。

Agent Trace 更强调**一次任务轨迹**。

你需要能从任务入口一路看到：

~~~text
Goal
→ Decision
→ Tool
→ Result
→ State
→ Next Decision
~~~

## 关联 ID 很重要

长任务、多 Agent、后台 Tool 如果没有统一 Trace ID，很难把分散日志拼回来。

## 敏感数据要处理

Observability 不能变成数据泄漏源。

记录前要考虑：

- PII；
- Secret；
- Token；
- 用户文件；
- 业务敏感字段。

有时需要 redact，而不是完整保存。

## 地图坐标

Observability 让 Harness 的其他机制可见。

没有 Trace，Permission、Retry、Recovery 出错后都很难诊断。
