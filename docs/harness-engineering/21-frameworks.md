# 21｜Harness 和 Agent Framework 到底是什么关系

学到这里，再看 Agent Framework 会简单很多。

框架通常会帮你封装一部分：

- Loop；
- Tool Dispatch；
- State；
- Checkpoint；
- Tracing；
- Handoff；
- Guardrail。

但不同框架负责的边界不同。

## 不要问“哪个框架最好”

先问：

> 我需要哪些 Runtime Guarantees？

例如：

- 必须 durable execution；
- 必须 approval；
- 必须自定义 sandbox；
- 必须跨进程 resume；
- 必须 trace；
- 必须多 Agent。

然后判断框架覆盖多少。

## SDK 也不会替你做完所有 Harness

即使框架支持 Retry，你仍然要定义：

- 哪类错误重试；
- Tool 是否幂等；
- 最大次数；
- 副作用如何确认。

即使支持 Guardrail，你仍然要定义真实业务边界。

## 框架的价值

不是省掉理解。

而是把已经理解的原语交给成熟实现。

当你知道 Permission、Persistence、Recovery 各自是什么，换框架时只是找对应能力。

真正值得比较的也不是 API 是否“顺手”，而是它提供哪些 **runtime guarantees**：暂停/恢复是否安全、tool approval 是否可持久化、trace 是否足够还原、state ownership 是否清楚、故障后会不会静默重放副作用。

## 地图坐标

Agent Framework 是 Harness 能力的实现载体之一。

Harness Engineering 是不依赖具体框架的设计能力。
